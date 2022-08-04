import { Router } from '..';

export function testRouter() {
  const router = new Router();
  router.setRoute('test', () => {
    console.log('test router');
  });
  router.setRoute('demo', () => {
    console.log('demo router');
  });
  router.setRoute('example', () => {
    console.log('example router');
  });

  setTimeout(() => {
    router.linkTo('demo');
  }, 4000);

  setTimeout(() => {
    router.linkTo('example');
  }, 8000);

  setTimeout(() => {
    router.linkTo('test');
  }, 12000);
}
