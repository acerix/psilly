import{l as e,y as t,k as r,F as n}from"../index.a9fc83ae.js";var o=/[\s\n\\/='"\0<>]/,a=/^xlink:?./,i=/["&<]/;function l(e){if(0===e.length||!1===i.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var s={},c=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),u=/[A-Z]/g;function p(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:s[r]||(s[r]=r.replace(u,"-$&").toLowerCase()),a=";";"number"!=typeof n||o.startsWith("--")||c.has(o)||(a="px;"),t=t+o+":"+n+a}}return t||void 0}var _,f,d,h,v=[],y=Array.isArray,m=Object.assign;function g(){this.__d=!0}var k={};function x(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=k),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=m({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),d&&d(e),r.render(r.props,r.state,t)}function b(t,n,i,s,c){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":l(t+"");if(y(t)){var u="";c.__k=t;for(var v=0;v<t.length;v++){var k=t[v];null!=k&&"boolean"!=typeof k&&(u+=b(k,n,i,s,c))}return u}if(void 0!==t.constructor)return"";t.__=c,_&&_(t);var S,D,A,E=t.type,F=t.props,L=n;if("function"==typeof E){if(E===r){if(F.UNSTABLE_comment)return"\x3c!--"+l(F.UNSTABLE_comment||"")+"--\x3e";D=F.children}else{if(null!=(S=E.contextType)){var j=n[S.__c];L=j?j.props.value:S.__}if(E.prototype&&"function"==typeof E.prototype.render)D=x(t,L),A=t.__c;else{t.__c=A={__v:t,props:F,context:L,setState:g,forceUpdate:g,__d:!0,__h:[]};for(var T=0;A.__d&&T++<25;)A.__d=!1,d&&d(t),D=E.call(A,F,L);A.__d=!0}if(null!=A.getChildContext&&(n=m({},n,A.getChildContext())),(E.getDerivedStateFromError||A.componentDidCatch)&&e.errorBoundaries){var U="";D=null!=D&&D.type===r&&null==D.key?D.props.children:D;try{return U=b(D,n,i,s,t)}catch(O){return E.getDerivedStateFromError&&(A.__s=E.getDerivedStateFromError(O)),A.componentDidCatch&&A.componentDidCatch(O,{}),A.__d&&(D=x(t,n),null!=(A=t.__c).getChildContext&&(n=m({},n,A.getChildContext())),U=b(D=null!=D&&D.type===r&&null==D.key?D.props.children:D,n,i,s,t)),U}finally{f&&f(t),t.__=void 0,h&&h(t)}}}var W=b(D=null!=D&&D.type===r&&null==D.key?D.props.children:D,n,i,s,t);return f&&f(t),t.__=void 0,h&&h(t),W}var M,z="<"+E,B="";for(var N in F){var H=F[N];switch(N){case"children":M=H;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in F)continue;N="for";break;case"className":if("class"in F)continue;N="class";break;case"defaultChecked":N="checked";break;case"defaultSelected":N="selected";break;case"defaultValue":case"value":switch(N="value",E){case"textarea":M=H;continue;case"select":s=H;continue;case"option":s!=H||"selected"in F||(z+=" selected")}break;case"dangerouslySetInnerHTML":B=H&&H.__html;continue;case"style":"object"==typeof H&&(H=p(H));break;default:if(i&&a.test(N))N=N.toLowerCase().replace(w,"xlink:");else{if(o.test(N))continue;"-"!==N[4]&&"draggable"!==N||null==H||(H+="")}}null!=H&&!1!==H&&"function"!=typeof H&&(z=!0===H||""===H?z+" "+N:z+" "+N+'="'+l(H+"")+'"')}if(o.test(E))throw new Error(E+" is not a valid HTML tag name in "+z+">");return B||("string"==typeof M?B=l(M):null!=M&&!1!==M&&!0!==M&&(B=b(M,n,"svg"===E||"foreignObject"!==E&&i,s,t))),f&&f(t),t.__=void 0,h&&h(t),!B&&C.has(E)?z+"/>":z+">"+B+"</"+E+">"}var w=/^xlink:?/,C=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let S;const D=e.vnode;async function A(o,a){const i=(a=a||{}).maxDepth||10,l=a.props;let s=0;"function"==typeof o?o=t(o,l):l&&(o=n(o,l));const c=()=>{if(!(++s>i))try{return function(n,o){var a=e.__s;e.__s=!0,_=e.__b,f=e.diffed,d=e.__r,h=e.unmount;var i=t(r,null);i.__k=[n];try{return b(n,o||k,!1,void 0,i)}finally{e.__c&&e.__c(n,v),e.__s=a,v.length=0}}(o)}catch(n){if(n&&n.then)return n.then(c);throw n}};let u=new Set;S=({type:e,props:t})=>{"a"!==e||!t||!t.href||t.target&&"_self"!==t.target||u.add(t.href)};try{let e=await c();return e+='<script type="isodata"><\/script>',{html:e,links:u}}finally{S=null}}e.vnode=e=>{D&&D(e),S&&S(e)};export default A;