!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).other={})}(this,function(n){"use strict";function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t,e,r,o,u,i){try{var f=n[u](i),c=f.value}catch(n){return void e(n)}f.done?t(c):Promise.resolve(c).then(r,o)}function t(){var f;return f=regeneratorRuntime.mark(function n(t){var e,r,o,u,i=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(e=i.length,r=new Array(1<e?e-1:0),o=1;o<e;o++)r[o-1]=i[o];return n.prev=1,n.next=4,t.apply(void 0,r);case 4:return u=n.sent,n.abrupt("return",{err:null,res:u,args:r});case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",{err:n.t0,res:null,args:r});case 11:case"end":return n.stop()}},n,null,[[1,8]])}),(t=function(){var n=this,i=arguments;return new Promise(function(t,e){var r=f.apply(n,i);function o(n){s(r,t,e,o,u,"next",n)}function u(n){s(r,t,e,o,u,"throw",n)}o(void 0)})}).apply(this,arguments)}n.caputured=function(n){return t.apply(this,arguments)},n.descartes=function(n){var t,e,r={},o=[],u=null,i=[];for(e in n)"object"===c(n[e])&&(r[e]={parent:u,count:0},u=e);if(null===u)return n;for(;;){var f=void 0;for(f in n)t=r[f].count,i.push(n[f][t]);for(o.push(i),i=[];;){if(!(r[f].count+1>=n[f].length)){r[f].count++;break}if(r[f].count=0,null===(u=r[f].parent))return o;f=u}}},n.nestedHandler=function(n,t,e){(t=n.find(t))?t[1]():e&&e()},n.simplify=function(n,t,e){var r=Object.keys(n).find(function(n){return JSON.parse(n).includes(t)});return"string"==typeof n[r]?n[r]:"function"==typeof n[r]?n[r]():!n[r]&&e&&"string"==typeof e?e:!n[r]&&e&&"function"==typeof e?e():void 0},n.simplifyFunc=function(n,t,e){var r=Object.keys(n);if(!r.length)throw Error("不接受空对象");var o=r.findIndex(function(n){return JSON.stringify(JSON.parse(n))===JSON.stringify(t)});return"string"==typeof(o=n[r[o]])?o:"function"==typeof o?o():o||"string"!=typeof e?o||"function"!=typeof e?void 0:e():e},Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
