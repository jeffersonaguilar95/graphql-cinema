import Movie from './movie.model';
import Genre from '../Genres/genre.model';

const movies = () => {
  return {
    results: Movie.find({})
  };
};

const createMovie = (_, { movie }) => {
  return Movie.create(movie);
};

const genre = ({ genre: genreId }) => {
  return Genre.findOne({ _id: genreId });
};

export default {
  Query: {
    movies
  },
  Mutation: {
    createMovie
  },
  Movie: {
    genre
  }
};
