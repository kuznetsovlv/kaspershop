import data, { getCommand, setCommand } from './data';

const getGoodsCommand = 'getGoods';
const getGoodCommand = 'getGood';
const byGoodsCommand = 'byGoods';
const saveGoodCommand = 'saveGood';

export default (path, command, inputData = {}) => data(path, getCommand, {}).then((data) => {
  const operatingInputData = { ...inputData };
  const operatingData = { ... data };
  const goods = operatingData.goods || {};

  switch (command) {
    case getGoodsCommand: {
      const requiredFields = operatingData.requiredFields || [];
      const { cathegory } = operatingInputData;
      const ids = Object.keys(goods).filter(id => goods.id && (goods.id.cathegories & cathegory));
      const hash = ids.reduce((h, id) => {
        const good = goods[id];
        h[id] = requiredFields
          .reduce((g, field) => ({ ...g, [field]: good[field], complite: false }), {});
        return h;
      }, {});
      return hash;
    }
    case getGoodCommand: {
      const { id } = operatingInputData;
      const good = goods[id];
      return { ...good, complite: true };
    }
    case byGoodsCommand: {
      const { goodList } = operatingInputData;

      if (!Array.isArray(goodList)) {
        throw 'Incorrect good list';
      }

      goodList.forEach(({ id, amount = 0 }) => {
        const good = goods[id];

        if (typeof good !== 'object') {
          throw `Incorrect data format for good #${id}`;
        }

        const { amount: currentAmount = 0 } = good;
        const newAmount = currentAmount - amount;

        if (isNaN(newAmount) || newAmount < 0) {
          throw 'Incorrect operation.';
        }

        goods[id] = { ...good, id, amount: newAmount };
      });

      return data(path, setCommand, { ...operatingData, goods });
    }
    case saveGoodCommand: {
      let { good } = operatingInputData;

      if (typeof good !== 'object') {
        throw 'Incorrect data.';
      }

      let { id } = good;

      if (!id) {
        const ids = Object
          .keys(goods).map(id => goods[id].id)
          .sort((a, b) => a - b);
        const [length] = ids;

        id = length > 0 ? ids[length - 1] + 1 : 1;
        good = { ...good, id };
      }

      return data(path, setCommand, { ...operatingData, goods: { ...goods, [id]: good } });
    }
    default:
      throw `Unknown command "${command}"`;
  }
});
