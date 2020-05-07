import pollReducer, { initialState } from "../poll-reducers";
import {
   FETCH_CURRENT_POLL, FETCH_CURRENT_POLL_SUCCESS, FETCH_CURRENT_POLL_FAIL,
} from "../../actions/poll-actions";

describe('Poll reducer test', () => {
   it('should return initial state', () => {
      const action = {
         type: undefined,
      };

      expect(
         pollReducer(initialState, action)
      ).toEqual(initialState);
   });

   it('should set poll is loading to true if fetching starts', () => {
      const action = {
         type: FETCH_CURRENT_POLL,
      };
      expect(
         pollReducer(initialState, action)
      ).toEqual({
         ...initialState,
         isLoading: true,
      });
   });

   it('should set current poll if fetching successful', () => {
      const action = {
        type: FETCH_CURRENT_POLL_SUCCESS,
        payload: {
           question: 'test',
           poll_choices: [
              {
                 text: 'test',
                 num_of_votes: 1
              },
              {
                 text: 'test',
                 num_of_votes: 1
              }
           ]
        }
      };

      expect(
         pollReducer(initialState, action)
      ).toEqual({
         ...initialState,
         isLoading: false,
         currentPoll: {
            question: 'test',
            pollChoices: [
               {
                  text: 'test',
                  num_of_votes: 1
               },
               {
                  text: 'test',
                  num_of_votes: 1
               }
            ]
         }
      })
   });

   it('should set error if fetching failed', () => {
      const action = {
         type: FETCH_CURRENT_POLL_FAIL,
         payload: {
            error: 'test'
         },
      };

      expect(
         pollReducer(initialState, action)
      ).toEqual({
         ...initialState,
         isLoading: false,
         error: 'test',
      })
   });

});