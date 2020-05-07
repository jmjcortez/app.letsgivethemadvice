import axios from 'axios';

import { fetchCurrentThreadAction, fetchCurrentThreadSuccessAction } from "../../actions/thread-actions";
import { fetchCurrentPollAction, fetchCurrentPollSuccessAction } from "../../actions/poll-actions";

import { API } from "../../constants/apis";

export const handleFetchCurrentThreadAction = async (dispatch) => {
  dispatch(fetchCurrentThreadAction());

  try {
     const response = await axios.get(`${API}/api/threads/current-thread/`);
     dispatch(fetchCurrentThreadSuccessAction(response.data));

  } catch (e) {
     console.log('ERROR');
  }
};

export const handleFetchCurrentPollAction = async (dispatch) => {
   dispatch(fetchCurrentPollAction());

   try {
      const response = await axios.get(`${API}/api/polls/current-poll/`);
      dispatch(fetchCurrentPollSuccessAction(response.data));
   } catch (e) {
      console.log('ERROR');
   }
};