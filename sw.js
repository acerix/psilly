!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="9/Ks")}({"9/Ks":function(e,t,n){"use strict";function r(e,t){return new Promise((function(n,r){let i,s,o,c;return i=e.clone(),s={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},o=t?t(s):s,Promise.resolve(new Promise((function(e,t){return function(){if(void 0===S){const e=new Response("");if("body"in e)try{new Response(e.body),S=!0}catch(e){S=!1}S=!1}return S}()?e(i.body):Promise.resolve(i.blob()).then(e,t)}))).then((function(e){try{return c=e,n(new Response(c,o))}catch(e){return r(e)}}),r)}))}function i(e){if(!e)throw new u("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new u("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),i=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:i.href}}function s(e){W||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:r}={})=>{const i=_();self.addEventListener("fetch",s=>{const o=((e,t)=>{const n=E().getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:r,urlManipulation:i}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const o=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(s,t);if(yield o.href,n&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=n,yield e.href}if(r){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:s});for(const t of e)yield t.href}}(e,t)){const e=n.get(r);if(e)return e}})(s.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:r});if(!o)return void 0;let c=self.caches.open(i).then(e=>e.match(o)).then(e=>e||fetch(o));s.respondWith(c)})})(e),W=!0)}function o(e,t){!function(e){E().addToCacheList(e),e.length>0&&(self.addEventListener("install",j),self.addEventListener("activate",A))}(e),s(t)}n.r(t);n("tvfG");const c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class u extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}n("yatM");const h=e=>e&&"object"==typeof e?e:{handle:e};class a{constructor(e,t,n="GET"){this.handler=h(t),this.match=e,this.method=n}}class l extends a{constructor(e,t,n){super(({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)},t,n)}}const f=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class d{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const{params:r,route:i}=this.findMatchingRoute({url:n,request:e,event:t});let s=i&&i.handler;if(!s&&this._defaultHandler&&(s=this._defaultHandler),!s)return void 0;let o;try{o=s.handle({url:n,request:e,event:t,params:r})}catch(e){o=Promise.reject(e)}return o instanceof Promise&&this._catchHandler&&(o=o.catch(()=>this._catchHandler.handle({url:n,request:e,event:t}))),o}findMatchingRoute({url:e,request:t,event:n}){const r=this._routes.get(t.method)||[];for(const i of r){let r;const s=i.match({url:e,request:t,event:n});if(s)return r=s,(Array.isArray(s)&&0===s.length||s.constructor===Object&&0===Object.keys(s).length||"boolean"==typeof s)&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(e){this._defaultHandler=h(e)}setCatchHandler(e){this._catchHandler=h(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new u("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new u("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let p;const m=()=>(p||(p=new d,p.addFetchListener(),p.addCacheListener()),p);n("hT7B");const y=[],v={get:()=>y,add(e){y.push(...e)}},g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},b=e=>[g.prefix,e,g.suffix].filter(e=>e&&e.length>0).join("-"),w=e=>e||b(g.googleAnalytics),_=e=>e||b(g.precache),P=()=>g.prefix,R=e=>e||b(g.runtime),q=()=>g.suffix,U=new Set,x=(e,t)=>e.filter(e=>t in e),T=({request:e,mode:t,plugins:n=[]})=>new Promise((function(r,i){function s(){var[e,t]=l();return o.bind(this,e,t)}function o(e,n){return l=function(){return[e,n]},!(n[1]=n[0].next()).done&&(e=n[1].value,1)?Promise.resolve(e.cacheKeyWillBeUsed.call(e,{mode:t,request:h})).then((function(e){try{return h=e,"string"==typeof h&&(h=new Request(h)),s}catch(e){return i(e)}}),i):[1]}function c(){return r(h)}let u,h;var a,l;return u=x(n,"cacheKeyWillBeUsed"),h=e,(a=function(e){for(;e;){if(e.then)return void e.then(a,i);try{if(e.pop){if(e.length)return e.pop()?c.call(this):e;e=s}else e=e.call(this)}catch(e){return i(e)}}}.bind(this))(o.bind(this,void 0,[u[Symbol.iterator]()]))})),L=({request:e,response:t,event:n,plugins:r=[]})=>new Promise((function(i,s){function o(){var[e,t]=f();return c.bind(this,e,t)}function c(t,r){if(f=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)){if("cacheWillUpdate"in t){let r;return a=!0,r=t.cacheWillUpdate,Promise.resolve(r.call(t,{request:e,response:h,event:n})).then(function(e){try{return h=e,h?i.call(this):[1]}catch(e){return s(e)}}.bind(this),s)}function i(){return o}return i.call(this)}return[1]}function u(){return a||(h=h&&200===h.status?h:void 0),i(h||null)}let h,a;var l,f;return h=t,a=!1,(l=function(e){for(;e;){if(e.then)return void e.then(l,s);try{if(e.pop){if(e.length)return e.pop()?u.call(this):e;e=o}else e=e.call(this)}catch(e){return s(e)}}}.bind(this))(c.bind(this,void 0,[r[Symbol.iterator]()]))})),K=({cacheName:e,request:t,event:n,matchOptions:r,plugins:i=[]})=>new Promise((function(s,o){let c,u,h;return Promise.resolve(self.caches.open(e)).then(function(a){try{return c=a,Promise.resolve(T({plugins:i,request:t,mode:"read"})).then(function(t){try{return u=t,Promise.resolve(c.match(u,r)).then(function(t){try{{var c,a;function l(){var[e,t]=a();return f.bind(this,e,t)}function f(t,i){if(a=function(){return[t,i]},!(i[1]=i[0].next()).done&&(t=i[1].value,1)){if("cachedResponseWillBeUsed"in t){let i;return i=t.cachedResponseWillBeUsed,Promise.resolve(i.call(t,{cacheName:e,event:n,matchOptions:r,cachedResponse:h,request:u})).then(function(e){try{return h=e,s.call(this)}catch(e){return o(e)}}.bind(this),o)}function s(){return l}return s.call(this)}return[1]}return h=t,(c=function(e){for(;e;){if(e.then)return void e.then(c,o);try{if(e.pop){if(e.length)return e.pop()?d.call(this):e;e=l}else e=e.call(this)}catch(e){return o(e)}}}.bind(this))(f.bind(this,void 0,[i[Symbol.iterator]()]));function d(){return s(h)}}}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)})),C=({cacheName:e,request:t,response:n,event:r,plugins:i=[],matchOptions:s})=>new Promise((function(o,c){let h,a,l,d,p;return Promise.resolve(T({plugins:i,request:t,mode:"write"})).then(function(t){try{return h=t,n?Promise.resolve(L({event:r,plugins:i,response:n,request:h})).then(function(t){try{return a=t,a?Promise.resolve(self.caches.open(e)).then(function(t){try{return l=t,d=x(i,"cacheDidUpdate"),Promise.resolve(new Promise((function(t,n){return d.length>0?Promise.resolve(K({cacheName:e,matchOptions:s,request:h})).then(t,n):t(null)}))).then(function(t){try{p=t;var n=function(e){try{if("QuotaExceededError"===e.name)return Promise.resolve(new Promise((function(e,t){function n(){var[e,t]=o();return r.bind(this,e,t)}function r(e,r){return o=function(){return[e,r]},!(r[1]=r[0].next()).done&&(e=r[1].value,1)?Promise.resolve(e()).then((function(){try{return n}catch(e){return t(e)}}),t):[1]}function i(){return e()}var s,o;return(s=function(e){for(;e;){if(e.then)return void e.then(s,t);try{if(e.pop){if(e.length)return e.pop()?i.call(this):e;e=n}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(r.bind(this,void 0,[U[Symbol.iterator]()]))}))).then(function(){try{return t.call(this)}catch(e){return c(e)}}.bind(this),c);function t(){throw e}return t.call(this)}catch(e){return c(e)}}.bind(this);try{return Promise.resolve(l.put(h,a)).then((function(){try{return function(){try{var t,n;function i(){var[e,t]=n();return s.bind(this,e,t)}function s(t,s){return n=function(){return[t,s]},!(s[1]=s[0].next()).done&&(t=s[1].value,1)?Promise.resolve(t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:p,newResponse:a,request:h})).then((function(){try{return i}catch(e){return c(e)}}),c):[1]}return(t=function(e){for(;e;){if(e.then)return void e.then(t,c);try{if(e.pop){if(e.length)return e.pop()?u.call(this):e;e=i}else e=e.call(this)}catch(e){return c(e)}}}.bind(this))(s.bind(this,void 0,[d[Symbol.iterator]()]));function u(){return o()}}catch(e){return c(e)}}()}catch(e){return n(e)}}),n)}catch(e){n(e)}}catch(e){return c(e)}}.bind(this),c)}catch(e){return c(e)}}.bind(this),c):o()}catch(e){return c(e)}}.bind(this),c):c(new u("cache-put-with-no-response",{url:f(h.url)}))}catch(e){return c(e)}}.bind(this),c)})),O=K,N=({request:e,fetchOptions:t,event:n,plugins:r=[]})=>new Promise((function(i,s){function o(){c=x(r,"fetchDidFail"),h=c.length>0?e.clone():null;var o=function(e){try{throw new u("plugin-error-request-will-fetch",{thrownError:e})}catch(e){return s(e)}};try{var l,f;function d(){var[e,t]=f();return p.bind(this,e,t)}function p(t,r){if(f=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)){if("requestWillFetch"in t){let r,s;return r=t.requestWillFetch,s=e.clone(),Promise.resolve(r.call(t,{request:s,event:n})).then(function(t){try{return e=t,i.call(this)}catch(e){return o(e)}}.bind(this),o)}function i(){return d}return i.call(this)}return[1]}return(l=function(e){for(;e;){if(e.then)return void e.then(l,o);try{if(e.pop){if(e.length)return e.pop()?m.call(this):e;e=d}else e=e.call(this)}catch(e){return o(e)}}}.bind(this))(p.bind(this,void 0,[r[Symbol.iterator]()]));function m(){return function(){try{a=e.clone();var o=function(e){try{{var t,r;function i(){var[e,t]=r();return o.bind(this,e,t)}function o(t,o){return r=function(){return[t,o]},!(o[1]=o[0].next()).done&&(t=o[1].value,1)?Promise.resolve(t.fetchDidFail.call(t,{error:e,event:n,originalRequest:h.clone(),request:a.clone()})).then((function(){try{return i}catch(e){return s(e)}}),s):[1]}return(t=function(e){for(;e;){if(e.then)return void e.then(t,s);try{if(e.pop){if(e.length)return e.pop()?u.call(this):e;e=i}else e=e.call(this)}catch(e){return s(e)}}}.bind(this))(o.bind(this,void 0,[c[Symbol.iterator]()]));function u(){throw e}}}catch(e){return s(e)}}.bind(this);try{let s;return"navigate"===e.mode?Promise.resolve(fetch(e)).then(function(e){try{return s=e,u.call(this)}catch(e){return o(e)}}.bind(this),o):Promise.resolve(fetch(e,t)).then(function(e){try{return s=e,u.call(this)}catch(e){return o(e)}}.bind(this),o);function u(){function e(){var[e,n]=h();return t.bind(this,e,n)}function t(t,r){if(h=function(){return[t,r]},!(r[1]=r[0].next()).done&&(t=r[1].value,1)){if("fetchDidSucceed"in t)return Promise.resolve(t.fetchDidSucceed.call(t,{event:n,request:a,response:s})).then(function(e){try{return s=e,i.call(this)}catch(e){return o(e)}}.bind(this),o);function i(){return e}return i.call(this)}return[1]}function c(){return i(s)}var u,h;return(u=function(t){for(;t;){if(t.then)return void t.then(u,o);try{if(t.pop){if(t.length)return t.pop()?c.call(this):t;t=e}else t=t.call(this)}catch(e){return o(e)}}}.bind(this))(t.bind(this,void 0,[r[Symbol.iterator]()]))}}catch(e){o(e)}}catch(e){return s(e)}}()}}catch(e){o(e)}}let c,h,a;if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){let e;return Promise.resolve(n.preloadResponse).then(function(t){try{return e=t,e?i(e):o.call(this)}catch(e){return s(e)}}.bind(this),s)}return o.call(this)}));let S;class M{constructor(e){this._cacheName=_(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=i(n),s="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new u("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new u("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install({event:e,plugins:t}={}){return new Promise(function(n,r){let i,s,o,c,u,h,a;return i=[],s=[],Promise.resolve(self.caches.open(this._cacheName)).then(function(l){try{return o=l,Promise.resolve(o.keys()).then(function(o){try{c=o,u=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)u.has(t)?s.push(e):i.push({cacheKey:t,url:e});return h=i.map(({cacheKey:n,url:r})=>{const i=this._cacheKeysToIntegrities.get(n),s=this._urlsToCacheModes.get(r);return this._addURLToCache({cacheKey:n,cacheMode:s,event:e,integrity:i,plugins:t,url:r})}),Promise.resolve(Promise.all(h)).then((function(){try{return a=i.map(e=>e.url),n({updatedURLs:a,notUpdatedURLs:s})}catch(e){return r(e)}}),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}.bind(this))}activate(){return new Promise(function(e,t){let n,r,i,s;return Promise.resolve(self.caches.open(this._cacheName)).then(function(o){try{return n=o,Promise.resolve(n.keys()).then(function(o){try{{var c,u;function h(){var[e,t]=u();return a.bind(this,e,t)}function a(e,r){if(u=function(){return[e,r]},!(r[1]=r[0].next()).done&&(e=r[1].value,1)){if(!i.has(e.url))return Promise.resolve(n.delete(e)).then(function(){try{return s.push(e.url),o.call(this)}catch(e){return t(e)}}.bind(this),t);function o(){return h}return o.call(this)}return[1]}return r=o,i=new Set(this._urlsToCacheKeys.values()),s=[],(c=function(e){for(;e;){if(e.then)return void e.then(c,t);try{if(e.pop){if(e.length)return e.pop()?l.call(this):e;e=h}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(a.bind(this,void 0,[r[Symbol.iterator]()]));function l(){return e({deletedURLs:s})}}}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))}_addURLToCache({cacheKey:e,url:t,cacheMode:n,event:i,plugins:s,integrity:o}){return new Promise(function(c,h){let a,l,f,d;return a=new Request(t,{integrity:o,cache:n,credentials:"same-origin"}),Promise.resolve(N({event:i,plugins:s,request:a})).then(function(n){try{l=n;for(const e of s||[])"cacheWillUpdate"in e&&(f=e);return Promise.resolve(new Promise((function(e,t){return f?Promise.resolve(f.cacheWillUpdate({event:i,request:a,response:l})).then(e,t):e(l.status<400)}))).then(function(n){try{if(d=n,!d)return h(new u("bad-precaching-response",{url:t,status:l.status}));if(l.redirected)return Promise.resolve(r(l)).then(function(e){try{return l=e,o.call(this)}catch(e){return h(e)}}.bind(this),h);function o(){return Promise.resolve(C({event:i,plugins:s,response:l,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})).then((function(){try{return c()}catch(e){return h(e)}}),h)}return o.call(this)}catch(e){return h(e)}}.bind(this),h)}catch(e){return h(e)}}.bind(this),h)}.bind(this))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}matchPrecache(e){return new Promise(function(t,n){let r,i;if(r=e instanceof Request?e.url:e,i=this.getCacheKeyForURL(r),i){let e;return Promise.resolve(self.caches.open(this._cacheName)).then((function(r){try{return e=r,t(e.match(i))}catch(e){return n(e)}}),n)}return t(void 0)}.bind(this))}createHandler(e=!0){return({request:t})=>new Promise(function(n,r){var i=function(i){try{if(e)return n(fetch(t));throw i}catch(e){return r(e)}};try{let e;return Promise.resolve(this.matchPrecache(t)).then(function(r){try{if(e=r,e)return n(e);throw new u("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(e){return i(e)}}.bind(this),i)}catch(e){i(e)}}.bind(this))}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new u("non-precached-url",{url:e});const n=this.createHandler(t),r=new Request(e);return()=>n({request:r})}}let k;const E=()=>(k||(k=new M),k);let W=!1;const j=e=>{const t=E(),n=v.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},A=e=>{const t=E();e.waitUntil(t.activate())},I=e=>"navigate"===e.request.mode;n("h3fs");const F={cacheWillUpdate:({response:e})=>new Promise((function(t){return t(200===e.status||0===e.status?e:null)}))};class H{constructor(e,t,{onupgradeneeded:n,onversionchange:r}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=r||(()=>this.close())}get db(){return this._db}open(){return new Promise(function(e,t){return this._db?e():Promise.resolve(new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const r=indexedDB.open(this._name,this._version);r.onerror=()=>t(r.error),r.onupgradeneeded=e=>{n?(r.transaction.abort(),r.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},r.onsuccess=()=>{const t=r.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})).then(function(n){try{return this._db=n,e(this)}catch(e){return t(e)}}.bind(this),t)}.bind(this))}getKey(e,t){return new Promise(function(n,r){return Promise.resolve(this.getAllKeys(e,t,1)).then((function(e){try{return n(e[0])}catch(e){return r(e)}}),r)}.bind(this))}getAll(e,t,n){return new Promise(function(r,i){return Promise.resolve(this.getAllMatching(e,{query:t,count:n})).then(r,i)}.bind(this))}getAllKeys(e,t,n){return new Promise(function(r,i){let s;return Promise.resolve(this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).then((function(e){try{return s=e,r(s.map(e=>e.key))}catch(e){return i(e)}}),i)}.bind(this))}getAllMatching(e,{index:t,query:n=null,direction:r="next",count:i,includeKeys:s=!1}={}){return new Promise(function(o,c){return Promise.resolve(this.transaction([e],"readonly",(o,c)=>{const u=o.objectStore(e),h=t?u.index(t):u,a=[],l=h.openCursor(n,r);l.onsuccess=()=>{const e=l.result;e?(a.push(s?e:e.value),i&&a.length>=i?c(a):e.continue()):c(a)}})).then(o,c)}.bind(this))}transaction(e,t,n){return new Promise(function(r,i){return Promise.resolve(this.open()).then((function(){try{return Promise.resolve(new Promise((r,i)=>{const s=this._db.transaction(e,t);s.onabort=()=>i(s.error),s.oncomplete=()=>r(),n(s,e=>r(e))})).then(r,i)}catch(e){return i(e)}}),i)}.bind(this))}_call(e,t,n,...r){return new Promise(function(i,s){let o;return o=(n,i)=>{const s=n.objectStore(t),o=s[e].apply(s,r);o.onsuccess=()=>i(o.result)},Promise.resolve(this.transaction([t],n,o)).then(i,s)}.bind(this))}close(){this._db&&(this._db.close(),this._db=null)}}H.prototype.OPEN_TIMEOUT=2e3;const B={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(B))for(const n of t)n in IDBObjectStore.prototype&&(H.prototype[n]=function(t,...r){return new Promise(function(i,s){return Promise.resolve(this._call(n,t,e,...r)).then(i,s)}.bind(this))});const D={get googleAnalytics(){return w()},get precache(){return _()},get prefix(){return P()},get runtime(){return R()},get suffix(){return q()}};n("NiD5");class G{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}const J={};var Q,V;!function(e,t,n){let r;if("string"==typeof e){const i=new URL(e,location.href);r=new a(({url:e})=>e.href===i.href,t,n)}else if(e instanceof RegExp)r=new l(e,t,n);else if("function"==typeof e)r=new a(e,t,n);else{if(!(e instanceof a))throw new u("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}m().registerRoute(r)}(({event:e})=>I(e),new class{constructor(e={}){if(this._cacheName=R(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[F,...e.plugins]}else this._plugins=[F];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle({event:e,request:t}){return new Promise(function(n,r){let i,s,o,c,h;if(i=[],"string"==typeof t&&(t=new Request(t)),s=[],this._networkTimeoutSeconds){let n,r;({id:n,promise:r}=this._getTimeoutPromise({request:t,event:e,logs:i})),o=n,s.push(r)}return c=this._getNetworkPromise({timeoutId:o,request:t,event:e,logs:i}),s.push(c),Promise.resolve(Promise.race(s)).then(function(e){try{if(h=e,!h)return Promise.resolve(c).then(function(e){try{return h=e,i.call(this)}catch(e){return r(e)}}.bind(this),r);function i(){return h?n(h):r(new u("no-response",{url:t.url}))}return i.call(this)}catch(e){return r(e)}}.bind(this),r)}.bind(this))}_getTimeoutPromise({request:e,event:t}){let n;return{promise:new Promise(r=>{n=setTimeout(()=>new Promise(function(n,i){return Promise.resolve(this._respondFromCache({request:e,event:t})).then((function(e){try{return r(e),n()}catch(e){return i(e)}}),i)}.bind(this)),1e3*this._networkTimeoutSeconds)}),id:n}}_getNetworkPromise({timeoutId:e,request:t,event:n}){return new Promise(function(r,i){let s,o;var c=function(){try{if(e&&clearTimeout(e),s||!o)return Promise.resolve(this._respondFromCache({request:t,event:n})).then(function(e){try{return o=e,c.call(this)}catch(e){return i(e)}}.bind(this),i);{let e,r;if(e=o.clone(),r=C({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins}),n)try{n.waitUntil(r)}catch(e){0}return c.call(this)}function c(){return r(o)}}catch(e){return i(e)}}.bind(this),u=function(e){try{return s=e,c()}catch(e){return i(e)}};try{return Promise.resolve(N({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})).then((function(e){try{return o=e,c()}catch(e){return u(e)}}),u)}catch(e){u(e)}}.bind(this))}_respondFromCache({event:e,request:t}){return O({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}({cacheName:D.precache,networkTimeoutSeconds:5,plugins:[new class{constructor(e){this.cacheWillUpdate=({response:e})=>new Promise(function(t){return this._cacheableResponse.isResponseCacheable(e)?t(e):t(null)}.bind(this)),this._cacheableResponse=new G(e)}}({statuses:[200]})]})),Q=({event:e})=>{return I(e)?caches.match((t="/index.html",E().getCacheKeyForURL(t))):Response.error();var t},m().setCatchHandler(Q),o([{'revision':'0ba1828c13e28df9ae1c7e34a63cddda','url':'/about/index.html'},{'revision':'8e72d729bc01b4d07228a84f2b13e47d','url':'/art/index.html'},{'revision':'21b3777fe387624de3b0f2f7b6a7afd3','url':'/art/polygons/index.html'},{'revision':'827edcb989701b77838c60c9280e0c9c','url':'/assets/art/thumbnails/polygons.png'},{'revision':'35827d49f2e3f9790969cd70eb837c95','url':'/assets/icons/android-chrome-192x192.png'},{'revision':'8070a62f51fcf3bad48fe689a3818118','url':'/assets/icons/android-chrome-512x512.png'},{'revision':'fc8d0cce66082685ab98cb35c306e7db','url':'/assets/icons/apple-touch-icon.png'},{'revision':'94d4e5d6fe21f48b6c241b5e1ba21755','url':'/assets/icons/favicon-16x16.png'},{'revision':'dc50f3cee44e5b3d5f9cdb23d9ae4d46','url':'/assets/icons/favicon-32x32.png'},{'revision':'a36b2aa6e0a94fea96f876c900eee898','url':'/assets/icons/maskable-icon.png'},{'revision':'62686fba8d0879d4aab8b01ae01dcd24','url':'/assets/icons/mstile-150x150.png'},{'revision':'cec916056d3ce9211871727d0f9901ca','url':'/bundle.3fb47.js'},{'revision':'8ecc30267aa403f726279a7f6a44628a','url':'/bundle.6d3cc.css'},{'revision':'d1cf59601f406de7d6e350942475feee','url':'/bylaws/index.html'},{'revision':'9f953eddefe409914409c929020135d3','url':'/chat/index.html'},{'revision':'858a9bb6ce33dea3a07f78de9b2383c4','url':'/contact/index.html'},{'revision':'e4dd9b4267802e6a359f889abeaabedc','url':'/donate/index.html'},{'revision':'79aae88a0780bc62899071af2435a1aa','url':'/high/index.html'},{'revision':'6add9504b2a1aa1ed1b7c6874760096e','url':'/index.html'},{'revision':'b4337600e23258991f5f4e43ed7ab04f','url':'/join/index.html'},{'revision':'90a4d3f7397c4fc5fd0d594743940655','url':'/page/Time/index.html'},{'revision':'7cfe7b74fdea249a831ac9fdf0b41563','url':'/page/life/index.html'},{'revision':'e355bd5c09e14b66f98fafa97442f364','url':'/page/listen/index.html'},{'revision':'c2dd267ce219bbc44bf024f69407fbb0','url':'/page/talk/index.html'},{'revision':'5ed90a1d93579d9094f88298659a07b7','url':'/page/white-rabbit/index.html'},{'revision':'63609eddb92ad434cad9839f3c34bb62','url':'/polyfills.7da59.js'},{'revision':'77a38448ab07251ae70a20bf4045b5a4','url':'/route-about/index.tsx.chunk.3651d.js'},{'revision':'ce34e791ba6a64f400d6f6a6916ca594','url':'/route-art/index.tsx.chunk.1fe39.js'},{'revision':'8b5ba9c9da1b25f3e0cd8816a5d43e99','url':'/route-bylaws/index.tsx.chunk.062e1.css'},{'revision':'ad847fbb3e30d65aee92aed4c2fbb66f','url':'/route-bylaws/index.tsx.chunk.08e56.js'},{'revision':'4876f7408a1f40a7387b5ed429d12996','url':'/route-chat/index.tsx.chunk.60581.js'},{'revision':'fd44c068ec4d402ec6e0a016507bb9e4','url':'/route-contact/index.tsx.chunk.85859.js'},{'revision':'36d3f7b1d161e0db5476d1eb9894ec54','url':'/route-donate/index.tsx.chunk.c0f2d.js'},{'revision':'3f065f98c828eb9f39c74066277bde70','url':'/route-high/index.tsx.chunk.58535.js'},{'revision':'ba2125bf6b0360d6f8a19668fe1e02e4','url':'/route-home/index.tsx.chunk.0ffb1.js'},{'revision':'738f35aa49765e1431dac7e77bfbd86f','url':'/route-join/index.tsx.chunk.6cdb0.js'},{'revision':'11afd657abda06e42d6c052e0dea38f2','url':'/route-not-found/index.tsx.chunk.a8fa3.js'},{'revision':'75ad26df5bfa387fca7cb6437f602e7a','url':'/route-page/index.tsx.chunk.fccb4.js'},{'revision':'c088dc0b02ca236b693c07c2160b4f59','url':'/sober/index.html'},{'revision':'144c6ff1323d2d15182a7d2af08d027e','url':'/sw-debug.js'},{'revision':'144b5198d1d4b5e31c44cb42721e8ce1','url':'/toohigh/index.html'}],V||J)},NiD5:function(){"use strict";try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}},h3fs:function(){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},hT7B:function(){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},tvfG:function(){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},yatM:function(){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}}});
//# sourceMappingURL=sw.js.map