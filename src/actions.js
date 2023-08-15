import { CHANGE_SEARCH_FIELD } from "./actionTypes";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})