Function.prototype.myApply = function (context, args) {
  if (!Array.isArray(args)) {
    throw new Error('params must be array');
  }
  context = typeof context === 'object' ? context : window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
