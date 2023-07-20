import CharacterController from '@/adapters/driving/CharacterController';
import CharacterList from '@/components/characterList/CharacterList';
import { ICharacterPreview } from '@/domain/models/ICharacterPreview';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from './Header';
import CharacterSeacher from '../characterSeacher/CharacterSeacher';

const Home: React.FC = () => {
  const [characterList, setCharacterList] = React.useState<ICharacterPreview[]>(
    []
  );

  const loadCharacterList = async () => {
    const characters = await CharacterController.listCharacters();
    setCharacterList(characters);
  };

  React.useEffect(() => {
    loadCharacterList();
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ bgcolor: 'background.paper', overflow: 'hidden' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          bgcolor="background.paper"
          height="100vh"
          width="100%"
          gap={4}
        >
          <CharacterSeacher />

          <Grid item maxHeight="100%">
            <CharacterList characterList={characterList} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
