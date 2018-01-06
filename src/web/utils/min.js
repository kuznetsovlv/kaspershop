
/**
 * Finds minimal number.
 * @params {...number} nums - any numbers, all nonnumber arguments will be filtered.
 * @return {number} - minimal number from arguments.
 */
export default (...nums) => Math.min.call(Math, ...nums.filter(x => typeof x === 'number'));
