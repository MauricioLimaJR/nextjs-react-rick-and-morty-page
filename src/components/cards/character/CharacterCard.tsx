import { CardActionArea, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface ICharacterCard {
  id: number;
  name: string;
  specie: string;
  onCardClick: () => void;
}

const CharacterCard: React.FC<ICharacterCard> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={props.onCardClick}>
        <CardMedia
          component="img"
          height="200"
          image="https://rickandmortyapi.com/api/character/avatar/69.jpeg"
          alt={`${props.name} picture`}
        />
        <CardContent>
          <Chip
            label={props.specie}
            color="secondary"
            size="small"
            variant="outlined"
          />
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
