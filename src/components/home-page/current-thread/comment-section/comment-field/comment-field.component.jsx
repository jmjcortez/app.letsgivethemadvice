import React from "react";
import { styled, withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CommentFieldContainer = styled('div')({

});

const StyledTextField = withStyles({
   root: {
      width: '100%',
   }
})(TextField)

const StyledSubmitButton = withStyles({
   root: {
      marginTop: '30px',
   }
})(Button);

export const CommentField = props => {
   return (
      <CommentFieldContainer>
         <form autoComplete="off">
            <StyledTextField
               id="comment-field"
               label="Write a comment"
               multiline
               rows={4}
               variant="outlined"
               focused={false}
            />
         </form>
         <StyledSubmitButton variant='contained' color="secondary">Submit</StyledSubmitButton>
      </CommentFieldContainer>
   )
};

export default CommentField;