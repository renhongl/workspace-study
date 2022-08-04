const p1 = {
  name: 'dog',
};

const p2 = {
  name: 'cat',
};

function testFn(...params) {
  console.log(this.name, params);
}

// const f1 = testFn.bind(p1);
// const f2 = testFn.bind(p2);
// console.log('----test bind------');
// console.log(f1(1, 2));
// console.log(f2('aaa', 'ccc'));
// console.log(testFn.myCall(p1, 3, 4));
// console.log(testFn.myCall(p2, 'aaa', 'bbb'));
