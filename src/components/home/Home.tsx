import CharacterController from "@/adapters/driving/CharacterController";
import { ISearchFilter } from "@/adapters/driving/ISearchFilter";
import CharacterList from "@/components/characterList/CharacterList";
import { ICharacterPreview } from "@/domain/models/ICharacterPreview";
import { Container, Grid } from "@mui/material";
import React from "react";
import CharacterSeacher from "../characterSeacher/CharacterSeacher";
import Header from "./Header";

const Home: React.FC = () => {
  const [characterList, setCharacterList] = React.useState<ICharacterPreview[]>(
    []
  );

  const loadCharacterList = async (filter?: ISearchFilter) => {
    const characters = await CharacterController.listCharacters(filter);
    setCharacterList(characters);
  };

  React.useEffect(() => {
    loadCharacterList();
  }, []);

  return (
    <>
      <Container sx={{ bgcolor: "background.paper", overflow: "hidden" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          bgcolor="background.paper"
          height="100vh"
          width="100%"
          gap={4}
        >
          <Header />

          <CharacterSeacher handleSearchClick={loadCharacterList} />

          <Grid height={"80%"}>
            <CharacterList characterList={characterList} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
