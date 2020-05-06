import { connect } from "react-redux";
import { compose } from "recompose";
import ThreadPoll from "./thread-poll.component";

export default compose(
  connect(),
)(ThreadPoll);