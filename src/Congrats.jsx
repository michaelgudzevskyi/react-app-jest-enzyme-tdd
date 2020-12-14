import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Render component (or null if `success` prop is true)
 */
const Congrats = props => {
    return (
        props.success ? <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message" >
                Congratulations! You guessed the word!
            </span>
        </div> : <div data-test="component-congrats" />
    );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}
 

export default Congrats;