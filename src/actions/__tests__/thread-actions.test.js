import {
    fetchCurrentThreadAction,
    fetchCurrentThreadSuccessAction,
    fetchCurrentThreadFailAction,
    FETCH_CURRENT_THREAD,
    FETCH_CURRENT_THREAD_SUCCESS,
    FETCH_CURRENT_THREAD_FAIL
} from "../thread-actions";

describe('Current thread actions', () => {
    it('should create a fetch current thread action', () => {
        const expectedAction = {
            type: FETCH_CURRENT_THREAD
        };

        expect(fetchCurrentThreadAction()).toEqual(expectedAction);
    });

    it('should create a fetch current thread success action', () => {
        const expectedAction = {
            type: FETCH_CURRENT_THREAD_SUCCESS,
            payload: { test: true },
        };

        expect(fetchCurrentThreadSuccessAction({ test: true })).toEqual(expectedAction);
    });

    it('should create a fetch current thread fail action', () => {
        const expectedAction = {
            type: FETCH_CURRENT_THREAD_FAIL,
            payload: {
                error: { test: true }
            },
        };

        expect(fetchCurrentThreadFailAction({ test: true })).toEqual(expectedAction);
    });
});
