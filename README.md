# OF

🍡🍭🍬 Promise wrapper with some sugar 🍡🍭🍬

[🗎 OF Documentation 🗎](https://of.js.org)

[![NPM Version](https://img.shields.io/npm/v/@r37r0m0d3l/of.svg?style=flat)]()
[![NPM Downloads](https://img.shields.io/npm/dt/@r37r0m0d3l/of.svg?style=flat)]()
[![Build Status](https://travis-ci.org/r37r0m0d3l/of.svg?branch=master)](https://travis-ci.org/r37r0m0d3l/of)
[![Issues](https://img.shields.io/github/issues-raw/r37r0m0d3l/of.svg?maxAge=25000)](https://github.com/r37r0m0d3l/of/issues)

[![Known Vulnerabilities](https://snyk.io/test/github/r37r0m0d3l/of/badge.svg?targetFile=package.json)](https://snyk.io/test/github/r37r0m0d3l/of?targetFile=package.json)
[![Dependency Status](https://david-dm.org/r37r0m0d3l/of.svg)](https://david-dm.org/r37r0m0d3l/of)
[![devDependencies Status](https://david-dm.org/r37r0m0d3l/of/dev-status.svg)](https://david-dm.org/r37r0m0d3l/of?type=dev)

[![GitHub stars](https://img.shields.io/github/stars/r37r0m0d3l/of.svg?style=social&label=Star)](https://github.com/r37r0m0d3l/of)
[![GitHub watchers](https://img.shields.io/github/watchers/r37r0m0d3l/of.svg?style=social&label=Watch)](https://github.com/r37r0m0d3l/of)
[![GitHub followers](https://img.shields.io/github/followers/r37r0m0d3l.svg?style=social&label=Follow)](https://github.com/r37r0m0d3l/of)
[![GitHub forks](https://img.shields.io/github/forks/r37r0m0d3l/of.svg?style=social&label=Fork)]()

---

*If you use this project don't forget to give a ⭐ [star](https://github.com/r37r0m0d3l/of) ⭐ to it on GitHub!*

---

![OF](docs/example.png?raw=true "OF")

## 🚀 Install 🚀

```shell
npm i @r37r0m0d3l/of
```

## 📈 Import 📈

CommonJS.

```javascript
const { of } = require("@r37r0m0d3l/of");
```

ECMAScript Modules.

```javascript
import { of } from "@r37r0m0d3l/of/es";
```

Script

UNPKG CDN.

```html
<script src="https://unpkg.com/@r37r0m0d3l/of/dist/of.js"></script>
```

## 💬 Usage 💬

```javascript
import { ofAnyCase } from "@r37r0m0d3l/of";
const promise = new Promise((resolve, _reject) => {
  resolve({ data: true });
});
const config = {
  defaults: "🤷 Default value in case of error",
  error: new Error("💀 Custom error, replaces thrown error"),
  retries: 3, // 🔁 Third time's a charm
  timeout: 1000, // ⏱️ Delay before timeout error
};
const [result, error] = await ofAnyCase(promise, config); // no error thrown
console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

## 👀 Discover more 👀

-   🔎[Consono](https://consono.js.org)🔎 -
The most informative and correct variable inspector for JavaScript on the web.

-   🔩[Local Storage Fallback](https://github.com/r37r0m0d3l/fallback-local-storage)🔩 -
Universal localStorage fallback.

-   🔄[Publish Subscribe](https://publish-subscribe.js.org)🔄 -
JavaScript implementation of the Publish-Subscribe pattern.

-   🧰[Vicis](https://vicis.js.org)🧰 -
Presentation and transformation layer for data output in RESTful APIs.

Or find useful these tools:

-   🧾[JSON Sorter](https://r37r0m0d3l.github.io/json_sort)🧾 -
Neat online JSON sorter.
