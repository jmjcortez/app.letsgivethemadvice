import { connect } from "react-redux";
import { compose } from "recompose";

import CommentField from "./comment-field.component";

export default compose(
   connect(),
)(CommentField);

