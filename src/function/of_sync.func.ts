import { ERR_UNKNOWN } from "../const/error.const.js";

import { isFunction } from "./is_function.func.js";

/**
 * @name ofSync
 * @param {Function} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {[*, unknown] | [undefined, *]}
 */
export function ofSync<T = any, D = any>(
  callable: any,
  args?: any[],
  defaultResult?: D,
  overrideError?: string | Error,
): [T | D | undefined, any] {
  if (!isFunction(callable)) {
    return [undefined, new Error(ERR_UNKNOWN)];
  }
  try {
    return [callable(...(Array.isArray(args) ? args : [])), undefined] as [T, any];
  } catch (caughtFunctionError: any) {
    let caughtError: any;
    if (overrideError instanceof Error) {
      caughtError = overrideError;
    } else if (typeof overrideError === "string") {
      if (caughtFunctionError instanceof Error) {
        caughtFunctionError.message = overrideError;
        caughtError = caughtFunctionError;
      } else {
        caughtError = new Error(overrideError);
      }
    } else if (caughtFunctionError === undefined || caughtFunctionError === null) {
      caughtError = new Error(ERR_UNKNOWN);
    } else {
      caughtError = caughtFunctionError;
    }
    return [defaultResult, caughtError] as [D, any];
  }
}
