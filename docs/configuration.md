# ⚙️ Configuration ⚙️

---

Example configuration.

```javascript
const configuration = {
  // Array of arguments that will be used in function call.
  args: [{x: 1, y: 2}, true],
  // Default value in case of error. Will replace undefined result.
  defaults: "Default Value",
  // Custom error, replaces thrown error.
  error: new Error("Whoops"),
  // Count of additional retries after failed execution.
  // Not usable with promises use function with arguments instead.
  retries: 3,
  // Milliseconds for the execution timeout.
  timeout: 1000,
};
const [result, error] = await ofAnyCase(async () => {}, configuration);
```

TypeScript interface.

```typescript
export interface IOfConfig {
  args?: any[];
  defaults?: any;
  error?: string | Error;
  retries?: number;
  timeout?: number;
}
```

---
