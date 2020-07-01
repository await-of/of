# 🍡🍭🍬 O F 🍡🍭🍬

[https://of.js.org/](https://of.js.org)

<center>Syntactic sugar for asynchronous functions, promises, generators and synchronous functions.</center>

Deno version of module - [🍬🦕 DenOf 🍬🦕](https://github.com/r37r0m0d3l/denof).

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

![OF](docs/example.png?raw=true "OF")

## 💬 Usage

```javascript
import { ofAnyCase } from "@r37r0m0d3l/of";
const promise = () => new Promise((resolve, _reject) => {
  resolve({ data: true });
});
const config = {
  defaults: "🤷 Default value in case of error",
  error: new Error("💀 Custom error, replaces thrown error"),
  retries: 3, // 🔁 Third time's a charm
  timeout: 1000, // ⏱️ Delay before timeout error
};
// no error thrown
const [result, error] = await ofAnyCase(promise(), config);
console.log(result); // { data: true }
console.warn(error); // no error thrown, so it's undefined
```

## 🗺️ Discover more

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/r37r0m0d3l/of
[gh-stars-img]: https://badgen.net/github/stars/r37r0m0d3l/of?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/r37r0m0d3l/of/
[lgtm-img]: https://badgen.net/lgtm/grade/g/r37r0m0d3l/of?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@r37r0m0d3l/of
[npm-version-img]: https://badgen.net/npm/v/@r37r0m0d3l/of?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@r37r0m0d3l/of
[npm-downloads-img]: https://badgen.net/npm/dt/@r37r0m0d3l/of?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/r37r0m0d3l/of?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.org/github/r37r0m0d3l/of
[travis-img]: https://badgen.net/travis/r37r0m0d3l/of?&icon=travis&label=build
[ts-url]: https://github.com/r37r0m0d3l/of/blob/master/dist/of.d.ts
[ts-img]: https://badgen.net/npm/types/@r37r0m0d3l/of?&icon=typescript&label=types&color=1E90FF
