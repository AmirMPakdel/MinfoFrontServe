(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026],{91015:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(50788)}])},50788:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(85893),o=n(67294),i=(n(5152),n(77278)),u=n(11837);function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var d=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,n,o,f=p(l);function l(){return c(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"componentDidMount",value:function(){var t=(0,i.k7)("token"),e=(0,i.k7)("redirect"),n=env.PATHS.USER_OVERVIEW;t&&(0,u.d8)(env.TOKEN_KEY,t),e&&(n=e),window.location.href=n}},{key:"render",value:function(){return(0,r.jsx)("div",{})}}])&&a(e.prototype,n),o&&a(e,o),l}(o.Component)},11837:function(t,e,n){"use strict";function r(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="expires="+o.toUTCString(),u=t+"="+e+";"+i+";path=/";r.subdomain&&(u+=";domain="+r.subdomain+".minfo.ir"),document.cookie=u}else{var c=t+"="+e+";path=/";r.subdomain&&(c+=";domain="+r.subdomain+".minfo.ir"),document.cookie=c}}function o(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}function i(t){r(t,"",-5)}n.d(e,{d8:function(){return r},ej:function(){return o},kT:function(){return i}})},77278:function(t,e,n){"use strict";n.d(e,{$b:function(){return d},K8:function(){return c},WC:function(){return i},cP:function(){return l},dy:function(){return u},k7:function(){return v},vm:function(){return m},w3:function(){return p},xC:function(){return a},yU:function(){return s}});n(67294);var r=n(11837),o=n(82854);function i(){return"dev"==env.ENVIRONMENT_MODE||"prd"!=env.ENVIRONMENT_MODE&&"localhost"===location.hostname}function u(){var t=null;if(i())t=(0,r.ej)(env.TENANT_KEY);else{var e=location.hostname.split(".");3==e.length&&(t=e[0])}return t}function c(t,e){if(i())return t;e||(e=u());var n=env.DOMAIN.split("://");n[1]=e+"."+n[1];var r=n.join("://");return"/"==t?r:r+t}function a(t){return i()?t:"/"==t?env.DOMAIN:env.DOMAIN+t}function f(t,e){var n=document.getElementsByTagName("meta");if(n[t])n[t].content=e;else{var r=document.createElement("meta");r.setAttribute("name",t),r.setAttribute("content",e),document.getElementsByTagName("head")[0].appendChild(r)}}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=o.Z.get("site_info")||{};t&&(e.page_title?document.title=e.page_title+" |  \u0645\u06cc\u0646\u0641\u0648":document.title="\u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc  | \u0645\u06cc\u0646\u0641\u0648"),e.motto?f("description",e.motto):f("description","\u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634 \u062f\u0648\u0631\u0647 \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc  \u0628\u0627 \u0645\u06cc\u0646\u0641\u0648")}function s(t){return window.location.href.split("/")[t+2]}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.href;t=t.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),o=r.exec(n);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):e}function p(t){var e=new FormData;return Object.keys(t).forEach((function(n){e.set(n,t[n])})),e}function d(t){switch(t){case"image/png":return"png";case"image/jpeg":return"jpg";case"video/mp4":return"mp4";case"audio/mpeg":return"mp3";default:console.log(t);var e=t.split("/")[1];return e||(e=t),e}}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r={};return t.forEach((function(t){t[n]!=e||(r=t)})),r}},82854:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(77278);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};o(u,"store",(function(t,e,n){n||(n=Date.now()+36e5);var o="";if("object"===typeof e)o=JSON.stringify(e);else{if("string"!==typeof e&&"number"!==typeof e&&"boolean"!==typeof e)return void((0,r.WC)()&&alert("storing object type of "+i(e)+" rejected"));if(!e.toString)return void((0,r.WC)()&&alert("storing object can not be cast to string"));o=e.toString()}var u=(0,r.dy)();u||(u="minfo");var c=JSON.stringify({type:i(e),exp:n,tenant:u});window.localStorage.setItem("__"+t,c),window.localStorage.setItem(t,o)})),o(u,"retrive",(function(t){var e=window.localStorage.getItem("__"+t);if(!e)return null;var n=null;try{n=JSON.parse(e)}catch(l){return console.log(l),u.remove(t),null}var o=n.type,i=n.exp,c=n.tenant;if(i<Date.now())return u.remove(t),null;var a=(0,r.dy)();if(a||(a="minfo"),c!=a)return u.remove(t),null;var f=window.localStorage.getItem(t);if("object"===o)try{return JSON.parse(f)}catch(l){return console.log(l),u.remove(t),null}else{if("string"===o)return f;if("number"!==o)return"boolean"===o?"true"===f||"1"===f||1===f||!0===f:null;try{return Number(f)}catch(l){return console.log(l),u.remove(t),null}}})),o(u,"remove",(function(t){window.localStorage.removeItem(t),window.localStorage.removeItem("__"+t)})),o(u,"set",(function(t,e,n){return u.store(t,e,n)})),o(u,"get",(function(t){return u.retrive(t)})),o(u,"delete",(function(t){u.remove(t)}))}},function(t){t.O(0,[5152,9774,2888,179],(function(){return e=91015,t(t.s=e);var e}));var e=t.O();_N_E=e}]);