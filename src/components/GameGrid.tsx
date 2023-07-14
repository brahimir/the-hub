// Models
import { IGenre } from "../core/models/genre.model";
// Components
import useGames from "../core/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./skeletons/GameCardSkeleton";
// ChakraUI
import { SimpleGrid, Text } from "@chakra-ui/react";

interface GameGridProps {
  selectedGenre: IGenre | undefined;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { games, error, isLoading } = useGames(selectedGenre);

  return (
    <>
      {error && (
        <Text color={"red"}>
          There was an error loading games. Please refresh the page and try again.
        </Text>
      )}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={"0.5rem"} spacing={5}>
        {isLoading && <GameCardSkeleton />}

        {games && games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
