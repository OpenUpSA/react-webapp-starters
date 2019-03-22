/**
 * Checks if {@link value} is an array, if {@link value} is not an array then force value into an array as first value.
 * 
 * @param {any} value - Value to check and convert if needed
 */
const forceToArrayIfNotArray = value => (Array.isArray(value) ? value : [value]);


export {
  forceToArrayIfNotArray,
}


export default {
  forceToArrayIfNotArray,
}
