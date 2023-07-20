import { mockCharacterCardProps } from '@/components/cards/character/CharacterCard.mocks';
import CharacterList from '@/components/characterList/CharacterList';
import { Container, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const list = [
    mockCharacterCardProps.base,
    mockCharacterCardProps.base,
    mockCharacterCardProps.base,
    mockCharacterCardProps.base,
  ];

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
        <Grid item>
          <Typography variant="h3" textAlign="center" gutterBottom>
            Welcome to <a href="rickandmortyapi.com">The Rick and Morty API</a>
          </Typography>

          <CharacterList characterList={list} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
