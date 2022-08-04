import { Storage } from '..';

export function testStorage() {
  const storage = new Storage('site-code-js');
  console.log(storage.getItem('key1'));
  storage.setItem('key1', Math.random());
  console.log(storage.getItem('key1'));
}
