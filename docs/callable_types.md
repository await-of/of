# 🔰 Callable Types 🔰

---

## Promise

```javascript
const promise = new Promise(resolve => resolve("OK"));
const configuration = {
  retries: 10, // ignored only for promises!
};
const [result, error] = await ofAnyCase(promise);
console.log(result); // "OK"
```

!> Rejected promise can't be used again. `retries` option is ignored.

---

## Asynchronous Function

```javascript
async function doSomething() {
  return "OK";
}
const [result, error] = await ofAnyCase(doSomething);
console.log(result); // "OK"
```

---

## Asynchronous Function with parameters

```javascript
async function doSomething(start, end) {
  return `${start}OK${end}`;
}
const configuration = {
  args: ["<", ">"],
};
const [result, error] = await ofAnyCase(doSomething, configuration);
console.log(result); // "<OK>"
```

---

## Synchronous Function

This is the only example. Probably there better solution for any synchronous execution.

```javascript
function doSomething() {
  return "OK";
}
const [result, error] = await ofAnyCase(doSomething);
console.log(result); // "OK"
```

---

## Generator Function

```javascript
function* doGenerator() {
  yield 42;
}
const [result, error] = await ofAnyCase(doGenerator);
console.log(result); // 42
```

## Generator Object

```javascript
function* doGenerator() {
  yield 1984;
}
const generator = doGenerator();
const [result, error] = await ofAnyCase(generator);
console.log(result); // 1984
```

---
