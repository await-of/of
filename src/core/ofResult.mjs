/**
 * @name ofResult
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @returns {Promise<*>}
 */
export default function ofResult(promise, defaultResult) {
  return Promise.resolve(promise)
    .then((result) => result)
    .catch(() => defaultResult);
}
