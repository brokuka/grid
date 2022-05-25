/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\tconst input = document.querySelector('input[type=\"number\"]');\r\n\tconst checkboxs = document.querySelectorAll('input[type=\"checkbox\"]');\r\n\tconst row = document.querySelector('.show_grid');\r\n\tconst select = document.getElementById('select_col');\r\n\r\n\tlet inputValue = parseInt(input.value);\r\n\r\n\tinput.addEventListener('input', () => {\r\n\t\tinput.setAttribute('value', input.value);\r\n\t\tinputValue = parseInt(input.getAttribute('value'));\r\n\t\tremoveCol();\r\n\t\tcreateCol();\r\n\t});\r\n\r\n\tselect.addEventListener('change', () => {\r\n\t\tremoveCol();\r\n\t\tcreateCol();\r\n\t});\r\n\r\n\tcheckboxs.forEach(checkbox => {\r\n\t\tconst name = checkbox.getAttribute('name');\r\n\t\tconst rowGap = window.getComputedStyle(row, null).rowGap;\r\n\t\tconst columnGap = window.getComputedStyle(row, null).columnGap;\r\n\r\n\t\tcheckbox.addEventListener('change', () => {\r\n\t\t\tswitch (name) {\r\n\t\t\t\tcase \"center\":\r\n\t\t\t\t\trow.classList.toggle('jcc', checkbox.checked);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"rowgap\":\r\n\t\t\t\t\tif (!checkbox.checked) {\r\n\t\t\t\t\t\trow.style.rowGap = 0;\r\n\t\t\t\t\t} else row.style.rowGap = rowGap;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"columngap\":\r\n\t\t\t\t\tif (!checkbox.checked) {\r\n\t\t\t\t\t\trow.style.columnGap = 0;\r\n\t\t\t\t\t} else row.style.columnGap = columnGap;\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\tcreateCol();\r\n\tfunction createCol(value = input.getAttribute('value')) {\r\n\t\tconst col = document.createElement('div');\r\n\r\n\t\tcol.classList.add(`${select.value}`);\r\n\t\tcol.innerHTML = `\r\n\t\t\t<div class=\"block\"></div>\r\n\t\t`;\r\n\r\n\t\tfor (let i = 0; i < value; i++) {\r\n\t\t\trow.appendChild(col.cloneNode(true));\r\n\t\t}\r\n\r\n\t\tconst blocks = document.querySelectorAll('.block');\r\n\t\tblocks.forEach(block => {\r\n\t\t\tblock.cssText = `\r\n\t\t\t\tnth-child(n) {\r\n\t\t\t\t\tbackground-color: tomato;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tnth-child(2n) {\r\n\t\t\t\t\tbackground-color: green;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.block:nth-child(3n) {\r\n\t\t\t\t\tbackground-color: yellowgreen;\r\n\t\t\t\t}\r\n\t\t\t`;\r\n\t\t})\r\n\t}\r\n\r\n\tfunction removeCol() {\r\n\t\tconst cols = document.querySelectorAll('.row > [class*=col]');\r\n\r\n\t\tcols.forEach(col => row.removeChild(col))\r\n\t}\r\n});\n\n//# sourceURL=webpack://grid/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/index.js"]();
/******/ 	
/******/ })()
;