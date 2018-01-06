import formatPrice from './formatPrice';

describe('Tests for formatPrice util', () => {
  it ('Should return "0,00 руб."', () => {
    expect(formatPrice(0)).toBe('0,00 руб.')
  });

  it ('Should return "15,00 руб."', () => {
    expect(formatPrice(15)).toBe('15,00 руб.')
  });

  it ('Should return "15,00 руб."', () => {
    expect(formatPrice(15.0005)).toBe('15,00 руб.')
  });

  it ('Should return "15,29 руб."', () => {
    expect(formatPrice(15.29)).toBe('15,29 руб.')
  });

  it ('Should return "15,01 руб."', () => {
    expect(formatPrice(15.01)).toBe('15,01 руб.')
  });

  it ('Should return "15,10 руб."', () => {
    expect(formatPrice(15.1)).toBe('15,10 руб.')
  });
});
