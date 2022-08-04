function Person() {}

Person.prototype.getName = function () {
  return this.name;
};

function Child() {}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
