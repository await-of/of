# ✅ Results ✅

---

This is a basic usage of the library. Whatever happens, this will swallow error.

```javascript
const promise = new Promise((resolve, _reject) => {
  resolve({ data: true });
});

const [result, error] = await of(promise);

console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

You can skip the error value.

```javascript
async function doSomething() {
  return true;
}

const [result] = await of(doSomething);

console.log(result); // true
```

Or you can skip result value if the function has no result value but can throw an error.

```javascript
async function doSomething() {
  throw "Some error";
}

const [, error] = await of(doSomething);

if (error) {
  // Yes, here we know that something wrong happened
}
```

---