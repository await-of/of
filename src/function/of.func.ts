import { ERR_UNKNOWN } from "../const/error.const.js";

/**
 * @name of
 * @param {Promise} promise
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function of<T = any>(promise: Promise<T>): Promise<[T | undefined, any]> {
  return Promise.resolve(promise)
    .then((result) => [result, undefined] as [T, any])
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      return [undefined, caughtError] as [undefined, any];
    });
}
