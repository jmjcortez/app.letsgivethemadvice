import React from "react";
import { styled } from "@material-ui/core/styles";

import CurrentThread from "./current-thread/";

const StyledHomePageContainer = styled('div')({
  margin: '0 70px'
});

export const HomePage = props => {
  return (
     <StyledHomePageContainer>
       <CurrentThread />
     </StyledHomePageContainer>
  );
};

export default HomePage;