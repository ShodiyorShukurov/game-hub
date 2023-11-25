import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImage from "../../services/image-url";

const GameGenreList = () => {
  const { genres } = useGenres();
  console.log(genres);

  return (
    <List>
      {genres.length > 0 &&
        genres.map((genre) => (
          <ListItem key={genre.id} paddingTop="5px" paddingBottom="5px">
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                alt={genre.name}
                width={30}
                height={30}
                borderRadius={5}
              />
              <Button
                variant="link"
                fontSize="lg"
                textAlign="left"
                whiteSpace="normal"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GameGenreList;
