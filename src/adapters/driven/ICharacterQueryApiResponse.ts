interface ICharacterPreviewDTO {
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface ICharacterQueryApiResponse {
  characters: {
    info: {
      count: number;
    };
    results: ICharacterPreviewDTO[];
  };
}
