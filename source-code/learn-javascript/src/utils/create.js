export function create(obj) {
  const Fn = () => {};
  Fn.prototype = obj;
  return new Fn();
}
