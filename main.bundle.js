/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Orbitron, sans-serif;
    background-color: rgb(17, 24, 39);
    color: rgb(209, 213, 219);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

button {
    font-family: Orbitron, sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

header {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid rgb(31, 41, 45);
}

h1 {
    font-weight: 700;
    font-size: 2.5rem;
}

h2 {
    font-weight: 400;
}

main {
    flex-grow: 1;
}

.game-container {
    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;
    margin: 2rem 1rem;
}

.game-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.player-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.player-box img {
    width: 30px;
    height: 30px;
    filter: invert(92%) sepia(8%) saturate(147%) hue-rotate(177deg) brightness(91%) contrast(95%);
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
}

.player-box img:hover {
    filter: invert(40%) sepia(98%) saturate(597%) hue-rotate(171deg) brightness(96%) contrast(96%);
}

.grid {
    display: grid;
    grid-template-columns: repeat(10, min(10%, 50px));
    box-shadow: 10px 10px 10px rgba(0, 255, 255, 0.1);
}

.grid-cell {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(20, 79, 128);
    transition: background-color 0.3s ease-in-out;
    width: 50px;
    height: 50px;
}

.grid-cell:hover {
    background-color: rgba(34, 0, 255, 0.25);
}

.miss {
    position: relative;
}

.miss::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #e74c3c;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}

.hit {
    background-color: #e74d3c75;
    position: relative;
}

.hit::before,
.hit::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 4px;
    background-color: #300501;
    transform-origin: center;
}

.hit::before {
    transform: translate(-50%, -50%) rotate(45deg);
}

.hit::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.ship {
    background-color: rgba(46, 204, 113, 0.2);
}

.sunk-cell {
    position: relative;
}

.sunk-cell::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #e74c3c;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}

.ship:hover {
    background-color: rgba(46, 204, 113, 0.3);
}

.setup-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
}

.primary-btn {
    background-color: rgb(20, 79, 128);
    color: rgb(209, 213, 219);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, opacity 0.7s;
    width: 150px;
}

.primary-btn:hover {
    background-color: rgb(15, 111, 146);
}

.secondary-btn {
    background-color: rgba(31, 41, 45, 0.2);
    color: rgb(209, 213, 219);
    padding: 0.5rem 1rem;
    border: 1px solid rgb(31, 41, 45);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    width: 150px;
}

.secondary-btn:hover {
    background-color: rgba(31, 41, 45, 0.8);
}

.message-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
}

.message {
    border: 1px solid rgb(20, 79, 128);
    border-radius: 16px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
}

.message.error {
    border: 1px solid #e74c3c;
}

#change-name-dialog {
    display: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: rgba(31, 41, 45, 0.8);
    border: 1px solid rgb(20, 79, 128);
    border-radius: 10px;
    position: absolute;
    top: 10%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
}

dialog::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
}

#change-name-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

#change-name-form label {
    font-weight: 700;
    color: rgb(209, 213, 219);
}

#change-name-form input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid rgb(20, 79, 128);
    background-color: rgba(56, 84, 96, 0.8);
    color: rgb(209, 213, 219);
    font: inherit;
    width: 100%;
}

#change-name-form input:focus {
    outline: none;
}

footer {
    text-align: center;
    padding-bottom: 1rem;
}

footer a {
    color: rgb(0, 255, 255);
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: Orbitron, sans-serif;\n    background-color: rgb(17, 24, 39);\n    color: rgb(209, 213, 219);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    font-family: Orbitron, sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\nheader {\n    padding: 1rem;\n    text-align: center;\n    border-bottom: 1px solid rgb(31, 41, 45);\n}\n\nh1 {\n    font-weight: 700;\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-weight: 400;\n}\n\nmain {\n    flex-grow: 1;\n}\n\n.game-container {\n    display: flex;\n    justify-content: center;\n    gap: 10rem;\n    align-items: center;\n    margin: 2rem 1rem;\n}\n\n.game-details {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.player-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.player-box img {\n    width: 30px;\n    height: 30px;\n    filter: invert(92%) sepia(8%) saturate(147%) hue-rotate(177deg) brightness(91%) contrast(95%);\n    cursor: pointer;\n    transition: filter 0.3s ease-in-out;\n}\n\n.player-box img:hover {\n    filter: invert(40%) sepia(98%) saturate(597%) hue-rotate(171deg) brightness(96%) contrast(96%);\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, min(10%, 50px));\n    box-shadow: 10px 10px 10px rgba(0, 255, 255, 0.1);\n}\n\n.grid-cell {\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid rgb(20, 79, 128);\n    transition: background-color 0.3s ease-in-out;\n    width: 50px;\n    height: 50px;\n}\n\n.grid-cell:hover {\n    background-color: rgba(34, 0, 255, 0.25);\n}\n\n.miss {\n    position: relative;\n}\n\n.miss::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    background-color: #e74c3c;\n    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);\n}\n\n.hit {\n    background-color: #e74d3c75;\n    position: relative;\n}\n\n.hit::before,\n.hit::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 20px;\n    height: 4px;\n    background-color: #300501;\n    transform-origin: center;\n}\n\n.hit::before {\n    transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.hit::after {\n    transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.ship {\n    background-color: rgba(46, 204, 113, 0.2);\n}\n\n.sunk-cell {\n    position: relative;\n}\n\n.sunk-cell::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    background-color: #e74c3c;\n    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);\n}\n\n.ship:hover {\n    background-color: rgba(46, 204, 113, 0.3);\n}\n\n.setup-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    margin: 1rem;\n}\n\n.primary-btn {\n    background-color: rgb(20, 79, 128);\n    color: rgb(209, 213, 219);\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out, opacity 0.7s;\n    width: 150px;\n}\n\n.primary-btn:hover {\n    background-color: rgb(15, 111, 146);\n}\n\n.secondary-btn {\n    background-color: rgba(31, 41, 45, 0.2);\n    color: rgb(209, 213, 219);\n    padding: 0.5rem 1rem;\n    border: 1px solid rgb(31, 41, 45);\n    border-radius: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n    width: 150px;\n}\n\n.secondary-btn:hover {\n    background-color: rgba(31, 41, 45, 0.8);\n}\n\n.message-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    margin: 1rem;\n}\n\n.message {\n    border: 1px solid rgb(20, 79, 128);\n    border-radius: 16px;\n    padding: 0.5rem 1rem;\n    font-size: 1.5rem;\n}\n\n.message.error {\n    border: 1px solid #e74c3c;\n}\n\n#change-name-dialog {\n    display: hidden;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    align-items: center;\n    padding: 1rem;\n    background-color: rgba(31, 41, 45, 0.8);\n    border: 1px solid rgb(20, 79, 128);\n    border-radius: 10px;\n    position: absolute;\n    top: 10%;\n    left: 20%;\n    transform: translate(-50%, -50%);\n    width: 20%;\n    height: 20%;\n}\n\ndialog::backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 99;\n}\n\n#change-name-form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#change-name-form label {\n    font-weight: 700;\n    color: rgb(209, 213, 219);\n}\n\n#change-name-form input {\n    padding: 0.5rem;\n    border-radius: 5px;\n    border: 1px solid rgb(20, 79, 128);\n    background-color: rgba(56, 84, 96, 0.8);\n    color: rgb(209, 213, 219);\n    font: inherit;\n    width: 100%;\n}\n\n#change-name-form input:focus {\n    outline: none;\n}\n\nfooter {\n    text-align: center;\n    padding-bottom: 1rem;\n}\n\nfooter a {\n    color: rgb(0, 255, 255);\n    text-decoration: none;\n}\n\nfooter a:hover {\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/ai.js":
/*!***************************!*\
  !*** ./src/modules/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");

class AI {
    constructor(enemy, ui, player) {
        this.enemy = enemy;
        this.ui = ui;
        this.player = player;
        this.pendingAttacks = [];
        this.duringMove = false;
    }

    makeSmartMove() {
        let x, y;
        if (this.pendingAttacks.length > 0) {
            const [lastHitX, lastHitY] = this.pendingAttacks[0];
            const directions = [
                [lastHitX - 1, lastHitY], 
                [lastHitX + 1, lastHitY], 
                [lastHitX, lastHitY - 1], 
                [lastHitX, lastHitY + 1]  
            ];

            for (let [adjX, adjY] of directions) {
                if (this.#isValidAttack(adjX, adjY)) {
                    x = adjX;
                    y = adjY;
                    break;
                }
            }

            if (x === undefined || y === undefined) {
                this.pendingAttacks.shift(); 
                this.makeSmartMove(); 
                return;
            }
        } else {
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");
        }

        let shipName = null;
        if (this.player.gameboard.board[x][y] instanceof _battleship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            shipName = this.player.gameboard.board[x][y].name;
        }

        const hitSuccessful = this.player.gameboard.receiveAttack(x, y);
        if (hitSuccessful === "hit") {
            this.pendingAttacks.push([x, y]);
        }

        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);

        if (shipName !== null) {
            if (this.player.ships[shipName].ship.isSunk()) {
                this.ui.markSunkShip(this.player.ships[shipName].ship, true);
            }
        }

        this.ui.printMessage("Your turn.");
        this.duringMove = false;
    }

    makeRandomMove() {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");

        this.player.gameboard.receiveAttack(x, y);
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.printMessage("Your turn.");
    }

    #isValidAttack(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && this.player.gameboard.board[x][y] !== "hit" && this.player.gameboard.board[x][y] !== "miss";
    }
}


/***/ }),

/***/ "./src/modules/battleship.js":
/*!***********************************!*\
  !*** ./src/modules/battleship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Battleship)
/* harmony export */ });
class Battleship {
    constructor(length, name="unnamed", hits=0, sunk=false, direction="horizontal") {
        this.length = length;
        this.hits = hits;
        this.name = name;
        this.sunk = sunk;
        this.direction = direction;
    }

    hit() {
        this.hits++;
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }

    getLength() {
        return this.length;
    }

    getHits() {
        return this.hits;
    }

    setDirection(direction) {
        this.direction = direction;
    }
};

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");


class GameBoard {
    constructor(board=null) {
        this.board = board === null ? Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)) : board;
    }

    placeShip(ship, x, y, direction) {
        if (direction === "horizontal" && y + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        } else if (direction === "vertical" && x + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        }

        if (!this.#checkIfCellIsNotOccupied(x, y, ship.getLength(), direction)) {
            throw new Error("Cell is occupied");
        }

        if (!this.#checkIfShipIsNotAdjacent(x, y, ship.getLength(), direction)) {
            throw new Error("Ships are adjacent");
        }

        if (direction === "horizontal") {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x][y + i] = ship;
            }
        } else if (direction === "vertical") {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x + i][y] = ship;
            }
        }
    }

    checkIfShipCanBePlaced(ship, x, y, direction) {
        if (ship === null) {
            return false;
        }

        if (direction === "horizontal" && y + ship.getLength() > 10) {
            return false;
        } else if (direction === "vertical" && x + ship.getLength() > 10) {
            return false;
        }

        if (!this.#checkIfCellIsNotOccupied(x, y, ship.getLength(), direction)) {
            return false;
        }

        if (!this.#checkIfShipIsNotAdjacent(x, y, ship.getLength(), direction)) {
            return false;
        }

        return true;
    }

    removeShip(ship) {
        if (ship === null) {
            return;
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == ship.name) {
                    this.board[i][j] = null;
                }
            }
        }
    }

    getShipByName(shipName) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == shipName) {
                    return this.board[i][j];
                }
            }
        }
        return null;
    }

    deepCopyBoard(board) {
        const newBoard = Array(10).fill(null).map(() => Array(10).fill(null));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = board[i][j];
                if (cell instanceof _battleship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    newBoard[i][j] = new _battleship__WEBPACK_IMPORTED_MODULE_0__["default"](cell.getLength(), cell.name, cell.getHits(), cell.isSunk(), cell.direction);
                } else {
                    newBoard[i][j] = cell;
                }
            }
        }
        return newBoard;
    }

    #checkIfCellIsNotOccupied(x, y, length, direction) {
        if (direction === "horizontal") {
            for (let i = 0; i < length; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; 
                }
            }
        } else if (direction === "vertical") {
            for (let i = 0; i < length; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; 
                }
            }
        }
        return true; 
    }
    

    #checkIfShipIsNotAdjacent(x, y, length, direction) {
        const boardSize = 10;
    
        let checkRangeX, checkRangeY;
        if (direction === "horizontal") {
            checkRangeX = [Math.max(0, x - 1), Math.min(boardSize - 1, x + 1)];
            checkRangeY = [Math.max(0, y - 1), Math.min(boardSize - length, y + length)];
        } else if (direction === "vertical") {
            checkRangeX = [Math.max(0, x - 1), Math.min(boardSize - length, x + length)];
            checkRangeY = [Math.max(0, y - 1), Math.min(boardSize - 1, y + 1)];
        }
    
        for (let i = checkRangeX[0]; i <= checkRangeX[1]; i++) {
            for (let j = checkRangeY[0]; j <= checkRangeY[1]; j++) {
                if (i === x && j === y) {
                    continue;
                }
                if (i < 0 || i >= boardSize || j < 0 || j >= boardSize) {
                    continue;
                }
                if (this.board[i][j] !== null) {
                    return false; 
                }
            }
        }
        return true; 
    }
    

    receiveAttack(x, y) {
        if (x < 0 || x > 9 || y < 0 || y > 9 || this.board[x][y] === "miss") {
            return false;
        }
        if (this.board[x][y] === null) {
            this.board[x][y] = "miss";
            return this.board[x][y];
        } else if (this.board[x][y] !== "hit") {
            this.board[x][y].hit();
            this.board[x][y] = "hit";
            return this.board[x][y];
        }
        else {
            return false;
        }
    }

    allSunk() {
        return this.board
            .flat()
            .filter((ship) => ship !== null && ship !== "miss" && ship !== "hit")
            .every((ship) => ship.isSunk());
    }

    resetBoard() {
        this.board = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
    }
}


/***/ }),

/***/ "./src/modules/gamemanager.js":
/*!************************************!*\
  !*** ./src/modules/gamemanager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameManager)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ "./src/modules/ai.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");





class GameManager {
    constructor(playerName="Unnamed", enemyName="Enemy") {
        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerName);
        this.enemy = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](enemyName, "computer");
        this.ui = new _ui__WEBPACK_IMPORTED_MODULE_0__["default"](this.player, this.enemy);
        this.ai = new _ai__WEBPACK_IMPORTED_MODULE_1__["default"](this.enemy, this.ui, this.player);
        this.currentPlayer = null;
        this.isGameStarted = false;
    }

    initializeGame() {
        this.ui.renderGrids();
        if (this.enemy.type === "computer") {
            this.ui.createPlayerGridHandler((e) => {e.preventDefault();});
        }
        else {
            this.ui.createPlayerGridHandler(this.#playerGridHandler.bind(this));
        }
        this.ui.createEnemyGridHandler(this.#enemyGridHandler.bind(this));
    
        this.ui.initializeSetupButtons(this.#startGame.bind(this), this.#resetGame.bind(this));
        this.player.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.refreshNames(this.player.name, this.enemy.name);
        this.ui.enableShipDragging();
        this.ui.setupChangeNameDialog();
    }

    #checkWinner() {
        if (this.player.gameboard.allSunk()) {
            this.ui.printMessage("You lost! Game over.", false);
            return true;
        }
        else if (this.enemy.gameboard.allSunk()) {
            this.ui.printMessage("You won! Game over.", false);
            return true;
        }
        return false;
    }

    #enemyMakeRandomMove() {
        if (this.isGameStarted && this.currentPlayer === this.enemy) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");
            this.player.gameboard.receiveAttack(x, y);
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            this.currentPlayer = this.player;
            this.ui.printMessage("Your turn.");
        }
    }

    #playerGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.enemy) {
            const cellIndex = this.ui.playerGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            this.player.gameboard.receiveAttack(x, y);
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            if (this.#checkWinner()) {
                return;
            }
            this.currentPlayer = this.player;
            this.ui.printMessage("Your turn.");
        }
    }

    #enemyGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.player && !this.ai.duringMove) {
            const cellIndex = this.ui.enemyGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;

            let shipName = null;
            if (this.enemy.gameboard.board[x][y] instanceof _battleship__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                shipName = this.enemy.gameboard.board[x][y].name;
            }

            if(this.enemy.gameboard.receiveAttack(x, y)) {
                this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
                this.currentPlayer = this.enemy;

                if (this.enemy.gameboard.board[x][y] == "hit" && shipName !== null) {
                    if (this.enemy.ships[shipName].ship.isSunk()) {
                        this.ui.markSunkShip(this.enemy.ships[shipName].ship, false);
                    }
                }

                if (this.#checkWinner()) {
                    return;
                }
                this.ui.printMessage("Enemy's turn.");
                this.ai.duringMove = true;
                setTimeout(this.ai.makeSmartMove.bind(this.ai), 200 + Math.floor(Math.random() * 600));
                this.currentPlayer = this.player;
            }
            else {
                this.ui.printMessage("Invalid move. Try again.", true);
            }
        }
    }

    #startGame() {
        if (this.isGameStarted) {
            this.ui.printMessage("Game already started", true);
            return;
        }
        else if (!this.player.areShipsPlaced()) {
            this.ui.printMessage("Not all ships are placed.", true);
            return;
        }
        
        this.isGameStarted = true;
        this.currentPlayer = this.player;
        this.enemy.placeRandomShips();
        this.ui.disableShipDragging();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.toggleStartButton(false);
        this.ui.printMessage("Game started! Your turn.");
    }

    #resetGame() {
        if (this.isGameStarted) {
            this.ui.toggleStartButton(true);
        }

        this.isGameStarted = false;
        this.currentPlayer = null;
        this.player.gameboard.resetBoard();
        this.enemy.gameboard.resetBoard();
        this.player.resetShips();
        this.enemy.resetShips();
        this.ui.printMessage("Game was restarted. Please place your ships...");
        this.ui.refreshNames(this.player.name, this.enemy.name);
        this.player.placeRandomShips();
        this.ui.resetSunkCells();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.enableShipDragging();
    }
}

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");



class Player {
    constructor(name="Unnamed", type="human") {
        this.name = name;
        this.type = type;
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.ships = {
            carrier: {
                ship: new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](5, name="carrier"),
                placed: false

            },
            battleship: {
                ship: new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](4, name="battleship"),
                placed: false
            },
            cruiser: {
                ship: new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](3, name="cruiser"),
                placed: false
            },
            submarine: {
                ship: new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](3, name="submarine"),
                placed: false
            }, 
            destroyer: {
                ship: new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](2, name="destroyer"),
                placed: false
            }
        };
    }

    placeShip(shipName, x, y, direction) {
        if (!this.ships[shipName]) {
            throw new Error("Invalid ship name");
        }

        try {
            this.ships[shipName].ship.setDirection(direction);
            this.gameboard.placeShip(this.ships[shipName].ship, x, y, direction);
            this.ships[shipName].placed = true;
            return true;
        }
        catch (e) {
            return false;
        }

    }

    removeShip(shipName) {
        if (!this.ships[shipName]) {
            throw new Error("Invalid ship name");
        }
        const ship = this.ships[shipName].ship;
        this.gameboard.removeShip(ship);
    }

    placeRandomShips() {
        for (let ship in this.ships) {
            let placed = false;
            while (!placed) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let direction = Math.random() < 0.5 ? "horizontal" : "vertical";

                try {
                    placed = this.placeShip(ship, x, y, direction);
                } catch (e) {
                    placed = false;
                }
            }
        }
    }

    areShipsPlaced() {
        for (let ship in this.ships) {
            if (!this.ships[ship].placed) {
                return false;
            }
        }
        return true;
    }

    resetShips() {
        for (let ship in this.ships) {
            this.ships[ship].placed = false;
            this.ships[ship].ship = new _battleship__WEBPACK_IMPORTED_MODULE_1__["default"](this.ships[ship].ship.length, this.ships[ship].ship.name);
        }
    }
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


class UI {
    constructor(player, enemy) {
        this.gameContainer = document.querySelector(".game-container");
        this.playerGrid = document.querySelector("#player-grid");
        this.enemyGrid = document.querySelector("#enemy-grid");
        this.playerGridCells = [];
        this.enemyGridCells = [];
        this.player = player;
        this.enemy = enemy;
        this.tempGameBoard = null;
    }

    createGrid(grid, cells) {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.dataset.index = i;
            cell.setAttribute("draggable", false);
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    createPlayerGridHandler(callback) {
        this.playerGrid.addEventListener("click", callback);
    }

    createEnemyGridHandler(callback) {
        this.enemyGrid.addEventListener("click", callback);
    }

    renderGrids() {
        this.createGrid(this.playerGrid, this.playerGridCells);
        this.createGrid(this.enemyGrid, this.enemyGridCells);
    }

    getPlayerGridCell(x, y) {
        return this.playerGridCells[x * 10 + y];
    }

    getEnemyGridCell(x, y) {
        return this.enemyGridCells[x * 10 + y];
    }

    resetSunkCells() {
        const sunkCells = this.playerGrid.querySelectorAll(".sunk-cell");
        sunkCells.forEach((cell) => cell.classList.remove("sunk-cell"));

        const enemySunkCells = this.enemyGrid.querySelectorAll(".sunk-cell");
        enemySunkCells.forEach((cell) => cell.classList.remove("sunk-cell"));
    }

    refreshGrids(
        playerGameBoard,
        enemyGameBoard = null,
        hideEnemyShips = true
    ) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const playerCell = this.getPlayerGridCell(i, j);
                playerCell.classList.remove("ship", "hit", "miss");
                if (playerGameBoard.board[i][j] === "hit") {
                    playerCell.classList.add("hit");
                } else if (playerGameBoard.board[i][j] === "miss") {
                    playerCell.classList.add("miss");
                } else if (playerGameBoard.board[i][j] !== null) {
                    playerCell.classList.add("ship");
                    playerCell.dataset.length =
                        playerGameBoard.board[i][j].length;
                    playerCell.dataset.direction =
                        playerGameBoard.board[i][j].direction;
                    playerCell.dataset.name = playerGameBoard.board[i][j].name;
                }

                if (enemyGameBoard != null) {
                    const enemyCell = this.getEnemyGridCell(i, j);
                    enemyCell.classList.remove("ship", "hit", "miss");
                    if (enemyGameBoard.board[i][j] === "hit") {
                        enemyCell.classList.add("hit");
                    } else if (enemyGameBoard.board[i][j] === "miss") {
                        enemyCell.classList.add("miss");
                    } else if (enemyGameBoard.board[i][j] !== null) {
                        enemyCell.dataset.length =
                            enemyGameBoard.board[i][j].length;
                        enemyCell.dataset.direction =
                            enemyGameBoard.board[i][j].direction;
                        enemyCell.dataset.name =
                            enemyGameBoard.board[i][j].name;

                        if (hideEnemyShips === false) {
                            enemyCell.classList.add("ship");
                        }
                    }
                }
            }
        }
    }

    initializeSetupButtons(startCallback, resetCallback) {
        const startButton = document.getElementById("start-button");
        const resetButton = document.getElementById("reset-button");

        startButton.addEventListener("click", startCallback);
        resetButton.addEventListener("click", resetCallback);
    }

    toggleStartButton(isVisible) {
        const startButton = document.getElementById("start-button");
        startButton.style.display = isVisible ? "block" : "none";
        startButton.style.opacity = isVisible ? 1 : 0;
    }

    printMessage(message, error) {
        const messageElement = document.querySelector(".message");
        messageElement.textContent = message;

        if (error) {
            messageElement.classList.add("error");
        } else {
            messageElement.classList.remove("error");
        }
    }

    refreshNames(playerName, enemyName) {
        const playerTitle = document.querySelector("#player-title");
        const enemyTitle = document.querySelector("#enemy-title");

        playerTitle.textContent = playerName;
        enemyTitle.textContent = enemyName;
    }

    eventDisabler(event) {
        event.preventDefault();
    }

    disableShipDragging() {
        this.playerGridCells.forEach((cell) => {
            cell.setAttribute("draggable", false);
            cell.removeEventListener(
                "dragstart",
                this.handleDragStart.bind(this)
            );
            cell.removeEventListener("dragend", this.handleDragEnd.bind(this));
            cell.removeEventListener(
                "dragover",
                this.handleDragOver.bind(this)
            );
            cell.removeEventListener("drop", this.handleDrop.bind(this));

            cell.addEventListener("dragstart", this.eventDisabler);
            cell.addEventListener("dragend", this.eventDisabler);
            cell.addEventListener("dragover", this.eventDisabler);
            cell.addEventListener("drop", this.eventDisabler);
        });
    }

    enableShipDragging() {
        const ships = this.playerGrid.querySelectorAll(".ship");
        ships.forEach((ship) => this.makeDraggable(ship));

        this.playerGridCells.forEach((cell) => {
            cell.removeEventListener("dragstart", this.eventDisabler);
            cell.removeEventListener("dragend", this.eventDisabler);
            cell.removeEventListener("dragover", this.eventDisabler);
            cell.removeEventListener("drop", this.eventDisabler);
            cell.removeEventListener(
                "dragover",
                this.handleDragOver.bind(this)
            );
            cell.removeEventListener("drop", this.handleDrop.bind(this));

            cell.addEventListener("dragover", this.handleDragOver.bind(this));
            cell.addEventListener("drop", this.handleDrop.bind(this));
        });
    }

    enableSingleShipDragging(shipName) {
        const ships = this.playerGrid.querySelectorAll(
            `.ship[data-name="${shipName}"]`
        );
        ships.forEach((ship) => this.makeDraggable(ship));
    }

    makeDraggable(ship) {
        ship.setAttribute("draggable", true);
        ship.removeEventListener("dragstart", this.eventDisabler);
        ship.removeEventListener("dragend", this.eventDisabler);
        ship.removeEventListener("dragstart", this.handleDragStart.bind(this));
        ship.removeEventListener("dragend", this.handleDragEnd.bind(this));
        ship.addEventListener("dragstart", this.handleDragStart.bind(this));
        ship.addEventListener("dragend", this.handleDragEnd.bind(this));
    }

    handleDragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.index);
        this.tempGameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.player.gameboard.deepCopyBoard(this.player.gameboard.board)
        );
        setTimeout(() => {
            event.target.classList.add("hide");
        }, 0);
    }

    handleDragEnd(event) {
        event.target.classList.remove("hide");
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        const shipId = event.dataTransfer.getData("text/plain");
        const ship = this.playerGrid.querySelector(
            `.ship[data-index="${shipId}"]`
        );
        const cellIndex = event.target.dataset.index;
        const x = Math.floor(cellIndex / 10);
        const y = cellIndex % 10;

        if (!ship || x * 10 + y == shipId) {
            return;
        }

        const shipDirection = ship.dataset.direction;
        const shipToBePlaced = this.tempGameBoard.getShipByName(
            ship.dataset.name
        );

        this.tempGameBoard.removeShip(shipToBePlaced);

        if (
            this.tempGameBoard.checkIfShipCanBePlaced(
                shipToBePlaced,
                x,
                y,
                shipDirection
            )
        ) {
            try {
                this.player.removeShip(ship.dataset.name);

                if (
                    this.player.placeShip(
                        ship.dataset.name,
                        x,
                        y,
                        shipDirection
                    )
                ) {
                    this.refreshGrids(this.player.gameboard);
                    this.printMessage("Ship placed correctly", false);
                    this.enableSingleShipDragging(ship.dataset.name);
                } else {
                    this.printMessage(
                        "Invalid placement. Please try again.",
                        true
                    );
                }
            } catch (error) {
                this.printMessage(error.message, true);
            }
        } else {
            this.printMessage("Invalid placement. Please try again", true);
        }
    }

    #cellInBounds(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10;
    }

    markSunkShip(ship, isPlayer = true) {
        const cells = isPlayer
            ? this.playerGrid.querySelectorAll(`.hit[data-name="${ship.name}"]`)
            : this.enemyGrid.querySelectorAll(`.hit[data-name="${ship.name}"]`);

        cells.forEach((cell) => {
            const index = parseInt(cell.dataset.index, 10);
            const x = Math.floor(index / 10);
            const y = index % 10;
            const adjacentCells = this.#getAdjacentCells(x, y);
            adjacentCells.forEach(([adjX, adjY]) => {
                const adjCell = isPlayer
                    ? this.getPlayerGridCell(adjX, adjY)
                    : this.getEnemyGridCell(adjX, adjY);
                if (
                    adjCell &&
                    !adjCell.classList.contains("hit") &&
                    !adjCell.classList.contains("ship")
                ) {
                    adjCell.classList.add("sunk-cell");
                    if (isPlayer && this.#cellInBounds(adjX, adjY)) {
                        this.player.gameboard.board[adjX][adjY] = "miss";
                    } else if (!isPlayer && this.#cellInBounds(adjX, adjY)) {
                        this.enemy.gameboard.board[adjX][adjY] = "miss";
                    }
                }
            });
        });
    }

    #getAdjacentCells(x, y) {
        const adjacentCells = [];
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (i >= 0 && i < 10 && j >= 0 && j < 10) {
                    if (i !== x || j !== y) {
                        adjacentCells.push([i, j]);
                    }
                }
            }
        }
        return adjacentCells;
    }

    setupChangeNameDialog() {
        const btn = document.getElementById("change-name-btn");
        const dialog = document.getElementById("change-name-dialog");
        const closeBtn = dialog.querySelector(".close");
        const form = dialog.querySelector("form");
        const input = dialog.querySelector("input");
        dialog.addEventListener("click", function (event) {
            var rect = dialog.getBoundingClientRect();
            var isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
            if (!isInDialog) {
                dialog.style.display = "none";
                dialog.close();
            }
        });

        btn.addEventListener("click", () => {
            dialog.style.display = "flex";
            dialog.showModal();
        });

        closeBtn.addEventListener("click", () => {
            dialog.style.display = "none";
            dialog.close();
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = input.value;
            if (name) {
                this.player.name = name;
                this.refreshNames(this.player.name, this.enemy.name);
                dialog.style.display = "none";
            }
        });

        // document.querySelector("main").addEventListener("click", (e) => {
        //     dialog.style.display = "none";
        //     dialog.close();
        // });
    }
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_gamemanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gamemanager */ "./src/modules/gamemanager.js");



const gameManager = new _modules_gamemanager__WEBPACK_IMPORTED_MODULE_1__["default"]();
gameManager.initializeGame();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxvREFBb0QsMkJBQTJCLEdBQUcsVUFBVSxnQkFBZ0Isd0NBQXdDLHdDQUF3QyxnQ0FBZ0Msd0JBQXdCLG9CQUFvQiw2QkFBNkIsR0FBRyxZQUFZLHdDQUF3QyxHQUFHLCtCQUErQixnQkFBZ0IsR0FBRyxZQUFZLG9CQUFvQix5QkFBeUIsK0NBQStDLEdBQUcsUUFBUSx1QkFBdUIsd0JBQXdCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsOEJBQThCLGlCQUFpQiwwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLG9HQUFvRyxzQkFBc0IsMENBQTBDLEdBQUcsMkJBQTJCLHFHQUFxRyxHQUFHLFdBQVcsb0JBQW9CLHdEQUF3RCx3REFBd0QsR0FBRyxnQkFBZ0IsMkNBQTJDLHlDQUF5QyxvREFBb0Qsa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQiwrQ0FBK0MsR0FBRyxXQUFXLHlCQUF5QixHQUFHLGtCQUFrQixrQkFBa0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxrQkFBa0IsbUJBQW1CLGdDQUFnQyxtREFBbUQsR0FBRyxVQUFVLGtDQUFrQyx5QkFBeUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHlCQUF5QixlQUFlLGdCQUFnQixrQkFBa0Isa0JBQWtCLGdDQUFnQywrQkFBK0IsR0FBRyxrQkFBa0IscURBQXFELEdBQUcsaUJBQWlCLHNEQUFzRCxHQUFHLFdBQVcsZ0RBQWdELEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLHVCQUF1QixrQkFBa0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxrQkFBa0IsbUJBQW1CLGdDQUFnQyxtREFBbUQsR0FBRyxpQkFBaUIsZ0RBQWdELEdBQUcsb0JBQW9CLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLG1CQUFtQixHQUFHLGtCQUFrQix5Q0FBeUMsZ0NBQWdDLDJCQUEyQixtQkFBbUIsMEJBQTBCLHNCQUFzQixrRUFBa0UsbUJBQW1CLEdBQUcsd0JBQXdCLDBDQUEwQyxHQUFHLG9CQUFvQiw4Q0FBOEMsZ0NBQWdDLDJCQUEyQix3Q0FBd0MsMEJBQTBCLHNCQUFzQixvREFBb0QsbUJBQW1CLEdBQUcsMEJBQTBCLDhDQUE4QyxHQUFHLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsbUJBQW1CLEdBQUcsY0FBYyx5Q0FBeUMsMEJBQTBCLDJCQUEyQix3QkFBd0IsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcseUJBQXlCLHNCQUFzQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLG9CQUFvQiw4Q0FBOEMseUNBQXlDLDBCQUEwQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLGlCQUFpQixrQkFBa0IsR0FBRyxzQkFBc0Isc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiwyQ0FBMkMsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixnQkFBZ0IsR0FBRyw2QkFBNkIsdUJBQXVCLGdDQUFnQyxHQUFHLDZCQUE2QixzQkFBc0IseUJBQXlCLHlDQUF5Qyw4Q0FBOEMsZ0NBQWdDLG9CQUFvQixrQkFBa0IsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsMkJBQTJCLEdBQUcsY0FBYyw4QkFBOEIsNEJBQTRCLEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLHFCQUFxQjtBQUMxalA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNuUzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNic0M7QUFDdkI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLHlEQUF5RCxtREFBVTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9Cc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBLG9DQUFvQyxtREFBVTtBQUM5Qyx5Q0FBeUMsbURBQVU7QUFDbkQsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQseUNBQXlDLHFCQUFxQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLc0I7QUFDQTtBQUNRO0FBQ1E7O0FBRXZCO0FBQ2Y7QUFDQSwwQkFBMEIsK0NBQU07QUFDaEMseUJBQXlCLCtDQUFNO0FBQy9CLHNCQUFzQiwyQ0FBRTtBQUN4QixzQkFBc0IsMkNBQUU7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxvQkFBb0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxtREFBVTtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEpvQztBQUNFOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrREFBUztBQUN0QztBQUNBO0FBQ0EsMEJBQTBCLG1EQUFVO0FBQ3BDOztBQUVBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQixtREFBVTtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQixtREFBVTtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQixtREFBVTtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQixtREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1EQUFVO0FBQ2xEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUZvQzs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFLFVBQVU7QUFDNUUsaUVBQWlFLFVBQVU7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEMsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7OztVQzFXQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMyQjs7QUFFaEQsd0JBQXdCLDREQUFXO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmF2YWwtYmxpdHovLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmF2YWwtYmxpdHovLi9zcmMvbW9kdWxlcy9haS5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL3NyYy9tb2R1bGVzL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vbmF2YWwtYmxpdHovLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbmF2YWwtYmxpdHovLi9zcmMvbW9kdWxlcy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL25hdmFsLWJsaXR6L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hdmFsLWJsaXR6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25hdmFsLWJsaXR6L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uYXZhbC1ibGl0ei93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25hdmFsLWJsaXR6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmF2YWwtYmxpdHovd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25hdmFsLWJsaXR6Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IE9yYml0cm9uLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMjQsIDM5KTtcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogT3JiaXRyb24sIHNhbnMtc2VyaWY7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDMxLCA0MSwgNDUpO1xufVxuXG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbm1haW4ge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTByZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcbn1cblxuLmdhbWUtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucGxheWVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ucGxheWVyLWJveCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDglKSBzYXR1cmF0ZSgxNDclKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDk1JSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucGxheWVyLWJveCBpbWc6aG92ZXIge1xuICAgIGZpbHRlcjogaW52ZXJ0KDQwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg1OTclKSBodWUtcm90YXRlKDE3MWRlZykgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDk2JSk7XG59XG5cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW4oMTAlLCA1MHB4KSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmdyaWQtY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMCwgNzksIDEyOCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmdyaWQtY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMCwgMjU1LCAwLjI1KTtcbn1cblxuLm1pc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1pc3M6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgNTAlIDEwMCUpO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0ZDNjNzU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGl0OjpiZWZvcmUsXG4uaGl0OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAwNTAxO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLmhpdDo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGl0OjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4yKTtcbn1cblxuLnN1bmstY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3Vuay1jZWxsOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDUwJSAxMDAlKTtcbn1cblxuLnNoaXA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjMpO1xufVxuXG4uc2V0dXAtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4ucHJpbWFyeS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNzksIDEyOCk7XG4gICAgY29sb3I6IHJnYigyMDksIDIxMywgMjE5KTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuN3M7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucHJpbWFyeS1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTExLCAxNDYpO1xufVxuXG4uc2Vjb25kYXJ5LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDQ1LCAwLjIpO1xuICAgIGNvbG9yOiByZ2IoMjA5LCAyMTMsIDIxOSk7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMxLCA0MSwgNDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWNvbmRhcnktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNDUsIDAuOCk7XG59XG5cbi5tZXNzYWdlLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5tZXNzYWdlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAsIDc5LCAxMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tZXNzYWdlLmVycm9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTc0YzNjO1xufVxuXG4jY2hhbmdlLW5hbWUtZGlhbG9nIHtcbiAgICBkaXNwbGF5OiBoaWRkZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDQ1LCAwLjgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMCwgNzksIDEyOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4jY2hhbmdlLW5hbWUtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4jY2hhbmdlLW5hbWUtZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xufVxuXG4jY2hhbmdlLW5hbWUtZm9ybSBpbnB1dCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAsIDc5LCAxMjgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDg0LCA5NiwgMC44KTtcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNjaGFuZ2UtbmFtZS1mb3JtIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuZm9vdGVyIGEge1xuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAyNTUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZm9vdGVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FB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UUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBPcmJpdHJvbiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAyNCwgMzkpO1xcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IE9yYml0cm9uLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMzEsIDQxLCA0NSk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnJlbSAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheWVyLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucGxheWVyLWJveCBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDglKSBzYXR1cmF0ZSgxNDclKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wbGF5ZXItYm94IGltZzpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDQwJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg1OTclKSBodWUtcm90YXRlKDE3MWRlZykgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDk2JSk7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbigxMCUsIDUwcHgpKTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLmdyaWQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwLCA3OSwgMTI4KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZ3JpZC1jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMCwgMjU1LCAwLjI1KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5taXNzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDUwJSAxMDAlKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRkM2M3NTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUsXFxuLmhpdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDA1MDE7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4yKTtcXG59XFxuXFxuLnN1bmstY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1bmstY2VsbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCA1MCUgMTAwJSk7XFxufVxcblxcbi5zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMjA0LCAxMTMsIDAuMyk7XFxufVxcblxcbi5zZXR1cC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ucHJpbWFyeS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDc5LCAxMjgpO1xcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjdzO1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5wcmltYXJ5LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTExLCAxNDYpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDQxLCA0NSwgMC4yKTtcXG4gICAgY29sb3I6IHJnYigyMDksIDIxMywgMjE5KTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzMSwgNDEsIDQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNlY29uZGFyeS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNDUsIDAuOCk7XFxufVxcblxcbi5tZXNzYWdlLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAsIDc5LCAxMjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZXNzYWdlLmVycm9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3NGMzYztcXG59XFxuXFxuI2NoYW5nZS1uYW1lLWRpYWxvZyB7XFxuICAgIGRpc3BsYXk6IGhpZGRlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDQ1LCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAsIDc5LCAxMjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4jY2hhbmdlLW5hbWUtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNjaGFuZ2UtbmFtZS1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHJnYigyMDksIDIxMywgMjE5KTtcXG59XFxuXFxuI2NoYW5nZS1uYW1lLWZvcm0gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwLCA3OSwgMTI4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgODQsIDk2LCAwLjgpO1xcbiAgICBjb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NoYW5nZS1uYW1lLWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkge1xuICAgIGNvbnN0cnVjdG9yKGVuZW15LCB1aSwgcGxheWVyKSB7XG4gICAgICAgIHRoaXMuZW5lbXkgPSBlbmVteTtcbiAgICAgICAgdGhpcy51aSA9IHVpO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5wZW5kaW5nQXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmR1cmluZ01vdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtYWtlU21hcnRNb3ZlKCkge1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgW2xhc3RIaXRYLCBsYXN0SGl0WV0gPSB0aGlzLnBlbmRpbmdBdHRhY2tzWzBdO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBbbGFzdEhpdFggLSAxLCBsYXN0SGl0WV0sIFxuICAgICAgICAgICAgICAgIFtsYXN0SGl0WCArIDEsIGxhc3RIaXRZXSwgXG4gICAgICAgICAgICAgICAgW2xhc3RIaXRYLCBsYXN0SGl0WSAtIDFdLCBcbiAgICAgICAgICAgICAgICBbbGFzdEhpdFgsIGxhc3RIaXRZICsgMV0gIFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgW2FkalgsIGFkalldIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEF0dGFjayhhZGpYLCBhZGpZKSkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYWRqWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGFkalk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBdHRhY2tzLnNoaWZ0KCk7IFxuICAgICAgICAgICAgICAgIHRoaXMubWFrZVNtYXJ0TW92ZSgpOyBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSBcImhpdFwiIHx8IHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gXCJtaXNzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBOYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIEJhdHRsZXNoaXApIHtcbiAgICAgICAgICAgIHNoaXBOYW1lID0gdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaXRTdWNjZXNzZnVsID0gdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGlmIChoaXRTdWNjZXNzZnVsID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudWkucmVmcmVzaEdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xuXG4gICAgICAgIGlmIChzaGlwTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnNoaXBzW3NoaXBOYW1lXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aS5tYXJrU3Vua1NoaXAodGhpcy5wbGF5ZXIuc2hpcHNbc2hpcE5hbWVdLnNoaXAsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51aS5wcmludE1lc3NhZ2UoXCJZb3VyIHR1cm4uXCIpO1xuICAgICAgICB0aGlzLmR1cmluZ01vdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtYWtlUmFuZG9tTW92ZSgpIHtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9IHdoaWxlICh0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IFwiaGl0XCIgfHwgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSBcIm1pc3NcIik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMudWkucmVmcmVzaEdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xuICAgICAgICB0aGlzLnVpLnByaW50TWVzc2FnZShcIllvdXIgdHVybi5cIik7XG4gICAgfVxuXG4gICAgI2lzVmFsaWRBdHRhY2soeCwgeSkge1xuICAgICAgICByZXR1cm4geCA+PSAwICYmIHggPCAxMCAmJiB5ID49IDAgJiYgeSA8IDEwICYmIHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSAhPT0gXCJoaXRcIiAmJiB0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gIT09IFwibWlzc1wiO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdHRsZXNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZT1cInVubmFtZWRcIiwgaGl0cz0wLCBzdW5rPWZhbHNlLCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3VuayA9IHN1bms7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cblxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldEhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHM7XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG59OyIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuL2JhdHRsZXNoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZD1udWxsKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZCA9PT0gbnVsbCA/IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKSA6IGJvYXJkO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBpcyBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgaXMgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy4jY2hlY2tJZkNlbGxJc05vdE9jY3VwaWVkKHgsIHksIHNoaXAuZ2V0TGVuZ3RoKCksIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNlbGwgaXMgb2NjdXBpZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuI2NoZWNrSWZTaGlwSXNOb3RBZGphY2VudCh4LCB5LCBzaGlwLmdldExlbmd0aCgpLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwcyBhcmUgYWRqYWNlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJZlNoaXBDYW5CZVBsYWNlZChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmIHkgKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiAmJiB4ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuI2NoZWNrSWZDZWxsSXNOb3RPY2N1cGllZCh4LCB5LCBzaGlwLmdldExlbmd0aCgpLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuI2NoZWNrSWZTaGlwSXNOb3RBZGphY2VudCh4LCB5LCBzaGlwLmdldExlbmd0aCgpLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmVTaGlwKHNoaXApIHtcbiAgICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9PSBudWxsICYmIHRoaXMuYm9hcmRbaV1bal0ubmFtZSA9PSBzaGlwLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2hpcEJ5TmFtZShzaGlwTmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9PSBudWxsICYmIHRoaXMuYm9hcmRbaV1bal0ubmFtZSA9PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVlcENvcHlCb2FyZChib2FyZCkge1xuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgQmF0dGxlc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtpXVtqXSA9IG5ldyBCYXR0bGVzaGlwKGNlbGwuZ2V0TGVuZ3RoKCksIGNlbGwubmFtZSwgY2VsbC5nZXRIaXRzKCksIGNlbGwuaXNTdW5rKCksIGNlbGwuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtpXVtqXSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICAjY2hlY2tJZkNlbGxJc05vdE9jY3VwaWVkKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeCArIGldW3ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICB9XG4gICAgXG5cbiAgICAjY2hlY2tJZlNoaXBJc05vdEFkamFjZW50KHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuICAgIFxuICAgICAgICBsZXQgY2hlY2tSYW5nZVgsIGNoZWNrUmFuZ2VZO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgY2hlY2tSYW5nZVggPSBbTWF0aC5tYXgoMCwgeCAtIDEpLCBNYXRoLm1pbihib2FyZFNpemUgLSAxLCB4ICsgMSldO1xuICAgICAgICAgICAgY2hlY2tSYW5nZVkgPSBbTWF0aC5tYXgoMCwgeSAtIDEpLCBNYXRoLm1pbihib2FyZFNpemUgLSBsZW5ndGgsIHkgKyBsZW5ndGgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgY2hlY2tSYW5nZVggPSBbTWF0aC5tYXgoMCwgeCAtIDEpLCBNYXRoLm1pbihib2FyZFNpemUgLSBsZW5ndGgsIHggKyBsZW5ndGgpXTtcbiAgICAgICAgICAgIGNoZWNrUmFuZ2VZID0gW01hdGgubWF4KDAsIHkgLSAxKSwgTWF0aC5taW4oYm9hcmRTaXplIC0gMSwgeSArIDEpXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gY2hlY2tSYW5nZVhbMF07IGkgPD0gY2hlY2tSYW5nZVhbMV07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGNoZWNrUmFuZ2VZWzBdOyBqIDw9IGNoZWNrUmFuZ2VZWzFdOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0geCAmJiBqID09PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA8IDAgfHwgaSA+PSBib2FyZFNpemUgfHwgaiA8IDAgfHwgaiA+PSBib2FyZFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICB9XG4gICAgXG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5IHx8IHRoaXMuYm9hcmRbeF1beV0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeF1beV0gIT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJoaXRcIjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRcbiAgICAgICAgICAgIC5mbGF0KClcbiAgICAgICAgICAgIC5maWx0ZXIoKHNoaXApID0+IHNoaXAgIT09IG51bGwgJiYgc2hpcCAhPT0gXCJtaXNzXCIgJiYgc2hpcCAhPT0gXCJoaXRcIilcbiAgICAgICAgICAgIC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuXG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAgICAgLmZpbGwobnVsbClcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBVSSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IEFJIGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZT1cIlVubmFtZWRcIiwgZW5lbXlOYW1lPVwiRW5lbXlcIikge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIHRoaXMuZW5lbXkgPSBuZXcgUGxheWVyKGVuZW15TmFtZSwgXCJjb21wdXRlclwiKTtcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzLnBsYXllciwgdGhpcy5lbmVteSk7XG4gICAgICAgIHRoaXMuYWkgPSBuZXcgQUkodGhpcy5lbmVteSwgdGhpcy51aSwgdGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgdGhpcy51aS5yZW5kZXJHcmlkcygpO1xuICAgICAgICBpZiAodGhpcy5lbmVteS50eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMudWkuY3JlYXRlUGxheWVyR3JpZEhhbmRsZXIoKGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpLmNyZWF0ZVBsYXllckdyaWRIYW5kbGVyKHRoaXMuI3BsYXllckdyaWRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuY3JlYXRlRW5lbXlHcmlkSGFuZGxlcih0aGlzLiNlbmVteUdyaWRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIFxuICAgICAgICB0aGlzLnVpLmluaXRpYWxpemVTZXR1cEJ1dHRvbnModGhpcy4jc3RhcnRHYW1lLmJpbmQodGhpcyksIHRoaXMuI3Jlc2V0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgICB0aGlzLnVpLnJlZnJlc2hHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcbiAgICAgICAgdGhpcy51aS5yZWZyZXNoTmFtZXModGhpcy5wbGF5ZXIubmFtZSwgdGhpcy5lbmVteS5uYW1lKTtcbiAgICAgICAgdGhpcy51aS5lbmFibGVTaGlwRHJhZ2dpbmcoKTtcbiAgICAgICAgdGhpcy51aS5zZXR1cENoYW5nZU5hbWVEaWFsb2coKTtcbiAgICB9XG5cbiAgICAjY2hlY2tXaW5uZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICB0aGlzLnVpLnByaW50TWVzc2FnZShcIllvdSBsb3N0ISBHYW1lIG92ZXIuXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZW5lbXkuZ2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgdGhpcy51aS5wcmludE1lc3NhZ2UoXCJZb3Ugd29uISBHYW1lIG92ZXIuXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAjZW5lbXlNYWtlUmFuZG9tTW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lU3RhcnRlZCAmJiB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMuZW5lbXkpIHtcbiAgICAgICAgICAgIGxldCB4LCB5O1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gXCJoaXRcIiB8fCB0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09IFwibWlzc1wiKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy51aS5yZWZyZXNoR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICAgICAgICAgIHRoaXMudWkucHJpbnRNZXNzYWdlKFwiWW91ciB0dXJuLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNwbGF5ZXJHcmlkSGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2FtZVN0YXJ0ZWQgJiYgdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLmVuZW15KSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsSW5kZXggPSB0aGlzLnVpLnBsYXllckdyaWRDZWxscy5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGNlbGxJbmRleCAvIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjZWxsSW5kZXggJSAxMDtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgdGhpcy51aS5yZWZyZXNoR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XG4gICAgICAgICAgICBpZiAodGhpcy4jY2hlY2tXaW5uZXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICAgICAgdGhpcy51aS5wcmludE1lc3NhZ2UoXCJZb3VyIHR1cm4uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2VuZW15R3JpZEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVTdGFydGVkICYmIHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIgJiYgIXRoaXMuYWkuZHVyaW5nTW92ZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbEluZGV4ID0gdGhpcy51aS5lbmVteUdyaWRDZWxscy5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGNlbGxJbmRleCAvIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjZWxsSW5kZXggJSAxMDtcblxuICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15LmdhbWVib2FyZC5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIEJhdHRsZXNoaXApIHtcbiAgICAgICAgICAgICAgICBzaGlwTmFtZSA9IHRoaXMuZW5lbXkuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnJlZnJlc2hHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmVuZW15O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXkuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09IFwiaGl0XCIgJiYgc2hpcE5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXkuc2hpcHNbc2hpcE5hbWVdLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkubWFya1N1bmtTaGlwKHRoaXMuZW5lbXkuc2hpcHNbc2hpcE5hbWVdLnNoaXAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNjaGVja1dpbm5lcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51aS5wcmludE1lc3NhZ2UoXCJFbmVteSdzIHR1cm4uXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWkuZHVyaW5nTW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmFpLm1ha2VTbWFydE1vdmUuYmluZCh0aGlzLmFpKSwgMjAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjAwKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnByaW50TWVzc2FnZShcIkludmFsaWQgbW92ZS4gVHJ5IGFnYWluLlwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzdGFydEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudWkucHJpbnRNZXNzYWdlKFwiR2FtZSBhbHJlYWR5IHN0YXJ0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucGxheWVyLmFyZVNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudWkucHJpbnRNZXNzYWdlKFwiTm90IGFsbCBzaGlwcyBhcmUgcGxhY2VkLlwiLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0dhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgICAgIHRoaXMuZW5lbXkucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgICB0aGlzLnVpLmRpc2FibGVTaGlwRHJhZ2dpbmcoKTtcbiAgICAgICAgdGhpcy51aS5yZWZyZXNoR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XG4gICAgICAgIHRoaXMudWkudG9nZ2xlU3RhcnRCdXR0b24oZmFsc2UpO1xuICAgICAgICB0aGlzLnVpLnByaW50TWVzc2FnZShcIkdhbWUgc3RhcnRlZCEgWW91ciB0dXJuLlwiKTtcbiAgICB9XG5cbiAgICAjcmVzZXRHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVpLnRvZ2dsZVN0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0dhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMuZW5lbXkuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXRTaGlwcygpO1xuICAgICAgICB0aGlzLmVuZW15LnJlc2V0U2hpcHMoKTtcbiAgICAgICAgdGhpcy51aS5wcmludE1lc3NhZ2UoXCJHYW1lIHdhcyByZXN0YXJ0ZWQuIFBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzLi4uXCIpO1xuICAgICAgICB0aGlzLnVpLnJlZnJlc2hOYW1lcyh0aGlzLnBsYXllci5uYW1lLCB0aGlzLmVuZW15Lm5hbWUpO1xuICAgICAgICB0aGlzLnBsYXllci5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gICAgICAgIHRoaXMudWkucmVzZXRTdW5rQ2VsbHMoKTtcbiAgICAgICAgdGhpcy51aS5yZWZyZXNoR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XG4gICAgICAgIHRoaXMudWkuZW5hYmxlU2hpcERyYWdnaW5nKCk7XG4gICAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgQmF0dGxlU2hpcCBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZT1cIlVubmFtZWRcIiwgdHlwZT1cImh1bWFuXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB7XG4gICAgICAgICAgICBjYXJyaWVyOiB7XG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZVNoaXAoNSwgbmFtZT1cImNhcnJpZXJcIiksXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGxlc2hpcDoge1xuICAgICAgICAgICAgICAgIHNoaXA6IG5ldyBCYXR0bGVTaGlwKDQsIG5hbWU9XCJiYXR0bGVzaGlwXCIpLFxuICAgICAgICAgICAgICAgIHBsYWNlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcnVpc2VyOiB7XG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZVNoaXAoMywgbmFtZT1cImNydWlzZXJcIiksXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1hcmluZToge1xuICAgICAgICAgICAgICAgIHNoaXA6IG5ldyBCYXR0bGVTaGlwKDMsIG5hbWU9XCJzdWJtYXJpbmVcIiksXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgICAgICAgICBzaGlwOiBuZXcgQmF0dGxlU2hpcCgyLCBuYW1lPVwiZGVzdHJveWVyXCIpLFxuICAgICAgICAgICAgICAgIHBsYWNlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcE5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgbmFtZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NoaXBOYW1lXS5zaGlwLnNldERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHRoaXMuc2hpcHNbc2hpcE5hbWVdLnNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NoaXBOYW1lXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlU2hpcChzaGlwTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcE5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV0uc2hpcDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQucmVtb3ZlU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBwbGFjZVJhbmRvbVNoaXBzKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcmVTaGlwc1BsYWNlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0U2hpcHMoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc2hpcF0uc2hpcCA9IG5ldyBCYXR0bGVTaGlwKHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5sZW5ndGgsIHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBlbmVteSkge1xuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1ncmlkXCIpO1xuICAgICAgICB0aGlzLmVuZW15R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5lbXktZ3JpZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkQ2VsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbmVteUdyaWRDZWxscyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5lbmVteSA9IGVuZW15O1xuICAgICAgICB0aGlzLnRlbXBHYW1lQm9hcmQgPSBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZUdyaWQoZ3JpZCwgY2VsbHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNlbGxcIik7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXJHcmlkSGFuZGxlcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteUdyaWRIYW5kbGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW5lbXlHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmVuZGVyR3JpZHMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCh0aGlzLnBsYXllckdyaWQsIHRoaXMucGxheWVyR3JpZENlbGxzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKHRoaXMuZW5lbXlHcmlkLCB0aGlzLmVuZW15R3JpZENlbGxzKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJHcmlkQ2VsbCh4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllckdyaWRDZWxsc1t4ICogMTAgKyB5XTtcbiAgICB9XG5cbiAgICBnZXRFbmVteUdyaWRDZWxsKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlHcmlkQ2VsbHNbeCAqIDEwICsgeV07XG4gICAgfVxuXG4gICAgcmVzZXRTdW5rQ2VsbHMoKSB7XG4gICAgICAgIGNvbnN0IHN1bmtDZWxscyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1bmstY2VsbFwiKTtcbiAgICAgICAgc3Vua0NlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInN1bmstY2VsbFwiKSk7XG5cbiAgICAgICAgY29uc3QgZW5lbXlTdW5rQ2VsbHMgPSB0aGlzLmVuZW15R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1bmstY2VsbFwiKTtcbiAgICAgICAgZW5lbXlTdW5rQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic3Vuay1jZWxsXCIpKTtcbiAgICB9XG5cbiAgICByZWZyZXNoR3JpZHMoXG4gICAgICAgIHBsYXllckdhbWVCb2FyZCxcbiAgICAgICAgZW5lbXlHYW1lQm9hcmQgPSBudWxsLFxuICAgICAgICBoaWRlRW5lbXlTaGlwcyA9IHRydWVcbiAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJDZWxsID0gdGhpcy5nZXRQbGF5ZXJHcmlkQ2VsbChpLCBqKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIsIFwiaGl0XCIsIFwibWlzc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQubGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNlbGwuZGF0YXNldC5kaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0Lm5hbWUgPSBwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbaV1bal0ubmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW5lbXlHYW1lQm9hcmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmVteUNlbGwgPSB0aGlzLmdldEVuZW15R3JpZENlbGwoaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiLCBcImhpdFwiLCBcIm1pc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteUdhbWVCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5lbXlHYW1lQm9hcmQuYm9hcmRbaV1bal0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5lbXlHYW1lQm9hcmQuYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5kYXRhc2V0Lmxlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlHYW1lQm9hcmQuYm9hcmRbaV1bal0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlDZWxsLmRhdGFzZXQuZGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteUdhbWVCb2FyZC5ib2FyZFtpXVtqXS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuZGF0YXNldC5uYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteUdhbWVCb2FyZC5ib2FyZFtpXVtqXS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZUVuZW15U2hpcHMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZVNldHVwQnV0dG9ucyhzdGFydENhbGxiYWNrLCByZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG5cbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0Q2FsbGJhY2spO1xuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhcnRCdXR0b24oaXNWaXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICAgICAgc3RhcnRCdXR0b24uc3R5bGUub3BhY2l0eSA9IGlzVmlzaWJsZSA/IDEgOiAwO1xuICAgIH1cblxuICAgIHByaW50TWVzc2FnZShtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZVwiKTtcbiAgICAgICAgbWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaE5hbWVzKHBsYXllck5hbWUsIGVuZW15TmFtZSkge1xuICAgICAgICBjb25zdCBwbGF5ZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBlbmVteVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmVteS10aXRsZVwiKTtcblxuICAgICAgICBwbGF5ZXJUaXRsZS50ZXh0Q29udGVudCA9IHBsYXllck5hbWU7XG4gICAgICAgIGVuZW15VGl0bGUudGV4dENvbnRlbnQgPSBlbmVteU5hbWU7XG4gICAgfVxuXG4gICAgZXZlbnREaXNhYmxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGRpc2FibGVTaGlwRHJhZ2dpbmcoKSB7XG4gICAgICAgIHRoaXMucGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImRyYWdzdGFydFwiLFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImRyYWdvdmVyXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5ldmVudERpc2FibGVyKTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy5ldmVudERpc2FibGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlU2hpcERyYWdnaW5nKCkge1xuICAgICAgICBjb25zdCBzaGlwcyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHRoaXMubWFrZURyYWdnYWJsZShzaGlwKSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiZHJhZ292ZXJcIixcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVTaW5nbGVTaGlwRHJhZ2dpbmcoc2hpcE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIGAuc2hpcFtkYXRhLW5hbWU9XCIke3NoaXBOYW1lfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gdGhpcy5tYWtlRHJhZ2dhYmxlKHNoaXApKTtcbiAgICB9XG5cbiAgICBtYWtlRHJhZ2dhYmxlKHNoaXApIHtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xuICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHRoaXMudGVtcEdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoXG4gICAgICAgICAgICB0aGlzLnBsYXllci5nYW1lYm9hcmQuZGVlcENvcHlCb2FyZCh0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmQpXG4gICAgICAgICk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnRW5kKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnT3ZlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZURyb3AoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2hpcElkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnNoaXBbZGF0YS1pbmRleD1cIiR7c2hpcElkfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2VsbEluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGNlbGxJbmRleCAvIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IGNlbGxJbmRleCAlIDEwO1xuXG4gICAgICAgIGlmICghc2hpcCB8fCB4ICogMTAgKyB5ID09IHNoaXBJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXAuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IHNoaXBUb0JlUGxhY2VkID0gdGhpcy50ZW1wR2FtZUJvYXJkLmdldFNoaXBCeU5hbWUoXG4gICAgICAgICAgICBzaGlwLmRhdGFzZXQubmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudGVtcEdhbWVCb2FyZC5yZW1vdmVTaGlwKHNoaXBUb0JlUGxhY2VkKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnRlbXBHYW1lQm9hcmQuY2hlY2tJZlNoaXBDYW5CZVBsYWNlZChcbiAgICAgICAgICAgICAgICBzaGlwVG9CZVBsYWNlZCxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgc2hpcERpcmVjdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlU2hpcChzaGlwLmRhdGFzZXQubmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuZGF0YXNldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmludE1lc3NhZ2UoXCJTaGlwIHBsYWNlZCBjb3JyZWN0bHlcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVNpbmdsZVNoaXBEcmFnZ2luZyhzaGlwLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmludE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkludmFsaWQgcGxhY2VtZW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludE1lc3NhZ2UoZXJyb3IubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByaW50TWVzc2FnZShcIkludmFsaWQgcGxhY2VtZW50LiBQbGVhc2UgdHJ5IGFnYWluXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NlbGxJbkJvdW5kcyh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8IDEwICYmIHkgPj0gMCAmJiB5IDwgMTA7XG4gICAgfVxuXG4gICAgbWFya1N1bmtTaGlwKHNoaXAsIGlzUGxheWVyID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjZWxscyA9IGlzUGxheWVyXG4gICAgICAgICAgICA/IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKGAuaGl0W2RhdGEtbmFtZT1cIiR7c2hpcC5uYW1lfVwiXWApXG4gICAgICAgICAgICA6IHRoaXMuZW5lbXlHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoYC5oaXRbZGF0YS1uYW1lPVwiJHtzaGlwLm5hbWV9XCJdYCk7XG5cbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjZWxsLmRhdGFzZXQuaW5kZXgsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGluZGV4IC8gMTApO1xuICAgICAgICAgICAgY29uc3QgeSA9IGluZGV4ICUgMTA7XG4gICAgICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gdGhpcy4jZ2V0QWRqYWNlbnRDZWxscyh4LCB5KTtcbiAgICAgICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoW2FkalgsIGFkalldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRqQ2VsbCA9IGlzUGxheWVyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRQbGF5ZXJHcmlkQ2VsbChhZGpYLCBhZGpZKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0RW5lbXlHcmlkQ2VsbChhZGpYLCBhZGpZKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGFkakNlbGwgJiZcbiAgICAgICAgICAgICAgICAgICAgIWFkakNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICFhZGpDZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRqQ2VsbC5jbGFzc0xpc3QuYWRkKFwic3Vuay1jZWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQbGF5ZXIgJiYgdGhpcy4jY2VsbEluQm91bmRzKGFkalgsIGFkalkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbYWRqWF1bYWRqWV0gPSBcIm1pc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNQbGF5ZXIgJiYgdGhpcy4jY2VsbEluQm91bmRzKGFkalgsIGFkalkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15LmdhbWVib2FyZC5ib2FyZFthZGpYXVthZGpZXSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICNnZXRBZGphY2VudENlbGxzKHgsIHkpIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0geCAtIDE7IGkgPD0geCArIDE7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHkgLSAxOyBqIDw9IHkgKyAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSAwICYmIGkgPCAxMCAmJiBqID49IDAgJiYgaiA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSB4IHx8IGogIT09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGphY2VudENlbGxzO1xuICAgIH1cblxuICAgIHNldHVwQ2hhbmdlTmFtZURpYWxvZygpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtbmFtZS1idG5cIik7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLW5hbWUtZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xuICAgICAgICBjb25zdCBmb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGRpYWxvZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBpc0luRGlhbG9nID1cbiAgICAgICAgICAgICAgICByZWN0LnRvcCA8PSBldmVudC5jbGllbnRZICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA8PSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgcmVjdC5sZWZ0IDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDw9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBpZiAoIWlzSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hOYW1lcyh0aGlzLnBsYXllci5uYW1lLCB0aGlzLmVuZW15Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL21vZHVsZXMvZ2FtZW1hbmFnZXJcIjtcblxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbmdhbWVNYW5hZ2VyLmluaXRpYWxpemVHYW1lKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==