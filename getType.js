export default () => {
  const TYPE_MAP = {
    development: ['d', 'development'],
    product: ['p', 'product']
  };

  const TYPES = Object.keys(TYPE_MAP);
  
  return process.argv.reduce((type, arg) => {
    const types = TYPES.filter(testType => {
      const [short, long] = TYPE_MAP[testType];
      return arg === short || arg === long;
    });

    if (types.length > 0) {
      return types[0];
    }

    return type;
  }, TYPES[0]);
};