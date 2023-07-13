import { HStack, Image } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <ThemeToggle></ThemeToggle>
    </HStack>
  );
};

export default NavBar;
