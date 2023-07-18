// Models
import { IGameQuery } from "../core/models/game.model";
// ChakraUI
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

export interface GameHeadingProps {
  gameQuery: IGameQuery;
  onClear: () => void;
}

const GameHeading = ({ gameQuery, onClear }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <HStack spacing={2}>
      <Heading as="h1" fontSize={"5xl"}>
        {heading}
      </Heading>

      <Box paddingTop={5}>
        {(gameQuery.platform || gameQuery.genre) && (
          <Button onClick={() => onClear()} size={"xs"}>
            Clear
          </Button>
        )}
      </Box>
    </HStack>
  );
};

export default GameHeading;
