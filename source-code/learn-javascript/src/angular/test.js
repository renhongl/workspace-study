import { doubleBind } from '.';

export const testDoubleBind = () => {
  const appDiv = document.getElementById('app');
  const header = document.createElement('div');
  appDiv.appendChild(header);

  const test = document.createElement('div');
  appDiv.appendChild(test);

  const headerBind = doubleBind({}, header);
  const testBind = doubleBind({}, test, 'test');

  headerBind.text = new Date().toLocaleDateString();
  testBind.test = new Date().toLocaleTimeString();
};
