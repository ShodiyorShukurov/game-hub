import {
  HStack,
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Switch,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" p={5}>
      <Heading>Logo</Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon />
        </InputLeftElement>
        <Input type="search" rounded={30} placeholder="Search..." />
      </InputGroup>

      <Flex alignItems={"center"}>
        <Switch onChange={toggleColorMode} pr={2}/>
        <Text whiteSpace="nowrap">{colorMode === 'light'? 'Dark': 'Light'} Mode</Text>
      </Flex>
    </HStack>
  );
};

export default Header;
