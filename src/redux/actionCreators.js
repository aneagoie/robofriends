import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./actionTypes";

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobotsFailed = (error) => {
    return {
        type: REQUEST_ROBOTS_FAILED,
        payload: error
    }
}

export const requestRobotsSuccess = (robots) => {
    return {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots
    }
}

export const requestRobotsPending = () => {
    return {
        type: REQUEST_ROBOTS_PENDING
    }
}

export const resquestRobots = () => (dispatch) => {
    dispatch(requestRobotsPending());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch(requestRobotsSuccess(users)))
      .catch(error => dispatch(requestRobotsFailed(error)));
}