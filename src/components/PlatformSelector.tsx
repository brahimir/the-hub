// ChakraUI
import { BsChevronDown } from "react-icons/bs";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import usePlatforms from "../core/hooks/usePlatforms";

const PlatformSelector = () => {
  const { platforms, error } = usePlatforms();

  return (
    <Box paddingLeft={2} paddingBottom={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {(error || !platforms?.length) && (
            <MenuItem>
              <Text as={"i"}>No platforms to display.</Text>
            </MenuItem>
          )}

          {platforms &&
            platforms.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
