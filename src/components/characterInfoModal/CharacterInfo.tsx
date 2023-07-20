import { ICharacter } from '@/domain/models/ICharacter';
import { Avatar, Grid, Typography } from '@mui/material';
import CharacterItem from './CharacterItem';

interface ICharacterInfoContent {
  character: ICharacter;
}

const CharacterInfo: React.FC<ICharacterInfoContent> = ({ character }) => {
  return (
    <Grid container flexDirection="column" alignItems="center" gap={2}>
      <Avatar
        alt={character.name}
        src={character.image}
        sx={{ width: 200, height: 200 }}
      />

      <Typography variant="h3">{character.name}</Typography>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Status" text={character.status} />
        <CharacterItem label="Gender" text={character.gender} />
      </Grid>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Specie" text={character.specie} />
        <CharacterItem label="Type" text={character.type} />
      </Grid>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Born in" text={character.origin} />
        <CharacterItem label="Live in" text={character.location} />
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
