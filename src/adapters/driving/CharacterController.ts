import CharacterService, {
  ICharacterService,
} from '@/domain/inboundPorts/CharacterService';
import { ISearchFilter } from './ISearchFilter';

const CharacterController: ICharacterService = {
  listCharacters: async (filter?: ISearchFilter) => {
    const characters = await CharacterService.listCharacters(filter);

    return characters;
  },
  findCharacter: async (characterId: number) => {
    const character = await CharacterService.findCharacter(characterId);

    return character;
  },
};

export default CharacterController;
