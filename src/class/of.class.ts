import { ofAny } from "../function/of_any.func.js";
import { ofAnyCase } from "../function/of_any_case.func.js";
import { ofCase } from "../function/of_case.func.js";
import { ofError } from "../function/of_error.func.js";
import { ofIt } from "../function/of_it.func.js";
import { of } from "../function/of.func.js";
import { ofResult } from "../function/of_result.func.js";
import { ofSync } from "../function/of_sync.func.js";
import { ofOutcome } from "../function/of_outcome.func.js";

export class Of {
  /**
   * @name any
   * @alias ofAny
   * @public
   * @static
   * @method
   * @param {Function|Promise} callable
   * @param {[]=} args
   * @param {*=} defaultResult
   * @param {*=} overrideError
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static any = ofAny;
  /**
   * @name anyCase
   * @alias ofAnyCase
   * @public
   * @static
   * @method
   * @param {Function|Promise} callable
   * @param {*=} config
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static anyCase = ofAnyCase;
  /**
   * @name case
   * @alias ofCase
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @param {*=} config
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static case = ofCase;
  /**
   * @name error
   * @alias ofError
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @param {*=} overrideError
   * @returns {Promise<*>}
   */
  static error = ofError;
  /**
   * @name it
   * @alias ofIt
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @param {*=} defaultResult
   * @param {*=} overrideError
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static it = ofIt;
  /**
   * @name async
   * @alias of
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static async = of;
  /**
   * @name result
   * @alias ofResult
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @param {*=} defaultResult
   * @returns {Promise<*>}
   */
  static result = ofResult;
  /**
   * @name sync
   * @alias ofSync
   * @public
   * @static
   * @method
   * @param {Function} callable
   * @param {[]=} args
   * @param {*=} defaultResult
   * @param {*=} overrideError
   * @returns {[*, unknown] | [undefined, *]}
   */
  static sync = ofSync;
  /**
   * @name outcome
   * @alias ofOutcome
   * @public
   * @static
   * @method
   * @param {Function|Promise} callable
   * @param {*=} config
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  static outcome = ofOutcome;
}
