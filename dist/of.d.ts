export interface IOfConfig<D> {
  args?: any[];
  defaults?: D;
  error?: string | Error;
  retries?: number;
  timeout?: number;
}

/**
 * @name of
 * @param {Promise} promise
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function of<P = any>(promise: Promise<P>): Promise<Readonly<[P | undefined, Error | undefined]>>;

/**
 * @name ofAny
 * @param {Function|Promise} callable
 * @param {[]=} args
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofAny<P extends any, D extends any>(
  callable: ((...args: any[]) => P) | Promise<P>,
  args?: any[],
  defaultResult?: D,
  overrideError?: string | Error,
): Promise<Readonly<[P | undefined, Error | undefined]>>;

/**
 * @name ofAnyCase
 * @param {Function|Promise} callable
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofAnyCase<P extends any, D extends any>(
  callable: ((...args: any[]) => P) | Promise<P>,
  config?: IOfConfig<D>,
): Promise<Readonly<[P | D | undefined, Error | undefined]>>;

/**
 * @name ofCase
 * @param {Promise} promise
 * @param {*=} config
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofCase<P extends any, D extends any>(
  promise: Promise<P>,
  config?: IOfConfig<D>,
): Promise<Readonly<[P | D | undefined, Error | undefined]>>;

/**
 * @name ofError
 * @param {Promise} promise
 * @param {*=} overrideError
 * @returns {Promise<*>}
 */
declare function ofError<P extends any>(
  promise: Promise<P>,
  overrideError?: string | Error,
): Promise<Readonly<Error | undefined>>;

/**
 * @name ofIt
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @param {*=} overrideError
 * @returns {Promise<[*, unknown] | [undefined, *]>}
 */
declare function ofIt<P extends any, D extends any>(
  promise: Promise<P>,
  defaultResult?: D,
  overrideError?: string | Error,
): Promise<Readonly<[P | D | undefined, Error | undefined]>>;

/**
 * @name ofResult
 * @param {Promise} promise
 * @param {*=} defaultResult
 * @returns {Promise<*>}
 */
declare function ofResult<P extends any, D extends any>(
  promise: Promise<P>,
  defaultResult?: D,
): Promise<Readonly<[P | D]>>;

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
  public static any<P extends any, D extends any>(
    callable: ((...args: any[]) => P) | Promise<P>,
    args?: any[],
    defaultResult?: D,
    overrideError?: string | Error,
  ): Promise<Readonly<[P | undefined, Error | undefined]>>;
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
  public static anyCase<P extends any, D extends any>(
    callable: ((...args: any[]) => P) | Promise<P>,
    config?: IOfConfig<D>,
  ): Promise<Readonly<[P | D | undefined, Error | undefined]>>;
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
  public static case<P extends any, D extends any>(
    promise: Promise<P>,
    config?: IOfConfig<D>,
  ): Promise<Readonly<[P | D | undefined, Error | undefined]>>;
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
  public static error<P extends any>(
    promise: Promise<P>,
    overrideError?: string | Error,
  ): Promise<Readonly<Error | undefined>>;
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
  public static it<P extends any, D extends any>(
    promise: Promise<P>,
    defaultResult?: D,
    overrideError?: string | Error,
  ): Promise<Readonly<[P | D | undefined, Error | undefined]>>;
  /**
   * @name async
   * @alias of
   * @public
   * @static
   * @method
   * @param {Promise} promise
   * @returns {Promise<[*, unknown] | [undefined, *]>}
   */
  public static async<P = any>(promise: Promise<P>): Promise<Readonly<[P | undefined, Error | undefined]>>;
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
  public static result<P extends any, D extends any>(
    promise: Promise<P>,
    defaultResult?: D,
  ): Promise<Readonly<[P | D]>>;
}

export { Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofResult };
