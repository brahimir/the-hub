import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../core/hooks/useGenres";
import getCroppedImageUrl from "../core/services/imageCrop";
import GenreListSkeleton from "./skeletons/GenreListSkeleton";
import { IGenre } from "../core/models/genre.model";

interface GenreListProps {
  onSelectedGenre: (genre: IGenre) => void;
}

const GenreList = ({ onSelectedGenre }: GenreListProps) => {
  const { genres, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton />}

      <List>
        {genres?.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image boxSize={10} borderRadius={30} src={getCroppedImageUrl(genre.image_background)} />
              <Button fontSize={"lg"} variant={"link"} onClick={() => onSelectedGenre(genre)}>
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
