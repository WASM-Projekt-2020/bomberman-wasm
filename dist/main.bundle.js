!function(e){function n(n){for(var t,o,i=n[0],u=n[1],a=0,c=[];a<i.length;a++)o=i[a],r[o]&&c.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(s&&s(n);c.length;)c.shift()()}var t={},r={0:0};var o={};var i={7:function(){return{"./bomberman_wasm":{__wbindgen_number_new:function(e){return t[3].exports.r(e)},__wbindgen_object_drop_ref:function(e){return t[3].exports.s(e)},__wbg_call_8a9c8b0a32a202ff:function(e,n,r){return t[3].exports.e(e,n,r)},__wbg_call_a8e473c0af4689bc:function(e,n,r,o,i){return t[3].exports.f(e,n,r,o,i)},__wbg_call_234ba1eff6aa84c1:function(e,n,r,o,i,u){return t[3].exports.d(e,n,r,o,i,u)},__wbg_new_3a746f2619705add:function(e,n){return t[3].exports.k(e,n)},__wbg_call_f54d3a6dadb199ca:function(e,n){return t[3].exports.g(e,n)},__wbindgen_jsval_eq:function(e,n){return t[3].exports.q(e,n)},__wbg_self_ac379e780a0d8b94:function(e){return t[3].exports.n(e)},__wbg_require_6461b1e9a0d7c34a:function(e,n){return t[3].exports.m(e,n)},__wbg_crypto_1e4302b85d4f64a2:function(e){return t[3].exports.h(e)},__wbindgen_is_undefined:function(e){return t[3].exports.p(e)},__wbg_getRandomValues_1b4ba144162a5c9e:function(e){return t[3].exports.i(e)},__wbg_getRandomValues_1ef11e888e5228e9:function(e,n,r){return t[3].exports.j(e,n,r)},__wbg_randomFillSync_1b52c8482374c55b:function(e,n,r){return t[3].exports.l(e,n,r)},__wbindgen_debug_string:function(e,n){return t[3].exports.o(e,n)},__wbindgen_throw:function(e,n){return t[3].exports.t(e,n)}}}}};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=a);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+""+({}[e]||e)+".bundle.js"}(e);var s=new Error;c=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.type=o,s.request=i,t[1](s)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return({2:[7]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,a=i[e](),c=fetch(u.p+""+{7:"7bfcec89fdc8ba8813cd"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(c),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(c,a);else{r=c.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}n.push(o[e]=r.then(function(n){return u.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var s=c;u(u.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);Promise.all([t.e(1),t.e(2)]).then(t.bind(null,2)).catch(e=>console.error("Error importing wasm:",e))},function(e,n,t){}]);