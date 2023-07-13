import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsSun, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {colorMode === "light" ? <BsSunFill /> : <BsSun />}

      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />

      {colorMode === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
    </HStack>
  );
};

export default ThemeToggle;
