import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// pass dispatch as arg
// used to dispatch action to the reducer
// pass to action for access

// provide dispatch function to the 2nd layer function to use  on the inner layer by reduxthunk

export const requestRobots = () => (dispatch) => {

    //dispatch pending action, no payload
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    //async, fetch call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })) 
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error})) 
}