const p1 = {
  name: 'dog',
};

const p2 = {
  name: 'cat',
};

function testFn(...params) {
  console.log(this.name, params);
}

// console.log(testFn.apply(p1, [3, 4]));
// console.log(testFn.myApply(p1, [3, 4, 5]));
// console.log(testFn.myApply(p2, ['aaa', 'bbb']));
