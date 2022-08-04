import { throttle, log } from '..';
import { createElement, getRoot, submit } from './utils';

export function testThrottle() {
  const app = getRoot();
  const div = createElement('div', app);
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.background = 'red';
  div.setAttribute('draggable', true);
  div.textContent = 'drag to test';

  const submitLog = log(submit);
  const submitThrottle = throttle(submitLog, 500);

  // Test this
  // div.addEventListener('drag', (e) => {
  //   submitThrottle.call(this, e.clientX, e.clientY);
  // });

  div.addEventListener('drag', (e) => {
    submitThrottle(e.clientX, e.clientY);
  });
}
