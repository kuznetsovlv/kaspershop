export default (price) => {
  const wholePart = price >> 0;
  const decimalPart = (100 * (price - wholePart)) >> 0;
  const decimalStr = `${decimalPart}00`.slice(0, 2);

  return `${wholePart},${decimalStr} руб.`;
};
