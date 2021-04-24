/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProp = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )

    expect(propError).toBeUndefined()
}