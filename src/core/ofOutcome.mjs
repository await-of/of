import { ofAnyCase } from "./ofAnyCase.mjs";

/**
 * @name ofOutcome
 * @description Returns result or thrown error wherever happens
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<*>}
 */
export function ofOutcome(callable, config = {}) {
  return new Promise((resolve) =>
    ofAnyCase(callable, config).then(([result, error]) => {
      resolve(error ? error : result);
    }),
  );
}
