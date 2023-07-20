import { ICharacterCard } from "./CharacterCard";

const base: ICharacterCard = {
  id: 1,
  name: "Rick Sanchez",
  specie: "Human",
  onCardClick: () => {},
  image: "",
};

export const mockCharacterCardProps = {
  base,
};
