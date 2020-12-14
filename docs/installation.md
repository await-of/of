# 🚀 Installation

---

## 💾 NPM

```bash
npm i @await-of/of
```

Install with alias name.

```bash
npm i <alias_name>@npm:@await-of/of
```

Example:

```bash
npm i of@npm:@await-of/of
```

```javascript
import { of, ofAnyCase, ofError } from "of"; // <- shortened name
```

## 📈 Import

CommonJS import.

```javascript
const {
  Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync
} = require("@await-of/of");
`````

ECMAScript Module.

```javascript
import {
  Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync
} from "@await-of/of";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/@await-of/of"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/@await-of/of" type="module"></script>
```

Deno import from URL.

```typescript
// From URL
import { of } from "https://deno.land/x/denof/mod.ts";
// Bundled from URL
import { of } from "https://deno.land/x/denof/denof.bundle.js";
// Inline raw
import { of } from "https://deno.land/x/denof/mod.ts";
// Inline bundle
import { of } from "https://deno.land/x/denof/denof.bundle.js";
```

Deno import from "importmap.json"

```json
{
  "imports": {
    "denof": "https://deno.land/x/denof/mod.ts"
  }
}
```

```typescript
import { of } from "denof";
```

```bash
deno run --importmap=importmap.json --unstable your-script.js
```

---
