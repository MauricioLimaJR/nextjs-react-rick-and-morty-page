import CharacterService, {
  ICharacterService,
} from '@/domain/inboundPorts/CharacterService';

const CharacterController: ICharacterService = {
  listCharacters: async () => {
    const characters = await CharacterService.listCharacters();

    return characters;
  },
  findCharacter: async (characterId: number) => {
    const character = await CharacterService.findCharacter(characterId);

    return character;
  },
};

export default CharacterController;
