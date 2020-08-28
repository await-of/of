# 💔 Overwrite Error

---

Sometimes you don't need the whole exact error or want to hide it. In an example, you need to provide an error message to the user.

```javascript
async function databaseRequest() {
  throw "Your SQL query was not formed correctly. Whoops.";
}

const config = {
  error: new Error("Unable process your request."),
};

const [result, error] = await ofAnyCase(databaseRequest(), config);
console.log(result); // undefined
console.warn(error); // "Unable process your request."
```

?> You can use `ofIt()` or `Of.it()` to optimize execution

---

Also, you can replace the error message and keep a stack trace.

```javascript
async function databaseRequest() {
  throw "Error at line #2";
}

const config = {
  error: "A custom error message, but the same stack trace",
};

const [result, error] = await ofAnyCase(databaseRequest(), config);
console.log(result); // undefined
console.warn(error); // "A custom error message, but the same stack trace"
```

?> You can use `ofIt()` or `Of.it()` to optimize execution

---
