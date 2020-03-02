import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    } from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// By adding Redux-Thunk, Redux can understand the bellow function that returns another function and not an Object as usual. Redux-Thung is aware of this return and gives acces to the "dispach" function.
export const requestRobots = () => (dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then((data)=>{
            dispatch({type:REQUEST_ROBOTS_SUCCESS,
                        payload:data
            })
        })
        .catch((error)=>{
            dispatch({
                type:REQUEST_ROBOTS_FAILED,
                payload:error
            })
        });
}