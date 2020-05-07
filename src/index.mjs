import { of } from "./core/of.mjs";
import { ofAny } from "./core/ofAny.mjs";
import { ofAnyCase } from "./core/ofAnyCase.mjs";
import { ofCase } from "./core/ofCase.mjs";
import { ofError } from "./core/ofError.mjs";
import { ofIt } from "./core/ofIt.mjs";
import { ofOutcome } from "./core/ofOutcome.mjs";
import { ofResult } from "./core/ofResult.mjs";
import { ofSync } from "./core/ofSync.mjs";

class Of {
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

export { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync };
