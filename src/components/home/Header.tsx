import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor={theme.palette.background.default}
      width="100%"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      paddingTop={2}
    >
      <Typography variant="h3" textAlign="center">
        Welcome to The Rick and Morty API
      </Typography>
    </Grid>
  );
};

export default Header;
