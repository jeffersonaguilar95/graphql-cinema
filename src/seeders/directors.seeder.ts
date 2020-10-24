import Chance from 'chance';
import Director from '../modules/Directors/director.model';

const chance = new Chance();

function generateFakeGenres(genres) {
  const genresIds = new Set();
  const genresCount = genres.length;

  Array(chance.integer({ min: 1, max: 7 }))
    .fill(undefined)
    .forEach(() => genresIds.add(genres[chance.integer({ min: 0, max: genresCount - 1 })]._id));

  return Array.from(genresIds);
}

function generateFakeDirectors(genres) {
  return Array(chance.integer({ min: 500, max: 700 }))
    .fill(undefined)
    .map(() => {
      const gender = chance.gender().toLowerCase();
      const birthName = chance.name({ middle: true, suffix: true, gender });
      const [name, , lastName] = birthName.split(' ');

      return {
        name: `${name} ${lastName}`,
        birthName: birthName,
        birthDate: chance.birthday(),
        birthPlace: chance.city(),
        gender: gender,
        genres: generateFakeGenres(genres)
      };
    });
}

export default function directorsSeeder(genres) {
  return Director.insertMany(generateFakeDirectors(genres));
}
