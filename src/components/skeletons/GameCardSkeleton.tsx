// ChakraUI
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  const loadingSkeletons = [1, 2, 3, 4, 5, 6];

  return loadingSkeletons.map((skeleton) => {
    return (
      <Card key={skeleton} width={"100%"} borderRadius={10}>
        <Skeleton height={200}></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    );
  });
};

export default GameCardSkeleton;
