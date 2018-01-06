import showGood from './showGood';

describe('Tests for showGood util', () => {
  it('Simple call', () => {
    expect(showGood({})).toBe(false);
  });

  it('Should return false because good is unavailable', () => {
    expect(showGood({ cathegories: 1, amount: 0 }, 1)).toBe(false);
  });

  it('Should return false because good is out of cathegories', () => {
    expect(showGood({ cathegories: 0, amount: 10 }, 1)).toBe(false);
  });

  it('Should return false because now cathegory selected', () => {
    expect(showGood({ cathegories: 1, amount: 10 }, 0)).toBe(false);
  });

  it('Should return false because good is not in the selected cathegory', () => {
    expect(showGood({ cathegories: 1, amount: 10 }, 2)).toBe(false);
  });

  it('Should return true because one of the good\'s cathegory should be shown' , () => {
    expect(showGood({ cathegories: 3, amount: 10 }, 2)).toBe(true);
  });

  it('Should return true because the good\'s cathegory is exetcly equal selected cathegory' , () => {
    expect(showGood({ cathegories: 2, amount: 10 }, 2)).toBe(true);
  });
});
