/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word.
 * @param {string} secretWord - Secret Word.
 * @returns {JSX.Element} - Numbet of letters matched betwen guessed word and
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}