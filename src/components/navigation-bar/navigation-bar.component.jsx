import React from 'react';
import { withStyles, styled } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";


const StyledNavigationBarContainer = styled('div')({
   flexGrow: 1,
});

const StyledAppBar = withStyles({
   root: {
      backgroundColor: 'primary',
      position: 'static',
   },
})(AppBar);

const StyledIconButton = withStyles({
   root: {
      color: 'inherit',
      arielLabel: 'menu',
      marginRight: '10px',
      edge: 'start',
   },
})(IconButton);

const StyledTypography = withStyles({
   root: {
      flexGrow: 1,
   }
})(Typography);

const NavigationBar = props => {

   return (
      <StyledNavigationBarContainer>
         <StyledAppBar>
            <Toolbar>
               <StyledIconButton>
                  <MenuIcon />
               </StyledIconButton>
               <StyledTypography variant="h6">Let's Give Them Advice!</StyledTypography>

               <Button color="inherit">Login</Button>
               <Button color="inherit">About</Button>
            </Toolbar>
         </StyledAppBar>
      </StyledNavigationBarContainer>
   )
};

export default NavigationBar;