!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("rrweb")):"function"==typeof define&&define.amd?define("myRecordingScript",["rrweb"],r):"object"==typeof exports?exports.myRecordingScript=r(require("rrweb")):e.myRecordingScript=r(e.rrweb)}(self,(e=>(()=>{"use strict";var r={320:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>r});var e=o(320);const r=(r,t=5e3)=>{const o=(0,e.init)({emit(e){console.log(e)}});o.start(),setTimeout((()=>{o.stop()}),t)}})(),n})()));