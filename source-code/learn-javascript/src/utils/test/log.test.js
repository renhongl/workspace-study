import { log } from '..';
import { submit } from './utils';
export function testLog() {
  const data = { name: 'test log' };
  submit(data);

  const submitLog = log(submit);
  submitLog(data);
}
