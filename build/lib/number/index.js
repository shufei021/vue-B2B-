!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).number=n()}(this,function(){"use strict";function d(t,n){return void 0===n?t:Number(Math.round(t+"e"+(n||0))+"e-"+(n||0))}function u(t,n,r,e){var u,o;try{u=n.toString().split(".")[1].length}catch(t){u=0}try{o=r.toString().split(".")[1].length}catch(t){o=0}var i=Math.pow(10,Math.max(u,o)),l=[d((Math.round(i*n)+Math.round(i*r))/i,e),d((Math.round(i*n)-Math.round(i*r))/i,e),d(Math.round(i*n)*Math.round(i*r)/(i*i),e),d(Math.round(i*n)/Math.round(i*r),e)],i=String(d(l[t],e||0));return e?i.includes(".")?i.split(".")[0]+"."+i.split(".")[1].padEnd(e,0):(i+".").padEnd((i+".").length+e,0):l[t]}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"symbol"!=n(t)&&(!isNaN(parseFloat(t))&&isFinite(t))}return{add:function r(t,e,n){return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,e)},0):0:u(0,t,e,n)},calc:u,devide:function r(t,e,n){return Array.isArray(t)?2<=t.length?t.reduce(function(t,n){return r(t,n,e)}):"":t&&e?u(3,t,e,n):""},fmtNum:function(t,n,r,e){var u=1<arguments.length&&void 0!==n&&n,o=2<arguments.length?r:void 0,n=3<arguments.length?e:void 0;if(void 0===t||null==t)return"";if(!i(r=t+""))return"";e=!r.includes("."),t=0==(o=void 0===o?e?0:r.split(".")[1].length:o)?Math.round(r)+"":(e?r:d(+r+"",o)+"").split(".")[0],r=d(+r+"",o)+"",r=((r=0==o||e?"":r.split(".")[1])||"").padEnd(o,0),r=(u?t.replace(/(?=(?!\b)(\d{3})+$)/g,","):t)+(r.length?"."+r:"");return n?Number(r):r},isNum:i,multiply:function r(t,e,n){return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,e)},1):0:u(2,t,e,n)},round:d,subtract:function r(t,e,n){return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,e)}):0:u(1,t,e,n)},isInteger:function(t){return"number"==typeof t&&!isNaN(t)&&t%1==0},sumBigNumber:function(t,n){var r="",e=0;for(t=t.split(""),n=n.split("");t.length||n.length||e;)r=(e+=~~t.pop()+~~n.pop())%10+r,e=9<e;return r.replace(/^0+/,"")}}});
//# sourceMappingURL=index.js.map