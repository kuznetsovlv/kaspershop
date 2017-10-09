const ALL = -1;
const INIT = 1;

export const expandCathegories = (data = {}) => {
  const cathegoryList = {
    [ALL]: {
      id: ALL,
      value: 'Все'
    }
  };

  let { cathegories } = data;

  if (!Array.isArray(cathegories)) {
    cathegories = [];
  }

  cathegories = cathegories.map((cathegory, index) => {
    const expandedIndex = INIT << index;
    cathegoryList[expandedIndex] = {
      id: expandedIndex,
      value: cathegory
    };
    return expandedIndex;
  });

  cathegories.unshift(ALL);

  return { ...data, cathegories, cathegoryList };
};

export const compressCathegories = (data = {}) => {
  try {
    const { cathegoryList } = data;

    if (!cathegoryList || typeof cathegoryList !== 'object') {
      return data;
    }

    const newData = { ...data };
    delete newData.cathegoryList;

    let { cathegories } = newData;

    if (!Array.isArray(cathegories)) {
      return newData;
    }

    cathegories = cathegories
      .filter(cathegoryIndex => cathegoryIndex !== ALL)
      .map(cathegoryIndex => cathegoryList[cathegoryIndex].value);

    return { ...newData, cathegories };
  } catch (e) {
    return data;
  }
};
