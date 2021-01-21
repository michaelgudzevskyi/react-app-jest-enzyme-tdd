import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
    test('should returns an acctionn with type `CORRECT_GUESS`', () => {
        const action = correctGuess()
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
    });
})
