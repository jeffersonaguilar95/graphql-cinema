import { Resolvers, QueryResolvers, MutationResolvers, ActorResolvers } from '../../common/generatedTypes';
import { generateInfo } from '../../common/utils';
import Movie from '../Movies/movie.model';
import Actor from './actor.model';

const actor: QueryResolvers['actor'] = (_, { id }) => {
  return Actor.findById(id).exec();
};

const actors: QueryResolvers['actors'] = async (_, { page = 1, limit = 10 }) => {
  const results = await Actor.find({}, {}, { skip: limit * (page - 1), limit }).exec();
  const info = await generateInfo(Actor, page, limit);

  return {
    results,
    info
  };
};

const createActor: MutationResolvers['createActor'] = async (_, { actor: { movies, ...restActor } }) => {
  const savedActor = await Actor.create({ type: 'actor', ...restActor });
  if (movies?.length) {
    await Movie.updateMany({ _id: { $in: movies } }, { $push: { actors: savedActor._id } }).exec();
  }
  return savedActor;
};

const movies: ActorResolvers['movies'] = ({ _id }) => {
  return Movie.find({ actors: _id }).exec();
};

const resolvers: Resolvers = {
  Query: {
    actor,
    actors
  },
  Mutation: {
    createActor
  },
  Actor: {
    movies
  }
};

export default resolvers;
