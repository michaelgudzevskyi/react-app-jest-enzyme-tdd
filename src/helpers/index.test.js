import { getLetterMatchCount } from "./"

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })
    test('returns the correct count where are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('returns corrent count when there are dublicate letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})