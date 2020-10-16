import glob from 'fast-glob';
import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

// Compose schema using all graphql files
const schema = loadSchemaSync('./**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
});

// Get resolvers files paths
const resolversFiles = glob.sync(['./**/resolvers.ts'], { absolute: true });

// Get array of resolvers
const resolversArray = loadFilesSync(resolversFiles);

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: mergeResolvers(resolversArray)
});

// Initialize Apollo server
const apolloServer = new ApolloServer({
  schema: schemaWithResolvers
});

export default apolloServer;
