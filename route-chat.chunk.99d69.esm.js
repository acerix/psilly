(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{liLl:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=n("QRet"),s=n("Hrl7"),c="chat__whrty";const i=e=>{const{item:t}=e,n=t.substr(-6),r=t.substr(0,t.length-6);return Object(o.h)("li",{style:{color:`#${n}`}},r)};t.default=()=>{const e=Object(o.createRef)(),t=Object(o.createRef)(),n=Object(o.createRef)(),[u,a]=Object(r.k)([]);return Object(r.d)((()=>{const o=e.current,r=t.current,s=n.current;let c,i=!1,u=!1,l=0,d=0,w=0,m="",v=0,b=32,h=0;const p=()=>{i=!0};window.addEventListener("blur",p);const f=()=>{i=!1};window.addEventListener("focus",f);const j=e=>(l|=1<<e.button,0===e.button&&(d=e.clientY),e.preventDefault(),!1);window.addEventListener("mousedown",j);const L=e=>(l^=1<<e.button,0===e.button&&(v=e.clientY+d,b=.06*(v-w),h=0),r.focus(),e.preventDefault(),!1);window.addEventListener("mouseup",L);const E=e=>(e.preventDefault(),!1);window.addEventListener("contextmenu",E);const O=e=>{if(1&l){o.style.backgroundPosition=`0 ${e.clientY+d}px`}};window.addEventListener("mousemove",O);const y=()=>{i?setTimeout(y,128):(c=window.requestAnimationFrame(y),1&l?w=d:(b+=h,v+=b,Math.abs(b)>32&&b*h>=0&&(h=-b*Math.random()/128),o.style.backgroundPosition=`0 ${v}px`))};y();const x=()=>{if(i)return void setTimeout(x,4096);let e="?r";m!==r.value&&(e=`&s=${encodeURIComponent(r.value)}`,m=r.value),fetch(`https://psilly.com/experiments/ajax/chatter_chat.pill${e}`).then((e=>e.json())).then((e=>a(e||[]))).then((()=>{u||(u=!0,s.innerText="",s.style.display="none")})).then((()=>setTimeout(x,128))).catch((e=>{u=!1,s.innerText=e,s.style.display="block",console.error(e),alert("Error connecting to server. Is it because you hate cookies?"),location.reload()}))};return x(),s.innerText="Connecting...",()=>{window.cancelAnimationFrame(c),window.removeEventListener("blur",p),window.removeEventListener("focus",f),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",L),window.removeEventListener("contextmenu",E),window.removeEventListener("mousemove",O)}}),[]),Object(o.h)("section",{ref:e,class:c},Object(o.h)(s.a,{title:"Chatter"}),Object(o.h)("input",{ref:t,autofocus:!0}),Object(o.h)("ul",{class:"output"},u.map((e=>Object(o.h)(i,{item:e,key:e})))),Object(o.h)("p",{ref:n,class:"text-center"},"A colourful ape input aggregator."))}}}]);
//# sourceMappingURL=route-chat.chunk.99d69.esm.js.map