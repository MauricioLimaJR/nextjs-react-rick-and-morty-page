import { ICharacterCard } from './CharacterCard';

const base: ICharacterCard = {
  id: 1,
  name: 'Rick Sanchez',
  specie: 'Human',
  onCardClick: () => {},
};

export const mockCharacterCardProps = {
  base,
};
