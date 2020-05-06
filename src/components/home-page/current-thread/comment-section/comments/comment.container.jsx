import { connect } from "react-redux";

import { compose } from "recompose";

import Comment from "./comment.component";

export default compose(
   connect(),
)(Comment);