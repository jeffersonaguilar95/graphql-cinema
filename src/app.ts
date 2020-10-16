import express from 'express';
import cookieParser from 'cookie-parser';
import apolloServer from './graphqlServer';

export const GRAPHQL_PATH = '/graphql';

const app = express();

apolloServer.applyMiddleware({ app, path: GRAPHQL_PATH });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('*', (req, res) => {
  res.redirect(GRAPHQL_PATH);
});

export default app;
