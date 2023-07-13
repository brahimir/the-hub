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
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr" // 1024px
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
