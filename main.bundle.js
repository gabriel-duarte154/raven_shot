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
  width: 100vh;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB;wEACsE;;IAEpE,iBAAiB;AACrB;;AAEA;EACE,yDAA+C;EAC/C,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qDAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,aAAa;;EAEb,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;;EAEnB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;EAEZ,6CAA6C;AAC/C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;;EAExB,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;EACrB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;;EAEjB,gEAAgE;EAChE,iCAAiC;AACnC;;AAEA;EACE,4CAA4C;EAC5C,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n    user-select: none;\r\n}\r\n\r\nbody {\r\n  background-image: url(background/landscape.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 100vh;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n#canvas1 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: url('./sprites/pointer.png'), auto;\r\n}\r\n\r\n#colisionCanvas {\r\n  opacity: 0;\r\n}\r\n\r\n.container {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n  padding: 1rem;\r\n\r\n  background-color: #222222e2;\r\n}\r\n\r\n.modal {\r\n  position: relative;\r\n  border: 1px solid white;\r\n  height: 300px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border-radius: 2rem;\r\n\r\n  background-color: #1b487431;\r\n  box-shadow: 1px 1px 5px #2c6ba3cc;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: 'Bungee', cursive;\r\n  font-size: 3rem;\r\n  color: white;\r\n\r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.title-special {\r\n  font-size: 4rem;\r\n}\r\n\r\n.title-special::after {\r\n  position: absolute;\r\n  content: 'Shot';\r\n  font-size: 2.5rem;\r\n  color: rgb(71, 122, 205);\r\n\r\n  transform: translate(-70%, 50%) rotate(-10deg);\r\n}\r\n\r\n.transtale {\r\n  position: absolute;\r\n  transform: translate(6rem, 2rem) rotate(-20deg);\r\n}\r\n\r\n.button {\r\n  font-size: 1.2rem;\r\n  border: 1px solid white;\r\n  padding: 0.5rem 2rem;\r\n  border-radius: 0.5rem;\r\n  background-color: transparent;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n\r\n  transition: transform 0.8s ease-out, box-shadow 0.5s ease-in-out;\r\n  box-shadow: 1px 1px 1px #1d7ccfcc;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) translate(-5px, -5px);\r\n  box-shadow: 3px 3px 3px #2c6ba3cc;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(1);\r\n  box-shadow: inset 2px 2px 5px #00000090;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.score {\r\n  margin: -20px 0 30px 0;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  font-weight: bold;\r\n}"],"sourceRoot":""}]);
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
    this.sizeModifier = Math.random() * 0.4 + 0.4;
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
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('clearCanvas');
    _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].emit('playMenuMusic');
    addInitialScreenEvents();
    open();
  }

  _pubsub_pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].on('openGameOverScreen', openGameOverScreen);

  window.addEventListener('load', () => {
    openInitialScreen();
  });
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
}

function startGame() {
  reset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0MscUJBQXFCLDBEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQU07QUFDTix5REFBTTtBQUNOLHlEQUFNO0FBQ04seURBQU07QUFDTix5REFBTTtBQUNOLHlEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2NsYXNzL2V4cGxvc2lvbi5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvY2xhc3MvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2NsYXNzL3JhdmVuLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3B1YnN1Yi9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3NvdW5kcy9tdXNpY0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3NvdW5kcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3Nwcml0ZXMvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kL2xhbmRzY2FwZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3Nwcml0ZXMvcG9pbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcclxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NhbnZhczEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSksIGF1dG87XHJcbn1cclxuXHJcbiNjb2xpc2lvbkNhbnZhcyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjJlMjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0ODc0MzE7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzJjNmJhM2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xyXG59XHJcblxyXG4udGl0bGUtc3BlY2lhbCB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4udGl0bGUtc3BlY2lhbDo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnU2hvdCc7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IHJnYig3MSwgMTIyLCAyMDUpO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA1MCUpIHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4udHJhbnN0YWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgMnJlbSkgcm90YXRlKC0yMGRlZyk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLW91dCwgYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMxZDdjY2ZjYztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTVweCwgLTVweCk7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggIzJjNmJhM2NjO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjMDAwMDAwOTA7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgbWFyZ2luOiAtMjBweCAwIDMwcHggMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qjt3RUFDc0U7O0lBRXBFLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFEQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhOztFQUViLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLDJCQUEyQjtFQUMzQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZOztFQUVaLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7O0VBRXhCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixnRUFBZ0U7RUFDaEUsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChiYWNrZ3JvdW5kL2xhbmRzY2FwZS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdmg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbnZhczEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiB1cmwoJy4vc3ByaXRlcy9wb2ludGVyLnBuZycpLCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY29saXNpb25DYW52YXMge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMmUyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNDg3NDMxO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzJjNmJhM2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc3BlY2lhbCB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zcGVjaWFsOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiAnU2hvdCc7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoNzEsIDEyMiwgMjA1KTtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDUwJSkgcm90YXRlKC0xMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc3RhbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgMnJlbSkgcm90YXRlKC0yMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMWQ3Y2NmY2M7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjMmM2YmEzY2M7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjMDAwMDAwOTA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlIHtcXHJcXG4gIG1hcmdpbjogLTIwcHggMCAzMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhc3NldHMgZnJvbSAnLi4vc3ByaXRlcy9zcHJpdGVzLmpzJztcclxuaW1wb3J0IHNvdW5kcyBmcm9tICcuLi9zb3VuZHMvc291bmRzLmpzJztcclxuXHJcbmNsYXNzIEV4cGxvc2lvbiB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgaGFzUGFydGljbGUsIGN0eCkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltYWdlLnNyYyA9IGFzc2V0cy5leHBsb3Npb247XHJcbiAgICB0aGlzLnNwcml0ZVdpZHRoID0gMjAwO1xyXG4gICAgdGhpcy5zcHJpdGVoZWlnaHQgPSAxNzk7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMubWF4RnJhbWUgPSA1O1xyXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gICAgdGhpcy5zb3VuZC5zcmMgPSBoYXNQYXJ0aWNsZSA9PT0gdHJ1ZSA/IHNvdW5kcy5leHBsb3Npb24gOiBzb3VuZHMuc3RlYW07O1xyXG4gICAgdGhpcy50aW1lU2luY2VMYXN0RnJhbWUgPSAwO1xyXG4gICAgdGhpcy5mcmFtZUludGVydmFsID0gMTUwO1xyXG4gICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgdGhpcy50aW1lU2luY2VMYXN0RnJhbWUgKz0gZGVsdGFUaW1lO1xyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID09PSAwKSB0aGlzLnNvdW5kLnBsYXkoKTtcclxuXHJcbiAgICBpZiAodGhpcy50aW1lU2luY2VMYXN0RnJhbWUgPiB0aGlzLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy50aW1lU2luY2VMYXN0RnJhbWUgPSAwO1xyXG4gICAgICB0aGlzLmZyYW1lKys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZnJhbWUgPiB0aGlzLm1heEZyYW1lKSB7XHJcbiAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5mcmFtZSAqIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIHRoaXMuc3ByaXRlaGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy5zaXplLFxyXG4gICAgICB0aGlzLnNpemVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3Npb247XHJcbiIsImNsYXNzIFBhcnRpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplLCBjb2xvciwgY3R4KSB7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy54ID0geCArIHRoaXMuc2l6ZSAvIDIgKyBNYXRoLnJhbmRvbSgpICogMzAgLSAyMDtcclxuICAgIHRoaXMueSA9IHkgKyB0aGlzLnNpemUgLyAzICsgTWF0aC5yYW5kb20oKSAqIDMwIC0gMjA7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNpemUgKiAwLjE7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAyMCArIDM1O1xyXG4gICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcGVlZFggPSBNYXRoLnJhbmRvbSgpICogMSArIDAuNTtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xyXG4gICAgdGhpcy5yYWRpdXMgKz0gMC4zO1xyXG4gICAgaWYgKHRoaXMucmFkaXVzID4gdGhpcy5tYXhSYWRpdXMgLSA1KSB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDEgLSB0aGlzLnJhZGl1cyAvIHRoaXMubWF4UmFkaXVzO1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGU7XHJcbiIsImltcG9ydCBhc3NldHMgZnJvbSAnLi4vc3ByaXRlcy9zcHJpdGVzLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvcHVic3ViLmpzJztcclxuXHJcbmNsYXNzIFJhdmVuIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcywgY29saXNpb25DdHgpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmNvbGlzaW9uQ3R4ID0gY29saXNpb25DdHg7XHJcbiAgICB0aGlzLnNwcml0ZVdpZHRoID0gMjcxO1xyXG4gICAgdGhpcy5zcHJpdGVoZWlnaHQgPSAxOTQ7XHJcbiAgICB0aGlzLnNpemVNb2RpZmllciA9IE1hdGgucmFuZG9tKCkgKiAwLjQgKyAwLjQ7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zcHJpdGVXaWR0aCAqIHRoaXMuc2l6ZU1vZGlmaWVyO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNwcml0ZWhlaWdodCAqIHRoaXMuc2l6ZU1vZGlmaWVyO1xyXG4gICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuZGlyZWN0aW9uWCA9IE1hdGgucmFuZG9tKCkgKiAzICsgMztcclxuICAgIHRoaXMuZGlyZWN0aW9uWSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMS41O1xyXG4gICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBhc3NldHMucmF2ZW47XHJcbiAgICB0aGlzLmZsYXBTcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA4ICsgNTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5tYXhGcmFtZSA9IDY7XHJcbiAgICB0aGlzLnRpbWVTaW5jZWZsYXAgPSAwO1xyXG4gICAgdGhpcy5mbGFwSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogNTAgKyA1MDtcclxuICAgIHRoaXMucmFuZG9tQ29sb3JzID0gW1xyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuY29sb3IgPSBgcmdiKCR7dGhpcy5yYW5kb21Db2xvcnNbMF19LCAke3RoaXMucmFuZG9tQ29sb3JzWzFdfSwgJHt0aGlzLnJhbmRvbUNvbG9yc1syXX0sIDMwKWA7XHJcbiAgICB0aGlzLmhhc1BhcnRpY2xlID0gTWF0aC5yYW5kb20oKSAqIDEwID4gNztcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMueCAtPSB0aGlzLmRpcmVjdGlvblg7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy5kaXJlY3Rpb25ZO1xyXG5cclxuICAgIGlmICh0aGlzLnkgPCAwIHx8IHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMud2lkdGgpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gdGhpcy5kaXJlY3Rpb25ZICogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lU2luY2VmbGFwICs9IGRlbHRhVGltZTtcclxuXHJcbiAgICBpZiAodGhpcy50aW1lU2luY2VmbGFwID4gdGhpcy5mbGFwSW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy50aW1lU2luY2VmbGFwID0gMDtcclxuICAgICAgdGhpcy5mcmFtZSsrO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzUGFydGljbGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgZXZlbnRzLmVtaXQoJ25ldyBQYXJ0aWNsZScsIHtcclxuICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lID49IHRoaXMubWF4RnJhbWUpIHRoaXMuZnJhbWUgPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLnggPCAtdGhpcy53aWR0aCkge1xyXG4gICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ2dhbWVvdmVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jb2xpc2lvbkN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5jb2xpc2lvbkN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmZyYW1lICogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgdGhpcy5zcHJpdGVoZWlnaHQsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdmVuO1xyXG4iLCJjb25zdCBnYW1lU3RhcnRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5nYW1lU3RhcnRNb2RhbC5pbm5lckhUTUwgPSBgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlLXNwZWNpYWwgdGl0bGVcIj5SYXZlbjwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwic3RhcnQtZ2FtZS1idG5cIj5TdGFydCBHYW1lPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuZ2FtZU92ZXJNb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+R2FtZSBPdmVyPC9oMT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInJlc2V0LWdhbWVcIj5NYWluIE1lbnU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIGdhbWVTdGFydE1vZGFsOiBnYW1lU3RhcnRNb2RhbCxcclxuICBnYW1lT3Zlck1vZGFsOiBnYW1lT3Zlck1vZGFsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50cztcclxuIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvcHVic3ViJztcclxuXHJcbmNvbnN0IERvbSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICBjb25zdCBpbml0aWFsU2NyZWVuID0gY29tcG9uZW50cy5nYW1lU3RhcnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGNvbXBvbmVudHMuZ2FtZU92ZXJNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGluaXRpYWxTY3JlZW4ucXVlcnlTZWxlY3RvcignI3N0YXJ0LWdhbWUtYnRuJyk7XHJcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBnYW1lT3ZlclNjcmVlbi5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtZ2FtZScpO1xyXG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGdhbWVPdmVyU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy5zY29yZScpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRJbml0aWFsU2NyZWVuRXZlbnRzKCkge1xyXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkR2FtZW92ZXJTY3JlZW5FdmVudHMoKSB7XHJcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2NyZWVuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxTY3JlZW5FdmVudHMoKSB7XHJcbiAgICBzdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVHYW1lb3ZlclNjcmVlbkV2ZW50cygpIHtcclxuICAgIHJlc2V0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcmVtb3ZlSW5pdGlhbFNjcmVlbkV2ZW50cygpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ3N0b3BNZW51TXVzaWMnKTtcclxuICAgIGV2ZW50cy5lbWl0KCdtZW51U291bmQnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjbG9zZSgpO1xyXG4gICAgICBldmVudHMuZW1pdCgncGxheScpO1xyXG4gICAgICBldmVudHMuZW1pdCgnc3RhcnRHYW1lJyk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRTY3JlZW4oKSB7XHJcbiAgICByZW1vdmVHYW1lb3ZlclNjcmVlbkV2ZW50cygpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ3N0b3BHYW1lT3Zlck11c2ljJyk7XHJcbiAgICBldmVudHMuZW1pdCgnbWVudVNvdW5kJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2xvc2UoKTtcclxuICAgICAgb3BlbkluaXRpYWxTY3JlZW4oKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuKCkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5HYW1lT3ZlclNjcmVlbihzY29yZSkge1xyXG4gICAgZXZlbnRzLmVtaXQoJ3N0b3AnKTtcclxuICAgIGV2ZW50cy5lbWl0KCdnYW1lb3Zlck11c2ljJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9ICdTY29yZTogJyArIHNjb3JlO1xyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcclxuICAgICAgYWRkR2FtZW92ZXJTY3JlZW5FdmVudHMoKTtcclxuICAgICAgb3BlbigpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuSW5pdGlhbFNjcmVlbigpIHtcclxuICAgIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRpYWxTY3JlZW4pO1xyXG4gICAgZXZlbnRzLmVtaXQoJ2NsZWFyQ2FudmFzJyk7XHJcbiAgICBldmVudHMuZW1pdCgncGxheU1lbnVNdXNpYycpO1xyXG4gICAgYWRkSW5pdGlhbFNjcmVlbkV2ZW50cygpO1xyXG4gICAgb3BlbigpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzLm9uKCdvcGVuR2FtZU92ZXJTY3JlZW4nLCBvcGVuR2FtZU92ZXJTY3JlZW4pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIG9wZW5Jbml0aWFsU2NyZWVuKCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb207XHJcbiIsImNvbnN0IGV2ZW50cyA9IHtcclxuICBldmVudHM6IHt9LFxyXG4gIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xyXG4gIH0sXHJcbiAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgZm9yIChlbGVtZW50IGluIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXVtlbGVtZW50XSA9PT0gZm4pIHtcclxuICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGVsZW1lbnQsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBlbWl0OiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtldmVudE5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xyXG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL3B1YnN1Yi9wdWJzdWInO1xyXG5pbXBvcnQgc291bmRzIGZyb20gJy4vc291bmRzLmpzJztcclxuXHJcbmNvbnN0IG11c2ljQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYmFja2dyb3VkTXVzaWMxID0gbmV3IEF1ZGlvKHNvdW5kcy5tdXNpYzEpO1xyXG4gIGNvbnN0IGJhY2tncm91ZE11c2ljMiA9IG5ldyBBdWRpbyhzb3VuZHMubXVzaWMyKTtcclxuICBjb25zdCBiYWNrZ3JvdWRNdXNpYzMgPSBuZXcgQXVkaW8oc291bmRzLm11c2ljMyk7XHJcbiAgY29uc3QgYmFja2dyb3VkTXVzaWM0ID0gbmV3IEF1ZGlvKHNvdW5kcy5tdXNpYzQpO1xyXG4gIGNvbnN0IG1lbnVTb3VuZCA9IG5ldyBBdWRpbyhzb3VuZHMubWVudVNlbGVjdGlvbik7XHJcbiAgY29uc3QgbWVudU11c2ljID0gbmV3IEF1ZGlvKHNvdW5kcy5tZW51TXVzaWMpO1xyXG4gIGNvbnN0IGdhbWVvdmVyTXVzaWMgPSBuZXcgQXVkaW8oc291bmRzLmdhbWVvdmVyTXVzaWMpO1xyXG4gIGNvbnN0IG11c2ljcyA9IFtcclxuICAgIGJhY2tncm91ZE11c2ljMSxcclxuICAgIGJhY2tncm91ZE11c2ljMixcclxuICAgIGJhY2tncm91ZE11c2ljMyxcclxuICAgIGJhY2tncm91ZE11c2ljNCxcclxuICBdO1xyXG4gIGNvbnN0IGFtb3VudE11c2ljcyA9IG11c2ljcy5sZW5ndGg7XHJcbiAgbGV0IGN1cnJlbnRNdXNpYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFtb3VudE11c2ljcyk7XHJcbiAgbGV0IG11c2ljVm9sdW1lID0gMC40O1xyXG4gIGxldCBpc011dGUgPSBmYWxzZTtcclxuXHJcbiAgbXVzaWNzLmZvckVhY2goKG11c2ljKSA9PiB7XHJcbiAgICBtdXNpYy52b2x1bWUgPSBtdXNpY1ZvbHVtZTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgIGlmIChjdXJyZW50TXVzaWMgPj0gYW1vdW50TXVzaWNzKSBjdXJyZW50TXVzaWMgPSAwO1xyXG4gICAgbXVzaWNzW2N1cnJlbnRNdXNpY10ucGxheSgpO1xyXG4gICAgbXVzaWNzW2N1cnJlbnRNdXNpY10uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBwbGF5TmV4dE11c2ljKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlOZXh0TXVzaWMoKSB7XHJcbiAgICBjdXJyZW50TXVzaWMrKztcclxuICAgIHBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG11dGUoKSB7XHJcbiAgICBpc011dGUgPT09IHRydWUgPyAoaXNNdXRlID0gZmFsc2UpIDogKGlzTXV0ZSA9IHRydWUpO1xyXG4gICAgbXVzaWNzLmZvckVhY2goKG11c2ljKSA9PiB7XHJcbiAgICAgIGlzTXV0ZSA9PT0gdHJ1ZSA/IChtdXNpYy52b2x1bWUgPSAwKSA6IChtdXNpYy52b2x1bWUgPSBtdXNpY1ZvbHVtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XHJcbiAgICBjdXJyZW50TXVzaWMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbW91bnRNdXNpY3MpO1xyXG4gICAgbXVzaWNzLmZvckVhY2goKG11c2ljKSA9PiB7XHJcbiAgICAgIG11c2ljLnBhdXNlKCk7XHJcbiAgICAgIG11c2ljLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgbXVzaWMucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBwbGF5TmV4dE11c2ljKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheU1lbnVNdXNpYygpIHtcclxuICAgIG1lbnVNdXNpYy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBtZW51TXVzaWMucGxheSgpO1xyXG5cclxuICAgIG1lbnVNdXNpYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHBsYXlNZW51TXVzaWMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RvcE1lbnVNdXNpYygpIHtcclxuICAgIG1lbnVNdXNpYy5wYXVzZSgpO1xyXG4gICAgbWVudU11c2ljLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU1lbnVNdXNpYyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TWVudVNvdW5kKCkge1xyXG4gICAgbWVudVNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIG1lbnVTb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5R2FtZU92ZXJNdXNpYygpIHtcclxuICAgIGdhbWVvdmVyTXVzaWMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZ2FtZW92ZXJNdXNpYy5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wR2FtZW92ZXJNdXNpYygpIHtcclxuICAgIGdhbWVvdmVyTXVzaWMucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbignbXV0ZScsIG11dGUpO1xyXG4gIGV2ZW50cy5vbigncGxheScsIHBsYXkpO1xyXG4gIGV2ZW50cy5vbignc3RvcCcsIHN0b3ApO1xyXG4gIGV2ZW50cy5vbignbWVudVNvdW5kJywgcGxheU1lbnVTb3VuZCk7XHJcbiAgZXZlbnRzLm9uKCdwbGF5TWVudU11c2ljJywgcGxheU1lbnVNdXNpYyk7XHJcbiAgZXZlbnRzLm9uKCdzdG9wTWVudU11c2ljJywgc3RvcE1lbnVNdXNpYyk7XHJcbiAgZXZlbnRzLm9uKCdnYW1lb3Zlck11c2ljJywgcGxheUdhbWVPdmVyTXVzaWMpO1xyXG4gIGV2ZW50cy5vbignc3RvcEdhbWVPdmVyTXVzaWMnLCBzdG9wR2FtZW92ZXJNdXNpYyk7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtdXNpY0NvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBiYWNrZ3JvdW5kTXVzaWMxIGZyb20gJy4vYmFja2dyb3VuZC0xLm1wMyc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kTXVzaWMyIGZyb20gJy4vYmFja2dyb3VuZC0yLm1wMyc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kTXVzaWMzIGZyb20gJy4vYmFja2dyb3VuZC0zLm9nZyc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kTXVzaWM0IGZyb20gJy4vYmFja2dyb3VuZC00Lm1wMyc7XHJcbmltcG9ydCBleHBsb3Npb25fc291bmQgZnJvbSAnLi9leHBsb3Npb24ud2F2JztcclxuaW1wb3J0IHN0ZWFtX3NvdW5kIGZyb20gJy4vc3RlYW0ud2F2JztcclxuaW1wb3J0IG1lbnVfc2VsZWN0aW9uIGZyb20gJy4vbWVudV9zZWxlY3Rpb24ud2F2JztcclxuaW1wb3J0IG1lbnVfbXVzaWMgZnJvbSAnLi9tZW51LW11c2ljLm1wMyc7XHJcbmltcG9ydCBnYW1lb3Zlck11c2ljIGZyb20gJy4vZ2FtZW92ZXIud2F2JztcclxuXHJcbmNvbnN0IHNvdW5kcyA9IHtcclxuICBtdXNpYzE6IGJhY2tncm91bmRNdXNpYzEsXHJcbiAgbXVzaWMyOiBiYWNrZ3JvdW5kTXVzaWMyLFxyXG4gIG11c2ljMzogYmFja2dyb3VuZE11c2ljMyxcclxuICBtdXNpYzQ6IGJhY2tncm91bmRNdXNpYzQsXHJcbiAgZXhwbG9zaW9uOiBleHBsb3Npb25fc291bmQsXHJcbiAgc3RlYW06IHN0ZWFtX3NvdW5kLFxyXG4gIG1lbnVTZWxlY3Rpb246IG1lbnVfc2VsZWN0aW9uLFxyXG4gIG1lbnVNdXNpYzogbWVudV9tdXNpYyxcclxuICBnYW1lb3Zlck11c2ljOiBnYW1lb3Zlck11c2ljLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc291bmRzO1xyXG4iLCJpbXBvcnQgZXhwbG9zaW9uX3BuZyBmcm9tICcuL2Jvb20ucG5nJztcclxuaW1wb3J0IHJhdmVuX3BuZyBmcm9tICcuL3JhdmVuLnBuZyc7XHJcblxyXG5jb25zdCBhc3NldHMgPSB7XHJcbiAgZXhwbG9zaW9uOiBleHBsb3Npb25fcG5nLFxyXG4gIHJhdmVuOiByYXZlbl9wbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3NldHM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH0gKi9cclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUmF2ZW4gZnJvbSAnLi9jbGFzcy9yYXZlbi5qcyc7XHJcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL2NsYXNzL3BhcnRpY2xlLmpzJztcclxuaW1wb3J0IEV4cGxvc2lvbiBmcm9tICcuL2NsYXNzL2V4cGxvc2lvbi5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJzdWIvcHVic3ViLmpzJztcclxuaW1wb3J0IG11c2ljQ29udHJvbGxlciBmcm9tICcuL3NvdW5kcy9tdXNpY0NvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgRG9tIGZyb20gJy4vZG9tL2RvbSc7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzMScpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5jb25zdCBjb2xpc2lvbkNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xpc2lvbkNhbnZhcycpO1xyXG5jb25zdCBjb2xpc2lvbkN0eCA9IGNvbGlzaW9uQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbGlzaW9uQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNvbGlzaW9uQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmNvbnN0IHJhdmVuSW50ZXJ2YWwgPSA1MDA7XHJcbmxldCB0aW1lVG9OZXh0UmF2ZW4gPSAwO1xyXG5sZXQgbGFzdFRpbWUgPSAwO1xyXG5sZXQgc2NvcmUgPSAwO1xyXG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcclxubGV0IGlzUGF1c2UgPSBmYWxzZTtcclxubGV0IHJhdmVucyA9IFtdO1xyXG5sZXQgZXhwbG9zaW9ucyA9IFtdO1xyXG5sZXQgcGFydGljbGVzID0gW107XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKHRpbWVzdGFtcCA9IDApIHtcclxuICBsZXQgZGVsdGFUaW1lID0gdGltZXN0YW1wIC0gbGFzdFRpbWU7XHJcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgdGltZVRvTmV4dFJhdmVuICs9IGRlbHRhVGltZTtcclxuXHJcbiAgaWYgKHRpbWVUb05leHRSYXZlbiA+IHJhdmVuSW50ZXJ2YWwpIHtcclxuICAgIHRpbWVUb05leHRSYXZlbiA9IDA7XHJcbiAgICByYXZlbnMucHVzaChuZXcgUmF2ZW4oY3R4LCBjYW52YXMsIGNvbGlzaW9uQ3R4KSk7XHJcbiAgICByYXZlbnMuc29ydCgoYSwgYikgPT4gYS53aWR0aCAtIGIud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDYW52YXMoKTtcclxuICBkcmF3U2NvcmUoKTtcclxuICB1cGRhdGVFbGVtZW50cyhkZWx0YVRpbWUpO1xyXG4gIGRyYXdFTGVtZW50cygpO1xyXG4gIHJlbW92ZUVsZW1lbnRzKCk7XHJcblxyXG4gIGlmICghaXNQYXVzZSAmJiAhZ2FtZU92ZXIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICBpZiAoZ2FtZU92ZXIpIHtcclxuICAgIGV2ZW50cy5lbWl0KCdvcGVuR2FtZU92ZXJTY3JlZW4nLCBzY29yZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgY29saXNpb25DdHguY2xlYXJSZWN0KDAsIDAsIGNvbGlzaW9uQ2FudmFzLndpZHRoLCBjb2xpc2lvbkNhbnZhcy5oZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U2NvcmUoKSB7XHJcbiAgY3R4LmZvbnQgPSAnNDBweCBpbXBhY3QnO1xyXG4gIGN0eC5maWxsU3R5bGUgPSAnIzQ0NDQ0OSc7XHJcbiAgY3R4LmZpbGxUZXh0KCdTY29yZTogJyArIHNjb3JlLCA1NCwgNzUpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSAnIzU1NSc7XHJcbiAgY3R4LmZpbGxUZXh0KCdTY29yZTogJyArIHNjb3JlLCA1MywgNzYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyhkZWx0YVRpbWUpIHtcclxuICBbLi4ucGFydGljbGVzLCAuLi5yYXZlbnMsIC4uLmV4cGxvc2lvbnNdLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgb2JqLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3RUxlbWVudHMoKSB7XHJcbiAgWy4uLnBhcnRpY2xlcywgLi4ucmF2ZW5zLCAuLi5leHBsb3Npb25zXS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIG9iai5kcmF3KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzKCkge1xyXG4gIHJhdmVucyA9IHJhdmVucy5maWx0ZXIoKG9iaikgPT4gIW9iai5tYXJrZWRGb3JEZWxldGlvbik7XHJcbiAgZXhwbG9zaW9ucyA9IGV4cGxvc2lvbnMuZmlsdGVyKChvYmopID0+ICFvYmoubWFya2VkRm9yRGVsZXRpb24pO1xyXG4gIHBhcnRpY2xlcyA9IHBhcnRpY2xlcy5maWx0ZXIoKG9iaikgPT4gIW9iai5tYXJrZWRGb3JEZWxldGlvbik7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldikgPT4ge1xyXG4gIGlmIChldi5rZXkgPT09ICdwJykge1xyXG4gICAgaXNQYXVzZSA9PT0gdHJ1ZSA/IChpc1BhdXNlID0gZmFsc2UpIDogKGlzUGF1c2UgPSB0cnVlKTtcclxuICAgIHJlc3VtZUdhbWUoKTtcclxuICB9XHJcblxyXG4gIGlmIChldi5rZXkgPT09ICdtJykge1xyXG4gICAgZXZlbnRzLmVtaXQoJ211dGUnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVzdW1lR2FtZSgpIHtcclxuICBpZiAoIWlzUGF1c2UgJiYgIWdhbWVPdmVyKSB7XHJcbiAgICBhbmltYXRlKCk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcclxuICBpZiAoaXNQYXVzZSkgcmV0dXJuO1xyXG4gIGRldGVjdENvbGlzaW9uKGV2KTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gIHJlemlzZUNhbnZhcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGRldGVjdENvbGlzaW9uKGV2KSB7XHJcbiAgY29uc3QgZGV0ZWNQaXhlbENvbG9yID0gY29saXNpb25DdHguZ2V0SW1hZ2VEYXRhKGV2LngsIGV2LnksIDEsIDEpO1xyXG4gIGNvbnN0IHBjID0gZGV0ZWNQaXhlbENvbG9yLmRhdGE7XHJcblxyXG4gIGZvciAobGV0IGkgaW4gcmF2ZW5zKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHBjWzBdID09PSByYXZlbnNbaV0ucmFuZG9tQ29sb3JzWzBdICYmXHJcbiAgICAgIHBjWzFdID09PSByYXZlbnNbaV0ucmFuZG9tQ29sb3JzWzFdICYmXHJcbiAgICAgIHBjWzJdID09PSByYXZlbnNbaV0ucmFuZG9tQ29sb3JzWzJdXHJcbiAgICApIHtcclxuICAgICAgcmF2ZW5zW2ldLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcclxuICAgICAgZXhwbG9zaW9ucy5wdXNoKFxyXG4gICAgICAgIG5ldyBFeHBsb3Npb24oXHJcbiAgICAgICAgICByYXZlbnNbaV0ueCxcclxuICAgICAgICAgIHJhdmVuc1tpXS55LFxyXG4gICAgICAgICAgcmF2ZW5zW2ldLndpZHRoLFxyXG4gICAgICAgICAgcmF2ZW5zW2ldLmhhc1BhcnRpY2xlLFxyXG4gICAgICAgICAgY3R4XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJhdmVuc1tpXS5oYXNQYXJ0aWNsZSkgc2NvcmUgKz0gMjtcclxuICAgICAgZWxzZSBzY29yZSsrO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXppc2VDYW52YXMoKSB7XHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICBjb2xpc2lvbkNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbGlzaW9uQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICBkcmF3RUxlbWVudHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3UGFydGljbGUoeyB4LCB5LCB3aWR0aCwgY29sb3IgfSkge1xyXG4gIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh4LCB5LCB3aWR0aCwgY29sb3IsIGN0eCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRHYW1lT3ZlcigpIHtcclxuICBnYW1lT3ZlciA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gIGxhc3RUaW1lID0gMDtcclxuICBzY29yZSA9IDA7XHJcbiAgZ2FtZU92ZXIgPSBmYWxzZTtcclxuICBpc1BhdXNlID0gZmFsc2U7XHJcbiAgcmF2ZW5zID0gW107XHJcbiAgZXhwbG9zaW9ucyA9IFtdO1xyXG4gIHBhcnRpY2xlcyA9IFtdO1xyXG4gIHRpbWVUb05leHRSYXZlbiA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICByZXNldCgpO1xyXG4gIGFuaW1hdGUoKTtcclxufVxyXG5cclxuZXZlbnRzLm9uKCduZXcgUGFydGljbGUnLCBuZXdQYXJ0aWNsZSk7XHJcbmV2ZW50cy5vbignYW5pbWF0ZScsIGFuaW1hdGUpO1xyXG5ldmVudHMub24oJ2dhbWVvdmVyJywgc2V0R2FtZU92ZXIpO1xyXG5ldmVudHMub24oJ3Jlc2V0R2FtZScsIHJlc2V0KTtcclxuZXZlbnRzLm9uKCdjbGVhckNhbnZhcycsIGNsZWFyQ2FudmFzKTtcclxuZXZlbnRzLm9uKCdzdGFydEdhbWUnLCBzdGFydEdhbWUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=