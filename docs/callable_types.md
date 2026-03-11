## 🔰 Callable Types

### Promise

```js
const promise = new Promise(resolve => resolve("OK"));
const configuration = {
  retries: 10, // ignored only for promises!
};
const [result, error] = await ofAnyCase(promise);
console.log(result); // "OK"
```

!> Rejected promise can't be used again. `retries` option is ignored.

```js
const promise = new Promise(resolve => resolve("OK"));
const [result, error] = await of(promise);
console.log(result); // "OK"
```

?> You can use `of()` or `Of.async()` to optimize execution. But you must use other functions and methods for other callable types.


### Asynchronous Function

```js
async function doSomething() {
  return "OK";
}
const [result, error] = await ofAnyCase(doSomething);
console.log(result); // "OK"
```


### Asynchronous Function with parameters

```js
async function doSomething(start, end) {
  return `${start}OK${end}`;
}
const configuration = {
  args: ["<", ">"],
};
const [result, error] = await ofAnyCase(doSomething, configuration);
console.log(result); // "<OK>"
```


### Synchronous Function

This is the only example. Probably there better solution for any synchronous execution.

```js
function doSomething() {
  return "OK";
}
const [result, error] = await ofAnyCase(doSomething);
console.log(result); // "OK"
```


### Generator Function

```js
function* doGenerator() {
  yield 42;
}
const [result, error] = await ofAnyCase(doGenerator);
console.log(result); // 42
```

### Generator Object

```js
function* doGenerator() {
  yield 1984;
}
const generator = doGenerator();
const [result, error] = await ofAnyCase(generator);
console.log(result); // 1984
```

