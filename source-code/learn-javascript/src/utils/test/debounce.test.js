import { debounce, log } from '..';
import { createElement, getRoot, submit } from './utils';
export function testDebounce() {
  const app = getRoot();
  const input = createElement('input', app);
  const submitLog = log(submit);
  const submitDebounce = debounce(submitLog, 500);
  // Test this
  // input.addEventListener('keyup', (e) =>
  //   submitDebounce.call(this, e.target.value)
  // );
  input.addEventListener('keyup', (e) => submitDebounce(e.target.value));
}
