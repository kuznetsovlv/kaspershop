import combineArrs from './combineArrs';

describe('Tests for combineArrs util', () => {
  it('Simple call', () => {
    expect(combineArrs()).toEqual([]);
  });

  it('Call with one array', () => {
    const arr = [1, 2, 3];

    expect(combineArrs(arr)).toEqual(arr);
  });

  it('Call with second array empty', () => {
    const arr = [1, 2, 3];

    expect(combineArrs(arr, [])).toEqual(arr);
  });

  it('Call with first array empty', () => {
    const arr = [1, 2, 3];

    expect(combineArrs([], arr)).toEqual(arr);
  });

  it('Call with both empty', () => {
    expect(combineArrs([], [])).toEqual([]);
  });

  it('Call with all diferent', () => {
    const arr1 = [1, 2, 3, 5, 8];
    const arr2 = [0, 4, 6, 7, 9]

    expect(combineArrs(arr1, arr2)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('Call with dublicated', () => {
    const arr1 = [1, 2, 3, 4, 5, 8];
    const arr2 = [0, 4, 6, 7, 8, 9]

    expect(combineArrs(arr1, arr2)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
