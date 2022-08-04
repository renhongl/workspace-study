/**
 * Common functions
 */

export function before(fn, beforeFn) {
  return function (...args) {
    const context = this;
    beforeFn.apply(context, args);
    return fn.apply(context, args);
  };
}

export function after(fn, afterFn) {
  return function (...args) {
    const context = this;
    fn.apply(context, args);
    afterFn.apply(context, args);
  };
}

export function result(fn) {
  return function (...args) {
    const context = this;
    console.log(
      `%c ${fn.name} function result: ${fn.apply(context, args)}`,
      'color: green'
    );
  };
}
