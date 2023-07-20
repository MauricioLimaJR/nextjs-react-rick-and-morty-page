import { ICharacter } from '@/domain/models/Character';
import { ICharacterRepository } from '@/domain/outboundPorts/CharacterRepository';
import { ICharacterApiResponse } from './ICharacterApiResponse';

const RickAndMartyAp: ICharacterRepository = {
  getAllCharacters: async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data: ICharacterApiResponse = await res.json();

    const characters = data.results.map(
      (character) =>
        ({
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          type: character.type,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location.name,
          image: character.image,
          episode: character.episode,
        }) as ICharacter
    );

    console.log(characters);

    return characters;
  },
};

export default RickAndMartyAp;
