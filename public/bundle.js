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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTodos; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nfunction renderTodos() {\n\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"ul\"].innerHTML = ''\n\n    _script__WEBPACK_IMPORTED_MODULE_1__[\"todos\"].forEach(todo => {\n\n        // Criar as novas variáveis\n        let li = document.createElement('li')\n        let a = document.createElement('a')\n        let newInput = document.createElement('input')\n        let span = document.createElement('span')\n\n        // Setar propriedades das variáveis\n        a.href = '#'\n        a.textContent = 'X'\n        newInput.type = 'checkbox'\n\n        // Adicionar Event Listeners\n        newInput.addEventListener('click', () => {\n            span.classList.toggle('checked')\n\n            Object(_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        })\n\n        a.addEventListener('click', () => {\n            let index = _script__WEBPACK_IMPORTED_MODULE_1__[\"todos\"].indexOf(span.textContent)\n            localStorage.removeItem(span.textContent)\n            _script__WEBPACK_IMPORTED_MODULE_1__[\"todos\"].splice(index, 1)\n            li.parentNode.removeChild(li)\n\n            Object(_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        })\n\n        // Adicionar os componentes á tela\n        li.appendChild(a)\n        li.appendChild(newInput)\n        span.textContent = todo\n        li.appendChild(span)\n\n        _variables__WEBPACK_IMPORTED_MODULE_0__[\"ul\"].appendChild(li)\n\n        Object(_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    })\n    \n}\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: todos, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todos\", function() { return todos; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\nlet todos = JSON.parse(localStorage.getItem('list_todos')) || [];\n\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"addBtn\"].addEventListener('click', () => {\n    \n    if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value.length <= 0) {\n        alert('Digite um to-do válido.')\n\n    } else {\n        todos.push(_variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value)\n\n        // Resetar o campo do input\n        _variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].value = ''\n        _variables__WEBPACK_IMPORTED_MODULE_0__[\"input\"].focus()\n\n        Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    }\n\n})\n\n// Limpa todos to-dos\n/* harmony default export */ __webpack_exports__[\"default\"] = (_variables__WEBPACK_IMPORTED_MODULE_0__[\"clear\"].addEventListener('click', () => {\n    todos = []\n    localStorage.clear()\n    Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}));\n\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n// localStorage.setItem(\"name\", \"domenic\")\n// localStorage.clear()\n// localStorage.removeItem(\"name\")\n// localStorage.setItem(\"age\", \"30\")\n// localStorage.setItem(\"name\", \"domenic\")\n// console.log(localStorage.key(0));\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return saveToStorage; });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\n\n// Salvar em localStorage\nfunction saveToStorage() {\n    localStorage.setItem('list_todos', JSON.stringify(_script__WEBPACK_IMPORTED_MODULE_0__[\"todos\"])) \n}\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: input, addBtn, clear, ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBtn\", function() { return addBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ul\", function() { return ul; });\nconst input = document.querySelector('.new-todo input')\nconst addBtn = document.querySelector('.new-todo .add-link')\nconst clear = document.querySelector('.all-todos .clear')\n\nlet ul = document.querySelector('.all-todos ul')\n\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/script.js */\"./src/script.js\");\n\n\n//# sourceURL=webpack:///multi_./src/script.js?");

/***/ })

/******/ });