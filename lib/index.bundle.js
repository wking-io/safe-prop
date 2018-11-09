var safeProp =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: safeProp, safePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _safeProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeProp */ \"./src/safeProp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeProp\", function() { return _safeProp__WEBPACK_IMPORTED_MODULE_0__[\"safeProp\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safePath\", function() { return _safeProp__WEBPACK_IMPORTED_MODULE_0__[\"safePath\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWZlUHJvcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhZmVQcm9wLCBzYWZlUGF0aCB9IGZyb20gJy4vc2FmZVByb3AnXG5leHBvcnQgeyBzYWZlUHJvcCwgc2FmZVBhdGggfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/safeProp.js":
/*!*************************!*\
  !*** ./src/safeProp.js ***!
  \*************************/
/*! exports provided: safeProp, safePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeProp\", function() { return safeProp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safePath\", function() { return safePath; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var data_maybe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data.maybe */ \"data.maybe\");\n/* harmony import */ var data_maybe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(data_maybe__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar safeProp = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])(function (prop, obj) {\n  if (prop === null || obj === null) {\n    return data_maybe__WEBPACK_IMPORTED_MODULE_1___default.a.Nothing();\n  }\n});\nvar safePath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])(function (prop, obj) {\n  if (prop === null || obj === null) {\n    return data_maybe__WEBPACK_IMPORTED_MODULE_1___default.a.Nothing();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2FmZVByb3AuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWZlUHJvcC8uL3NyYy9zYWZlUHJvcC5qcz8zZjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJ5IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNYXliZSBmcm9tICdkYXRhLm1heWJlJ1xuXG5leHBvcnQgY29uc3Qgc2FmZVByb3AgPSBjdXJyeSgocHJvcCwgb2JqKSA9PiB7XG4gIGlmIChwcm9wID09PSBudWxsIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBNYXliZS5Ob3RoaW5nKClcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHNhZmVQYXRoID0gY3VycnkoKHByb3AsIG9iaikgPT4ge1xuICBpZiAocHJvcCA9PT0gbnVsbCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gTWF5YmUuTm90aGluZygpXG4gIH1cbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/safeProp.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: curry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return curry; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction curry(fn) {\n  var _this = this;\n\n  var createRecurser = function createRecurser(acc, count) {\n    return function () {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      return args.length > 0 ? recurse(_toConsumableArray(acc).concat(args), count) : recurse(_toConsumableArray(acc).concat([null]), count);\n    };\n  };\n\n  var recurse = function recurse(acc, count) {\n    return acc.length < count ? createRecurser(acc, count) : fn.apply(_this, acc);\n  };\n\n  return createRecurser([], fn.length);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWZlUHJvcC8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjdXJyeSAoZm4pIHtcbiAgY29uc3QgY3JlYXRlUmVjdXJzZXIgPVxuICAgIChhY2MsIGNvdW50KSA9PlxuICAgICAgKC4uLmFyZ3MpID0+XG4gICAgICAgIGFyZ3MubGVuZ3RoID4gMCA/IHJlY3Vyc2UoWy4uLmFjYywgLi4uYXJnc10sIGNvdW50KSA6IHJlY3Vyc2UoWy4uLmFjYywgbnVsbF0sIGNvdW50KVxuXG4gIGNvbnN0IHJlY3Vyc2UgPVxuICAgIChhY2MsIGNvdW50KSA9PlxuICAgICAgYWNjLmxlbmd0aCA8IGNvdW50ID8gY3JlYXRlUmVjdXJzZXIoYWNjLCBjb3VudCkgOiBmbi5hcHBseSh0aGlzLCBhY2MpXG5cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdLCBmbi5sZW5ndGgpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ }),

/***/ "data.maybe":
/*!*******************************************************************************************************************!*\
  !*** external {"commonjs":"data.maybe","commonjs2":"data.maybe","amd":"data.maybe","root":"folktale.data.Maybe"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tYXliZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZmVQcm9wL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkYXRhLm1heWJlXCIsXCJjb21tb25qczJcIjpcImRhdGEubWF5YmVcIixcImFtZFwiOlwiZGF0YS5tYXliZVwiLFwicm9vdFwiOlwiZm9sa3RhbGUuZGF0YS5NYXliZVwifT8wY2UyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///data.maybe\n");

/***/ })

/******/ });