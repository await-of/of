!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).of={})}(this,(function(e){"use strict";function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const r="Unknown Error";function ofAny(e,t,o,n){let s;switch(e.constructor.name||Object.prototype.toString.call(e)){case"Promise":s=e;break;case"AsyncFunction":s=e(...Array.isArray(t)?[...t]:[]);break;case"Function":s=new Promise((r,o)=>{try{r(e(...Array.isArray(t)?[...t]:[]))}catch(e){o(e)}});break;case"GeneratorFunction":s=new Promise((r,o)=>{const n=e(...Array.isArray(t)?[...t]:[]);try{r(n.next().value)}catch(e){o(e)}});break;case"[object Generator]":s=new Promise((r,t)=>{try{r(e.next().value)}catch(e){t(e)}});break;default:s=new Promise((r,t)=>{Promise.resolve(e).then(r).catch(t)})}return Promise.resolve(s).then(e=>[e]).catch(e=>(null==e&&(e=new Error(r)),n instanceof Error?e=n:"string"==typeof n&&(e.message=n),[o,e]))}function ofAnyCase(e,t={}){{const{args:e,defaults:r,error:o,retries:n,timeout:s}={...t};t={args:e,defaults:r,error:o,retries:n,timeout:s}}let o;switch(e.constructor.name||Object.prototype.toString.call(e)){case"Promise":o=e,t.retries=0,delete t.args;break;case"AsyncFunction":o=e(...Array.isArray(t.args)?[...t.args]:[]);break;case"Function":o=new Promise((r,o)=>{try{r(e(...Array.isArray(t.args)?[...t.args]:[]))}catch(e){o(e)}});break;case"GeneratorFunction":o=new Promise((r,o)=>{const n=e(...Array.isArray(t.args)?[...t.args]:[]);try{r(n.next().value)}catch(e){o(e)}});break;case"[object Generator]":o=new Promise((r,t)=>{try{r(e.next().value)}catch(e){t(e)}}),delete t.args;break;default:o=new Promise((r,t)=>{Promise.resolve(e).then(r).catch(t)}),delete t.args}if(void 0!==t.timeout){const e=Number.parseInt(""+t.timeout);Number.isFinite(e)&&e>0?t.timeout=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.timeout}else delete t.timeout;return(t.timeout?Promise.race([Promise.resolve(o),new Promise((e,r)=>{setTimeout(()=>r(new Error(`Timeout: ${t.timeout}ms`)))})]):Promise.resolve(o)).then(e=>[e]).catch(o=>{if(void 0!==t.retries){const e=Number.parseInt(t.retries);Number.isFinite(e)&&e>0?t.retries=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.retries}else delete t.retries;return t.retries&&(t.attempt=void 0===t.attempt?0:t.attempt+1,t.attempt<t.retries)?ofAnyCase(e,t):(null==o&&(o=new Error(r)),t.error instanceof Error?o=t.error:"string"==typeof t.error&&(o.message=t.error),[t.defaults,o])})}function ofCase(e,t={}){{const{args:e,defaults:r,error:o,timeout:n}={...t};t={args:e,defaults:r,error:o,timeout:n}}if(void 0!==t.timeout){const e=Number.parseInt(""+t.timeout);Number.isFinite(e)&&e>0?t.timeout=e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e:delete t.timeout}else delete t.timeout;return(t.timeout?Promise.race([Promise.resolve(e),new Promise((e,r)=>{setTimeout(()=>r(new Error(`Timeout: ${t.timeout}ms`)))})]):Promise.resolve(e)).then(e=>[e,void 0]).catch(e=>(null==e&&(e=new Error(r)),t.error instanceof Error?e=t.error:"string"==typeof t.error&&(e.message=t.error),[t.defaults,e]))}function ofError(e,t){return Promise.resolve(e).then(()=>{}).catch(e=>(null==e&&(e=new Error(r)),t instanceof Error?e=t:"string"==typeof t&&(e.message=t),e))}function ofIt(e,t,o){return Promise.resolve(e).then(e=>[e]).catch(e=>(null==e&&(e=new Error(r)),o instanceof Error?e=o:"string"==typeof o&&(e.message=o),[t,e]))}function of(e){return Promise.resolve(e).then(e=>[e]).catch(e=>(null==e&&(e=new Error(r)),[void 0,e]))}function ofResult(e,r){return Promise.resolve(e).then(e=>e).catch(()=>r)}function ofSync(e,t,o,n){if(!function isFunction(e){return"[object Function]"===Object.prototype.toString.call(e)&&!/^class\s/.test(Function.prototype.toString.call(e))}(e))return[void 0,new Error(r)];try{return[e(...Array.isArray(t)?[...t]:[]),void 0]}catch(e){let t;return n instanceof Error?t=n:"string"==typeof n?(e.message=n,t=e):t=null==e?new Error(r):e,[o,t]}}function ofOutcome(e,r={}){return new Promise(t=>ofAnyCase(e,r).then(([e,r])=>{t(r||e)}))}class Of{}_defineProperty(Of,"any",ofAny),_defineProperty(Of,"anyCase",ofAnyCase),_defineProperty(Of,"case",ofCase),_defineProperty(Of,"error",ofError),_defineProperty(Of,"it",ofIt),_defineProperty(Of,"async",of),_defineProperty(Of,"result",ofResult),_defineProperty(Of,"sync",ofSync),_defineProperty(Of,"outcome",ofOutcome),e.Of=Of,e.of=of,e.ofAny=ofAny,e.ofAnyCase=ofAnyCase,e.ofCase=ofCase,e.ofError=ofError,e.ofIt=ofIt,e.ofOutcome=ofOutcome,e.ofResult=ofResult,e.ofSync=ofSync,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=of.js.map
