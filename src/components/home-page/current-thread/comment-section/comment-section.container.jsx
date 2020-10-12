import { connect } from "react-redux";
import { compose } from "recompose";

import CommentSection from "./comment-section.component";

export default compose(
   connect(),
)(CommentSection);

