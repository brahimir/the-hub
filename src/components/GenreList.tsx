// Models
import { IGenre } from "../core/models/genre.model";
// Services
import useGenres from "../core/hooks/useGenres";
import getCroppedImageUrl from "../core/services/imageCrop";
// Components
import GenreListSkeleton from "./skeletons/GenreListSkeleton";
// ChakraUI
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";

interface GenreListProps {
  selectedGenre: IGenre | undefined;
  onSelectedGenre: (genre: IGenre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: GenreListProps) => {
  const { genres, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton />}

      <List>
        {genres?.map((genre, index) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image boxSize={10} borderRadius={30} src={getCroppedImageUrl(genre.image_background)} />
              <Button
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
