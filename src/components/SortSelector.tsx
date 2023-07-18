// ChakraUI
import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface SortSelectorProps {
  selectedSortOrderValue: string | undefined;
  onSelectedSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrderValue, onSelectedSortOrder }: SortSelectorProps) => {
  // ? values prefixed with a "-" indicates a reversed sort order when passed to the API; shows the
  // ? latest first.
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === selectedSortOrderValue);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
