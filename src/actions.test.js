import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_FAILED, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS } from './constants';

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([
    thunkMiddleware
])

describe('setSearchField', () => {
    const text = 'woo'
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    it('should create an action to search robots', () => {
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('requestRobots', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }
    it('handles requesting robots API', () => {
        expect(action[0]).toEqual(expectedAction)
    })
})
