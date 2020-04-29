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

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">
