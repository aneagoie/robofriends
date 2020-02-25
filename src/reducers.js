import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
  setSearchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case: CHANGE_SEARCH_FIELD:
     return Object.assign({}, state, searchField: action.payload);
       default:
         return state;
  }
}
