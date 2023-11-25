import { Card, Image, Text, CardBody } from "@chakra-ui/react";
import PropTypes from "prop-types";
import getCroppedImage from "../../services/image-url";

const GameCard = ({ background_image, name }) => {
  return (
    <Card borderRadius={"xl"} overflow={"hidden"}>
      <Image src={getCroppedImage(background_image)} alt={name} />
      <CardBody>
        <Text fontSize="lg" paddingTop={2}>
          {name}
        </Text>
      </CardBody>
    </Card>
  );
};

GameCard.propTypes = {
  background_image: PropTypes.string,
  name: PropTypes.string,
};

export default GameCard;
