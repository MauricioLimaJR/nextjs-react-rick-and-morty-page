import { Paper, styled, Typography } from '@mui/material';

const CustomPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
  width: 180,
}));

interface ICharacterItem {
  label: string;
  text: string;
}

const CharacterItem: React.FC<ICharacterItem> = ({ label, text }) => (
  <CustomPaper elevation={16}>
    <Typography variant="h6">{label}</Typography>
    <Typography variant="body1">{text}</Typography>
  </CustomPaper>
);

export default CharacterItem;
