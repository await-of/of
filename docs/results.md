## ✅ Results

This is a basic usage of the library. Whatever happens, this will swallow the error.

```js
const promise = new Promise((resolve, _reject) => {
  resolve({ data: true });
});

const [result, error] = await ofAnyCase(promise);

console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

You can skip the error value.

```js
async function doSomething() {
  return true;
}

const [result] = await ofAnyCase(doSomething);

console.log(result); // true
```

?> You can use `ofResult()` or `Of.result()` to optimize execution


Or you can skip the result value if the function has no result value but can throw an error.

```js
async function doSomething() {
  throw "Some error";
}

const [, error] = await ofAnyCase(doSomething);

if (error) {
  // Yes, here we know that something wrong happened
}
```

