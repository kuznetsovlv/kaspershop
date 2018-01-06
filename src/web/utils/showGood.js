/**
 * Check if good should shown.
 * @param { Object } - object whith good's data:
 * @param {number} [arguments[0]#cathegories = 0] - numeric value of cathegories good is belongs;
 * @param {number} [arguments[0]#amount = 0] - available product's amount.
 * @param {number} [cathegory = 0] - selected cathegory of goods to be shown.
 * @return {boolean}
 */
export default ({ cathegories = 0, amount = 0 }, cathegory = 0) => {
  if (amount <= 0) {
    return false;
  }

  return !!(cathegories & cathegory);
};
