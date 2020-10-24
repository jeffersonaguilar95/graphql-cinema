import Chance from 'chance';
import Movie from '../modules/Movies/movie.model';
import { Language } from '../common/generatedTypes';

const chance = new Chance();

const languagesKeys = Object.keys(Language);

const languagesCount = languagesKeys.length;

function generateFakeLanguage() {
  return Language[languagesKeys[chance.integer({ min: 0, max: languagesCount - 1 })]];
}

function generateFakeDubbingLanguages(originalLanguage) {
  const dubbingLanguages = new Set([originalLanguage]);

  Array(chance.integer({ min: 0, max: languagesCount - 1 }))
    .fill(undefined)
    .forEach(() => dubbingLanguages.add(generateFakeLanguage()));

  dubbingLanguages.delete(originalLanguage);

  return Array.from(dubbingLanguages);
}

function generateFakeGenre(genres) {
  const genresCount = genres.length;
  return genres[chance.integer({ min: 0, max: genresCount - 1 })]._id;
}

function generateFakeDirector(directors) {
  const directorsCount = directors.length;

  return directors[chance.integer({ min: 0, max: directorsCount - 1 })]._id;
}

function generateFakeActors(actors) {
  const actorsIds = new Set();
  const actorsCount = actors.length;

  Array(chance.integer({ min: 5, max: 20 }))
    .fill(undefined)
    .forEach(() => actorsIds.add(actors[chance.integer({ min: 0, max: actorsCount - 1 })]._id));

  return Array.from(actorsIds);
}

function generateFakeMovies(genres, actors, directors) {
  return Array(chance.integer({ min: 1000, max: 2000 }))
    .fill(undefined)
    .map(() => {
      const year = chance.year({ max: new Date().getFullYear() });
      const originalLanguage = generateFakeLanguage();

      return {
        title: chance.sentence({ words: chance.integer({ min: 2, max: 7 }) }),
        releaseDate: chance.date({ year }),
        releaseYear: year,
        description: chance.paragraph(),
        shortDescription: chance.sentence(),
        originalLanguage,
        dubbingLanguages: generateFakeDubbingLanguages(originalLanguage),
        rating: chance.floating({ fixed: 2, min: 1, max: 5 }),
        duration: chance.integer({ min: 3600, max: 9000 }), // min: 1 hour, max: 2.5 hours
        genre: generateFakeGenre(genres),
        director: generateFakeDirector(directors),
        actors: generateFakeActors(actors)
      };
    });
}

export default function moviesSeeder(genres, actors, directors) {
  return Movie.insertMany(generateFakeMovies(genres, actors, directors));
}
