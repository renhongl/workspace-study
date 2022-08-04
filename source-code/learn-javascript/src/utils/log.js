import { before, after, result } from '.';
export function log(fn, type = 'log') {
  const map = {
    log: console.log,
    warn: console.warn,
    error: console.error,
  };
  return function (...args) {
    const context = this;
    const fnBefore = before(fn, () =>
      map[type](
        `%c ---starting: ${fn.name}---`,
        'background: #62620b; color: #fff'
      )
    );
    const fnBeforeResult = result(fnBefore);
    const fnBeforeResultAfter = after(fnBeforeResult, () =>
      map[type](
        `%c ---ending: ${fn.name}---`,
        'background: #62620b; color: #fff'
      )
    );
    fnBeforeResultAfter.apply(context, args);
  };
}
