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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB;wEACsE;EACtE,iBAAiB;AACnB;;AAEA;EACE,yDAA+C;EAC/C,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,qDAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,aAAa;;EAEb,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;;EAEnB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;EAEZ,6CAA6C;AAC/C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;;EAExB,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB;EACrB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;;EAEjB,gEAAgE;EAChE,iCAAiC;AACnC;;AAEA;EACE,4CAA4C;EAC5C,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  background-image: url(background/landscape.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n#canvas1 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: url('./sprites/pointer.png'), auto;\r\n}\r\n\r\n#colisionCanvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.container {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n  padding: 1rem;\r\n\r\n  background-color: #222222e2;\r\n}\r\n\r\n.modal {\r\n  position: relative;\r\n  border: 1px solid white;\r\n  height: 300px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border-radius: 2rem;\r\n\r\n  background-color: #1b487431;\r\n  box-shadow: 1px 1px 5px #2c6ba3cc;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n  font-family: 'Bungee', cursive;\r\n  font-size: 3rem;\r\n  color: white;\r\n\r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.title-special {\r\n  font-size: 4rem;\r\n}\r\n\r\n.title-special::after {\r\n  position: absolute;\r\n  content: 'Shot';\r\n  font-size: 2.5rem;\r\n  color: rgb(71, 122, 205);\r\n\r\n  transform: translate(-70%, 50%) rotate(-10deg);\r\n}\r\n\r\n.transtale {\r\n  position: absolute;\r\n  transform: translate(6rem, 2rem) rotate(-20deg);\r\n}\r\n\r\n.button {\r\n  font-size: 1.2rem;\r\n  border: 1px solid white;\r\n  padding: 0.5rem 2rem;\r\n  border-radius: 0.5rem;\r\n  background-color: transparent;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n\r\n  transition: transform 0.8s ease-out, box-shadow 0.5s ease-in-out;\r\n  box-shadow: 1px 1px 1px #1d7ccfcc;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) translate(-5px, -5px);\r\n  box-shadow: 3px 3px 3px #2c6ba3cc;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(1);\r\n  box-shadow: inset 2px 2px 5px #00000090;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.score {\r\n  margin: -20px 0 30px 0;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  font-weight: bold;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0MscUJBQXFCLDBEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQU07QUFDTix5REFBTTtBQUNOLHlEQUFNO0FBQ04seURBQU07QUFDTix5REFBTTtBQUNOLHlEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2NsYXNzL2V4cGxvc2lvbi5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvLi9zcmMvY2xhc3MvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2NsYXNzL3JhdmVuLmpzIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3B1YnN1Yi9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3NvdW5kcy9tdXNpY0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3NvdW5kcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lLy4vc3JjL3Nwcml0ZXMvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9pbnRfc2hvdF9nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb2ludF9zaG90X2dhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvaW50X3Nob3RfZ2FtZS8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kL2xhbmRzY2FwZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3Nwcml0ZXMvcG9pbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcclxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NhbnZhczEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSksIGF1dG87XHJcbn1cclxuXHJcbiNjb2xpc2lvbkNhbnZhcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyZTI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNDg3NDMxO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMyYzZiYTNjYztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcclxufVxyXG5cclxuLnRpdGxlLXNwZWNpYWwge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuLnRpdGxlLXNwZWNpYWw6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJ1Nob3QnO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGNvbG9yOiByZ2IoNzEsIDEyMiwgMjA1KTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgNTAlKSByb3RhdGUoLTEwZGVnKTtcclxufVxyXG5cclxuLnRyYW5zdGFsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZyZW0sIDJyZW0pIHJvdGF0ZSgtMjBkZWcpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMWQ3Y2NmY2M7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlKC01cHgsIC01cHgpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICMyYzZiYTNjYztcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggIzAwMDAwMDkwO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2NvcmUge1xyXG4gIG1hcmdpbjogLTIwcHggMCAzMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEI7d0VBQ3NFO0VBQ3RFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFEQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhOztFQUViLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLDJCQUEyQjtFQUMzQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZOztFQUVaLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7O0VBRXhCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixnRUFBZ0U7RUFDaEUsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYmFja2dyb3VuZC9sYW5kc2NhcGUucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNjYW52YXMxIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogdXJsKCcuL3Nwcml0ZXMvcG9pbnRlci5wbmcnKSwgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbGlzaW9uQ2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyZTI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0ODc0MzE7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMmM2YmEzY2M7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zcGVjaWFsIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXNwZWNpYWw6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6ICdTaG90JztcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6IHJnYig3MSwgMTIyLCAyMDUpO1xcclxcblxcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgNTAlKSByb3RhdGUoLTEwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zdGFsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cmVtLCAycmVtKSByb3RhdGUoLTIwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMxZDdjY2ZjYztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICMyYzZiYTNjYztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4ICMwMDAwMDA5MDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUge1xcclxcbiAgbWFyZ2luOiAtMjBweCAwIDMwcHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFzc2V0cyBmcm9tICcuLi9zcHJpdGVzL3Nwcml0ZXMuanMnO1xyXG5pbXBvcnQgc291bmRzIGZyb20gJy4uL3NvdW5kcy9zb3VuZHMuanMnO1xyXG5cclxuY2xhc3MgRXhwbG9zaW9uIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplLCBoYXNQYXJ0aWNsZSwgY3R4KSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gYXNzZXRzLmV4cGxvc2lvbjtcclxuICAgIHRoaXMuc3ByaXRlV2lkdGggPSAyMDA7XHJcbiAgICB0aGlzLnNwcml0ZWhlaWdodCA9IDE3OTtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5tYXhGcmFtZSA9IDU7XHJcbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCk7XHJcbiAgICB0aGlzLnNvdW5kLnNyYyA9IGhhc1BhcnRpY2xlID09PSB0cnVlID8gc291bmRzLmV4cGxvc2lvbiA6IHNvdW5kcy5zdGVhbTs7XHJcbiAgICB0aGlzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IDA7XHJcbiAgICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxNTA7XHJcbiAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICB0aGlzLnRpbWVTaW5jZUxhc3RGcmFtZSArPSBkZWx0YVRpbWU7XHJcblxyXG4gICAgaWYgKHRoaXMuZnJhbWUgPT09IDApIHRoaXMuc291bmQucGxheSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRpbWVTaW5jZUxhc3RGcmFtZSA+IHRoaXMuZnJhbWVJbnRlcnZhbCkge1xyXG4gICAgICB0aGlzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IDA7XHJcbiAgICAgIHRoaXMuZnJhbWUrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA+IHRoaXMubWF4RnJhbWUpIHtcclxuICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmZyYW1lICogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgdGhpcy5zcHJpdGVoZWlnaHQsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLnNpemUsXHJcbiAgICAgIHRoaXMuc2l6ZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvc2lvbjtcclxuIiwiY2xhc3MgUGFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHNpemUsIGNvbG9yLCBjdHgpIHtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLnggPSB4ICsgdGhpcy5zaXplIC8gMiArIE1hdGgucmFuZG9tKCkgKiAzMCAtIDIwO1xyXG4gICAgdGhpcy55ID0geSArIHRoaXMuc2l6ZSAvIDMgKyBNYXRoLnJhbmRvbSgpICogMzAgLSAyMDtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2l6ZSAqIDAuMTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDIwICsgMzU7XHJcbiAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVkWCA9IE1hdGgucmFuZG9tKCkgKiAxICsgMC41O1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XHJcbiAgICB0aGlzLnJhZGl1cyArPSAwLjM7XHJcbiAgICBpZiAodGhpcy5yYWRpdXMgPiB0aGlzLm1heFJhZGl1cyAtIDUpIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMSAtIHRoaXMucmFkaXVzIC8gdGhpcy5tYXhSYWRpdXM7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZTtcclxuIiwiaW1wb3J0IGFzc2V0cyBmcm9tICcuLi9zcHJpdGVzL3Nwcml0ZXMuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uL3B1YnN1Yi9wdWJzdWIuanMnO1xyXG5cclxuY2xhc3MgUmF2ZW4ge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzLCBjb2xpc2lvbkN0eCkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuY29saXNpb25DdHggPSBjb2xpc2lvbkN0eDtcclxuICAgIHRoaXMuc3ByaXRlV2lkdGggPSAyNzE7XHJcbiAgICB0aGlzLnNwcml0ZWhlaWdodCA9IDE5NDtcclxuICAgIHRoaXMuc2l6ZU1vZGlmaWVyID0gY2FudmFzLmhlaWdodCA+IDQwMCA/IE1hdGgucmFuZG9tKCkgKiAwLjQgKyAwLjQgOiBNYXRoLnJhbmRvbSgpICogMC4zICsgMC4yO1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuc3ByaXRlV2lkdGggKiB0aGlzLnNpemVNb2RpZmllcjtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zcHJpdGVoZWlnaHQgKiB0aGlzLnNpemVNb2RpZmllcjtcclxuICAgIHRoaXMueCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmRpcmVjdGlvblggPSBNYXRoLnJhbmRvbSgpICogMyArIDM7XHJcbiAgICB0aGlzLmRpcmVjdGlvblkgPSBNYXRoLnJhbmRvbSgpICogMiAtIDEuNTtcclxuICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gYXNzZXRzLnJhdmVuO1xyXG4gICAgdGhpcy5mbGFwU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogOCArIDU7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMubWF4RnJhbWUgPSA2O1xyXG4gICAgdGhpcy50aW1lU2luY2VmbGFwID0gMDtcclxuICAgIHRoaXMuZmxhcEludGVydmFsID0gTWF0aC5yYW5kb20oKSAqIDUwICsgNTA7XHJcbiAgICB0aGlzLnJhbmRvbUNvbG9ycyA9IFtcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSxcclxuICAgIF07XHJcbiAgICB0aGlzLmNvbG9yID0gYHJnYigke3RoaXMucmFuZG9tQ29sb3JzWzBdfSwgJHt0aGlzLnJhbmRvbUNvbG9yc1sxXX0sICR7dGhpcy5yYW5kb21Db2xvcnNbMl19LCAzMClgO1xyXG4gICAgdGhpcy5oYXNQYXJ0aWNsZSA9IE1hdGgucmFuZG9tKCkgKiAxMCA+IDc7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICB0aGlzLnggLT0gdGhpcy5kaXJlY3Rpb25YO1xyXG4gICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0aW9uWTtcclxuXHJcbiAgICBpZiAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLndpZHRoKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IHRoaXMuZGlyZWN0aW9uWSAqIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZVNpbmNlZmxhcCArPSBkZWx0YVRpbWU7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZVNpbmNlZmxhcCA+IHRoaXMuZmxhcEludGVydmFsKSB7XHJcbiAgICAgIHRoaXMudGltZVNpbmNlZmxhcCA9IDA7XHJcbiAgICAgIHRoaXMuZnJhbWUrKztcclxuXHJcbiAgICAgIGlmICh0aGlzLmhhc1BhcnRpY2xlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgIGV2ZW50cy5lbWl0KCduZXcgUGFydGljbGUnLCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMueCxcclxuICAgICAgICAgICAgeTogdGhpcy55LFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mcmFtZSA+PSB0aGlzLm1heEZyYW1lKSB0aGlzLmZyYW1lID0gMDtcclxuXHJcbiAgICBpZiAodGhpcy54IDwgLXRoaXMud2lkdGgpIHtcclxuICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICAgIGV2ZW50cy5lbWl0KCdnYW1lb3ZlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY29saXNpb25DdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIHRoaXMuY29saXNpb25DdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5mcmFtZSAqIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIHRoaXMuc3ByaXRlaGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXZlbjtcclxuIiwiY29uc3QgZ2FtZVN0YXJ0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZ2FtZVN0YXJ0TW9kYWwuaW5uZXJIVE1MID0gYCBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZS1zcGVjaWFsIHRpdGxlXCI+UmF2ZW48L2gxPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInN0YXJ0LWdhbWUtYnRuXCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IGdhbWVPdmVyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmdhbWVPdmVyTW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkdhbWUgT3ZlcjwvaDE+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZVwiPjwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJyZXNldC1nYW1lXCI+TWFpbiBNZW51PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBnYW1lU3RhcnRNb2RhbDogZ2FtZVN0YXJ0TW9kYWwsXHJcbiAgZ2FtZU92ZXJNb2RhbDogZ2FtZU92ZXJNb2RhbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHM7XHJcbiIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50cyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi4vcHVic3ViL3B1YnN1Yic7XHJcblxyXG5jb25zdCBEb20gPSAoKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW5pdGlhbFNjcmVlbiA9IGNvbXBvbmVudHMuZ2FtZVN0YXJ0TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBjb21wb25lbnRzLmdhbWVPdmVyTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBpbml0aWFsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1nYW1lLWJ0bicpO1xyXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZ2FtZU92ZXJTY3JlZW4ucXVlcnlTZWxlY3RvcignI3Jlc2V0LWdhbWUnKTtcclxuICBjb25zdCBzY29yZUVsZW1lbnQgPSBnYW1lT3ZlclNjcmVlbi5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkSW5pdGlhbFNjcmVlbkV2ZW50cygpIHtcclxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEdhbWVvdmVyU2NyZWVuRXZlbnRzKCkge1xyXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVJbml0aWFsU2NyZWVuRXZlbnRzKCkge1xyXG4gICAgc3RhcnRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlR2FtZW92ZXJTY3JlZW5FdmVudHMoKSB7XHJcbiAgICByZXNldEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2NyZWVuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHJlbW92ZUluaXRpYWxTY3JlZW5FdmVudHMoKTtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wTWVudU11c2ljJyk7XHJcbiAgICBldmVudHMuZW1pdCgnbWVudVNvdW5kJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2xvc2UoKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ3BsYXknKTtcclxuICAgICAgZXZlbnRzLmVtaXQoJ3N0YXJ0R2FtZScpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0U2NyZWVuKCkge1xyXG4gICAgcmVtb3ZlR2FtZW92ZXJTY3JlZW5FdmVudHMoKTtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wR2FtZU92ZXJNdXNpYycpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ21lbnVTb3VuZCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNsb3NlKCk7XHJcbiAgICAgIG9wZW5Jbml0aWFsU2NyZWVuKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuR2FtZU92ZXJTY3JlZW4oc2NvcmUpIHtcclxuICAgIGV2ZW50cy5lbWl0KCdzdG9wJyk7XHJcbiAgICBldmVudHMuZW1pdCgnZ2FtZW92ZXJNdXNpYycpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnU2NvcmU6ICcgKyBzY29yZTtcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XHJcbiAgICAgIGFkZEdhbWVvdmVyU2NyZWVuRXZlbnRzKCk7XHJcbiAgICAgIG9wZW4oKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbkluaXRpYWxTY3JlZW4oKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbml0aWFsU2NyZWVuKTtcclxuICAgIGV2ZW50cy5lbWl0KCdjbGVhckNhbnZhcycpO1xyXG4gICAgZXZlbnRzLmVtaXQoJ3BsYXlNZW51TXVzaWMnKTtcclxuICAgIGFkZEluaXRpYWxTY3JlZW5FdmVudHMoKTtcclxuICAgIG9wZW4oKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5vbignb3BlbkdhbWVPdmVyU2NyZWVuJywgb3BlbkdhbWVPdmVyU2NyZWVuKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBvcGVuSW5pdGlhbFNjcmVlbigpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9tO1xyXG4iLCJjb25zdCBldmVudHMgPSB7XHJcbiAgZXZlbnRzOiB7fSxcclxuICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICB9LFxyXG4gIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGZvciAoZWxlbWVudCBpbiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1bZWxlbWVudF0gPT09IGZuKSB7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShlbGVtZW50LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYCR7ZXZlbnROYW1lfSBkb2Vzbid0IGV4aXN0YCk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcclxuIiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9wdWJzdWIvcHVic3ViJztcclxuaW1wb3J0IHNvdW5kcyBmcm9tICcuL3NvdW5kcy5qcyc7XHJcblxyXG5jb25zdCBtdXNpY0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGJhY2tncm91ZE11c2ljMSA9IG5ldyBBdWRpbyhzb3VuZHMubXVzaWMxKTtcclxuICBjb25zdCBiYWNrZ3JvdWRNdXNpYzIgPSBuZXcgQXVkaW8oc291bmRzLm11c2ljMik7XHJcbiAgY29uc3QgYmFja2dyb3VkTXVzaWMzID0gbmV3IEF1ZGlvKHNvdW5kcy5tdXNpYzMpO1xyXG4gIGNvbnN0IGJhY2tncm91ZE11c2ljNCA9IG5ldyBBdWRpbyhzb3VuZHMubXVzaWM0KTtcclxuICBjb25zdCBtZW51U291bmQgPSBuZXcgQXVkaW8oc291bmRzLm1lbnVTZWxlY3Rpb24pO1xyXG4gIGNvbnN0IG1lbnVNdXNpYyA9IG5ldyBBdWRpbyhzb3VuZHMubWVudU11c2ljKTtcclxuICBjb25zdCBnYW1lb3Zlck11c2ljID0gbmV3IEF1ZGlvKHNvdW5kcy5nYW1lb3Zlck11c2ljKTtcclxuICBjb25zdCBtdXNpY3MgPSBbXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzEsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzIsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzMsXHJcbiAgICBiYWNrZ3JvdWRNdXNpYzQsXHJcbiAgXTtcclxuICBjb25zdCBhbW91bnRNdXNpY3MgPSBtdXNpY3MubGVuZ3RoO1xyXG4gIGxldCBjdXJyZW50TXVzaWMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbW91bnRNdXNpY3MpO1xyXG4gIGxldCBtdXNpY1ZvbHVtZSA9IDAuNDtcclxuICBsZXQgaXNNdXRlID0gZmFsc2U7XHJcblxyXG4gIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgbXVzaWMudm9sdW1lID0gbXVzaWNWb2x1bWU7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICBpZiAoY3VycmVudE11c2ljID49IGFtb3VudE11c2ljcykgY3VycmVudE11c2ljID0gMDtcclxuICAgIG11c2ljc1tjdXJyZW50TXVzaWNdLnBsYXkoKTtcclxuICAgIG11c2ljc1tjdXJyZW50TXVzaWNdLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRNdXNpYyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5TmV4dE11c2ljKCkge1xyXG4gICAgY3VycmVudE11c2ljKys7XHJcbiAgICBwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtdXRlKCkge1xyXG4gICAgaXNNdXRlID09PSB0cnVlID8gKGlzTXV0ZSA9IGZhbHNlKSA6IChpc011dGUgPSB0cnVlKTtcclxuICAgIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgICBpc011dGUgPT09IHRydWUgPyAobXVzaWMudm9sdW1lID0gMCkgOiAobXVzaWMudm9sdW1lID0gbXVzaWNWb2x1bWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdG9wKCkge1xyXG4gICAgY3VycmVudE11c2ljID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW1vdW50TXVzaWNzKTtcclxuICAgIG11c2ljcy5mb3JFYWNoKChtdXNpYykgPT4ge1xyXG4gICAgICBtdXNpYy5wYXVzZSgpO1xyXG4gICAgICBtdXNpYy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIG11c2ljLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRNdXNpYyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlNZW51TXVzaWMoKSB7XHJcbiAgICBtZW51TXVzaWMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgbWVudU11c2ljLnBsYXkoKTtcclxuXHJcbiAgICBtZW51TXVzaWMuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBwbGF5TWVudU11c2ljKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0b3BNZW51TXVzaWMoKSB7XHJcbiAgICBtZW51TXVzaWMucGF1c2UoKTtcclxuICAgIG1lbnVNdXNpYy5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHBsYXlNZW51TXVzaWMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheU1lbnVTb3VuZCgpIHtcclxuICAgIG1lbnVTb3VuZC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBtZW51U291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheUdhbWVPdmVyTXVzaWMoKSB7XHJcbiAgICBnYW1lb3Zlck11c2ljLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGdhbWVvdmVyTXVzaWMucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RvcEdhbWVvdmVyTXVzaWMoKSB7XHJcbiAgICBnYW1lb3Zlck11c2ljLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMub24oJ211dGUnLCBtdXRlKTtcclxuICBldmVudHMub24oJ3BsYXknLCBwbGF5KTtcclxuICBldmVudHMub24oJ3N0b3AnLCBzdG9wKTtcclxuICBldmVudHMub24oJ21lbnVTb3VuZCcsIHBsYXlNZW51U291bmQpO1xyXG4gIGV2ZW50cy5vbigncGxheU1lbnVNdXNpYycsIHBsYXlNZW51TXVzaWMpO1xyXG4gIGV2ZW50cy5vbignc3RvcE1lbnVNdXNpYycsIHN0b3BNZW51TXVzaWMpO1xyXG4gIGV2ZW50cy5vbignZ2FtZW92ZXJNdXNpYycsIHBsYXlHYW1lT3Zlck11c2ljKTtcclxuICBldmVudHMub24oJ3N0b3BHYW1lT3Zlck11c2ljJywgc3RvcEdhbWVvdmVyTXVzaWMpO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXVzaWNDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgYmFja2dyb3VuZE11c2ljMSBmcm9tICcuL2JhY2tncm91bmQtMS5tcDMnO1xyXG5pbXBvcnQgYmFja2dyb3VuZE11c2ljMiBmcm9tICcuL2JhY2tncm91bmQtMi5tcDMnO1xyXG5pbXBvcnQgYmFja2dyb3VuZE11c2ljMyBmcm9tICcuL2JhY2tncm91bmQtMy5vZ2cnO1xyXG5pbXBvcnQgYmFja2dyb3VuZE11c2ljNCBmcm9tICcuL2JhY2tncm91bmQtNC5tcDMnO1xyXG5pbXBvcnQgZXhwbG9zaW9uX3NvdW5kIGZyb20gJy4vZXhwbG9zaW9uLndhdic7XHJcbmltcG9ydCBzdGVhbV9zb3VuZCBmcm9tICcuL3N0ZWFtLndhdic7XHJcbmltcG9ydCBtZW51X3NlbGVjdGlvbiBmcm9tICcuL21lbnVfc2VsZWN0aW9uLndhdic7XHJcbmltcG9ydCBtZW51X211c2ljIGZyb20gJy4vbWVudS1tdXNpYy5tcDMnO1xyXG5pbXBvcnQgZ2FtZW92ZXJNdXNpYyBmcm9tICcuL2dhbWVvdmVyLndhdic7XHJcblxyXG5jb25zdCBzb3VuZHMgPSB7XHJcbiAgbXVzaWMxOiBiYWNrZ3JvdW5kTXVzaWMxLFxyXG4gIG11c2ljMjogYmFja2dyb3VuZE11c2ljMixcclxuICBtdXNpYzM6IGJhY2tncm91bmRNdXNpYzMsXHJcbiAgbXVzaWM0OiBiYWNrZ3JvdW5kTXVzaWM0LFxyXG4gIGV4cGxvc2lvbjogZXhwbG9zaW9uX3NvdW5kLFxyXG4gIHN0ZWFtOiBzdGVhbV9zb3VuZCxcclxuICBtZW51U2VsZWN0aW9uOiBtZW51X3NlbGVjdGlvbixcclxuICBtZW51TXVzaWM6IG1lbnVfbXVzaWMsXHJcbiAgZ2FtZW92ZXJNdXNpYzogZ2FtZW92ZXJNdXNpYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvdW5kcztcclxuIiwiaW1wb3J0IGV4cGxvc2lvbl9wbmcgZnJvbSAnLi9ib29tLnBuZyc7XHJcbmltcG9ydCByYXZlbl9wbmcgZnJvbSAnLi9yYXZlbi5wbmcnO1xyXG5cclxuY29uc3QgYXNzZXRzID0ge1xyXG4gIGV4cGxvc2lvbjogZXhwbG9zaW9uX3BuZyxcclxuICByYXZlbjogcmF2ZW5fcG5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXNzZXRzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9ICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJhdmVuIGZyb20gJy4vY2xhc3MvcmF2ZW4uanMnO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9jbGFzcy9wYXJ0aWNsZS5qcyc7XHJcbmltcG9ydCBFeHBsb3Npb24gZnJvbSAnLi9jbGFzcy9leHBsb3Npb24uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHVic3ViL3B1YnN1Yi5qcyc7XHJcbmltcG9ydCBtdXNpY0NvbnRyb2xsZXIgZnJvbSAnLi9zb3VuZHMvbXVzaWNDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IERvbSBmcm9tICcuL2RvbS9kb20nO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhczEnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgY29saXNpb25DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29saXNpb25DYW52YXMnKTtcclxuY29uc3QgY29saXNpb25DdHggPSBjb2xpc2lvbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5jb2xpc2lvbkNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jb2xpc2lvbkNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5jb25zdCByYXZlbkludGVydmFsID0gNTAwO1xyXG5sZXQgdGltZVRvTmV4dFJhdmVuID0gMDtcclxubGV0IGxhc3RUaW1lID0gMDtcclxubGV0IHNjb3JlID0gMDtcclxubGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcbmxldCBpc1BhdXNlID0gZmFsc2U7XHJcbmxldCByYXZlbnMgPSBbXTtcclxubGV0IGV4cGxvc2lvbnMgPSBbXTtcclxubGV0IHBhcnRpY2xlcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSh0aW1lc3RhbXAgPSAwKSB7XHJcbiAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xyXG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xyXG4gIHRpbWVUb05leHRSYXZlbiArPSBkZWx0YVRpbWU7XHJcblxyXG4gIGlmICh0aW1lVG9OZXh0UmF2ZW4gPiByYXZlbkludGVydmFsKSB7XHJcbiAgICB0aW1lVG9OZXh0UmF2ZW4gPSAwO1xyXG4gICAgcmF2ZW5zLnB1c2gobmV3IFJhdmVuKGN0eCwgY2FudmFzLCBjb2xpc2lvbkN0eCkpO1xyXG4gICAgcmF2ZW5zLnNvcnQoKGEsIGIpID0+IGEud2lkdGggLSBiLndpZHRoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ2FudmFzKCk7XHJcbiAgZHJhd1Njb3JlKCk7XHJcbiAgdXBkYXRlRWxlbWVudHMoZGVsdGFUaW1lKTtcclxuICBkcmF3RUxlbWVudHMoKTtcclxuICByZW1vdmVFbGVtZW50cygpO1xyXG5cclxuICBpZiAoIWlzUGF1c2UgJiYgIWdhbWVPdmVyKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgaWYgKGdhbWVPdmVyKSB7XHJcbiAgICBldmVudHMuZW1pdCgnb3BlbkdhbWVPdmVyU2NyZWVuJywgc2NvcmUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGNvbGlzaW9uQ3R4LmNsZWFyUmVjdCgwLCAwLCBjb2xpc2lvbkNhbnZhcy53aWR0aCwgY29saXNpb25DYW52YXMuaGVpZ2h0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1Njb3JlKCkge1xyXG4gIGN0eC5mb250ID0gJzQwcHggaW1wYWN0JztcclxuICBjdHguZmlsbFN0eWxlID0gJyM0NDQ0NDknO1xyXG4gIGN0eC5maWxsVGV4dCgnU2NvcmU6ICcgKyBzY29yZSwgNTQsIDc1KTtcclxuICBjdHguZmlsbFN0eWxlID0gJyM1NTUnO1xyXG4gIGN0eC5maWxsVGV4dCgnU2NvcmU6ICcgKyBzY29yZSwgNTMsIDc2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMoZGVsdGFUaW1lKSB7XHJcbiAgWy4uLnBhcnRpY2xlcywgLi4ucmF2ZW5zLCAuLi5leHBsb3Npb25zXS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIG9iai51cGRhdGUoZGVsdGFUaW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0VMZW1lbnRzKCkge1xyXG4gIFsuLi5wYXJ0aWNsZXMsIC4uLnJhdmVucywgLi4uZXhwbG9zaW9uc10uZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBvYmouZHJhdygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50cygpIHtcclxuICByYXZlbnMgPSByYXZlbnMuZmlsdGVyKChvYmopID0+ICFvYmoubWFya2VkRm9yRGVsZXRpb24pO1xyXG4gIGV4cGxvc2lvbnMgPSBleHBsb3Npb25zLmZpbHRlcigob2JqKSA9PiAhb2JqLm1hcmtlZEZvckRlbGV0aW9uKTtcclxuICBwYXJ0aWNsZXMgPSBwYXJ0aWNsZXMuZmlsdGVyKChvYmopID0+ICFvYmoubWFya2VkRm9yRGVsZXRpb24pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXYpID0+IHtcclxuICBpZiAoZXYua2V5ID09PSAncCcpIHtcclxuICAgIGlzUGF1c2UgPT09IHRydWUgPyAoaXNQYXVzZSA9IGZhbHNlKSA6IChpc1BhdXNlID0gdHJ1ZSk7XHJcbiAgICByZXN1bWVHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXYua2V5ID09PSAnbScpIHtcclxuICAgIGV2ZW50cy5lbWl0KCdtdXRlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc3VtZUdhbWUoKSB7XHJcbiAgaWYgKCFpc1BhdXNlICYmICFnYW1lT3Zlcikge1xyXG4gICAgYW5pbWF0ZSgpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgaWYgKGlzUGF1c2UpIHJldHVybjtcclxuICBkZXRlY3RDb2xpc2lvbihldik7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICByZXppc2VDYW52YXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBkZXRlY3RDb2xpc2lvbihldikge1xyXG4gIGNvbnN0IGRldGVjUGl4ZWxDb2xvciA9IGNvbGlzaW9uQ3R4LmdldEltYWdlRGF0YShldi54LCBldi55LCAxLCAxKTtcclxuICBjb25zdCBwYyA9IGRldGVjUGl4ZWxDb2xvci5kYXRhO1xyXG5cclxuICBmb3IgKGxldCBpIGluIHJhdmVucykge1xyXG4gICAgaWYgKFxyXG4gICAgICBwY1swXSA9PT0gcmF2ZW5zW2ldLnJhbmRvbUNvbG9yc1swXSAmJlxyXG4gICAgICBwY1sxXSA9PT0gcmF2ZW5zW2ldLnJhbmRvbUNvbG9yc1sxXSAmJlxyXG4gICAgICBwY1syXSA9PT0gcmF2ZW5zW2ldLnJhbmRvbUNvbG9yc1syXVxyXG4gICAgKSB7XHJcbiAgICAgIHJhdmVuc1tpXS5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XHJcbiAgICAgIGV4cGxvc2lvbnMucHVzaChcclxuICAgICAgICBuZXcgRXhwbG9zaW9uKFxyXG4gICAgICAgICAgcmF2ZW5zW2ldLngsXHJcbiAgICAgICAgICByYXZlbnNbaV0ueSxcclxuICAgICAgICAgIHJhdmVuc1tpXS53aWR0aCxcclxuICAgICAgICAgIHJhdmVuc1tpXS5oYXNQYXJ0aWNsZSxcclxuICAgICAgICAgIGN0eFxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChyYXZlbnNbaV0uaGFzUGFydGljbGUpIHNjb3JlICs9IDI7XHJcbiAgICAgIGVsc2Ugc2NvcmUrKztcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV6aXNlQ2FudmFzKCkge1xyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgY29saXNpb25DYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjb2xpc2lvbkNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgZHJhd0VMZW1lbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1BhcnRpY2xlKHsgeCwgeSwgd2lkdGgsIGNvbG9yIH0pIHtcclxuICBwYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoeCwgeSwgd2lkdGgsIGNvbG9yLCBjdHgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2FtZU92ZXIoKSB7XHJcbiAgZ2FtZU92ZXIgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldCgpIHtcclxuICBsYXN0VGltZSA9IDA7XHJcbiAgc2NvcmUgPSAwO1xyXG4gIGdhbWVPdmVyID0gZmFsc2U7XHJcbiAgaXNQYXVzZSA9IGZhbHNlO1xyXG4gIHJhdmVucyA9IFtdO1xyXG4gIGV4cGxvc2lvbnMgPSBbXTtcclxuICBwYXJ0aWNsZXMgPSBbXTtcclxuICB0aW1lVG9OZXh0UmF2ZW4gPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgcmVzZXQoKTtcclxuICBhbmltYXRlKCk7XHJcbn1cclxuXHJcbmV2ZW50cy5vbignbmV3IFBhcnRpY2xlJywgbmV3UGFydGljbGUpO1xyXG5ldmVudHMub24oJ2FuaW1hdGUnLCBhbmltYXRlKTtcclxuZXZlbnRzLm9uKCdnYW1lb3ZlcicsIHNldEdhbWVPdmVyKTtcclxuZXZlbnRzLm9uKCdyZXNldEdhbWUnLCByZXNldCk7XHJcbmV2ZW50cy5vbignY2xlYXJDYW52YXMnLCBjbGVhckNhbnZhcyk7XHJcbmV2ZW50cy5vbignc3RhcnRHYW1lJywgc3RhcnRHYW1lKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9