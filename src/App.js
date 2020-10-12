import React from 'react';
import styled  from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";

import Router from "./routers";
import { theme } from "./constants/themes";

import './App.css';
import NavigationBar from "./components/navigation-bar";

const StyledApp = styled.div`
`;

function App() {
  return (
     <ThemeProvider theme={theme}>
       <StyledApp className="App">
          <NavigationBar />
          <Router />
       </StyledApp>
     </ThemeProvider>
  );
}

export default App;
