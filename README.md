# 🍡🍭🍬 O F 🍡🍭🍬

[https://of.js.org/](https://of.js.org)

<center>Syntactic sugar for asynchronous functions, promises, generators and synchronous functions.</center>

Deno version of module - [🍬🦕 DenOf 🍬🦕](https://github.com/await-of/denof).

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]

[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]

[![Maintainability Rating][sonarcloud-img]][sonarcloud-url]
[![LGTM][lgtm-img]][lgtm-url]
[![Codacy Badge][codacy-img]][codacy-url]
[![deepcode][deepcode-img]][deepcode-url]

![OF](docs/example.webp?raw=true "OF")

## 💬 Usage

```javascript
import { ofAnyCase } from "@await-of/of";
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

[codacy-img]: https://api.codacy.com/project/badge/Grade/eae5f883a3cf46178ffc8c949ed8278c
[codacy-url]: https://www.codacy.com/manual/await-of/of?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=await-of/of&amp;utm_campaign=Badge_Grade
[deepcode-img]: https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6InIzN3IwbTBkM2wiLCJyZXBvMSI6Im9mIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6MjA1OTEsImlhdCI6MTU5Nzk2MDM2Mn0.Y-pFHmSDSZr2EGB8oVy4Wumqj3ToaCTFmubYVCr1XVM
[deepcode-url]: https://www.deepcode.ai/app/gh/await-of/of/_/dashboard?utm_content=gh%2Fawait-of%2Fof
[gh-stars-img]: https://badgen.net/github/stars/await-of/of?&icon=github&label=stars&color=FFCC33
[gh-stars-url]: https://github.com/await-of/of
[lgtm-img]: https://badgen.net/lgtm/grade/g/await-of/of?&icon=lgtm&label=lgtm:js/ts&color=00C853
[lgtm-url]: https://lgtm.com/projects/g/await-of/of/
[npm-downloads-img]: https://badgen.net/npm/dt/@await-of/of?&icon=terminal&label=downloads&color=009688
[npm-downloads-url]: https://npmjs.com/package/@await-of/of
[npm-version-img]: https://badgen.net/npm/v/@await-of/of?&icon=npm&label=npm&color=DD3636
[npm-version-url]: https://npmjs.com/package/@await-of/of
[sonarcloud-img]: https://sonarcloud.io/api/project_badges/measure?project=await-of_of&metric=sqale_rating
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=await-of_of
[travis-img]: https://badgen.net/travis/await-of/of?&icon=travis&label=build
[travis-url]: https://travis-ci.org/github/await-of/of
[ts-img]: https://badgen.net/npm/types/@await-of/of?&icon=typescript&label=types&color=1E90FF
[ts-url]: https://github.com/await-of/of/blob/master/dist/of.d.ts
