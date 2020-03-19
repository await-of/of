import { ERR_UNKNOWN } from "../const/error.mjs";

/**
 * @name of
 * @param {Promise} promise
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export default function of(promise) {
  return Promise.resolve(promise)
    .then((result) => [result])
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      return [undefined, caughtError];
    });
}
