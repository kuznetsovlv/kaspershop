(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"), require("url"), require("path"), require("fs"), require("domain"));
	else if(typeof define === 'function' && define.amd)
		define(["http", "url", "path", "fs", "domain"], factory);
	else if(typeof exports === 'object')
		exports["kasperskyShop"] = factory(require("http"), require("url"), require("path"), require("fs"), require("domain"));
	else
		root["kasperskyShop"] = factory(root["http"], root["url"], root["path"], root["fs"], root["domain"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	var _onPost = __webpack_require__(13);

	var _onPost2 = _interopRequireDefault(_onPost);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = new _httpapijs2.default(8084, __dirname);

	server.on('start', _onStart2.default);
	server.on('get', _onGet2.default);
	server.on('post', _onPost2.default);

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

	var _path = __webpack_require__(6);

	var _fiojs = __webpack_require__(7);

	var _utils = __webpack_require__(10);

	exports.default = function (request, response) {
	  var server = request.server || {};
	  var url = request.url;
	  var _server$root = server.root,
	      root = _server$root === undefined ? __dirname : _server$root;


	  var data = (0, _url.parse)(url, true);
	  // const query = data.query || {};
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
	                fileType = data.fileType;

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

	module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e(__webpack_require__(8),__webpack_require__(9),__webpack_require__(6)):"function"==typeof define&&define.amd?define(["fs","domain","path"],e):"object"==typeof exports?exports.fiojs=e(require("fs"),require("domain"),require("path")):t.fiojs=e(t.fs,t.domain,t.path)}(this,function(t,e,n){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getFileInfo=e.writeFile=e.readFile=void 0;var o=n(1),i=r(o),u=n(15),f=r(u),s=n(17),c=r(s);e.readFile=i.default,e.writeFile=f.default,e.getFileInfo=c.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(2),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),u=r(i);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];return new u.default(function(n,r){var i=function(t,e){t?r(t):n(e)};"string"==typeof e?(0,o.readFile)(t,e,i):(0,o.readFile)(t,i)})}},function(t,e){t.exports=__webpack_require__(8)},function(t,e,n){"use strict";t.exports=n(5)},function(t,e,n){"use strict";t.exports=n(6),n(9),n(10),n(11),n(12),n(14)},function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return y=t,m}}function i(t,e){try{return t(e)}catch(t){return y=t,m}}function u(t,e,n){try{t(e,n)}catch(t){return y=t,m}}function f(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&v(t,this)}function s(t,e,n){return new t.constructor(function(o,i){var u=new f(r);u.then(o,i),c(t,new h(e,n,u))})}function c(t,e){for(;3===t._83;)t=t._18;return f._47&&f._47(t),0===t._83?0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e):void a(t,e)}function a(t,e){_(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):p(e.promise,t._18));var r=i(n,t._18);r===m?p(e.promise,y):l(e.promise,r)})}function l(t,e){if(e===t)return p(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var n=o(e);if(n===m)return p(t,y);if(n===t.then&&e instanceof f)return t._83=3,t._18=e,void d(t);if("function"==typeof n)return void v(n.bind(e),t)}t._83=1,t._18=e,d(t)}function p(t,e){t._83=2,t._18=e,f._71&&f._71(t,e),d(t)}function d(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function v(t,e){var n=!1,r=u(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,p(e,t))});n||r!==m||(n=!0,p(e,y))}var _=n(7),y=null,m={};t.exports=f,f._47=null,f._71=null,f._44=r,f.prototype.then=function(t,e){if(this.constructor!==f)return s(this,t,e);var n=new f(r);return c(this,new h(t,e,n)),n}},function(t,e,n){"use strict";function r(t){s.length||(i(),c=!0),s[s.length]=t}function o(){for(;a<s.length;){var t=a;if(a+=1,s[t].call(),a>l){for(var e=0,n=s.length-a;e<n;e++)s[e]=s[e+a];s.length-=a,a=0}}s.length=0,a=0,c=!1}function i(){var t=process.domain;t&&(u||(u=n(8)),u.active=process.domain=null),c&&f?setImmediate(o):process.nextTick(o),t&&(u.active=process.domain=t)}var u,f="function"==typeof setImmediate;t.exports=r;var s=[],c=!1,a=0,l=1024;r.requestFlush=i},function(t,e){t.exports=__webpack_require__(9)},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.prototype.done=function(t,e){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,function(t){setTimeout(function(){throw t},0)})}},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.prototype.finally=function(t){return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})}},function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(6);t.exports=o;var i=r(!0),u=r(!1),f=r(null),s=r(void 0),c=r(0),a=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return f;if(void 0===t)return s;if(t===!0)return i;if(t===!1)return u;if(0===t)return c;if(""===t)return a;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(u,f){if(f&&("object"==typeof f||"function"==typeof f)){if(f instanceof o&&f.then===o.prototype.then){for(;3===f._83;)f=f._18;return 1===f._83?r(u,f._18):(2===f._83&&n(f._18),void f.then(function(t){r(u,t)},n))}var s=f.then;if("function"==typeof s){var c=new o(s.bind(f));return void c.then(function(t){r(u,t)},n)}}e[u]=f,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,u=0;u<e.length;u++)r(u,e[u])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r=0;r<e;r++)n.push("a"+r);var o="return function ("+n.join(",")+") {var self = this;return new Promise(function (rs, rj) {var res = fn.call("+["self"].concat(n).concat([f]).join(",")+');if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}function o(t){for(var e=Math.max(t.length-1,3),n=[],r=0;r<e;r++)n.push("a"+r);var o="return function ("+n.join(",")+") {var self = this;var args;var argLength = arguments.length;"+("if (arguments.length > "+e+") {")+"args = new Array(arguments.length + 1);for (var i = 0; i < arguments.length; i++) {args[i] = arguments[i];}}return new Promise(function (rs, rj) {"+("var cb = "+f+";")+"var res;switch (argLength) {"+n.concat(["extra"]).map(function(t,e){return"case "+e+":res = fn.call("+["self"].concat(n.slice(0,e)).concat("cb").join(",")+");break;"}).join("")+'default:args[argLength] = cb;res = fn.apply(self, args);}if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}var i=n(6),u=n(13);t.exports=i,i.denodeify=function(t,e){return"number"==typeof e&&e!==1/0?r(t,e):o(t)};var f="function (err, res) {if (err) { rj(err); } else { rs(res); }}";i.nodeify=function(t){return function(){var e=Array.prototype.slice.call(arguments),n="function"==typeof e[e.length-1]?e.pop():null,r=this;try{return t.apply(this,arguments).nodeify(n,r)}catch(t){if(null===n||void 0===n)return new i(function(e,n){n(t)});u(function(){n.call(r,t)})}}},i.prototype.nodeify=function(t,e){return"function"!=typeof t?this:void this.then(function(n){u(function(){t.call(e,null,n)})},function(n){u(function(){t.call(e,n)})})}},function(t,e,n){"use strict";function r(t){var e;e=u.length?u.pop():new o,e.task=t,e.domain=process.domain,i(e)}function o(){this.task=null,this.domain=null}var i=n(7),u=[];t.exports=r,o.prototype.call=function(){this.domain&&this.domain.enter();var t=!0;try{this.task.call(),t=!1,this.domain&&this.domain.exit()}finally{t&&i.requestFlush(),this.task=null,this.domain=null,u.push(this)}}},function(t,e,n){"use strict";var r=n(6);t.exports=r,r.enableSynchronous=function(){r.prototype.isPending=function(){return 0==this.getState()},r.prototype.isFulfilled=function(){return 1==this.getState()},r.prototype.isRejected=function(){return 2==this.getState()},r.prototype.getValue=function(){if(3===this._83)return this._18.getValue();if(!this.isFulfilled())throw Error("Cannot get a value of an unfulfilled promise.");return this._18},r.prototype.getReason=function(){if(3===this._83)return this._18.getReason();if(!this.isRejected())throw Error("Cannot get a rejection reason of a non-rejected promise.");return this._18},r.prototype.getState=function(){return 3===this._83?this._18.getState():this._83===-1||this._83===-2?0:this._83}},r.disableSynchronous=function(){r.prototype.isPending=void 0,r.prototype.isFulfilled=void 0,r.prototype.isRejected=void 0,r.prototype.getValue=void 0,r.prototype.getReason=void 0,r.prototype.getState=void 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(16),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),u=r(i);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1],n=arguments[2];return new u.default(function(r,i){(0,o.writeFile)(t,e,n,function(t){t?i(t):r()})})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(18),i=r(o);e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(3),u=n(19),f=n(4),s=r(f),c=function(t){return t.isDirectory()?"directory":t.isBlockDevice()?"block device":t.isCharacterDevice()?"character device":t.isSymbolicLink()?"symbol link":t.isFIFO()?"fifo":t.isSocket()?"socket":t.isFile()?"regular file":null};e.default=function(t){return new s.default(function(e,n){var r=(0,u.parse)(t),f=r.ext,s=f.replace(".",""),a=(0,u.normalize)(t),l=a.split(u.sep);(0,i.lstat)(a,function(i,u){if(i){var f=i.code;"ENOENT"===f?e(o({},r,{exists:!1,path:t,normalized:a,normalizedArr:l,mime:s})):n(i)}else{var p=c(u)||"",d=!!p;e(o({},r,u,{path:t,normalized:a,normalizedArr:l,exists:d,fileType:p,mime:s}))}})}).then(function(e){return new s.default(function(n,r){(0,i.realpath)(t,function(t,i){if(t){var f=t.code;"ENOENT"===f?n(o({},e,{exists:!1})):r(t)}else{var s=i.split(u.sep),c=(0,u.relative)(process.cwd(),i);n(o({},e,{relative:c,absolute:i,absoluteArr:s}))}})})})}},function(t,e){t.exports=__webpack_require__(6)}])});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("fs");

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
	exports.getPostData = exports.sendData = exports.sendFile = exports.sendError = undefined;

	var _sendError = __webpack_require__(11);

	var _sendError2 = _interopRequireDefault(_sendError);

	var _sendFile = __webpack_require__(12);

	var _sendFile2 = _interopRequireDefault(_sendFile);

	var _sendData = __webpack_require__(25);

	var _sendData2 = _interopRequireDefault(_sendData);

	var _getPostData = __webpack_require__(14);

	var _getPostData2 = _interopRequireDefault(_getPostData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.sendError = _sendError2.default;
	exports.sendFile = _sendFile2.default;
	exports.sendData = _sendData2.default;
	exports.getPostData = _getPostData2.default;

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

	var _fiojs = __webpack_require__(7);

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(10);

	exports.default = function (request, response) {
	  (0, _utils.getPostData)(request).then(function (data) {
	    var path = data.path,
	        service = data.service,
	        command = data.command;

	    var params = data.params || params;
	  }, function (error) {
	    return (0, _utils.sendError)(response, 500, error.message || error);
	  });
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _url = __webpack_require__(5);

	var _path = __webpack_require__(6);

	var _promise = __webpack_require__(15);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (request) {
	  return new _promise2.default(function (resolve, reject) {
	    var data = [];
	    request.on('data', function (chunk) {
	      data.push(chunk.toString());
	    });
	    request.on('end', function () {
	      try {
	        var postData = JSON.parse(data.join(''));
	        var server = request.server || {};
	        var url = request.url;
	        var _server$root = server.root,
	            root = _server$root === undefined ? __dirname : _server$root;

	        var _parse = (0, _url.parse)(url, true),
	            pathname = _parse.pathname;

	        var path = (0, _path.join)(root, pathname);
	        resolve(_extends({}, postData, { path: path }));
	      } catch (error) {
	        reject(error);
	      }
	    });
	  });
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(16)


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(24);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(18);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('Promise constructor\'s argument is not a function');
	  }
	  this._75 = 0;
	  this._83 = 0;
	  this._18 = null;
	  this._38 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._47 = null;
	Promise._71 = null;
	Promise._44 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	}
	function handle(self, deferred) {
	  while (self._83 === 3) {
	    self = self._18;
	  }
	  if (Promise._47) {
	    Promise._47(self);
	  }
	  if (self._83 === 0) {
	    if (self._75 === 0) {
	      self._75 = 1;
	      self._38 = deferred;
	      return;
	    }
	    if (self._75 === 1) {
	      self._75 = 2;
	      self._38 = [self._38, deferred];
	      return;
	    }
	    self._38.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._83 === 1) {
	        resolve(deferred.promise, self._18);
	      } else {
	        reject(deferred.promise, self._18);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._18);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._83 = 3;
	      self._18 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._83 = 1;
	  self._18 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._83 = 2;
	  self._18 = newValue;
	  if (Promise._71) {
	    Promise._71(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._75 === 1) {
	    handle(self, self._38);
	    self._38 = null;
	  }
	  if (self._75 === 2) {
	    for (var i = 0; i < self._38.length; i++) {
	      handle(self, self._38[i]);
	    }
	    self._38 = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  });
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var domain; // The domain module is executed on demand
	var hasSetImmediate = typeof setImmediate === "function";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including network IO events in Node.js.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Avoids a function call
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory excaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	rawAsap.requestFlush = requestFlush;
	function requestFlush() {
	    // Ensure flushing is not bound to any domain.
	    // It is not sufficient to exit the domain, because domains exist on a stack.
	    // To execute code outside of any domain, the following dance is necessary.
	    var parentDomain = process.domain;
	    if (parentDomain) {
	        if (!domain) {
	            // Lazy execute the domain module.
	            // Only employed if the user elects to use domains.
	            domain = __webpack_require__(9);
	        }
	        domain.active = process.domain = null;
	    }

	    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
	    // cannot handle recursion.
	    // `requestFlush` will only be called recursively from `asap.js`, to resume
	    // flushing after an error is thrown into a domain.
	    // Conveniently, `setImmediate` was introduced in the same version
	    // `process.nextTick` started throwing recursion errors.
	    if (flushing && hasSetImmediate) {
	        setImmediate(flush);
	    } else {
	        process.nextTick(flush);
	    }

	    if (parentDomain) {
	        domain.active = process.domain = parentDomain;
	    }
	}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(17);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(17);

	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(17);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._44);
	  p._83 = 1;
	  p._18 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._83 === 3) {
	            val = val._18;
	          }
	          if (val._83 === 1) return res(i, val._18);
	          if (val._83 === 2) reject(val._18);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(17);
	var asap = __webpack_require__(23);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	};

	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');

	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}

	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	};

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var rawAsap = __webpack_require__(18);
	var freeTasks = [];

	/**
	 * Calls a task as soon as possible after returning, in its own event, with
	 * priority over IO events. An exception thrown in a task can be handled by
	 * `process.on("uncaughtException") or `domain.on("error")`, but will otherwise
	 * crash the process. If the error is handled, all subsequent tasks will
	 * resume.
	 *
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawTask.domain = process.domain;
	    rawAsap(rawTask);
	}

	function RawTask() {
	    this.task = null;
	    this.domain = null;
	}

	RawTask.prototype.call = function () {
	    if (this.domain) {
	        this.domain.enter();
	    }
	    var threw = true;
	    try {
	        this.task.call();
	        threw = false;
	        // If the task throws an exception (presumably) Node.js restores the
	        // domain stack for the next event.
	        if (this.domain) {
	            this.domain.exit();
	        }
	    } finally {
	        // We use try/finally and a threw flag to avoid messing up stack traces
	        // when we catch and release errors.
	        if (threw) {
	            // In Node.js, uncaught exceptions are considered fatal errors.
	            // Re-throw them to interrupt flushing!
	            // Ensure that flushing continues if an uncaught exception is
	            // suppressed listening process.on("uncaughtException") or
	            // domain.on("error").
	            rawAsap.requestFlush();
	        }
	        // If the task threw an error, we do not want to exit the domain here.
	        // Exiting the domain would prevent the domain from catching the error.
	        this.task = null;
	        this.domain = null;
	        freeTasks.push(this);
	    }
	};



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(17);

	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };

	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };

	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };

	  Promise.prototype.getValue = function () {
	    if (this._83 === 3) {
	      return this._18.getValue();
	    }

	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }

	    return this._18;
	  };

	  Promise.prototype.getReason = function () {
	    if (this._83 === 3) {
	      return this._18.getReason();
	    }

	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }

	    return this._18;
	  };

	  Promise.prototype.getState = function () {
	    if (this._83 === 3) {
	      return this._18.getState();
	    }
	    if (this._83 === -1 || this._83 === -2) {
	      return 0;
	    }

	    return this._83;
	  };
	};

	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _httpapijs = __webpack_require__(1);

	exports.default = function (response) {
	  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var strData = JSON.stringify(success ? { success: success, output: data } : { success: success, error: data });

	  response.statusCode = 200;
	  response.statusMessage = 'OK';
	  response.setHeader('Content-Type', (0, _httpapijs.getContentType)('json'));
	  response.setHeader('Content-Length', strData.length);
	  response.write(strData, function () {
	    return response.end();
	  });
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=server.js.map