!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).object=r()}(this,function(){"use strict";var n=function(){return Array.from(arguments).reduce(function(e,r){for(var t in r)e[t]=e[t]&&"[object Object]"===e[t].toString()?n(e[t],r[t]):e[t]=r[t];return e},{})};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function a(e,r){return f(e)===r}function o(r,t){if(r===t)return!0;if(r instanceof Date&&t instanceof Date)return r.getTime()===t.getTime();if(!r||!t||"object"!==c(r)&&"object"!==c(t))return r===t;if(r.prototype!==t.prototype)return!1;var e=Object.keys(r);return e.length===Object.keys(t).length&&((Array.isArray(r)&&Array.isArray(t)||"Object"==n(r)&&"Object"==n(t))&&e.every(function(e){return o(r[e],t[e])}));function n(e){return Object.prototype.toString.call(e).slice(8,-1)}}return{merge:n,clone:function(e){var r,t={};for(r in e)t[r]=e[r];return t},deepClone:function(e){return i=[],u=[],function e(r){if(null===r)return null;if("object"!==c(r))return r;var t;a(r,"array")?t=[]:a(r,"regexp")?(t=new RegExp(r.source,getRegExp(r)),r.lastIndex&&(t.lastIndex=r.lastIndex)):t=a(r,"date")?new Date(r.getTime()):(o=Object.getPrototypeOf(r),Object.create(o));var n,o=i.indexOf(r);if(-1!==o)return u[o];for(n in i.push(r),u.push(t),r)t[n]=e(r[n]);return t}(e);var i,u},findKey:function(e,r){for(var t in e)if("function"==typeof r&&r(e[t])||Array.isArray(r)&&e[t][r[0]]===r[1]||"string"==typeof r&&r in e[t]||o(e[t],r))return t},convertKey:function e(r,t,n){if(!["array","object"].includes(f(r)))throw new TypeError("The first argument should be either an object or an array！");if("[object Object]"!==Object.prototype.toString.call(t))throw new TypeError("The parameter keyMap should be an object!");var o=Array.isArray(r)?[]:{};if(r instanceof Object)for(var i in r){var u=Object.keys(t).includes(i)?t[i]:i;o[u]=r[i],n&&["array","object"].includes(f(r[i]))&&Object.keys(r[i]).length&&(o[u]=e(r[i],t,n))}return o},get:function(e,r,t,n){try{if(!e)return t;if(!r||Array.isArray(r)&&0===r.length)return t||e;for(var o=Array.isArray(r)?r:r.replace(/\[(\d+)\]/g,".$1").split("."),i=n?JSON.parse(JSON.stringify(e)):e,u=0,c=o.length;u<c;u++){i=i[f=o[u],isNaN(Number(f))?f:Number(f)];if(-1<[void 0].indexOf(i))return t}return i}catch(e){return t}var f},objectRebuild:function(t,n){return n?Array.isArray(n)?n.reduce(function(e,r){return e[r]=t[r],e},{}):Object.keys(t).reduce(function(e,r){return n[r]&&(e[n[r]]=t[r]),e},{}):t}}});
//# sourceMappingURL=index.js.map
