/**
 * @name ofAny
 * @param {Function|Promise} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofAny<T = any, D = any>(callable: any, args?: any[], defaultResult?: D, overrideError?: string | Error): Promise<[T | D | undefined, any]>;

interface ConfigInterface {
    args?: any[];
    defaults?: any;
    error?: string | Error;
    retries?: number;
    timeout?: number;
    attempt?: number;
}

/**
 * @name ofAnyCase
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofAnyCase<T = any, D = any>(callable: any, config?: ConfigInterface): Promise<[T | D | undefined, any]>;

/**
 * @name ofCase
 * @param {Promise} promise
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofCase<T = any, D = any>(promise: Promise<T>, config?: ConfigInterface): Promise<[T | D | undefined, any]>;

/**
 * @name ofError
 * @param {Promise} promise
 * @param {*=} overrideError
 * @returns {Promise<*>}
 */
declare function ofError<T = any>(promise: Promise<T>, overrideError?: string | Error): Promise<any | undefined>;

/**
 * @name ofIt
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofIt<T = any, D = any>(promise: Promise<T>, defaultResult?: D, overrideError?: string | Error): Promise<[T | D | undefined, any]>;

/**
 * @name of
 * @param {Promise} promise
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function of<T = any>(promise: Promise<T>): Promise<[T | undefined, any]>;

/**
 * @name ofResult
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @returns {Promise<*>}
 */
declare function ofResult<T = any, D = any>(promise: Promise<T>, defaultResult?: D): Promise<T | D>;

/**
 * @name ofSync
 * @param {Function} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {[*, unknown] | [undefined, *]}
 */
declare function ofSync<T = any, D = any>(callable: any, args?: any[], defaultResult?: D, overrideError?: string | Error): [T | D | undefined, any];

/**
 * @name ofOutcome
 * @description Returns result or thrown error wherever happens
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<*>}
 */
declare function ofOutcome<T = any>(callable: any, config?: ConfigInterface): Promise<T | any>;

declare class Of {
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
    static any: typeof ofAny;
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
    static anyCase: typeof ofAnyCase;
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
    static case: typeof ofCase;
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
    static error: typeof ofError;
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
    static it: typeof ofIt;
    /**
     * @name async
     * @alias of
     * @public
     * @static
     * @method
     * @param {Promise} promise
     * @returns {Promise<[*, unknown] | [undefined, *]>}
     */
    static async: typeof of;
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
    static result: typeof ofResult;
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
    static sync: typeof ofSync;
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
    static outcome: typeof ofOutcome;
}

export { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync };
