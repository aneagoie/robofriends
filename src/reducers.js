import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: ''
}
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state;
  }
}