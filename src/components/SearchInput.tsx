import { BsSearch } from "react-icons/bs";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const refSerach = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (refSerach.current) onSearch(refSerach.current?.value);
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <InputGroup size={"lg"}>
        <InputLeftElement>
          <Icon fontSize={"xl"} as={BsSearch} />
        </InputLeftElement>
        <Input ref={refSerach} borderRadius={5} placeholder="Search Games" variant={"filled"} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
