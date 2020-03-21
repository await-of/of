import { ERR_UNKNOWN } from "../const/error";

/**
 * @name ofError
 * @param {Promise} promise
 * @param {*=} overrideError
 * @returns {Promise<*>}
 */
export default function ofError(promise, overrideError) {
  return Promise.resolve(promise)
    .then(() => undefined)
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      if (overrideError instanceof Error) {
        caughtError = overrideError;
      } else if (typeof overrideError === "string") {
        caughtError.message = overrideError;
      }
      return caughtError;
    });
}
