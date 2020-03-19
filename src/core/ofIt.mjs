import { ERR_UNKNOWN } from "../const/error.mjs";

/**
 * @name ofIt
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export default function ofIt(promise, defaultResult, overrideError) {
  return Promise.resolve(promise)
    .then((result) => [result])
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      if (overrideError instanceof Error) {
        caughtError = overrideError;
      } else if (typeof overrideError === "string") {
        caughtError.message = overrideError;
      }
      return [defaultResult, caughtError];
    });
}
