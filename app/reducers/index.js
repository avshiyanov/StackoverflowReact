import { combineReducers } from 'redux';
import * as questionsReducer from './questions'
import * as userReducer from './user'

export default combineReducers(Object.assign(
  questionsReducer,
  userReducer,
));

