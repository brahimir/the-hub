// Components
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// ChakraUI
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
    >
      {/* start:: Navbar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* end:: Navbar */}

      {/* start:: Aside  */}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      {/* end:: Aside  */}

      {/* start:: Main Content */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      {/* end:: Main Content */}
    </Grid>
  );
};

export default App;
