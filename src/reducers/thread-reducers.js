import {
  FETCH_CURRENT_THREAD, FETCH_CURRENT_THREAD_FAIL, FETCH_CURRENT_THREAD_SUCCESS
} from "../actions/thread-actions";

export const initialState = {
  currentThread: {
    title: '',
    body: '',
    datePosted: '',
    dateCreated: '',
    aftermath: '',
    validFrom: '',
    validUntil: '',
  },
  isLoading: false,
  error: {},
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
        currentThread: {
          title: action.payload.title,
          body: action.payload.body,
          datePosted: action.payload.date_posted,
          dateCreated: action.payload.date_created,
          aftermath: action.payload.aftermath,
          validFrom: action.payload.valid_from,
          validUntil: action.payload.valid_until,
        }
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
