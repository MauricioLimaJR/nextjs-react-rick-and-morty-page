import { ICharacter } from '@/domain/models/ICharacter';
import { ICharacterPreview } from '@/domain/models/ICharacterPreview';
import { ICharacterRepository } from '@/domain/outboundPorts/CharacterRepository';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {
  ICharacterQueryApiResponse,
  ICharactersQueryApiResponse,
} from './ICharacterQueryApiResponse';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const RickAndMartyQueryApi: ICharacterRepository = {
  getAllCharacters: async () => {
    try {
      const res = await client.query({
        query: gql`
          query {
            characters(page: 1) {
              info {
                count
              }
              results {
                id
                image
                name
                species
              }
            }
          }
        `,
      });
      const data: ICharactersQueryApiResponse = res.data;

      const characters = data.characters.results.map(
        (character: any) =>
          ({
            id: character.id,
            name: character.name,
            specie: character.species,
            image: character.image,
          }) as ICharacterPreview
      );

      return characters;
    } catch (error) {
      return [];
    }
  },
  getCharacterById: async (id) => {
    try {
      const res = await client.query({
        query: gql`
          query {
            character(id: ${id}) {
              id
              name
              status
              species
              type
              gender
              origin {
                name
              }
              location {
                name
              }
              image
              episode {
                episode
              }
            }
          }
        `,
      });

      const data: ICharacterQueryApiResponse = res.data;
      const character = data.character;
      const parsedCharacter = {
        id: character.id,
        name: character.name,
        status: character.status,
        specie: character.species,
        type: character.type,
        gender: character.gender,
        origin: character.origin.name,
        location: character.location.name,
        image: character.image,
        episode: character.episode.map((ep) => ep.episone),
      } as ICharacter;

      return parsedCharacter;
    } catch (err: any) {
      throw new Error('Something went wrong at getCharacterById.');
    }
  },
};

export default RickAndMartyQueryApi;
