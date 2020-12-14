# 💬 Usage

---

## Promise

```javascript
const { ofAnyCase } = require("@await-of/of");

const promise = new Promise((resolve, _reject) => {
  resolve({ data: true });
});

const config = {
  defaults: "🤷 Default value in case of error",
  error: new Error("💀 Custom error, replaces thrown error"),
  timeout: 1000, // ⏱️ Delay before timeout error
};

const [result, error] = await ofAnyCase(promise, config); // no error thrown

console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

?> You can use `ofCase()` or `Of.case()` to optimize execution

---

## Asynchronous Function

```javascript
const { ofAnyCase } = require("@await-of/of");

async function asynchronous() {
  throw new Error("Unknown error");
}

const config = {
  args: ["x", 1],
  defaults: "DEFAULT VALUE",
  error: new Error("CustomError"),
  retries: 3, // 🔁 Third time's a charm
  timeout: 1000 // ⏱️ Delay before timeout error
};

const [result, error] = await ofAnyCase(asynchronous, config); // no error thrown

console.log(result); // "DEFAULT VALUE"
console.warn(error.message); // "CustomError"
```

---
