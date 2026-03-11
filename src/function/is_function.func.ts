/**
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): value is Function {
  if (typeof value !== "function") {
    return false;
  }
  return !/^class\s/.test(Function.prototype.toString.call(value));
}
