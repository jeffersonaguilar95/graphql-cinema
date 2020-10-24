import Movie from '../Movies/movie.model';
import Actor from './actor.model';

const actor = (_, { id }) => {
  return Actor.findById(id).exec();
};

const actors = async (_, { page = 1, limit = 10 }) => {
  const { docs: results, ...info } = await Actor.paginate({}, { page, limit });

  return {
    results,
    info
  };
};

const createActor = async (_, { actor: { movies, ...restActor } }) => {
  const savedActor = await Actor.create(restActor);
  if (movies?.length) {
    await Movie.updateMany({ _id: { $in: movies } }, { $push: { actors: savedActor._id } }).exec();
  }
  return savedActor;
};

const movies = ({ _id }) => {
  return Movie.find({ actors: _id }).exec();
};

export default {
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
