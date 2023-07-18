import { BsSearch } from "react-icons/bs";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup size={"lg"}>
      <InputLeftElement>
        <Icon fontSize={"xl"} as={BsSearch} />
      </InputLeftElement>

      <Input borderRadius={5} placeholder="Search Games" variant={"filled"} />
    </InputGroup>
  );
};

export default SearchInput;
