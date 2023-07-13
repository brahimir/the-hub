import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const loadingSkeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && (
        <Text color={"red"}>
          There was an error loading games. Please refresh the page and try again.
        </Text>
      )}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={"0.5rem"} spacing={5}>
        {isLoading && loadingSkeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {games && games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
