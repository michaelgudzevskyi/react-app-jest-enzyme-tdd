/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} prop - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}