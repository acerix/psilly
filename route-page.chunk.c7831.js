(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"U/le":function(I,g,A){"use strict";function C(I,g){return function(I){if(Array.isArray(I))return I}(I)||function(I,g){var A=null==I?null:"undefined"!=typeof Symbol&&I[Symbol.iterator]||I["@@iterator"];if(null==A)return;var C,e,i=[],u=!0,n=!1;try{for(A=A.call(I);!(u=(C=A.next()).done)&&(i.push(C.value),!g||i.length!==g);u=!0);}catch(I){n=!0,e=I}finally{try{u||null==A.return||A.return()}finally{if(n)throw e}}return i}(I,g)||function(I,g){if(!I)return;if("string"==typeof I)return e(I,g);var A=Object.prototype.toString.call(I).slice(8,-1);"Object"===A&&I.constructor&&(A=I.constructor.name);if("Map"===A||"Set"===A)return Array.from(I);if("Arguments"===A||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return e(I,g)}(I,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(I,g){(null==g||g>I.length)&&(g=I.length);for(var A=0,C=new Array(g);A<g;A++)C[A]=I[A];return C}function i(I,g){return function(I){if(Array.isArray(I))return I}(I)||function(I,g){var A=null==I?null:"undefined"!=typeof Symbol&&I[Symbol.iterator]||I["@@iterator"];if(null==A)return;var C,e,i=[],u=!0,n=!1;try{for(A=A.call(I);!(u=(C=A.next()).done)&&(i.push(C.value),!g||i.length!==g);u=!0);}catch(I){n=!0,e=I}finally{try{u||null==A.return||A.return()}finally{if(n)throw e}}return i}(I,g)||function(I,g){if(!I)return;if("string"==typeof I)return u(I,g);var A=Object.prototype.toString.call(I).slice(8,-1);"Object"===A&&I.constructor&&(A=I.constructor.name);if("Map"===A||"Set"===A)return Array.from(I);if("Arguments"===A||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return u(I,g)}(I,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(I,g){(null==g||g>I.length)&&(g=I.length);for(var A=0,C=new Array(g);A<g;A++)C[A]=I[A];return C}A.r(g);var n=A("hosL"),t=A("Hrl7"),y=A("QRet"),s={parameter_panel_toggle_button:"parameter_panel_toggle_button__HBBZX"},r=function(I){var g=I.style,A=I.time,C=A.getTime()/1e3;return Object(n.h)("time",{dateTime:A.toISOString(),class:g},C.toFixed(3))},l=function(){var I=C(Object(y.k)(new Date),2),g=I[0],A=I[1];return Object(y.d)((function(){var I;return function g(){I=window.requestAnimationFrame(g),A(new Date)}(),function(){window.cancelAnimationFrame(I)}})),Object(n.h)(r,{style:s.now,time:g})},h=function(I){var g=I.time,A=Math.E/Math.pow(g.getTime(),Math.PI);return Object(n.h)("time",{dateTime:g.toISOString()},A)},o=function(){var I=i(Object(y.k)(new Date),2),g=I[0],A=I[1];return Object(y.d)((function(){var I;return function g(){I=window.requestAnimationFrame(g),A(new Date)}(),function(){window.cancelAnimationFrame(I)}})),Object(n.h)(h,{time:g})},c=A("z36D"),L={talk:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Urging to speak?"),Object(n.h)("p",null,"Leave a message in the ",Object(n.h)("a",{href:"/chat"},"chatter")," or drop one in the ",Object(n.h)("a",{href:"https://mindmeet.space/"},"mind meet space"),".")),listen:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Hear"),Object(n.h)("p",null,"Looking for something to listen to?"),Object(n.h)("p",null,"Listen to ",Object(n.h)("a",{href:"/music"},"music"),", ",Object(n.h)("a",{href:"/words"},"words"),", or ",Object(n.h)("a",{href:"/sounds"},"other sounds"),".")),watch:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Visual Stimulation"),Object(n.h)("p",null,"Things you can watch."),Object(n.h)("p",null,"Watch some videos to make you ",Object(n.h)("a",{href:"/funny"},"laugh"),", ",Object(n.h)("a",{href:"/happy"},"smile"),", ",Object(n.h)("a",{href:"/trippy"},"trip"),", or ",Object(n.h)("a",{href:"/deep"},"think"),".")),play:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Play"),Object(n.h)("p",null,"Have phun!"),Object(n.h)("p",null,"When in doubt, ",Object(n.h)("a",{href:"/games"},"play the game"),"."),Object(n.h)("p",null,"Or ",Object(n.h)("a",{href:"/jam"},"play music"),"."),Object(n.h)("p",null,"If all else fails, get a ",Object(n.h)("a",{href:"/life"},"life"),"."),Object(n.h)("p",null,Object(n.h)("a",{href:"https://ludotune.com/",target:"_blank",rel:"noreferrer"},"ludotune"),".")),music:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"The Music of Sound"),Object(n.h)("p",null,"Listen to music."),Object(n.h)("p",null,"Choose a musical path and enjoy the ride..."),Object(n.h)("audio",{controls:!0},Object(n.h)("source",{src:"https://ice2.somafm.com/brfm-128-mp3",type:"audio/mp3"}),Object(n.h)("a",{href:"https://ice2.somafm.com/brfm-128-mp3"},"brfm")),Object(n.h)("h2",null,"Jammers"),Object(n.h)("p",null,"If you're not too high and wanna jam, ",Object(n.h)("a",{href:"/jam"},"come jam"),".")),words:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Words"),Object(n.h)("p",null,"A word in the brain is worth two in the mouth."),Object(n.h)("p",null,"Listen to the words of those who have tread the path."),Object(n.h)("p",null,"Don't look too close but go as deep as you can.",Object(n.h)("br",null),"Beethoven",Object(n.h)("br",null),"Listen the sound of silence.")),sounds:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Sounds"),Object(n.h)("p",null,"The sounds of the world."),Object(n.h)("p",null,"Let sounds paint the picture in your mind.")),deep:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Deep"),Object(n.h)("p",null,"Videos to take you to the next level."),Object(n.h)("p",null,"Deep videos abroad. Turn on, tune in, drop out.")),trippy:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Trippy"),Object(n.h)("p",null,"Videos to help explore the psychedelic state."),Object(n.h)("div",{class:"ratio ratio-16x9 mb-2"},Object(n.h)("iframe",{src:"https://www.youtube-nocookie.com/embed/0RXdd0pCJ9Q",allowFullScreen:!0})),Object(n.h)("p",null,"Who's seeing this right now?")),games:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Games"),Object(n.h)("p",null,"Fun games ahead! Wanna play?"),Object(n.h)("h2",null,"Routine Fun Maintenance"),Object(n.h)("p",null,"Sorry, fun is currently under construction, the best we can do for now is ",Object(n.h)("a",{href:"https://twitter.com/hashtag/NOFUN"},"NOFUN"),"."),Object(n.h)("h2",null,"External Fun"),Object(n.h)("p",null,"Do you have an excessively intense enthusiasm regarding, interest in, or desire of, shapes? Look no further than ",Object(n.h)("a",{href:"http://www.shapesmania.com/"},"shapesmania.com"),".")),funny:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Funny"),Object(n.h)("p",null,"Ready to laugh?"),Object(n.h)("p",null,"Warning: Hilarity may ensue."),Object(n.h)("div",{class:"ratio ratio-16x9 mb-2"},Object(n.h)("iframe",{src:"https://www.youtube-nocookie.com/embed/yL_-1d9OSdk",allowFullScreen:!0}))),happy:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Happy"),Object(n.h)("p",null,"Want to feel better?"),Object(n.h)("div",{class:"ratio ratio-16x9 mb-2"},Object(n.h)("iframe",{src:"https://www.youtube-nocookie.com/embed/XBTOqyUtX-0",allowFullScreen:!0})),Object(n.h)("p",null,"Videos to make you feel good.")),read:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Read"),Object(n.h)("p",null,"Words for thought."),Object(n.h)("p",null,Object(n.h)("a",{target:"_blank",href:"/files/the-doors-of-perception.pdf"},"The Doors of Perception")),Object(n.h)("p",null,Object(n.h)("a",{target:"_blank",href:"/files/the-bardo-thodol-tibetan-book-of-the-dead.pdf#page=174"},"The Bardo Thodol: The Tibetan Book of the Dead"))),gaze:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Gaze"),Object(n.h)("p",null,"Follow the white rabbit and face the Abyss."),Object(n.h)("p",null,"Sorry, I don't know anything about a key or a door.")),acid:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"Lysergic Acid Diethylamide"},"LSD")),Object(n.h)("p",null,"Acid erupts; absolute acid erupts absolutly.")),shrooms:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"Psilocybe Mushrooms"},"Shrooms")),Object(n.h)("p",null,"Make room for the mush rooms, these fun guys need space! While the fruiting bodies may be sporeatic, they are phallacies; my Celia holds the truth. Look into Psilly Psimon's cube and see."),Object(n.h)("p",null,"Les psilocybes sont la crème de la merde.️ 💩 🍄 👨‍🍳️ 😝 🙃"),Object(n.h)("h2",null,"Chocolate Mushrooms"),Object(n.h)("p",null,Object(n.h)("em",null,"You")," may love the taste of dried psilocybe cubensis mushrooms, but for the rest of us with taste buds; there's chocolate. Dip 'em, dredge 'em, or blend 'em into a pudding.  Sweet or salty, it's up to you; but always better than stale! Psilly chocolate-shroom bars are 100% organic, gluten-free, vegan, hand-crafted by artisans in small batches, using only fair-trade ingredients, and have been unblessed by a Satanic minister. Available in chili, cinnamon, and anchovy flavours, and in microdose or macrodose.")),k:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"Ketamine"},"Special K")),Object(n.h)("p",null,"If you've never found yourself in a K-hole, it just means you haven't dug deep enough. ⛏️")),ibogaine:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Ibogaine"),Object(n.h)("p",null,"A drug so cool it doesn't need a nickname. But is it really a ",Object(n.h)("em",null,"drug"),'? That all depends what the definition of "',Object(n.h)("a",{href:"/is"},"is"),'" is.')),ecstasy:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"3,4-Methyl​enedioxy​methamphetamine"},"MDMA")),Object(n.h)("p",null,"Molly want a cracker? Tell me more about this ecstasy of yours...")),dmt:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"N,N-Dimethyltryptamine"},"DMT")),Object(n.h)("p",null,"DMT is constantly produced in your brain, and also in many other animals, and plants too. Come to think of it, DMT may be fundamental to life as we know it. Learn more at ",Object(n.h)("a",{href:"/dmt"},"smoalk.dmt"),"."),Object(n.h)("h2",null,"DMT Nexus"),Object(n.h)("p",null,"No, ",Object(n.h)("em",null,"this")," is not a nexus. ",Object(n.h)("a",{href:"https://www.dmt-nexus.me/"},"This")," is a nexus.")),dxm:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"Dextromethorphan"},"DXM")),Object(n.h)("p",null,"No.")),blow:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"Erythroxylum coca"},"Cocaine")),Object(n.h)("p",null,"Why would a drug like cocaine get it's own page on a site like Psilly? Well, if you have to ask, you must have never tried the good shit.")),"white-rabbit":Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"White Rabbit"),Object(n.h)("p",null,"Do you already know the risks of staring into abyss?"),Object(n.h)("pre",null,atob("ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJycnJysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArJycnJycrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysrJysrJysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7KycrKysrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycnKysrKysrIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKycnJysrKysrIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsrJycrJysnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICArIzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMrKycrKycrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgKysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrKysrKysrJysjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICsnJysrKytgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysnKycnKysjI2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICArJysrKysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArKysrKysnKycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgKycrKysrKysrKysuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKysrKysrIysrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICMrKysrKycnJyc7JyMuICAgICAgICAgICAgICAgICAgICAgICAgICAgIysrKysnJycrKysjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA7KysrKysnJyc7JycrKyNgICAgICAgICAgICAgICAgICAgICAgICAgICsrJycnJycnKysjLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgYCsrIysrJysnKysnJycnKysgICAgICAgICAgICAgICAgICAgICAgICwnJycnJzs7JyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICArJysrKycrKysrJycnKysrK2AgICAgICAgICAgICAgICAgICAgICAjJycnOycnJysjIzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgOicnOysrKysrKycrKysnJysrOiAgICAgICAgICAgICAgICAgICAgKysrKycnJycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICArKycnJysrIysrKysnOycnJyc6ICAgICAgICAgICAgICAgICAgICsrJysrJycnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgKysrOyc7KyMnKycnJzs7OzsnKy4gICAgICAgICAgICAgICAgICsrJycnKysrKyNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICArKys7OzsnKycnJycnJyc7OycnLCAgICAgICAgICAgICAgICAjJycnJycnJysjLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgLCs7Ozs7OysrKysrKycnOzsnJyssICAgICAgICAgICAgICAjKycnJycnJysjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAjJycnJzs7OysrIysrJycnJycnJy4gICAgICAgICAgICA6KycnJycnJysrIzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICMnJyc7Ozs7OyMrJycnJycnJycrOiAgICAgIGBgYCBgIycnJycnJycrI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgKycrJzs7Ozs7KysnJycnJycnJysjK0BAIyMjI0BAIysnKycnJycnKyMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgIC4nJysnOzs7Ozs7KycnJzs7JycnKyNAIyMjIyMjIyMrJycnJycnJyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgLCcnKyc7Ozs7OycrJzsnOzsnJycrQCMjIyMjIyNAIzsnJycnJycjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuKycnJzs7Ozs7JysnOyc7OycnI0AjIyMjIyMjQEAnJzsnJydAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGArKycnJzs7OzsnKzs7OycnKyMjIyMjIyMjIyNAKycnJycnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrJysrOzs7OyMrJycnIyMjIyMjIyMjIyMjIyM7JycnIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcrKycnJzsrKycnKyMjIyMjIyMjIyMjIyMjKycnKy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsrKysrIysnK0BAQEBAQEBAQEBAIyNAQEAjI0BAYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCsjIysjQEBAQEBAQEBAQEBAI0BAQEAjIyNAQEBAOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6QEBAQEBAQEBAQEBAQEAjIyNAI0AjIyNAQEBAIyNALiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBAQEBAQCNAI0BAQEBAQCMjIyMjIyMjIyNAQEBAQCMjIyM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtAQCMjIysrIyMjIyMjQEBAQEAjIyMjQEBAIyMjIyMjIyMjQCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxAI0AjIyMrIyMjIyMjIyMjIyMjIyMjIyMjKysjIysjIyMjIyNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAQCNAQCMrIzs7KyMjIyMjIyMjKysjKysrKys7JysrIyMjIyNALCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQEBAIyMjOjsjIyMjQEBAQEBAIysrJycnJycrKyc7JyMjIyMjOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQEBAIyMjIywnI0BAQEBAQEAjI0AjIycrKyc7JysjI0AjIyNAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMrI0AnOyMjQEBAQEBAQEAjKyM7IzsuLiwrIyMjQEBAI0AuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjQCNAIysjQEBAQEBAQEAjKycjJysuLjorIyMjQEBAI0AjYCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMjQCMjQEBAQEBAQEBAIycnIzojJycrIyMjQEBAQEAjQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMnI0BAQEBAQEBAQEBAIysnJyc7IyMjIyMjQEBAQEBAIysgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMjJyNAQEBAQEBAQEBAIyMrJycrKyMjI0BAQEBAQEBAQCMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOisjIycrI0BAQEBAQEBAIyMrJysrKysjIyMjI0BAQEBAQCMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMnJyNAQEBAQCMjIyMrKysrJysrIyMjQEBAQEBAQCNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjKyc7OysrKysrKycrKycnJycnJysrIyNAQCMjQCNAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuIyMjKysrJys7JysrKysnJycnJycnJycrKysjIysrKyNAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiMjIysrKysrJysrKyMrKycnJycnJycnKysnIyMjKysjI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDojIyMjIysrKycrKysnKycnJycnOzs7JycnKysjIysrIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIysjIysrKycnKysnJzs6OycnJycnKycnJycnJysjKyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyMjKysnKysrJyc7Ojo7JycrJysrJzs7JysrIysjIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjIyMrJysrKycnOzs7OycjIyMjJzs7OysrIyMjIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMjIyMrKycjKysnJyc7Jzs7JycjJzs7JycrKysjIyMjIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsjIyMjIysnIyMrKycnJycnJycnIycnJycnJysjIyMjIyMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IyMjIyMrJysjIysnJycnJysrQEBAIyMrJycnKyMjIyMjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMjIysrIyMjKycnJytAQCMjQEAjJysrKyNAI0AjI2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMjIyMjKysjIysjKysnOzs7OzsnJycrIysjIyNAI0AuLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyMrIysrIyMjIyMrKysnJycnJycnJysrIyMjIyMjIyMnLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIyMjICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMjIyMjKysrKyMjIyMjIyMjKysrKysjIyMjIyMjIyMjLi4uOiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMjIysgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCwsIysjIyMrKycrKysrIyMjIyMjIyMjIyMjIyMjIyMrOy4uLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAjKysjIyMrOi4gICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzosLicjKyMjKysrKysnJycnKysrIyMjIyMjIyMjKysrIy4uLi4uOyAgICAgICAgICAgICAgICAgICAgICAgICAjKysjQEArI0BAIyAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKywuLi4uIyMrJyMjKyMrJysrJycnJycrIyMjIyMjIycrIzsuLi4uLi4gICAgICAgICAgICAgICAgICAgICAgICBgKysrKyMjKytAQEBgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuOiwsLi4uLjojIyMrKysnKysrKysnJysnKysrKysnJycnKyMuLi4uLi4uOiAgICAgICAgICAgICAgICAgICAgICAgQCMrIytAKycrI0AjLiAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7LCwsLi4uLi4uKyMjIysrKysrKysrKysrKysrJysrIysrKyMuLi4uLi4uLi5gICAgICAgICAgICAgICAgICAgICAgLisrIyMrQCMjKyMjKzpgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGA6LCwsLi4uLi4uLiwjIyMrKysrIysrIysrKysrKysrKysrKysrLi4uLi4uLi4uLmAgICAgICAgICAgICAgICAgICcnLCMnKyNAIyMjIysrIyMjIys7ICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgIDssLCwsLi4uLi4uLi4uQCMrKyMrKysjKysrKyMjKysrIysrKydALi4uLi4uLi4uLi4uLCAgICAgICAgICAgICAgIC4rKyNAKysjIyMjI0AjKysjQEAjIysgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgLiwsLCwsLi4uLi4uLi4uLicjKyMjIysjIysrKysrKysrKyMrKysjLi4uLi4uLi4uLi4uLi4sICAgICAgICAgICAgICAuKysjIyNAIysjKyMrKysjKysjIyMrICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgOywsLC4uLi4uLi4uLi4uLi4sIyMrKysrKysrKysrIyMrKyMjKysjIy4uLi4uLi4uLi4uLi4uLi4sICAgICAgICAgICAgICMjKysrKysjKyNAIyMjIyMjKysjIyAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAuLCwsLiwuLi4uLi4uLi4uLi4uLiMjKyMjIysrKysjKyMrIyMrKysrIywuLi4uLi4uLi4uLi4uLi4uLC4sICAgICAgICAgICA7IyMjI0BAQCMrKysjI0AjIyMjIycgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA7Li4uLi4uLiwuLi4uLi4uLi4uLi4sIyMjKyMjKyMjKysrIysrKysrKycuLi4uLi4uLi4uLi4uLi4uLi4uLCwgICAgICAgICAgIyMrKyMjQCNAIyMjKysrIyMjQCMgICAgICAgICAgCiAgICAgICAgICAgICAgICAgIC4sLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiMjIysjKysjIysrKyMjIysrKyMsLi4uLi4uLi4uLi4uLi4uLi4uLi4sLi5gICAgICAgOywnKysrI0BAQEBAQCMjKysrIyMgICAgICAgICAgIAogICAgICAgICAgICAgICAgIDouLi4uLi4uLi4uLi4uLi4uLiwuLi4uLi4sIyMjIysrKyMjKysjIysrKyM6Li4uLi4uLi4uLi4uLi4uLi4uLi4uLC4uLi4sICAgLCwsJysrKysjIyMjQEBAIysrKyMgICAgICAgICAgICAKICAgICAgICAgICAgICAgICwuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiMjIyMjKysrKysrKysrKysrLC4uLi4uLi4uLi4uLi5gLi5gLi4uLi4uLi4uLi4nJywsLCwrKysrKysrKyMrKysrKyMgICAgICAgICAgICAgCiAgICAgICAgICAgICAgYC4uLiwuLi4uLmAuLi4uLi4uLi4sLi4uLi4uLi47IysjKysrKysrKysrKysjOi4uLi4uLi4uLi4uLi4uYGBgYC4uLi4uLi4uLi4jLjssLiwuIyMrKysrKysrKysjKzsgICAgICAgICAgICAgIAogICAgICAgICAgICAgLC4uLi4uLi4uLi4uLi4uYC4uLi4uLi4uLi4uLi4uLCMjIyMrKyMrKysrKysrKy4uLi4uLi4uLi4uLi4uLmBgYGAuLi4uLi4uLi4nLi4uLC4uLiMjKysrKysrKysrKys7LiAgICAgICAgICAgICAKICAgICAgICAgICAgOiwuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4nIyMjIysjIyMrKysjIywuLi4uLi4uLi4uLi4uLi5gYGAuYC5gLmAuLi4nLi47LiwuLiw7IysjKysnJysrKys6OjogICAgICAgICAgICAgCiAgICAgICAgICAgLi4sLC4uLi4uLi4uLi4uLi4uLi4uOi4uLi4uLi4uLi4uLCMjIysrIyMrKysrIysuLi4uLi5gLi4uLmAuLi4uLmBgLmAuYC5gYC4uLC4uJy4sLi4sLiMjIysrKysrKysrLDo6ICAgICAgICAgICAgIAogICAgICAgICAgIC4uLiwuLi4uLi4uLi4uLi4uLi4uLC4uLi4uLmAuLi4uLi4rIyMrIyMjKysrKysuLi4uLi4uLi5gLi5gLi4uLmBgYGAuYC4uYC5gLi4uLjouLi4uLiw6I0BAQEBAIyMrOi47OiAgICAgICAgICAgICAKICAgICAgICAgICAuLi4sLC4uLi4uLi4uLi4uLi4uLCwuLi4uLi4uLi4uLi4uLCMjKyMjIysrKysrLi4uLi4uLi4uLmAuLi5gLi4uLi4uLmBgLi4uLjouLmAuYC4uLiwuLi4sOytAQCMjOywuOidgICAgICAgICAgICAgCiAgICAgICAgICAnOi4uLiwuLi4sLiwuYC4uLi4uLicuLi4uLi4uLi4uLi4uLi4jIyMjIyMrIyMjLi5gLi4uLi4uLmAuLi4uLmBgYGAuYGBgLi4uYC4uYCwuLi4uLi4uLi4uYC4uLi4sKy4uLDo7LiAgICAgICAgICAgIAogICAgICAgICAgOiwsLi4sLC4uLi4uLC4uLi4uLi46LiwuLi4uLi4uLi4uLi4uLCMjIyMjIyMjKy4uLi4uLi4uLi4uLi4uLmBgYGBgYGAuYGBgYC5gLmAsLi4uLiwuLi4sLi4uLi4uLi4uLiw6LCwgICAgICAgICAgICAKICAgICAgICAgIDouLi4uLiwsLi4uLi4uYGAuLi4uOi4uLC4uLi4uLmBgLi4uLi4jIyMjKyMjIy4uLi5gLi4uLi4uLi4uLi5gYC5gLmBgLmBgYGAuLixgLCwuLi4uLi4uLiwsLmAuLmBgYGBgYC4sICAgICAgICAgICAgCiAgICAgICAgICAsLi4uLi4uLiwuLi4uLi4uLi4uLjouLi4sLi4uYC4uLmBgLi4uOyMjIyMjIyNgLmBgYGBgLi4uLi4uLi4uYC5gLi5gYC5gYGBgLmAuLi4uLi4uLi4sLi4uLC4uLi4uLi4uLjpgICAgICAgICAgICAgIAogICAgICAgICAgLC4uLi4uLi4uYC4uLi4uLi4uLi46YC4uLi4sLi4uLi4uLi4uLixAIysjIyMuYC4uYC4uLi4uLi4uLi4uYGBgYC5gYGBgYGBgLmBgYC5gLC4uLi4uLi4uLiwsLi4uLCwsOmAgICAgICAgICAgICAgICAKICAgICAgICAgICwuLi4uLi4uLi4uLi4uLC4uLi4uOi4uLi4uLi4uLi4uLi4uLi4uKyMjIyMjYC5gLi5gLi4uLi4uLi4uLmBgLmAuYGBgYC5gYC5gLmAsLi4uLi4uLi4uLi4sLCwsLCwsICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAsLi4uLi4uLi4uLi4uLiwuLi4uLjpgLi4uLi5gLi4uLi4uLi4uLjojIyMjLC4uLi5gLmBgYC4uLi4uYGBgYGAuYGBgYGBgLmAuYC5gLC5gLC4uLC4uLiwuLDosOjogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgLC4uLi4uLi5gLi4uLi4uLDsuLmA6YC4uLi4uYC4uLi4uLi4uLi4uIyMjI2BgYGBgLi5gYC4uLmAuYC5gYGBgLmBgYGAuYGAuLi4uLiwuLiwuLi4sLiwsLCw6LCAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgIC4uLi4uLi5gYGAuLi4uLixgLC4uLGAuLi4uLi4uYC4uLi4uLi4uLisjIzsuLmAuYC4uYGAuLi5gYGAuLmBgYC5gYGBgYGBgYC4uLmAuLmAuLi4sLCw6OjosICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAuLi4uYC4uLi5gYC5gLi4uIGAuLiwuLi4uLi4uYGBgLi4uLi4uLi46KyMuYGBgYC5gLi4uLi4uLmBgLmBgYGBgYGBgLmBgYGAuLi4sLi4uLiwuLCw6YCAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICBgLi4uLi4uYC5gYGBgLi4uLiAgLi4sLi4uLiwuLi5gLmAuLi4uLi4uLisrYGAuLi4uLi4uLmAuLmBgYC5gYGAuYGBgYC5gYC4uLi4uLiw6Li4sOywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgYC4uLi4uLi4uLi4uLmAuLi4gIC4uLmAuLi4sLi5gYC4uYC4uLi4uLi4nLGAuLmAuYGAuLmBgLmBgYGAuYGBgYGBgYGBgYGAuLCwsLi4sLDpgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgIGAuLi4uLi4uYGBgLi4uLi4uICAuLi4uLi4uLi4uLmBgYGBgLi4uLi4uLC5gYC4uLmAuLi5gYC5gYC5gYGBgLmBgYC5gYGBgLiAgIGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICBgLi4uLi4sLi4uLi5gYC4uLCAgLi4uLi4uLi4uLi5gYGAuYGAuLi4uLi4uYGAuLmAuLmBgYGAuYGBgYGBgYGBgYGBgYC5gLiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA="))),"rabbit-hole":Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Rabbit Hole"),Object(n.h)("p",null,"Congratulations on finding your way this far down the rabbit hole! You must be very persistant, or perhaps you just cheated by reading the source code."),Object(n.h)("p",null,"Either way, congratulations, and ",atob("ZnVjayB5b3U="),"!")),life:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"What is life?"),Object(n.h)("p",null,"The life equation is the antidote to the anti-life equation."),Object(n.h)("p",null,"The equation is mathematical proof that life is worth living, just as the anti-life."),Object(n.h)("p",null,"The equation is mathematical proof that life is meaningless."),Object(n.h)("p",null,"Theorize. Life is precious. And ",Object(n.h)("a",{href:"/time"},"time")," is on your side.")),time:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"What is time?"),Object(n.h)("p",null,'Time is the measure of negative entropy in a system. Sapiens, homos in particular, have devised countless arbitrary systems for counting time, the least insane being "unix time"; an absolute measure of time since they realized time is not defined by astronomy, based in a unit defined by the rotation around their own axis in reference to their nearest luminous celestial body. This number is also known as their Epoch. ',Object(n.h)(l,null)," human seconds have passed since then. I can count this forever since I have no ",Object(n.h)("a",{href:"/life"},"life"),"."),Object(n.h)("h2",null,"What is time without consciousness?"),Object(n.h)("p",null,Object(n.h)("a",{href:"/infinity"},"∞"))),dreams:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Dreams"),Object(n.h)("p",null,"If you build it, they will come.")),fun:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"What is fun?"),Object(n.h)("p",null,Object(n.h)("a",{href:"/funny"},"Funny")," you asked!")),is:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Is"),Object(n.h)("h2",null,"Who is is?"),Object(n.h)("p",null,"Is is the becomer of the self; the isness of the is, if you will."),Object(n.h)("h2",null,"What is is?"),Object(n.h)("p",null,"Is is the becoming of the self; one is is when is is is, and is is one when is is one is."),Object(n.h)("h2",null,"When is is?"),Object(n.h)("p",null,"Is is always now. Except when is is then."),Object(n.h)("h2",null,"Where is is?"),Object(n.h)("p",null,"Some is is here, some is is there, some is is not meant to be found."),Object(n.h)("h2",null,"Why is is?"),Object(n.h)("p",null,"Is is because without is there would be no is.")),infinity:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)("abbr",{title:"The Infinite"},"∞")),Object(n.h)("h2",null,"What is infinity?"),Object(n.h)(o,null)),psilosophy:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Psilosophy"),Object(n.h)("h2",null,"Psilosophy"),Object(n.h)("h3",null,"Psilosophy"),Object(n.h)("h4",null,"Psilosophy"),Object(n.h)("h5",null,"Psilosophy"),Object(n.h)("p",null,"Psilosophy.")),silly:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Silly, Not Silly"),Object(n.h)("h2",null,"The Beginning of Silly"),Object(n.h)("p",null,"The beginning of silly is the end.")),goose:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Psilly Goose's Den"),Object(n.h)("h2",null,"Goose Sanctuary"),Object(n.h)("p",null,"This is a den for geese. Are you a goose?"),Object(n.h)("h2",null,"Honk honk"),Object(n.h)("p",null,"Honk honk honk honk honk. Honk honk honk. Honk honk honk honk honk, honk honk honk. Honk honk honk honk honk honk honk. Honk honk! Honk honk honk honk, honk honk, honk honk honk honk. Honk honk honk honk honk. Honk honk.")),see:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"See"),Object(n.h)("p",null,"Seeing is believing, or so they say...")),end:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"The End"),Object(n.h)("p",null,"This is the end, my friend.")),page:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Page"),Object(n.h)("p",null,"A youth of noble birth who leaves home at an early age to serve an apprenticeship in the duties of chivalry in the family of some person of rank.")),peace:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Peace Sanctuary"),Object(n.h)("p",null,"Pieces of the mind, talking for the first time; at peace with their mindingings and their mindingingings.")),war:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"War, and Everything it's Good For"),Object(n.h)("p",null)),hear:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Hear"),Object(n.h)("p",null,"Hear ye, hear ye!"),Object(n.h)("p",null,"What sayeth ye?"),Object(n.h)("p",null,"Ye sayeth as ye doeth."),Object(n.h)("p",null,"Then what doeth ye?"),Object(n.h)("p",null,"Ye doeth as was proclaimed."),Object(n.h)("p",null,"Ah, so ye hideth behind nomological determinism?"),Object(n.h)("p",null,Object(n.h)("a",{href:"/music"},"Hear ye, hear ye!"))),taste:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Taste"),Object(n.h)("p",null,"If it leaves a bad taste in your mouth, imagine what it does to the universe.")),smell:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Smell"),Object(n.h)("p",null,"Oou-ooou, that smell!")),feel:Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,"Feel"),Object(n.h)("p",null,"You may feel this, but can you feel that?"))};g.default=function(I){var g=I.page;return g in L?Object(n.h)("section",{class:"container py-5"},Object(n.h)(t.a,null,Object(n.h)("title",null,"Do ",g?g.replace("-"," "):"?")),L[g]):Object(n.h)(c.a,{default:!0})}}}]);
//# sourceMappingURL=route-page.chunk.c7831.js.map