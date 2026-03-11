/**
 * @name ofResult
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @returns {Promise<*>}
 */
export function ofResult<T = any, D = any>(promise: Promise<T>, defaultResult?: D): Promise<T | D> {
  return Promise.resolve(promise).catch(() => defaultResult as D);
}
