(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{liLl:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var i=n("hosL"),c=n("QRet"),u=n("Hrl7"),a="chat__whrty",s=function(e){var t=e.item,n=t.substr(-6),r=t.substr(0,t.length-6);return Object(i.h)("li",{style:{color:"#".concat(n)}},r)};t.default=function(){var e=Object(i.createRef)(),t=Object(i.createRef)(),n=Object(i.createRef)(),o=r(Object(c.k)([]),2),l=o[0],d=o[1],f=new AbortController;return Object(c.d)((function(){var r,o,i,c=e.current,u=t.current,a=n.current,s=!0,l=!1,v=!1,h=0,w=0,m="",p=0,b=4-8*Math.random(),y=8-16*Math.random(),g=!0,E=function(){l=!0};window.addEventListener("blur",E);var L=function(){l=!1};window.addEventListener("focus",L);var j=function(e){return h|=1<<e.button,0===e.button&&(w=e.clientY),e.preventDefault(),!1};window.addEventListener("mousedown",j);var O=function(e){return h^=1<<e.button,0===e.button&&(y=0,b*=2),u.focus(),e.preventDefault(),!1};window.addEventListener("mouseup",O);var x=function(e){return e.preventDefault(),!1};window.addEventListener("contextmenu",x);var k=function(e){1&h&&(b=e.clientY-w,w=e.clientY,c.style.backgroundPosition="0 ".concat(p+=b,"px"))};window.addEventListener("mousemove",k);var A=function(e){return g=!1,w=e.touches[0].pageY,!1};window.addEventListener("touchstart",A);var T=function(){return g=!0,y=0,b*=2,!1};window.addEventListener("touchend",T);var Y=function(e){1===e.touches.length?(b=e.touches[0].pageY-w,w=e.touches[0].pageY,c.style.backgroundPosition="0 ".concat(p+=b,"px")):2===e.touches.length?console.log(e.touches):console.error("Insufficient holes")};window.addEventListener("touchmove",Y);!function e(){l?o=setTimeout(e,512):(r=window.requestAnimationFrame(e),1&h||!g||(p+=b+=y,Math.abs(b)>32&&b*y>=0&&(y=-b*Math.random()/128),c.style.backgroundPosition="0 ".concat(p,"px")))}();return function e(){if(l)s&&(i=setTimeout(e,128));else{var t="?r";m!==u.value&&(t+="&s=".concat(encodeURIComponent(u.value)),m=u.value),fetch("https://psilly.com/experiments/ajax/chatter_chat.pill".concat(t),f).then((function(e){return e.json()})).then((function(e){return d(e||[])})).then((function(){s&&(v||(v=!0,a.innerText="",a.style.display="none"))})).then((function(){s&&(i=setTimeout(e,1028))})).catch((function(e){s&&(v=!1,a.innerText=e,a.style.display="block",console.error(e),alert("Error connecting to server.\nYou may have lost your connection, or perhaps you dislike cookies?\nRefresh the page, with cookies enabled, to try again."),location.reload())}))}}(),a.innerText="Connecting...",u.focus(),function(){s=!1,window.cancelAnimationFrame(r),f.abort(),clearTimeout(o),clearTimeout(i),window.removeEventListener("blur",E),window.removeEventListener("focus",L),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",O),window.removeEventListener("contextmenu",x),window.removeEventListener("mousemove",k),window.removeEventListener("touchstart",A),window.removeEventListener("touchend",T),window.removeEventListener("touchmove",Y)}}),[]),Object(i.h)("section",{ref:e,class:a},Object(i.h)(u.a,{title:"Chatter"}),Object(i.h)("input",{ref:t,autofocus:!0}),Object(i.h)("ul",{class:"output"},l.map((function(e){return Object(i.h)(s,{item:e,key:e})}))),Object(i.h)("p",{ref:n,class:"text-center"},"A colourful ape input aggregator."))}}}]);
//# sourceMappingURL=route-chat.chunk.55638.js.map