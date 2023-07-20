import RickAndMartyQueryApi from '@/adapters/driven/RickAndMartyQueryApi';
import { ISearchFilter } from '@/adapters/driving/ISearchFilter';
import { ICharacter } from '../models/ICharacter';
import { ICharacterPreview } from '../models/ICharacterPreview';

export interface ICharacterService {
  listCharacters(_filter?: ISearchFilter): Promise<ICharacterPreview[]>;
  findCharacter(_id: number): Promise<ICharacter | null>;
}

const CharacterService: ICharacterService = {
  listCharacters: async (filter?: ISearchFilter) => {
    const characters = await RickAndMartyQueryApi.getAllCharacters(filter);

    return characters;
  },
  findCharacter: async (characterId: number) => {
    const characters = await RickAndMartyQueryApi.getCharacterById(characterId);

    return characters;
  },
};

export default CharacterService;
