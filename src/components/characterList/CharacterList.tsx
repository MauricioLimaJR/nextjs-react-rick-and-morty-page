import CharacterCard, {
  ICharacterCard,
} from '@/components/cards/character/CharacterCard';
import { mockCharacterCardProps } from '@/components/cards/character/CharacterCard.mocks';
import { Container, Grid, Typography } from '@mui/material';

interface ICharacterList {
  characterList: ICharacterCard[];
}

const CharacterList: React.FC<ICharacterList> = ({ characterList }) => {
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
    <Container>
      <Grid container spacing={4} justifyContent="space-evenly">
        {characterList.map((character) => (
          <Grid key={character.name} item>
            <CharacterCard {...mockCharacterCardProps.base} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterList;
