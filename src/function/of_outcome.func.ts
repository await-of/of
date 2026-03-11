import { ofAnyCase } from "./of_any_case.func.js";

import type { ConfigInterface } from "../interface/config.interface.ts";

/**
 * @name ofOutcome
 * @description Returns result or thrown error wherever happens
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<*>}
 */
export function ofOutcome<T = any>(callable: any, config: ConfigInterface = {}): Promise<T | any> {
  return ofAnyCase(callable, config).then(([result, error]) => (error !== undefined ? error : result));
}
