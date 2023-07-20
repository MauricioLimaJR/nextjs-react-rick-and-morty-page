interface ICharacterPreviewDTO {
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface ICharactersQueryApiResponse {
  characters: {
    info: {
      count: number;
    };
    results: ICharacterPreviewDTO[];
  };
}

interface ICharacterQueryDTO {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: { episone: string }[];
  url: string;
  created: string;
}

export interface ICharacterQueryApiResponse {
  character: ICharacterQueryDTO;
}
