import { ERR_UNKNOWN } from "../const/error.const.js";

/**
 * @name ofIt
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofIt<T = any, D = any>(
  promise: Promise<T>,
  defaultResult?: D,
  overrideError?: string | Error,
): Promise<[T | D | undefined, any]> {
  return Promise.resolve(promise)
    .then((result) => [result, undefined] as [T, any])
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
      return [defaultResult, caughtError] as [D, any];
    });
}
