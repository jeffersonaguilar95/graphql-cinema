import Chance from 'chance';
import Actor from '../modules/Actors/actor.model';

const chance = new Chance();

function generateFakeActors() {
  return Array(chance.integer({ min: 500, max: 700 }))
    .fill(undefined)
    .map(() => {
      const gender = chance.gender().toLowerCase();
      const birthName = chance.name({ middle: true, suffix: true, gender });
      const [name, , lastName] = birthName.split(' ');
      const nicknames = Array(chance.integer({ min: 1, max: 5 }))
        .fill(undefined)
        .map(() => chance.word());

      return {
        name: `${name} ${lastName}`,
        birthName: birthName,
        birthDate: chance.birthday(),
        birthPlace: chance.city(),
        gender: gender,
        nicknames,
        heightCentimeters: chance.integer({ min: 155, max: 200 })
      };
    });
}

export default function actorsSeeder() {
  return Actor.insertMany(generateFakeActors());
}
