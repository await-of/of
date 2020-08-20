import { ERR_UNKNOWN } from "../const/error.js";

/**
 * @name of
 * @param {Promise} promise
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function of(promise) {
  return Promise.resolve(promise)
    .then((result) => [result])
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      return [undefined, caughtError];
    });
}
