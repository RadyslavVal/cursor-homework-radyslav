/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hw2.js":
/*!***********************!*\
  !*** ./src/js/hw2.js ***!
  \***********************/
/***/ (() => {

eval("var N;\nvar M;\nvar parityCheck;\n\nwhile (!Number.isInteger(N)) {\n  N = +prompt(\"Enter first number\");\n}\n\n;\n\nwhile (!Number.isInteger(M) || M <= N) {\n  M = +prompt(\"Enter second number(must be biger then first)\");\n}\n\n;\nparityCheck = confirm(\"Skip pair number?\");\n\nvar result = function result(N, M, parityCheck) {\n  sum = 0;\n\n  for (var i = N; i <= M; i++) {\n    if (i % 2 === 0 && parityCheck) {\n      continue;\n    } else {\n      sum += i;\n    }\n  }\n\n  return console.log(sum);\n};\n\nresult(N, M, parityCheck);\n\n//# sourceURL=webpack://17-homework/./src/js/hw2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/hw2.js"]();
/******/ 	
/******/ })()
;