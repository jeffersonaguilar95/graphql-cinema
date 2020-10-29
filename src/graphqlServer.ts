import path from 'path';
import redis from 'redis';
import mongoose from 'mongoose';
import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';
import { addResolversToSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { rateLimiterMiddleware } from './common/middlewares';

// Connect to redis DB
const redisClient = redis.createClient({
  enable_offline_queue: false,
  url: process.env.REDIS_DB_URL || 'redis://localhost:6379'
});

redisClient.on('error', function (error) {
  console.error('RedisDB error:', error);
});

// Connect to to mongoDB
mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost:27017/cinema', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Load graphql files
const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'), { recursive: true });

// generate schema
const schema = makeExecutableSchema({
  typeDefs: [DIRECTIVES, mergeTypeDefs(typesArray)]
});

// Load resolvers files
const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolvers.*'), { recursive: true });

// Merge array of resolvers
const mergedResolvers = mergeResolvers(resolversArray);

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: mergedResolvers
});

// Initialize Apollo server
const apolloServer: ApolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  playground: {
    endpoint: '/graphql'
  },
  introspection: true,
  context: rateLimiterMiddleware({ redisClient, mergedResolvers })
});

export default apolloServer;
