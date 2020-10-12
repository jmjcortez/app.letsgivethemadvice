import React from "react";

import { styled } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const StyledCommentContainer = styled('div')({
   display: 'flex',
   alignItems: 'flex-start',
   marginTop: '30px',
});

const StyledCommenterAvatar = styled('img')({
   display: 'flex',
   marginRight: '15px',
   borderRadius: '50%',
});

const StyledCommentBody = styled('div')({
   flex: 1,
});


export const Comment = props => {
  return (
    <StyledCommentContainer>
       <StyledCommenterAvatar src="http://placehold.it/50x50"></StyledCommenterAvatar>
       <StyledCommentBody>
          <Typography variant="h6">Jared Cortez</Typography>
          <Typography>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</Typography>
       </StyledCommentBody>
    </StyledCommentContainer>
  );
};

export default Comment;