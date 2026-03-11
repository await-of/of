import { ERR_UNKNOWN } from "../const/error.const.js";
import { FUNC, FUNC_ASYNC, FUNC_GEN, OBJ_GEN, PROMISE } from "../const/type.const.js";

/**
 * @name ofAny
 * @param {Function|Promise} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofAny<T = any, D = any>(
  callable: any,
  args?: any[],
  defaultResult?: D,
  overrideError?: string | Error,
): Promise<[T | D | undefined, any]> {
  if (callable === null || callable === undefined) {
    return Promise.resolve([defaultResult, new Error(ERR_UNKNOWN)] as [D, any]);
  }
  let call: any;
  const type = callable.constructor.name || Object.prototype.toString.call(callable);
  switch (type) {
    case PROMISE:
      call = callable;
      break;
    case FUNC_ASYNC:
      call = callable(...(Array.isArray(args) ? args : []));
      break;
    case FUNC:
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable(...(Array.isArray(args) ? args : [])));
        } catch (caughtFunctionError) {
          reject(caughtFunctionError);
        }
      });
      break;
    case FUNC_GEN:
      call = new Promise((resolve, reject) => {
        const gen = callable(...(Array.isArray(args) ? args : []));
        try {
          resolve(gen.next().value);
        } catch (caughtGeneratorFunctionError) {
          reject(caughtGeneratorFunctionError);
        }
      });
      break;
    case OBJ_GEN:
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable.next().value);
        } catch (caughtGeneratorError) {
          reject(caughtGeneratorError);
        }
      });
      break;
    default:
      call = new Promise((resolve, reject) => {
        Promise.resolve(callable).then(resolve).catch(reject);
      });
  }
  return Promise.resolve(call)
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
