import Movie from '../Movies/movie.model';
import Genre from '../Genres/genre.model';
import Director from './director.model';

const director = (_, { id }) => {
  return Director.findById(id).exec();
};

const directors = async (_, { page = 1, limit = 10 }) => {
  const { docs: results, ...info } = await Director.paginate({}, { page, limit });

  return {
    results,
    info
  };
};

const createDirector = async (_, { director: { movies, ...restDirector } }) => {
  const savedDirector = await Director.create(restDirector);
  if (movies?.length) {
    await Movie.updateMany({ _id: { $in: movies } }, { $push: { directors: savedDirector._id } }).exec();
  }
  return savedDirector;
};

const movies = ({ _id }) => {
  return Movie.find({ directors: _id }).exec();
};

const genres = ({ genres }) => {
  return Genre.find({ _id: { $in: genres } }).exec();
};

export default {
  Query: {
    director,
    directors
  },
  Mutation: {
    createDirector
  },
  Director: {
    genres,
    movies
  }
};
