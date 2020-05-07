import { connect } from "react-redux";
import {compose, setPropTypes} from "recompose";

import CurrentThread from "./current-thread.component";
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  return {
     currentThread: state.thread.currentThread,
  }
};

const propTypes = {
   currentThread: PropTypes.object,
}

export default compose(
   connect(mapStateToProps),
   setPropTypes(propTypes),
)(CurrentThread);