import { ERR_UNKNOWN } from "../const/error.js";

/**
 * @name ofCase
 * @param {Promise} promise
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export function ofCase(promise, config = {}) {
  {
    const { args, defaults, error, timeout } = { ...config };
    config = { args, defaults, error, timeout };
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
  return (config.timeout
    ? Promise.race([
        Promise.resolve(promise),
        new Promise((_resolve, reject) => {
          setTimeout(() => reject(new Error(`Timeout: ${config.timeout}ms`)), config.timeout);
        }),
      ])
    : Promise.resolve(promise)
  )
    .then((result) => [result, undefined])
    .catch((caughtError) => {
      if (caughtError === undefined || caughtError === null) {
        caughtError = new Error(ERR_UNKNOWN);
      }
      if (config.error instanceof Error) {
        caughtError = config.error;
      } else if (typeof config.error === "string") {
        caughtError.message = config.error;
      }
      return [config.defaults, caughtError];
    });
}
