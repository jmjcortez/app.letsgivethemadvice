export const FETCH_CURRENT_POLL = 'FETCH_CURRENT_POLL';

export const fetchCurrentPollAction = () => {
  return {
     type: FETCH_CURRENT_POLL
  }
};

export const FETCH_CURRENT_POLL_SUCCESS = 'FETCH_CURRENT_POLL_SUCCESS';

export const fetchCurrentPollSuccessAction = data => {
   return {
      type: FETCH_CURRENT_POLL_SUCCESS,
      payload: data,
   }
}

export const FETCH_CURRENT_POLL_FAIL = 'FETCH_CURRENT_POLL_FAIL';

export const fetchCurrentPollFailAction = error => {
   return {
      type: FETCH_CURRENT_POLL_FAIL,
      payload: {
         error: error,
      }
   }
}
