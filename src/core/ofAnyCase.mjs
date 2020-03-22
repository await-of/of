import { ERR_UNKNOWN } from "../const/error.mjs";
import { FUNC, FUNC_ASYNC, FUNC_GEN, OBJ_GEN, PROMISE } from "../const/type.mjs";

/**
 * @name ofAnyCase
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
export default function ofAnyCase(callable, config = {}) {
  {
    const { args, defaults, error, retries, timeout } = new Object(config);
    config = { args, defaults, error, retries, timeout };
  }
  let call;
  switch (callable.constructor.name || Object.prototype.toString.call(callable)) {
    case PROMISE:
      call = callable;
      config.retries = 0;
      delete config.args;
      break;
    case FUNC_ASYNC:
      call = callable(...(Array.isArray(config.args) ? [...config.args] : []));
      break;
    case FUNC:
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable(...(Array.isArray(config.args) ? [...config.args] : [])));
        } catch (caughtFunctionError) {
          reject(caughtFunctionError);
        }
      });
      break;
    case FUNC_GEN:
      call = new Promise((resolve, reject) => {
        const gen = callable(...(Array.isArray(config.args) ? [...config.args] : []));
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
    const timeout = Number.parseInt(config.timeout);
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
        Promise.resolve(call),
        new Promise((_resolve, reject) => {
          setTimeout(() => reject(new Error(`Timeout: ${config.timeout}ms`)));
        }),
      ])
    : Promise.resolve(call)
  )
    .then((result) => [result])
    .catch((caughtError) => {
      if (config.retries !== undefined) {
        const retries = Number.parseInt(config.retries);
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
        caughtError.message = config.error;
      }
      return [config.defaults, caughtError];
    });
}
