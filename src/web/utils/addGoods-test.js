import addGoods from './addGoods';

const initialGoods = {
  '1': {
    name: 'хлеб'
  }
};

describe('Tests for addGoods util', () => {
  it('Simple call', () => {
    expect(addGoods()).toEqual({});
  });

  it('Should extend existing', () => {
    const newGoods = {
      '1': {
        price: 10
      }
    };

    const expected = {
      '1': {
        name: 'хлеб',
        price: 10
      }
    };

    expect(addGoods(initialGoods, newGoods)).toEqual(expected);
  });

  it('Should return same', () => {
    expect(addGoods(initialGoods)).toEqual(initialGoods);
  });

  it('Should change', () => {
    const newGoods = {
      '1': {
        name: 'водка'
      }
    };

    expect(addGoods(initialGoods, newGoods)).toEqual(newGoods);
  });

  it('Should add new good', () => {
    const newGoods = {
      '2': {
        name: 'водка',
        price: 100
      }
    };

    const expected = {
      '1': {
        name: 'хлеб',
      },
      '2': {
        name: 'водка',
        price: 100
      }
    };

    expect(addGoods(initialGoods, newGoods)).toEqual(expected);
  });

  it('Should expand and add new good', () => {
    const newGoods = {
      '1': {
        price: 10
      },
      '2': {
        name: 'водка',
        price: 100
      }
    };

    const expected = {
      '1': {
        name: 'хлеб',
        price: 10
      },
      '2': {
        name: 'водка',
        price: 100
      }
    };

    expect(addGoods(initialGoods, newGoods)).toEqual(expected);
  });
});
