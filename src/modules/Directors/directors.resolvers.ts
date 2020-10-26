import { Resolvers, QueryResolvers, MutationResolvers, DirectorResolvers } from '../../common/generatedTypes';
import Movie from '../Movies/movie.model';
import Genre from '../Genres/genre.model';
import Director from './director.model';

const director: QueryResolvers['director'] = (_, { id }) => {
  return Director.findById(id).exec();
};

const directors: QueryResolvers['directors'] = async (_, { page = 1, limit = 10 }) => {
  const results = await Director.find({}, {}, { skip: limit * page, limit }).exec();

  return {
    results,
    info: {}
  };
};

const createDirector: MutationResolvers['createDirector'] = async (_, { director: { movies, ...restDirector } }) => {
  // @ts-ignore
  const savedDirector = await Director.create(restDirector);
  if (movies?.length) {
    await Movie.updateMany({ _id: { $in: movies } }, { $push: { directors: savedDirector._id } }).exec();
  }
  return savedDirector;
};

const movies: DirectorResolvers['movies'] = ({ _id }) => {
  return Movie.find({ directors: _id }).exec();
};

const genres: DirectorResolvers['genres'] = ({ genres }) => {
  return Genre.find({ _id: { $in: genres } }).exec();
};

const resolvers: Resolvers = {
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

export default resolvers;
