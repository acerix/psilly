(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{liLl:function(e,t,n){"use strict";n.r(t);var o=n("hosL"),r=n("QRet"),s=n("Hrl7"),c="chat__LjROG";const i=e=>{const{item:t}=e,n=t.substr(-6),r=t.substr(0,t.length-6);return Object(o.h)("li",{style:{color:`#${n}`}},r)};t.default=()=>{const e=Object(o.createRef)(),t=Object(o.createRef)(),n=Object(o.createRef)(),[a,u]=Object(r.k)([]),d=new AbortController;return Object(r.d)((()=>{const o=e.current,r=t.current,s=n.current;let c,i,a,l=!0,w=!1,h=!1,v=0,m=0,p="",b=0,L=.5-Math.random(),f=(.5-Math.random())/8,E=!0;const g=()=>{w=!0};window.addEventListener("blur",g);const j=()=>{w=!1};window.addEventListener("focus",j);const y=e=>(v|=1<<e.button,0===e.button&&(m=e.clientY),e.preventDefault(),!1);window.addEventListener("mousedown",y);const O=e=>(v^=1<<e.button,0===e.button&&(f=0,L*=2),r.focus(),e.preventDefault(),!1);window.addEventListener("mouseup",O);const k=e=>(e.preventDefault(),!1);window.addEventListener("contextmenu",k);const x=e=>{1&v&&(L=e.clientY-m,m=e.clientY,b+=L,o.style.backgroundPosition=`0 ${b}px`)};window.addEventListener("mousemove",x);const T=e=>(E=!1,m=e.touches[0].pageY,!1);window.addEventListener("touchstart",T);const R=()=>(E=!0,f=0,L*=2,!1);window.addEventListener("touchend",R);const Y=e=>{1===e.touches.length&&(L=e.touches[0].pageY-m,m=e.touches[0].pageY,b+=L,o.style.backgroundPosition=`0 ${b}px`)};window.addEventListener("touchmove",Y);const $=()=>{w?i=setTimeout($,512):(c=window.requestAnimationFrame($),1&v||!E||(L+=f,b+=L,Math.abs(L)>256&&L*f>=0&&(f=-L*Math.random()/128),o.style.backgroundPosition=`0 ${b}px`))};$();const A=()=>{if(w)return void(l&&(a=setTimeout(A,128)));let e="?r";p!==r.value&&(e+=`&s=${encodeURIComponent(r.value)}`,p=r.value),fetch(`https://psilly.com/experiments/ajax/chatter_chat.pill${e}`,d).then((e=>e.json())).then((e=>u(e||[]))).then((()=>{l&&(h||(h=!0,s.innerText="",s.style.display="none"))})).then((()=>{l&&(a=setTimeout(A,1028))})).catch((e=>{l&&(h=!1,s.innerText=e,s.style.display="block",console.error(e),alert("Error connecting to server.\nYou may have lost your connection, or perhaps you dislike cookies?\nRefresh the page, with cookies enabled, to try again."),location.reload())}))};return A(),s.innerText="Connecting...",r.focus(),()=>{l=!1,window.cancelAnimationFrame(c),d.abort(),clearTimeout(i),clearTimeout(a),window.removeEventListener("blur",g),window.removeEventListener("focus",j),window.removeEventListener("mousedown",y),window.removeEventListener("mouseup",O),window.removeEventListener("contextmenu",k),window.removeEventListener("mousemove",x),window.removeEventListener("touchstart",T),window.removeEventListener("touchend",R),window.removeEventListener("touchmove",Y)}}),[]),Object(o.h)("section",{ref:e,class:c},Object(o.h)(s.a,{title:"Chatter"}),Object(o.h)("input",{ref:t,autofocus:!0}),Object(o.h)("ul",{class:"output"},a.map((e=>Object(o.h)(i,{item:e,key:e})))),Object(o.h)("p",{ref:n,class:"text-center"},"A colourful ape input aggregator."))}}}]);
//# sourceMappingURL=route-chat.chunk.e06f9.js.map