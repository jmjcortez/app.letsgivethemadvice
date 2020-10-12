import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, setPropTypes } from 'recompose';
import PropTypes from "prop-types";

import {handleFetchCurrentPollAction, handleFetchCurrentThreadAction} from "./home-page.handlers";

import HomePage from "./home-page.component";

const handlers = withHandlers({
   fetchCurrentThread: ({dispatch}) => () => handleFetchCurrentThreadAction(dispatch),
   fetchCurrentPoll: ({dispatch}) => () => handleFetchCurrentPollAction(dispatch),
});

const lifecycles = lifecycle({
   componentDidMount() {
      this.props.fetchCurrentThread();
      this.props.fetchCurrentPoll();
   }
});

const propTypes = {
   fetchCurrentThread: PropTypes.func,
};

export default compose(
   connect(),
   setPropTypes(propTypes),
   handlers,
   lifecycles
)(HomePage);

