const ALL = -1;
const INIT = 1;

export const expandCathegories = (data = {}) => {
  const cathegoryList = {
    [ALL]: 'Все'
  };

  let { cathegories } = data;

  if (!Array.isArray(cathegories)) {
    cathegories = [];
  }

  cathegories = cathegories.map((cathegory, index) => {
    const expandedIndex = INIT << index;
    cathegoryList[expandedIndex] = cathegory;
    return expandedIndex;
  });

  return { ...data, cathegories, cathegoryList };
};
