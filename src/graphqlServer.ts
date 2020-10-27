import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';
import { addResolversToSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { makeExecutableSchema } from '@graphql-tools/schema';

dotenv.config();

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

// Initialize Apollo server
const apolloServer: ApolloServer = new ApolloServer({
  schema: schemaWithResolvers,
  playground: {
    endpoint: '/graphql'
  }
});

export default apolloServer;
