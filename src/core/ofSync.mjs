import { ERR_UNKNOWN } from "../const/error.mjs";

import { isFunction } from "../util/isFunction.mjs";

/**
 * @name ofSync
 * @param {Function} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {[*, unknown] | [undefined, *]}
 */
export function ofSync(callable, args, defaultResult, overrideError) {
  if (!isFunction(callable)) {
    return [undefined, new Error(ERR_UNKNOWN)];
  }
  try {
    return [callable(...(Array.isArray(args) ? [...args] : [])), undefined];
  } catch (caughtFunctionError) {
    let caughtError;
    if (overrideError instanceof Error) {
      caughtError = overrideError;
    } else if (typeof overrideError === "string") {
      caughtFunctionError.message = overrideError;
      caughtError = caughtFunctionError;
    } else if (caughtFunctionError === undefined || caughtFunctionError === null) {
      caughtError = new Error(ERR_UNKNOWN);
    } else {
      caughtError = caughtFunctionError;
    }
    return [defaultResult, caughtError];
  }
}
