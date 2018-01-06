/**
 * Checks if the object has required property and this property is own.
 * @param {Object} obj - tested object.
 * @param {string} prop - property` name
 * @return {boolean}
 */
export default (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
