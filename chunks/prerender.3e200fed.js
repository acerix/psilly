import{l as e,y as t,k as r,F as n}from"../index.19d9250b.js";var o=/[\s\n\\/='"\0<>]/,a=/^xlink:?./,s=/["&<]/;function i(e){if(0===e.length||!1===s.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var l={},c=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),f=/[A-Z]/g;function u(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:l[r]||(l[r]=r.replace(f,"-$&").toLowerCase()),a=";";"number"!=typeof n||o.startsWith("--")||c.has(o)||(a="px;"),t=t+o+":"+n+a}}return t||void 0}var p,_,d,h,v=[],y=Array.isArray,g=Object.assign;function m(){this.__d=!0}var b={};function k(e,t){var r=e.type,n=new r(e.props,t);return e.__c=n,n.__v=e,n.props=e.props,n.context=t,n.__d=!0,null==n.state&&(n.state=b),null==n.__s&&(n.__s=n.state),r.getDerivedStateFromProps?n.state=g({},n.state,r.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n.__s!==n.state?n.__s:n.state),d&&d(e),n.render(n.props,n.state,t)}function x(e,t,n,s,l){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":i(e+"");if(y(e)){var c="";l.__k=e;for(var f=0;f<e.length;f++){var v=e[f];null!=v&&"boolean"!=typeof v&&(c+=x(v,t,n,s,l))}return c}if(void 0!==e.constructor)return"";e.__=l,p&&p(e);var b,S,j,A=e.type,L=e.props,M=t;if("function"==typeof A){if(A===r)S=L.children;else{if(null!=(b=A.contextType)){var z=t[b.__c];M=z?z.props.value:b.__}if(A.prototype&&"function"==typeof A.prototype.render)S=k(e,M),j=e.__c;else{e.__c=j={__v:e,props:L,context:M,setState:m,forceUpdate:m,__d:!0,__h:[]};for(var D=0;j.__d&&D++<25;)j.__d=!1,d&&d(e),S=A.call(j,L,M);j.__d=!0}null!=j.getChildContext&&(t=g({},t,j.getChildContext()))}var F=x(S=null!=S&&S.type===r&&null==S.key?S.props.children:S,t,n,s,e);return _&&_(e),e.__=void 0,h&&h(e),F}var T,W="<"+A,H="";for(var O in L){var P=L[O];switch(O){case"children":T=P;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in L)continue;O="for";break;case"className":if("class"in L)continue;O="class";break;case"defaultChecked":O="checked";break;case"defaultSelected":O="selected";break;case"defaultValue":case"value":switch(O="value",A){case"textarea":T=P;continue;case"select":s=P;continue;case"option":s!=P||"selected"in L||(W+=" selected")}break;case"dangerouslySetInnerHTML":H=P&&P.__html;continue;case"style":"object"==typeof P&&(P=u(P));break;default:if(n&&a.test(O))O=O.toLowerCase().replace(w,"xlink:");else{if(o.test(O))continue;"-"!==O[4]&&"draggable"!==O||null==P||(P+="")}}null!=P&&!1!==P&&"function"!=typeof P&&(W=!0===P||""===P?W+" "+O:W+" "+O+'="'+i(P+"")+'"')}if(o.test(A))throw new Error(A+" is not a valid HTML tag name in "+W+">");return H||("string"==typeof T?H=i(T):null!=T&&!1!==T&&!0!==T&&(H=x(T,t,"svg"===A||"foreignObject"!==A&&n,s,e))),_&&_(e),e.__=void 0,h&&h(e),!H&&C.has(A)?W+"/>":W+">"+H+"</"+A+">"}var w=/^xlink:?/,C=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let S;const j=e.vnode;async function A(o,a){const s=(a=a||{}).maxDepth||10,i=a.props;let l=0;"function"==typeof o?o=t(o,i):i&&(o=n(o,i));const c=()=>{if(!(++l>s))try{return function(n,o){var a=e.__s;e.__s=!0,p=e.__b,_=e.diffed,d=e.__r,h=e.unmount;var s=t(r,null);s.__k=[n];try{return x(n,o||b,!1,void 0,s)}finally{e.__c&&e.__c(n,v),e.__s=a,v.length=0}}(o)}catch(n){if(n&&n.then)return n.then(c);throw n}};let f=new Set;S=({type:e,props:t})=>{"a"!==e||!t||!t.href||t.target&&"_self"!==t.target||f.add(t.href)};try{let e=await c();return e+='<script type="isodata"><\/script>',{html:e,links:f}}finally{S=null}}e.vnode=e=>{j&&j(e),S&&S(e)};export default A;