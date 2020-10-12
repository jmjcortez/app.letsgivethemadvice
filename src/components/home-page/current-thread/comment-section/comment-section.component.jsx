import React from "react";

import { styled } from "@material-ui/core/styles";

import CommentField from "./comment-field/";
import Comment from "./comments/";

const StyledCommentSectionContainer = styled('div')({
});

export const CommentSection = props => {
  return (
     <StyledCommentSectionContainer>
        <CommentField />
        <Comment />
        <Comment />
        <Comment />
     </StyledCommentSectionContainer>
  )
};

export default CommentSection;