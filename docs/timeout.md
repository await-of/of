# ⏲️ Timeout ⏲️

---

Example with asynchronous function execution.

```javascript
async function doSomething() {
  return "Success";
}

const config = { timeout: 1 }; // 1 ms

const [result, error] = await of(doSomething(), config);

console.warn(error); // undefined
console.log(result); // "Success"
```

---

Example of reading a very huge JSON file. If the file is too large and we can't wait more than second.

```javascript
const fs = require("fs");

function readConfig() {
  return new Promise((resolve, reject) => {
    fs.readFile("./large_config.json", "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

const config = { timeout: 1000 }; // 1 second

const [result, error] = await of(readConfig(), config);

console.warn(error.message); // 'Timeout: 1000ms'
console.log(result); // undefined
```

---

Example with AJAX request. If the problem on the server-side even when the connection was closed the script kept processing the data. Here we skipping the processing.

```javascript
const axios = require("axios");

const url = "https://url_with_large_xml_to_process.xml";

const config = { timeout: 30000 }; // 30 secons

const [result, error] = await of(axios.head(url), config);

console.log(error.message); // 'Timeout: 30000ms'
console.log(result); // undefined
```

---
