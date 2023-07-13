// ChakraUI
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const loadingSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return loadingSkeletons.map((skeleton) => {
    return (
      <Box key={skeleton} paddingY={3}>
        <SkeletonCircle size="10" borderRadius={30} />
        <SkeletonText mt="4" noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
    );
  });
};

export default GenreListSkeleton;
