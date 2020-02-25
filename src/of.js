function of(callable, config = {}) {
  let call;
  switch (callable.constructor.name || Object.prototype.toString.call(callable)) {
    case "Promise":
      call = callable;
      config.retries = 0;
      break;
    case "AsyncFunction":
      call = callable(...(Array.isArray(config.args) ? [...config.args] : []));
      break;
    case "GeneratorFunction":
      call = new Promise((resolve, reject) => {
        const gen = callable(...(Array.isArray(config.args) ? [...config.args] : []));
        try {
          resolve(gen.next().value);
        } catch (error) {
          reject(error);
        }
      });
      break;
    case "[object Generator]":
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable.next().value);
        } catch (error) {
          reject(error);
        }
      });
      break;
    case "Function":
      call = new Promise((resolve, reject) => {
        try {
          resolve(callable(...(Array.isArray(config.args) ? [...config.args] : [])));
        } catch (error) {
          reject(error);
        }
      });
      break;
    default:
      return [
        config.defaults ? config.defaults : undefined,
        config.error ? config.error : new Error("Unknown call type"),
      ];
  }
  {
    const timeout = Number.parseInt(config.timeout);
    if (Number.isFinite(timeout) && timeout > 0) {
      config.timeout = timeout > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : timeout;
    } else {
      config.timeout = undefined;
    }
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
    .then((result) => [result, undefined])
    .catch((error) => {
      {
        const retries = Number.parseInt(config.retries);
        if (Number.isFinite(retries) && retries > 0) {
          config.retries = retries > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : retries;
        } else {
          config.retries = undefined;
        }
      }
      if (config.retries) {
        config.attempt = config.attempt === undefined ? 0 : config.attempt + 1;
        if (config.attempt < config.retries) {
          return of(callable, config);
        }
      }
      if (error === undefined || error === null) {
        error = new Error("Rejected");
      }
      return ["defaults" in config ? config.defaults : undefined, "error" in config ? config.error : error];
    });
}

export default of;
export { of };
