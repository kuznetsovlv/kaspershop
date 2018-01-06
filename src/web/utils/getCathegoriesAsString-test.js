import getCathegoriesAsString from './getCathegoriesAsString';

const hash = {
  "1": {
    "id": 1,
    "value": "Продукты питания"
  },
  "2": {
    "id": 2,
    "value": "Бытовая химия"
  },
  "4": {
    "id": 4,
    "value": "Лекарства"
  },
  "8": {
    "id": 8,
    "value": "Товары первой необходимости"
  },
  "-1": {
    "id": -1,
    "value": "Все"
  }
};

const indexes = [-1, 1, 2, 4, 8];

describe('Tests for getCathegoriesAsString util', () => {
  it('Simple call', () => {
    expect(getCathegoriesAsString()).toBe('');
  });

  it('Should return "Продукты питания"', () => {
    expect(getCathegoriesAsString(1, indexes, hash)).toBe('Продукты питания');
  });

  it('Should return "Лекарства"', () => {
    expect(getCathegoriesAsString(4, indexes, hash)).toBe('Лекарства');
  });

  it('Should return "Бытовая химия, Лекарства"', () => {
    expect(getCathegoriesAsString(6, indexes, hash)).toBe('Бытовая химия, Лекарства');
  });

  it('Should return "Продукты питания, Бытовая химия, Лекарства, Товары первой необходимости"', () => {
    expect(getCathegoriesAsString(-1, indexes, hash)).toBe('Продукты питания, Бытовая химия, Лекарства, Товары первой необходимости');
  });
});
