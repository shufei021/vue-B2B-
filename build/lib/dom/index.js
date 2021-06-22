!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dom=e()}(this,function(){"use strict";function e(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){for(var n in e)t.setAttribute(n,e[n]);return t}return{bindEvent:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},bufferAnimation:function(e,n,t){var o,r=2<arguments.length&&void 0!==t?t:"left";(e="string"==typeof e?document.querySelector(e):e)&&(o="left"===r?"offsetLeft":"offsetTop",clearInterval(e.timer),e.timer=setInterval(function(){var t=Math.ceil((n-e[o])/10);e[o]==n?clearInterval(e.timer):e.style["left"===r?"left":"top"]=e[o]+t+"px"},30))},constantAnimation:function(t,e,n){var o,r,l=2<arguments.length&&void 0!==n?n:"left";(t="string"==typeof t?document.querySelector(t):t)&&(o="left"===l?"offsetLeft":"offsetTop",clearInterval(t.timer),r=e>t[o]?5:-5,t.timer=setInterval(function(){t[o]==e?clearInterval(t.timer):t.style[l]=t[o]+r+"px"},30))},debounce:function(o,r,l){function t(){var t,e=arguments,n=this;c&&clearTimeout(c),l?(t=!c,c=setTimeout(function(){c=null},r),t&&o.apply(n,e)):c=setTimeout(function(){o.apply(n,e)},r)}var c;return t.cancel=function(){clearTimeout(c),c=null},t},fromData:function(n){var t=Object.keys(n).reduce(function(t,e){return!t.append(e,n[e])&&t},new FormData);return t.check=function(){return n},t},getStyle:function(t,e){return(t="string"==typeof t?document.querySelector(t):t)?(n={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight},o=e,t=(t.currentStyle||getComputedStyle(t))[e],o in n?Object.defineProperty(n,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[o]=t,n[e]):null;var n,o},hide:function(t){Array.from(document.querySelectorAll(t)).forEach(function(t){return t.style.display="none"})},isEllipsis:function(t){return t.scrollHeight!==t.offsetHeight||t.scrollWidth!==t.offsetWidth},throttle:function(e,n,o){var r,l,c,i=0;return o=o||{},function(){l=this,c=arguments;var t=(new Date).valueOf();!1!==o.leading||i||(i=t),n<t-i?(r&&(clearTimeout(r),r=null),e.apply(l,c),i=t):r||!1===o.trailing||(r=setTimeout(function(){i=(new Date).valueOf(),r=null,e.apply(l,c)},n))}},trigger:function(t,e){var n=document.createEvent("Events");n.initEvent(e,!0,!0),e in t?(t[e](),["blur","scroll","select"].includes(e)&&t.dispatchEvent(n)):t.dispatchEvent(n)},unbindEvent:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},getAttr:function(t,e){try{return(t="string"==typeof t?document.querySelector(t):t).getAttribute(e)}catch(t){return{}}},setAttr:r,getMaxZIndex:function(){var t=document.querySelectorAll("*");return Math.max.apply(Math,e(e(t).map(function(t){return parseInt(getComputedStyle(t).zIndex)||1})))},bottomVisible:function(){return document.documentElement.clientHeight+window.scrollY>=(document.documentElement.scrollHeight||document.documentElement.clientHeight)},scrollToTop:function t(){var e=document.documentElement.scrollTop||document.body.scrollTop;0<e&&(window.requestAnimationFrame(t),window.scrollTo(0,e-e/8))},smoothScroll:function(t){return document.querySelector(t).scrollIntoView({behavior:"smooth"})},getScrollPosition:function(t){t=0<arguments.length&&void 0!==t?t:window;return{x:void 0!==t.pageXOffset?t.pageXOffset:t.scrollLeft,y:void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop}},backTop:function(t,e){var n=1<arguments.length&&void 0!==e?e:100,o=document.getElementById(t),r=document.documentElement,l=document.body;function c(){o.style.display=r.scrollTop+l.scrollTop>n?"block":"none"}window.onscroll=c,o.style.display="none",o.onclick=function(){o.style.display="none",window.onscroll=null,this.timer=setInterval(function(){r.scrollTop-=Math.ceil(.1*(r.scrollTop+l.scrollTop)),l.scrollTop-=Math.ceil(.1*(r.scrollTop+l.scrollTop)),r.scrollTop+l.scrollTop==0&&clearInterval(o.timer,window.onscroll=c)},10)}},contains:function(t,e){t="string"==typeof t?document.querySelector(t):t,e="string"==typeof e?document.querySelector(e):e;return!(!t||!e)&&t.contains(e)},getScrollXY:function(){return document.body.scrollTop?{x:document.body.scrollLeft,y:document.body.scrollTop}:{x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop}},dynamicAddCss:function(n,t){var o=1<arguments.length&&void 0!==t?t:"";return new Promise(function(t){var e=document.createElement("link");e.setAttribute("href",o+n+".css"),e.setAttribute("type","text/css"),e.onload=function(){return t(e)},document.getElementsByTagName("head")[0].appendChild(e)})},dynamicAddScript:function(e){return new Promise(function(t){e.forEach(function(t){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)}),window.onload=function(){return t()}})},createElement:function(t,e){if(t){var n=document.createElement(t);return"object"===(t=e,Object.prototype.toString.call(t).slice(8,-1).toLowerCase())?r(n,e):n}}}});
//# sourceMappingURL=index.js.map
