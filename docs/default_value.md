# 🔨 Default Value

---

In case of error, you can overwrite result value. In the example you don't care about the error, just need to know that something went wrong.

```javascript
async function doSomething() {
  throw "Any kind of error";
}

const config = {
  defaults: null,
};

const [result, error] = await ofAnyCase(doSomething(), config);
console.log(result); // null
console.warn(error); // "Any kind of error"
```

?> You can use `ofIt()` or `Of.it()` to optimize execution

---

You must note that in case of successful completion value from configuration don't overwrite result if it's undefined.

```javascript
async function returnsVoid() {
  return undefined;
}

const config = {
  defaults: true,
};

const [result, error] = await ofAnyCase(returnsVoid(), config);
console.log(result); // undefined
console.warn(error); // undefined
```

?> You can use `ofIt()` or `Of.it()` to optimize execution

---
