import { SimpleGrid, Heading, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import useGames from "../../hooks/useGames";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();
  console.log(games)

  if (error) return <Text colorScheme="danger">{error}</Text>;

  if(isLoading) return <Text>Loading...</Text> 

  return (
    <>
      <Heading>Games</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={6}
        padding={5}
      >
        {games.length > 0 &&
          games.map((game) => <GameCard key={game.id} {...game} />)}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
