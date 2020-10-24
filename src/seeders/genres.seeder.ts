import Genre from '../modules/Genres/genre.model';

const GENRES = [
  {
    type: 'Absurdist/surreal/whimsical'
  },
  {
    type: 'Action'
  },
  {
    type: 'Adventure'
  },
  {
    type: 'Comedy'
  },
  {
    type: 'Crime'
  },
  {
    type: 'Drama'
  },
  {
    type: 'Fantasy'
  },
  {
    type: 'Historical'
  },
  {
    type: 'Horror'
  },
  {
    type: 'Magical realism'
  },
  {
    type: 'Mystery'
  },
  {
    type: 'Paranoid fiction'
  },
  {
    type: 'Philosophical'
  },
  {
    type: 'Political'
  },
  {
    type: 'Romance'
  },
  {
    type: 'Saga'
  },
  {
    type: 'Satire'
  },
  {
    type: 'Science fiction'
  },
  {
    type: 'Social'
  },
  {
    type: 'Speculative'
  },
  {
    type: 'Thriller'
  },
  {
    type: 'Urban'
  },
  {
    type: 'Western'
  }
];

export default function genresSeeder() {
  return Genre.insertMany(GENRES);
}
