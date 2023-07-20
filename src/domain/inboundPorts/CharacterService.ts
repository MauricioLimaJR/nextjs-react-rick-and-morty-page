import RickAndMartyApi from '@/adapters/driven/RickAndMartyApi';
import { ICharacter } from '../models/Character';

interface ICharacterService {
  listCharacters(): Promise<ICharacter[]>;
  //   findCharacter(_id: number): Promise<ICharacter | null>;
}

const CharacterService: ICharacterService = {
  listCharacters: async () => {
    const characters = await RickAndMartyApi.getAllCharacters();

    return characters;
  },
};

export default CharacterService;
