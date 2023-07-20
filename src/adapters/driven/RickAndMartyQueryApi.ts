import { ICharacterPreview } from '@/domain/models/ICharacterPreview';
import { ICharacterRepository } from '@/domain/outboundPorts/CharacterRepository';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ICharacterQueryApiResponse } from './ICharacterQueryApiResponse';

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
      const data: ICharacterQueryApiResponse = res.data;

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
};

export default RickAndMartyQueryApi;
