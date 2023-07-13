import { HStack, Image, Text } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import logo from "../core/assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text fontSize={"2xl"}>Game Hub</Text>
      </HStack>
      <ThemeToggle></ThemeToggle>
    </HStack>
  );
};

export default NavBar;
