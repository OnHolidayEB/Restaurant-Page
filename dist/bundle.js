/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Burgers_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Burgers.ttf */ \"./src/Burgers.ttf\");\n/* harmony import */ var _splash_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.jpeg */ \"./src/splash.jpeg\");\n/* harmony import */ var _louis_splash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./louis-splash.jpeg */ \"./src/louis-splash.jpeg\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Burgers_ttf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_splash_jpeg__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_louis_splash_jpeg__WEBPACK_IMPORTED_MODULE_4__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Burgers';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n\\n\\n#content, html{\\n    font-family: Burgers;\\n    margin: 0;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    \\n}\\n\\nbody{\\n    background-color: rgb(245, 222, 117);\\n    margin: 0;\\n}\\n\\nheader{\\n    display: flex;\\n    position: fixed;\\n    width: 100%;\\n    height: 80px;\\n    justify-content:space-around;\\n    align-items: center;\\n    size: 60px 100vw;\\n    margin: 0;\\n    background: rgba(255,255,255,.8);\\n    z-index: 10;\\n\\n}\\n\\n.headerBtn{\\n    font-size: 33px;\\n    width: 120px;\\n}\\n.headerBtn:hover{\\n    font-size: 38px;\\n    cursor:pointer;\\n}\\n.headerBtn:active{\\n    font-size: 28px;\\n}\\n\\n#titleBtn{\\n    font-size: 66px;\\n    width: 350px;\\n}\\n#titleBtn:hover{\\n    font-size: 70px;\\n    cursor:pointer;\\n}\\n#titleBtn:active {\\n    font-size: 60px;\\n}\\n\\n#main-img{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: flex;\\n    width: auto;\\n    height: 70vh;\\n    overflow: auto;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    margin: 0;\\n    \\n}\\n\\n#main-imgAbout{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    display: flex;\\n    width: auto;\\n    height: 70vh;\\n    overflow: auto;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    margin: 0;\\n    \\n}\\n\\n#text-wrapper{\\n    position: relative;\\n    display:flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 30px;\\n    font-family: Burgers;\\n    background-color: rgba(245, 221, 117, 0.63);\\n    overflow: auto;\\n    text-align: center;\\n    margin: 15px 40px 15px 40px;\\n    overflow: scroll;\\n}\\n\\n#body-text{\\n    margin: 10px 30px 10px 30px;\\n    width: 70vw;\\n}\\n\\n#order{\\n    font-size: 70px;\\n    font-family: Burgers;\\n    display: flex;\\n    justify-content: center;\\n    -webkit-text-fill-color: red;\\n    background-color: rgb(250, 207, 16);\\n    outline-style: none;\\n    border-radius: 10px;\\n    border-color: red;\\n    border-width: 5px ;\\n    border-style: solid;\\n    margin: 10px;\\n    width: fit-content;\\n    padding-left: 5px;\\n    padding-right: 5px;\\n}\\n\\n#order:hover{\\n    font-size: 75px;\\n    cursor: pointer;\\n}\\n\\n#order:active{\\n    font-size: 68px;\\n}\\n\\n#orderBtnMenu{\\n    font-size: 70px;\\n    font-family: Burgers;\\n    align-self: center;\\n    width: fit-content;\\n    -webkit-text-fill-color: red;\\n    background-color: rgb(250, 207, 16);\\n    outline-style: none;\\n    border-radius: 10px;\\n    border-color: red;\\n    border-width: 5px ;\\n    border-style: solid;\\n    margin: 40px 0px 40px 0px;\\n}\\n\\n#orderBtnMenu:hover{\\n    font-size: 75px;\\n    cursor: pointer;\\n}\\n\\n#orderBtnMenu:active{\\n    font-size: 68px;\\n}\\n\\n@media screen and (max-width: 500px) {\\n    #title{\\n        font-size: 45px;\\n    }\\n\\n    #title:hover{\\n        font-size: 48px;\\n        cursor:pointer;\\n    }\\n    #title:active {\\n        font-size: 40px;\\n    }\\n\\n    #order{\\n        font-size: 50px;\\n        width: fit-content;\\n    }\\n\\n    #order:hover{\\n        font-size: 52px;\\n        width: 31vw;\\n        height: 31vw;\\n        cursor:pointer;\\n    }\\n    #order:active{\\n        font-size: 48px;\\n        width: 28vw;\\n        height: 28vw;\\n    }\\n\\n    #main-img{\\n        background-position-x: 60%;\\n\\n    }\\n\\n    #menu{\\n        margin-left: 5px;\\n    }\\n\\n    #about{\\n        margin-right: 5px;\\n        \\n    }\\n\\n    .headerTab{\\n        font-size: 28px;\\n        width: 120px;\\n    }\\n    .headerTab:hover{\\n        font-size: 30px;\\n        cursor:pointer;\\n    }\\n    .headerTab:active{\\n        font-size: 24px;\\n    }\\n\\n    #text-wrapper{\\n        flex-direction: column;\\n\\n    }\\n\\n    \\n}\\n\\n#menu-title{\\n    font-size: 65px;\\n    align-self: center;\\n    text-decoration: underline;\\n    grid-column: 1 / span 2;\\n    grid-row: 1;\\n    width: auto;\\n    height: auto;\\n    border-bottom-left-radius: 0%;\\n    border-bottom-right-radius: 0%;\\n}\\n\\n#menu-wrapper{\\n    display: grid;\\n    position: relative;\\n    top: -50vh;\\n    background-color: rgb(250, 207, 16);\\n    grid-template-columns: 50% 50%;\\n    grid-template-rows: 10% 22% 22% 22% 22%;\\n    width: 60vw;\\n    align-self: center;\\n    box-shadow: 0px 0px 0px 16px #f00;\\n    border-radius: 3px;\\n    margin-bottom: -50vh;\\n}\\n\\n\\n\\n.menu-item{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    height: 20vh;\\n    width: 30vw;\\n    background-color: rgb(250, 207, 16);\\n    border-radius: 5px;\\n    text-align: center;\\n}\\n\\n.item-title{\\n    font-size: 35px;\\n}\\n\\n.item-desc{\\n    font-size: 16px;\\n}\\n\\n.header-tab{\\n    display: flex;\\n    position: relative;\\n    width: 100%;\\n    height: 80px;\\n    justify-content:space-around;\\n    align-items: center;\\n    size: 60px 100vw;\\n    margin: 0;\\n    background: rgba(255,255,255,.8);\\n\\n}\\n\\n#address{\\n    margin-top: 20px;\\n    font-size: 50px;\\n    font-family: Burgers;\\n    width: fit-content;\\n    padding: 5px;\\n    background-color: rgb(250, 207, 16);\\n    border-radius: 10px;\\n    border-color: red;\\n    border-width: 5px ;\\n    border-style: solid;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Burgers.ttf":
/*!*************************!*\
  !*** ./src/Burgers.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10293e31671fffd9d8bf.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/Burgers.ttf?");

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMainImg = () =>{\n    const mainImg = document.createElement('div');\n    mainImg.classList.add('rmDiv');\n    mainImg.id = 'main-imgAbout';\n\n    return mainImg;\n}\n\nconst createTextWrapper = () => {\n    const textWrapper = document.createElement('div');\n    textWrapper.classList.add('rmDiv');\n    textWrapper.id = 'text-wrapper';\n    textWrapper.style.flexDirection = 'column';\n\n    const bodyText = document.createElement('div');\n    bodyText.id = 'main-text';\n    bodyText.innerHTML = \"We are a burger restaraunt that serves burgers.\"\n    bodyText.style.fontSize = '36px';\n\n    const address = document.createElement('div');\n    address.id = 'address';\n    address.innerHTML = '123 Ocean Avenue <br> Burgerville, NJ 16784 <br> 123.456.7891'\n\n    textWrapper.appendChild(bodyText);\n    textWrapper.appendChild(address);\n\n    return textWrapper;\n}\n\n\n\n\n\n\n\nconst aboutPage = () => {\n    const content = document.getElementById('content');\n    content.appendChild(createMainImg());\n    content.appendChild(createTextWrapper());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant/./src/aboutPage.js?");

/***/ }),

/***/ "./src/headerLoader.js":
/*!*****************************!*\
  !*** ./src/headerLoader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n        \n    const header = document.createElement('header');\n    header.id = ('header');\n    \n\n    const menu = document.createElement('div');\n    menu.classList.add('headerBtn');\n    menu.id = 'menu';\n    menu.innerHTML = 'Menu';\n\n\n    const title = document.createElement('div');\n    title.id = 'titleBtn';\n    title.innerHTML = 'Bob\\'s Burgers'\n\n    const about = document.createElement('div');\n    about.classList.add('headerBtn');\n    about.id = 'about';\n    about.innerHTML = 'About Us'\n\n    header.appendChild(menu);\n    header.appendChild(title);\n    header.appendChild(about);\n\n    return header;\n}\n\nconst headerLoader = () => {\n    const content = document.getElementById('content');\n\n   content.appendChild(createHeader());\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerLoader);\n\n\n//# sourceURL=webpack://restaurant/./src/headerLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _splash_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.jpeg */ \"./src/splash.jpeg\");\n/* harmony import */ var _louis_splash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./louis-splash.jpeg */ \"./src/louis-splash.jpeg\");\n/* harmony import */ var _headerLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerLoader */ \"./src/headerLoader.js\");\n/* harmony import */ var _titlePage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titlePage.js */ \"./src/titlePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n\n\n\n\n\n\n\n\n(0,_headerLoader__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_titlePage_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n\nconst eventListeners = (() => {\n    document.getElementById('menu').addEventListener('click', menuClick);\n    document.getElementById('titleBtn').addEventListener('click', titleClick);\n    document.getElementById('about').addEventListener('click', aboutClick);\n\n})();\n\nfunction menuClick(){\n    init();\n    (0,_menuPage__WEBPACK_IMPORTED_MODULE_5__.default)();\n}\n\nfunction titleClick(){\n    init();\n    (0,_titlePage_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n}\n\nfunction aboutClick(){\n    init();\n    (0,_aboutPage__WEBPACK_IMPORTED_MODULE_6__.default)();\n}\n\nfunction init(){\n    const divs = document.querySelectorAll('.rmDiv');\n\n    divs.forEach(div => {\n        div.remove();\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/louis-splash.jpeg":
/*!*******************************!*\
  !*** ./src/louis-splash.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e22a0e32a704b74e605a.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/louis-splash.jpeg?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass menuItem {\n    constructor(title, desc){\n        this.title = title\n        this.desc = desc\n    }\n}\n\nconst headerClass = () =>{\n   const header = document.getElementById('header');\n   header.style.position = \"relative\";\n\n}\nconst createMainImg = () => {\n\n    const mainImg = document.createElement('div');\n    mainImg.id = 'main-img';\n    mainImg.classList.add('rmDiv');\n\n    return mainImg;\n}\n\nconst createMenu = (items) =>{\n\n    //headerClass();\n\n    const wrapper = document.createElement('div');\n    wrapper.id ='menu-wrapper';\n    wrapper.classList.add('rmDiv');\n\n    const menuTitle = document.createElement('div');\n    menuTitle.id='menu-title';\n    menuTitle.classList.add('menu-item');\n    menuTitle.innerHTML = \"Menu\";\n\n    let menuItems = [] \n\n    for (let i = 0; i < items; i++) {\n        const item = new menuItem;\n        menuItems.push(item); \n    }\n    \n    menuItems[0].title = '1. All In A Glaze Work Burger';\n    menuItems[0].desc = '(Served with Balsamic Glaze)';\n\n    menuItems[1].title = '2. Chutney the Front Door Burger';\n    menuItems[1].desc = '(Comes with Mango Chutney)';\n\n    menuItems[2].title = '3. It Takes Bun to Know Bun Burger';\n    menuItems[2].desc = '(Comes on a Fancy Bun)';\n\n    menuItems[3].title = '4. Aw Nuts Burger';\n    menuItems[3].desc = '(Comes with Peanut Butter)';\n\n    menuItems[4].title = '5. The Hand That Rocks the Bagel Burger';\n    menuItems[4].desc = '(Comes with an Everything Bagel)';\n\n    menuItems[5].title = '6. Put Me in Poached Burger';\n    menuItems[5].desc = '(Comes with a Poached Egg)';\n\n    menuItems[6].title = '7. Corned Identity Burger';\n    menuItems[6].desc = '(Comes with Corned Beef)';\n\n    menuItems[7].title = '8. Glory Glory Jalapeno Burger';\n    menuItems[7].desc = '(Comes with Jalapenos)';\n\n\n    menuItems.forEach(item => { \n        const menuItem = document.createElement('div');\n        const title = document.createElement('div');\n        const desc = document.createElement('div');\n\n        menuItem.classList.add(\"menu-item\");\n        title.classList.add('item-title');\n        desc.classList.add('item-desc');\n\n        title.innerHTML = item.title;\n        desc.innerHTML = item.desc;\n\n        wrapper.appendChild(menuTitle);\n        wrapper.appendChild(menuItem);\n        menuItem.appendChild(title);\n        menuItem.appendChild(desc);\n\n        \n\n   })\n\n\n\n\n   return wrapper;\n\n}\n\nconst createOrderButton = () =>{\n    const button = document.createElement('button');\n    button.id = 'orderBtnMenu';\n    button.classList.add('rmDiv');\n    button.innerHTML = \"Order Online\";\n\n    return button;\n}\n\nconst menuPage = () => {\n    const content = document.getElementById('content');\n    content.appendChild(createMainImg());\n    content.appendChild(createMenu(8));\n    content.appendChild(createOrderButton());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://restaurant/./src/menuPage.js?");

/***/ }),

/***/ "./src/splash.jpeg":
/*!*************************!*\
  !*** ./src/splash.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bb69f8e3f7008b2de31.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/splash.jpeg?");

/***/ }),

/***/ "./src/titlePage.js":
/*!**************************!*\
  !*** ./src/titlePage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst headerClass = () =>{\n    const header = document.getElementById('header');\n    header.style.position = \"fixed\";\n \n }\n\n   \nconst createMainImg = () => {\n\n    const mainImg = document.createElement('div');\n    mainImg.id = 'main-img';\n    mainImg.classList.add('rmDiv');\n\n    return mainImg;\n}\n\nconst createTextWrapper = () => {\n\n    const mainText = document.createElement('div');\n    mainText.id = 'text-wrapper';\n    mainText.classList.add('rmDiv');\n\n    const button = document.createElement('button');\n    button.id = 'order';\n    button.innerHTML = \"Order Online\";\n    mainText.appendChild(button);\n\n    const bodyText = document.createElement('div');\n    bodyText.id = 'body-text';\n    bodyText.innerHTML = \"Lorem ipsum dolor sit amet, \\\n            consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, \\\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \\\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \\\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \\id est laborum.\"\n\n    mainText.appendChild(button);\n    mainText.appendChild(bodyText);\n\n    return mainText;\n}\n\n\nconst titlePage = () => {\n    const content = document.getElementById('content');\n\n    headerClass();\n    content.appendChild(createMainImg());\n    content.appendChild(createTextWrapper());\n}\n\n    \n\n\n\n    \n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (titlePage);\n\n//# sourceURL=webpack://restaurant/./src/titlePage.js?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;