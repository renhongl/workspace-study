export const doubleBind = (obj, dom, key = 'text') => {
  let value = '';
  let o = JSON.parse(JSON.stringify(obj));
  Object.defineProperty(o, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      return value;
    },
    set: (val) => {
      value = val;
      dom.textContent = val;
    },
  });
  return o;
};
