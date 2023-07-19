import { CardActionArea, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface ICharacterCard {
  name: string;
  specie: string;
}

const CharacterCard: React.FC<ICharacterCard> = ({ name, specie }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://rickandmortyapi.com/api/character/avatar/69.jpeg"
          alt={`${name} picture`}
        />
        <CardContent>
          <Chip
            label={specie}
            color="secondary"
            size="small"
            variant="outlined"
          />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
