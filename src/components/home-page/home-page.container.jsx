import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, setPropTypes } from 'recompose';
import PropTypes from "prop-types";

import { handleFetchCurrentThreadAction } from "./home-page.handlers";

import HomePage from "./home-page.component";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const handlers = withHandlers({
   fetchCurrentThread: ({dispatch}) => () => handleFetchCurrentThreadAction(dispatch),
});

const lifecycles = lifecycle({
   componentDidMount() {
      this.props.fetchCurrentThread();
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

