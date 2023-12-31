// ChakraUI
import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
