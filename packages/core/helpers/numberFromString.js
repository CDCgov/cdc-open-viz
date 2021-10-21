export default function numberFromString(value = '') {
    // Only do this to values that are ONLY numbers - without this parseFloat strips all the other text
    let nonNumeric = /[^\d.-]/g

    if( false === Number.isNaN( parseFloat(value) ) && null === String(value).match(nonNumeric) ) {
        return parseFloat(value)
    }

    return value
}