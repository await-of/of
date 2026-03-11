import { ERR_UNKNOWN } from "../const/error.const.js";

/**
 * @name ofError
 * @param {Promise} promise
 * @param {*=} overrideError
 * @returns {Promise<*>}
 */
export function ofError<T = any>(promise: Promise<T>, overrideError?: string | Error): Promise<any | undefined> {
  return Promise.resolve(promise)
    .then(() => undefined)
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      if (overrideError instanceof Error) {
        caughtError = overrideError;
      } else if (typeof overrideError === "string") {
        if (caughtError instanceof Error) {
          caughtError.message = overrideError;
        } else {
          caughtError = new Error(overrideError);
        }
      }
      return caughtError;
    });
}
