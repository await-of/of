## 🔄️ Retry

Example of calling an asynchronous function. You must pass asynchronous function not the promise.

```js
async function tryMe() {
  // Useful code here…
  throw "Not gonna happen";
}

const config = {
  args: [], // optional
  retries: 5,
};

const [result, error] = await ofAnyCase(tryMe, config);
console.log(result); // undefined
console.log(error); // "Not gonna happen"
```

!> To run properly, you need to pass asynchronous function, not the promise. Rejected promise can't be used again!


Example of calling an asynchronous function with parameters.

```js
async function hello(name) {
  return `Hello, ${name}`;
}

const config = {
  args: ["John"],
  retries: 5,
};

const [result, error] = await ofAnyCase(hello, config);
console.log(result); // "Hello, John"
console.log(error); // undefined
```


Example of reconnecting to the database. You must pass asynchronous function not the promise.

```js
const mongoose = require("mongoose");

const URI = "mongodb://user:pass@host:1234/db";

async function connect(uri) {
  return mongoose.connect(uri);
}

const config = {
  args: [URI],
  retries: 5,
};

const [connection, error] = await ofAnyCase(connect, config);
if (error) {
  console.warn(`Error: ${error.message}`);
  process.exit(1);
}
console.log("Successfully connected!");
```

