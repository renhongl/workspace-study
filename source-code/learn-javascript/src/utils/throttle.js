export function throttleTimer(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

export function throttle(fn, delay = 1000) {
  let before = Date.now();
  return function (...args) {
    const context = this,
      now = Date.now();
    if (now - before > delay) {
      fn.apply(context, args);
      before = now;
    }
  };
}
