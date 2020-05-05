import { connect } from "react-redux";
import { compose } from "recompose";

import CurrentThread from "./current-thread.component";

export default compose(
   connect(),
)(CurrentThread);