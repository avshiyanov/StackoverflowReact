import * as types from '../actions/types'
import createReducer from '../utils/createReducer'

export const searchedQuestions = createReducer({}, {
  [types.SET_SEARCHED_QUESTIONS](state, action) {
    let newState = {}
    action.questions.forEach( (question) => {
      let id = question.question_id
      newState[id] = Object.assign({}, question, { id });
    });
    
    return Object.assign({}, newState);
  },

});