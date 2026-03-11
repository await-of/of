export interface ConfigInterface {
  args?: any[];
  defaults?: any;
  error?: string | Error;
  retries?: number;
  timeout?: number;
  attempt?: number;
}
