export function myInstanceof(leftObj, rightClass) {
  let proto = Object.getPrototypeOf(leftObj);
  const prototype = rightClass.prototype;

  while (true) {
    if (!proto) {
      return false;
    }

    if (proto === prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }
}
