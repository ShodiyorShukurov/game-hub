import { Header, GameGrid, GameGenreList } from "../components";
import { Grid, GridItem, Show } from "@chakra-ui/react";


const Root = () => {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Header />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" width="200px" padding={5}>
          <GameGenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Root;
