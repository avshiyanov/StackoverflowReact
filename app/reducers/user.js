import * as types from '../actions/types'
import createReducer from '../utils/createReducer'

// Move keys to config
export const applicationState = createReducer({loading: false, loggedIn: false, error: null}, 
  {

  [types.LOGIN](state, action) {
    return Object.assign({}, state, {
        loading: false,
        loggedIn: true,
        error: null,
    });
  },

  [types.LOGOUT](state, action) {
    return Object.assign({}, state, {
        loading: false,
        loggedIn: false,
        error: null
    });
  },
});

export const profile = createReducer({username: null, password: null}, 
  {
    [types.ADD_USER](state, action) {
      return Object.assign({}, state, {
        username: action.username,
        password: action.password
      });
  },
});

export const error = createReducer({error: null}, 
  {
    [types.ERROR](state, action) {
     return Object.assign({}, state, {
        text: action.error,
     });
  },
});
