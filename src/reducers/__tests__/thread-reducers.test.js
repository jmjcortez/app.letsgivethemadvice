import threadReducer, { initialState } from "../thread-reducers";
import {
  FETCH_CURRENT_THREAD, FETCH_CURRENT_THREAD_SUCCESS, FETCH_CURRENT_THREAD_FAIL
} from "../../actions/thread-actions";

describe('Thread reducer test', () => {
  it('should return initial state', () => {
    const action = {
      type: undefined
    };

    expect(
      threadReducer(initialState, action)
    ).toEqual(initialState);
  });

  it('should set thread is loading to true if fetching start', () => {
    const action = {
      type: FETCH_CURRENT_THREAD,
    };

    expect(
      threadReducer(initialState, action)
    ).toEqual({
      currentThread: {
        title: '',
        body: '',
        datePosted: '',
        dateCreated: '',
        aftermath: '',
        validFrom: '',
        validUntil: '',
      },
      isLoading: true,
      error: {}
    })
  });

  it('should assign current thread if fetch current thread successful', () => {
    const action = {
      type: FETCH_CURRENT_THREAD_SUCCESS,
      payload: {
        title: 'test',
        body: 'test',
        datePosted: 'test',
        dateCreated: 'test',
        aftermath: 'test',
        validFrom: 'test',
        validUntil: 'test',
      },
    };

    expect(
      threadReducer(initialState, action)
    ).toEqual({
      currentThread: {
          title: 'test',
          body: 'test',
          datePosted: 'test',
          dateCreated: 'test',
          aftermath: 'test',
          validFrom: 'test',
          validUntil: 'test',
      },
      isLoading: false,
      error: {},
    });
  });

  it('should assign error if fetch current thread failed', () => {
    const action = {
      type: FETCH_CURRENT_THREAD_FAIL,
      payload: { error: { test: true } },
    };

    expect(threadReducer(initialState, action)
    ).toEqual({
      currentThread: {},
      isLoading: false,
      error: { test: true },
    });
  });
});