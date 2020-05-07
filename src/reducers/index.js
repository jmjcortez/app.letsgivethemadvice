import { combineReducers } from "redux";

import threadReducer from "./thread-reducers";
import pollReducer from "./poll-reducers";

export default combineReducers({
  thread: threadReducer,
  poll: pollReducer,
})
