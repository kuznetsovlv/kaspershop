(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"));
	else if(typeof define === 'function' && define.amd)
		define(["http"], factory);
	else if(typeof exports === 'object')
		exports["kasperskyShop"] = factory(require("http"));
	else
		root["kasperskyShop"] = factory(root["http"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _httpapijs = __webpack_require__(1);

	var _httpapijs2 = _interopRequireDefault(_httpapijs);

	var _onStart = __webpack_require__(3);

	var _onStart2 = _interopRequireDefault(_onStart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = new _httpapijs2.default(8084, __dirname);

	server.on('start', _onStart2.default);

	server.on('get', function (request, response) {
	  response.statusCode = 200;
	  response.statusMessage = (0, _httpapijs.getStatusText)(200);
	  response.setHeader('Content-Type', (0, _httpapijs.getContentType)('txt'));
	  response.setHeader('Content-length', 'Hello!'.length);
	  response.end('Hello!');
	});

	server.up();
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

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

	exports.default = function () {
	  console.log('Hello');

	  console.log('I\'m simple webserver');
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=server.js.map