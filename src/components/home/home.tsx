import CharacterController from '@/adapters/driving/CharacterController';
import CharacterList from '@/components/characterList/CharacterList';
import { ICharacterPreview } from '@/domain/models/ICharacterPreview';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

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
    <Container sx={{ bgcolor: 'background.paper' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.paper"
        height="100vh"
        width="100%"
      >
        <Grid item maxHeight="100%">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Welcome to <a href="rickandmortyapi.com">The Rick and Morty API</a>
          </Typography>

          <CharacterList characterList={characterList} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
