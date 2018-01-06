
/**
 * Formats price value to string
 * @param {number} price - number value of price.
 * @return {string} - formated price string
 */
export default (price) => {
  const wholePart = price >> 0;
  const decimalPart = Math.round(100 * (price - wholePart));
  const decimalStr = `0${decimalPart}`.slice(-2);

  return `${wholePart},${decimalStr} руб.`;
};
