import { Heading, Wrap } from "@chakra-ui/react";
import GameItem from "../GameItem";
import useGames from "../../hooks/useGames";

const GamesList = () => {
  const { games } = useGames();
  console.log(games);
  return (
    <>
      <Heading>Games</Heading>
      <Wrap>
        {games.length > 0 &&
          games.map((game) => <GameItem key={game.id} {...game} />)}
      </Wrap>
    </>
  );
};

export default GamesList;
