import { combineReducers } from "redux";

import threadReducer from "./thread-reducers";

export default combineReducers({
  thread: threadReducer,
})
