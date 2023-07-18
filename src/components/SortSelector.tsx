// ChakraUI
import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export interface SortSelectorProps {
  selectedSortOrderValue: string | undefined;
  onSelectedSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrderValue, onSelectedSortOrder }: SortSelectorProps) => {
  // ? values prefixed with a "-" indicates a reversed sort order when processed by the API.
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Rating" }
  ];

  const currentSortOrder = sortOptions.find((option) => option.value === selectedSortOrderValue);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            onClick={() => onSelectedSortOrder(option.value)}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
