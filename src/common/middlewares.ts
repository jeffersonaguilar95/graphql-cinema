import { RedisClient } from 'redis';
import { MergedResultMap } from '@graphql-tools/merge';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { isDevelopment } from '../app';

interface RateLimiterMiddlewareOptions {
  mergedResolvers: MergedResultMap;
  redisClient: RedisClient;
}

type RateLimiterMiddlewareResponse = (options: ExpressContext) => Promise<Error | void>;

export function rateLimiterMiddleware({
  mergedResolvers,
  redisClient
}: RateLimiterMiddlewareOptions): RateLimiterMiddlewareResponse {
  // Create Rate Limiter instance
  const rateLimiter = new RateLimiterRedis({ storeClient: redisClient, points: 300, duration: 3600 });

  return async ({ req }) => {
    const { operationName } = req.body;
    if (operationName !== 'IntrospectionQuery' && !isDevelopment) {
      if (Object.keys(mergedResolvers.Mutation).includes(operationName)) {
        throw new Error(
          `This is a public API with a free MongoDB instance, if you want to perform mutations, go ahead and clone the repo in your local machine :)`
        );
      }

      try {
        await rateLimiter.consume(req.ip, 1);
      } catch (e) {
        if (!(e instanceof Error)) {
          throw new Error(
            `You exceed the requests limit, you'll need to wait ${Math.floor(e.remainingPoints / 1000)}sec`
          );
        }
      }
    }
  };
}
