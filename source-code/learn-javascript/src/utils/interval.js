export function interval(fn, count = -1, delay = 1000) {
  let n = 0;
  let timer = null;
  return function (...args) {
    const context = this;
    console.log('this in interval: ', this);
    timer = setInterval(() => {
      if (timer && count !== -1 && n >= count) {
        return clearInterval(timer);
      }
      fn.apply(context, args);
      n++;
    }, delay);
  };
}
