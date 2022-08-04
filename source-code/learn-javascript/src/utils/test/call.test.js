const p1 = {
  name: 'dog',
};

const p2 = {
  name: 'cat',
};

function testFn(...params) {
  console.log(this.name, params);
}

// console.log(testFn.call(p1, 3, 4));
// console.log(testFn.myCall(p1, 3, 4));
// console.log(testFn.myCall(p2, 'aaa', 'bbb'));
