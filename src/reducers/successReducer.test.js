import { acctionTypes, actionTypes } from './../actions'
import successReducer from './index'

test('should returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toStrictEqual({"success": false})
})

test('should return state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toStrictEqual({"success": true})
})
