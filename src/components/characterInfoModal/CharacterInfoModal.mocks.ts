import { ICharacter } from "@/domain/models/ICharacter";

const base: ICharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  specie: "Human",
  type: "",
  gender: "Male",
  origin: "Earth",
  location: "Earth",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
};

export const mockCharacterInfoProps = {
  base,
};
