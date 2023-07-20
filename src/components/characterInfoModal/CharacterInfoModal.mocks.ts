import { ICharacterInfo } from './CharacterInfo';

const base: ICharacterInfo = {
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    image: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    image: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
};

export const mockCharacterInfoProps = {
  base,
};
