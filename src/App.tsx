// React
import { useState } from "react";
// Models
import { IGenre } from "./core/models/genre.model";
// Components
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// ChakraUI
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  const [selectedGenre, setEelectedGenre] = useState<IGenre | undefined>(undefined);

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
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setEelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      {/* end:: Aside  */}

      {/* start:: Main Content */}
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      {/* end:: Main Content */}
    </Grid>
  );
};

export default App;
