// Components
import ThemeToggle from "./ThemeToggle";
import logo from "../core/assets/images/gamehub-logo.png";
// ChakraUI
import { HStack, Image } from "@chakra-ui/react";
import SearchInput, { SearchInputProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack justifyContent={"space-between"} spacing={3}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ThemeToggle></ThemeToggle>
    </HStack>
  );
};

export default NavBar;
