// Models
import { IPlatform } from "../core/models/platform.model";
// Hooks
import usePlatforms from "../core/hooks/usePlatforms";
// ChakraUI
import { BsChevronDown } from "react-icons/bs";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
interface PlatformSelectorProps {
  selectedPlatform: IPlatform | undefined;
  onSelectedPlatform: (platform: IPlatform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: PlatformSelectorProps) => {
  const { platforms, error } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {(error || !platforms?.length) && (
          <MenuItem>
            <Text as={"i"}>No platforms to display.</Text>
          </MenuItem>
        )}

        {platforms &&
          platforms.map((platform) => (
            <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
