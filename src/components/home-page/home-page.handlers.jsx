import axios from 'axios';

import { fetchCurrentThreadAction, fetchCurrentThreadSuccessAction } from "../../actions/thread-actions";

import { API } from "../../constants/apis";

export const handleFetchCurrentThreadAction = async (dispatch) => {
  dispatch(fetchCurrentThreadAction());

  try {
     const response = await axios.get(`${API}/api/threads/`);
     dispatch(fetchCurrentThreadSuccessAction(response.data));

  } catch (e) {
     console.log('ERROR');
  }
};