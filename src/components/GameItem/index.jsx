import { Box, Image, Text, WrapItem } from "@chakra-ui/react"


const GameItem = ({background_image, name}) => {
  return (
    <WrapItem width={300}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image  src={background_image} alt={name} width={300} height={200}/>
        <Text fontSize='lg' paddingTop={2}>{name}</Text>
      </Box>
    </WrapItem>
  );
}

export default GameItem
