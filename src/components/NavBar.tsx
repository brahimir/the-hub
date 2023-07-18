// Components
import ThemeToggle from "./ThemeToggle";
import logo from "../core/assets/images/gamehub-logo.png";
// ChakraUI
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack spacing={5}>
        <Image src={logo} boxSize="60px" />
        <Text fontSize={"2xl"}>GameHub</Text>
      </HStack>
      <ThemeToggle></ThemeToggle>
    </HStack>
  );
};

export default NavBar;
