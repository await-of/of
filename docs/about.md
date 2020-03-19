# 🤔 About 🤔

---

OF is async / await wrapper for easy error handling, retriable asynchronous function calls, execution timeouts, default values, and errors.

<table><thead><tr><td colspan="3">
</td></tr></thead><tbody>
<tr><td>

```javascript
// Vanilla JavaScript

async function doAsync() {
  return true;
}
let result;
let error;
try {
   result = await doAsync();
} catch(err) {
   error = err;
}
if (error) {
  // Error
  console.warn(error);
} else {
  // Success
  console.log(result);
}
```

</td>
<td>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
<strong>&#x21E5;</strong><br>
</td>
<td>

```javascript
// Basic library usage

async function doAsync() {
  return true;
}
const [result, error] = await ofAnyCase(doAsync);
if (error) {
  // Error
  console.warn(error);
} else {
  // Success
  console.log(result);
}






```

</td></tr>
</tbody></table>

---

However, it's basic usage very straightforward and can be handled differently by developers.
The main aim is to create the Swiss Army Knife for asynchronous code.
What actually it solves?

-   It accepts asynchronous functions, promises, synchronous functions, generator functions, and objects. In case you messed up with the parameters or don't want to do extra code.

-   It gets rid of endless try/catch if you have to write a very complex code where every step should be checked for errors.

-   Not only AJAX requests need timeouts.
Long time response from the server, parsing, selecting something from the database, etc. should be handled in the same way as asynchronous operations.
The wrapper can be used when the server connection was closed but the script keeps processing data almost infinitely after that.

-   Retry configuration can be used not only for AJAX requests (refresh token in the example) but also for MongoDB read/write functions.

-   Default values can be used when there is no good result but you actually don't care about reasons why this happens.

-   You can overwrite errors on the fly. In an example, you can use one error string for many asynchronous code executions.

---
