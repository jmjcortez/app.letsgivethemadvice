import { connect } from "react-redux";
import { compose } from "recompose";
import ThreadPoll from "./thread-poll.component";

const mapStateToProps = (state) => {
   return {
      currentPoll: state.poll.currentPoll,
   }
};

export default compose(
  connect(mapStateToProps),
)(ThreadPoll);