
import * as types from '../actions/types'

export function errors(error) {
    return {
        type: types.ERROR,
        error
    };
}

export function loggedin() {
    return {
        type: types.LOGIN,
    };
}

export function loggedout() {
    return {
        type: types.LOGOUT
    };
}

export function addUser(username, password) {
    return {
        type: types.ADD_USER,
        username,
        password,
    };
}

export function doLogin(username, password) {
    return dispatch => {
        let trimedName = username.trim()
        let trimedPass = password.trim()
        
        if (trimedName.length > 0 && trimedPass.length > 0) {
            dispatch(loggedin());
            dispatch(addUser(trimedName, trimedPass));
        } else {
            console.log('error')
            dispatch(errors('Username and password should not be empty'));
        }
    };
}

export function doLogout() {
    return dispatch => {
        dispatch(errors(''))
        dispatch(loggedout())
    };
}
