/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a hahaha\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tdW5pdHktYXBpLy4vc3JjL2FwaS9hLmpzP2MxOTgiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlO0FBQzVCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQLGVBQVc7QUFESixHQUFYO0FBR0gsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCkge1xuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGEgaGFoYWhhXCJcbiAgICB9XG59Il0sImZpbGUiOiIuL3NyYy9hcGkvYS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b hahah\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tdW5pdHktYXBpLy4vc3JjL2FwaS9iLmpzP2RlZmQiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlO0FBQzVCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQLGVBQVc7QUFESixHQUFYO0FBR0gsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCkge1xuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGIgaGFoYWhcIlxuICAgIH1cbn0iXSwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n// const koa = require('koa')\n// const path = require('path')\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\n\nconst router = __webpack_require__(/*! ./routers/routers */ \"./src/routers/routers.js\");\n\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, './public')));\napp.use(router());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUksR0FBRyxHQUFHLElBQUlKLDRDQUFKLEVBQVo7O0FBQ0EsTUFBTUssTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG1EQUFELENBQXRCOztBQUVBRixHQUFHLENBQUNHLEdBQUosQ0FBUUwsaURBQU0sRUFBZDtBQUNBRSxHQUFHLENBQUNHLEdBQUosQ0FBUUosaURBQU8sQ0FBQ0YsZ0RBQUEsQ0FBVVEsU0FBVixFQUFxQixVQUFyQixDQUFELENBQWY7QUFDQUwsR0FBRyxDQUFDRyxHQUFKLENBQVFGLE1BQU0sRUFBZDtBQUVBRCxHQUFHLENBQUNNLE1BQUosQ0FBVyxJQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbXVuaXR5LWFwaS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGtvYSA9IHJlcXVpcmUoJ2tvYScpXG4vLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbmltcG9ydCBrb2EgZnJvbSAna29hJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCdcbmltcG9ydCBzdGF0aWNzIGZyb20gJ2tvYS1zdGF0aWMnXG5cbmNvbnN0IGFwcCA9IG5ldyBrb2EoKVxuY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXJzL3JvdXRlcnMnKVxuXG5hcHAudXNlKGhlbG1ldCgpKVxuYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3B1YmxpYycpKSlcbmFwcC51c2Uocm91dGVyKCkpXG5cbmFwcC5saXN0ZW4oMzAwMCkiXSwibmFtZXMiOlsia29hIiwicGF0aCIsImhlbG1ldCIsInN0YXRpY3MiLCJhcHAiLCJyb3V0ZXIiLCJyZXF1aXJlIiwidXNlIiwiam9pbiIsIl9fZGlybmFtZSIsImxpc3RlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routers/aRouter.js":
/*!********************************!*\
  !*** ./src/routers/aRouter.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const koaRouter = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new koaRouter();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9hUm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF6Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlILFNBQUosRUFBZjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbXVuaXR5LWFwaS8uL3NyYy9yb3V0ZXJzL2FSb3V0ZXIuanM/NDdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrb2FSb3V0ZXIgPSByZXF1aXJlKCdrb2Etcm91dGVyJylcbmNvbnN0IGEgPSByZXF1aXJlKCcuLi9hcGkvYScpXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBrb2FSb3V0ZXIoKVxucm91dGVyLmdldCgnL2EnLCBhKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJuYW1lcyI6WyJrb2FSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/aRouter.js\n");

/***/ }),

/***/ "./src/routers/bRouter.js":
/*!********************************!*\
  !*** ./src/routers/bRouter.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const koaRouter = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new koaRouter();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9iUm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF6Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlILFNBQUosRUFBZjtBQUNBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbXVuaXR5LWFwaS8uL3NyYy9yb3V0ZXJzL2JSb3V0ZXIuanM/ZWMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrb2FSb3V0ZXIgPSByZXF1aXJlKCdrb2Etcm91dGVyJylcbmNvbnN0IGIgPSByZXF1aXJlKCcuLi9hcGkvYicpXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBrb2FSb3V0ZXIoKVxucm91dGVyLmdldCgnL2InLCBiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJuYW1lcyI6WyJrb2FSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/bRouter.js\n");

/***/ }),

/***/ "./src/routers/routers.js":
/*!********************************!*\
  !*** ./src/routers/routers.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const combineRouters = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst arouters = __webpack_require__(/*! ./aRouter */ \"./src/routers/aRouter.js\");\n\nconst brouters = __webpack_require__(/*! ./bRouter */ \"./src/routers/bRouter.js\");\n\nmodule.exports = combineRouters(arouters, brouters);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9yb3V0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUE5Qjs7QUFFQSxNQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsMkNBQUQsQ0FBeEI7O0FBQ0EsTUFBTUUsUUFBUSxHQUFHRixtQkFBTyxDQUFDLDJDQUFELENBQXhCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGNBQWMsQ0FDM0JFLFFBRDJCLEVBRTNCQyxRQUYyQixDQUEvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW11bml0eS1hcGkvLi9zcmMvcm91dGVycy9yb3V0ZXJzLmpzPzYzZTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tYmluZVJvdXRlcnMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcblxuY29uc3QgYXJvdXRlcnMgPSByZXF1aXJlKCcuL2FSb3V0ZXInKVxuY29uc3QgYnJvdXRlcnMgPSByZXF1aXJlKCcuL2JSb3V0ZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXJzKFxuICAgIGFyb3V0ZXJzLFxuICAgIGJyb3V0ZXJzXG4pIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXJzIiwicmVxdWlyZSIsImFyb3V0ZXJzIiwiYnJvdXRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routers/routers.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;