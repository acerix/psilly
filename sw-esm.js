!function(e){function t(n){if(s[n])return s[n].exports;var r=s[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="9/Ks")}({"2Gk3":function(){"use strict";try{self["workbox:cacheable-response:6.5.1"]&&_()}catch(e){}},"9/Ks":function(e,t,s){"use strict";function n(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0;n=new m((({url:e})=>e.href===r.href),t,s)}else if(e instanceof RegExp)n=new _(e,t,s);else if("function"==typeof e)n=new m(e,t,s);else{if(!(e instanceof m))throw new g("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return C().registerRoute(n),n}function r(e,t){const s=t();return e.waitUntil(s),s}function a(e){if(!e)throw new g("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new g("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}async function i(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new g("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=t?t(r):r,i=function(){if(void 0===N){const e=new Response("");if("body"in e)try{new Response(e.body),N=!0}catch(e){N=!1}N=!1}return N}()?n.body:await n.blob();return new Response(i,a)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},c.apply(this,arguments)}function o(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}function h(e){return new Promise((t=>setTimeout(t,e)))}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},l.apply(this,arguments)}function u(e){return"string"==typeof e?new Request(e):e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},f.apply(this,arguments)}function d(e){return F().getCacheKeyForURL(e)}function p(e,t){!function(e){F().precache(e)}(e),function(e){const t=F();n(new H(t,e))}(t)}s.r(t);s("xgXd");const y=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class g extends Error{constructor(e,t){super(y(e,t)),this.name=e,this.details=t}}s("I3Xu");const w=e=>e&&"object"==typeof e?e:{handle:e};class m{constructor(e,t,s="GET"){this.handler=w(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=w(e)}}class _ extends m{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}const v=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class R{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){var s=this;const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:a,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let c=i&&i.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return void 0;let h;try{h=c.handle({url:n,request:e,event:t,params:a})}catch(e){h=Promise.reject(e)}const l=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||l)&&(h=h.catch((async function(r){if(l){0;try{return await l.handle({url:n,request:e,event:t,params:a})}catch(e){e instanceof Error&&(r=e)}}if(s._catchHandler)return s._catchHandler.handle({url:n,request:e,event:t});throw r}))),h}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:s,event:n});if(i)return r=i,(Array.isArray(r)&&0===r.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,w(e))}setCatchHandler(e){this._catchHandler=w(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new g("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new g("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let b;const C=()=>(b||(b=new R,b.addFetchListener(),b.addCacheListener()),b),U={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},q=e=>[U.prefix,e,U.suffix].filter((e=>e&&e.length>0)).join("-"),k=e=>e||q(U.googleAnalytics),L=e=>e||q(U.precache),T=()=>U.prefix,P=e=>e||q(U.runtime),x=()=>U.suffix;s("Gpc1");class K{constructor(){var e=this;this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async function({request:e,state:t}){t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async function({event:t,state:s,cachedResponse:n}){if("install"===t.type&&s&&s.originalRequest&&s.originalRequest instanceof Request){const t=s.originalRequest.url;n?e.notUpdatedURLs.push(t):e.updatedURLs.push(t)}return n}}}class O{constructor({precacheController:e}){var t=this;this.cacheKeyWillBeUsed=async function({request:e,params:s}){const n=(null==s?void 0:s.cacheKey)||t._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let N;class M{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const E=new Set;s("myed");class S{constructor(e,t){this._cacheKeys={},l(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new M,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=u(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new g("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=u(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i=l(l({},r),{cacheName:n});s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,t){const s=u(e);await h(0);const n=await this.getCacheKey(s,"write");if(!t)throw new g("cache-put-with-no-response",{url:v(n.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:a,matchOptions:i}=this._strategy,l=await self.caches.open(a),f=this.hasCallback("cacheDidUpdate"),d=f?await async function(e,t,s,n){const r=o(t.url,s);if(t.url===r)return e.match(t,n);const a=c(c({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(r===o(t.url,s))return e.match(t,n)}(l,n.clone(),["__WB_REVISION__"],i):null;try{await l.put(n,f?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of E)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:a,oldResponse:d,newResponse:r.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=u(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r=l(l({},n),{state:s});return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=P(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n=new S(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new g("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}class I extends W{constructor(e={}){e.cacheName=L(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(I.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new g("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const r=n.integrity,a=e.integrity,i=!a||a===r;if(s=await t.fetch(new Request(e,{integrity:a||r})),r&&i){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new g("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==I.copyRedirectedCacheableResponsesPlugin&&(n===I.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(I.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}I.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},I.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await i(e):e};class j{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new I({cacheName:L(e),plugins:[...t,new O({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=a(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new g("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new g("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){var t=this;return r(e,(async function(){const s=new K;t.strategy.plugins.push(s);for(const[s,n]of t._urlsToCacheKeys){const r=t._cacheKeysToIntegrities.get(n),a=t._urlsToCacheModes.get(s),i=new Request(s,{integrity:r,cache:a,credentials:"same-origin"});await Promise.all(t.strategy.handleAll({params:{cacheKey:n},request:i,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=s;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){var t=this;return r(e,(async function(){const e=await self.caches.open(t.strategy.cacheName),s=await e.keys(),n=new Set(t._urlsToCacheKeys.values()),r=[];for(const t of s)n.has(t.url)||(await e.delete(t),r.push(t.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new g("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=f({cacheKey:t},s.params),this.strategy.handle(s))}}let A;const F=()=>(A||(A=new j),A);class H extends m{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}const D=e=>"navigate"===e.request.mode;const B={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};const G={get googleAnalytics(){return k()},get precache(){return L()},get prefix(){return T()},get runtime(){return P()},get suffix(){return x()}};s("2Gk3");class ${constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}const X={},V=new class extends W{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[];const n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=a,n.push(i)}const a=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(a);const i=await t.waitUntil(async function(){return await t.waitUntil(Promise.race(n))||await a}());if(!i)throw new g("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,handler:t}){let s;return{promise:new Promise((n=>{s=setTimeout((async function(){n(await t.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:s}}async _getNetworkPromise({timeoutId:e,request:t,handler:s}){let n,r;try{r=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await s.cacheMatch(t)),r}}({cacheName:G.precache,networkTimeoutSeconds:5,plugins:[new class{constructor(e){var t=this;this.cacheWillUpdate=async function({response:e}){return t._cacheableResponse.isResponseCacheable(e)?e:null},this._cacheableResponse=new $(e)}}({statuses:[200]})]});var J,Q;n((({event:e})=>D(e)),V),J=({event:e})=>D(e)?caches.match(d("/200.html")||d("/index.html")):Response.error(),C().setCatchHandler(J),p([{'revision':'e465cd1bfac94ca909c2eff14096e228','url':'/200.html'},{'revision':null,'url':'/823f31b12be070211f5b71b926470ccb.png'},{'revision':'dc3f14d12a0d630fb450aea8861839e7','url':'/assets/Psilly-logo.png'},{'revision':'b0875766cbe0986929b4c2b1f225328f','url':'/assets/Psilly-logo.webp'},{'revision':'8070a62f51fcf3bad48fe689a3818118','url':'/assets/Psilly.png'},{'revision':'5fc01e39397a044e886898c78e51542f','url':'/assets/Psilly.webp'},{'revision':'8346a9e3c10d2d2311f64b7be42ae564','url':'/assets/art/spectrum.png'},{'revision':'abb375d57de6272aedf86d7694a59e74','url':'/assets/art/thumbnails/canvas-template.png'},{'revision':'4b85275715c02c2ba786b3cb4643105f','url':'/assets/art/thumbnails/canvas-template.webp'},{'revision':'f0bb34ac65d5149c0ff889fb509af0bc','url':'/assets/art/thumbnails/chillbert.png'},{'revision':'341d3bf84f9614967cbd7960d8d9b7c9','url':'/assets/art/thumbnails/chillbert.webp'},{'revision':'07cdd351d20f1f8ebc495ba469da2e7e','url':'/assets/art/thumbnails/circle.png'},{'revision':'42521b529a7a70c5605c38f352a48f01','url':'/assets/art/thumbnails/circle.webp'},{'revision':'10d4f0bf91223fcf9a4240fad3fb91e5','url':'/assets/art/thumbnails/develop.png'},{'revision':'3f058ed760f82390bc50be3537427c76','url':'/assets/art/thumbnails/develop.webp'},{'revision':'e8556c16d8b2a852f5ce58d3ebbebf46','url':'/assets/art/thumbnails/falls.png'},{'revision':'e887d5f96afaa088ee4ba9273ccb1a43','url':'/assets/art/thumbnails/falls.webp'},{'revision':'723406bc156fbdb42c46ea8071ef7d7a','url':'/assets/art/thumbnails/golden-angle-donut.png'},{'revision':'caddda7c8ad6a95750f0841087448e7e','url':'/assets/art/thumbnails/golden-angle-donut.webp'},{'revision':'5ee523527c455a954e609aed3065ede0','url':'/assets/art/thumbnails/gravity.png'},{'revision':'4043f8cbe30cc83d9582a9ff99df6c09','url':'/assets/art/thumbnails/gravity.webp'},{'revision':'72138ca3b12ff0d474b8a46e6557813e','url':'/assets/art/thumbnails/grid-test.png'},{'revision':'ed72631013c038e2bcb9428a01cbcd1c','url':'/assets/art/thumbnails/grid-test.webp'},{'revision':'2f70d8695b41e1e19ce27dddb6a86d42','url':'/assets/art/thumbnails/hyperbollick.png'},{'revision':'e25cf89571a30cf150c85d149e9656e0','url':'/assets/art/thumbnails/hyperbollick.webp'},{'revision':'22d5c9f6d37f7bbeb9d15d9732d0a13c','url':'/assets/art/thumbnails/iball.png'},{'revision':'887276eccb1794c9096f341a427d0210','url':'/assets/art/thumbnails/iball.webp'},{'revision':'9c685f1baf7212574f77d5690a602c6a','url':'/assets/art/thumbnails/lemnisgo.png'},{'revision':'da531d80610d7341b063b3cedf265199','url':'/assets/art/thumbnails/lemnisgo.webp'},{'revision':'77b6ac5b9c952f697ed16fa045ee273d','url':'/assets/art/thumbnails/loading.png'},{'revision':'565fe175d26a6d88cb367b7f93fe38df','url':'/assets/art/thumbnails/loading.webp'},{'revision':'5337aa289ac294a6e1c71a7c342683f1','url':'/assets/art/thumbnails/meld.png'},{'revision':'2a0eb84b750decba5318324c24ac0566','url':'/assets/art/thumbnails/meld.webp'},{'revision':'abb375d57de6272aedf86d7694a59e74','url':'/assets/art/thumbnails/oh-bezier.png'},{'revision':'4b85275715c02c2ba786b3cb4643105f','url':'/assets/art/thumbnails/oh-bezier.webp'},{'revision':'827edcb989701b77838c60c9280e0c9c','url':'/assets/art/thumbnails/polygonous.png'},{'revision':'0cf3949703f3bcceff695034c77301b5','url':'/assets/art/thumbnails/polygonous.webp'},{'revision':'f0bb34ac65d5149c0ff889fb509af0bc','url':'/assets/art/thumbnails/quadingle.png'},{'revision':'341d3bf84f9614967cbd7960d8d9b7c9','url':'/assets/art/thumbnails/quadingle.webp'},{'revision':'d440436bb3f824b377749e0249547170','url':'/assets/art/thumbnails/squibbo.png'},{'revision':'a6631832a0aa0d3c67927abf646701d6','url':'/assets/art/thumbnails/squibbo.webp'},{'revision':'abb375d57de6272aedf86d7694a59e74','url':'/assets/art/thumbnails/totally-modular-form-bro.png'},{'revision':'4b85275715c02c2ba786b3cb4643105f','url':'/assets/art/thumbnails/totally-modular-form-bro.webp'},{'revision':'abb375d57de6272aedf86d7694a59e74','url':'/assets/art/thumbnails/untilted.png'},{'revision':'4b85275715c02c2ba786b3cb4643105f','url':'/assets/art/thumbnails/untilted.webp'},{'revision':'4d0aa41a4843062cc22d08af63c6a8e4','url':'/assets/art/thumbnails/vcock.png'},{'revision':'e2a19dd2b0f2d90d0410a88d76341584','url':'/assets/art/thumbnails/vcock.webp'},{'revision':'abb375d57de6272aedf86d7694a59e74','url':'/assets/art/thumbnails/webgl-template.png'},{'revision':'4b85275715c02c2ba786b3cb4643105f','url':'/assets/art/thumbnails/webgl-template.webp'},{'revision':'35827d49f2e3f9790969cd70eb837c95','url':'/assets/icons/android-chrome-192x192.png'},{'revision':'2adad26f44a0de67dc85e6402604b38d','url':'/assets/icons/android-chrome-192x192.webp'},{'revision':'8070a62f51fcf3bad48fe689a3818118','url':'/assets/icons/android-chrome-512x512.png'},{'revision':'5fc01e39397a044e886898c78e51542f','url':'/assets/icons/android-chrome-512x512.webp'},{'revision':'fc8d0cce66082685ab98cb35c306e7db','url':'/assets/icons/apple-touch-icon.png'},{'revision':'4aa38a0f26f3ece3cdfdd78d67c9cc8a','url':'/assets/icons/apple-touch-icon.webp'},{'revision':'94d4e5d6fe21f48b6c241b5e1ba21755','url':'/assets/icons/favicon-16x16.png'},{'revision':'200d140690e07caf7a19d7f9d14ab9a9','url':'/assets/icons/favicon-16x16.webp'},{'revision':'dc50f3cee44e5b3d5f9cdb23d9ae4d46','url':'/assets/icons/favicon-32x32.png'},{'revision':'22e7e0afc34b82b09f4c811b6d7b7f28','url':'/assets/icons/favicon-32x32.webp'},{'revision':'a36b2aa6e0a94fea96f876c900eee898','url':'/assets/icons/maskable-icon.png'},{'revision':'d40dc3b27d6a165b951c2bc29a67b20d','url':'/assets/icons/maskable-icon.webp'},{'revision':'62686fba8d0879d4aab8b01ae01dcd24','url':'/assets/icons/mstile-150x150.png'},{'revision':'aa5291807c4e2506f2f3af5f20ea8be2','url':'/assets/icons/mstile-150x150.webp'},{'revision':'c5a8f62fd3c3f4e0426741fe9c5ad198','url':'/assets/jifs/dev.gif'},{'revision':'af5fa178770725b63205ee38806aa3e6','url':'/assets/jifs/dev2.gif'},{'revision':null,'url':'/bundle.75c40.css'},{'revision':null,'url':'/bundle.974d3.esm.js'},{'revision':null,'url':'/polyfills.aae10.esm.js'},{'revision':null,'url':'/route-about.chunk.83c39.esm.js'},{'revision':null,'url':'/route-art.chunk.09591.esm.js'},{'revision':null,'url':'/route-blog.chunk.47e02.esm.js'},{'revision':null,'url':'/route-bylaws.chunk.233d9.esm.js'},{'revision':null,'url':'/route-bylaws.chunk.a9d5f.css'},{'revision':null,'url':'/route-chat.chunk.1a6d1.esm.js'},{'revision':null,'url':'/route-chat.chunk.be138.css'},{'revision':null,'url':'/route-contact.chunk.23b45.esm.js'},{'revision':null,'url':'/route-donate.chunk.11dff.esm.js'},{'revision':null,'url':'/route-experiments.chunk.d757b.esm.js'},{'revision':null,'url':'/route-faq.chunk.c6ae7.esm.js'},{'revision':null,'url':'/route-highness.chunk.59660.esm.js'},{'revision':null,'url':'/route-home.chunk.be310.esm.js'},{'revision':null,'url':'/route-jam.chunk.a3157.esm.js'},{'revision':null,'url':'/route-join.chunk.1715d.esm.js'},{'revision':null,'url':'/route-not-found.chunk.48f92.esm.js'},{'revision':null,'url':'/route-page.chunk.6996f.esm.js'},{'revision':null,'url':'/route-page.chunk.ea64d.css'},{'revision':null,'url':'/route-privacy.chunk.ebb28.esm.js'},{'revision':null,'url':'/route-spinner.chunk.1e4a2.esm.js'},{'revision':null,'url':'/route-spinner.chunk.27f18.css'},{'revision':null,'url':'/route-terms.chunk.bedd0.esm.js'}],Q||X)},Gpc1:function(){"use strict";try{self["workbox:precaching:6.5.1"]&&_()}catch(e){}},I3Xu:function(){"use strict";try{self["workbox:routing:6.5.1"]&&_()}catch(e){}},myed:function(){"use strict";try{self["workbox:strategies:6.5.1"]&&_()}catch(e){}},xgXd:function(){"use strict";try{self["workbox:core:6.5.1"]&&_()}catch(e){}}});
//# sourceMappingURL=sw-esm.js.map