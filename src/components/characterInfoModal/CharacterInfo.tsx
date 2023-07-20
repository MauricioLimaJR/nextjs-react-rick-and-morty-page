import { Avatar, Grid, Typography } from '@mui/material';
import CharacterItem from './CharacterItem';

export interface ICharacterInfo {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; image: string };
  location: { name: string; image: string };
  image: string;
  episode: string[];
}

interface ICharacterInfoContent {
  characterInfo: ICharacterInfo;
}

const CharacterInfo: React.FC<ICharacterInfoContent> = ({ characterInfo }) => {
  return (
    <Grid container flexDirection="column" alignItems="center" gap={2}>
      <Avatar
        alt={characterInfo.name}
        src={characterInfo.image}
        sx={{ width: 200, height: 200 }}
      />

      <Typography variant="h3">{characterInfo.name}</Typography>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Status" text={characterInfo.status} />
        <CharacterItem label="Gender" text={characterInfo.gender} />
      </Grid>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Specie" text={characterInfo.species} />
        <CharacterItem label="Type" text={characterInfo.type} />
      </Grid>

      <Grid container flexDirection="row" justifyContent="space-evenly">
        <CharacterItem label="Born in" text={characterInfo.origin.name} />
        <CharacterItem label="Live in" text={characterInfo.location.name} />
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
