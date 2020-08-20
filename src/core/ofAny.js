import { ERR_UNKNOWN } from "../const/error.js";
import { FUNC, FUNC_ASYNC, FUNC_GEN, OBJ_GEN, PROMISE } from "../const/type.js";

/**
 * @name ofAny
 * @param {Function|Promise} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofAny(callable, args, defaultResult, overrideError) {
  let call;
  switch (callable.constructor.name || Object.prototype.toString.call(callable)) {
    case PROMISE:
      call = callable;
      break;
    case FUNC_ASYNC:
      call = callable(...(Array.isArray(args) ? [...args] : []));
      break;
    case FUNC:
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable(...(Array.isArray(args) ? [...args] : [])));
        } catch (caughtFunctionError) {
          reject(caughtFunctionError);
        }
      });
      break;
    case FUNC_GEN:
      call = new Promise((resolve, reject) => {
        const gen = callable(...(Array.isArray(args) ? [...args] : []));
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
