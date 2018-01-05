import has from './has';

describe('Testing has utils', () => {

  const testObj = {
      propOne: '',
      methodOne(x) {
        return x;
      }
    };

  it('Sould return true', () => {
    expect(has(testObj, 'propOne')).toBe(true);
    expect(has(testObj, 'methodOne')).toBe(true);
  });

  it('Sould return false', () => {
    expect(has(testObj, 'propTwo')).toBe(false);
  });

  it('Sould return false because looking for property from prototype ', () => {
    expect(has(testObj, 'toString')).toBe(false);
  });
});
