import CharacterCard, {
  ICharacterCard,
} from '@/components/cards/character/CharacterCard';
import { mockCharacterCardProps } from '@/components/cards/character/CharacterCard.mocks';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CharacterInfoModal from '../characterInfoModal/CharacterInfoModal';
import { mockCharacterInfoProps } from '../characterInfoModal/CharacterInfoModal.mocks';

interface ICharacterList {
  characterList: ICharacterCard[];
}

const CharacterList: React.FC<ICharacterList> = ({ characterList }) => {
  const [openCharacterInfoModal, setOpenCharacterInfoModal] =
    React.useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState<
    number | null
  >(null);

  const handleOnCardClick = (characterId: number) => {
    setSelectedCharacter(characterId);
    setOpenCharacterInfoModal(true);
  };

  const handleCloseCharacterInfoModal = () => {
    setOpenCharacterInfoModal(false);
  };

  if (!characterList.length) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="div">
          No characters found.
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Grid container spacing={4} justifyContent="space-evenly">
          {characterList.map((character) => (
            <Grid key={character.name} item>
              <CharacterCard
                {...mockCharacterCardProps.base}
                onCardClick={() => handleOnCardClick(character.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CharacterInfoModal
        isOpen={openCharacterInfoModal}
        characterInfo={mockCharacterInfoProps.base}
        onClose={handleCloseCharacterInfoModal}
      />
    </>
  );
};

export default CharacterList;
