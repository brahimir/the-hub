import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games } = useGames();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={"0.5rem"} spacing={10}>
      {games && games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
