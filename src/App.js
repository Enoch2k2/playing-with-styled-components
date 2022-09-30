import RedParagraph from "./components/RedParagraph";
import Box from "./styled_components/Box";

function App() {
  return (
    <Box component="div">
      Hello World
      <Box component={ RedParagraph }>
        Hello World
      </Box>
    </Box>
  );
}

export default App;
