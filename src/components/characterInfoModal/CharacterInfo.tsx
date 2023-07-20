import { Avatar, Grid, TextField, Typography } from '@mui/material';

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
    <Grid container flexDirection="column" alignItems="center" spacing={4}>
      <Grid item>
        <Avatar
          alt={characterInfo.name}
          src={characterInfo.image}
          sx={{ width: 70, height: 70 }}
        />
      </Grid>

      <Grid item>
        <Typography variant="h3">{characterInfo.name}</Typography>
      </Grid>

      <Grid item>
        <TextField
          label="Specie"
          variant="outlined"
          value={characterInfo.species}
          disabled
        />
        <TextField label="Type" variant="outlined" value={characterInfo.type} />
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
