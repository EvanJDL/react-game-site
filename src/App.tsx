import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
function App() {
  return (
    <Box minH="100vh" bg="bg" color="fg">
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        <GridItem area="aside" p={4} display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
        <GridItem area="main" p={4}>
          <GameList />
        </GridItem>
      </Grid>
    </Box>
  );
}
export default App;
