// Models
import { IGenre } from "../core/models/genre.model";
// Services
import useGenres from "../core/hooks/useGenres";
import getCroppedImageUrl from "../core/services/imageCrop";
// Components
import GenreListSkeleton from "./skeletons/GenreListSkeleton";
// ChakraUI
import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";

interface GenreListProps {
  selectedGenre: IGenre | undefined;
  onSelectedGenre: (genre: IGenre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: GenreListProps) => {
  const { genres, isLoading } = useGenres();

  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={3}>
        Genres
      </Heading>

      {isLoading && <GenreListSkeleton />}

      <List>
        {genres?.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize={10}
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
