import {
  FETCH_CURRENT_THREAD, FETCH_CURRENT_THREAD_FAIL, FETCH_CURRENT_THREAD_SUCCESS
} from "../actions/thread-actions";

export const initialState = {
  currentThread: {}
};

const threadReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_THREAD: {
      return {
        ...state,
        isLoading: true,
        error: {},
      }
    };

    case FETCH_CURRENT_THREAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: {},
        currentThread: action.payload
      }
    };

    case FETCH_CURRENT_THREAD_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        currentThread: {}
      }
    };

    default:
      return state;
  }
};

export default threadReducer;
