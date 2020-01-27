(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(function() {
      return (root.of = factory());
    });
  } else if (typeof exports === "object" || (typeof module === "object" && module.exports)) {
    module.exports = root.of = factory();
  } else {
    root.of = factory();
  }
})(this, function() {
  function of(promise, config = {}) {
    return (config.timeout !== undefined
      ? Promise.race([
          Promise.resolve(promise),
          new Promise((_resolve, reject) => {
            setTimeout(() => reject(new Error("Timeout")), config.timeout);
          }),
        ])
      : Promise.resolve(promise)
    )
      .then((result) => [result, undefined])
      .catch((error) => {
        if (config.retries) {
          config.attempt = config.attempt === undefined ? 0 : config.attempt + 1;
          if (config.attempt < config.retries) {
            return of(promise, config);
          }
        }
        if (error === undefined || error === null) {
          error = new Error("Rejected");
        }
        return [config.defaults ? config.defaults : undefined, config.error ? config.error : error];
      });
  }
  return of;
});
