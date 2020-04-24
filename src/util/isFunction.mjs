/**
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value) {
  if (Object.prototype.toString.call(value) !== "[object Function]") {
    return false;
  }
  return !/^class\s/.test(Function.prototype.toString.call(value));
}
