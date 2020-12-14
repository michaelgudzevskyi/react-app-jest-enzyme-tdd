import PropTypes from 'prop-types';

const GuessedWords = props => {

    

    const renderGuessedWords = () => {
        if(!props.guessedWords.length){
            return(
                <span data-test="guessed-instructions">
                    Try to guess the secret word!
                </span>
            )
        }
    }

    return (
        <div data-test="component-guessed-words">
            {renderGuessedWords()}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;