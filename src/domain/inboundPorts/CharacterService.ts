import RickAndMartyQueryApi from '@/adapters/driven/RickAndMartyQueryApi';
import { ICharacterPreview } from '../models/ICharacterPreview';

interface ICharacterService {
  listCharacters(): Promise<ICharacterPreview[]>;
  //   findCharacter(_id: number): Promise<ICharacter | null>;
}

const CharacterService: ICharacterService = {
  listCharacters: async () => {
    const characters = await RickAndMartyQueryApi.getAllCharacters();

    return characters;
  },
};

export default CharacterService;
