import path from 'path';
import dotenv from 'dotenv';
import redis from 'redis';
import mongoose from 'mongoose';
import { ApolloError } from 'apollo-server-express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';
import { addResolversToSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { makeExecutableSchema } from '@graphql-tools/schema';

dotenv.config();

const redisClient = redis.createClient({ enable_offline_queue: false });

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/cinema', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'), { recursive: true });

const schema = makeExecutableSchema({
  typeDefs: [DIRECTIVES, mergeTypeDefs(typesArray)]
});

const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolvers.*'), { recursive: true });

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: mergeResolvers(resolversArray)
});

const rateLimiter = new RateLimiterRedis({ storeClient: redisClient, points: 3000, duration: 3600 });

// Initialize Apollo server
const apolloServer: ApolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  playground: {
    endpoint: '/graphql'
  },
  introspection: true,
  context: async ({ req }) => {
    try {
      await rateLimiter.consume(req.ip, 1);
    } catch (e) {
      console.log('e----', e);
      throw new ApolloError('You exceed the requests limit for today, see you tomorrow!');
    }
  }
});

export default apolloServer;
