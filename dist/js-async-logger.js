var JsAsyncLogger =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return _src__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack://JsAsyncLogger/./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_clientStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clientStorage */ \"./src/modules/clientStorage.js\");\n/* harmony import */ var _modules_remoteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/remoteService */ \"./src/modules/remoteService.js\");\n\n\n\nclass Logger {\n  constructor(options, storage = new _modules_clientStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), remoteService = new _modules_remoteService__WEBPACK_IMPORTED_MODULE_1__[\"default\"](options)) {\n    this.options = options;\n    this.storage = storage;\n    this.remoteService = remoteService;\n  }\n\n  prepareLogObject(content) {\n    return { ...content,\n      time: new Date()\n    };\n  }\n\n  log(content) {\n    this.storage.insert(this.prepareLogObject(content));\n  }\n\n  read() {\n    return this.storage.read();\n  }\n\n  async flush() {\n    let logs = this.storage.read();\n    const result = await this.remoteService.sendLogs();\n    return result.json();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logger);\n\n//# sourceURL=webpack://JsAsyncLogger/./src/index.js?");

/***/ }),

/***/ "./src/modules/clientStorage.js":
/*!**************************************!*\
  !*** ./src/modules/clientStorage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/modules/constants.js\");\n/* harmony import */ var _localStorageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageManager */ \"./src/modules/localStorageManager.js\");\n\n\n\nclass ClientStorage {\n  constructor(storage = new _localStorageManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].JS_ASYNC_LOGGER_STORAGE_NAME)) {\n    this.storage = storage;\n    this.loggsQueue = [];\n  }\n\n  read() {\n    return this.storage.read();\n  }\n\n  insert(data) {\n    this.storage.write(data);\n  }\n\n  update() {}\n\n  clear() {\n    this.storage.drop();\n  }\n\n  delete() {}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientStorage);\n\n//# sourceURL=webpack://JsAsyncLogger/./src/modules/clientStorage.js?");

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Constants = {\n  JS_ASYNC_LOGGER_STORAGE_NAME: \"__js_async_logger_storage__\",\n  ERROR: \"error\",\n  INFO: \"info\",\n  WARNING: \"warning\",\n  DEBUG: \"debug\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack://JsAsyncLogger/./src/modules/constants.js?");

/***/ }),

/***/ "./src/modules/localStorageManager.js":
/*!********************************************!*\
  !*** ./src/modules/localStorageManager.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass LocalStorageManager {\n  constructor(name) {\n    this.name = name;\n    this.init();\n  }\n\n  read() {\n    return JSON.parse(localStorage.getItem(this.name));\n  }\n\n  write(value) {\n    let loglist = this.read();\n    loglist.push(value);\n    localStorage.setItem(this.name, JSON.stringify(loglist));\n  }\n\n  drop() {\n    this.init();\n  }\n\n  init() {\n    localStorage.setItem(this.name, JSON.stringify([]));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalStorageManager);\n\n//# sourceURL=webpack://JsAsyncLogger/./src/modules/localStorageManager.js?");

/***/ }),

/***/ "./src/modules/remoteService.js":
/*!**************************************!*\
  !*** ./src/modules/remoteService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass RemoteService {\n  constructor(options) {\n    this.url = options.url;\n  }\n\n  async sendLogs(logData) {\n    const response = await fetch(this.url, {\n      method: \"POST\",\n      body: JSON.stringify(logData)\n    });\n    return response.json();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoteService);\n\n//# sourceURL=webpack://JsAsyncLogger/./src/modules/remoteService.js?");

/***/ })

/******/ });