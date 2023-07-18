// Models
import { IGame } from "../core/models/game.model";
// Services
import getCroppedImageUrl from "../core/services/imageCrop";
// Components
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
// Chakra
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: IGame;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width={"100%"} borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
