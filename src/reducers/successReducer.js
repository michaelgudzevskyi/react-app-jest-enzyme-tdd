import { actionTypes } from "../actions";
/* eslint-disable import/no-anonymous-default-export */
/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {array} action - Action to be reduced.
 * @returns {JSX.Element} - New success state.
 */

export default (state=false, action) => {
    switch(action.type) {
        case(actionTypes.CORRECT_GUESS):
            return true
        default:
            return state
    }
}