import Movie from '../Movies/movie.model';
import Genre from './genre.model';

const genres = () => {
  return Genre.find({});
};

const createGenre = (_, { genre }) => {
  return Genre.create({ type: genre.type });
};

const movies = ({ _id }) => {
  return Movie.find({ genre: _id });
};

export default {
  Query: {
    genres
  },
  Mutation: {
    createGenre
  },
  Genre: {
    movies
  }
};
