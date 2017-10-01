(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"), require("url"), require("fs"), require("path"), require("domain"));
	else if(typeof define === 'function' && define.amd)
		define(["http", "url", "fs", "path", "domain"], factory);
	else if(typeof exports === 'object')
		exports["kasperskyShop"] = factory(require("http"), require("url"), require("fs"), require("path"), require("domain"));
	else
		root["kasperskyShop"] = factory(root["http"], root["url"], root["fs"], root["path"], root["domain"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _httpapijs = __webpack_require__(1);

	var _httpapijs2 = _interopRequireDefault(_httpapijs);

	var _onStart = __webpack_require__(3);

	var _onStart2 = _interopRequireDefault(_onStart);

	var _onGet = __webpack_require__(4);

	var _onGet2 = _interopRequireDefault(_onGet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = new _httpapijs2.default(8084, __dirname);

	server.on('start', _onStart2.default);

	server.on('get', _onGet2.default);

	server.up();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(2)):"function"==typeof define&&define.amd?define(["http"],t):"object"==typeof exports?exports.httpapijs=t(require("http")):e.httpapijs=t(e.http)}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getStatusText=t.getContentType=void 0;var n=o(1),i=r(n),u=o(4),a=r(u),c=o(7),s=r(c);t.default=i.default,t.getContentType=a.default,t.getStatusText=s.default},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),i=r(n);t.default=i.default},function(e,t,o){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var o=e.method,r=o.toLowerCase();Object.prototype.hasOwnProperty.call(l,r)&&l[r](e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),c=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},s=o(3),l={},d=function(t){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;r(this,o);var a=n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return a.port=parseFloat(t),a.root=i,a.on=a.on.bind(a),a.up=a.up.bind(a),a.on("request",u.bind(a)),a}return i(o,t),a(o,[{key:"on",value:function(e,t){switch(e){case"start":this.onStart=t.bind(this);break;case"connection":case"request":c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"on",this).call(this,e,t);break;default:l[e]=t}return this}},{key:"up",value:function(){return c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"listen",this).call(this,this.port),this.emit("fired"),"function"==typeof this.onStart&&this.onStart(),this}}]),o}(s.Server);t.default=d}).call(t,"/")},function(e,t){e.exports=__webpack_require__(2)},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),i=r(n);t.default=i.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),n={".txt":"text/plain; "+r.charsetCode,".htm":"text/html; "+r.charsetCode,".html":"text/html; "+r.charsetCode,".js":"text/javascript; "+r.charsetCode,".css":"text/css; "+r.charsetCode,".bin":"application/binary",".json":"application/json; "+r.charsetCode,".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png",".ico":"image/x-icon",".mp4":"video/mp4",".mp3":"audio/mp3",".gif":"image/gif"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".html";return/^\..*/.test(e)||(e="."+e),n[e]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.charsetCode="charset=utf-8"},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),i=r(n);t.default=i.default},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(9),i=r(n);t.default=function(e){return i.default[e]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required",520:"Unknown Error",522:"Origin Connection Time-out",598:"Network read timeout error",599:"Network connect timeout error"}}])});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var WAITINGS = [500, 1000, 1000, 1000, 2000, 3000, 0];

	var i = 0;

	exports.default = function () {
	  var started = new Date();

	  console.log('Hello!');

	  setTimeout(function () {
	    console.log('I\'m simple nonamed webserver.');

	    setTimeout(function () {
	      console.log('I\'m not very smart and the only protocol which I can is HTTP. =(');

	      setTimeout(function () {
	        console.log('But I belong for this task.');

	        setTimeout(function () {
	          console.log('And of course I\'ll do my best for you.');

	          setTimeout(function () {
	            console.log('But if you need something else you are able to improve me as you wish.');

	            setTimeout(function () {
	              console.log('Oh! In despite of my monologue and slopping over I have got started. And I\'m waiting for your responses about ' + (new Date().getTime() - started.getTime()) / 1000 + ' seconds.');

	              setTimeout(function () {
	                return console.log('Let\'s work!');
	              }, WAITINGS[i++]);
	            }, WAITINGS[i++]);
	          }, WAITINGS[i++]);
	        }, WAITINGS[i++]);
	      }, WAITINGS[i++]);
	    }, WAITINGS[i++]);
	  }, WAITINGS[i++]);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _url = __webpack_require__(5);

	var _fs = __webpack_require__(6);

	var _path = __webpack_require__(7);

	var _fiojs = __webpack_require__(8);

	var _utils = __webpack_require__(10);

	exports.default = function (request, response) {
	  var server = request.server || {};
	  var url = request.url;
	  var _server$root = server.root,
	      root = _server$root === undefined ? __dirname : _server$root;


	  var data = (0, _url.parse)(url, true);
	  var query = data.query || {};
	  var pathname = data.pathname;


	  (0, _fiojs.getFileInfo)((0, _path.join)(root, pathname)).then(function (data) {
	    var exists = data.exists,
	        fileType = data.fileType,
	        path = data.path,
	        name = data.name;


	    if (!exists) {
	      (0, _utils.sendError)(response, 404, name + ' not found.');
	    } else {
	      switch (fileType) {
	        case 'regular file':
	          return data;
	        case 'directory':
	          return (0, _fiojs.getFileInfo)((0, _path.join)(path, 'index.html')).then(function (data) {
	            var exists = data.exists,
	                fileType = data.fileType,
	                path = data.path;

	            if (!exists || fileType !== 'regular file') {
	              (0, _utils.sendError)(response, 404);
	            } else {
	              return data;
	            }
	          });
	        default:
	          (0, _utils.sendError)(response, 403);
	      }
	    }
	  }).then(function (data) {
	    return (0, _utils.sendFile)(response, data);
	  }, function (error) {
	    return (0, _utils.sendError)(response, 500, error.message || error);
	  });
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("url");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e(__webpack_require__(6),__webpack_require__(9),__webpack_require__(7)):"function"==typeof define&&define.amd?define(["fs","domain","path"],e):"object"==typeof exports?exports.fiojs=e(require("fs"),require("domain"),require("path")):t.fiojs=e(t.fs,t.domain,t.path)}(this,function(t,e,n){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getFileInfo=e.writeFile=e.readFile=void 0;var o=n(1),i=r(o),u=n(15),f=r(u),s=n(17),c=r(s);e.readFile=i.default,e.writeFile=f.default,e.getFileInfo=c.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(2),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),u=r(i);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];return new u.default(function(n,r){var i=function(t,e){t?r(t):n(e)};"string"==typeof e?(0,o.readFile)(t,e,i):(0,o.readFile)(t,i)})}},function(t,e){t.exports=__webpack_require__(6)},function(t,e,n){"use strict";t.exports=n(5)},function(t,e,n){"use strict";t.exports=n(6),n(9),n(10),n(11),n(12),n(14)},function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return y=t,m}}function i(t,e){try{return t(e)}catch(t){return y=t,m}}function u(t,e,n){try{t(e,n)}catch(t){return y=t,m}}function f(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&v(t,this)}function s(t,e,n){return new t.constructor(function(o,i){var u=new f(r);u.then(o,i),c(t,new h(e,n,u))})}function c(t,e){for(;3===t._83;)t=t._18;return f._47&&f._47(t),0===t._83?0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e):void a(t,e)}function a(t,e){_(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):p(e.promise,t._18));var r=i(n,t._18);r===m?p(e.promise,y):l(e.promise,r)})}function l(t,e){if(e===t)return p(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var n=o(e);if(n===m)return p(t,y);if(n===t.then&&e instanceof f)return t._83=3,t._18=e,void d(t);if("function"==typeof n)return void v(n.bind(e),t)}t._83=1,t._18=e,d(t)}function p(t,e){t._83=2,t._18=e,f._71&&f._71(t,e),d(t)}function d(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function v(t,e){var n=!1,r=u(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,p(e,t))});n||r!==m||(n=!0,p(e,y))}var _=n(7),y=null,m={};t.exports=f,f._47=null,f._71=null,f._44=r,f.prototype.then=function(t,e){if(this.constructor!==f)return s(this,t,e);var n=new f(r);return c(this,new h(t,e,n)),n}},function(t,e,n){"use strict";function r(t){s.length||(i(),c=!0),s[s.length]=t}function o(){for(;a<s.length;){var t=a;if(a+=1,s[t].call(),a>l){for(var e=0,n=s.length-a;e<n;e++)s[e]=s[e+a];s.length-=a,a=0}}s.length=0,a=0,c=!1}function i(){var t=process.domain;t&&(u||(u=n(8)),u.active=process.domain=null),c&&f?setImmediate(o):process.nextTick(o),t&&(u.active=process.domain=t)}var u,f="function"==typeof setImmediate;t.exports=r;var s=[],c=!1,a=0,l=1024;r.requestFlush=i},function(t,e){t.exports=__webpack_require__(9)},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.prototype.done=function(t,e){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,function(t){setTimeout(function(){throw t},0)})}},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.prototype.finally=function(t){return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})}},function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(6);t.exports=o;var i=r(!0),u=r(!1),f=r(null),s=r(void 0),c=r(0),a=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return f;if(void 0===t)return s;if(t===!0)return i;if(t===!1)return u;if(0===t)return c;if(""===t)return a;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(u,f){if(f&&("object"==typeof f||"function"==typeof f)){if(f instanceof o&&f.then===o.prototype.then){for(;3===f._83;)f=f._18;return 1===f._83?r(u,f._18):(2===f._83&&n(f._18),void f.then(function(t){r(u,t)},n))}var s=f.then;if("function"==typeof s){var c=new o(s.bind(f));return void c.then(function(t){r(u,t)},n)}}e[u]=f,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,u=0;u<e.length;u++)r(u,e[u])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=0;r<e;r++)n.push("a"+r);var o="return function ("+n.join(",")+") {var self = this;return new Promise(function (rs, rj) {var res = fn.call("+["self"].concat(n).concat([f]).join(",")+');if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}function o(t){for(var e=Math.max(t.length-1,3),n=[],r=0;r<e;r++)n.push("a"+r);var o="return function ("+n.join(",")+") {var self = this;var args;var argLength = arguments.length;"+("if (arguments.length > "+e+") {")+"args = new Array(arguments.length + 1);for (var i = 0; i < arguments.length; i++) {args[i] = arguments[i];}}return new Promise(function (rs, rj) {"+("var cb = "+f+";")+"var res;switch (argLength) {"+n.concat(["extra"]).map(function(t,e){return"case "+e+":res = fn.call("+["self"].concat(n.slice(0,e)).concat("cb").join(",")+");break;"}).join("")+'default:args[argLength] = cb;res = fn.apply(self, args);}if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}var i=n(6),u=n(13);t.exports=i,i.denodeify=function(t,e){return"number"==typeof e&&e!==1/0?r(t,e):o(t)};var f="function (err, res) {if (err) { rj(err); } else { rs(res); }}";i.nodeify=function(t){return function(){var e=Array.prototype.slice.call(arguments),n="function"==typeof e[e.length-1]?e.pop():null,r=this;try{return t.apply(this,arguments).nodeify(n,r)}catch(t){if(null===n||void 0===n)return new i(function(e,n){n(t)});u(function(){n.call(r,t)})}}},i.prototype.nodeify=function(t,e){return"function"!=typeof t?this:void this.then(function(n){u(function(){t.call(e,null,n)})},function(n){u(function(){t.call(e,n)})})}},function(t,e,n){"use strict";function r(t){var e;e=u.length?u.pop():new o,e.task=t,e.domain=process.domain,i(e)}function o(){this.task=null,this.domain=null}var i=n(7),u=[];t.exports=r,o.prototype.call=function(){this.domain&&this.domain.enter();var t=!0;try{this.task.call(),t=!1,this.domain&&this.domain.exit()}finally{t&&i.requestFlush(),this.task=null,this.domain=null,u.push(this)}}},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.enableSynchronous=function(){r.prototype.isPending=function(){return 0==this.getState()},r.prototype.isFulfilled=function(){return 1==this.getState()},r.prototype.isRejected=function(){return 2==this.getState()},r.prototype.getValue=function(){if(3===this._83)return this._18.getValue();if(!this.isFulfilled())throw Error("Cannot get a value of an unfulfilled promise.");return this._18},r.prototype.getReason=function(){if(3===this._83)return this._18.getReason();if(!this.isRejected())throw Error("Cannot get a rejection reason of a non-rejected promise.");return this._18},r.prototype.getState=function(){return 3===this._83?this._18.getState():this._83===-1||this._83===-2?0:this._83}},r.disableSynchronous=function(){r.prototype.isPending=void 0,r.prototype.isFulfilled=void 0,r.prototype.isRejected=void 0,r.prototype.getValue=void 0,r.prototype.getReason=void 0,r.prototype.getState=void 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(16),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),u=r(i);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1],n=arguments[2];return new u.default(function(r,i){(0,o.writeFile)(t,e,n,function(t){t?i(t):r()})})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(18),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(3),u=n(19),f=n(4),s=r(f),c=function(t){return t.isDirectory()?"directory":t.isBlockDevice()?"block device":t.isCharacterDevice()?"character device":t.isSymbolicLink()?"symbol link":t.isFIFO()?"fifo":t.isSocket()?"socket":t.isFile()?"regular file":null};e.default=function(t){return new s.default(function(e,n){var r=(0,u.parse)(t),f=r.ext,s=f.replace(".",""),a=(0,u.normalize)(t),l=a.split(u.sep);(0,i.lstat)(a,function(i,u){if(i){var f=i.code;"ENOENT"===f?e(o({},r,{exists:!1,path:t,normalized:a,normalizedArr:l,mime:s})):n(i)}else{var p=c(u)||"",d=!!p;e(o({},r,u,{path:t,normalized:a,normalizedArr:l,exists:d,fileType:p,mime:s}))}})}).then(function(e){return new s.default(function(n,r){(0,i.realpath)(t,function(t,i){if(t){var f=t.code;"ENOENT"===f?n(o({},e,{exists:!1})):r(t)}else{var s=i.split(u.sep),c=(0,u.relative)(process.cwd(),i);n(o({},e,{relative:c,absolute:i,absoluteArr:s}))}})})})}},function(t,e){t.exports=__webpack_require__(7)}])});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("domain");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendFile = exports.sendError = undefined;

	var _sendError = __webpack_require__(11);

	var _sendError2 = _interopRequireDefault(_sendError);

	var _sendFile = __webpack_require__(12);

	var _sendFile2 = _interopRequireDefault(_sendFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.sendError = _sendError2.default;
	exports.sendFile = _sendFile2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _httpapijs = __webpack_require__(1);

	exports.default = function (response, code, msg) {
	  response.statusCode = code;
	  response.statusMessage = msg || (0, _httpapijs.getStatusText)(code);
	  response.end();
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _fiojs = __webpack_require__(8);

	var _httpapijs = __webpack_require__(1);

	var _sendError = __webpack_require__(11);

	var _sendError2 = _interopRequireDefault(_sendError);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (response, fileData) {
	  var path = fileData.path,
	      ext = fileData.ext,
	      exists = fileData.exists,
	      size = fileData.size;


	  if (!exists) {
	    (0, _sendError2.default)(response, 500, 'Incorrect server code!');
	  } else {
	    (0, _fiojs.readFile)(path).then(function (data) {
	      response.statusCode = 200;
	      response.statusMessage = 'OK';
	      response.setHeader('Content-Type', (0, _httpapijs.getContentType)(ext));
	      response.setHeader('Content-Length', size);
	      response.write(data, function () {
	        return response.end();
	      });
	    }, function (error) {
	      return (0, _sendError2.default)(response, 500, error.message || error);
	    });
	  }
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=server.js.map