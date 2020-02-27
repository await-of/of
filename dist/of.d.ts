export interface IOfConfig<D> {
  args?: any[];
  defaults?: D;
  error?: string | Error;
  retries?: number;
  timeout?: number;
}

declare function of<P extends any, D extends any>(
  callable: (...args: any[]) => P | Promise<P>,
  config?: IOfConfig<D>,
): Promise<[P | D | undefined, Error | undefined]>;

export default of;
export { of };
