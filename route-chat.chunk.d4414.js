(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{liLl:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=n("QRet"),i=n("Hrl7"),u="chat__whrty",c=function(e){var t=e.item;return Object(o.h)("li",null,t)};t.default=function(){var e=Object(o.createRef)(),t=Object(o.createRef)(),n=Object(o.createRef)(),a=Object(r.k)([]),s=a[0],l=a[1];return Object(r.d)((function(){var o,r=e.current,i=t.current,u=n.current,c=!1,a=!1,s=0,d=0,v=0,w="",f=0,m=1,h=0,b=function(){c=!0};window.addEventListener("blur",b);var p=function(){c=!1};window.addEventListener("focus",p);var j=function(e){return s|=1<<e.button,0===e.button&&(d=e.clientY),e.preventDefault(),!1};window.addEventListener("mousedown",j);var L=function(e){return s^=1<<e.button,0===e.button&&(m=.06*((f=e.clientY+d)-v),h=0),i.focus(),e.preventDefault(),!1};window.addEventListener("mouseup",L);var E=function(e){return e.preventDefault(),!1};window.addEventListener("contextmenu",E);var k=function(e){1&s&&(r.style.backgroundPosition="0 "+(e.clientY+d)+"px")};window.addEventListener("mousemove",k);!function e(){c?setTimeout(e,128):(o=window.requestAnimationFrame(e),1&s?v=d:(f+=m+=h,Math.abs(m)>32&&m*h>=0&&(h=-m*Math.random()/128),r.style.backgroundPosition="0 "+f+"px"))}();return function e(){if(c)setTimeout(e,4096);else{var t="";w!==i.value&&(t="?s="+encodeURIComponent(i.value),w=i.value),fetch("https://psilly.com/experiments/ajax/chatter_chat.pill"+t).then((function(e){return e.json()})).then((function(e){return l(e||[])})).then((function(){a||(a=!0,u.innerText="",u.style.display="none")})).then((function(){return setTimeout(e,128)})).catch((function(e){a=!1,u.innerText=e,u.style.display="block",console.error(e),alert("Error connecting to server. Check that your connection is working and that you have some disabled cookies like some kind of heathen."),location.reload()}))}}(),u.innerText="Connecting...",function(){window.cancelAnimationFrame(o),window.removeEventListener("blur",b),window.removeEventListener("focus",p),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",L),window.removeEventListener("contextmenu",E),window.removeEventListener("mousemove",k)}}),[]),Object(o.h)("section",{ref:e,class:u},Object(o.h)(i.a,{title:"Chatter"}),Object(o.h)("input",{ref:t,autofocus:!0}),Object(o.h)("ul",{class:"output"},s.map((function(e){return Object(o.h)(c,{item:e,key:e})}))),Object(o.h)("p",{ref:n,class:"text-center"},"A colourful ape input aggregator."))}}}]);
//# sourceMappingURL=route-chat.chunk.d4414.js.map