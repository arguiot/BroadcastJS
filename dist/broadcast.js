parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YWPd":[function(require,module,exports) {
"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NotificationCenter=exports.Notification=void 0;var i=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;a(this,e),this.name=t,this.object=n};exports.Notification=i;var c=function(){function t(){a(this,t),this.observers=new Map}return o(t,[{key:"addObserver",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.observers.set("".concat(e,", ").concat(n),t)}},{key:"removeObserver",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.observers.delete("".concat(e,", ").concat(t))}},{key:"post",value:function(t){var n,r=t.name,o=e(this.observers.keys());try{for(o.s();!(n=o.n()).done;){var a=n.value;a.split(",")[0]==r&&this.observers.get(a)(t.object)}}catch(i){o.e(i)}finally{o.f()}}},{key:"default",get:function(){return void 0===globalThis.BroadcastJS_Shared_Instance&&(globalThis.BroadcastJS_Shared_Instance=new t),globalThis.BroadcastJS_Shared_Instance}}]),t}();exports.NotificationCenter=new c;
},{}]},{},["YWPd"], "BroadcastJS")
//# sourceMappingURL=/broadcast.js.map