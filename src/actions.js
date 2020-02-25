import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  paylod: text
})
