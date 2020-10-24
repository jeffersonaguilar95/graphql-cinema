import mongoose from 'mongoose';
import pino from 'pino';
import genresSeeder from './genres.seeder';
import actorsSeeder from './actors.seeder';
import directorsSeeder from './directors.seeder';
import moviesSeeder from './movies.seeder';

const logger = pino({
  prettyPrint: {
    levelFirst: true
  }
});

async function main() {
  logger.info('Starting connection with DB');
  await mongoose.connect('mongodb://localhost:27017/cinema', { useUnifiedTopology: true, useNewUrlParser: true });
  logger.info('Connection with DB succeed');
  logger.info('Seeding genres');
  const genres = await genresSeeder();
  logger.info('Seeding actors');
  const actors = await actorsSeeder();
  logger.info('Seeding directors');
  const directors = await directorsSeeder(genres);
  logger.info('Seeding movies');
  await moviesSeeder(genres, actors, directors);

  process.exit(0);
}

main();
