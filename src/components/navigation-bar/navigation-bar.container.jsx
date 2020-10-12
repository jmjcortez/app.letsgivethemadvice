import { connect } from 'react-redux';
import { compose } from "recompose";

import NavigationBar from "./navigation-bar.component";

export default compose(
   connect()
)(NavigationBar);