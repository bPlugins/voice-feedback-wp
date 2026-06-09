/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ u),
/* harmony export */   extractCss: () => (/* binding */ r),
/* harmony export */   glob: () => (/* binding */ b),
/* harmony export */   keyframes: () => (/* binding */ h),
/* harmony export */   setup: () => (/* binding */ m),
/* harmony export */   styled: () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckmarkIcon: () => (/* binding */ _),
/* harmony export */   ErrorIcon: () => (/* binding */ k),
/* harmony export */   LoaderIcon: () => (/* binding */ V),
/* harmony export */   ToastBar: () => (/* binding */ C),
/* harmony export */   ToastIcon: () => (/* binding */ M),
/* harmony export */   Toaster: () => (/* binding */ Oe),
/* harmony export */   "default": () => (/* binding */ Vt),
/* harmony export */   resolveValue: () => (/* binding */ f),
/* harmony export */   toast: () => (/* binding */ c),
/* harmony export */   useToaster: () => (/* binding */ O),
/* harmony export */   useToasterStore: () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");
"use client";
var W=e=>typeof e=="function",f=(e,t)=>W(e)?e(t):e;var F=(()=>{let e=0;return()=>(++e).toString()})(),A=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var Y=20;var U=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Y)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return U(e,{type:e.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+a}))}}},P=[],y={toasts:[],pausedAt:void 0},u=e=>{y=U(y,e),P.forEach(t=>{t(y)})},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(y),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(y);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(s.current!==y&&r(y),P.push(r),()=>{let o=P.indexOf(r);o>-1&&P.splice(o,1)}),[]);let a=t.toasts.map(o=>{var n,i,p;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((n=e[o.type])==null?void 0:n.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((i=e[o.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||q[o.type],style:{...e.style,...(p=e[o.type])==null?void 0:p.style,...o.style}}});return{...t,toasts:a}};var J=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||F()}),x=e=>(t,r)=>{let s=J(t,e,r);return u({type:2,toast:s}),s.id},c=(e,t)=>x("blank")(e,t);c.error=x("error");c.success=x("success");c.loading=x("loading");c.custom=x("custom");c.dismiss=e=>{u({type:3,toastId:e})};c.remove=e=>u({type:4,toastId:e});c.promise=(e,t,r)=>{let s=c.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let o=t.success?f(t.success,a):void 0;return o?c.success(o,{id:s,...r,...r==null?void 0:r.success}):c.dismiss(s),a}).catch(a=>{let o=t.error?f(t.error,a):void 0;o?c.error(o,{id:s,...r,...r==null?void 0:r.error}):c.dismiss(s)}),e};var K=(e,t)=>{u({type:1,toast:{id:e,height:t}})},X=()=>{u({type:5,time:Date.now()})},b=new Map,Z=1e3,ee=(e,t=Z)=>{if(b.has(e))return;let r=setTimeout(()=>{b.delete(e),u({type:4,toastId:e})},t);b.set(e,r)},O=e=>{let{toasts:t,pausedAt:r}=D(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(r)return;let o=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let p=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(p<0){i.visible&&c.dismiss(i.id);return}return setTimeout(()=>c.dismiss(i.id),p)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{r&&u({type:6,time:Date.now()})},[r]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((o,n)=>{let{reverseOrder:i=!1,gutter:p=8,defaultPosition:d}=n||{},h=t.filter(m=>(m.position||d)===(o.position||d)&&m.height),v=h.findIndex(m=>m.id===o.id),S=h.filter((m,E)=>E<v&&m.visible).length;return h.filter(m=>m.visible).slice(...i?[S+1]:[0,S]).reduce((m,E)=>m+(E.height||0)+p,0)},[t]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{t.forEach(o=>{if(o.dismissed)ee(o.id,o.removeDelay);else{let n=b.get(o.id);n&&(clearTimeout(n),b.delete(o.id))}})},[t]),{toasts:t,handlers:{updateHeight:K,startPause:X,endPause:s,calculateOffset:a}}};var oe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,k=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var pe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var ue=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: absolute;
`,le=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Te,null,t):t:r==="blank"?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...s}),r!=="loading"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue,null,r==="error"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(k,{...s}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{...s})))};var ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let s=e.includes("top")?1:-1,[a,o]=A()?[he,xe]:[ye(s),ge(s)];return{animation:t?`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},C=react__WEBPACK_IMPORTED_MODULE_0__.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},o=react__WEBPACK_IMPORTED_MODULE_0__.createElement(M,{toast:e}),n=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se,{...e.ariaProps},f(e.message,e));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{className:e.className,style:{...a,...r,...e.style}},typeof s=="function"?s({icon:o,message:n}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,o,n))});(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);var ve=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(n=>{if(n){let i=()=>{let p=n.getBoundingClientRect().height;s(e,p)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:o,className:t,style:r},a)},Ee=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...a}},De=(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,R=16,Oe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:p}=O(r);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:R,left:R,right:R,bottom:R,pointerEvents:"none",...o},className:n,onMouseEnter:p.startPause,onMouseLeave:p.endPause},i.map(d=>{let h=d.position||t,v=p.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),S=Ee(h,v);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ve,{id:d.id,key:d.id,onHeightUpdate:p.updateHeight,className:d.visible?De:"",style:S},d.type==="custom"?f(d.message,d):a?a(d):react__WEBPACK_IMPORTED_MODULE_0__.createElement(C,{toast:d,position:h}))}))};var Vt=c;
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.js":
/*!******************************************************************************!*\
  !*** ./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FloatingBulkActions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloatingBulkActions.scss */ "./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");




const FloatingBulkActions = ({
  selectedCount,
  totalCount,
  onSelectAll,
  onDelete,
  onClear
}) => {
  if (selectedCount === 0) return null;
  const isAllSelected = selectedCount === totalCount;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions__info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions__icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.CheckSquare, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bplvf-floating-bulk-actions__count"
  }, selectedCount, " Selected")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions__divider"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-floating-bulk-actions__buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bplvf-floating-bulk-actions__btn bplvf-floating-bulk-actions__btn--select",
    onClick: onSelectAll,
    title: isAllSelected ? 'Deselect All' : 'Select All'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.Check, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bplvf-floating-bulk-actions__btn bplvf-floating-bulk-actions__btn--delete",
    onClick: onDelete,
    title: "Delete Selected"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.Delete, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bplvf-floating-bulk-actions__btn bplvf-floating-bulk-actions__btn--clear",
    onClick: onClear,
    title: "Clear Selection"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.X, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingBulkActions);

/***/ }),

/***/ "./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.scss":
/*!********************************************************************************!*\
  !*** ./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Components/Pages/Footer.js":
/*!****************************************************!*\
  !*** ./src/admin-pages/Components/Pages/Footer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.scss */ "./src/admin-pages/Components/Pages/Footer.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/icons */ "./src/admin-pages/Utils/icons.js");




const Footer = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "\xA9", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.bPlugins.com/"
  }, "bPlugins")), ". All rights reserved."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-social-icons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noreferrer",
    href: "https://www.facebook.com/bPluginsLLC/",
    target: "_blank",
    title: "Facebook"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noreferrer",
    href: "https://www.linkedin.com/company/bplugins/",
    target: "_blank",
    title: "LinkedIn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.LinkedInIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "noreferrer",
    href: "https://www.youtube.com/@bplugins",
    target: "_blank",
    title: "Twitter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.YoutubeIcon, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/admin-pages/Components/Pages/Footer.scss":
/*!******************************************************!*\
  !*** ./src/admin-pages/Components/Pages/Footer.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Components/Pages/Header.js":
/*!****************************************************!*\
  !*** ./src/admin-pages/Components/Pages/Header.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ "./src/admin-pages/Components/Pages/Header.scss");



const Header = ({
  children,
  title = 'Voice Feedback'
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-header-name"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://ps.w.org/voice-feedback/assets/icon-128x128.png?rev=3475105",
    alt: "Voice Feedback",
    className: "vfd-header-logo"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, title)), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/admin-pages/Components/Pages/Header.scss":
/*!******************************************************!*\
  !*** ./src/admin-pages/Components/Pages/Header.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.js":
/*!**********************************************************************!*\
  !*** ./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeleteModal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteModal.scss */ "./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.scss");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utils/icons */ "./src/admin-pages/Utils/icons.js");




const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  selectedCount = 1
}) => {
  if (!isOpen) return null;
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-modal-overlay",
    onClick: handleOverlayClick
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-modal-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-modal-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_2__.Delete, {
    className: "icon"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "vfd-modal-title"
  }, "Confirm Deletion"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "vfd-modal-message"
  }, "Are you sure you want to delete", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "count"
  }, selectedCount), " item", selectedCount !== 1 ? 's' : '', "? This action cannot be undone."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-modal-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "vfd-btn cancel",
    onClick: onClose
  }, "Cancel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "vfd-btn delete",
    onClick: onConfirm
  }, "Delete"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);

/***/ }),

/***/ "./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.scss":
/*!************************************************************************!*\
  !*** ./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/UsersFeedbacks/UsersFeedbacks.scss":
/*!************************************************************!*\
  !*** ./src/admin-pages/UsersFeedbacks/UsersFeedbacks.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin-pages/UsersFeedbacks/UsersFeedbacksContainer.js":
/*!*******************************************************************!*\
  !*** ./src/admin-pages/UsersFeedbacks/UsersFeedbacksContainer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Pages_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Pages/Header */ "./src/admin-pages/Components/Pages/Header.js");
/* harmony import */ var _Components_Pages_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Pages/Footer */ "./src/admin-pages/Components/Pages/Footer.js");
/* harmony import */ var _UsersFeedbacks_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersFeedbacks.scss */ "./src/admin-pages/UsersFeedbacks/UsersFeedbacks.scss");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _Utils_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/icons */ "./src/admin-pages/Utils/icons.js");
/* harmony import */ var _Components_Shared_DeleteModal_DeleteModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Shared/DeleteModal/DeleteModal */ "./src/admin-pages/Components/Shared/DeleteModal/DeleteModal.js");
/* harmony import */ var _Components_FloatingBulkAction_FloatingBulkActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/FloatingBulkAction/FloatingBulkActions */ "./src/admin-pages/Components/FloatingBulkAction/FloatingBulkActions.js");









const UsersFeedbacksContainer = ({
  user,
  adminUrl
}) => {
  const [userFeedbacks, setUserFeedbacks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [playingId, setPlayingId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const [selectedItems, setSelectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
  const [deletingIds, setDeletingIds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isBulkDelete, setIsBulkDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window?.bplvfUsersFeedback?.feedbacks) {
      setUserFeedbacks(window.bplvfUsersFeedback?.feedbacks);
    }
  }, []);
  const handleResolveToggle = id => {
    const updatedFeedbacks = userFeedbacks.map(item => item.id === id ? {
      ...item,
      resolved: !item.resolved
    } : item);
    setUserFeedbacks(updatedFeedbacks);
    const payload = new FormData();
    payload.append('action', 'bplvf_toggle_resolved');
    payload.append('nonce', window.bplvfUsersFeedback.nonce);
    payload.append('id', id);
    try {
      fetch(window.bplvfUsersFeedback.ajaxUrl, {
        method: 'POST',
        body: payload
      }).then(res => res.json()).then(res => {
        if (res.success) {
          react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success('Successfully Updated!');
        }
      });
    } catch (err) {
      alert(`Failed to resolve: ${err.message}`);
    }
  };
  const handleDelete = id => {
    setDeletingIds([id]);
    setIsBulkDelete(false);
    setShowDeleteConfirm(true);
  };
  const handleBulkDelete = () => {
    if (selectedItems.size === 0) return;
    setDeletingIds(Array.from(selectedItems));
    setIsBulkDelete(true);
    setShowDeleteConfirm(true);
  };
  const confirmBulkDelete = async () => {
    if (deletingIds.length === 0) return;
    for (const id of deletingIds) {
      const payload = new FormData();
      payload.append('action', 'bplvf_delete_user_feedback');
      payload.append('nonce', window.bplvfUsersFeedback.nonce);
      payload.append('id', id);
      try {
        fetch(window.bplvfUsersFeedback.ajaxUrl, {
          method: 'POST',
          body: payload
        }).then(res => res.json()).then(res => {
          if (res.success) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success('Feedback Delete Successfully!');
            setUserFeedbacks(prev => prev.filter(feedback => feedback.id !== id));
          }
        });
      } catch (err) {
        alert(`Failed to Delete: ${err.message}`);
      }
    }
    // Refresh list and cleanup
    setUserFeedbacks(window.bplvfUsersFeedback?.feedbacks);
    if (isBulkDelete) {
      setSelectedItems(new Set());
    }
    setDeletingIds([]);
    setIsBulkDelete(false);
    setShowDeleteConfirm(false);
  };
  const handlePlayAudio = (audioUrl, id) => {
    if (audioRef.current && playingId === id) {
      audioRef.current.pause();
      audioRef.current = null;
      setPlayingId(null);
      setProgress(0);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const newAudio = new Audio(audioUrl);
    audioRef.current = newAudio;
    newAudio.play();
    setPlayingId(id);

    // Start interval to update progress
    const interval = setInterval(() => {
      if (newAudio.duration > 0) {
        setProgress(newAudio.currentTime / newAudio.duration);
      }
    }, 100);
    newAudio.addEventListener('ended', () => {
      clearInterval(interval);
      setProgress(1);
      setPlayingId(null);
      audioRef.current = null;
    });
    newAudio.addEventListener('pause', () => {
      clearInterval(interval);
    });
  };
  const filteredFeedbacks = userFeedbacks.filter(feedback => {
    if (filter === 'resolved') return feedback.resolved;
    if (filter === 'non-resolved') return !feedback.resolved;
    return true; // for "all"
  });
  const toggleSelection = id => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };
  const toggleSelectAll = () => {
    const allIds = filteredFeedbacks.map(f => f.id);
    if (selectedItems.size === allIds.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(allIds));
    }
  };
  const clearSelection = () => {
    setSelectedItems(new Set());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  const downloadAudioFile = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', filename);
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const isVideoUrl = url => {
    return url.toLowerCase().includes('screen');
  };
  const isAudioUrl = url => {
    return url.toLowerCase().includes('voice');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
    position: "bottom-center"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Pages_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: user,
    alt: "User",
    style: {
      borderRadius: '50%',
      width: '32px',
      height: '32px'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bplvf-emails-page-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "All Feedback"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Here you are getting resolve and non-resolve both feedbacks.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-table-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-filters-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setFilter('all'),
    className: `vfd-filter-btn ${filter === 'all' ? 'active' : ''}`
  }, "All"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setFilter('resolved'),
    className: `vfd-filter-btn ${filter === 'resolved' ? 'active' : ''}`
  }, "Resolved"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setFilter('non-resolved'),
    className: `vfd-filter-btn ${filter === 'non-resolved' ? 'active' : ''}`
  }, "Not Resolved")), filteredFeedbacks && filteredFeedbacks.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "vfd-table"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: selectedItems.size === filteredFeedbacks.length && filteredFeedbacks.length > 0,
    onChange: toggleSelectAll,
    className: "vfd-checkbox"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "ID"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Source Page"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Page URL"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "User"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "User Feedback"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Resolved"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Created At"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Actions"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, filteredFeedbacks.map(feedback => {
    var _feedback$id, _feedback$source_page;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: feedback.id,
      className: feedback.unread ? 'vfd-row-unread' : ''
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      checked: selectedItems.has(feedback.id),
      onChange: () => toggleSelection(feedback.id),
      className: "vfd-checkbox"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (_feedback$id = feedback.id) !== null && _feedback$id !== void 0 ? _feedback$id : 'N/A'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (_feedback$source_page = feedback.source_page_title) !== null && _feedback$source_page !== void 0 ? _feedback$source_page : 'Unknown'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "source-page-url"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "url-text"
    }, feedback.source_page_url ? feedback.source_page_url.length > 30 ? feedback.source_page_url.substring(0, 30) + '...' : feedback.source_page_url : 'Not found'), feedback.source_page_url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: feedback.source_page_url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "goto-link"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.GoToLink, null)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, feedback.user_name || feedback.user_email ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontWeight: '500'
      }
    }, feedback.user_name || 'Anonymous'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '12px',
        color: '#666'
      }
    }, feedback.user_email || 'No Email')) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        color: '#aaa',
        fontStyle: 'italic'
      }
    }, "Anonymous")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, isAudioUrl(feedback.audioUrl) ?
    // --- AUDIO ---
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-audio-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "vfd-audio-play-btn",
      onClick: () => handlePlayAudio(feedback.audioUrl, feedback.id)
    }, playingId === feedback.id ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.PauseIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.PlayIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-progress-bar",
      onClick: e => {
        if (audioRef.current && playingId === feedback.id) {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const width = rect.width;
          const newTime = clickX / width * audioRef.current.duration;
          audioRef.current.currentTime = newTime;
        }
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-progress-fill",
      style: {
        width: playingId === feedback.id ? `${progress * 100}%` : '0%',
        transition: 'width 0.1s linear'
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "vfd-audio-download-btn",
      title: "Download",
      onClick: () => downloadAudioFile(feedback.audioUrl, `${feedback.source_page_title}.mp3`)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.DownloadIcon, null))) : isVideoUrl(feedback.audioUrl) ?
    // --- VIDEO ---
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-video-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-video-thumbnail",
      onClick: () => setVideoUrl(feedback.audioUrl)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: feedback.audioUrl,
      muted: true,
      preload: "metadata"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vfd-video-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.PlayIcon, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "vfd-audio-download-btn",
      title: "Download Video",
      onClick: () => downloadAudioFile(feedback.audioUrl, `${feedback.source_page_title}.mp4`)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.DownloadIcon, null))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Unsupported File")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      className: "vfd-resolved-checkbox",
      checked: feedback.resolved,
      onChange: () => handleResolveToggle(feedback.id)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Date(feedback.createdAt).toLocaleDateString()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "vfd-actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "vfd-btn delete",
      title: "Delete",
      onClick: () => handleDelete(feedback.id)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_icons__WEBPACK_IMPORTED_MODULE_5__.Delete, null))));
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: 'center',
      fontSize: '25px'
    }
  }, ' ', "No Feedback Found!")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_FloatingBulkAction_FloatingBulkActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedCount: selectedItems.size,
    totalCount: Object.keys(filteredFeedbacks).length,
    onSelectAll: toggleSelectAll,
    onDelete: handleBulkDelete,
    onClear: clearSelection
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Pages_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null), showDeleteConfirm && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Shared_DeleteModal_DeleteModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: showDeleteConfirm,
    onClose: () => {
      setShowDeleteConfirm(false);
      setDeletingIds([]);
      setIsBulkDelete(false);
    },
    onConfirm: confirmBulkDelete
  }), videoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-video-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-video-backdrop",
    onClick: () => setVideoUrl(null)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vfd-video-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: videoUrl,
    controls: true,
    autoPlay: true,
    style: {
      width: '100%',
      borderRadius: '8px'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "vfd-video-close",
    onClick: () => setVideoUrl(null)
  }, "\u2716"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersFeedbacksContainer);

/***/ }),

/***/ "./src/admin-pages/Utils/icons.js":
/*!****************************************!*\
  !*** ./src/admin-pages/Utils/icons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentIcon: () => (/* binding */ AlignmentIcon),
/* harmony export */   AudioIcon: () => (/* binding */ AudioIcon),
/* harmony export */   BorderIcon: () => (/* binding */ BorderIcon),
/* harmony export */   BorderRadiusIcon: () => (/* binding */ BorderRadiusIcon),
/* harmony export */   BoxControlIcon: () => (/* binding */ BoxControlIcon),
/* harmony export */   ButtonIcon: () => (/* binding */ ButtonIcon),
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   CheckSquare: () => (/* binding */ CheckSquare),
/* harmony export */   ClockIcon: () => (/* binding */ ClockIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   ColorIcon: () => (/* binding */ ColorIcon),
/* harmony export */   ContainerIcon: () => (/* binding */ ContainerIcon),
/* harmony export */   Copy: () => (/* binding */ Copy),
/* harmony export */   CrownIcon: () => (/* binding */ CrownIcon),
/* harmony export */   DatabaseIcon: () => (/* binding */ DatabaseIcon),
/* harmony export */   Delete: () => (/* binding */ Delete),
/* harmony export */   Desktop: () => (/* binding */ Desktop),
/* harmony export */   DownloadIcon: () => (/* binding */ DownloadIcon),
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   EmailIcon: () => (/* binding */ EmailIcon),
/* harmony export */   FacebookIcon: () => (/* binding */ FacebookIcon),
/* harmony export */   GoToLink: () => (/* binding */ GoToLink),
/* harmony export */   LinkedInIcon: () => (/* binding */ LinkedInIcon),
/* harmony export */   Mobile: () => (/* binding */ Mobile),
/* harmony export */   PaintBrush: () => (/* binding */ PaintBrush),
/* harmony export */   PauseIcon: () => (/* binding */ PauseIcon),
/* harmony export */   PlayIcon: () => (/* binding */ PlayIcon),
/* harmony export */   PluginIcon: () => (/* binding */ PluginIcon),
/* harmony export */   RadioIcon: () => (/* binding */ RadioIcon),
/* harmony export */   SeeLive: () => (/* binding */ SeeLive),
/* harmony export */   Settings: () => (/* binding */ Settings),
/* harmony export */   SettingsIcon: () => (/* binding */ SettingsIcon),
/* harmony export */   Tablet: () => (/* binding */ Tablet),
/* harmony export */   TextIcon: () => (/* binding */ TextIcon),
/* harmony export */   ToggleIcon: () => (/* binding */ ToggleIcon),
/* harmony export */   TypographyIcon: () => (/* binding */ TypographyIcon),
/* harmony export */   WidthIcon: () => (/* binding */ WidthIcon),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   YoutubeIcon: () => (/* binding */ YoutubeIcon),
/* harmony export */   video1: () => (/* binding */ video1),
/* harmony export */   video2: () => (/* binding */ video2),
/* harmony export */   video3: () => (/* binding */ video3),
/* harmony export */   video4: () => (/* binding */ video4),
/* harmony export */   voice1: () => (/* binding */ voice1),
/* harmony export */   voice2: () => (/* binding */ voice2),
/* harmony export */   voice3: () => (/* binding */ voice3),
/* harmony export */   voice4: () => (/* binding */ voice4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Edit = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 576 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
  }));
};
const Delete = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"
  }));
};
const Copy = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"
  }));
};
const Settings = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
  }))));
};
const SeeLive = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 576 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
  }));
};
const CheckSquare = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9 11 3 3L22 4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
};
const Check = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 6 9 17l-5-5"
  }));
};
const X = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 6 6 18"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m6 6 12 12"
  }));
};
const TypographyIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 7v-2h13v2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 5v14"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 19h-4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 13v-1h6v1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 12v7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 19h2"
  }));
};
const BorderIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M240 224h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-288 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96 192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM240 320h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-96 288h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96-384h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM48 224H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-96H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
  }));
};
const AlignmentIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
  }));
};
const WidthIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2 6L2 18H4L4 6H2ZM9.44975 7.05025L4.5 12L9.44727 16.9473L9.44826 13H14.5501L14.55 16.9492L19.5 11.9995L14.5503 7.04976L14.5502 11H9.44876L9.44975 7.05025ZM20 6H22V18H20V6Z"
  }));
};
const ColorIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M430.1 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 12-36.6.1-47.7zM120 216c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm40 126c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-161c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm72 219c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm24-208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
  }));
};
const CrownIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 576 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
  }));
};
const TextIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m292.6 407.78-120-320a22 22 0 0 0-41.2 0l-120 320a22 22 0 0 0 41.2 15.44l36.16-96.42a2 2 0 0 1 1.87-1.3h122.74a2 2 0 0 1 1.87 1.3l36.16 96.42a22 22 0 0 0 41.2-15.44zm-185.84-129 43.37-115.65a2 2 0 0 1 3.74 0l43.37 115.67a2 2 0 0 1-1.87 2.7h-86.74a2 2 0 0 1-1.87-2.7zM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0 0 40.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 0 1-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1 0 44 .19v-143c0-56.18-45-102.56-101.23-102.97zM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 0 1 2 2.1C455 370.1 429.46 394.5 380 394.5z"
  }));
};
const BorderRadiusIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm-8 0h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0 4h2v2H3zm0-8h2v2H3zm4 0h2v2H7zm12 12h2v2h-2zM16 3h-5v2h5c1.654 0 3 1.346 3 3v5h2V8c0-2.757-2.243-5-5-5z"
  }));
};
const BoxControlIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 15 15",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "5",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "3",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "7",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "5",
    y: "7",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "3",
    y: "7",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "9",
    y: "7",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "11",
    y: "7",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "9",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "11",
    width: "1",
    height: "1",
    rx: ".5",
    fill: "currentColor"
  }));
};
const ContainerIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m7.5 4.27 9 5.15"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m3.3 7 8.7 5 8.7-5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 22V12"
  }));
};
const ButtonIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m13 13 6 6"
  }));
};
const CloseIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
  }));
};
const PluginIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 352 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"
  }));
};
const PlayIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
  }));
};
const PauseIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
  }));
};
const DownloadIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
  }));
};
const YoutubeIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 576 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  }));
};
const LinkedInIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
  }));
};
const FacebookIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
  }));
};
const ToggleIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-.883 4.322h1.766v8.757h-1.766zm-.74 2.053v1.789a4.448 4.448 0 1 0 3.247 0V6.375a6.146 6.146 0 1 1-5.669 10.552 6.145 6.145 0 0 1 2.421-10.552z"
  }));
};
const EmailIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
  }));
};
const AudioIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 3v9.28a4.39 4.39 0 0 0-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"
  }));
};
const voice1 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19zM20.36 1l-1.41 1.41a7.007 7.007 0 0 1 0 9.9l1.41 1.41a8.98 8.98 0 0 0 0-12.72z"></path>
    <path d="M17.54 10.9a5.003 5.003 0 0 0 0-7.07l-1.41 1.41a3 3 0 0 1 0 4.24l1.41 1.42z"></path>
  </svg>`;
const voice2 = ` <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 10v3"></path>
    <path d="M6 6v11"></path>
    <path d="M10 3v18"></path>
    <path d="M14 8v7"></path>
    <path d="M18 5v13"></path>
    <path d="M22 10v3"></path>
  </svg>`;
const voice3 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"></path>
  </svg>`;
const voice4 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.331 11.378s.5418-.089.765.1439c.2234.2332.077.7156-.2195.7237-.2965.01-.5705.063-.765-.1439-.1946-.2066-.1424-.6218.2195-.7237m5.881 3.2925c-.0522.01-.1075-.018-.164-.059-.3884-.5413-.5287-2.3923-.707-2.5025-.185-.1144-.8545 1.0255-2.1862.903-.5569-.051-1.1236-.4121-1.4573-.662.031-.4206.0364-1.4027.8659-1.0833.5038.1939 1.3667.7266 2.1245-.23.8378-1.0579 1.2999-.7506 1.577-.5206.2771.23.0925 1.4259.5058 1.0916.4133-.3343 2.082-2.4103 2.082-2.4103s1.292-1.303 1.4898.067c.1979 1.3698 1.0403 2.8877 1.2635 2.8445.2234-.043 2.8223-5.3253 3.1945-5.666.3722-.3409 1.6252-.2961 1.5657.5781-.0596.8742-.1871 6.308-.1871 6.308s-.147 1.5311.0924.7128c.0992-.3392.206-.6453.3392-1.0024.6414-2.0534 1.734-5.5613 2.2784-7.3688.1252-.4325.233-.8037.3166-1.0891l.0001-.0008a3.5925 3.5925 0 0 1 .0973-.3305c.0455-.1532.0763-.2546.0858-.2813.0243-.068.0925-.1192.1884-.157.0962-.061.1995-.064.3165-.067.3021-.027.6907.012 1.0401.1119.1018 0 .2125.037.3172.1118v.0001s.0063 0 .0151.01c.0023 0 .0048 0 .0073.01.0219.015.0573.045.0983.095.0012 0 .0025 0 .004.01.017.021.0341.045.0515.073.1952.2863.315.814.1948 1.7498-.2996 2.3354-.5316 7.1397-.5316 7.1397s-.0461.2298.4353-.782c.0167-.035.0383-.066.058-.098.026-.017.0552-.042.0913-.085.2974-.3546 1.0968-.5629 1.6512-.5586.2336.028.4293.087.5462.1609.2188.333.0897 1.562.0897 1.562-.4612.043-1.3403.2908-1.6519.3366-.3118.046-.7852 2.0699-1.4433 1.8629-.6581-.2069-2.1246-1.1268-2.1246-1.2533 0-.1102.1152-1.4546.1453-1.8016.0022-.024.004-.046.0058-.068a.152.152 0 0 1 .0014-.014l-.0002.0003c.0213-.2733.0023-.3927-.1239-.1199-.1086.2346-.581 1.7359-1.1078 3.3709-.0556.1429-1.0511 3.1558-1.1818 3.5231-.156.4261-.287.7523-.3776.921-.1378.1867-.3234.3036-.5826.2252-.6465-.1954-1.4654-1.0889-1.473-1.3106-.0155-1.2503.0608-7.973-.2423-7.4127-.311.5744-2.73 4.5608-2.73 4.5608-.0405.01-.0705.01-.1062.01-.1712-.019-.4366-.074-.51-.2384-.004-.01-.0094-.018-.0129-.028-.0035-.01-.0075-.022-.0135-.04-.0329-.1097-.0463-.2289-.0753-.3265-.1082-.3652-.2813-.8886-.463-1.421-.2784-.9079-.5654-1.8366-.6127-1.9391-.0923-.2007-.2268-.116-.3475-.0002-.54.458-1.6868 2.4793-2.7225 2.5898"></path>
  </svg>`;
const video1 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
  </svg>`;
const video2 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"></path>
    <path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"></path>
  </svg>`;
const video3 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Video_On">
      <path d="M21.05,5.05a1.433,1.433,0,0,0-1.48.08L16.25,7.37V6.56a2.5,2.5,0,0,0-2.5-2.5H4.69a2.5,2.5,0,0,0-2.5,2.5V17.44a2.5,2.5,0,0,0,2.5,2.5h9.06a2.5,2.5,0,0,0,2.5-2.5v-.81l3.32,2.24a1.5,1.5,0,0,0,.81.24,1.414,1.414,0,0,0,1.43-1.43V6.32A1.437,1.437,0,0,0,21.05,5.05Zm-5.8,12.39a1.5,1.5,0,0,1-1.5,1.5H4.69a1.5,1.5,0,0,1-1.5-1.5V6.56a1.5,1.5,0,0,1,1.5-1.5h9.06a1.5,1.5,0,0,1,1.5,1.5Zm5.56.24a.415.415,0,0,1-.23.38.425.425,0,0,1-.45-.02l-3.88-2.62V8.58l3.88-2.62a.425.425,0,0,1,.45-.02.415.415,0,0,1,.23.38Z"></path>
    </g>
  </svg>`;
const video4 = `<svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    version="1.1"
    viewBox="0 0 17 17"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g></g>
    <path d="M12.991 6.75v-2.25c0-0.827-0.678-1.5-1.512-1.5h-7.479v-0.5c0-0.276 0.225-0.5 0.5-0.5h5.541v-1h-5.541c-0.827 0-1.5 0.673-1.5 1.5v0.5h-1.488c-0.834 0-1.512 0.673-1.512 1.5v2.001c0 0.827 0.678 1.5 1.512 1.5h0.504v5.499c0 0.827 0.673 1.5 1.5 1.5h7.964c0.834 0 1.512-0.673 1.512-1.5v-2.251l4.008 2.783v-10.065l-4.009 2.783zM16 12.121l-4.009-2.783v4.162c0 0.276-0.229 0.5-0.512 0.5h-7.963c-0.275 0-0.5-0.224-0.5-0.5v-6.499h-1.504c-0.283 0-0.512-0.224-0.512-0.5v-2.001c0-0.276 0.229-0.5 0.512-0.5h9.968c0.282 0 0.512 0.224 0.512 0.5v4.163l4.008-2.784v6.242z"></path>
  </svg>`;
const GoToLink = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
  }));
};
const SettingsIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
  }))));
};
const Desktop = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "448",
    height: "320",
    x: "32",
    y: "64",
    fill: "none",
    strokeLinejoin: "round",
    strokeWidth: "32",
    rx: "32",
    ry: "32"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "m304 448-8-64h-80l-8 64h96z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M368 448H144"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48zm224 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"
  }));
};
const Tablet = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64L64 64l0 320 320 0 0-320z"
  }));
};
const Mobile = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Mobile_1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10,18.933h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z"
  }))));
};
const RadioIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M60 256c0-51 18.6-97.9 54-135.6 5.3-5.7 5.2-14.8-.4-20.3-2.6-2.6-6.1-4.1-9.7-4.1-3.8 0-7.4 1.6-10.1 4.4C53.3 143.7 32 197.4 32 256c0 58.5 21.3 112.3 61.7 155.5 2.7 2.9 6.3 4.5 10.2 4.5 3.6 0 7.1-1.4 9.7-3.9 2.7-2.6 4.3-6.2 4.4-10 .1-3.9-1.3-7.6-4-10.3C78.6 353.9 60 307 60 256zM418.2 100.4c-2.6-2.8-6.2-4.4-10-4.4-3.6 0-7.1 1.4-9.7 3.9-2.7 2.6-4.3 6.2-4.4 10-.1 3.9 1.3 7.6 4 10.3 35.3 37.8 54 84.7 54 135.7s-18.6 97.9-54 135.7c-5.3 5.6-5.2 14.7.3 20.2 2.5 2.6 6 4 9.7 4 3.9 0 7.6-1.6 10.2-4.6 40.4-43 61.7-96.7 61.7-155.2 0-58.5-21.3-112.4-61.8-155.6z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M159.2 347.7c-24.1-24.3-37.3-56.6-37.3-90.9 0-35 13.8-67.9 38.8-92.4 5.5-5.3 5.6-14.2.2-19.8-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4C110.7 174.2 94 214.1 94 256.8c0 41.6 16.1 80.9 45.3 110.6 2.7 2.7 6.2 4.2 9.9 4.2s7.2-1.5 9.8-4.2c2.6-2.6 4.1-6.1 4.1-9.8.2-3.7-1.2-7.2-3.9-9.9zM371 144.5c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 25 24.5 38.7 56.5 38.7 91.5 0 34.2-13.1 67.4-37.1 91.8-5.4 5.4-5.3 14.3.1 19.7 2.6 2.6 6.2 4.1 9.8 4.1 3.8 0 7.4-1.5 9.9-4.1C402 337.7 418 297.6 418 256c0-42.5-16.7-81.5-47-111.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M207.1 183.4c-2.6-2.7-6.2-4.2-10-4.2-3.7 0-7.2 1.4-9.8 4.1-19.8 19.5-30.8 45.6-30.8 73.3 0 27.1 10.5 52.7 29.5 72.1 2.7 2.7 6.2 4.2 10 4.2 3.7 0 7.2-1.4 9.8-4 2.7-2.6 4.2-6.1 4.2-9.9 0-3.8-1.4-7.3-4.1-10-13.8-14-21.4-32.6-21.4-52.5 0-20.3 8-39.2 22.4-53.4 5.4-5.2 5.5-14.1.2-19.7zM325.7 183.2c-2.6-2.6-6-4-9.8-4-3.8 0-7.3 1.5-10 4.1-5.4 5.4-5.4 14.3.1 19.8 14.5 14.3 22.4 33.3 22.4 53.5 0 19.8-7.6 38.5-21.5 52.5-2.6 2.6-4.1 6.2-4 9.9 0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.2 4.1 9.8 4.1 3.7 0 7.3-1.5 9.9-4.2 19.1-19.4 29.6-45 29.6-72.1.1-27.8-10.8-53.8-30.6-73.4zM256 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38z"
  }));
};
const ClockIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Stopwatch"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z"
  })));
};
const DatabaseIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"
  }));
};
const PaintBrush = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ...props,
    viewBox: "0 0 512 512",
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M167 309.3c-9 9-10.9 23.2-4.6 34.2l25.6 44.5c5.1 8.9 15.6 13.3 25.7 10.8l61.3-15.3c10.4-2.6 17.5-12 16.9-22.8l-2.5-45.7c-.8-14.4-13.4-25.1-27.8-23.8l-45.4 4.1-49.2-36zm199.1-209.6l-123.6 123.6 57.6 57.6 123.6-123.6c23-23 23-60.6 0-83.6-23-23-60.6-23-83.6 0zM128 448a32 32 0 1 1-64 0 32 32 0 0 1 64 0z"
  }));
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************!*\
  !*** ./src/admin-pages/UsersFeedbacks/usersFeedbacks.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _UsersFeedbacksContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersFeedbacksContainer */ "./src/admin-pages/UsersFeedbacks/UsersFeedbacksContainer.js");



document.addEventListener('DOMContentLoaded', () => {
  const settingsPageEl = document.getElementById('vfdUsersFeedbacksWrapper');
  const adminUrl = settingsPageEl.dataset.adminUrl;
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(settingsPageEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UsersFeedbacksContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: settingsPageEl.dataset.user,
    adminUrl: adminUrl
  }));
});
})();

/******/ })()
;
//# sourceMappingURL=user-feedback.js.map