import { Resolvers, QueryResolvers, MutationResolvers, MovieResolvers } from '../../common/generatedTypes';
import Movie from './movie.model';
import Genre from '../Genres/genre.model';

const movies: QueryResolvers['movies'] = async (_, { page = 1, limit = 10 }) => {
  const results = await Movie.find({}, {}, { skip: limit * page, limit }).exec();

  return {
    results,
    info: {}
  };
};

const createMovie: MutationResolvers['createMovie'] = (_, { movie }) => {
  return Movie.create(movie);
};

const genre: MovieResolvers['genre'] = ({ genre: genreId }) => {
  return Genre.findOne({ _id: genreId });
};

const resolvers: Resolvers = {
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

export default resolvers;
