import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

interface ISearchFilterState {
  name?: string;
  status: string;
  gender: string;
}
const CharacterSeacher: React.FC = () => {
  const [searchFilterState, setSearchFilterState] =
    React.useState<ISearchFilterState>({ status: '', gender: '' });

  const handleCleanFields = () => {
    console.log(searchFilterState);
    setSearchFilterState({ name: '', status: '', gender: '' });
  };

  return (
    <Grid
      container
      padding="16px"
      gap={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <TextField
          label="Character's name"
          value={searchFilterState.name}
          variant="outlined"
          onChange={(e) =>
            setSearchFilterState({ ...searchFilterState, name: e.target.value })
          }
        />
      </Grid>

      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={searchFilterState.status}
            onChange={(e) =>
              setSearchFilterState({
                ...searchFilterState,
                status: e.target.value,
              })
            }
          >
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={searchFilterState.gender}
            label="Gender"
            onChange={(e) =>
              setSearchFilterState({
                ...searchFilterState,
                gender: e.target.value,
              })
            }
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <ButtonGroup variant="outlined" size="large">
          <Button onClick={handleCleanFields}>Clean</Button>
          <Button>Search</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default CharacterSeacher;
