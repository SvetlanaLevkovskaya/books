"use strict";
(self["webpackChunknicecode"] = self["webpackChunknicecode"] || []).push([["src_pages_main-page_ui_main-page_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main-page/ui/main-page.module.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main-page/ui/main-page.module.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-main-page-ui-main-page-module__container--bKXEv {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}

.src-pages-main-page-ui-main-page-module__item--GaaI1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.src-pages-main-page-ui-main-page-module__image--RhvXK {
  width: auto;
  height: 160px;
  max-width: 128px;
  max-height: 100%;
  object-fit: contain;
}

.src-pages-main-page-ui-main-page-module__title--J5RX1 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.src-pages-main-page-ui-main-page-module__title--J5RX1:hover {
  white-space: normal;
  overflow: visible;
  z-index: 1;
}

.src-pages-main-page-ui-main-page-module__title--J5RX1:hover::after {
  content: attr(data-full-title);
  display: block;
  position: absolute;
  top: 100%;
  left: 20%;
  right: 0;
  background-color: #fff;
  padding: 5px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  border: 1px solid rgba(51, 51, 51, 0.08);
  border-radius: 4px;
}

.src-pages-main-page-ui-main-page-module__authors--EceRD {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}`, "",{"version":3,"sources":["webpack://./src/pages/main-page/ui/main-page.module.scss","webpack://./src/app/styles/variables/global.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,qCAAA;EACA,cAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;AADF;;AAIA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;AADF;;AAIA;EACE,mBAAA;EACA,iBAAA;EACA,UAAA;AADF;;AAIA;EACE,8BAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,QAAA;EACA,sBC/CM;EDgDN,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,wCAAA;EACA,kBAAA;AADF;;AAIA;EACE,eAAA;EACA,WAAA;EACA,eAAA;AADF","sourcesContent":["@import 'app/styles/variables/global';\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-gap: 20px;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.image {\r\n  width: auto;\r\n  height: 160px;\r\n  max-width: 128px;\r\n  max-height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.title {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 1;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  position: relative;\r\n}\r\n\r\n.title:hover {\r\n  white-space: normal;\r\n  overflow: visible;\r\n  z-index: 1;\r\n}\r\n\r\n.title:hover::after {\r\n  content: attr(data-full-title);\r\n  display: block;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 20%;\r\n  right: 0;\r\n  background-color: $white;\r\n  padding: 5px;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  border: 1px solid $light-grey;\r\n  border-radius: 4px;\r\n}\r\n\r\n.authors {\r\n  font-size: 14px;\r\n  color: #666;\r\n  margin-top: 5px;\r\n}\r\n","// Fonts\r\n$font-main: 'SF Pro Display', sans-serif;\r\n\r\n// Colors\r\n$white: #fff;\r\n$dark: #161718;\r\n$grey: #616F82;\r\n$light-grey: rgba(51, 51, 51, 0.08);\r\n$blue: #4198C5;\r\n\r\n\r\n$navbar-height: 20px;\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `src-pages-main-page-ui-main-page-module__container--bKXEv`,
	"item": `src-pages-main-page-ui-main-page-module__item--GaaI1`,
	"image": `src-pages-main-page-ui-main-page-module__image--RhvXK`,
	"title": `src-pages-main-page-ui-main-page-module__title--J5RX1`,
	"authors": `src-pages-main-page-ui-main-page-module__authors--EceRD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/main-page/ui/main-page.module.scss":
/*!******************************************************!*\
  !*** ./src/pages/main-page/ui/main-page.module.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./main-page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main-page/ui/main-page.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./main-page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main-page/ui/main-page.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./main-page.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main-page/ui/main-page.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_page_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/main-page/ui/main-page.tsx":
/*!**********************************************!*\
  !*** ./src/pages/main-page/ui/main-page.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.module.scss */ "./src/pages/main-page/ui/main-page.module.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var baseUrl = 'https://www.googleapis.com/books/v1';
var API_KEY = "AIzaSyDj1Py-gdqiNLr0i0BFSRIQ6hsT-n3yA58";
var encodedSearchTerm = encodeURIComponent('react');
var MainPage = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), books = _a[0], setBooks = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), startIndex = _b[0], setStartIndex = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalItems = _c[0], setTotalItems = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, _a, items_1, totalItems_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(baseUrl, "/volumes"), {
                                params: {
                                    q: encodedSearchTerm,
                                    key: API_KEY,
                                    startIndex: startIndex
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        _a = response.data, items_1 = _a.items, totalItems_1 = _a.totalItems;
                        setBooks(function (prevBooks) { return __spreadArray(__spreadArray([], prevBooks, true), items_1, true); });
                        setTotalItems(totalItems_1);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchData().then(function (r) { return r; });
    }, [startIndex]);
    var loadMoreBooks = function () {
        setStartIndex(function (prevIndex) { return prevIndex + 10; });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container, children: [books.map(function (item, index) {
                var _a, _b;
                var coverImage = (_a = item.volumeInfo.imageLinks) === null || _a === void 0 ? void 0 : _a.smallThumbnail;
                var authors = (_b = item.volumeInfo.authors) === null || _b === void 0 ? void 0 : _b.join(', ');
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: coverImage, alt: "cover", className: _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].image }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title, "data-full-title": item.volumeInfo.title, children: item.volumeInfo.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: _main_page_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].authors, children: authors })] }, index));
            }), books.length < totalItems && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: loadMoreBooks, children: "Load More" }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX21haW4tcGFnZV91aV9tYWluLXBhZ2VfdHN4LjM3YWQ3NzNhMmM4MjE0NmUwODZhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0tBQWtLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsK0RBQStELG9CQUFvQixvQkFBb0IsNENBQTRDLHFCQUFxQixLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLG9CQUFvQiw2QkFBNkIseUJBQXlCLEtBQUssZ0JBQWdCLGtCQUFrQixvQkFBb0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsS0FBSyxnQkFB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bUI7QUFDN0M7QUFDQSxjQUFjLHlDQUE0QztBQUMxRDtBQUNBO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxnREFBUztBQUNiLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZDQUFLO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDBFQUEwRTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCx3Q0FBd0MsV0FBVztBQUNuRCxLQUFLO0FBQ0w7QUFDQSw2Q0FBNkMsd0JBQXdCO0FBQ3JFO0FBQ0EsWUFBWSx1REFBSyxVQUFVLFdBQVcsOERBQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFLLFVBQVUsV0FBVyw4REFBTSxrQkFBa0Isc0RBQUksVUFBVSwwQ0FBMEMsOERBQU0sUUFBUSxHQUFHLHNEQUFJLFFBQVEsV0FBVyw4REFBTSxtRkFBbUYsR0FBRyxzREFBSSxRQUFRLFdBQVcsOERBQU0sNkJBQTZCLElBQUk7QUFDcFUsYUFBYSxpQ0FBaUMsc0RBQUksYUFBYSwrQ0FBK0MsS0FBSztBQUNuSDtBQUNBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25pY2Vjb2RlLy4vc3JjL3BhZ2VzL21haW4tcGFnZS91aS9tYWluLXBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbmljZWNvZGUvLi9zcmMvcGFnZXMvbWFpbi1wYWdlL3VpL21haW4tcGFnZS5tb2R1bGUuc2Nzcz9kNWZlIiwid2VicGFjazovL25pY2Vjb2RlLy4vc3JjL3BhZ2VzL21haW4tcGFnZS91aS9tYWluLXBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX19jb250YWluZXItLWJLWEV2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG5cbi5zcmMtcGFnZXMtbWFpbi1wYWdlLXVpLW1haW4tcGFnZS1tb2R1bGVfX2l0ZW0tLUdhYUkxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zcmMtcGFnZXMtbWFpbi1wYWdlLXVpLW1haW4tcGFnZS1tb2R1bGVfX2ltYWdlLS1SaHZYSyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXgtd2lkdGg6IDEyOHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX190aXRsZS0tSjVSWDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX190aXRsZS0tSjVSWDE6aG92ZXIge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNyYy1wYWdlcy1tYWluLXBhZ2UtdWktbWFpbi1wYWdlLW1vZHVsZV9fdGl0bGUtLUo1UlgxOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1mdWxsLXRpdGxlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAyMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zcmMtcGFnZXMtbWFpbi1wYWdlLXVpLW1haW4tcGFnZS1tb2R1bGVfX2F1dGhvcnMtLUVjZVJEIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL21haW4tcGFnZS91aS9tYWluLXBhZ2UubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkMvQ007RURnRE4sWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnYXBwL3N0eWxlcy92YXJpYWJsZXMvZ2xvYmFsJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMjhweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxyXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGU6aG92ZXIge1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlOmhvdmVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtZnVsbC10aXRsZSk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDIwJTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9ycyB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXCIsXCIvLyBGb250c1xcclxcbiRmb250LW1haW46ICdTRiBQcm8gRGlzcGxheScsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gQ29sb3JzXFxyXFxuJHdoaXRlOiAjZmZmO1xcclxcbiRkYXJrOiAjMTYxNzE4O1xcclxcbiRncmV5OiAjNjE2RjgyO1xcclxcbiRsaWdodC1ncmV5OiByZ2JhKDUxLCA1MSwgNTEsIDAuMDgpO1xcclxcbiRibHVlOiAjNDE5OEM1O1xcclxcblxcclxcblxcclxcbiRuYXZiYXItaGVpZ2h0OiAyMHB4O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBgc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX19jb250YWluZXItLWJLWEV2YCxcblx0XCJpdGVtXCI6IGBzcmMtcGFnZXMtbWFpbi1wYWdlLXVpLW1haW4tcGFnZS1tb2R1bGVfX2l0ZW0tLUdhYUkxYCxcblx0XCJpbWFnZVwiOiBgc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX19pbWFnZS0tUmh2WEtgLFxuXHRcInRpdGxlXCI6IGBzcmMtcGFnZXMtbWFpbi1wYWdlLXVpLW1haW4tcGFnZS1tb2R1bGVfX3RpdGxlLS1KNVJYMWAsXG5cdFwiYXV0aG9yc1wiOiBgc3JjLXBhZ2VzLW1haW4tcGFnZS11aS1tYWluLXBhZ2UtbW9kdWxlX19hdXRob3JzLS1FY2VSRGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4tcGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4tcGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLXBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi1wYWdlLm1vZHVsZS5zY3NzJztcbnZhciBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxJztcbnZhciBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0JPT0tTX0FQSV9LRVk7XG52YXIgZW5jb2RlZFNlYXJjaFRlcm0gPSBlbmNvZGVVUklDb21wb25lbnQoJ3JlYWN0Jyk7XG52YXIgTWFpblBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoW10pLCBib29rcyA9IF9hWzBdLCBzZXRCb29rcyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKDApLCBzdGFydEluZGV4ID0gX2JbMF0sIHNldFN0YXJ0SW5kZXggPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZSgwKSwgdG90YWxJdGVtcyA9IF9jWzBdLCBzZXRUb3RhbEl0ZW1zID0gX2NbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZldGNoRGF0YSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIF9hLCBpdGVtc18xLCB0b3RhbEl0ZW1zXzEsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3MuZ2V0KFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3ZvbHVtZXNcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxOiBlbmNvZGVkU2VhcmNoVGVybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHJlc3BvbnNlLmRhdGEsIGl0ZW1zXzEgPSBfYS5pdGVtcywgdG90YWxJdGVtc18xID0gX2EudG90YWxJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJvb2tzKGZ1bmN0aW9uIChwcmV2Qm9va3MpIHsgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgcHJldkJvb2tzLCB0cnVlKSwgaXRlbXNfMSwgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG90YWxJdGVtcyh0b3RhbEl0ZW1zXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIGZldGNoRGF0YSgpLnRoZW4oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pO1xuICAgIH0sIFtzdGFydEluZGV4XSk7XG4gICAgdmFyIGxvYWRNb3JlQm9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFN0YXJ0SW5kZXgoZnVuY3Rpb24gKHByZXZJbmRleCkgeyByZXR1cm4gcHJldkluZGV4ICsgMTA7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmNvbnRhaW5lciwgY2hpbGRyZW46IFtib29rcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICB2YXIgY292ZXJJbWFnZSA9IChfYSA9IGl0ZW0udm9sdW1lSW5mby5pbWFnZUxpbmtzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc21hbGxUaHVtYm5haWw7XG4gICAgICAgICAgICAgICAgdmFyIGF1dGhvcnMgPSAoX2IgPSBpdGVtLnZvbHVtZUluZm8uYXV0aG9ycykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLml0ZW0sIGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IHNyYzogY292ZXJJbWFnZSwgYWx0OiBcImNvdmVyXCIsIGNsYXNzTmFtZTogc3R5bGVzLmltYWdlIH0pLCBfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnRpdGxlLCBcImRhdGEtZnVsbC10aXRsZVwiOiBpdGVtLnZvbHVtZUluZm8udGl0bGUsIGNoaWxkcmVuOiBpdGVtLnZvbHVtZUluZm8udGl0bGUgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuYXV0aG9ycywgY2hpbGRyZW46IGF1dGhvcnMgfSldIH0sIGluZGV4KSk7XG4gICAgICAgICAgICB9KSwgYm9va3MubGVuZ3RoIDwgdG90YWxJdGVtcyAmJiAoX2pzeChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGxvYWRNb3JlQm9va3MsIGNoaWxkcmVuOiBcIkxvYWQgTW9yZVwiIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9