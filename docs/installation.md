# 🚀 Installation

---

## 💾 NPM

```bash
npm i @r37r0m0d3l/of
```

Install with alias name.

```bash
npm i <alias_name>@npm:@r37r0m0d3l/of
```

Example:

```bash
npm i of@npm:@r37r0m0d3l/of
```

```javascript
import { of, ofAnyCase, ofError } from "of"; // <- shortened name
```

## 📈 Import

CommonJS import.

```javascript
const {
  Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync
} = require("@r37r0m0d3l/of");
`````

ECMAScript Module.

```javascript
import {
  Of, of, ofAny, ofAnyCase, ofCase, ofError, ofIt, ofOutcome, ofResult, ofSync
} from "@r37r0m0d3l/of";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/@r37r0m0d3l/of"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/@r37r0m0d3l/of" type="module"></script>
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
