/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  font-size: 1.6rem;
  font-family: "Libre Franklin", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2rem;
}

main {
  display: grid;
  max-width: 37.5rem;
  grid-template-areas: "logo" "launch" "inputs" "dashImg" "icons" "copyright";
  justify-items: center;
}

@media screen and (min-width: 600px) {
  main {
    max-width: 700px;
    padding-inline: 5rem;
  }
}
.logo {
  grid-area: logo;
  max-width: 6rem;
  margin-block: 6rem 4rem;
}

@media screen and (min-width: 600px) {
  .logo {
    max-width: 10rem;
  }
}
.intro-info {
  grid-area: launch;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media screen and (min-width: 600px) {
  .intro-info {
    gap: 1rem;
  }
}
.intro-info h1 {
  color: hsl(0, 0%, 59%);
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1px;
}
.intro-info h1 .soon {
  font-weight: 700;
  color: hsl(209, 33%, 12%);
}

@media screen and (min-width: 600px) {
  .intro-info h1 {
    font-size: 4rem;
  }
}
.intro-info p {
  font-size: 1.2rem;
  letter-spacing: 0.1px;
  margin-bottom: 3rem;
}

@media screen and (min-width: 600px) {
  .intro-info p {
    font-size: 1.7rem;
  }
}
.input-container {
  grid-area: inputs;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 34rem;
  gap: 1rem;
}
.input-container input[type=email] {
  height: 4rem;
  width: 100%;
  padding-left: 3rem;
  border: 1px solid hsl(223, 100%, 88%);
  border-radius: 20px;
  font-family: inherit;
}
.input-container input[type=email]:focus {
  outline: none;
}
.input-container input[type=email]::placeholder {
  color: hsl(0, 0%, 59%);
  font-size: 1.1rem;
}
.input-container input[type=email][error=""] {
  border: 1px solid hsl(354, 100%, 66%);
}
.input-container button[type=button] {
  height: 4rem;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  font-family: inherit;
  border-radius: 20px;
  margin-bottom: 7rem;
  box-shadow: 0px 6px 12px hsl(223, 100%, 88%);
}
.input-container button[type=button][closed=""] {
  background: #7ea0f6;
  pointer-events: none;
}
.input-container button[type=button][open=""] {
  background: hsl(223, 87%, 63%);
  pointer-events: all;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
.input-container button[type=button][open=""]:hover {
  background: #7ea0f6;
}

.email-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.errorMsg {
  color: hsl(354, 100%, 66%);
  font-size: 1rem;
  font-style: italic;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}
.errorMsg[error=""] {
  max-height: fit-content;
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 600px) {
  .errorMsg[error=""] {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 600px) {
  .input-container {
    flex-direction: row;
    max-width: unset;
  }
  .input-container input[type=email] {
    width: 40rem;
    margin-left: 1rem;
  }
  .input-container button[type=button] {
    width: 28%;
  }
}
.dash-illustration {
  grid-area: dashImg;
  margin-bottom: 9rem;
}

.icon-container {
  grid-area: icons;
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}
.icon-container i {
  color: hsl(223, 87%, 63%);
  cursor: pointer;
  border: 1px solid hsl(223, 100%, 88%);
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}
.icon-container i:hover {
  background: hsl(223, 87%, 63%);
  border: none;
  color: white;
}

@media screen and (min-width: 600px) {
  .icon-container {
    gap: 1.5rem;
  }
}
.copyright {
  grid-area: copyright;
  color: hsl(0, 0%, 59%);
  font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAkBA;;;EAGI,sBAAA;AAhBJ;;AAkBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAfJ;;AAiBA;EACI,gBAAA;AAdJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAbJ;;AAeA;EACI,iBAAA;EACA,yCApCI;EAqCJ,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AAZJ;;AAcA;EACI,aAAA;EACA,kBAAA;EACA,2EAAA;EACA,qBAAA;AAXJ;;AAaA;EACI;IACI,gBAAA;IACA,oBAAA;EAVN;AACF;AAWA;EACI,eAAA;EACA,eAAA;EACA,uBAAA;AATJ;;AAWA;EACI;IACI,gBAAA;EARN;AACF;AASA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAPJ;;AASA;EACI;IACI,SAAA;EANN;AACF;AAOA;EACI,sBAjEG;EAkEH,gBAAA;EACA,eA/DQ;EAgER,mBAAA;AALJ;AAMI;EACI,gBAAA;EACA,yBAtES;AAkEjB;;AAMA;EACI;IACI,eAAA;EAHN;AACF;AAIA;EACI,iBAAA;EACA,qBAAA;EACA,mBAAA;AAFJ;;AAIA;EACI;IACI,iBAAA;EADN;AACF;AAEA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;AAAJ;AACI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,qCAAA;EACA,mBAAA;EACA,oBAAA;AACR;AAAQ;EACI,aAAA;AAEZ;AADQ;EACI,sBAvGL;EAwGK,iBAAA;AAGZ;AAFQ;EACI,qCAAA;AAIZ;AAHI;EACI,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;EACA,4CAAA;AAKR;AAJQ;EACI,mBAAA;EACA,oBAAA;AAMZ;AALQ;EACI,8BAhIL;EAiIK,mBAAA;EACA,eAAA;EACA,uCAAA;AAOZ;AANY;EACI,mBAAA;AAQhB;;AANA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;AASJ;;AAPA;EACI,0BA1IQ;EA2IR,eAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,gCAAA;AAUJ;AATI;EACI,uBAAA;EACA,qBAAA;AAWR;;AATA;EACI;IACI,gBAAA;EAYN;AACF;AAXA;EACI;IACI,mBAAA;IACA,gBAAA;EAaN;EAZM;IACI,YAAA;IACA,iBAAA;EAcV;EAbM;IACI,UAAA;EAeV;AACF;AAdA;EACI,kBAAA;EACA,mBAAA;AAgBJ;;AAdA;EACI,gBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AAiBJ;AAhBI;EACI,yBAhLD;EAiLC,eAAA;EACA,qCAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gCAAA;AAkBR;AAjBQ;EACI,8BA5LL;EA6LK,YAAA;EACA,YAAA;AAmBZ;;AAjBA;EACI;IACI,WAAA;EAoBN;AACF;AAnBA;EACI,oBAAA;EACA,sBA/LG;EAgMH,eAAA;AAqBJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap')\n// Font Families\n$libre: 'Libre Franklin', sans-serif\n\n// Primary Colors\n$blue: hsl(223, 87%, 63%)\n\n// Secondary Colors\n$pale_blue: hsl(223, 100%, 88%)\n$light_red: hsl(354, 100%, 66%)\n\n// Neutral Colors\n$gray: hsl(0, 0%, 59%)\n$very_dark_blue: hsl(209, 33%, 12%)\n\n// font-sizes\n$font_size: 20px\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: 1.6rem\n    font-family: $libre\n    display: flex\n    flex-direction: column\n    align-items: center\n    position: relative\n    gap: 2rem\n\nmain\n    display: grid\n    max-width: 37.5rem\n    grid-template-areas: \"logo\" \"launch\" \"inputs\" \"dashImg\" \"icons\" \"copyright\"\n    justify-items: center\n\n@media screen and (min-width: 600px)\n    main\n        max-width: 700px\n        padding-inline: 5rem\n\n.logo\n    grid-area: logo\n    max-width: 6rem\n    margin-block: 6rem 4rem\n\n@media screen and (min-width: 600px)\n    .logo\n        max-width: 10rem\n\n.intro-info\n    grid-area: launch\n    display: flex\n    flex-direction: column\n    align-items: center\n    gap: 2rem\n\n@media screen and (min-width: 600px)\n    .intro-info\n        gap: 1rem\n\n.intro-info h1\n    color: $gray\n    font-weight: 300\n    font-size: $font_size\n    letter-spacing: 1px\n    .soon\n        font-weight: 700\n        color: $very_dark_blue\n\n@media screen and (min-width: 600px)\n    .intro-info h1\n        font-size: 4rem\n\n.intro-info p\n    font-size: 1.2rem\n    letter-spacing: .1px\n    margin-bottom: 3rem\n\n@media screen and (min-width: 600px)\n    .intro-info p\n        font-size: 1.7rem\n\n.input-container\n    grid-area: inputs\n    display: flex\n    flex-direction: column\n    width: 100%\n    max-width: 34rem\n    gap: 1rem\n    input[type=\"email\"]\n        height: 4rem\n        width: 100%\n        padding-left: 3rem\n        border: 1px solid $pale_blue\n        border-radius: 20px\n        font-family: inherit\n        &:focus\n            outline: none\n        &::placeholder\n            color: $gray\n            font-size: 1.1rem\n        &[error='']\n            border: 1px solid $light_red          \n    button[type=\"button\"]\n        height: 4rem\n        border: none\n        font-weight: 600\n        font-size: 1.1rem\n        color: white\n        font-family: inherit\n        border-radius: 20px\n        margin-bottom: 7rem\n        box-shadow: 0px 6px 12px $pale_blue\n        &[closed='']\n            background: lighten($blue, 10%)\n            pointer-events: none\n        &[open='']\n            background: $blue\n            pointer-events: all\n            cursor: pointer\n            transition: background 0.2s ease-in-out\n            &:hover\n                background: lighten($blue, 10%)\n\n.email-container\n    display: flex\n    flex-direction: column\n    align-items: center\n    gap: .75rem\n\n.errorMsg\n    color: $light_red\n    font-size: 1rem\n    font-style: italic\n    max-height: 0\n    overflow: hidden\n    transition: all 0.2s ease-in-out\n    &[error='']\n        max-height: fit-content\n        margin-bottom: 1.5rem\n\n@media screen and (min-width: 600px)\n    .errorMsg[error='']\n        margin-bottom: 0\n\n@media screen and (min-width: 600px)\n    .input-container\n        flex-direction: row\n        max-width: unset\n        input[type=\"email\"]\n            width: 40rem\n            margin-left: 1rem\n        button[type=\"button\"]\n            width: 28%\n\n.dash-illustration\n    grid-area: dashImg\n    margin-bottom: 9rem\n\n.icon-container\n    grid-area: icons\n    display: flex\n    gap: 1rem\n    margin-bottom: 3rem\n    i\n        color: $blue\n        cursor: pointer\n        border: 1px solid $pale_blue\n        width: 3rem\n        height: 3rem\n        font-size: 1.4rem\n        display: flex\n        justify-content: center\n        align-items: center\n        border-radius: 50%\n        transition: all 0.2s ease-in-out\n        &:hover\n            background: $blue\n            border: none\n            color: white\n\n@media screen and (min-width: 600px)\n    .icon-container\n        gap: 1.5rem\n\n.copyright\n    grid-area: copyright\n    color: $gray\n    font-size: 1rem\n\n\n\n// Ping && the launching soon/subscribe can be together\n\n// The inputs will be together as a flexbox...for mobile(column)/desktop(row)\n\n// The image and icon are on their own"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


const emailInput = document.querySelector('input[type="email"]');
const errorMsg = document.querySelector('.errorMsg');
const notifyBtn = document.querySelector('.notifyBtn');
const emailRegex = /^\w+@\w+\.(?:com|ru|net|jp|ca)/;

window.onload = clearInput();

function clearInput() {
    emailInput.value = '';
}

emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
        if (notifyBtn.hasAttribute('open')) {
            notifyBtn.removeAttribute('open');
            notifyBtn.setAttribute('closed', '');
        }
        emailInput.setAttribute('error', '');
        errorMsg.setAttribute('error', '');
    } else if (emailRegex.test(emailInput.value)) {
        emailInput.removeAttribute('error');
        errorMsg.removeAttribute('error');
        notifyBtn.removeAttribute('closed');
        notifyBtn.setAttribute('open', '');
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxJQUFJLGtCQUFrQjtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFlBQVksUUFBUSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FB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QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9iZmFkIiwid2VicGFjazovL3BpbmctY29taW5nLXNvb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BpbmctY29taW5nLXNvb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BpbmctY29taW5nLXNvb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpbmctY29taW5nLXNvb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waW5nLWNvbWluZy1zb29uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGluZy1jb21pbmctc29vbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0ZyYW5rbGluOndnaHRAMzAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEZyYW5rbGluXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAycmVtO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ29cIiBcImxhdW5jaFwiIFwiaW5wdXRzXCIgXCJkYXNoSW1nXCIgXCJpY29uc1wiIFwiY29weXJpZ2h0XCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbWFpbiB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nLWlubGluZTogNXJlbTtcbiAgfVxufVxuLmxvZ28ge1xuICBncmlkLWFyZWE6IGxvZ287XG4gIG1heC13aWR0aDogNnJlbTtcbiAgbWFyZ2luLWJsb2NrOiA2cmVtIDRyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICB9XG59XG4uaW50cm8taW5mbyB7XG4gIGdyaWQtYXJlYTogbGF1bmNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbnRyby1pbmZvIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5pbnRyby1pbmZvIGgxIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTklKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmludHJvLWluZm8gaDEgLnNvb24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogaHNsKDIwOSwgMzMlLCAxMiUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW50cm8taW5mbyBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG4uaW50cm8taW5mbyBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmludHJvLWluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbn1cbi5pbnB1dC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGlucHV0cztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzRyZW07XG4gIGdhcDogMXJlbTtcbn1cbi5pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMjMsIDEwMCUsIDg4JSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuLmlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZW1haWxdOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDU5JSk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWVtYWlsXVtlcnJvcj1cIlwiXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgzNTQsIDEwMCUsIDY2JSk7XG59XG4uaW5wdXQtY29udGFpbmVyIGJ1dHRvblt0eXBlPWJ1dHRvbl0ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTJweCBoc2woMjIzLCAxMDAlLCA4OCUpO1xufVxuLmlucHV0LWNvbnRhaW5lciBidXR0b25bdHlwZT1idXR0b25dW2Nsb3NlZD1cIlwiXSB7XG4gIGJhY2tncm91bmQ6ICM3ZWEwZjY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmlucHV0LWNvbnRhaW5lciBidXR0b25bdHlwZT1idXR0b25dW29wZW49XCJcIl0ge1xuICBiYWNrZ3JvdW5kOiBoc2woMjIzLCA4NyUsIDYzJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmlucHV0LWNvbnRhaW5lciBidXR0b25bdHlwZT1idXR0b25dW29wZW49XCJcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2VhMGY2O1xufVxuXG4uZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uZXJyb3JNc2cge1xuICBjb2xvcjogaHNsKDM1NCwgMTAwJSwgNjYlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmVycm9yTXNnW2Vycm9yPVwiXCJdIHtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmVycm9yTXNnW2Vycm9yPVwiXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbiAgLmlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG4gIC5pbnB1dC1jb250YWluZXIgYnV0dG9uW3R5cGU9YnV0dG9uXSB7XG4gICAgd2lkdGg6IDI4JTtcbiAgfVxufVxuLmRhc2gtaWxsdXN0cmF0aW9uIHtcbiAgZ3JpZC1hcmVhOiBkYXNoSW1nO1xuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGljb25zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uaWNvbi1jb250YWluZXIgaSB7XG4gIGNvbG9yOiBoc2woMjIzLCA4NyUsIDYzJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIyMywgMTAwJSwgODglKTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmljb24tY29udGFpbmVyIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMjIzLCA4NyUsIDYzJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaWNvbi1jb250YWluZXIge1xuICAgIGdhcDogMS41cmVtO1xuICB9XG59XG4uY29weXJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiBjb3B5cmlnaHQ7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDU5JSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQkE7OztFQUdJLHNCQUFBO0FBaEJKOztBQWtCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFmSjs7QUFpQkE7RUFDSSxnQkFBQTtBQWRKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFlQTtFQUNJLGlCQUFBO0VBQ0EseUNBcENJO0VBcUNKLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBWko7O0FBY0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRUFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBYUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esb0JBQUE7RUFWTjtBQUNGO0FBV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBVEo7O0FBV0E7RUFDSTtJQUNJLGdCQUFBO0VBUk47QUFDRjtBQVNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFQSjs7QUFTQTtFQUNJO0lBQ0ksU0FBQTtFQU5OO0FBQ0Y7QUFPQTtFQUNJLHNCQWpFRztFQWtFSCxnQkFBQTtFQUNBLGVBL0RRO0VBZ0VSLG1CQUFBO0FBTEo7QUFNSTtFQUNJLGdCQUFBO0VBQ0EseUJBdEVTO0FBa0VqQjs7QUFNQTtFQUNJO0lBQ0ksZUFBQTtFQUhOO0FBQ0Y7QUFJQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlBO0VBQ0k7SUFDSSxpQkFBQTtFQUROO0FBQ0Y7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7QUFFWjtBQURRO0VBQ0ksc0JBdkdMO0VBd0dLLGlCQUFBO0FBR1o7QUFGUTtFQUNJLHFDQUFBO0FBSVo7QUFISTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUtSO0FBSlE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FBTVo7QUFMUTtFQUNJLDhCQWhJTDtFQWlJSyxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQU9aO0FBTlk7RUFDSSxtQkFBQTtBQVFoQjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksMEJBMUlRO0VBMklSLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBVUo7QUFUSTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUFXUjs7QUFUQTtFQUNJO0lBQ0ksZ0JBQUE7RUFZTjtBQUNGO0FBWEE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUFhTjtFQVpNO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0VBY1Y7RUFiTTtJQUNJLFVBQUE7RUFlVjtBQUNGO0FBZEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBaUJKO0FBaEJJO0VBQ0kseUJBaExEO0VBaUxDLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFrQlI7QUFqQlE7RUFDSSw4QkE1TEw7RUE2TEssWUFBQTtFQUNBLFlBQUE7QUFtQlo7O0FBakJBO0VBQ0k7SUFDSSxXQUFBO0VBb0JOO0FBQ0Y7QUFuQkE7RUFDSSxvQkFBQTtFQUNBLHNCQS9MRztFQWdNSCxlQUFBO0FBcUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0ZyYW5rbGluOndnaHRAMzAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJylcXG4vLyBGb250IEZhbWlsaWVzXFxuJGxpYnJlOiAnTGlicmUgRnJhbmtsaW4nLCBzYW5zLXNlcmlmXFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kYmx1ZTogaHNsKDIyMywgODclLCA2MyUpXFxuXFxuLy8gU2Vjb25kYXJ5IENvbG9yc1xcbiRwYWxlX2JsdWU6IGhzbCgyMjMsIDEwMCUsIDg4JSlcXG4kbGlnaHRfcmVkOiBoc2woMzU0LCAxMDAlLCA2NiUpXFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kZ3JheTogaHNsKDAsIDAlLCA1OSUpXFxuJHZlcnlfZGFya19ibHVlOiBoc2woMjA5LCAzMyUsIDEyJSlcXG5cXG4vLyBmb250LXNpemVzXFxuJGZvbnRfc2l6ZTogMjBweFxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG4qXFxuICAgIG1hcmdpbjogMFxcbiAgICBwYWRkaW5nOiAwXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXFxuXFxuaHRtbFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3ZlclxcblxcbmJvZHlcXG4gICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgZm9udC1mYW1pbHk6ICRsaWJyZVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgZ2FwOiAycmVtXFxuXFxubWFpblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIG1heC13aWR0aDogMzcuNXJlbVxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9nb1xcXCIgXFxcImxhdW5jaFxcXCIgXFxcImlucHV0c1xcXCIgXFxcImRhc2hJbWdcXFwiIFxcXCJpY29uc1xcXCIgXFxcImNvcHlyaWdodFxcXCJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIG1haW5cXG4gICAgICAgIG1heC13aWR0aDogNzAwcHhcXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiA1cmVtXFxuXFxuLmxvZ29cXG4gICAgZ3JpZC1hcmVhOiBsb2dvXFxuICAgIG1heC13aWR0aDogNnJlbVxcbiAgICBtYXJnaW4tYmxvY2s6IDZyZW0gNHJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAubG9nb1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMHJlbVxcblxcbi5pbnRyby1pbmZvXFxuICAgIGdyaWQtYXJlYTogbGF1bmNoXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGdhcDogMnJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuaW50cm8taW5mb1xcbiAgICAgICAgZ2FwOiAxcmVtXFxuXFxuLmludHJvLWluZm8gaDFcXG4gICAgY29sb3I6ICRncmF5XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcXG4gICAgZm9udC1zaXplOiAkZm9udF9zaXplXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcXG4gICAgLnNvb25cXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmludHJvLWluZm8gaDFcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbVxcblxcbi5pbnRyby1pbmZvIHBcXG4gICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcHhcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuaW50cm8taW5mbyBwXFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbVxcblxcbi5pbnB1dC1jb250YWluZXJcXG4gICAgZ3JpZC1hcmVhOiBpbnB1dHNcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG1heC13aWR0aDogMzRyZW1cXG4gICAgZ2FwOiAxcmVtXFxuICAgIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl1cXG4gICAgICAgIGhlaWdodDogNHJlbVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbVxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHBhbGVfYmx1ZVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXRcXG4gICAgICAgICY6Zm9jdXNcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICAmOjpwbGFjZWhvbGRlclxcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtXFxuICAgICAgICAmW2Vycm9yPScnXVxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9yZWQgICAgICAgICAgXFxuICAgIGJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXVxcbiAgICAgICAgaGVpZ2h0OiA0cmVtXFxuICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtXFxuICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cmVtXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDEycHggJHBhbGVfYmx1ZVxcbiAgICAgICAgJltjbG9zZWQ9JyddXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmx1ZSwgMTAlKVxcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXFxuICAgICAgICAmW29wZW49JyddXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRibHVlLCAxMCUpXFxuXFxuLmVtYWlsLWNvbnRhaW5lclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBnYXA6IC43NXJlbVxcblxcbi5lcnJvck1zZ1xcbiAgICBjb2xvcjogJGxpZ2h0X3JlZFxcbiAgICBmb250LXNpemU6IDFyZW1cXG4gICAgZm9udC1zdHlsZTogaXRhbGljXFxuICAgIG1heC1oZWlnaHQ6IDBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAmW2Vycm9yPScnXVxcbiAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnRcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuZXJyb3JNc2dbZXJyb3I9JyddXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pbnB1dC1jb250YWluZXJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcXG4gICAgICAgIG1heC13aWR0aDogdW5zZXRcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl1cXG4gICAgICAgICAgICB3aWR0aDogNDByZW1cXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbVxcbiAgICAgICAgYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdXFxuICAgICAgICAgICAgd2lkdGg6IDI4JVxcblxcbi5kYXNoLWlsbHVzdHJhdGlvblxcbiAgICBncmlkLWFyZWE6IGRhc2hJbWdcXG4gICAgbWFyZ2luLWJvdHRvbTogOXJlbVxcblxcbi5pY29uLWNvbnRhaW5lclxcbiAgICBncmlkLWFyZWE6IGljb25zXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZ2FwOiAxcmVtXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW1cXG4gICAgaVxcbiAgICAgICAgY29sb3I6ICRibHVlXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwYWxlX2JsdWVcXG4gICAgICAgIHdpZHRoOiAzcmVtXFxuICAgICAgICBoZWlnaHQ6IDNyZW1cXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pY29uLWNvbnRhaW5lclxcbiAgICAgICAgZ2FwOiAxLjVyZW1cXG5cXG4uY29weXJpZ2h0XFxuICAgIGdyaWQtYXJlYTogY29weXJpZ2h0XFxuICAgIGNvbG9yOiAkZ3JheVxcbiAgICBmb250LXNpemU6IDFyZW1cXG5cXG5cXG5cXG4vLyBQaW5nICYmIHRoZSBsYXVuY2hpbmcgc29vbi9zdWJzY3JpYmUgY2FuIGJlIHRvZ2V0aGVyXFxuXFxuLy8gVGhlIGlucHV0cyB3aWxsIGJlIHRvZ2V0aGVyIGFzIGEgZmxleGJveC4uLmZvciBtb2JpbGUoY29sdW1uKS9kZXNrdG9wKHJvdylcXG5cXG4vLyBUaGUgaW1hZ2UgYW5kIGljb24gYXJlIG9uIHRoZWlyIG93blwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNc2cnKTtcbmNvbnN0IG5vdGlmeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZnlCdG4nKTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXlxcdytAXFx3K1xcLig/OmNvbXxydXxuZXR8anB8Y2EpLztcblxud2luZG93Lm9ubG9hZCA9IGNsZWFySW5wdXQoKTtcblxuZnVuY3Rpb24gY2xlYXJJbnB1dCgpIHtcbiAgICBlbWFpbElucHV0LnZhbHVlID0gJyc7XG59XG5cbmVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoZW1haWxJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgaWYgKG5vdGlmeUJ0bi5oYXNBdHRyaWJ1dGUoJ29wZW4nKSkge1xuICAgICAgICAgICAgbm90aWZ5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgICAgICAgICAgbm90aWZ5QnRuLnNldEF0dHJpYnV0ZSgnY2xvc2VkJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgZXJyb3JNc2cuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICB9IGVsc2UgaWYgKGVtYWlsUmVnZXgudGVzdChlbWFpbElucHV0LnZhbHVlKSkge1xuICAgICAgICBlbWFpbElucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgZXJyb3JNc2cucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICBub3RpZnlCdG4ucmVtb3ZlQXR0cmlidXRlKCdjbG9zZWQnKTtcbiAgICAgICAgbm90aWZ5QnRuLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==