export interface IOfConfig<D, E> {
  defaults?: D;
  error?: E;
  retries?: number;
  timeout?: number;
}

declare function of<P extends any, D extends any, E extends any>(
  promise: Promise<P>,
  config?: IOfConfig<D, E>,
): Promise<[P | D | undefined, E | undefined]>;

export default of;
export { of };
