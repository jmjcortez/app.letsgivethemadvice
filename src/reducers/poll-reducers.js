import {
   FETCH_CURRENT_POLL, FETCH_CURRENT_POLL_SUCCESS, FETCH_CURRENT_POLL_FAIL,
} from "../actions/poll-actions";

export const initialState = {
   currentPoll: {
         question: '',
         pollChoices: [],
   },
   isLoading: false,
   error: {},
}

export const pollReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CURRENT_POLL: {
         return {
            ...state,
            isLoading: true,
         }
      };

      case FETCH_CURRENT_POLL_SUCCESS: {
         return {
            ...state,
            isLoading: false,
            currentPoll: {
               question: action.payload.question,
               pollChoices: action.payload.poll_choices.map(choice => choice)
            }
         }
      };

      case FETCH_CURRENT_POLL_FAIL: {
         return {
            ...state,
            isLoading: false,
            error: action.payload.error,
         }
      };

      default: {
         return {
            ...state
         }
      }

   }
};

export default pollReducer;