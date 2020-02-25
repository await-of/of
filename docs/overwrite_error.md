# 💔 Overwrite Error 💔

---

Sometimes you don't need whole exact error or want to hide it. In example you need to provide an error message to the user.

```javascript
async function databaseRequest() {
  throw "Your SQL query was not formed correctly. Whoops.";
}

const config = {
  error: "Unable process your request.",
};

const [result, error] = await of(databaseRequest(), config);
console.log(result); // undefined
console.warn(error); // "Unable process your request."
```

---
