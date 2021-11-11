import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import "./App.css";

import Notes from "./pages/Notes";
import Create from "./pages/Create";

import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="create/*" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;

{
  /* <Router>
  <Switch>
    <Route exact paht="/">
      <Notes />
    </Route>
    <Route exact paht="/">
      <Create />
    </Route>
  </Switch>
</Router> */
}
