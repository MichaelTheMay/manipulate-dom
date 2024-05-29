/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
}

.dropdown-popup {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
  background-color: #FFC266;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  z-index: 10001;
  opacity: 0;
  transition: opacity 0.3s ease, top 0.3s ease;
}
.dropdown-popup.visible {
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
.dropdown-popup.hidden {
  top: -100%;
  opacity: 0;
}
.dropdown-popup .close-popup-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #FFFFFF;
}

.dropdown-content {
  padding: 10px;
}

.element-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 14px;
  color: #FFFFFF;
}
.element-table th, .element-table td {
  padding: 10px;
  border: 1px solid #000000;
}
.element-table th {
  background-color: #006699;
  color: #FFFFFF;
  text-align: center;
}
.element-table tr:nth-child(even) {
  background-color: #ffd699;
}
.element-table tr:nth-child(odd) {
  background-color: #FFC266;
}
.element-table tr:hover {
  background-color: #FF9933;
  color: #FFFFFF;
}
.element-table td {
  text-align: left;
}

.dropdown-button {
  display: block;
  margin-bottom: 15px;
  background-color: #004577;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.dropdown-button:hover {
  background-color: #002744;
}

.dropdown-popup {
  padding: 10px;
  background-color: #FFC266;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.highlight {
  outline: 2px solid #FF9933 !important;
}

.toggle-pane {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 30px;
  background-color: #FFC266;
  border: 1px solid #000000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  cursor: pointer;
  transition: height 0.3s ease;
}
.toggle-pane.expanded {
  height: 300px;
}
.toggle-pane .toggle-button {
  width: 20px;
  height: 20px;
  background-color: #004577;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
}
.toggle-pane .view-saved-button {
  margin-left: 10px;
  background-color: #004577;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.toggle-pane .view-saved-button:hover {
  background-color: #002744;
}

.input-container {
  display: flex;
  flex-direction: column;
  background-color: #FFC266;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.inline-input {
  margin-bottom: 15px;
}

.input-button {
  margin: 15px 0;
  padding: 10px 20px;
  background-color: #004577;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.input-button:hover {
  background-color: #002744;
}

.highlighted-element {
  outline: 2px solid rgba(255, 153, 51, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/styles/base/_global.scss","webpack://./src/styles/main.scss","webpack://./src/styles/components/_dropdown.scss","webpack://./src/styles/utils/_variables.scss","webpack://./src/styles/components/_elementTable.scss","webpack://./src/styles/components/_highlight.scss","webpack://./src/styles/components/_toggleButton.scss","webpack://./src/styles/components/_elementSelection.scss"],"names":[],"mappings":"AAAA;EACI,8BAAA;ACCJ;;ACCA;EACE,eAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;EACA,UAAA;EACA,gBAAA;EACA,yBCLuB;EDMvB,yBAAA;EACA,kBCSc;EDRd,yCCKiB;EDJjB,cAAA;EACA,UAAA;EACA,4CAAA;ADEF;ACAE;EACE,QAAA;EACA,gCAAA;EACA,UAAA;ADEJ;ACCE;EACE,UAAA;EACA,UAAA;ADCJ;ACEE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,cC9BS;AF8Bb;;ACKA;EACE,aC9BQ;AF4BV;;AGtCA;EACE,WAAA;EACA,yBAAA;EACA,cAAA;EACA,eDmBe;EClBf,cDDW;AF0Cb;AGvCE;EACE,aDEM;ECDN,yBAAA;AHyCJ;AGtCE;EACE,yBDVsB;ECWtB,cDVS;ECWT,kBAAA;AHwCJ;AGrCE;EACE,yBAAA;AHuCJ;AGpCE;EACE,yBDrBqB;AF2DzB;AGnCE;EACE,yBD3Bc;EC4Bd,cDxBS;AF6Db;AGlCE;EACE,gBAAA;AHoCJ;;AGhCA;EACE,cAAA;EACA,mBD3BO;EC4BP,yBDzCc;EC0Cd,cDpCW;ECqCX,YAAA;EACA,kBDde;ECef,eAAA;EACA,kBDfc;ECgBd,sCAAA;AHmCF;AGjCE;EACE,yBAAA;AHmCJ;;AG/BA;EACE,aD3CQ;EC4CR,yBDpDuB;ECqDvB,yBAAA;EACA,kBDtCc;ECuCd,wCDlBgB;AFoDlB;;AI5FA;EACE,qCAAA;AJ+FF;;AK/FA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,2BAAA;EACA,YAAA;EACA,YAAA;EACA,yBHLuB;EGMvB,yBAAA;EACA,2BHSc;EGRd,4BHQc;EGPd,wCHGW;EGFX,cAAA;EACA,eAAA;EACA,4BAAA;ALkGF;AKhGE;EACE,aAAA;ALkGJ;AK/FE;EACE,WAAA;EACA,YAAA;EACA,yBHzBY;EG0BZ,kBAAA;EACA,YHfM;EGgBN,eAAA;ALiGJ;AK9FE;EACE,iBHpBM;EGqBN,yBHjCY;EGkCZ,YAAA;EACA,YAAA;EACA,kBHNa;EGOb,eAAA;EACA,kBHPY;EGQZ,sCAAA;ALgGJ;AK9FI;EACE,yBAAA;ALgGN;;AMxIA;EACE,aAAA;EACA,sBAAA;EACA,yBJDuB;EIEvB,aJMQ;EILR,yBAAA;EACA,kBJYc;EIXd,wCJOW;AFoIb;;AMxIA;EACE,mBAAA;AN2IF;;AMxIA;EACE,cAAA;EACA,kBJYe;EIXf,yBJnBc;EIoBd,cJdW;EIeX,YAAA;EACA,kBJSc;EIRd,eAAA;EACA,sCAAA;AN2IF;AMzIE;EACE,yBAAA;AN2IJ;;AMvIA;EACE,0CAAA;AN0IF","sourcesContent":["body {\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  ","body {\n  font-family: Arial, sans-serif;\n}\n\n.dropdown-popup {\n  position: fixed;\n  top: -100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  max-width: 800px;\n  background-color: #FFC266;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n  z-index: 10001;\n  opacity: 0;\n  transition: opacity 0.3s ease, top 0.3s ease;\n}\n.dropdown-popup.visible {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n.dropdown-popup.hidden {\n  top: -100%;\n  opacity: 0;\n}\n.dropdown-popup .close-popup-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #FFFFFF;\n}\n\n.dropdown-content {\n  padding: 10px;\n}\n\n.element-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 15px 0;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n.element-table th, .element-table td {\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.element-table th {\n  background-color: #006699;\n  color: #FFFFFF;\n  text-align: center;\n}\n.element-table tr:nth-child(even) {\n  background-color: #ffd699;\n}\n.element-table tr:nth-child(odd) {\n  background-color: #FFC266;\n}\n.element-table tr:hover {\n  background-color: #FF9933;\n  color: #FFFFFF;\n}\n.element-table td {\n  text-align: left;\n}\n\n.dropdown-button {\n  display: block;\n  margin-bottom: 15px;\n  background-color: #004577;\n  color: #FFFFFF;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.dropdown-button:hover {\n  background-color: #002744;\n}\n\n.dropdown-popup {\n  padding: 10px;\n  background-color: #FFC266;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.highlight {\n  outline: 2px solid #FF9933 !important;\n}\n\n.toggle-pane {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 30px;\n  background-color: #FFC266;\n  border: 1px solid #000000;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  cursor: pointer;\n  transition: height 0.3s ease;\n}\n.toggle-pane.expanded {\n  height: 300px;\n}\n.toggle-pane .toggle-button {\n  width: 20px;\n  height: 20px;\n  background-color: #004577;\n  border-radius: 50%;\n  margin: 10px;\n  cursor: pointer;\n}\n.toggle-pane .view-saved-button {\n  margin-left: 10px;\n  background-color: #004577;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.toggle-pane .view-saved-button:hover {\n  background-color: #002744;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFC266;\n  padding: 10px;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.inline-input {\n  margin-bottom: 15px;\n}\n\n.input-button {\n  margin: 15px 0;\n  padding: 10px 20px;\n  background-color: #004577;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.input-button:hover {\n  background-color: #002744;\n}\n\n.highlighted-element {\n  outline: 2px solid rgba(255, 153, 51, 0.5);\n}","@import '../utils/variables';\r\n@import '../utils/mixins';\r\n\r\n.dropdown-popup {\r\n  position: fixed;\r\n  top: -100%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 80%;\r\n  max-width: 800px;\r\n  background-color: $background-color-light;\r\n  border: $border-width solid $border-color;\r\n  border-radius: $border-radius;\r\n  box-shadow: $box-shadow-heavy;\r\n  z-index: 10001;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease, top 0.3s ease;\r\n\r\n  &.visible {\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 1;\r\n  }\r\n\r\n  &.hidden {\r\n    top: -100%;\r\n    opacity: 0;\r\n  }\r\n\r\n  .close-popup-button {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    color: $text-color;\r\n  }\r\n}\r\n\r\n\r\n.dropdown-content {\r\n  padding: $padding;\r\n}\r\n","// Color Palette\r\n$primary-color: #004577; // Updated to a more standard blue\r\n$success-color: #006699; // Harmonized with primary color\r\n$highlight-color: #FF9933; // Softer red for better harmony\r\n$border-color: #000000; // Slightly lighter for a modern look\r\n$background-color-light: #FFC266; // Light grey for better contrast\r\n$background-color-header: #006699; // Slightly darker grey for headers\r\n$text-color: #FFFFFF; // Dark grey for primary text\r\n$text-color-light: #FFFFFF; // Light grey for secondary text\r\n$overlay-color: #FFFFFF;\r\n// Animations\r\n$transition-duration: 3s;\r\n// Spacing\r\n$padding: 10px;\r\n$margin: 15px;\r\n\r\n// Shadows\r\n$box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n$box-shadow-heavy: 0 6px 12px rgba(0, 0, 0, 0.2);\r\n\r\n// Borders\r\n$border-radius: 5px;\r\n$border-width: 1px;\r\n\r\n// Typography\r\n$font-family: 'Arial, sans-serif';\r\n$font-size-base: 14px;\r\n$font-size-large: 18px;\r\n$font-size-small: 12px;\r\n\r\n// Buttons\r\n$button-padding: 10px 20px;\r\n$button-radius: 5px;\r\n\r\n// Inputs\r\n$input-padding: 8px 12px;\r\n$input-border-radius: 3px;\r\n$input-border-color: #CCCCCC;\r\n\r\n// Additional Element Styles\r\n$dropdown-background: #FFFFFF;\r\n$dropdown-border: #E0E0E0;\r\n$dropdown-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n\r\n$table-header-background: #E9E9E9;\r\n$table-row-background: #FFFFFF;\r\n$table-row-hover-background: #F1F1F1;\r\n\r\n$modal-background: rgba(0, 0, 0, 0.6);\r\n$modal-content-background: #FFFFFF;\r\n$modal-content-padding: 20px;\r\n","@import '../utils/variables';\r\n@import '../utils/mixins';\r\n\r\n.element-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin: $margin 0;\r\n  font-size: $font-size-base;\r\n  color: $text-color;\r\n\r\n  th, td {\r\n    padding: $padding;\r\n    border: $border-width solid $border-color;\r\n  }\r\n\r\n  th {\r\n    background-color: $background-color-header;\r\n    color: $text-color;\r\n    text-align: center;\r\n  }\r\n\r\n  tr:nth-child(even) {\r\n    background-color: lighten($background-color-light, 10%);\r\n  }\r\n\r\n  tr:nth-child(odd) {\r\n    background-color: $background-color-light;\r\n  }\r\n\r\n  tr:hover {\r\n    background-color: $highlight-color;\r\n    color: $text-color;\r\n  }\r\n\r\n  td {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n.dropdown-button {\r\n  display: block;\r\n  margin-bottom: $margin;\r\n  background-color: $primary-color;\r\n  color: $text-color;\r\n  border: none;\r\n  padding: $button-padding;\r\n  cursor: pointer;\r\n  border-radius: $button-radius;\r\n  transition: background-color 0.3s ease;\r\n\r\n  &:hover {\r\n    background-color: darken($primary-color, 10%);\r\n  }\r\n}\r\n\r\n.dropdown-popup {\r\n  padding: $padding;\r\n  background-color: $background-color-light;\r\n  border: $border-width solid $border-color;\r\n  border-radius: $border-radius;\r\n  box-shadow: $dropdown-shadow;\r\n}\r\n","@import '../utils/variables';\r\n\r\n.highlight {\r\n  outline: 2px solid $highlight-color !important;\r\n}\r\n","@import '../utils/variables';\r\n@import '../utils/mixins';\r\n\r\n.toggle-pane {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 200px;\r\n  height: 30px;\r\n  background-color: $background-color-light;\r\n  border: $border-width solid $border-color;\r\n  border-top-left-radius: $border-radius;\r\n  border-top-right-radius: $border-radius;\r\n  box-shadow: $box-shadow;\r\n  z-index: 10000;\r\n  cursor: pointer;\r\n  transition: height 0.3s ease;\r\n\r\n  &.expanded {\r\n    height: 300px;\r\n  }\r\n\r\n  .toggle-button {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: $primary-color;\r\n    border-radius: 50%;\r\n    margin: $padding;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .view-saved-button {\r\n    margin-left: $padding;\r\n    background-color: $primary-color;\r\n    color: white;\r\n    border: none;\r\n    padding: $button-padding;\r\n    cursor: pointer;\r\n    border-radius: $button-radius;\r\n    transition: background-color 0.3s ease;\r\n\r\n    &:hover {\r\n      background-color: darken($primary-color, 10%);\r\n    }\r\n  }\r\n}\r\n","@import '../utils/variables';\r\n@import '../utils/mixins';\r\n\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: $background-color-light;\r\n  padding: $padding;\r\n  border: $border-width solid $border-color;\r\n  border-radius: $border-radius;\r\n  box-shadow: $box-shadow;\r\n}\r\n\r\n.inline-input {\r\n  margin-bottom: $margin;\r\n}\r\n\r\n.input-button {\r\n  margin: $margin 0;\r\n  padding: $button-padding;\r\n  background-color: $primary-color;\r\n  color: $text-color;\r\n  border: none;\r\n  border-radius: $button-radius;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n\r\n  &:hover {\r\n    background-color: darken($primary-color, 10%);\r\n  }\r\n}\r\n\r\n.highlighted-element {\r\n  outline: 2px solid rgba(255, 153, 51, 0.5); // moderate to low opacity highlight\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/events/eventHandlers.js":
/*!*************************************!*\
  !*** ./src/events/eventHandlers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeElementSelection: () => (/* binding */ initializeElementSelection),
/* harmony export */   initializeEventHandlers: () => (/* binding */ initializeEventHandlers)
/* harmony export */ });
/* harmony import */ var _ui_toggleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/toggleButton */ "./src/ui/toggleButton.js");
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domUtils */ "./src/utils/domUtils.js");
/* harmony import */ var _ui_elementTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/elementTable */ "./src/ui/elementTable.js");





function initializeEventHandlers() {
  initializeElementSelection();
}
function initializeElementSelection() {
  document.addEventListener('click', handleDocumentClick, true);
}


function handleDocumentClick(event) {
  if (!(0,_ui_toggleButton__WEBPACK_IMPORTED_MODULE_0__.isCaptureModeActive)()) return;
  if (event.target.closest('#dropdownPopup') || event.target.closest('#toggleButton')) return;

  processElementSelection(event);
}

function processElementSelection(event) {
  const target = event.target;
  const tagName = target.tagName.toLowerCase();
  const input = createInlineInput(target, tagName);

  addInputEventListeners(input, target);

  event.stopPropagation();
  event.preventDefault();
}

function createInlineInput(target, tagName) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = tagName;
  input.setAttribute('aria-label', `Name for ${tagName}`);
  input.classList.add('inline-input');
  positionInlineInput(input, target);
  document.body.appendChild(input);
  input.focus();
  return input;
}

function positionInlineInput(input, target) {
  const rect = target.getBoundingClientRect();
  input.style.position = 'absolute';
  input.style.top = `${rect.top + window.scrollY}px`;
  input.style.left = `${rect.left + window.scrollX}px`;
  input.style.zIndex = '10002';
}

function addInputEventListeners(input, target) {
  let shouldRemove = false;

  input.addEventListener('blur', () => {
    shouldRemove = true;
    setTimeout(() => saveElementName(input, target, shouldRemove), 0);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      shouldRemove = false; // Cancel removal on Enter
      saveElementName(input, target, shouldRemove);
    }
  });
}

function saveElementName(input, target, shouldRemove) {
  const elementName = input.value.trim();
  if (shouldRemove && document.body.contains(input)) {
    removeInputElement(input);
  }

  if (elementName) {
    try {
      const elementDetails = (0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_1__.addElementDetail)(target, elementName);
      if (elementDetails) {
        const elementTable = document.getElementById('elementTable');
        (0,_ui_elementTable__WEBPACK_IMPORTED_MODULE_2__.addElementRow)(elementDetails, elementTable, target);
        showTemporaryMessage(`Element "${elementName}" added successfully!`, 'success');
      } else {
        showTemporaryMessage('Element is already added.', 'warning');
      }
    } catch (error) {
      showTemporaryMessage(`Error adding element: ${error.message}`, 'error');
    }
  }
}

function removeInputElement(input) {
  if (document.body.contains(input)) {
    document.body.removeChild(input);
  }
}

function showTemporaryMessage(message, type) {
  const messageBox = document.createElement('div');
  messageBox.textContent = message;
  messageBox.classList.add('temporary-message', type);
  document.body.appendChild(messageBox);

  setTimeout(() => {
    if (document.body.contains(messageBox)) {
      document.body.removeChild(messageBox);
    }
  }, 3000);
}


/***/ }),

/***/ "./src/ui/dropdown.js":
/*!****************************!*\
  !*** ./src/ui/dropdown.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDropdown: () => (/* binding */ createDropdown),
/* harmony export */   hideDropdown: () => (/* binding */ hideDropdown),
/* harmony export */   showDropdown: () => (/* binding */ showDropdown)
/* harmony export */ });
/**
 * This module provides functions to create and manage the dropdown for displaying saved elements.
 * 
 * DOM Components:
 * - Dropdown Popup: `<div id="dropdownPopup" class="dropdown-popup hidden">`
 * - Dropdown Button: `<button id="dropdownButton" class="dropdown-button">`
 * - Dropdown Content: `<div id="dropdownContent" class="dropdown-content">`
 * - Element Table: `<table id="elementTable" class="element-table">`
 * - Table Headers: `<th class="element-table-header">`
 * - Close Button: `<button id="closePopupButton" class="close-popup-button">`
 * 
 * Selectors:
 * - Popup: `#dropdownPopup` or `.dropdown-popup`
 * - Button: `#dropdownButton` or `.dropdown-button`
 * - Content: `#dropdownContent` or `.dropdown-content`
 * - Table: `#elementTable` or `.element-table`
 * - Headers: `.element-table-header`
 * - Close Button: `#closePopupButton` or `.close-popup-button`
 */

function createDropdown() {
  const dropdownPopup = document.createElement('div');
  dropdownPopup.id = 'dropdownPopup';
  dropdownPopup.classList.add('dropdown-popup', 'hidden'); // Hidden by default

  const closePopupButton = document.createElement('button');
  closePopupButton.id = 'closePopupButton';
  closePopupButton.textContent = 'X';
  closePopupButton.classList.add('close-popup-button');
  closePopupButton.addEventListener('click', hideDropdown);

  const dropdownButton = document.createElement('button');
  dropdownButton.id = 'dropdownButton';
  dropdownButton.textContent = 'Show Saved Elements';
  dropdownButton.classList.add('dropdown-button');

  const dropdownContent = document.createElement('div');
  dropdownContent.id = 'dropdownContent';
  dropdownContent.classList.add('dropdown-content');

  const elementTable = document.createElement('table');
  elementTable.id = 'elementTable';
  elementTable.classList.add('element-table');

  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Element Type', 'Descendants', 'Depth', 'Dimensions'];
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.classList.add('element-table-header');
    headerRow.appendChild(th);
  });
  elementTable.appendChild(headerRow);

  dropdownContent.appendChild(elementTable);
  dropdownPopup.appendChild(closePopupButton);
  dropdownPopup.appendChild(dropdownContent);
  document.body.appendChild(dropdownPopup);

  dropdownButton.addEventListener('click', () => toggleDropdown(dropdownButton, dropdownContent));
}

function toggleDropdown(button, content) {
  const isHidden = content.style.display === 'none' || content.style.display === '';
  content.style.display = isHidden ? 'block' : 'none';
  button.textContent = isHidden ? 'Hide Saved Elements' : 'Show Saved Elements';
}

function showDropdown() {
  const dropdownPopup = document.getElementById('dropdownPopup');
  if (dropdownPopup) {
    dropdownPopup.classList.remove('hidden');
    dropdownPopup.classList.add('visible');
    document.getElementById('contentContainer').classList.add('blurred-content');
  }
}

function hideDropdown() {
  const dropdownPopup = document.getElementById('dropdownPopup');
  if (dropdownPopup) {
    dropdownPopup.classList.remove('visible');
    dropdownPopup.classList.add('hidden');
    document.getElementById('contentContainer').classList.remove('blurred-content');
  }
}


/***/ }),

/***/ "./src/ui/elementTable.js":
/*!********************************!*\
  !*** ./src/ui/elementTable.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addElementRow: () => (/* binding */ addElementRow),
/* harmony export */   createElementTable: () => (/* binding */ createElementTable)
/* harmony export */ });
/* harmony import */ var _utils_domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domUtils */ "./src/utils/domUtils.js");
/**
 * This module provides functions to create and manage the element table.
 * 
 * DOM Components:
 * - Table Container: `<table id="elementTable" class="element-table">`
 * - Table Headers: `<th class="element-table-header">`
 * - Table Rows: `<tr class="element-row">`
 * 
 * Selectors:
 * - Table: `#elementTable` or `.element-table`
 * - Headers: `.element-table-header`
 * - Rows: `.element-row`
 */



/**
 * Creates an element table with predefined headers.
 * @returns {HTMLElement} The created table element.
 */
function createElementTable() {
  const elementTable = document.createElement('table');
  elementTable.id = 'elementTable';
  elementTable.classList.add('element-table');

  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Element Type', 'Descendants', 'Depth', 'Dimensions'];
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.classList.add('element-table-header');
    headerRow.appendChild(th);
  });
  elementTable.appendChild(headerRow);

  return elementTable;
}

/**
 * Adds a new row to the element table.
 * @param {Object} elementDetails - The details of the element.
 * @param {HTMLElement} elementTable - The table element to add the row to.
 * @param {HTMLElement} target - The target element to be highlighted on row click.
 */
function addElementRow(elementDetails, elementTable, target) {
  if (!elementTable) return;

  const row = document.createElement('tr');
  row.classList.add('element-row');
  row.innerHTML = `
    <td>${elementDetails.name}</td>
    <td>${elementDetails.type}</td>
    <td>${elementDetails.descendants}</td>
    <td>${elementDetails.depth}</td>
    <td>${elementDetails.dimensions}</td>
  `;

  row.addEventListener('click', () => (0,_utils_domUtils__WEBPACK_IMPORTED_MODULE_0__.highlightElement)(target));
  elementTable.appendChild(row);
}


/***/ }),

/***/ "./src/ui/toggleButton.js":
/*!********************************!*\
  !*** ./src/ui/toggleButton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToggleButton: () => (/* binding */ createToggleButton),
/* harmony export */   isCaptureModeActive: () => (/* binding */ isCaptureModeActive)
/* harmony export */ });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "./src/ui/dropdown.js");
/**
 * This module provides functions to create and manage the toggle button for capture mode.
 * 
 * DOM Components:
 * - Toggle Button: `<div id="toggleButton" class="toggle-button">`
 *   - Active State: `capture-active`
 * - View Saved Button: `<button id="viewSavedButton" class="view-saved-button">`
 * 
 * Selectors:
 * - Button: `#toggleButton` or `.toggle-button`
 * - Active State: `.capture-active`
 * - View Saved Button: `#viewSavedButton` or `.view-saved-button`
 */

let captureModeActive = false;

/**
 * Creates the toggle button for capture mode and the view saved elements button.
 */
function createToggleButton() {
  const togglePane = document.createElement('div');
  togglePane.id = 'togglePane';
  togglePane.classList.add('toggle-pane');

  const toggleButton = document.createElement('div');
  toggleButton.id = 'toggleButton';
  toggleButton.classList.add('toggle-button');
  toggleButton.setAttribute('title', 'Toggle Capture Mode');

  toggleButton.addEventListener('click', () => {
    captureModeActive = !captureModeActive;
    updateToggleButton(toggleButton);
  });

  const viewSavedButton = document.createElement('button');
  viewSavedButton.id = 'viewSavedButton';
  viewSavedButton.textContent = 'View Saved';
  viewSavedButton.classList.add('view-saved-button');
  viewSavedButton.addEventListener('click', _dropdown__WEBPACK_IMPORTED_MODULE_0__.showDropdown);

  togglePane.appendChild(toggleButton);
  togglePane.appendChild(viewSavedButton);
  document.body.appendChild(togglePane);
  updateToggleButton(toggleButton); // Initialize button state
}

/**
 * Updates the toggle button state based on capture mode.
 * @param {HTMLElement} button - The toggle button element.
 */
function updateToggleButton(button) {
  if (captureModeActive) {
    button.style.backgroundColor = '#28a745'; // Green when active
  } else {
    button.style.backgroundColor = '#007BFF'; // Blue when inactive
  }
}

/**
 * Checks if capture mode is active.
 * @returns {boolean} - True if capture mode is active, false otherwise.
 */
function isCaptureModeActive() {
  return captureModeActive;
}


/***/ }),

/***/ "./src/utils/domUtils.js":
/*!*******************************!*\
  !*** ./src/utils/domUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addElementDetail: () => (/* binding */ addElementDetail),
/* harmony export */   highlightElement: () => (/* binding */ highlightElement)
/* harmony export */ });
const selectedElements = [];
const elementDetails = [];

function addElementDetail(target, elementName) {
  if (isElementAlreadySelected(target)) {
    return null; // Return null if the element is already selected
  }

  const descendantsCount = target.getElementsByTagName('*').length;
  const depth = getDepth(target);
  const dimensions = `${target.offsetWidth}px x ${target.offsetHeight}px`;

  selectedElements.push(target);
  const details = {
    name: elementName,
    type: target.tagName.toLowerCase(),
    descendants: descendantsCount,
    depth: depth,
    dimensions: dimensions,
    outerHTML: target.outerHTML
  };
  elementDetails.push(details);

  return details; // Return the element details if added successfully
}

function getDepth(element) {
  let depth = 0;
  while (element.parentElement) {
    depth++;
    element = element.parentElement;
  }
  return depth;
}

function isElementAlreadySelected(element) {
  return selectedElements.includes(element);
}

function highlightElement(element) {
  clearHighlights();
  element.classList.add('highlight');
}

function clearHighlights() {
  selectedElements.forEach(el => el.classList.remove('highlight'));
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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _ui_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown */ "./src/ui/dropdown.js");
/* harmony import */ var _ui_toggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/toggleButton */ "./src/ui/toggleButton.js");
/* harmony import */ var _ui_elementTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/elementTable */ "./src/ui/elementTable.js");
/* harmony import */ var _events_eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/eventHandlers */ "./src/events/eventHandlers.js");
 // Import the main SCSS file






function initializeApp() {
  // Create a container for the content that will be blurred
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  contentContainer.classList.add('content-container');

  // Collect all existing children of the body
  const existingContent = Array.from(document.body.children);

  // Append the contentContainer to the body
  document.body.appendChild(contentContainer);

  // Move existing children into the contentContainer, excluding the contentContainer itself
  existingContent.forEach(child => {
    if (child !== contentContainer) {
      contentContainer.appendChild(child);
    }
  });

  // Create and append the toggle button and dropdown components
  (0,_ui_toggleButton__WEBPACK_IMPORTED_MODULE_2__.createToggleButton)();
  (0,_ui_dropdown__WEBPACK_IMPORTED_MODULE_1__.createDropdown)();

  // Create and append the element table
  document.getElementById('dropdownContent').appendChild(elementTable);

  // Initialize event handlers and element selection
  (0,_events_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.initializeEventHandlers)();
}

initializeApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEIsQ0FBQztBQUM3QjtBQUMrQztBQUNRO0FBQ0E7QUFDVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsb0VBQWtCO0FBQ3BCLEVBQUUsNERBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEVBQXVCO0FBQ3pCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2VsZW1lbnRUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdG9nZ2xlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb21VdGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5kcm9wZG93bi1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDEwMDAxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdG9wIDAuM3MgZWFzZTtcbn1cbi5kcm9wZG93bi1wb3B1cC52aXNpYmxlIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvcGFjaXR5OiAxO1xufVxuLmRyb3Bkb3duLXBvcHVwLmhpZGRlbiB7XG4gIHRvcDogLTEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHJvcGRvd24tcG9wdXAgLmNsb3NlLXBvcHVwLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5lbGVtZW50LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMTVweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmVsZW1lbnQtdGFibGUgdGgsIC5lbGVtZW50LXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cbi5lbGVtZW50LXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjY5OTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbGVtZW50LXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2OTk7XG59XG4uZWxlbWVudC10YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjY7XG59XG4uZWxlbWVudC10YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MzM7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmVsZW1lbnQtdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ1Nzc7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NDQ7XG59XG5cbi5kcm9wZG93bi1wb3B1cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjRkY5OTMzICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUtcGFuZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbn1cbi50b2dnbGUtcGFuZS5leHBhbmRlZCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG4udG9nZ2xlLXBhbmUgLnRvZ2dsZS1idXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NTc3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvZ2dsZS1wYW5lIC52aWV3LXNhdmVkLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NTc3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG4udG9nZ2xlLXBhbmUgLnZpZXctc2F2ZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0NDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmlubGluZS1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbnB1dC1idXR0b24ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NTc3O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG4uaW5wdXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0NDtcbn1cblxuLmhpZ2hsaWdodGVkLWVsZW1lbnQge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDE1MywgNTEsIDAuNSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2UvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19kcm9wZG93bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19lbGVtZW50VGFibGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19oaWdobGlnaHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL190b2dnbGVCdXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19lbGVtZW50U2VsZWN0aW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBQ0NBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNMdUI7RURNdkIseUJBQUE7RUFDQSxrQkNTYztFRFJkLHlDQ0tpQjtFREpqQixjQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FERUY7QUNBRTtFQUNFLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QURFSjtBQ0NFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QURDSjtBQ0VFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0M5QlM7QUY4QmI7O0FDS0E7RUFDRSxhQzlCUTtBRjRCVjs7QUd0Q0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZURtQmU7RUNsQmYsY0REVztBRjBDYjtBR3ZDRTtFQUNFLGFERU07RUNETix5QkFBQTtBSHlDSjtBR3RDRTtFQUNFLHlCRFZzQjtFQ1d0QixjRFZTO0VDV1Qsa0JBQUE7QUh3Q0o7QUdyQ0U7RUFDRSx5QkFBQTtBSHVDSjtBR3BDRTtFQUNFLHlCRHJCcUI7QUYyRHpCO0FHbkNFO0VBQ0UseUJEM0JjO0VDNEJkLGNEeEJTO0FGNkRiO0FHbENFO0VBQ0UsZ0JBQUE7QUhvQ0o7O0FHaENBO0VBQ0UsY0FBQTtFQUNBLG1CRDNCTztFQzRCUCx5QkR6Q2M7RUMwQ2QsY0RwQ1c7RUNxQ1gsWUFBQTtFQUNBLGtCRGRlO0VDZWYsZUFBQTtFQUNBLGtCRGZjO0VDZ0JkLHNDQUFBO0FIbUNGO0FHakNFO0VBQ0UseUJBQUE7QUhtQ0o7O0FHL0JBO0VBQ0UsYUQzQ1E7RUM0Q1IseUJEcER1QjtFQ3FEdkIseUJBQUE7RUFDQSxrQkR0Q2M7RUN1Q2Qsd0NEbEJnQjtBRm9EbEI7O0FJNUZBO0VBQ0UscUNBQUE7QUorRkY7O0FLL0ZBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCSEx1QjtFR012Qix5QkFBQTtFQUNBLDJCSFNjO0VHUmQsNEJIUWM7RUdQZCx3Q0hHVztFR0ZYLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUxrR0Y7QUtoR0U7RUFDRSxhQUFBO0FMa0dKO0FLL0ZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Qkh6Qlk7RUcwQlosa0JBQUE7RUFDQSxZSGZNO0VHZ0JOLGVBQUE7QUxpR0o7QUs5RkU7RUFDRSxpQkhwQk07RUdxQk4seUJIakNZO0VHa0NaLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JITmE7RUdPYixlQUFBO0VBQ0Esa0JIUFk7RUdRWixzQ0FBQTtBTGdHSjtBSzlGSTtFQUNFLHlCQUFBO0FMZ0dOOztBTXhJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSkR1QjtFSUV2QixhSk1RO0VJTFIseUJBQUE7RUFDQSxrQkpZYztFSVhkLHdDSk9XO0FGb0liOztBTXhJQTtFQUNFLG1CQUFBO0FOMklGOztBTXhJQTtFQUNFLGNBQUE7RUFDQSxrQkpZZTtFSVhmLHlCSm5CYztFSW9CZCxjSmRXO0VJZVgsWUFBQTtFQUNBLGtCSlNjO0VJUmQsZUFBQTtFQUNBLHNDQUFBO0FOMklGO0FNeklFO0VBQ0UseUJBQUE7QU4ySUo7O0FNdklBO0VBQ0UsMENBQUE7QU4wSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIH1cXHJcXG4gIFwiLFwiYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kcm9wZG93bi1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTAwMDE7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRvcCAwLjNzIGVhc2U7XFxufVxcbi5kcm9wZG93bi1wb3B1cC52aXNpYmxlIHtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZHJvcGRvd24tcG9wdXAuaGlkZGVuIHtcXG4gIHRvcDogLTEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uZHJvcGRvd24tcG9wdXAgLmNsb3NlLXBvcHVwLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5lbGVtZW50LXRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi5lbGVtZW50LXRhYmxlIHRoLCAuZWxlbWVudC10YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuLmVsZW1lbnQtdGFibGUgdGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjY5OTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZWxlbWVudC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDY5OTtcXG59XFxuLmVsZW1lbnQtdGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzI2NjtcXG59XFxuLmVsZW1lbnQtdGFibGUgdHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTkzMztcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4uZWxlbWVudC10YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZHJvcGRvd24tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ1Nzc7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG4uZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI3NDQ7XFxufVxcblxcbi5kcm9wZG93bi1wb3B1cCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzI2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjRkY5OTMzICFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2dnbGUtcGFuZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xcbn1cXG4udG9nZ2xlLXBhbmUuZXhwYW5kZWQge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLnRvZ2dsZS1wYW5lIC50b2dnbGUtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDU3NztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvZ2dsZS1wYW5lIC52aWV3LXNhdmVkLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ1Nzc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnRvZ2dsZS1wYW5lIC52aWV3LXNhdmVkLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNzQ0O1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzI2NjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmlubGluZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uaW5wdXQtYnV0dG9uIHtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDU3NztcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5pbnB1dC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc0NDtcXG59XFxuXFxuLmhpZ2hsaWdodGVkLWVsZW1lbnQge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAxNTMsIDUxLCAwLjUpO1xcbn1cIixcIkBpbXBvcnQgJy4uL3V0aWxzL3ZhcmlhYmxlcyc7XFxyXFxuQGltcG9ydCAnLi4vdXRpbHMvbWl4aW5zJztcXHJcXG5cXHJcXG4uZHJvcGRvd24tcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItbGlnaHQ7XFxyXFxuICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctaGVhdnk7XFxyXFxuICB6LWluZGV4OiAxMDAwMTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdG9wIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICYudmlzaWJsZSB7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaGlkZGVuIHtcXHJcXG4gICAgdG9wOiAtMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZS1wb3B1cC1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xcclxcbn1cXHJcXG5cIixcIi8vIENvbG9yIFBhbGV0dGVcXHJcXG4kcHJpbWFyeS1jb2xvcjogIzAwNDU3NzsgLy8gVXBkYXRlZCB0byBhIG1vcmUgc3RhbmRhcmQgYmx1ZVxcclxcbiRzdWNjZXNzLWNvbG9yOiAjMDA2Njk5OyAvLyBIYXJtb25pemVkIHdpdGggcHJpbWFyeSBjb2xvclxcclxcbiRoaWdobGlnaHQtY29sb3I6ICNGRjk5MzM7IC8vIFNvZnRlciByZWQgZm9yIGJldHRlciBoYXJtb255XFxyXFxuJGJvcmRlci1jb2xvcjogIzAwMDAwMDsgLy8gU2xpZ2h0bHkgbGlnaHRlciBmb3IgYSBtb2Rlcm4gbG9va1xcclxcbiRiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0OiAjRkZDMjY2OyAvLyBMaWdodCBncmV5IGZvciBiZXR0ZXIgY29udHJhc3RcXHJcXG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMwMDY2OTk7IC8vIFNsaWdodGx5IGRhcmtlciBncmV5IGZvciBoZWFkZXJzXFxyXFxuJHRleHQtY29sb3I6ICNGRkZGRkY7IC8vIERhcmsgZ3JleSBmb3IgcHJpbWFyeSB0ZXh0XFxyXFxuJHRleHQtY29sb3ItbGlnaHQ6ICNGRkZGRkY7IC8vIExpZ2h0IGdyZXkgZm9yIHNlY29uZGFyeSB0ZXh0XFxyXFxuJG92ZXJsYXktY29sb3I6ICNGRkZGRkY7XFxyXFxuLy8gQW5pbWF0aW9uc1xcclxcbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4vLyBTcGFjaW5nXFxyXFxuJHBhZGRpbmc6IDEwcHg7XFxyXFxuJG1hcmdpbjogMTVweDtcXHJcXG5cXHJcXG4vLyBTaGFkb3dzXFxyXFxuJGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuJGJveC1zaGFkb3ctaGVhdnk6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbi8vIEJvcmRlcnNcXHJcXG4kYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiRib3JkZXItd2lkdGg6IDFweDtcXHJcXG5cXHJcXG4vLyBUeXBvZ3JhcGh5XFxyXFxuJGZvbnQtZmFtaWx5OiAnQXJpYWwsIHNhbnMtc2VyaWYnO1xcclxcbiRmb250LXNpemUtYmFzZTogMTRweDtcXHJcXG4kZm9udC1zaXplLWxhcmdlOiAxOHB4O1xcclxcbiRmb250LXNpemUtc21hbGw6IDEycHg7XFxyXFxuXFxyXFxuLy8gQnV0dG9uc1xcclxcbiRidXR0b24tcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiRidXR0b24tcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuLy8gSW5wdXRzXFxyXFxuJGlucHV0LXBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuJGlucHV0LWJvcmRlci1jb2xvcjogI0NDQ0NDQztcXHJcXG5cXHJcXG4vLyBBZGRpdGlvbmFsIEVsZW1lbnQgU3R5bGVzXFxyXFxuJGRyb3Bkb3duLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJGRyb3Bkb3duLWJvcmRlcjogI0UwRTBFMDtcXHJcXG4kZHJvcGRvd24tc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI0U5RTlFOTtcXHJcXG4kdGFibGUtcm93LWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJHRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAjRjFGMUYxO1xcclxcblxcclxcbiRtb2RhbC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuJG1vZGFsLWNvbnRlbnQtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kbW9kYWwtY29udGVudC1wYWRkaW5nOiAyMHB4O1xcclxcblwiLFwiQGltcG9ydCAnLi4vdXRpbHMvdmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICcuLi91dGlscy9taXhpbnMnO1xcclxcblxcclxcbi5lbGVtZW50LXRhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIG1hcmdpbjogJG1hcmdpbiAwO1xcclxcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XFxyXFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuXFxyXFxuICB0aCwgdGQge1xcclxcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcXHJcXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0aCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjtcXHJcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0cjpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0LCAxMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdHI6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1saWdodDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgfVxcclxcblxcclxcbiAgdGQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogJGJ1dHRvbi1wYWRkaW5nO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1yYWRpdXM7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAkcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0O1xcclxcbiAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gIGJveC1zaGFkb3c6ICRkcm9wZG93bi1zaGFkb3c7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vdXRpbHMvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAkaGlnaGxpZ2h0LWNvbG9yICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vdXRpbHMvdmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICcuLi91dGlscy9taXhpbnMnO1xcclxcblxcclxcbi50b2dnbGUtcGFuZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1saWdodDtcXHJcXG4gIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICYuZXhwYW5kZWQge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZ2dsZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBtYXJnaW46ICRwYWRkaW5nO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlldy1zYXZlZC1idXR0b24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogJHBhZGRpbmc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogJGJ1dHRvbi1wYWRkaW5nO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6ICRidXR0b24tcmFkaXVzO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vdXRpbHMvdmFyaWFibGVzJztcXHJcXG5AaW1wb3J0ICcuLi91dGlscy9taXhpbnMnO1xcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1saWdodDtcXHJcXG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xcclxcbiAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLWlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206ICRtYXJnaW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1idXR0b24ge1xcclxcbiAgbWFyZ2luOiAkbWFyZ2luIDA7XFxyXFxuICBwYWRkaW5nOiAkYnV0dG9uLXBhZGRpbmc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6ICRidXR0b24tcmFkaXVzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0ZWQtZWxlbWVudCB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDE1MywgNTEsIDAuNSk7IC8vIG1vZGVyYXRlIHRvIGxvdyBvcGFjaXR5IGhpZ2hsaWdodFxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaXNDYXB0dXJlTW9kZUFjdGl2ZSB9IGZyb20gJy4uL3VpL3RvZ2dsZUJ1dHRvbic7XHJcbmltcG9ydCB7IGFkZEVsZW1lbnREZXRhaWwgfSBmcm9tICcuLi91dGlscy9kb21VdGlscyc7XHJcbmltcG9ydCB7IGFkZEVsZW1lbnRSb3cgfSBmcm9tICcuLi91aS9lbGVtZW50VGFibGUnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRXZlbnRIYW5kbGVycygpIHtcclxuICBpbml0aWFsaXplRWxlbWVudFNlbGVjdGlvbigpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRWxlbWVudFNlbGVjdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhldmVudCkge1xyXG4gIGlmICghaXNDYXB0dXJlTW9kZUFjdGl2ZSgpKSByZXR1cm47XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcjZHJvcGRvd25Qb3B1cCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcjdG9nZ2xlQnV0dG9uJykpIHJldHVybjtcclxuXHJcbiAgcHJvY2Vzc0VsZW1lbnRTZWxlY3Rpb24oZXZlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudFNlbGVjdGlvbihldmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBjb25zdCB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlubGluZUlucHV0KHRhcmdldCwgdGFnTmFtZSk7XHJcblxyXG4gIGFkZElucHV0RXZlbnRMaXN0ZW5lcnMoaW5wdXQsIHRhcmdldCk7XHJcblxyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlubGluZUlucHV0KHRhcmdldCwgdGFnTmFtZSkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGlucHV0LnZhbHVlID0gdGFnTmFtZTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBgTmFtZSBmb3IgJHt0YWdOYW1lfWApO1xyXG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lubGluZS1pbnB1dCcpO1xyXG4gIHBvc2l0aW9uSW5saW5lSW5wdXQoaW5wdXQsIHRhcmdldCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxuICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc2l0aW9uSW5saW5lSW5wdXQoaW5wdXQsIHRhcmdldCkge1xyXG4gIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgaW5wdXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIGlucHV0LnN0eWxlLnRvcCA9IGAke3JlY3QudG9wICsgd2luZG93LnNjcm9sbFl9cHhgO1xyXG4gIGlucHV0LnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWH1weGA7XHJcbiAgaW5wdXQuc3R5bGUuekluZGV4ID0gJzEwMDAyJztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW5wdXRFdmVudExpc3RlbmVycyhpbnB1dCwgdGFyZ2V0KSB7XHJcbiAgbGV0IHNob3VsZFJlbW92ZSA9IGZhbHNlO1xyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgc2hvdWxkUmVtb3ZlID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2F2ZUVsZW1lbnROYW1lKGlucHV0LCB0YXJnZXQsIHNob3VsZFJlbW92ZSksIDApO1xyXG4gIH0pO1xyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBzaG91bGRSZW1vdmUgPSBmYWxzZTsgLy8gQ2FuY2VsIHJlbW92YWwgb24gRW50ZXJcclxuICAgICAgc2F2ZUVsZW1lbnROYW1lKGlucHV0LCB0YXJnZXQsIHNob3VsZFJlbW92ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVFbGVtZW50TmFtZShpbnB1dCwgdGFyZ2V0LCBzaG91bGRSZW1vdmUpIHtcclxuICBjb25zdCBlbGVtZW50TmFtZSA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICBpZiAoc2hvdWxkUmVtb3ZlICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMoaW5wdXQpKSB7XHJcbiAgICByZW1vdmVJbnB1dEVsZW1lbnQoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnROYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBlbGVtZW50RGV0YWlscyA9IGFkZEVsZW1lbnREZXRhaWwodGFyZ2V0LCBlbGVtZW50TmFtZSk7XHJcbiAgICAgIGlmIChlbGVtZW50RGV0YWlscykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50VGFibGUnKTtcclxuICAgICAgICBhZGRFbGVtZW50Um93KGVsZW1lbnREZXRhaWxzLCBlbGVtZW50VGFibGUsIHRhcmdldCk7XHJcbiAgICAgICAgc2hvd1RlbXBvcmFyeU1lc3NhZ2UoYEVsZW1lbnQgXCIke2VsZW1lbnROYW1lfVwiIGFkZGVkIHN1Y2Nlc3NmdWxseSFgLCAnc3VjY2VzcycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dUZW1wb3JhcnlNZXNzYWdlKCdFbGVtZW50IGlzIGFscmVhZHkgYWRkZWQuJywgJ3dhcm5pbmcnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2hvd1RlbXBvcmFyeU1lc3NhZ2UoYEVycm9yIGFkZGluZyBlbGVtZW50OiAke2Vycm9yLm1lc3NhZ2V9YCwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnB1dEVsZW1lbnQoaW5wdXQpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhpbnB1dCkpIHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RlbXBvcmFyeU1lc3NhZ2UobWVzc2FnZSwgdHlwZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoJ3RlbXBvcmFyeS1tZXNzYWdlJywgdHlwZSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlQm94KTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhtZXNzYWdlQm94KSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1lc3NhZ2VCb3gpO1xyXG4gICAgfVxyXG4gIH0sIDMwMDApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgdGhlIGRyb3Bkb3duIGZvciBkaXNwbGF5aW5nIHNhdmVkIGVsZW1lbnRzLlxyXG4gKiBcclxuICogRE9NIENvbXBvbmVudHM6XHJcbiAqIC0gRHJvcGRvd24gUG9wdXA6IGA8ZGl2IGlkPVwiZHJvcGRvd25Qb3B1cFwiIGNsYXNzPVwiZHJvcGRvd24tcG9wdXAgaGlkZGVuXCI+YFxyXG4gKiAtIERyb3Bkb3duIEJ1dHRvbjogYDxidXR0b24gaWQ9XCJkcm9wZG93bkJ1dHRvblwiIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+YFxyXG4gKiAtIERyb3Bkb3duIENvbnRlbnQ6IGA8ZGl2IGlkPVwiZHJvcGRvd25Db250ZW50XCIgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+YFxyXG4gKiAtIEVsZW1lbnQgVGFibGU6IGA8dGFibGUgaWQ9XCJlbGVtZW50VGFibGVcIiBjbGFzcz1cImVsZW1lbnQtdGFibGVcIj5gXHJcbiAqIC0gVGFibGUgSGVhZGVyczogYDx0aCBjbGFzcz1cImVsZW1lbnQtdGFibGUtaGVhZGVyXCI+YFxyXG4gKiAtIENsb3NlIEJ1dHRvbjogYDxidXR0b24gaWQ9XCJjbG9zZVBvcHVwQnV0dG9uXCIgY2xhc3M9XCJjbG9zZS1wb3B1cC1idXR0b25cIj5gXHJcbiAqIFxyXG4gKiBTZWxlY3RvcnM6XHJcbiAqIC0gUG9wdXA6IGAjZHJvcGRvd25Qb3B1cGAgb3IgYC5kcm9wZG93bi1wb3B1cGBcclxuICogLSBCdXR0b246IGAjZHJvcGRvd25CdXR0b25gIG9yIGAuZHJvcGRvd24tYnV0dG9uYFxyXG4gKiAtIENvbnRlbnQ6IGAjZHJvcGRvd25Db250ZW50YCBvciBgLmRyb3Bkb3duLWNvbnRlbnRgXHJcbiAqIC0gVGFibGU6IGAjZWxlbWVudFRhYmxlYCBvciBgLmVsZW1lbnQtdGFibGVgXHJcbiAqIC0gSGVhZGVyczogYC5lbGVtZW50LXRhYmxlLWhlYWRlcmBcclxuICogLSBDbG9zZSBCdXR0b246IGAjY2xvc2VQb3B1cEJ1dHRvbmAgb3IgYC5jbG9zZS1wb3B1cC1idXR0b25gXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKCkge1xyXG4gIGNvbnN0IGRyb3Bkb3duUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkcm9wZG93blBvcHVwLmlkID0gJ2Ryb3Bkb3duUG9wdXAnO1xyXG4gIGRyb3Bkb3duUG9wdXAuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tcG9wdXAnLCAnaGlkZGVuJyk7IC8vIEhpZGRlbiBieSBkZWZhdWx0XHJcblxyXG4gIGNvbnN0IGNsb3NlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjbG9zZVBvcHVwQnV0dG9uLmlkID0gJ2Nsb3NlUG9wdXBCdXR0b24nO1xyXG4gIGNsb3NlUG9wdXBCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgY2xvc2VQb3B1cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wb3B1cC1idXR0b24nKTtcclxuICBjbG9zZVBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkcm9wZG93bkJ1dHRvbi5pZCA9ICdkcm9wZG93bkJ1dHRvbic7XHJcbiAgZHJvcGRvd25CdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBTYXZlZCBFbGVtZW50cyc7XHJcbiAgZHJvcGRvd25CdXR0b24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tYnV0dG9uJyk7XHJcblxyXG4gIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRyb3Bkb3duQ29udGVudC5pZCA9ICdkcm9wZG93bkNvbnRlbnQnO1xyXG4gIGRyb3Bkb3duQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgZWxlbWVudFRhYmxlLmlkID0gJ2VsZW1lbnRUYWJsZSc7XHJcbiAgZWxlbWVudFRhYmxlLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtdGFibGUnKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICBjb25zdCBoZWFkZXJzID0gWydOYW1lJywgJ0VsZW1lbnQgVHlwZScsICdEZXNjZW5kYW50cycsICdEZXB0aCcsICdEaW1lbnNpb25zJ107XHJcbiAgaGVhZGVycy5mb3JFYWNoKHRleHQgPT4ge1xyXG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgdGgudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgdGguY2xhc3NMaXN0LmFkZCgnZWxlbWVudC10YWJsZS1oZWFkZXInKTtcclxuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfSk7XHJcbiAgZWxlbWVudFRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XHJcblxyXG4gIGRyb3Bkb3duQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50VGFibGUpO1xyXG4gIGRyb3Bkb3duUG9wdXAuYXBwZW5kQ2hpbGQoY2xvc2VQb3B1cEJ1dHRvbik7XHJcbiAgZHJvcGRvd25Qb3B1cC5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRlbnQpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJvcGRvd25Qb3B1cCk7XHJcblxyXG4gIGRyb3Bkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlRHJvcGRvd24oZHJvcGRvd25CdXR0b24sIGRyb3Bkb3duQ29udGVudCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVEcm9wZG93bihidXR0b24sIGNvbnRlbnQpIHtcclxuICBjb25zdCBpc0hpZGRlbiA9IGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJyc7XHJcbiAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gaXNIaWRkZW4gPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGlzSGlkZGVuID8gJ0hpZGUgU2F2ZWQgRWxlbWVudHMnIDogJ1Nob3cgU2F2ZWQgRWxlbWVudHMnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKCkge1xyXG4gIGNvbnN0IGRyb3Bkb3duUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd25Qb3B1cCcpO1xyXG4gIGlmIChkcm9wZG93blBvcHVwKSB7XHJcbiAgICBkcm9wZG93blBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZHJvcGRvd25Qb3B1cC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ2JsdXJyZWQtY29udGVudCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcclxuICBjb25zdCBkcm9wZG93blBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duUG9wdXAnKTtcclxuICBpZiAoZHJvcGRvd25Qb3B1cCkge1xyXG4gICAgZHJvcGRvd25Qb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICBkcm9wZG93blBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRDb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdibHVycmVkLWNvbnRlbnQnKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGUgZWxlbWVudCB0YWJsZS5cclxuICogXHJcbiAqIERPTSBDb21wb25lbnRzOlxyXG4gKiAtIFRhYmxlIENvbnRhaW5lcjogYDx0YWJsZSBpZD1cImVsZW1lbnRUYWJsZVwiIGNsYXNzPVwiZWxlbWVudC10YWJsZVwiPmBcclxuICogLSBUYWJsZSBIZWFkZXJzOiBgPHRoIGNsYXNzPVwiZWxlbWVudC10YWJsZS1oZWFkZXJcIj5gXHJcbiAqIC0gVGFibGUgUm93czogYDx0ciBjbGFzcz1cImVsZW1lbnQtcm93XCI+YFxyXG4gKiBcclxuICogU2VsZWN0b3JzOlxyXG4gKiAtIFRhYmxlOiBgI2VsZW1lbnRUYWJsZWAgb3IgYC5lbGVtZW50LXRhYmxlYFxyXG4gKiAtIEhlYWRlcnM6IGAuZWxlbWVudC10YWJsZS1oZWFkZXJgXHJcbiAqIC0gUm93czogYC5lbGVtZW50LXJvd2BcclxuICovXHJcblxyXG5pbXBvcnQgeyBoaWdobGlnaHRFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvZG9tVXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCB0YWJsZSB3aXRoIHByZWRlZmluZWQgaGVhZGVycy5cclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgY3JlYXRlZCB0YWJsZSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUYWJsZSgpIHtcclxuICBjb25zdCBlbGVtZW50VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gIGVsZW1lbnRUYWJsZS5pZCA9ICdlbGVtZW50VGFibGUnO1xyXG4gIGVsZW1lbnRUYWJsZS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXRhYmxlJyk7XHJcblxyXG4gIGNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgY29uc3QgaGVhZGVycyA9IFsnTmFtZScsICdFbGVtZW50IFR5cGUnLCAnRGVzY2VuZGFudHMnLCAnRGVwdGgnLCAnRGltZW5zaW9ucyddO1xyXG4gIGhlYWRlcnMuZm9yRWFjaCh0ZXh0ID0+IHtcclxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIHRoLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHRoLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtdGFibGUtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIH0pO1xyXG4gIGVsZW1lbnRUYWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudFRhYmxlO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIG5ldyByb3cgdG8gdGhlIGVsZW1lbnQgdGFibGUuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50RGV0YWlscyAtIFRoZSBkZXRhaWxzIG9mIHRoZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50VGFibGUgLSBUaGUgdGFibGUgZWxlbWVudCB0byBhZGQgdGhlIHJvdyB0by5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIGhpZ2hsaWdodGVkIG9uIHJvdyBjbGljay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFbGVtZW50Um93KGVsZW1lbnREZXRhaWxzLCBlbGVtZW50VGFibGUsIHRhcmdldCkge1xyXG4gIGlmICghZWxlbWVudFRhYmxlKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgcm93LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtcm93Jyk7XHJcbiAgcm93LmlubmVySFRNTCA9IGBcclxuICAgIDx0ZD4ke2VsZW1lbnREZXRhaWxzLm5hbWV9PC90ZD5cclxuICAgIDx0ZD4ke2VsZW1lbnREZXRhaWxzLnR5cGV9PC90ZD5cclxuICAgIDx0ZD4ke2VsZW1lbnREZXRhaWxzLmRlc2NlbmRhbnRzfTwvdGQ+XHJcbiAgICA8dGQ+JHtlbGVtZW50RGV0YWlscy5kZXB0aH08L3RkPlxyXG4gICAgPHRkPiR7ZWxlbWVudERldGFpbHMuZGltZW5zaW9uc308L3RkPlxyXG4gIGA7XHJcblxyXG4gIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZ2hsaWdodEVsZW1lbnQodGFyZ2V0KSk7XHJcbiAgZWxlbWVudFRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGUgdG9nZ2xlIGJ1dHRvbiBmb3IgY2FwdHVyZSBtb2RlLlxyXG4gKiBcclxuICogRE9NIENvbXBvbmVudHM6XHJcbiAqIC0gVG9nZ2xlIEJ1dHRvbjogYDxkaXYgaWQ9XCJ0b2dnbGVCdXR0b25cIiBjbGFzcz1cInRvZ2dsZS1idXR0b25cIj5gXHJcbiAqICAgLSBBY3RpdmUgU3RhdGU6IGBjYXB0dXJlLWFjdGl2ZWBcclxuICogLSBWaWV3IFNhdmVkIEJ1dHRvbjogYDxidXR0b24gaWQ9XCJ2aWV3U2F2ZWRCdXR0b25cIiBjbGFzcz1cInZpZXctc2F2ZWQtYnV0dG9uXCI+YFxyXG4gKiBcclxuICogU2VsZWN0b3JzOlxyXG4gKiAtIEJ1dHRvbjogYCN0b2dnbGVCdXR0b25gIG9yIGAudG9nZ2xlLWJ1dHRvbmBcclxuICogLSBBY3RpdmUgU3RhdGU6IGAuY2FwdHVyZS1hY3RpdmVgXHJcbiAqIC0gVmlldyBTYXZlZCBCdXR0b246IGAjdmlld1NhdmVkQnV0dG9uYCBvciBgLnZpZXctc2F2ZWQtYnV0dG9uYFxyXG4gKi9cclxuXHJcbmxldCBjYXB0dXJlTW9kZUFjdGl2ZSA9IGZhbHNlO1xyXG5pbXBvcnQgeyBzaG93RHJvcGRvd24gfSBmcm9tIFwiLi9kcm9wZG93blwiO1xyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgdG9nZ2xlIGJ1dHRvbiBmb3IgY2FwdHVyZSBtb2RlIGFuZCB0aGUgdmlldyBzYXZlZCBlbGVtZW50cyBidXR0b24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9nZ2xlQnV0dG9uKCkge1xyXG4gIGNvbnN0IHRvZ2dsZVBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b2dnbGVQYW5lLmlkID0gJ3RvZ2dsZVBhbmUnO1xyXG4gIHRvZ2dsZVBhbmUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXBhbmUnKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9nZ2xlQnV0dG9uLmlkID0gJ3RvZ2dsZUJ1dHRvbic7XHJcbiAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1idXR0b24nKTtcclxuICB0b2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdUb2dnbGUgQ2FwdHVyZSBNb2RlJyk7XHJcblxyXG4gIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNhcHR1cmVNb2RlQWN0aXZlID0gIWNhcHR1cmVNb2RlQWN0aXZlO1xyXG4gICAgdXBkYXRlVG9nZ2xlQnV0dG9uKHRvZ2dsZUJ1dHRvbik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHZpZXdTYXZlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHZpZXdTYXZlZEJ1dHRvbi5pZCA9ICd2aWV3U2F2ZWRCdXR0b24nO1xyXG4gIHZpZXdTYXZlZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3IFNhdmVkJztcclxuICB2aWV3U2F2ZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlldy1zYXZlZC1idXR0b24nKTtcclxuICB2aWV3U2F2ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RHJvcGRvd24pO1xyXG5cclxuICB0b2dnbGVQYW5lLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XHJcbiAgdG9nZ2xlUGFuZS5hcHBlbmRDaGlsZCh2aWV3U2F2ZWRCdXR0b24pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9nZ2xlUGFuZSk7XHJcbiAgdXBkYXRlVG9nZ2xlQnV0dG9uKHRvZ2dsZUJ1dHRvbik7IC8vIEluaXRpYWxpemUgYnV0dG9uIHN0YXRlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVzIHRoZSB0b2dnbGUgYnV0dG9uIHN0YXRlIGJhc2VkIG9uIGNhcHR1cmUgbW9kZS5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uIC0gVGhlIHRvZ2dsZSBidXR0b24gZWxlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZ2dsZUJ1dHRvbihidXR0b24pIHtcclxuICBpZiAoY2FwdHVyZU1vZGVBY3RpdmUpIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4YTc0NSc7IC8vIEdyZWVuIHdoZW4gYWN0aXZlXHJcbiAgfSBlbHNlIHtcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwN0JGRic7IC8vIEJsdWUgd2hlbiBpbmFjdGl2ZVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBjYXB0dXJlIG1vZGUgaXMgYWN0aXZlLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGNhcHR1cmUgbW9kZSBpcyBhY3RpdmUsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NhcHR1cmVNb2RlQWN0aXZlKCkge1xyXG4gIHJldHVybiBjYXB0dXJlTW9kZUFjdGl2ZTtcclxufVxyXG4iLCJjb25zdCBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbmNvbnN0IGVsZW1lbnREZXRhaWxzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRWxlbWVudERldGFpbCh0YXJnZXQsIGVsZW1lbnROYW1lKSB7XHJcbiAgaWYgKGlzRWxlbWVudEFscmVhZHlTZWxlY3RlZCh0YXJnZXQpKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgaWYgdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVzY2VuZGFudHNDb3VudCA9IHRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpLmxlbmd0aDtcclxuICBjb25zdCBkZXB0aCA9IGdldERlcHRoKHRhcmdldCk7XHJcbiAgY29uc3QgZGltZW5zaW9ucyA9IGAke3RhcmdldC5vZmZzZXRXaWR0aH1weCB4ICR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XHJcblxyXG4gIHNlbGVjdGVkRWxlbWVudHMucHVzaCh0YXJnZXQpO1xyXG4gIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICBuYW1lOiBlbGVtZW50TmFtZSxcclxuICAgIHR5cGU6IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICBkZXNjZW5kYW50czogZGVzY2VuZGFudHNDb3VudCxcclxuICAgIGRlcHRoOiBkZXB0aCxcclxuICAgIGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMsXHJcbiAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcclxuICB9O1xyXG4gIGVsZW1lbnREZXRhaWxzLnB1c2goZGV0YWlscyk7XHJcblxyXG4gIHJldHVybiBkZXRhaWxzOyAvLyBSZXR1cm4gdGhlIGVsZW1lbnQgZGV0YWlscyBpZiBhZGRlZCBzdWNjZXNzZnVsbHlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCkge1xyXG4gIGxldCBkZXB0aCA9IDA7XHJcbiAgd2hpbGUgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgZGVwdGgrKztcclxuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgfVxyXG4gIHJldHVybiBkZXB0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbGVtZW50QWxyZWFkeVNlbGVjdGVkKGVsZW1lbnQpIHtcclxuICByZXR1cm4gc2VsZWN0ZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCkge1xyXG4gIGNsZWFySGlnaGxpZ2h0cygpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFySGlnaGxpZ2h0cygpIHtcclxuICBzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JykpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJzsgLy8gSW1wb3J0IHRoZSBtYWluIFNDU1MgZmlsZVxyXG5cclxuaW1wb3J0IHsgY3JlYXRlRHJvcGRvd24gfSBmcm9tICcuL3VpL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgY3JlYXRlVG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi91aS90b2dnbGVCdXR0b24nO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGFibGUgfSBmcm9tICcuL3VpL2VsZW1lbnRUYWJsZSc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVFdmVudEhhbmRsZXJzIH0gZnJvbSAnLi9ldmVudHMvZXZlbnRIYW5kbGVycyc7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xyXG4gIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIGNvbnRlbnQgdGhhdCB3aWxsIGJlIGJsdXJyZWRcclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50Q29udGFpbmVyJztcclxuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIENvbGxlY3QgYWxsIGV4aXN0aW5nIGNoaWxkcmVuIG9mIHRoZSBib2R5XHJcbiAgY29uc3QgZXhpc3RpbmdDb250ZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBjb250ZW50Q29udGFpbmVyIHRvIHRoZSBib2R5XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gTW92ZSBleGlzdGluZyBjaGlsZHJlbiBpbnRvIHRoZSBjb250ZW50Q29udGFpbmVyLCBleGNsdWRpbmcgdGhlIGNvbnRlbnRDb250YWluZXIgaXRzZWxmXHJcbiAgZXhpc3RpbmdDb250ZW50LmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgaWYgKGNoaWxkICE9PSBjb250ZW50Q29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgdG9nZ2xlIGJ1dHRvbiBhbmQgZHJvcGRvd24gY29tcG9uZW50c1xyXG4gIGNyZWF0ZVRvZ2dsZUJ1dHRvbigpO1xyXG4gIGNyZWF0ZURyb3Bkb3duKCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBlbGVtZW50IHRhYmxlXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duQ29udGVudCcpLmFwcGVuZENoaWxkKGVsZW1lbnRUYWJsZSk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgZXZlbnQgaGFuZGxlcnMgYW5kIGVsZW1lbnQgc2VsZWN0aW9uXHJcbiAgaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoKTtcclxufVxyXG5cclxuaW5pdGlhbGl6ZUFwcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=