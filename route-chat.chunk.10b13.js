(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{liLl:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=n("QRet"),i=n("Hrl7"),u="chat__whrty",c=function(e){var t=e.item,n=t.substr(-6),r=t.substr(0,t.length-6);return Object(o.h)("li",{style:{color:"#"+n}},r)};t.default=function(){var e=Object(o.createRef)(),t=Object(o.createRef)(),n=Object(o.createRef)(),a=Object(r.k)([]),s=a[0],l=a[1];return Object(r.d)((function(){var o,r=e.current,i=t.current,u=n.current,c=!1,a=!1,s=0,d=0,w=0,f="",v=0,m=4,b=0,h=function(){c=!0};window.addEventListener("blur",h);var p=function(){c=!1};window.addEventListener("focus",p);var j=function(e){return s|=1<<e.button,0===e.button&&(d=e.clientY),e.preventDefault(),!1};window.addEventListener("mousedown",j);var y=function(e){return s^=1<<e.button,0===e.button&&(m=.06*((v=e.clientY+d)-w),b=0),i.focus(),e.preventDefault(),!1};window.addEventListener("mouseup",y);var L=function(e){return e.preventDefault(),!1};window.addEventListener("contextmenu",L);var E=function(e){1&s&&(r.style.backgroundPosition="0 "+(e.clientY+d)+"px")};window.addEventListener("mousemove",E);!function e(){c?setTimeout(e,128):(o=window.requestAnimationFrame(e),1&s?w=d:(v+=m+=b,Math.abs(m)>32&&m*b>=0&&(b=-m*Math.random()/128),r.style.backgroundPosition="0 "+v+"px"))}();return function e(){if(c)setTimeout(e,4096);else{var t="?r";f!==i.value&&(t+="&s="+encodeURIComponent(i.value),f=i.value),fetch("https://psilly.com/experiments/ajax/chatter_chat.pill"+t).then((function(e){return e.json()})).then((function(e){return l(e||[])})).then((function(){a||(a=!0,u.innerText="",u.style.display="none")})).then((function(){return setTimeout(e,128)})).catch((function(e){a=!1,u.innerText=e,u.style.display="block",console.error(e),alert("Error connecting to server.\nMaybe lost your internet connection, or maybe you just hate cookies.\nRefresh the page when online, with cookies enabled, to try again."),location.reload()}))}}(),u.innerText="Connecting...",i.focus(),function(){window.cancelAnimationFrame(o),window.removeEventListener("blur",h),window.removeEventListener("focus",p),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",y),window.removeEventListener("contextmenu",L),window.removeEventListener("mousemove",E)}}),[]),Object(o.h)("section",{ref:e,class:u},Object(o.h)(i.a,{title:"Chatter"}),Object(o.h)("input",{ref:t,autofocus:!0}),Object(o.h)("ul",{class:"output"},s.map((function(e){return Object(o.h)(c,{item:e,key:e})}))),Object(o.h)("p",{ref:n,class:"text-center"},"A colourful ape input aggregator."))}}}]);
//# sourceMappingURL=route-chat.chunk.10b13.js.map