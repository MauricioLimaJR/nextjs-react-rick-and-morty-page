import { Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid bgcolor={theme.palette.background.default} width="100%">
      <Typography variant="h3" textAlign="center" gutterBottom>
        Welcome to The Rick and Morty API
      </Typography>

      <Divider sx={{ marginBottom: '16px' }} />
    </Grid>
  );
};

export default Header;
