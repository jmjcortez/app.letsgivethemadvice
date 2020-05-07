export const FETCH_CURRENT_THREAD = 'FETCH_CURRENT_THREAD';

export const fetchCurrentThreadAction = () => {
  return {
      type: FETCH_CURRENT_THREAD
  }
};

export const FETCH_CURRENT_THREAD_SUCCESS = 'FETCH_CURRENT_THREAD_SUCCESS';

export const fetchCurrentThreadSuccessAction = data => {
    return {
        type: FETCH_CURRENT_THREAD_SUCCESS,
        payload: data,
    }
}

export const FETCH_CURRENT_THREAD_FAIL = 'FETCH_CURRENT_THREAD_FAIL';

export const fetchCurrentThreadFailAction = error => {
    return {
        type: FETCH_CURRENT_THREAD_FAIL,
        payload: {
            error: error,
        }
    }
};