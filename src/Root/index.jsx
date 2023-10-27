import GamesList from "../components/GamesList";
import Header from "../components/Header";
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
        <GridItem bg="orange" area="aside"></GridItem>
      </Show>
      <GridItem area="main">
        <GamesList />
      </GridItem>
    </Grid>
  );
};

export default Root;
