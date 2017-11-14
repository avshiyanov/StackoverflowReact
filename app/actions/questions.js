import Api from '../utils/api'
import { config } from './../config'
import * as types from './types'

export function fetchQuestions() {
    return (dispatch, getState) => {
        return Api.get(config.stackoverflowSearchRequest).then(resp => {
            console.log('setquestions');
            dispatch(setSearchedQuestions({questions: resp}));
        }).catch( (ex) => {
            console.log(ex);
        });
    }
}

export function setSearchedQuestions({ questions }) {
    return {
        type: types.SET_SEARCHED_QUESTIONS,
        questions,
    }
}