## 📚 How-to

Code examples for every function.

**of / Of.async**

```js
const [result, error] = await of(promiseOrAsyncFunction);
const [result, error] = await Of.async(promiseOrAsyncFunction);
```

**ofAny / Of.any**

```js
const [result, error] = await ofAny(anyCallable, arrayOfArguments, defaultResult, overrideError);
const [result, error] = await Of.any(anyCallable, arrayOfArguments, defaultResult, overrideError);
```

**ofAnyCase / Of.anyCase**

```js
const [result, error] = await ofAnyCase(anyCallable, configuration);
const [result, error] = await Of.anyCase(anyCallable, configuration);
```

**ofCase / Of.case**

```js
const [result, error] = await ofCase(promiseOrAsyncFunction, configuration);
const [result, error] = await Of.case(promiseOrAsyncFunction, configuration);
```

**ofError / Of.error**

```js
const error = await ofError(promiseOrAsyncFunction, overrideError);
const error = await Of.error(promiseOrAsyncFunction, overrideError);
```

**ofIt / Of.it**

```js
const [result, error] = await ofIt(promiseOrAsyncFunction, defaultResult, overrideError);
const [result, error] = await Of.it(promiseOrAsyncFunction, defaultResult, overrideError);
```

**ofOutcome / Of.outcome**

```js
const resultOrError = await of_outcome(anyCallable, configuration);
const resultOrError = await Of.outcome(anyCallable, configuration);
```

**ofResult / Of.result**

```js
const result = await ofResult(promiseOrAsyncFunction, defaultResult, overrideError);
const result = await Of.result(promiseOrAsyncFunction, defaultResult, overrideError);
```

**ofSync / Of.sync**

```js
const [result, error] = await of_sync(() => synchronousFunction, arrayOfArguments, defaultResult, overrideError);
const [result, error] = await Of.sync(() => synchronousFunction, arrayOfArguments, defaultResult, overrideError);
```
