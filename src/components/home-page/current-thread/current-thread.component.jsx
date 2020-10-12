import React from "react";

import {styled, withStyles} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import ThreadPoll from "./thread-poll/";
import CommentSection from "./comment-section/comment-section.container";

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

   const { currentThread } = props;


   return (
     <StyedCurrentThreadContainer>
        <StyledTitle variant="h4">{currentThread.title}</StyledTitle>
        <Typography>by Moderators</Typography>
        <StyledHr />
        <StyledDatePosted>Posted on: {currentThread.validFrom}</StyledDatePosted>
        <StyledHr />
        <Typography>
           {currentThread.body}
        </Typography>
        <ThreadPoll />
        <CommentSection />
     </StyedCurrentThreadContainer>
  );
};

export default CurrentThread;