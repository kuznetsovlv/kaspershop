export default ({ cathegories = 0, amount = 0 }, cathegory = 0) => {
  if (amount <= 0) {
    return false;
  }

  return !!(cathegories & cathegory);
};
