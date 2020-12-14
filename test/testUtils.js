import checkPropTypes from "check-prop-types"
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} prop - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}