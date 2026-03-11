import { ERR_UNKNOWN } from "../const/error.const.js";

import type { ConfigInterface } from "../interface/config.interface.ts";

/**
 * @name ofCase
 * @param {Promise} promise
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofCase<T = any, D = any>(
  promise: Promise<T>,
  config: ConfigInterface = {},
): Promise<[T | D | undefined, any]> {
  config = { ...config };
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
          Promise.resolve(promise),
          new Promise((_resolve, reject) => {
            timer = setTimeout(() => reject(new Error(`Timeout: ${config.timeout}ms`)), config.timeout);
          }),
        ])
      : Promise.resolve(promise)
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
