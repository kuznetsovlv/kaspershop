import min from './min';

describe('Tests for min util', () => {
  it('Simple call', () => {
    expect(min()).toBe(Infinity);
  });

  it('Should return 1', () => {
    expect(min(10, 15, 1, 3, 2, 8)).toBe(1);
  });

  it('Should return -5', () => {
    expect(min(10, -5, 15, 1, 3, 2, 8)).toBe(-5);
  });

   it('Try to put undefined, should return -5', () => {
    expect(min(undefined, 10, -5, 15, 1, 3, 2, 8)).toBe(-5);
  });

   it('Try to put string, should return -5', () => {
    expect(min('string', 10, -5, 15, 1, 3, 2, 8)).toBe(-5);
  });
});
