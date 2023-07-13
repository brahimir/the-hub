// Models
import { IGame } from "../models/game.model";
// Components
import PlatformIconList from "./PlatformIconList";
// Chakra
import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: IGame;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Box marginY={3}></Box>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
