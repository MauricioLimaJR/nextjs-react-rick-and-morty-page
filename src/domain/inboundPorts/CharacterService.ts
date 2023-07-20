import RickAndMartyQueryApi from '@/adapters/driven/RickAndMartyQueryApi';
import { ICharacter } from '../models/ICharacter';
import { ICharacterPreview } from '../models/ICharacterPreview';

export interface ICharacterService {
  listCharacters(): Promise<ICharacterPreview[]>;
  findCharacter(_id: number): Promise<ICharacter | null>;
}

const CharacterService: ICharacterService = {
  listCharacters: async () => {
    const characters = await RickAndMartyQueryApi.getAllCharacters();

    return characters;
  },
  findCharacter: async (characterId: number) => {
    const characters = await RickAndMartyQueryApi.getCharacterById(characterId);

    return characters;
  },
};

export default CharacterService;
