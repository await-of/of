# OF

🍡🍭🍬 Promise wrapper with some sugar 🍡🍭🍬

[🗎 OF Documentation 🗎](https://of.js.org)

[![npm](https://badgen.net/npm/v/@r37r0m0d3l/of?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/@r37r0m0d3l/of)
[![downloads](https://badgen.net/npm/dt/@r37r0m0d3l/of?&icon=terminal&label=downloads&color=009688)](https://github.com/r37r0m0d3l/of)
[![stars](https://badgen.net/github/stars/r37r0m0d3l/of?&icon=github&label=stars&color=ffcc33)](https://github.com/r37r0m0d3l/of)
[![types](https://badgen.net/npm/types/@r37r0m0d3l/of?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/of)
[![build](https://badgen.net/travis/r37r0m0d3l/of?&icon=travis&label=build)](https://github.com/r37r0m0d3l/of)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/of?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://github.com/r37r0m0d3l/of)
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
import { of } from "@r37r0m0d3l/of";
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
// no error thrown
const [result, error] = await ofAnyCase(promise, config);
console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

## 👀 Discover more 👀

| URL | Description |
|:---|:---|
| [jsonsort.r37r0m0d3l.io](https://r37r0m0d3l.github.io/json_sort) | Neat online JSON sorter |
| [consono.js.org](https://consono.js.org) | The most informative & correct variable inspector |
| [of.js.org](https://of.js.org) | Promise wrapper with some sugar |
| [publish-subscribe.js.org](https://publish-subscribe.js.org) | Implementation of the Publish-Subscribe pattern |
| [vicis.js.org](https://vicis.js.org) | Present & transform for JSON in REST API |
| [npmjs.com/fallback-local-storage](https://npmjs.com/package/fallback-local-storage) | Universal localStorage fallback |
| [npmjs.com/@hilesystem](https://npmjs.com/package/@hilesystem/local) | Filesystem common function wrappers |
| [npmjs.com/@corefunc](https://npmjs.com/package/@corefunc/corefunc) | "Don’t repeat yourself" collection of functions |
