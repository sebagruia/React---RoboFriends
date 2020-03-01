import {CHANGE_SEARCH_FIELD} from './constats';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})