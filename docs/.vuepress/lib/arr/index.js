!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).arr=r()}(this,function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(r,n){var t,e=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,t)),e}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach(function(n){var r,t;r=e,n=o[t=n],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function u(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"==typeof n)return o(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function c(r,t){if(r===t)return!0;if(r instanceof Date&&t instanceof Date)return r.getTime()===t.getTime();if(!r||!t||"object"!==e(r)&&"object"!==e(t))return r===t;if(r.prototype!==t.prototype)return!1;var n=Object.keys(r);return n.length===Object.keys(t).length&&n.every(function(n){return c(r[n],t[n])})}function f(n,t){return t?n.reduce(function(n,r){return n.map(function(n){return n[t]}).includes(r[t])?n:[].concat(u(n),[r])},[]):u(new Set(n))}function a(r,n,t){var e=1<arguments.length&&void 0!==n?n:null,o=2<arguments.length&&void 0!==t?t:"pid";return r.filter(function(n){return n[o]===e}).map(function(n){return i(i({},n),{},{children:a(r,n.id,o)})})}function l(n,r){var t=1<arguments.length&&void 0!==r?r:1;return n.reduce(function(n,r){return n.concat(1<t&&Array.isArray(r)?l(r,t-1):r)},[])}function n(){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function")}return n.prototype=Object.freeze({__proto__:null,union:function(r,n,t){return r.concat(n.filter(function(n){return t?!r.map(function(n){return n[t]}).includes(n[t]):!r.includes(n)}))},intersection:function(n,r,t){return n.filter(function(n){return t?r.map(function(n){return n[t]}).includes(n[t]):r.includes(n)})},except:function(n,t,e){return[].concat(u(n),u(t)).filter(function(r){return![n,t].every(function(n){return e?n.map(function(n){return n[e]}).includes(r[e]):n.includes(r)})})},sum:function(n,t){return n.reduce(function(n,r){return n+(t?r[t]||0:r)},0)},unique:f,arrayToTree:a,sample:function(n){return n[Math.floor(Math.random()*n.length)]},randomArrayInRangeRepeat:function(n,r,t){t=2<arguments.length&&void 0!==t?t:1;return Array.from({length:t},function(){return Math.floor(Math.random()*(r-n+1))+n})},randomArrayInRange:function(t,n,r){for(var r=2<arguments.length&&void 0!==r?r:1,e=Array(n-t+1).fill(0).map(function(n,r){return t+r}),o=r>e.length?e.length:r,i=[];i.length!=o;){var u=e[Math.floor(Math.random()*e.length)];i.includes(u)||i.push(u)}return i},range:function(t,n,e){return Array.from({length:(n-t)/e+1},function(n,r){return t+r*e})},flatten:l,compact:function(n){return n.filter(Boolean)},countOccurrences:function(n,t,e){return n.reduce(function(n,r){return(e?r[t]===e:r===t)?n+1:n},0)},average:function(n,r){var t=Array.prototype.slice.call(arguments).every(function(n){return!isNaN(parseFloat(n))&&isFinite(n)}),e=(t?arguments:n).length;return(t?Array.prototype.slice.call(arguments):r?n.map("function"==typeof r?r:function(n){return n[r]}):n).reduce(function(n,r){return n+ +r},0)/e},arrayToCSV:function(n,r){var t=1<arguments.length&&void 0!==r?r:",";return n.map(function(n){return n.map(function(n){return'"'.concat(n,'"')}).join(t)}).join("\n")},indexOfAll:function(n,e,o){return n.reduce(function(n,r,t){return(o?r[e]===o:r===e)?[].concat(u(n),[t]):n},[])},group:function(e,o){return Array(Math.ceil(e.length/o)).fill(0).reduce(function(n,r,t){return n.push(e.slice(t*o,(t+1)*o)),n},[])},changePostion:function(n,r,t){n.splice(r,1,n.splice(t,1,n[r])[0])},change:function(n,r,t){n[t]=[n[r],n[r]=n[t]][0]},inset:function(n,r,t){n.splice(t,0,n.splice(r,1)[0])},categoryArchive:function(t,e){return Array.from(new Set(t.map(function(n){return n[e]}))).reduce(function(n,r){return n.push(t.filter(function(n){return n[e]===r})),n},[])},isRepeat:function(r){try{for(var n=0;n<r.length;n++)for(var t=n+1;t<r.length;t++)if(c(r[n],r[t]))return!0;return!1}catch(n){return r.length!==f(r).length}},delBy:function(n,r){for(var t=n.length-1;0<=t;t--)if("function"==typeof r)r(n[t])&&n.splice(t,1);else if(Array.isArray(r))-1<r.indexOf(n[t])&&n.splice(t,1);else if(n[t]===r)n.splice(t,1);else if("Object"===Object.prototype.toString.call(r).slice(8,-1)){var e,o=n[t];for(e in r)Array.isArray(r[e])?-1<r[e].indexOf(o[e])&&n.splice(t,1):r[e]===o[e]&&n.splice(t,1)}}}),new n});
//# sourceMappingURL=index.js.map
