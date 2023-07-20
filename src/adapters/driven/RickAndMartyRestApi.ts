import { ICharacter } from "@/domain/models/ICharacter";
import { ICharacterRepository } from "@/domain/outboundPorts/CharacterRepository";
import { ICharacterRestApiResponse } from "./ICharacterRestApiResponse";

const RickAndMartyRestApi: ICharacterRepository = {
  getAllCharacters: async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: ICharacterRestApiResponse = await res.json();

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

    return characters;
  },
  getCharacterById: function (_id: number): Promise<ICharacter> {
    throw new Error("Function not implemented.");
  },
};

export default RickAndMartyRestApi;
