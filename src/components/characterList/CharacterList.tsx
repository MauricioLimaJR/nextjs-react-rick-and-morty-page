import CharacterController from '@/adapters/driving/CharacterController';
import CharacterCard from '@/components/cards/character/CharacterCard';
import { ICharacter } from '@/domain/models/ICharacter';
import { ICharacterPreview } from '@/domain/models/ICharacterPreview';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import CharacterInfoModal from '../characterInfoModal/CharacterInfoModal';

interface ICharacterList {
  characterList: ICharacterPreview[];
}

const CharacterList: React.FC<ICharacterList> = ({ characterList }) => {
  const [openCharacterInfoModal, setOpenCharacterInfoModal] =
    React.useState<boolean>(false);
  const [selectedCharacterId, setSelectedCharacterId] = React.useState<
    number | null
  >(null);
  const [selectedCharacter, setSelectedCharacter] =
    React.useState<ICharacter | null>(null);
  const [loadingCharacter, setLoadingCharacter] =
    React.useState<boolean>(false);

  const handleOnCardClick = async (characterId: number) => {
    setLoadingCharacter(true);
    setSelectedCharacterId(characterId);

    const clickedCharacter = await CharacterController.findCharacter(
      characterId
    );

    setLoadingCharacter(false);

    if (clickedCharacter) {
      setSelectedCharacter(clickedCharacter);
      setOpenCharacterInfoModal(true);
    } else console.log('Character not found!');
  };

  const handleCloseCharacterInfoModal = () => {
    setSelectedCharacterId(null);
    setSelectedCharacter(null);
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
            {loadingCharacter && selectedCharacterId === character.id && (
              <LinearProgress />
            )}
          </Grid>
        ))}
      </Grid>

      {selectedCharacter && (
        <CharacterInfoModal
          isOpen={openCharacterInfoModal}
          character={selectedCharacter}
          onClose={handleCloseCharacterInfoModal}
        />
      )}
    </>
  );
};

export default CharacterList;
