!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).date=t()}(this,function(){"use strict";function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function g(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return e?new Date("string"==typeof e&&-1<e.indexOf("-")?e.replace(/-/g,"/"):e):new Date}function u(e,t){var n=(a=o(e,2))[0],r=a[1],a=new Date,t=t;return 1==e.length?isNaN(new Date(n).valueOf())?t=n:a=new Date("string"==typeof n?n.replace(/-/g,"/"):n):2<=e.length&&(a=new Date("string"==typeof n?n.replace(/-/g,"/"):n),t=r),{dt:a,format:t}}function a(e){return e=0<arguments.length&&void 0!==e?e:new Date,{year:(e=f(e)).getFullYear(),month:e.getMonth()+1,date:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}}function y(e,t,n){var r=String(e);return!r||r.length>=t?String(e):"".concat(Array(t+1-r.length).join(n)).concat(e)}function l(e){var t=e.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);return null!=t&&((e=new Date(t[1],t[3]-1,t[4])).getFullYear()==t[1]&&e.getMonth()+1==t[3]&&e.getDate()==t[4])}function c(e){var t=e.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);return null!=t&&((e=new Date(t[1],t[3]-1,t[4],t[5],t[6],t[7])).getFullYear()==t[1]&&e.getMonth()+1==t[3]&&e.getDate()==t[4]&&e.getHours()==t[5]&&e.getMinutes()==t[6]&&e.getSeconds()==t[7])}function s(e){return(new Date).toLocaleDateString()==new Date("string"==typeof e?e.replace(/-/g,"/"):e).toLocaleDateString()}function d(e){var t=new Date;return t.setDate(t.getDate()-1),t.toLocaleDateString()===new Date(e).toLocaleDateString()}function D(e){return a(e).year}function h(e){return a(e).month}function w(e){return["凌晨","早上","上午","中午","下午","晚上","深夜"][0<=(e=f(e).getHours())&&e<=6?0:6<e&&e<=8?1:8<e&&e<=12?2:12<e&&e<=14?3:14<e&&e<=18?4:18<e&&e<=21?5:6]}function M(e,t){return e=0<arguments.length&&void 0!==e?e:new Date,(1<arguments.length&&void 0!==t?t:"星期")+["日","一","二","三","四","五","六"][f(e).getDay()]}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=u(t,"yyyy-MM-dd").dt,a=u(t,"yyyy-MM-dd").format,o=0==r.getDay()?7:r.getDay();return r.setDate(r.getDate()-o+1),{first:F(r,a),last:F(new Date(r.getFullYear(),r.getMonth(),r.getDate()+6),a)}}function p(e,t,n){var r=0<arguments.length&&void 0!==e?e:0,e=1<arguments.length&&void 0!==t?t:new Date,e=(n=v(e,t=2<arguments.length&&void 0!==n?n:"yyyy-MM-dd")).first,n=n.last;return r?v(Y(7*r,0<r?n:e),t):{first:e,last:n}}function m(e,t){var n=0<arguments.length&&void 0!==e?e:new Date,e=1<arguments.length&&void 0!==t?t:"yyyy-MM-dd",n=0==(t=new Date(n)).getDay()?7:t.getDay();return t.setDate(t.getDate()-n+1),n=F(t,e),t.setDate(t.getDate()+4),{first:n,last:F(t,e)}}function b(e){var t=f(e),e=new Date(t.getFullYear(),t.getMonth(),t.getDate()),t=new Date(t.getFullYear(),0,1),e=Math.round((e-t)/864e5);return Math.ceil((e+(t.getDay()+1-1))/7)}var e=Object.freeze({__proto__:null,isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},isTime:function(e){e=e.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);return null!=e&&!(24<=e[1]||60<=e[3]||60<=e[4])},isDate:l,isDateTime:c,isToday:s,isYesterday:d,isThisYear:function(e){var t=(new Date).getFullYear();return!(!l(e)&&!c(e))&&t===new Date(e).getFullYear()}}),Y=function(e,t,n){e=0<arguments.length&&void 0!==e?e:0,t=1<arguments.length&&void 0!==t?t:new Date,n=2<arguments.length?n:void 0,t=f(t);return t.setDate(t.getDate()+e),F(t,n||"yyyy-MM-dd")},S=function(e){for(var e=f(e),t={},n=1,r=!0,a=O(e),o=e.getMonth()+1,i=e.getFullYear()+"-"+y(o,2,0)+"-",u=1;u<a+1;u++){var l=v(i+u),c=l.last;h(c)!==o&&r?(n++,r=!1):1==new Date(i+u).getDay()&&n++,t[i+y(u,2,0)]=g(g({},l),{},{w:n,d:a})}return t},O=function(e){e=f(e);return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},j=Object.freeze({__proto__:null,year:D,month:h,date:function(e){return a(e).date},hour:function(e){return a(e).hour},minute:function(e){return a(e).minute},second:function(e){return a(e).second},millisecond:function(e){return a(e).millisecond},quarter:function(e){e=f(e).getMonth();return e<3?1:e<6?2:e<9?3:4},when:w,get:function(t,e){return a(e)[Object.keys(a(e)).find(function(e){return e.charAt(0)===t||e===t||e.charAt(0)+e.charAt(5)===t||"month"===e&&"M"==t})]},toArray:function(e){return Object.values(a(e)).slice(0,6)},toObject:function(e){e=a(e);return delete e.millisecond,e},previwWeekByDate:M,previwMonthByDate:function(e,t){e=0<arguments.length&&void 0!==e?e:new Date,t=1<arguments.length&&void 0!==t?t:"月";return["一","二","三","四","五","六","七","八","九","十","十一","十二"][f(e).getMonth()]+t},previewWeek:function(e,t,n){n=2<arguments.length?n:void 0;return 0===e&&(e=7),0<e&&e<8?(1<arguments.length&&void 0!==t?t:"周")+["一","二","三","四","五","六","日"][e-1]:void 0===n?"Invalid week":n},previewMonth:function(e,t){return 0<e&&e<13?["一","二","三","四","五","六","七","八","九","十","十一","十二"][e-1]+"月":void 0===t?"Invalid month":t},weekFirstLast:v,monthFirstLast:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=u(t,"yyyy-MM-dd").dt,a=u(t,"yyyy-MM-dd").format;return{first:F(new Date(r.getFullYear(),r.getMonth(),1),a),last:F(new Date(r.getFullYear(),r.getMonth()+1,0),a)}},getCurWeekFirstDay:function(){return v(new Date,"yyyy-MM-dd").first},getCurWeekLastDay:function(){return v(new Date,"yyyy-MM-dd").last},getMonthFirstDay:function(e){e=f(e);return F(e,"yyyy-MM-")+"01"},getMonthLastDay:function(e){e=f(e);return e.setMonth(e.getMonth()+1),e.setDate(1),e.setDate(e.getDate()-1),F(e,"yyyy-MM-dd")},getDaysByDate:function(e,t){t=parseInt(Math.abs(new Date(e)-new Date(t))/864e5);return isNaN(t)?0:t},getHalfYear:function(e){return F(new Date(f(e)-15768e6),"yyyy-MM-dd")},getGapWeek:p,getGapDate:Y,getWeekWorkday:m,getGapWeekWorkday:function(e,t,n){var r=0<arguments.length&&void 0!==e?e:0,e=1<arguments.length&&void 0!==t?t:new Date,t=2<arguments.length&&void 0!==n?n:"yyyy-MM-dd",n=m(e),e=n.first,n=n.last;return r?m(Y(5*r,0<r?n:e),t):{first:e,last:n}},getGapYearDate:function(e,t,n){e=0<arguments.length&&void 0!==e?e:0,t=1<arguments.length&&void 0!==t?t:new Date,n=2<arguments.length&&void 0!==n?n:"yyyy-MM-dd",t=f(t);return t.setFullYear(t.getFullYear()+e),F(t,n)},getGapMonthDate:function(e,t,n){e=0<arguments.length&&void 0!==e?e:0,t=1<arguments.length&&void 0!==t?t:new Date,n=2<arguments.length&&void 0!==n?n:"yyyy-MM-dd",t=f(t);return t.setMonth(t.getMonth()+e),F(t,n)},getWeekByDate:function(e,t,n){var r=2<arguments.length&&void 0!==n?n:"yyyy-MM-dd";if(!e)return"";n=f(t),t=0===e?7:e,e=0===n.getDay()?7:n.getDay();return t!==e&&n.setDate(n.getDate()-(e-t)),F(n,r)},getMonthWeek:function(e){e=F(f(e),"yyyy-MM-dd");return S(e)[e].w},getMonthWeekInfo:S,getMonthDays:O,getYearWeek:b,getQuarterWeek:function(e){var t=f(e),n=t.getFullYear(),e=t.getMonth()+1,t=t.getDate(),t=b([n,e,t].join("/"));if(e<4)return t;e=e<7?4:e<10?7:10,t-=b([n,e,1].join("/"));return 1<new Date(n,e,1).getDay()&&(t+=1),t},getPassDaysDate:function(e,t){return arguments.length?i(Array(+e+1).keys()).map(function(e){return new Date((t?new Date(t):Date.now())-864e5*e).toLocaleDateString()}).map(function(e){return e.split(/\/|-/).map(function(e){return y(e,2,0)}).join("-")}).splice(1):[]},getBetweenDates:function(r,e){if(!r)return[];function a(e,t){return new Date(+new Date(e)+864e5*t).toLocaleDateString().replace(/\//g,"-")}var t=+new Date(new Date(r).toLocaleDateString()),n=e?+new Date(new Date(e).toLocaleDateString()):+new Date((new Date).toLocaleDateString());if(t==n)return[a(new Date(e?new Date:r),0)];r=t<n?new Date(t):new Date(e?n:+new Date),e=t<n?new Date(e?n:+new Date):new Date(t);n=parseInt(Math.abs(t-n)/864e5)+1;return Array(n).fill(0).reduce(function(e,t,n){return[].concat(i(e),[a(r,n)])},[])},getYearWeeks:function(n){var e=Array(53).fill(0).map(function(e,t){t=p(t,String(n||(new Date).getFullYear()),"MM/dd YYYY");return t.first.slice(0,5)+"~"+t.last.slice(0,5)});return e&&e.length&&"12"===e[0].substr(0,2)&&e.splice(0,1),e},previewMoment:function(e){var t=+new Date(f(e)),n=+new Date,r=parseInt((n-t)/1e3),n=parseInt(r/60),t=parseInt(r/3600);return r<=60?"刚刚":n<60?n+"分钟前":s(f(e))?t+"小时前":d(f(e))?"昨天 "+F(f(e),"hh:mm"):D(f(e))===D()?F(f(e),"MM/dd hh:mm"):F(f(e),"YYYY/MM/dd hh:mm")},fmtDt:function(e,t){var n=1<arguments.length&&void 0!==t?t:"yyyy-MM-dd hh:mm:ss";if(-1<e.indexOf("Date")){t=new Date(+e.slice(6,-7));return F(t,n)}return-1<e.indexOf("T")?F(e.split("T").join(" "),n):F(e,n)},countTime:function(a,o){var i=setInterval(function(){var e=new Date(a.replace(/-/g,"/")).getTime()/1e3-Date.parse(new Date)/1e3;if(!(0<=e))return clearInterval(i),i=null,o&&o(),!1;var t=Math.floor(e/86400),n=y(Math.floor(e%86400/3600),2,0),r=y(Math.floor(e%86400%3600)/60,2,0),e=y(e%60,2,0);o&&o({date:t,hour:n,minute:r,second:e})},1e3)}}),F=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=u(t,"yyyy-MM-dd hh:mm:ss").dt,a=u(t,"yyyy-MM-dd hh:mm:ss").format,o={Y:String(r.getFullYear()),y:String(r.getFullYear()),M:y(r.getMonth()+1,2,0),d:y(r.getDate(),2,0),h:y(r.getHours(),2,0),H:y(r.getHours(),2,0),m:y(r.getMinutes(),2,0),s:y(r.getSeconds(),2,0),W:M(r,"周"),w:M(r),t:w(r)};return a=a.replace(/\[([^\]]+)]|y{1,4}|Y{1,4}|M{1,2}|d{1,2}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|t|w|W|S/g,function(e){var t=e.charAt(0),n=e.length;return e.includes("[")?e.slice(1,-1):["Y","y"].includes(t)?e.replace(new RegExp("(("+t+")+)","g"),function(e){return o[t].substr(4-e.length)}):1!=n||["W","w","t"].includes(t)?o[t]:Number(o[t])})},A=Object.freeze({__proto__:null,getStamp:function(e,t){var n=arguments;if(!n.length)return+new Date;1==n.length&&"number"==typeof n[0]&&(t=n[0],e=void 0);e=f(e);return e.setDate(e.getDate()+(void 0===t?0:t)),+e},getStampBeforAfter:function(e){var t=f(e);return t.setDate(t.getDate()-1),e=+t,t.setDate(t.getDate()+2),{before:e,after:+t}},getStampStartEnd:function(e){e=f(e);return{start:+new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0),end:+new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59)}},getDaysByStamp:function(e,t){return parseInt(Math.abs(e-t)/864e5)}});function k(){if(!(this instanceof k))throw new TypeError("Cannot call a class as a function")}return k.prototype=g(g(g({format:F},j),e),A),new k});
//# sourceMappingURL=index.js.map
