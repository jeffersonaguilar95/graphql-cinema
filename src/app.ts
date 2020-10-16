import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import apolloServer from './graphqlRouter';

const app = express();

apolloServer.applyMiddleware({ app });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
