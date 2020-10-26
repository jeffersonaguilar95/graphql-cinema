import { Resolvers, QueryResolvers, MutationResolvers, GenreResolvers } from '../../common/generatedTypes';
import Movie from '../Movies/movie.model';
import Genre from './genre.model';

const genres: QueryResolvers['genres'] = () => {
  return Genre.find({});
};

const createGenre: MutationResolvers['createGenre'] = (_, { genre }) => {
  return Genre.create({ type: genre.type });
};

const movies: GenreResolvers['movies'] = (parent) => {
  return Movie.find({ genre: parent._id });
};

const resolvers: Resolvers = {
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

export default resolvers;
