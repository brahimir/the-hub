// React
import { useState } from "react";
// Models
import { IGameQuery } from "./core/models/game.model";
// ChakraUI
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
// Components
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import SearchInput from "./components/SearchInput";
import SortSelector from "./components/SortSelector";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr" // 1024px
      }}
    >
      {/* start:: Navbar */}
      <GridItem area="nav" padding={3}>
        <NavBar />
      </GridItem>
      {/* end:: Navbar */}

      {/* start:: Aside  */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      {/* end:: Aside  */}

      {/* start:: Main Content */}
      <GridItem area="main" padding={2}>
        <Box paddingX={2}>
          <GameHeading onClear={() => setGameQuery({} as IGameQuery)} gameQuery={gameQuery} />

          <Box marginY={5}></Box>

          <SearchInput onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />

          <Box marginY={3}></Box>

          <HStack justifyContent={"start"}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            ></PlatformSelector>

            <SortSelector
              selectedSortOrderValue={gameQuery.sortOrder}
              onSelectedSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </HStack>
        </Box>
        <Box marginY={5}></Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      {/* end:: Main Content */}
    </Grid>
  );
};

export default App;
