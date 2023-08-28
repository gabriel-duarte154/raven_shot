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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background/landscape.png */ "./src/background/landscape.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./sprites/pointer.png */ "./src/sprites/pointer.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bungee&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  user-select: none;
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

#canvas1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), auto;
}

#colisionCanvas {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 1rem;

  background-color: #222222e2;
}

.modal {
  position: relative;
  border: 1px solid white;
  height: 300px;
  max-width: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;

  background-color: #1b487431;
  box-shadow: 1px 1px 5px #2c6ba3cc;
}

.title {
  position: relative;
  font-family: 'Bungee', cursive;
  font-size: 3rem;
  color: white;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.692);
}

.title-special {
  font-size: 4rem;
}

.title-special::after {
  position: absolute;
  content: 'Shot';
  font-size: 2.5rem;
  color: rgb(71, 122, 205);

  transform: translate(-70%, 50%) rotate(-10deg);
}

.transtale {
  position: absolute;
  transform: translate(6rem, 2rem) rotate(-20deg);
}

.button {
  font-size: 1.2rem;
  border: 1px solid white;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: bold;

  transition: transform 0.8s ease-out, box-shadow 0.5s ease-in-out;
  box-shadow: 1px 1px 1px #1d7ccfcc;
}

.button:hover {
  transform: scale(1.05) translate(-5px, -5px);
  box-shadow: 3px 3px 3px #2c6ba3cc;
}

.button:active {
  transform: scale(1);
  box-shadow: inset 2px 2px 5px #00000090;
}

.hidden {
  display: none;
}

.score {
  margin: -20px 0 30px 0;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

@media (max-height: 400px) {
  .button {
    margin-top: 1rem;
  }

  .score {
    padding: 0.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB;wEACsE;EACtE,iBAAiB;AACnB;;AAEA;EACE,yDAA+C;EAC/C,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qDAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,aAAa;;EAEb,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;;EAEnB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;EAEZ,6CAA6C;AAC/C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;;EAExB,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;EACrB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;;EAEjB,gEAAgE;EAChE,iCAAiC;AACnC;;AAEA;EACE,4CAA4C;EAC5C,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  background-image: url(background/landscape.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n#canvas1 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: url('./sprites/pointer.png'), auto;\r\n}\r\n\r\n#colisionCanvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.container {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n  padding: 1rem;\r\n\r\n  background-color: #222222e2;\r\n}\r\n\r\n.modal {\r\n  position: relative;\r\n  border: 1px solid white;\r\n  height: 300px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border-radius: 2rem;\r\n\r\n  background-color: #1b487431;\r\n  box-shadow: 1px 1px 5px #2c6ba3cc;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: 'Bungee', cursive;\r\n  font-size: 3rem;\r\n  color: white;\r\n\r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.title-special {\r\n  font-size: 4rem;\r\n}\r\n\r\n.title-special::after {\r\n  position: absolute;\r\n  content: 'Shot';\r\n  font-size: 2.5rem;\r\n  color: rgb(71, 122, 205);\r\n\r\n  transform: translate(-70%, 50%) rotate(-10deg);\r\n}\r\n\r\n.transtale {\r\n  position: absolute;\r\n  transform: translate(6rem, 2rem) rotate(-20deg);\r\n}\r\n\r\n.button {\r\n  font-size: 1.2rem;\r\n  border: 1px solid white;\r\n  padding: 0.5rem 2rem;\r\n  border-radius: 0.5rem;\r\n  background-color: transparent;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n\r\n  transition: transform 0.8s ease-out, box-shadow 0.5s ease-in-out;\r\n  box-shadow: 1px 1px 1px #1d7ccfcc;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) translate(-5px, -5px);\r\n  box-shadow: 3px 3px 3px #2c6ba3cc;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(1);\r\n  box-shadow: inset 2px 2px 5px #00000090;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.score {\r\n  margin: -20px 0 30px 0;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-height: 400px) {\r\n  .button {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .score {\r\n    padding: 0.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/class/explosion.js":
/*!********************************!*\
  !*** ./src/class/explosion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sprites_sprites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/sprites.js */ "./src/sprites/sprites.js");
/* harmony import */ var _sounds_sounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/sounds.js */ "./src/sounds/sounds.js");



class Explosion {
  constructor(x, y, size, hasParticle, ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = _sprites_sprites_js__WEBPACK_IMPORTED_MODULE_0__["default"].explosion;
    this.spriteWidth = 200;
    this.spriteheight = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.maxFrame = 5;
    this.sound = new Audio();
    this.sound.src = hasParticle === true ? _sounds_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].explosion : _sounds_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].steam;;
    this.timeSinceLastFrame = 0;
    this.frameInterval = 150;
    this.markedForDeletion = false;
  }

  update(deltaTime) {
    this.timeSinceLastFrame += deltaTime;

    if (this.frame === 0) this.sound.play();

    if (this.timeSinceLastFrame > this.frameInterval) {
      this.timeSinceLastFrame = 0;
      this.frame++;
    }

    if (this.frame > this.maxFrame) {
      this.markedForDeletion = true;
    }
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteheight,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explosion);


/***/ }),

/***/ "./src/class/particle.js":
/*!*******************************!*\
  !*** ./src/class/particle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Particle {
  constructor(x, y, size, color, ctx) {
    this.size = size;
    this.x = x + this.size / 2 + Math.random() * 30 - 20;
    this.y = y + this.size / 3 + Math.random() * 30 - 20;
    this.color = color;
    this.radius = Math.random() * this.size * 0.1;
    this.maxRadius = Math.random() * 20 + 35;
    this.markedForDeletion = false;
    this.speedX = Math.random() * 1 + 0.5;
    this.ctx = ctx;
  }

  update() {
    this.x += this.speedX;
    this.radius += 0.3;
    if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = 1 - this.radius / this.maxRadius;
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);


/***/ }),

/***/ "./src/class/raven.js":
/*!****************************!*\
  !*** ./src/class/raven.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sprites_sprites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprites/sprites.js */ "./src/sprites/sprites.js");
/* harmony import */ var _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub/pubsub.js */ "./src/pubsub/pubsub.js");



class Raven {
  constructor(ctx, canvas, colisionCtx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.colisionCtx = colisionCtx;
    this.spriteWidth = 271;
    this.spriteheight = 194;
    this.sizeModifier = canvas.height > 400 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.2;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteheight * this.sizeModifier;
    this.x = this.canvas.width;
    this.y = Math.random() * (this.canvas.height - this.height);
    this.directionX = Math.random() * 3 + 3;
    this.directionY = Math.random() * 2 - 1.5;
    this.markedForDeletion = false;
    this.image = new Image();
    this.image.src = _sprites_sprites_js__WEBPACK_IMPORTED_MODULE_0__["default"].raven;
    this.flapSpeed = Math.random() * 8 + 5;
    this.frame = 0;
    this.maxFrame = 6;
    this.timeSinceflap = 0;
    this.flapInterval = Math.random() * 50 + 50;
    this.randomColors = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color = `rgb(${this.randomColors[0]}, ${this.randomColors[1]}, ${this.randomColors[2]}, 30)`;
    this.hasParticle = Math.random() * 10 > 7;
  }

  update(deltaTime) {
    this.x -= this.directionX;
    this.y += this.directionY;

    if (this.y < 0 || this.y > this.canvas.height - this.width) {
      this.directionY = this.directionY * -1;
    }

    this.timeSinceflap += deltaTime;

    if (this.timeSinceflap > this.flapInterval) {
      this.timeSinceflap = 0;
      this.frame++;

      if (this.hasParticle) {
        for (let i = 0; i < 7; i++) {
          _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('new Particle', {
            x: this.x,
            y: this.y,
            width: this.width,
            color: this.color,
          });
        }
      }
    }

    if (this.frame >= this.maxFrame) this.frame = 0;

    if (this.x < -this.width) {
      this.markedForDeletion = true;
      _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('gameover');
    }
  }

  draw() {
    this.colisionCtx.fillStyle = this.color;
    this.colisionCtx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteheight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Raven);


/***/ }),

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameStartModal = document.createElement('div');
gameStartModal.innerHTML = ` 
      <div class="modal">
          <h1 class="title-special title">Raven</h1>
        <button class="button" id="start-game-btn">Start Game</button>
      </div>
`;

const gameOverModal = document.createElement('div');

gameOverModal.innerHTML = `
      <div class="modal">
        <h1 class="title">Game Over</h1>
        <span class="score"></span>
        <button class="button" id="reset-game">Main Menu</button>
      </div>
`;

const components = {
  gameStartModal: gameStartModal,
  gameOverModal: gameOverModal,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (components);


/***/ }),

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components */ "./src/components/components.js");
/* harmony import */ var _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub/pubsub */ "./src/pubsub/pubsub.js");



const ready = (fn) => {
  if (typeof fn !== 'function') return;

  if (document.readyState === 'complete') {
    return fn();
  }

  document.addEventListener('interactive', fn, false);
};

const Dom = (() => {
  const mainContainer = document.querySelector('.container');
  const initialScreen = _components_components__WEBPACK_IMPORTED_MODULE_0__["default"].gameStartModal.querySelector('.modal');
  const gameOverScreen = _components_components__WEBPACK_IMPORTED_MODULE_0__["default"].gameOverModal.querySelector('.modal');
  const startButton = initialScreen.querySelector('#start-game-btn');
  const resetButton = gameOverScreen.querySelector('#reset-game');
  const scoreElement = gameOverScreen.querySelector('.score');

  function addInitialScreenEvents() {
    startButton.addEventListener('click', startGame);
  }

  function addGameoverScreenEvents() {
    resetButton.addEventListener('click', resetScreen);
  }

  function removeInitialScreenEvents() {
    startButton.removeEventListener('click', startGame);
  }

  function removeGameoverScreenEvents() {
    resetButton.removeEventListener('click', resetScreen);
  }

  function startGame() {
    removeInitialScreenEvents();
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('stopMenuMusic');
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('menuSound');
    setTimeout(() => {
      close();
      _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('play');
      _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('startGame');
    }, 700);
  }

  function resetScreen() {
    removeGameoverScreenEvents();
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('stopGameOverMusic');
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('menuSound');
    setTimeout(() => {
      close();
      openInitialScreen();
    }, 700);
  }

  function close() {
    mainContainer.classList.add('hidden');
  }

  function open() {
    mainContainer.classList.remove('hidden');
  }

  function openGameOverScreen(score) {
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('stop');
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('gameoverMusic');

    setTimeout(() => {
      mainContainer.innerHTML = '';
      scoreElement.textContent = 'Score: ' + score;
      mainContainer.appendChild(gameOverScreen);
      addGameoverScreenEvents();
      open();
    }, 1000);
  }

  function openInitialScreen() {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(initialScreen);
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('playMenuMusic');
    addInitialScreenEvents();
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('resetGame');
    open();
  }

  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on('openGameOverScreen', openGameOverScreen);

  window.addEventListener('load', () => {
    openInitialScreen();
  });

  ready(openInitialScreen);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);


/***/ }),

/***/ "./src/pubsub/pubsub.js":
/*!******************************!*\
  !*** ./src/pubsub/pubsub.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (element in this.events[eventName]) {
        if (this.events[eventName][element] === fn) {
          this.events[eventName].splice(element, 1);
          break;
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(data));
    } else {
      console.log(`${eventName} doesn't exist`);
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);


/***/ }),

/***/ "./src/sounds/musicController.js":
/*!***************************************!*\
  !*** ./src/sounds/musicController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub/pubsub */ "./src/pubsub/pubsub.js");
/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds.js */ "./src/sounds/sounds.js");



const musicController = (() => {
  const backgroudMusic1 = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].music1);
  const backgroudMusic2 = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].music2);
  const backgroudMusic3 = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].music3);
  const backgroudMusic4 = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].music4);
  const menuSound = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].menuSelection);
  const menuMusic = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].menuMusic);
  const gameoverMusic = new Audio(_sounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].gameoverMusic);
  const musics = [
    backgroudMusic1,
    backgroudMusic2,
    backgroudMusic3,
    backgroudMusic4,
  ];
  const amountMusics = musics.length;
  let currentMusic = Math.floor(Math.random() * amountMusics);
  let musicVolume = 0.4;
  let isMute = false;

  musics.forEach((music) => {
    music.volume = musicVolume;
  });

  function play() {
    if (currentMusic >= amountMusics) currentMusic = 0;
    musics[currentMusic].play();
    musics[currentMusic].addEventListener('ended', playNextMusic);
  }

  function playNextMusic() {
    currentMusic++;
    play();
  }

  function mute() {
    isMute === true ? (isMute = false) : (isMute = true);
    musics.forEach((music) => {
      isMute === true ? (music.volume = 0) : (music.volume = musicVolume);
    });
  }

  function stop() {
    currentMusic = Math.floor(Math.random() * amountMusics);
    musics.forEach((music) => {
      music.pause();
      music.currentTime = 0;
      music.removeEventListener('ended', playNextMusic);
    });
  }

  function playMenuMusic() {
    menuMusic.currentTime = 0;

    menuMusic.play();

    menuMusic.addEventListener('ended', playMenuMusic);
  }

  function stopMenuMusic() {
    menuMusic.pause();
    menuMusic.removeEventListener('ended', playMenuMusic);
  }

  function playMenuSound() {
    menuSound.currentTime = 0;
    menuSound.play();
  }

  function playGameOverMusic() {
    gameoverMusic.currentTime = 0;
    gameoverMusic.play();
  }

  function stopGameoverMusic() {
    gameoverMusic.pause();
  }

  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('mute', mute);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('play', play);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('stop', stop);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('menuSound', playMenuSound);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('playMenuMusic', playMenuMusic);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('stopMenuMusic', stopMenuMusic);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('gameoverMusic', playGameOverMusic);
  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('stopGameOverMusic', stopGameoverMusic);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (musicController);


/***/ }),

/***/ "./src/sounds/sounds.js":
/*!******************************!*\
  !*** ./src/sounds/sounds.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _background_1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-1.mp3 */ "./src/sounds/background-1.mp3");
/* harmony import */ var _background_2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-2.mp3 */ "./src/sounds/background-2.mp3");
/* harmony import */ var _background_3_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-3.ogg */ "./src/sounds/background-3.ogg");
/* harmony import */ var _background_4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-4.mp3 */ "./src/sounds/background-4.mp3");
/* harmony import */ var _explosion_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explosion.wav */ "./src/sounds/explosion.wav");
/* harmony import */ var _steam_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steam.wav */ "./src/sounds/steam.wav");
/* harmony import */ var _menu_selection_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu_selection.wav */ "./src/sounds/menu_selection.wav");
/* harmony import */ var _menu_music_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-music.mp3 */ "./src/sounds/menu-music.mp3");
/* harmony import */ var _gameover_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameover.wav */ "./src/sounds/gameover.wav");










const sounds = {
  music1: _background_1_mp3__WEBPACK_IMPORTED_MODULE_0__,
  music2: _background_2_mp3__WEBPACK_IMPORTED_MODULE_1__,
  music3: _background_3_ogg__WEBPACK_IMPORTED_MODULE_2__,
  music4: _background_4_mp3__WEBPACK_IMPORTED_MODULE_3__,
  explosion: _explosion_wav__WEBPACK_IMPORTED_MODULE_4__,
  steam: _steam_wav__WEBPACK_IMPORTED_MODULE_5__,
  menuSelection: _menu_selection_wav__WEBPACK_IMPORTED_MODULE_6__,
  menuMusic: _menu_music_mp3__WEBPACK_IMPORTED_MODULE_7__,
  gameoverMusic: _gameover_wav__WEBPACK_IMPORTED_MODULE_8__,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sounds);


/***/ }),

/***/ "./src/sprites/sprites.js":
/*!********************************!*\
  !*** ./src/sprites/sprites.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boom_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boom.png */ "./src/sprites/boom.png");
/* harmony import */ var _raven_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raven.png */ "./src/sprites/raven.png");



const assets = {
  explosion: _boom_png__WEBPACK_IMPORTED_MODULE_0__,
  raven: _raven_png__WEBPACK_IMPORTED_MODULE_1__,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assets);


/***/ }),

/***/ "./src/background/landscape.png":
/*!**************************************!*\
  !*** ./src/background/landscape.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15c8e90a1876fbcf4c26.png";

/***/ }),

/***/ "./src/sounds/background-1.mp3":
/*!*************************************!*\
  !*** ./src/sounds/background-1.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c2991abd91266e1e494.mp3";

/***/ }),

/***/ "./src/sounds/background-2.mp3":
/*!*************************************!*\
  !*** ./src/sounds/background-2.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5568c663aee885758d3.mp3";

/***/ }),

/***/ "./src/sounds/background-3.ogg":
/*!*************************************!*\
  !*** ./src/sounds/background-3.ogg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e731021d4efaeb1b08.ogg";

/***/ }),

/***/ "./src/sounds/background-4.mp3":
/*!*************************************!*\
  !*** ./src/sounds/background-4.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc554c386e87b0211e01.mp3";

/***/ }),

/***/ "./src/sounds/explosion.wav":
/*!**********************************!*\
  !*** ./src/sounds/explosion.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70897d0f9d4431376382.wav";

/***/ }),

/***/ "./src/sounds/gameover.wav":
/*!*********************************!*\
  !*** ./src/sounds/gameover.wav ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf2aa9b325ed6c8baf3.wav";

/***/ }),

/***/ "./src/sounds/menu-music.mp3":
/*!***********************************!*\
  !*** ./src/sounds/menu-music.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec2af6efc4cee6ec811b.mp3";

/***/ }),

/***/ "./src/sounds/menu_selection.wav":
/*!***************************************!*\
  !*** ./src/sounds/menu_selection.wav ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71a0ddb595ca3ece4967.wav";

/***/ }),

/***/ "./src/sounds/steam.wav":
/*!******************************!*\
  !*** ./src/sounds/steam.wav ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e6ed7fd6c0ba137c3fe.wav";

/***/ }),

/***/ "./src/sprites/boom.png":
/*!******************************!*\
  !*** ./src/sprites/boom.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72d8bd4738abb1357449.png";

/***/ }),

/***/ "./src/sprites/pointer.png":
/*!*********************************!*\
  !*** ./src/sprites/pointer.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e8b1125c4c6bd5339cf.png";

/***/ }),

/***/ "./src/sprites/raven.png":
/*!*******************************!*\
  !*** ./src/sprites/raven.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "396d0b29eca7d796ea4c.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _class_raven_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/raven.js */ "./src/class/raven.js");
/* harmony import */ var _class_particle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/particle.js */ "./src/class/particle.js");
/* harmony import */ var _class_explosion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/explosion.js */ "./src/class/explosion.js");
/* harmony import */ var _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub/pubsub.js */ "./src/pubsub/pubsub.js");
/* harmony import */ var _sounds_musicController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/musicController.js */ "./src/sounds/musicController.js");
/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/dom */ "./src/dom/dom.js");
/** @type {HTMLCanvasElement} */









const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colisionCanvas = document.querySelector('#colisionCanvas');
const colisionCtx = colisionCanvas.getContext('2d');
colisionCanvas.width = window.innerWidth;
colisionCanvas.height = window.innerHeight;

const ravenInterval = 500;
let timeToNextRaven = 0;
let lastTime = 0;
let score = 0;
let gameOver = false;
let isPause = false;
let ravens = [];
let explosions = [];
let particles = [];

function animate(timestamp = 0) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  if (timeToNextRaven > ravenInterval) {
    timeToNextRaven = 0;
    ravens.push(new _class_raven_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas, colisionCtx));
    ravens.sort((a, b) => a.width - b.width);
  }

  clearCanvas();
  drawScore();
  updateElements(deltaTime);
  drawELements();
  removeElements();

  if (!isPause && !gameOver) requestAnimationFrame(animate);
  if (gameOver) {
    _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].emit('openGameOverScreen', score);
    return;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  colisionCtx.clearRect(0, 0, colisionCanvas.width, colisionCanvas.height);
}

function drawScore() {
  ctx.font = '40px impact';
  ctx.fillStyle = '#444449';
  ctx.fillText('Score: ' + score, 54, 75);
  ctx.fillStyle = '#555';
  ctx.fillText('Score: ' + score, 53, 76);
}

function updateElements(deltaTime) {
  [...particles, ...ravens, ...explosions].forEach((obj) => {
    obj.update(deltaTime);
  });
}

function drawELements() {
  [...particles, ...ravens, ...explosions].forEach((obj) => {
    obj.draw();
  });
}

function removeElements() {
  ravens = ravens.filter((obj) => !obj.markedForDeletion);
  explosions = explosions.filter((obj) => !obj.markedForDeletion);
  particles = particles.filter((obj) => !obj.markedForDeletion);
}

window.addEventListener('keypress', (ev) => {
  if (ev.key === 'p') {
    isPause === true ? (isPause = false) : (isPause = true);
    resumeGame();
  }

  if (ev.key === 'm') {
    _pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].emit('mute');
  }
});

function resumeGame() {
  if (!isPause && !gameOver) {
    animate();
  }
}

window.addEventListener('click', (ev) => {
  if (isPause) return;
  detectColision(ev);
});

window.addEventListener('resize', () => {
  reziseCanvas();
});

function detectColision(ev) {
  const detecPixelColor = colisionCtx.getImageData(ev.x, ev.y, 1, 1);
  const pc = detecPixelColor.data;

  for (let i in ravens) {
    if (
      pc[0] === ravens[i].randomColors[0] &&
      pc[1] === ravens[i].randomColors[1] &&
      pc[2] === ravens[i].randomColors[2]
    ) {
      ravens[i].markedForDeletion = true;
      explosions.push(
        new _class_explosion_js__WEBPACK_IMPORTED_MODULE_3__["default"](
          ravens[i].x,
          ravens[i].y,
          ravens[i].width,
          ravens[i].hasParticle,
          ctx
        )
      );

      if (ravens[i].hasParticle) score += 2;
      else score++;

      break;
    }
  }
}

function reziseCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  colisionCanvas.width = window.innerWidth;
  colisionCanvas.height = window.innerHeight;
  drawELements();
}

function newParticle({ x, y, width, color }) {
  particles.push(new _class_particle_js__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, width, color, ctx));
}

function setGameOver() {
  gameOver = true;
}

function reset() {
  lastTime = 0;
  score = 0;
  gameOver = false;
  isPause = false;
  ravens = [];
  explosions = [];
  particles = [];
  timeToNextRaven = 0;
  clearCanvas();
}

function startGame() {
  animate();
}

_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('new Particle', newParticle);
_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('animate', animate);
_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('gameover', setGameOver);
_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('resetGame', reset);
_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('clearCanvas', clearCanvas);
_pubsub_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].on('startGame', startGame);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBTTtBQUNWO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQyxxQkFBcUIsMERBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBTTtBQUNOLHlEQUFNO0FBQ04seURBQU07QUFDTix5REFBTTtBQUNOLHlEQUFNO0FBQ04seURBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvY2xhc3MvZXhwbG9zaW9uLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL3NyYy9jbGFzcy9wYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvY2xhc3MvcmF2ZW4uanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvcHVic3ViL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvc291bmRzL211c2ljQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvc291bmRzL3NvdW5kcy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvc3ByaXRlcy9zcHJpdGVzLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImJhY2tncm91bmQvbGFuZHNjYXBlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc3ByaXRlcy9wb2ludGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxyXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY2FudmFzMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSwgYXV0bztcclxufVxyXG5cclxuI2NvbGlzaW9uQ2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjJlMjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0ODc0MzE7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzJjNmJhM2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xyXG59XHJcblxyXG4udGl0bGUtc3BlY2lhbCB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4udGl0bGUtc3BlY2lhbDo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnU2hvdCc7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IHJnYig3MSwgMTIyLCAyMDUpO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA1MCUpIHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4udHJhbnN0YWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgMnJlbSkgcm90YXRlKC0yMGRlZyk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLW91dCwgYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMxZDdjY2ZjYztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTVweCwgLTVweCk7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggIzJjNmJhM2NjO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjMDAwMDAwOTA7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgbWFyZ2luOiAtMjBweCAwIDMwcHggMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNDAwcHgpIHtcclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc2NvcmUge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qjt3RUFDc0U7RUFDdEUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQStDO0VBQy9DLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscURBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7O0VBRWIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFlBQVk7O0VBRVosNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3Qjs7RUFFeEIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGdFQUFnRTtFQUNoRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxyXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGJhY2tncm91bmQvbGFuZHNjYXBlLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FudmFzMSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHVybCgnLi9zcHJpdGVzL3BvaW50ZXIucG5nJyksIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb2xpc2lvbkNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMmUyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNDg3NDMxO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzJjNmJhM2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc3BlY2lhbCB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zcGVjaWFsOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiAnU2hvdCc7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoNzEsIDEyMiwgMjA1KTtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDUwJSkgcm90YXRlKC0xMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc3RhbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgMnJlbSkgcm90YXRlKC0yMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMWQ3Y2NmY2M7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjMmM2YmEzY2M7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjMDAwMDAwOTA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlIHtcXHJcXG4gIG1hcmdpbjogLTIwcHggMCAzMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYXNzZXRzIGZyb20gJy4uL3Nwcml0ZXMvc3ByaXRlcy5qcyc7XHJcbmltcG9ydCBzb3VuZHMgZnJvbSAnLi4vc291bmRzL3NvdW5kcy5qcyc7XHJcblxyXG5jbGFzcyBFeHBsb3Npb24ge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHNpemUsIGhhc1BhcnRpY2xlLCBjdHgpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBhc3NldHMuZXhwbG9zaW9uO1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IDIwMDtcclxuICAgIHRoaXMuc3ByaXRlaGVpZ2h0ID0gMTc5O1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLm1heEZyYW1lID0gNTtcclxuICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oKTtcclxuICAgIHRoaXMuc291bmQuc3JjID0gaGFzUGFydGljbGUgPT09IHRydWUgPyBzb3VuZHMuZXhwbG9zaW9uIDogc291bmRzLnN0ZWFtOztcclxuICAgIHRoaXMudGltZVNpbmNlTGFzdEZyYW1lID0gMDtcclxuICAgIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDE1MDtcclxuICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMudGltZVNpbmNlTGFzdEZyYW1lICs9IGRlbHRhVGltZTtcclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA9PT0gMCkgdGhpcy5zb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZVNpbmNlTGFzdEZyYW1lID4gdGhpcy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgIHRoaXMudGltZVNpbmNlTGFzdEZyYW1lID0gMDtcclxuICAgICAgdGhpcy5mcmFtZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID4gdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMuZnJhbWUgKiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICB0aGlzLnNwcml0ZWhlaWdodCxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICB0aGlzLnksXHJcbiAgICAgIHRoaXMuc2l6ZSxcclxuICAgICAgdGhpcy5zaXplXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9zaW9uO1xyXG4iLCJjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgY29sb3IsIGN0eCkge1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMueCA9IHggKyB0aGlzLnNpemUgLyAyICsgTWF0aC5yYW5kb20oKSAqIDMwIC0gMjA7XHJcbiAgICB0aGlzLnkgPSB5ICsgdGhpcy5zaXplIC8gMyArIE1hdGgucmFuZG9tKCkgKiAzMCAtIDIwO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zaXplICogMC4xO1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMjAgKyAzNTtcclxuICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIDEgKyAwLjU7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcclxuICAgIHRoaXMucmFkaXVzICs9IDAuMztcclxuICAgIGlmICh0aGlzLnJhZGl1cyA+IHRoaXMubWF4UmFkaXVzIC0gNSkgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxIC0gdGhpcy5yYWRpdXMgLyB0aGlzLm1heFJhZGl1cztcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlO1xyXG4iLCJpbXBvcnQgYXNzZXRzIGZyb20gJy4uL3Nwcml0ZXMvc3ByaXRlcy5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL3B1YnN1Yi5qcyc7XHJcblxyXG5jbGFzcyBSYXZlbiB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMsIGNvbGlzaW9uQ3R4KSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5jb2xpc2lvbkN0eCA9IGNvbGlzaW9uQ3R4O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IDI3MTtcclxuICAgIHRoaXMuc3ByaXRlaGVpZ2h0ID0gMTk0O1xyXG4gICAgdGhpcy5zaXplTW9kaWZpZXIgPSBjYW52YXMuaGVpZ2h0ID4gNDAwID8gTWF0aC5yYW5kb20oKSAqIDAuNCArIDAuNCA6IE1hdGgucmFuZG9tKCkgKiAwLjMgKyAwLjI7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zcHJpdGVXaWR0aCAqIHRoaXMuc2l6ZU1vZGlmaWVyO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNwcml0ZWhlaWdodCAqIHRoaXMuc2l6ZU1vZGlmaWVyO1xyXG4gICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuZGlyZWN0aW9uWCA9IE1hdGgucmFuZG9tKCkgKiAzICsgMztcclxuICAgIHRoaXMuZGlyZWN0aW9uWSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMS41O1xyXG4gICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBhc3NldHMucmF2ZW47XHJcbiAgICB0aGlzLmZsYXBTcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA4ICsgNTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5tYXhGcmFtZSA9IDY7XHJcbiAgICB0aGlzLnRpbWVTaW5jZWZsYXAgPSAwO1xyXG4gICAgdGhpcy5mbGFwSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogNTAgKyA1MDtcclxuICAgIHRoaXMucmFuZG9tQ29sb3JzID0gW1xyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuY29sb3IgPSBgcmdiKCR7dGhpcy5yYW5kb21Db2xvcnNbMF19LCAke3RoaXMucmFuZG9tQ29sb3JzWzFdfSwgJHt0aGlzLnJhbmRvbUNvbG9yc1syXX0sIDMwKWA7XHJcbiAgICB0aGlzLmhhc1BhcnRpY2xlID0gTWF0aC5yYW5kb20oKSAqIDEwID4gNztcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMueCAtPSB0aGlzLmRpcmVjdGlvblg7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy5kaXJlY3Rpb25ZO1xyXG5cclxuICAgIGlmICh0aGlzLnkgPCAwIHx8IHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMud2lkdGgpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gdGhpcy5kaXJlY3Rpb25ZICogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lU2luY2VmbGFwICs9IGRlbHRhVGltZTtcclxuXHJcbiAgICBpZiAodGhpcy50aW1lU2luY2VmbGFwID4gdGhpcy5mbGFwSW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy50aW1lU2luY2VmbGFwID0gMDtcclxuICAgICAgdGhpcy5mcmFtZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzUGFydGljbGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgZXZlbnRzLmVtaXQoJ25ldyBQYXJ0aWNsZScsIHtcclxuICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID49IHRoaXMubWF4RnJhbWUpIHRoaXMuZnJhbWUgPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLnggPCAtdGhpcy53aWR0aCkge1xyXG4gICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ2dhbWVvdmVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jb2xpc2lvbkN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5jb2xpc2lvbkN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmZyYW1lICogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgdGhpcy5zcHJpdGVoZWlnaHQsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdmVuO1xyXG4iLCJjb25zdCBnYW1lU3RhcnRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5nYW1lU3RhcnRNb2RhbC5pbm5lckhUTUwgPSBgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlLXNwZWNpYWwgdGl0bGVcIj5SYXZlbjwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwic3RhcnQtZ2FtZS1idG5cIj5TdGFydCBHYW1lPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuZ2FtZU92ZXJNb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+R2FtZSBPdmVyPC9oMT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInJlc2V0LWdhbWVcIj5NYWluIE1lbnU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIGdhbWVTdGFydE1vZGFsOiBnYW1lU3RhcnRNb2RhbCxcclxuICBnYW1lT3Zlck1vZGFsOiBnYW1lT3Zlck1vZGFsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50cztcclxuIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvcHVic3ViJztcclxuXHJcbmNvbnN0IHJlYWR5ID0gKGZuKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgcmV0dXJuIGZuKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnRlcmFjdGl2ZScsIGZuLCBmYWxzZSk7XHJcbn07XHJcblxyXG5jb25zdCBEb20gPSAoKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW5pdGlhbFNjcmVlbiA9IGNvbXBvbmVudHMuZ2FtZVN0YXJ0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBjb21wb25lbnRzLmdhbWVPdmVyTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBpbml0aWFsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1nYW1lLWJ0bicpO1xyXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZ2FtZU92ZXJTY3JlZW4ucXVlcnlTZWxlY3RvcignI3Jlc2V0LWdhbWUnKTtcclxuICBjb25zdCBzY29yZUVsZW1lbnQgPSBnYW1lT3ZlclNjcmVlbi5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkSW5pdGlhbFNjcmVlbkV2ZW50cygpIHtcclxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEdhbWVvdmVyU2NyZWVuRXZlbnRzKCkge1xyXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVJbml0aWFsU2NyZWVuRXZlbnRzKCkge1xyXG4gICAgc3RhcnRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlR2FtZW92ZXJTY3JlZW5FdmVudHMoKSB7XHJcbiAgICByZXNldEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2NyZWVuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHJlbW92ZUluaXRpYWxTY3JlZW5FdmVudHMoKTtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wTWVudU11c2ljJyk7XHJcbiAgICBldmVudHMuZW1pdCgnbWVudVNvdW5kJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2xvc2UoKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ3BsYXknKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ3N0YXJ0R2FtZScpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0U2NyZWVuKCkge1xyXG4gICAgcmVtb3ZlR2FtZW92ZXJTY3JlZW5FdmVudHMoKTtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wR2FtZU92ZXJNdXNpYycpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ21lbnVTb3VuZCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNsb3NlKCk7XHJcbiAgICAgIG9wZW5Jbml0aWFsU2NyZWVuKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuR2FtZU92ZXJTY3JlZW4oc2NvcmUpIHtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wJyk7XHJcbiAgICBldmVudHMuZW1pdCgnZ2FtZW92ZXJNdXNpYycpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnU2NvcmU6ICcgKyBzY29yZTtcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XHJcbiAgICAgIGFkZEdhbWVvdmVyU2NyZWVuRXZlbnRzKCk7XHJcbiAgICAgIG9wZW4oKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbkluaXRpYWxTY3JlZW4oKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0aWFsU2NyZWVuKTtcclxuICAgIGV2ZW50cy5lbWl0KCdwbGF5TWVudU11c2ljJyk7XHJcbiAgICBhZGRJbml0aWFsU2NyZWVuRXZlbnRzKCk7XHJcbiAgICBldmVudHMuZW1pdCgncmVzZXRHYW1lJyk7XHJcbiAgICBvcGVuKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMub24oJ29wZW5HYW1lT3ZlclNjcmVlbicsIG9wZW5HYW1lT3ZlclNjcmVlbik7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgb3BlbkluaXRpYWxTY3JlZW4oKTtcclxuICB9KTtcclxuXHJcbiAgcmVhZHkob3BlbkluaXRpYWxTY3JlZW4pO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9tO1xyXG4iLCJjb25zdCBldmVudHMgPSB7XHJcbiAgZXZlbnRzOiB7fSxcclxuICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICB9LFxyXG4gIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGZvciAoZWxlbWVudCBpbiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1bZWxlbWVudF0gPT09IGZuKSB7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShlbGVtZW50LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBkb2Vzbid0IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcclxuIiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvcHVic3ViJztcclxuaW1wb3J0IHNvdW5kcyBmcm9tICcuL3NvdW5kcy5qcyc7XHJcblxyXG5jb25zdCBtdXNpY0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGJhY2tncm91ZE11c2ljMSA9IG5ldyBBdWRpbyhzb3VuZHMubXVzaWMxKTtcclxuICBjb25zdCBiYWNrZ3JvdWRNdXNpYzIgPSBuZXcgQXVkaW8oc291bmRzLm11c2ljMik7XHJcbiAgY29uc3QgYmFja2dyb3VkTXVzaWMzID0gbmV3IEF1ZGlvKHNvdW5kcy5tdXNpYzMpO1xyXG4gIGNvbnN0IGJhY2tncm91ZE11c2ljNCA9IG5ldyBBdWRpbyhzb3VuZHMubXVzaWM0KTtcclxuICBjb25zdCBtZW51U291bmQgPSBuZXcgQXVkaW8oc291bmRzLm1lbnVTZWxlY3Rpb24pO1xyXG4gIGNvbnN0IG1lbnVNdXNpYyA9IG5ldyBBdWRpbyhzb3VuZHMubWVudU11c2ljKTtcclxuICBjb25zdCBnYW1lb3Zlck11c2ljID0gbmV3IEF1ZGlvKHNvdW5kcy5nYW1lb3Zlck11c2ljKTtcclxuICBjb25zdCBtdXNpY3MgPSBbXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzEsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzIsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzMsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzQsXHJcbiAgXTtcclxuICBjb25zdCBhbW91bnRNdXNpY3MgPSBtdXNpY3MubGVuZ3RoO1xyXG4gIGxldCBjdXJyZW50TXVzaWMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbW91bnRNdXNpY3MpO1xyXG4gIGxldCBtdXNpY1ZvbHVtZSA9IDAuNDtcclxuICBsZXQgaXNNdXRlID0gZmFsc2U7XHJcblxyXG4gIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgbXVzaWMudm9sdW1lID0gbXVzaWNWb2x1bWU7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICBpZiAoY3VycmVudE11c2ljID49IGFtb3VudE11c2ljcykgY3VycmVudE11c2ljID0gMDtcclxuICAgIG11c2ljc1tjdXJyZW50TXVzaWNdLnBsYXkoKTtcclxuICAgIG11c2ljc1tjdXJyZW50TXVzaWNdLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRNdXNpYyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TmV4dE11c2ljKCkge1xyXG4gICAgY3VycmVudE11c2ljKys7XHJcbiAgICBwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtdXRlKCkge1xyXG4gICAgaXNNdXRlID09PSB0cnVlID8gKGlzTXV0ZSA9IGZhbHNlKSA6IChpc011dGUgPSB0cnVlKTtcclxuICAgIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgICBpc011dGUgPT09IHRydWUgPyAobXVzaWMudm9sdW1lID0gMCkgOiAobXVzaWMudm9sdW1lID0gbXVzaWNWb2x1bWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wKCkge1xyXG4gICAgY3VycmVudE11c2ljID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW1vdW50TXVzaWNzKTtcclxuICAgIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgICBtdXNpYy5wYXVzZSgpO1xyXG4gICAgICBtdXNpYy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIG11c2ljLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRNdXNpYyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlNZW51TXVzaWMoKSB7XHJcbiAgICBtZW51TXVzaWMuY3VycmVudFRpbWUgPSAwO1xyXG5cclxuICAgIG1lbnVNdXNpYy5wbGF5KCk7XHJcblxyXG4gICAgbWVudU11c2ljLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU1lbnVNdXNpYyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wTWVudU11c2ljKCkge1xyXG4gICAgbWVudU11c2ljLnBhdXNlKCk7XHJcbiAgICBtZW51TXVzaWMucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBwbGF5TWVudU11c2ljKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlNZW51U291bmQoKSB7XHJcbiAgICBtZW51U291bmQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgbWVudVNvdW5kLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlHYW1lT3Zlck11c2ljKCkge1xyXG4gICAgZ2FtZW92ZXJNdXNpYy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBnYW1lb3Zlck11c2ljLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0b3BHYW1lb3Zlck11c2ljKCkge1xyXG4gICAgZ2FtZW92ZXJNdXNpYy5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzLm9uKCdtdXRlJywgbXV0ZSk7XHJcbiAgZXZlbnRzLm9uKCdwbGF5JywgcGxheSk7XHJcbiAgZXZlbnRzLm9uKCdzdG9wJywgc3RvcCk7XHJcbiAgZXZlbnRzLm9uKCdtZW51U291bmQnLCBwbGF5TWVudVNvdW5kKTtcclxuICBldmVudHMub24oJ3BsYXlNZW51TXVzaWMnLCBwbGF5TWVudU11c2ljKTtcclxuICBldmVudHMub24oJ3N0b3BNZW51TXVzaWMnLCBzdG9wTWVudU11c2ljKTtcclxuICBldmVudHMub24oJ2dhbWVvdmVyTXVzaWMnLCBwbGF5R2FtZU92ZXJNdXNpYyk7XHJcbiAgZXZlbnRzLm9uKCdzdG9wR2FtZU92ZXJNdXNpYycsIHN0b3BHYW1lb3Zlck11c2ljKTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG11c2ljQ29udHJvbGxlcjtcclxuIiwiaW1wb3J0IGJhY2tncm91bmRNdXNpYzEgZnJvbSAnLi9iYWNrZ3JvdW5kLTEubXAzJztcclxuaW1wb3J0IGJhY2tncm91bmRNdXNpYzIgZnJvbSAnLi9iYWNrZ3JvdW5kLTIubXAzJztcclxuaW1wb3J0IGJhY2tncm91bmRNdXNpYzMgZnJvbSAnLi9iYWNrZ3JvdW5kLTMub2dnJztcclxuaW1wb3J0IGJhY2tncm91bmRNdXNpYzQgZnJvbSAnLi9iYWNrZ3JvdW5kLTQubXAzJztcclxuaW1wb3J0IGV4cGxvc2lvbl9zb3VuZCBmcm9tICcuL2V4cGxvc2lvbi53YXYnO1xyXG5pbXBvcnQgc3RlYW1fc291bmQgZnJvbSAnLi9zdGVhbS53YXYnO1xyXG5pbXBvcnQgbWVudV9zZWxlY3Rpb24gZnJvbSAnLi9tZW51X3NlbGVjdGlvbi53YXYnO1xyXG5pbXBvcnQgbWVudV9tdXNpYyBmcm9tICcuL21lbnUtbXVzaWMubXAzJztcclxuaW1wb3J0IGdhbWVvdmVyTXVzaWMgZnJvbSAnLi9nYW1lb3Zlci53YXYnO1xyXG5cclxuY29uc3Qgc291bmRzID0ge1xyXG4gIG11c2ljMTogYmFja2dyb3VuZE11c2ljMSxcclxuICBtdXNpYzI6IGJhY2tncm91bmRNdXNpYzIsXHJcbiAgbXVzaWMzOiBiYWNrZ3JvdW5kTXVzaWMzLFxyXG4gIG11c2ljNDogYmFja2dyb3VuZE11c2ljNCxcclxuICBleHBsb3Npb246IGV4cGxvc2lvbl9zb3VuZCxcclxuICBzdGVhbTogc3RlYW1fc291bmQsXHJcbiAgbWVudVNlbGVjdGlvbjogbWVudV9zZWxlY3Rpb24sXHJcbiAgbWVudU11c2ljOiBtZW51X211c2ljLFxyXG4gIGdhbWVvdmVyTXVzaWM6IGdhbWVvdmVyTXVzaWMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb3VuZHM7XHJcbiIsImltcG9ydCBleHBsb3Npb25fcG5nIGZyb20gJy4vYm9vbS5wbmcnO1xyXG5pbXBvcnQgcmF2ZW5fcG5nIGZyb20gJy4vcmF2ZW4ucG5nJztcclxuXHJcbmNvbnN0IGFzc2V0cyA9IHtcclxuICBleHBsb3Npb246IGV4cGxvc2lvbl9wbmcsXHJcbiAgcmF2ZW46IHJhdmVuX3BuZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzc2V0cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fSAqL1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSYXZlbiBmcm9tICcuL2NsYXNzL3JhdmVuLmpzJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vY2xhc3MvcGFydGljbGUuanMnO1xyXG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gJy4vY2xhc3MvZXhwbG9zaW9uLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YnN1Yi9wdWJzdWIuanMnO1xyXG5pbXBvcnQgbXVzaWNDb250cm9sbGVyIGZyb20gJy4vc291bmRzL211c2ljQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBEb20gZnJvbSAnLi9kb20vZG9tJztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMxJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmNvbnN0IGNvbGlzaW9uQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbGlzaW9uQ2FudmFzJyk7XHJcbmNvbnN0IGNvbGlzaW9uQ3R4ID0gY29saXNpb25DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuY29saXNpb25DYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY29saXNpb25DYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgcmF2ZW5JbnRlcnZhbCA9IDUwMDtcclxubGV0IHRpbWVUb05leHRSYXZlbiA9IDA7XHJcbmxldCBsYXN0VGltZSA9IDA7XHJcbmxldCBzY29yZSA9IDA7XHJcbmxldCBnYW1lT3ZlciA9IGZhbHNlO1xyXG5sZXQgaXNQYXVzZSA9IGZhbHNlO1xyXG5sZXQgcmF2ZW5zID0gW107XHJcbmxldCBleHBsb3Npb25zID0gW107XHJcbmxldCBwYXJ0aWNsZXMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUodGltZXN0YW1wID0gMCkge1xyXG4gIGxldCBkZWx0YVRpbWUgPSB0aW1lc3RhbXAgLSBsYXN0VGltZTtcclxuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcclxuICB0aW1lVG9OZXh0UmF2ZW4gKz0gZGVsdGFUaW1lO1xyXG5cclxuICBpZiAodGltZVRvTmV4dFJhdmVuID4gcmF2ZW5JbnRlcnZhbCkge1xyXG4gICAgdGltZVRvTmV4dFJhdmVuID0gMDtcclxuICAgIHJhdmVucy5wdXNoKG5ldyBSYXZlbihjdHgsIGNhbnZhcywgY29saXNpb25DdHgpKTtcclxuICAgIHJhdmVucy5zb3J0KChhLCBiKSA9PiBhLndpZHRoIC0gYi53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBjbGVhckNhbnZhcygpO1xyXG4gIGRyYXdTY29yZSgpO1xyXG4gIHVwZGF0ZUVsZW1lbnRzKGRlbHRhVGltZSk7XHJcbiAgZHJhd0VMZW1lbnRzKCk7XHJcbiAgcmVtb3ZlRWxlbWVudHMoKTtcclxuXHJcbiAgaWYgKCFpc1BhdXNlICYmICFnYW1lT3ZlcikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gIGlmIChnYW1lT3Zlcikge1xyXG4gICAgZXZlbnRzLmVtaXQoJ29wZW5HYW1lT3ZlclNjcmVlbicsIHNjb3JlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBjb2xpc2lvbkN0eC5jbGVhclJlY3QoMCwgMCwgY29saXNpb25DYW52YXMud2lkdGgsIGNvbGlzaW9uQ2FudmFzLmhlaWdodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcclxuICBjdHguZm9udCA9ICc0MHB4IGltcGFjdCc7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICcjNDQ0NDQ5JztcclxuICBjdHguZmlsbFRleHQoJ1Njb3JlOiAnICsgc2NvcmUsIDU0LCA3NSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICcjNTU1JztcclxuICBjdHguZmlsbFRleHQoJ1Njb3JlOiAnICsgc2NvcmUsIDUzLCA3Nik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKGRlbHRhVGltZSkge1xyXG4gIFsuLi5wYXJ0aWNsZXMsIC4uLnJhdmVucywgLi4uZXhwbG9zaW9uc10uZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBvYmoudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdFTGVtZW50cygpIHtcclxuICBbLi4ucGFydGljbGVzLCAuLi5yYXZlbnMsIC4uLmV4cGxvc2lvbnNdLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgb2JqLmRyYXcoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHMoKSB7XHJcbiAgcmF2ZW5zID0gcmF2ZW5zLmZpbHRlcigob2JqKSA9PiAhb2JqLm1hcmtlZEZvckRlbGV0aW9uKTtcclxuICBleHBsb3Npb25zID0gZXhwbG9zaW9ucy5maWx0ZXIoKG9iaikgPT4gIW9iai5tYXJrZWRGb3JEZWxldGlvbik7XHJcbiAgcGFydGljbGVzID0gcGFydGljbGVzLmZpbHRlcigob2JqKSA9PiAhb2JqLm1hcmtlZEZvckRlbGV0aW9uKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gJ3AnKSB7XHJcbiAgICBpc1BhdXNlID09PSB0cnVlID8gKGlzUGF1c2UgPSBmYWxzZSkgOiAoaXNQYXVzZSA9IHRydWUpO1xyXG4gICAgcmVzdW1lR2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2LmtleSA9PT0gJ20nKSB7XHJcbiAgICBldmVudHMuZW1pdCgnbXV0ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXN1bWVHYW1lKCkge1xyXG4gIGlmICghaXNQYXVzZSAmJiAhZ2FtZU92ZXIpIHtcclxuICAgIGFuaW1hdGUoKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gIGlmIChpc1BhdXNlKSByZXR1cm47XHJcbiAgZGV0ZWN0Q29saXNpb24oZXYpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgcmV6aXNlQ2FudmFzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZGV0ZWN0Q29saXNpb24oZXYpIHtcclxuICBjb25zdCBkZXRlY1BpeGVsQ29sb3IgPSBjb2xpc2lvbkN0eC5nZXRJbWFnZURhdGEoZXYueCwgZXYueSwgMSwgMSk7XHJcbiAgY29uc3QgcGMgPSBkZXRlY1BpeGVsQ29sb3IuZGF0YTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiByYXZlbnMpIHtcclxuICAgIGlmIChcclxuICAgICAgcGNbMF0gPT09IHJhdmVuc1tpXS5yYW5kb21Db2xvcnNbMF0gJiZcclxuICAgICAgcGNbMV0gPT09IHJhdmVuc1tpXS5yYW5kb21Db2xvcnNbMV0gJiZcclxuICAgICAgcGNbMl0gPT09IHJhdmVuc1tpXS5yYW5kb21Db2xvcnNbMl1cclxuICAgICkge1xyXG4gICAgICByYXZlbnNbaV0ubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgICBleHBsb3Npb25zLnB1c2goXHJcbiAgICAgICAgbmV3IEV4cGxvc2lvbihcclxuICAgICAgICAgIHJhdmVuc1tpXS54LFxyXG4gICAgICAgICAgcmF2ZW5zW2ldLnksXHJcbiAgICAgICAgICByYXZlbnNbaV0ud2lkdGgsXHJcbiAgICAgICAgICByYXZlbnNbaV0uaGFzUGFydGljbGUsXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocmF2ZW5zW2ldLmhhc1BhcnRpY2xlKSBzY29yZSArPSAyO1xyXG4gICAgICBlbHNlIHNjb3JlKys7XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlemlzZUNhbnZhcygpIHtcclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIGNvbGlzaW9uQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29saXNpb25DYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIGRyYXdFTGVtZW50cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQYXJ0aWNsZSh7IHgsIHksIHdpZHRoLCBjb2xvciB9KSB7XHJcbiAgcGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHgsIHksIHdpZHRoLCBjb2xvciwgY3R4KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEdhbWVPdmVyKCkge1xyXG4gIGdhbWVPdmVyID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgbGFzdFRpbWUgPSAwO1xyXG4gIHNjb3JlID0gMDtcclxuICBnYW1lT3ZlciA9IGZhbHNlO1xyXG4gIGlzUGF1c2UgPSBmYWxzZTtcclxuICByYXZlbnMgPSBbXTtcclxuICBleHBsb3Npb25zID0gW107XHJcbiAgcGFydGljbGVzID0gW107XHJcbiAgdGltZVRvTmV4dFJhdmVuID0gMDtcclxuICBjbGVhckNhbnZhcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgYW5pbWF0ZSgpO1xyXG59XHJcblxyXG5ldmVudHMub24oJ25ldyBQYXJ0aWNsZScsIG5ld1BhcnRpY2xlKTtcclxuZXZlbnRzLm9uKCdhbmltYXRlJywgYW5pbWF0ZSk7XHJcbmV2ZW50cy5vbignZ2FtZW92ZXInLCBzZXRHYW1lT3Zlcik7XHJcbmV2ZW50cy5vbigncmVzZXRHYW1lJywgcmVzZXQpO1xyXG5ldmVudHMub24oJ2NsZWFyQ2FudmFzJywgY2xlYXJDYW52YXMpO1xyXG5ldmVudHMub24oJ3N0YXJ0R2FtZScsIHN0YXJ0R2FtZSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==