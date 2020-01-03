import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS } from "./actionTypes";

const initialState = {
    searchField: ""
}
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}

export const requestingRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false}
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false}
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true}
        default:
            return state;
    }
}