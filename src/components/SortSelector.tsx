// ChakraUI
import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by: relevance
    </MenuButton>
    <MenuList>
      <MenuItem>Relevance</MenuItem>
      <MenuItem>Date Added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release Date</MenuItem>
      <MenuItem>Popularity</MenuItem>
      <MenuItem>Average Rating</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
