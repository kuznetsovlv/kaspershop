import combineBEMBlocks from './combineBEMBlocks';

describe('Tests for combineBEMBlocks', () => {
  it('Should return "block-1"', () => {
    expect(combineBEMBlocks('block-1')).toBe('block-1');
  });

  it('Should return "block-1__element"', () => {
    expect(combineBEMBlocks('block-1', 'element')).toBe('block-1__element');
  });

  it('Should return "block-1__element block-1__element_mod-1"', () => {
    expect(combineBEMBlocks('block-1', 'element', 'mod-1')).toBe('block-1__element block-1__element_mod-1');
  });

  it('Should return "block-1__element block-1__element_mod-1 block-1__element_mod-2"', () => {
    const conditionMods = {
      'mod-2': true,
      'mod-3': false
    };

    const expected = 'block-1__element block-1__element_mod-1 block-1__element_mod-2';

    expect(combineBEMBlocks('block-1', 'element', 'mod-1', conditionMods)).toBe(expected);
  });

  it('Try add block ass array, should return "block-1"', () => {
    expect(combineBEMBlocks(['block-1'])).toBe('block-1');
  });

  it('Try add block ass array, should return "block-1__element"', () => {
    expect(combineBEMBlocks(['block-1'], 'element')).toBe('block-1__element');
  });

  it('Try add block ass array, should return "block-1__element block-1__element_mod-1"', () => {
    expect(combineBEMBlocks(['block-1'], 'element', 'mod-1')).toBe('block-1__element block-1__element_mod-1');
  });

  it('Try add block ass array, should return "block-1__element block-1__element_mod-1 block-1__element_mod-2"', () => {
    const conditionMods = {
      'mod-2': true,
      'mod-3': false
    };

    const expected = 'block-1__element block-1__element_mod-1 block-1__element_mod-2';

    expect(combineBEMBlocks(['block-1'], 'element', 'mod-1', conditionMods)).toBe(expected);
  });

  it('Should return "block-1 block-2"', () => {
    expect(combineBEMBlocks(['block-1', 'block-2'])).toBe('block-1 block-2');
  });

  it('Should return "block-1__element block-2__element"', () => {
    expect(combineBEMBlocks(['block-1', 'block-2'], 'element')).toBe('block-1__element block-2__element');
  });

  it('Should return "block-1__element block-1__element_mod-1 block-2__element block-2__element_mod-1"', () => {
    const expected = 'block-1__element block-1__element_mod-1 block-2__element block-2__element_mod-1';

    expect(combineBEMBlocks(['block-1', 'block-2'], 'element', 'mod-1')).toBe(expected);
  });

  it('Should return "block-1__element block-1__element_mod-1 block-1__element_mod-2 block-2__element block-2__element_mod-1 block-2__element_mod-2"', () => {
    const conditionMods = {
      'mod-2': true,
      'mod-3': false
    };

    const expected = 'block-1__element block-1__element_mod-1 block-1__element_mod-2 ' +
      'block-2__element block-2__element_mod-1 block-2__element_mod-2';

    expect(combineBEMBlocks(['block-1', 'block-2'], 'element', 'mod-1', conditionMods)).toBe(expected);
  });
});
