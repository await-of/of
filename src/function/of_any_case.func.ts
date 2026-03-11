import { ERR_UNKNOWN } from "../const/error.const.js";
import { FUNC, FUNC_ASYNC, FUNC_GEN, OBJ_GEN, PROMISE } from "../const/type.const.js";

import type { ConfigInterface } from "../interface/config.interface.ts";

/**
 * @name ofAnyCase
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofAnyCase<T = any, D = any>(
  callable: any,
  config: ConfigInterface = {},
): Promise<[T | D | undefined, any]> {
  config = { ...config };
  if (callable === null || callable === undefined) {
    return Promise.resolve([config.defaults, new Error(ERR_UNKNOWN)] as [D, any]);
  }
  let call: any;
  const type = callable.constructor.name || Object.prototype.toString.call(callable);
  switch (type) {
    case PROMISE:
      call = callable;
      config.retries = 0;
      delete config.args;
      break;
    case FUNC_ASYNC:
      call = callable(...(Array.isArray(config.args) ? config.args : []));
      break;
    case FUNC:
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable(...(Array.isArray(config.args) ? config.args : [])));
        } catch (caughtFunctionError) {
          reject(caughtFunctionError);
        }
      });
      break;
    case FUNC_GEN:
      call = new Promise((resolve, reject) => {
        const gen = callable(...(Array.isArray(config.args) ? config.args : []));
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
      delete config.args;
      break;
    default:
      call = new Promise((resolve, reject) => {
        Promise.resolve(callable).then(resolve).catch(reject);
      });
      delete config.args;
  }
  if (config.timeout !== undefined) {
    const timeout = Number.parseInt(`${config.timeout}`);
    if (Number.isFinite(timeout) && timeout > 0) {
      config.timeout = timeout > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : timeout;
    } else {
      delete config.timeout;
    }
  } else {
    delete config.timeout;
  }
  let timer: any;
  return (
    config.timeout
      ? Promise.race([
          Promise.resolve(call),
          new Promise((_resolve, reject) => {
            timer = setTimeout(() => reject(new Error(`Timeout: ${config.timeout}ms`)), config.timeout);
          }),
        ])
      : Promise.resolve(call)
  )
    .then((result) => {
      if (timer) {
        clearTimeout(timer);
      }
      return [result, undefined] as [T, any];
    })
    .catch((caughtError) => {
      if (timer) {
        clearTimeout(timer);
      }
      if (config.retries !== undefined) {
        const retries = Number.parseInt(`${config.retries}`);
        if (Number.isFinite(retries) && retries > 0) {
          config.retries = retries > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : retries;
        } else {
          delete config.retries;
        }
      } else {
        delete config.retries;
      }
      if (config.retries) {
        config.attempt = config.attempt === undefined ? 0 : config.attempt + 1;
        if (config.attempt < config.retries) {
          return ofAnyCase(callable, config);
        }
      }
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      if (config.error instanceof Error) {
        caughtError = config.error;
      } else if (typeof config.error === "string") {
        if (caughtError instanceof Error) {
          caughtError.message = config.error;
        } else {
          caughtError = new Error(config.error);
        }
      }
      return [config.defaults, caughtError] as [D, any];
    });
}
