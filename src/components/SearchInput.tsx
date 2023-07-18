// React
import { useRef } from "react";
// ChakraUI
import { BsSearch } from "react-icons/bs";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const refSearch = useRef<HTMLInputElement>(null);

  const submit = (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    if (refSearch.current) onSearch(refSearch.current?.value);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={(e) => submit(e)}>
      <InputGroup size={"lg"}>
        <InputLeftElement>
          <Icon onClick={() => submit()} fontSize={"xl"} as={BsSearch} />
        </InputLeftElement>
        <Input ref={refSearch} borderRadius={50} placeholder="Search Games" variant={"filled"} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
