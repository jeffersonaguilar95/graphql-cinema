import express from 'express';
import apolloServer from './graphqlServer';

export const GRAPHQL_PATH = '/graphql';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', true);

apolloServer.applyMiddleware({ app, path: GRAPHQL_PATH });

app.get('*', (req, res) => {
  res.redirect(GRAPHQL_PATH);
});

export default app;
