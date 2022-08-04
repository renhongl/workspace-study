export function getRoot() {
  return document.getElementById('app');
}

export function submit(...args) {
  console.log('submiting args: ', ...args);
  return args;
}

export function createElement(type, parent) {
  const ele = document.createElement(type);
  parent.appendChild(ele);
  return ele;
}
