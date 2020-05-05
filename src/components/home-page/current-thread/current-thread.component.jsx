import React from "react";

import {styled, withStyles} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const StyedCurrentThreadContainer = styled('div')({
   maxWidth: '66%',
   padding: '24px',
});

const StyledHr = styled('hr')({
   color: 'grey'
});

const StyledTitle = withStyles({
   root: {
      marginBottom: '8px',
   }
})(Typography);

const StyledDatePosted = withStyles({
   root: {
      margin: '15px 0',
   }
})(Typography);

export const CurrentThread = props => {
  return (
     <StyedCurrentThreadContainer>
        <StyledTitle variant="h4">Current Thread</StyledTitle>
        <Typography>by Moderators</Typography>
        <StyledHr />
        <StyledDatePosted>Posted on January 1, 2020 at 12:00 PM</StyledDatePosted>
        <StyledHr />
        <Typography>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

           <p>Someone famous in Source Title</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
        </Typography>
     </StyedCurrentThreadContainer>
  );
};

export default CurrentThread;