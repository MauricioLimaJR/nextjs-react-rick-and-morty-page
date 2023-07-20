import CharacterCard from '@/components/cards/character/CharacterCard';
import { ICharacter } from '@/domain/models/Character';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CharacterInfoModal from '../characterInfoModal/CharacterInfoModal';
import { mockCharacterInfoProps } from '../characterInfoModal/CharacterInfoModal.mocks';

interface ICharacterList {
  characterList: ICharacter[];
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
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        overflow="scroll"
        maxHeight="100%"
      >
        {characterList.map((character) => (
          <Grid key={character.name} item>
            <CharacterCard
              id={character.id}
              image={character.image}
              name={character.name}
              specie={character.specie}
              onCardClick={() => handleOnCardClick(character.id)}
            />
          </Grid>
        ))}
      </Grid>

      <CharacterInfoModal
        isOpen={openCharacterInfoModal}
        characterInfo={mockCharacterInfoProps.base}
        onClose={handleCloseCharacterInfoModal}
      />
    </>
  );
};

export default CharacterList;
