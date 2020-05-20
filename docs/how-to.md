# 📚 How-to 📚

---

Code examples for every function.

---

**of / Of.async**

```javascript
const [result, error] = await of(promiseOrAsyncFunction);
const [result, error] = await Of.async(promiseOrAsyncFunction);
```

**ofAny / Of.any**

```javascript
const [result, error] = await ofAny(anyCallable, arrayOfArguments, defaultResult, overrideError);
const [result, error] = await Of.any(anyCallable, arrayOfArguments, defaultResult, overrideError);
```

**ofAnyCase / Of.anyCase**

```javascript
const [result, error] = await ofAnyCase(anyCallable, configuration);
const [result, error] = await Of.anyCase(anyCallable, configuration);
```

**ofCase / Of.case**

```javascript
const [result, error] = await ofCase(promiseOrAsyncFunction, configuration);
const [result, error] = await Of.case(promiseOrAsyncFunction, configuration);
```

**ofError / Of.error**

```javascript
const error = await ofError(promiseOrAsyncFunction, overrideError);
const error = await Of.error(promiseOrAsyncFunction, overrideError);
```

**ofIt / Of.it**

```javascript
const [result, error] = await ofIt(promise, defaultResult, overrideError);
const [result, error] = await Of.it(promise, defaultResult, overrideError);
```

**ofOutcome / Of.outcome**

```javascript
const resultOrError = await ofOutcome(anyCallable, configuration);
const resultOrError = await Of.outcome(anyCallable, configuration);
```

**ofResult / Of.result**

```javascript
const result = await ofResult(promiseOrAsyncFunction, defaultResult, overrideError);
const result = await Of.result(promiseOrAsyncFunction, defaultResult, overrideError);
```

**ofSync / Of.sync**

```javascript
const [result, error] = await ofSync(synchronousFunction, arrayOfArguments, defaultResult, overrideError);
const [result, error] = await Of.sync(synchronousFunction, arrayOfArguments, defaultResult, overrideError);
```

---
