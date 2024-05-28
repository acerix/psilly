import{l as e,_ as t,k as r,E as n}from"../index.289f56d5.js";var o=/[\s\n\\/='"\0<>]/,i=/^(xlink|xmlns|xml)([A-Z])/,a=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/,c=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,s=/["&<]/;function l(e){if(0===e.length||!1===s.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var u={},f=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),p=/[A-Z]/g;function h(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:u[r]||(u[r]=r.replace(p,"-$&").toLowerCase()),i=";";"number"!=typeof n||o.startsWith("--")||f.has(o)||(i="px;"),t=t+o+":"+n+i}}return t||void 0}function d(e,t,r){if(!e.s){if(r instanceof v){if(!r.s)return void(r.o=d.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(d.bind(null,e,t),d.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var v=function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{d(n,1,i(this.v))}catch(e){d(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?d(n,1,t?t(o):o):r?d(n,1,r(o)):d(n,2,o)}catch(e){d(n,2,e)}},n},e}();function _(e){return e instanceof v&&1&e.s}var y,m,g,b,k=function(n,o){try{var i,a=e.__s;e.__s=!0,y=e.__b,m=e.diffed,g=e.__r,b=e.unmount;var c=t(r,null);return c.__k=[n],Promise.resolve(function(e,t){try{var r=e()}catch(e){return t(!0,e)}return r&&r.then?r.then(t.bind(null,!1),t.bind(null,!0)):t(!1,r)}((function(){var e=E(n,o||S,!1,void 0,c,!0,void 0),t=function(){if(Array.isArray(e)){var t=function(){var e=n.join("");return i=1,e},r=0,n=e,o=function(e,t,r){for(var n;;){var o=e();if(_(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!_(i)){n=1;break}i=i.s}if(t){var a=t();if(a&&a.then&&!_(a)){n=2;break}}}var c=new v,s=d.bind(null,c,2);return(0===n?o.then(u):1===n?i.then(l):a.then(f)).then(void 0,s),c;function l(n){i=n;do{if(t&&(a=t())&&a.then&&!_(a))return void a.then(f).then(void 0,s);if(!(o=e())||_(o)&&!o.v)return void d(c,1,i);if(o.then)return void o.then(u).then(void 0,s);_(i=r())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,s)}function u(e){e?(i=r())&&i.then?i.then(l).then(void 0,s):l(i):d(c,1,i)}function f(){(o=e())?o.then?o.then(u).then(void 0,s):u(o):d(c,1,i)}}((function(){return!!n.some((function(e){return"function"==typeof e.then}))&&r++<25}),void 0,(function(){return Promise.resolve(Promise.all(n)).then((function(e){n=e.flat()}))}));return o&&o.then?o.then(t):t()}}();return t&&t.then?t.then((function(t){return i?t:e})):i?t:e}),(function(t,r){if(e.__c&&e.__c(n,x),e.__s=a,x.length=0,t)throw r;return r})))}catch(s){return Promise.reject(s)}},x=[],w=Array.isArray,C=Object.assign;function A(){this.__d=!0}var S={};function L(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=S),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=C({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),g&&g(e),r.render(r.props,r.state,t)}function E(t,n,s,u,f,p,d){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":l(t+"");if(w(t)){var v,_="";f.__k=t;for(var k=0;k<t.length;k++){var x=t[k];if(null!=x&&"boolean"!=typeof x){var S,D=E(x,n,s,u,f,p,d);"string"==typeof D?_+=D:(v=v||[],_&&v.push(_),_="",Array.isArray(D)?(S=v).push.apply(S,D):v.push(D))}}return v?(_&&v.push(_),v):_}if(void 0!==t.constructor)return"";t.__=f,y&&y(t);var T,P,Z,F=t.type,M=t.props,U=n;if("function"==typeof F){if(F===r){if(M.tpl){for(var W="",$=0;$<M.tpl.length;$++)if(W+=M.tpl[$],M.exprs&&$<M.exprs.length){var z=M.exprs[$];if(null==z)continue;"object"!=typeof z||void 0!==z.constructor&&!w(z)?W+=z:W+=E(z,n,s,u,t,p,d)}return W}if(M.UNSTABLE_comment)return"\x3c!--"+l(M.UNSTABLE_comment||"")+"--\x3e";P=M.children}else{if(null!=(T=F.contextType)){var H=n[T.__c];U=H?H.props.value:T.__}if(F.prototype&&"function"==typeof F.prototype.render)P=L(t,U),Z=t.__c;else{t.__c=Z={__v:t,props:M,context:U,setState:A,forceUpdate:A,__d:!0,__h:[]};for(var q=0;Z.__d&&q++<25;)Z.__d=!1,g&&g(t),P=F.call(Z,M,U);Z.__d=!0}if(null!=Z.getChildContext&&(n=C({},n,Z.getChildContext())),(F.getDerivedStateFromError||Z.componentDidCatch)&&e.errorBoundaries){var B="";P=null!=P&&P.type===r&&null==P.key?P.props.children:P;try{return B=E(P,n,s,u,t,p,d)}catch(ee){return F.getDerivedStateFromError&&(Z.__s=F.getDerivedStateFromError(ee)),Z.componentDidCatch&&Z.componentDidCatch(ee,{}),Z.__d&&(P=L(t,n),null!=(Z=t.__c).getChildContext&&(n=C({},n,Z.getChildContext())),B=E(P=null!=P&&P.type===r&&null==P.key?P.props.children:P,n,s,u,t,p,d)),B}finally{m&&m(t),t.__=null,b&&b(t)}}}P=null!=P&&P.type===r&&null==P.key&&null==P.props.tpl?P.props.children:P;try{var I=E(P,n,s,u,t,p,d);return m&&m(t),t.__=null,e.unmount&&e.unmount(t),I}catch(te){if(!p&&d&&d.onError){var N=d.onError(te,t,(function(e){return E(e,n,s,u,t,p,d)}));if(void 0!==N)return N;var O=e.__e;return O&&O(te,t),""}if(!p)throw te;if(!te||"function"!=typeof te.then)throw te;var R=function e(){try{return E(P,n,s,u,t,p,d)}catch(te){if(!te||"function"!=typeof te.then)throw te;return te.then((function(){return E(P,n,s,u,t,p,d)}),(function(){return e()}))}};return te.then((function(){return R()}))}}var V,K="<"+F,G="";for(var J in M){var Q=M[J];switch(J){case"children":V=Q;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in M)continue;J="for";break;case"className":if("class"in M)continue;J="class";break;case"defaultChecked":J="checked";break;case"defaultSelected":J="selected";break;case"defaultValue":case"value":switch(J="value",F){case"textarea":V=Q;continue;case"select":u=Q;continue;case"option":u!=Q||"selected"in M||(K+=" selected")}break;case"dangerouslySetInnerHTML":G=Q&&Q.__html;continue;case"style":"object"==typeof Q&&(Q=h(Q));break;case"acceptCharset":J="accept-charset";break;case"httpEquiv":J="http-equiv";break;default:if(i.test(J))J=J.replace(i,"$1:$2").toLowerCase();else{if(o.test(J))continue;"-"!==J[4]&&"draggable"!==J||null==Q?s?c.test(J)&&(J="panose1"===J?"panose-1":J.replace(/([A-Z])/g,"-$1").toLowerCase()):a.test(J)&&(J=J.toLowerCase()):Q+=""}}null!=Q&&!1!==Q&&"function"!=typeof Q&&(K=!0===Q||""===Q?K+" "+J:K+" "+J+'="'+l(Q+"")+'"')}if(o.test(F))throw new Error(F+" is not a valid HTML tag name in "+K+">");if(G||("string"==typeof V?G=l(V):null!=V&&!1!==V&&!0!==V&&(G=E(V,n,"svg"===F||"foreignObject"!==F&&s,u,t,p,d))),m&&m(t),t.__=null,b&&b(t),!G&&j.has(F))return K+"/>";var X="</"+F+">",Y=K+">";return Array.isArray(G)?[Y].concat(G,[X]):"string"!=typeof G?[Y,G,X]:Y+G+X}var j=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let D;const T=e.vnode;async function P(e,r){const o=(r=r||{}).props;"function"==typeof e?e=t(e,o):o&&(e=n(e,o));let i=new Set;D=({type:e,props:t})=>{"a"!==e||!t||!t.href||t.target&&"_self"!==t.target||i.add(t.href)};try{let t=await k(e);return t+='<script type="isodata"><\/script>',{html:t,links:i}}finally{D=null}}e.vnode=e=>{T&&T(e),D&&D(e)};export default P;