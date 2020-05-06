import React from "react";

import {styled, withStyles} from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

const StyledThreadPollContainer = styled('div')({
   borderTop: '1px solid',
   paddingTop: '5px',
   marginBottom: '30px',
});

const StyledFormControl = withStyles({
   root: {
      margin: '8px',
   }
})(FormControl);

const StyledRadioGroup = withStyles({

})(RadioGroup);

const StyledChoice = withStyles({
   root: {
      marginBottom: '5px',
   }
})(FormControlLabel);

const StyledVoteHelperText = withStyles({
   root: {
      marginLeft: '30px',
   }
})(FormHelperText);

const StyledSubmitButton = withStyles({
   root: {
      margin: '15px 15px 0 0',
      color: 'primary',
   }
})(Button);

const StyledPollQuestion = withStyles({
   root: {
      marginBottom: '15px',
   }
})(Typography);


export const ThreadPoll = props => {

   return (
      <StyledThreadPollContainer>
         <form>
            <StyledFormControl component='fieldset'>
               <StyledPollQuestion>What should I do? I am really confused and I don't want to hurt their feelings</StyledPollQuestion>

               <StyledRadioGroup aria-label='vote' name='vote' value='a'>
                  <StyledChoice value='a' control={<Radio />} label='Lorem ipsum dolor sit amet, fringilla magna in, scelerisque magna. Aliquam quis cursus sem, sit amet sagittis nulla. Pellentesque habitant eros.'/>
                  <StyledChoice value='b' control={<Radio />} label='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'/>
               </StyledRadioGroup>

               <StyledVoteHelperText>You can only vote once! Read the comment sections to know what the others are thinking!</StyledVoteHelperText>

               <StyledSubmitButton variant='contained' color='secondary'>Vote</StyledSubmitButton>
            </StyledFormControl>
         </form>
      </StyledThreadPollContainer>
   );
};

export default ThreadPoll;