import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../core/hooks/useGenres";
import getCroppedImageUrl from "../core/services/imageCrop";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List>
      {genres?.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image boxSize={10} borderRadius={30} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
