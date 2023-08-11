(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./accueil.jsx": "./assets/react/controllers/accueil.jsx",
	"./login.jsx": "./assets/react/controllers/login.jsx",
	"./materiel/desktop.jsx": "./assets/react/controllers/materiel/desktop.jsx",
	"./materiel/materiel_details.jsx": "./assets/react/controllers/materiel/materiel_details.jsx",
	"./materiel/reseau.jsx": "./assets/react/controllers/materiel/reseau.jsx",
	"./materiel/reunion.jsx": "./assets/react/controllers/materiel/reunion.jsx",
	"./materiel/telephonique.jsx": "./assets/react/controllers/materiel/telephonique.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/components/copyright.jsx":
/*!*****************************************!*\
  !*** ./assets/components/copyright.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      fontWeight: "bold",
      textDecoration: "none",
      display: "flex",
      height: "70px",
      opacity: "0.5",
      color: "#000000",
      transition: "background-color 1s ease 0s",
      fontFamily: "system-ui",
      fontSize: "x-small",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff75"
    }
  }, " DigitLight \xA9 ", new Date().getFullYear(), ". Tous droits r\xE9serv\xE9s.");
}

/***/ }),

/***/ "./assets/components/header.jsx":
/*!**************************************!*\
  !*** ./assets/components/header.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_ajout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal_ajout */ "./assets/components/modal_ajout.jsx");









function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
}
;
function header(_ref) {
  var props = _ref.props,
    title = _ref.title,
    item = _ref.item,
    loadingBtn = _ref.loadingBtn,
    Items = _ref.Items,
    Category = _ref.Category,
    setItem = _ref.setItem;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/accueil"
  }, "Materiel")), item.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/materiel/".concat(capitalizeWords(title))
  }, title)), item.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, capitalizeWords(item).charAt(0).toUpperCase() + capitalizeWords(item.slice(1)))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "WelcomeMSG"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, "Bonjour ", props.appUserLogin), props.appUserRole[0] == "ROLE_ADMIN" && item.length == 0 && !loadingBtn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_modal_ajout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    Items: Items,
    Category: Category,
    setItem: setItem
  }) : null)));
}

/***/ }),

/***/ "./assets/components/itemStats.jsx":
/*!*****************************************!*\
  !*** ./assets/components/itemStats.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ itemStats)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");









var total = function total(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      {
        return ITEMS.filter(function (item) {
          return item;
        }).length;
      }
    }
    {
      return ITEMS.filter(function (item) {
        return item.categoryid == Filter;
      }).length;
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.categoryid == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).length;
    }
  }
};
var available = function available(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return item;
      }).length;
    }
    return ITEMS.filter(function (item) {
      return item.categoryid == Filter && item.available;
    }).map(function (item) {
      return item;
    }).length;
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.categoryid == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).filter(function (item) {
        return item.available;
      }).length;
    }
  }
};
var unavailable = function unavailable(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      return ITEMS.filter(function (item) {
        return !item.available;
      }).map(function (item) {
        return item;
      }).length;
    }
    return ITEMS.filter(function (item) {
      return item.categoryid == Filter && !item.available;
    }).map(function (item) {
      return item;
    }).length;
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.categoryid == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).filter(function (item) {
        return item.unavailable;
      }).length;
    }
  }
};
function itemStats(_ref) {
  var Category = _ref.Category,
    Filter = _ref.Filter,
    onCatChange = _ref.onCatChange,
    ITEMS = _ref.ITEMS,
    CAT = _ref.CAT;
  function handleChange(e) {
    onCatChange(e.target.value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "statsItems"
  }, Category == null || Category == '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Filtre:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: '187px',
      height: '45px',
      bottom: '11px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: handleChange,
    value: Filter,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Cat\xE9gorie"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "0"
  }, "Tous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "1"
  }, "R\xE9seau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "2"
  }, "T\xE9l\xE9phonique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "3"
  }, "Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "4"
  }, "R\xE9union")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "statsItemsInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Total: ", total(Category, Filter, ITEMS, CAT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Disponible: ", available(Category, Filter, ITEMS, CAT)), unavailable(Category, Filter, ITEMS, CAT) != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Indisponible: ", unavailable(Category, Filter, ITEMS, CAT)) : null)));
}

/***/ }),

/***/ "./assets/components/loading.jsx":
/*!***************************************!*\
  !*** ./assets/components/loading.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadingComp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");


function loadingComp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "loading",
    style: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto',
      width: '100px',
      height: '100px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.Rings, {
    height: "100",
    width: "100",
    color: "var(--defaut-header-color)",
    secondaryColor: "black",
    radius: "12.5",
    ariaLabel: "mutating-dots-loading",
    wrapperStyle: {},
    wrapperClass: "",
    visible: true
  }));
}

/***/ }),

/***/ "./assets/components/materiel.jsx":
/*!****************************************!*\
  !*** ./assets/components/materiel.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _modal_suppression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal_suppression */ "./assets/components/modal_suppression.jsx");
/* harmony import */ var _modal_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal_edit */ "./assets/components/modal_edit.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











function Item(_ref) {
  var props = _ref.props,
    item = _ref.item,
    ITEMS = _ref.ITEMS,
    Category = _ref.Category,
    setItem = _ref.setItem,
    cat = _ref.cat;
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "panelItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    id: "entry-pic",
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: item.href
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Nom du produit : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "/materiel/".concat(removeAccents(cat.toString()))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Cat\xE9gorie : ", cat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9")))), props.appUserRole[0] == "ROLE_ADMIN" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "modalButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_modal_edit__WEBPACK_IMPORTED_MODULE_8__["default"], {
    Item: item,
    ITEMS: ITEMS,
    Category: Category,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_modal_suppression__WEBPACK_IMPORTED_MODULE_7__["default"], {
    Item: item,
    ITEMS: ITEMS,
    Category: Category,
    setItem: setItem
  })) : null);
}

/***/ }),

/***/ "./assets/components/materiel_details.jsx":
/*!************************************************!*\
  !*** ./assets/components/materiel_details.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _modal_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal_reservation */ "./assets/components/modal_reservation.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








function Item(_ref) {
  var props = _ref.props,
    item = _ref.item,
    setItem = _ref.setItem,
    cat = _ref.cat;
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX;
    var offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.pageY;
    var x = offsetX / zoomer.offsetWidth * 50;
    var y = offsetY / zoomer.offsetHeight * 80;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "panelInfoItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("figure", {
    className: "zoom",
    onMouseMove: zoom,
    style: {
      backgroundImage: "url(".concat(item.img, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h1", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoCat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/materiel/".concat(removeAccents(cat[0]))
  }, "Cat\xE9gorie : ", props.cat)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoAvailable"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoEmpl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null, "Emplacement : ", item.emplacement, " N\xBA ", item.productID)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoDesc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Description : "), " ", item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "itemInfoCar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h3", null, "Caract\xE9ristiques : "), " ", item.caracteristiques)), item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "agendaGoogle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("iframe", {
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showDate=1&showNav=1&showTitle=0&showPrint=1&showTabs=1&showCalendars=0&src=69e129d6b440223c82dd7c76ecec9939b921ca2814c2a5d847b929f1db723d50%40group.calendar.google.com&color=%23616161",
    style: {
      border: 0
    }
  })) : null, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "boutonReserver"
  }, props.appUserCat == item.categoryid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_modal_reservation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    props: props,
    cat: cat,
    Item: item,
    setItem: setItem
  }) : null) : null));
}

/***/ }),

/***/ "./assets/components/modal_ajout.jsx":
/*!*******************************************!*\
  !*** ./assets/components/modal_ajout.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_AddBox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/AddBox */ "./node_modules/@mui/icons-material/AddBox.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }









































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function modal(_ref) {
  var Items = _ref.Items,
    Category = _ref.Category,
    setItem = _ref.setItem;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function replaceSpacesWithDashes(str) {
    return str.replace(/\s+/g, '-');
  }
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context2.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var CATEGORIES = Category;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)({
      name: "",
      category: 1,
      emplacement: "",
      description: "",
      caracteristiques: "",
      img: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var newState;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(alertOpen == true)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            if (!(value.name == "" || value.category == "" || value.emplacement == "" || value.description == "" || value.caracteristiques == "" || value.img == "")) {
              _context5.next = 9;
              break;
            }
            setAlertOpen(false);
            setAlertOpen(true);
            setAlertInfo('error');
            setAlertMessage("Veuillez remplir tous les champs");
            AlertSleep();
            return _context5.abrupt("return");
          case 9:
            try {
              newState = {
                productID: Items.length + 1,
                name: value.name,
                alt: value.name,
                categoryid: value.category,
                emplacement: value.emplacement,
                description: value.description,
                caracteristiques: value.caracteristiques,
                img: value.img,
                href: "/materiel/" + removeAccents(CATEGORIES.filter(function (cat) {
                  return cat.id == value.category;
                }).map(function (cat) {
                  return cat.name;
                })[0]) + "/" + replaceSpacesWithDashes(value.name),
                available: true
              };
              fetch('/api/addProduct', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "name": value.name,
                  "alt": value.name,
                  "categoryID": value.category,
                  "emplacement": value.emplacement,
                  "description": value.description,
                  "caracteristiques": value.caracteristiques,
                  "img": value.img
                })
              }).then( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", response.json());
                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x3) {
                  return _ref5.apply(this, arguments);
                };
              }()).then( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(object) {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(object.type == 'error')) {
                          _context4.next = 11;
                          break;
                        }
                        setAlertOpen(false);
                        setAlertOpen(true);
                        setAlertInfo('error');
                        setAlertMessage(object.message);
                        _context4.next = 7;
                        return sleep(2000);
                      case 7:
                        setAlertOpen(false);
                        return _context4.abrupt("return");
                      case 11:
                        setAlertOpen(false);
                        setAlertOpen(true);
                        setAlertInfo('info');
                        setAlertMessage(object.message);
                        setItem(function (Items) {
                          return [].concat(_toConsumableArray(Items), [newState]);
                        });
                        handleClose();
                        _context4.next = 19;
                        return sleep(2000);
                      case 19:
                        setAlertOpen(false);
                      case 20:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref6.apply(this, arguments);
                };
              }());
            } catch (error) {
              console.error(error);
            }
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement((react__WEBPACK_IMPORTED_MODULE_41___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"], {
    id: "tooltip",
    title: "Ajouter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_icons_material_AddBox__WEBPACK_IMPORTED_MODULE_45__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_46__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_47__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.name,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        name: e.target.value
      }));
    },
    margin: "dense",
    id: "Produit",
    color: "primary",
    label: "Nom du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.description,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        description: e.target.value
      }));
    },
    margin: "dense",
    id: "Description",
    color: "primary",
    label: "Description du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.caracteristiques,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        caracteristiques: e.target.value
      }));
    },
    margin: "dense",
    id: "Caract\xE9ristique",
    color: "primary",
    label: "Caract\xE9ristique du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.img,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        img: e.target.value
      }));
    },
    margin: "dense",
    id: "Image",
    color: "primary",
    label: "Image du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__["default"], {
    id: "demo-simple-select-label"
  }, "Emplacement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_53__["default"], {
    defaultValue: "",
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        emplacement: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Salle de stockage 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 1"
  }, "Salle de stockage 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 2"
  }, "Salle de stockage 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 3"
  }, "Salle de stockage 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 4"
  }, "Salle de stockage 4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_53__["default"], {
    defaultValue: "",
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        category: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "r\xE9seau"
  }, CATEGORIES.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
      key: category.id,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_41___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_55__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "Ajouter")))));
}

/***/ }),

/***/ "./assets/components/modal_edit.jsx":
/*!******************************************!*\
  !*** ./assets/components/modal_edit.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }







































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function modal(_ref) {
  var Item = _ref.Item,
    ITEMS = _ref.ITEMS,
    setItem = _ref.setItem,
    Category = _ref.Category;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context2.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var CATEGORIES = Category;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)({
      name: Item.name,
      categoryid: Item.categoryid,
      emplacement: Item.emplacement,
      description: Item.description,
      caracteristiques: Item.caracteristiques,
      img: Item.img,
      available: Item.available
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var newState;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(alertOpen == true)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            if (!(value.name == "" || value.categoryid == "" || value.emplacement == "" || value.description == "" || value.caracteristiques == "" || value.img == "" || value.available == null)) {
              _context5.next = 9;
              break;
            }
            setAlertOpen(false);
            setAlertOpen(true);
            setAlertInfo('error');
            setAlertMessage("Veuillez remplir tous les champs");
            AlertSleep();
            return _context5.abrupt("return");
          case 9:
            try {
              newState = ITEMS.map(function (obj) {
                if (obj.productID === Item.productID) {
                  return _objectSpread(_objectSpread({}, obj), {}, {
                    name: value.name,
                    categoryid: value.categoryid,
                    emplacement: value.emplacement,
                    description: value.description,
                    caracteristiques: value.caracteristiques,
                    img: value.img,
                    available: value.available
                  });
                }
                return obj;
              });
              fetch('/api/editProduct', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "productid": Item.productID,
                  "name": value.name,
                  "categoryID": value.categoryid,
                  "emplacement": value.emplacement,
                  "description": value.description,
                  "caracteristiques": value.caracteristiques,
                  "img": value.img,
                  "available": value.available
                })
              }).then( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", response.json());
                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x3) {
                  return _ref5.apply(this, arguments);
                };
              }()).then( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(object) {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(object.type == 'error')) {
                          _context4.next = 11;
                          break;
                        }
                        setAlertOpen(false);
                        setAlertOpen(true);
                        setAlertInfo('error');
                        setAlertMessage(object.message);
                        _context4.next = 7;
                        return sleep(2000);
                      case 7:
                        setAlertOpen(false);
                        return _context4.abrupt("return");
                      case 11:
                        setAlertOpen(false);
                        setAlertOpen(true);
                        setAlertInfo('info');
                        setAlertMessage(object.message);
                        setItem(newState);
                        handleClose();
                        _context4.next = 19;
                        return sleep(2000);
                      case 19:
                        setAlertOpen(false);
                      case 20:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref6.apply(this, arguments);
                };
              }());
            } catch (error) {
              console.error(error);
            }
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_39__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement((react__WEBPACK_IMPORTED_MODULE_39___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_41__["default"], {
    id: "tooltip",
    title: "Editer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_44__["default"], {
    className: "Modal",
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_45__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_47__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.name,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        name: e.target.value
      }));
    },
    margin: "dense",
    id: "Produit",
    color: "primary",
    label: "Nom du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.description,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        description: e.target.value
      }));
    },
    margin: "dense",
    id: "Description",
    color: "primary",
    label: "Description du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.caracteristiques,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        caracteristiques: e.target.value
      }));
    },
    margin: "dense",
    id: "Caract\xE9ristique",
    color: "primary",
    label: "Caract\xE9ristique du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.img,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        img: e.target.value
      }));
    },
    margin: "dense",
    id: "Image",
    color: "primary",
    label: "Image du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__["default"], {
    id: "demo-simple-select-label"
  }, "Emplacement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_51__["default"], {
    value: value.emplacement,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        emplacement: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Salle de stockage 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 1"
  }, "Salle de stockage 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 2"
  }, "Salle de stockage 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 3"
  }, "Salle de stockage 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 4"
  }, "Salle de stockage 4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_51__["default"], {
    value: value.categoryid,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        categoryid: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "r\xE9seau"
  }, CATEGORIES.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
      key: category.id,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__["default"], {
    id: "demo-simple-select-label"
  }, "Disponibilit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_51__["default"], {
    value: value.available,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        available: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "r\xE9seau"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: true
  }, "R\xE9servable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: false
  }, "Non r\xE9servable"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_39___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_53__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "\xC9diter")))));
}

/***/ }),

/***/ "./assets/components/modal_reservation.jsx":
/*!*************************************************!*\
  !*** ./assets/components/modal_reservation.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimeField */ "./node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js");
/* harmony import */ var dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! dayjs/locale/fr */ "./node_modules/dayjs/locale/fr.js");
/* harmony import */ var dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_fr__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



























































function modal(_ref) {
  var props = _ref.props,
    Item = _ref.Item,
    Items = _ref.Items,
    setItem = _ref.setItem;
  var handleClickGoogle = function handleClickGoogle() {
    fetch('/api/reserveProduct', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": Item.productID,
        "user": props.appUserLogin,
        "product": props.item,
        "category": props.cat,
        "emplacement": Item.emplacement,
        "description": value.description,
        "start_time": value.startdate,
        "end_time": value.enddate
      })
    }).then( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", response.json());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).then( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(object) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (object.type == 'error') {
                console.log('error');
                setAlertOpen(false);
                setAlertOpen(true);
                setAlertInfo('error');
                setAlertMessage("La réservation a rencontré un problème");
                AlertSleep();
              } else {
                console.log('ezezez');
                setAlertOpen(false);
                setAlertOpen(true);
                setAlertInfo('success');
                setAlertMessage("La réservation a été appliqué avec succès");
                AlertSleep();
                autoRedirect();
                handleClose();
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function sleep(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var autoRedirect = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 2000);
            });
          case 2:
            window.location.href = '/accueil';
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function autoRedirect() {
      return _ref5.apply(this, arguments);
    };
  }();
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function replaceSpacesWithDashes(str) {
    return str.replace(/\s+/g, '-');
  }
  var AlertSleep = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var i;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context5.next = 7;
              break;
            }
            _context5.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context5.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context5.abrupt("return");
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function AlertSleep() {
      return _ref6.apply(this, arguments);
    };
  }();
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)({
      name: Item.name,
      description: "Pas de description",
      startdate: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(new Date()),
      enddate: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(new Date()).add(+1, 'day')
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  var NextDay = function NextDay() {
    var tomorrow = dayjs__WEBPACK_IMPORTED_MODULE_42___default()(new Date()).add(+1, 'day');
    return tomorrow;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement((react__WEBPACK_IMPORTED_MODULE_40___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_44__["default"], {
    onClick: handleOpen,
    className: "btnReserver",
    size: "large",
    sx: {
      borderColor: "white",
      color: "white"
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "textReserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", null, "RESERVER CE MATERIEL"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_45__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_46__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_47__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "productInfos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", null, "R\xE9servateur: ", props.appUserLogin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", null, "Produit: ", props.item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", null, "Cat\xE9gorie: ", props.cat), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("p", null, "Emplacement: ", Item.emplacement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement("div", {
    className: "DateTimeFieldInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_50__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_51__.AdapterDayjs,
    adapterLocale: "fr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_52__.DateTimeField, {
    format: "DD/MM/YYYY hh:mm",
    label: "D\xE9but de la r\xE9servation",
    defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(new Date()),
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        startdate: e
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_52__.DateTimeField, {
    format: "DD/MM/YYYY hh:mm",
    label: "Fin de la r\xE9servation",
    defaultValue: NextDay(),
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        enddate: e
      }));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_53__["default"], {
    className: "modalElement",
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        description: e.target.value
      }));
    },
    margin: "dense",
    id: "Caract\xE9ristique",
    color: "primary",
    label: "Commentaire (optionnel)",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_44__["default"], {
    className: "modalElement",
    onClick: handleClickGoogle,
    size: "large",
    variant: "outlined"
  }, "Ajouter")))));
}

/***/ }),

/***/ "./assets/components/modal_suppression.jsx":
/*!*************************************************!*\
  !*** ./assets/components/modal_suppression.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/HighlightOff */ "./node_modules/@mui/icons-material/HighlightOff.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function modal(_ref) {
  var Item = _ref.Item,
    ITEMS = _ref.ITEMS,
    setItem = _ref.setItem;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return sleep(1000);
          case 2:
            deleteById(Item.productID);
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var deleteById = function deleteById(productid) {
    fetch('/api/deleteProduct', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productid": productid
      })
    }).then( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", response.json());
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()).then( /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(object) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(object.type == 'error')) {
                _context4.next = 11;
                break;
              }
              setAlertOpen(false);
              setAlertOpen(true);
              setAlertInfo('error');
              setAlertMessage(object.message);
              _context4.next = 7;
              return sleep(2000);
            case 7:
              setAlertOpen(false);
              return _context4.abrupt("return");
            case 11:
              setAlertOpen(false);
              setAlertOpen(true);
              setAlertInfo('info');
              setAlertMessage(object.message);
              setItem(ITEMS.filter(function (Itm) {
                return Itm.productID !== productid;
              }));
              _context4.next = 18;
              return sleep(2000);
            case 18:
              setAlertOpen(false);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
  var handleClick = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(alertOpen == true)) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return");
          case 3:
            handleClose();
            setAlertOpen(false);
            setAlertOpen(true);
            setAlertInfo('info');
            setAlertMessage("Suprression du matériel en cours...");
            AlertSleep();
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function handleClick() {
      return _ref6.apply(this, arguments);
    };
  }();
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__["default"], {
    id: "tooltip",
    title: "Supprimer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_35__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_36__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "modalElement",
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    style: {
      textAlign: 'center',
      padding: '14px'
    }
  }, "Voulez-vous supprimer ", Item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "Supprimer")))));
}

/***/ }),

/***/ "./assets/components/navbar.jsx":
/*!**************************************!*\
  !*** ./assets/components/navbar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function navbar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "bgImg",
    src: "/build/images/digitlight.svg",
    alt: "digilight picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/accueil"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/material.png",
    alt: "material picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mat\xE9riel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subPanelMateriel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reseau"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reseau.png",
    alt: "reseau picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9seau")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/telephonique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/telephone.png",
    alt: "telephone picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "T\xE9l\xE9phonique")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/desktop.png",
    alt: "desktop picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Desktop")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reunion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reunion.png",
    alt: "reunion picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9union"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btn btnLogout",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/logout.png",
    alt: "logout picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "D\xE9connexion")))));
}

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _js_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/bootstrap */ "./assets/js/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/js/bootstrap.js":
/*!********************************!*\
  !*** ./assets/js/bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/accueil.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/accueil.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accueil)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../components/loading */ "./assets/components/loading.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var _components_modal_ajout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../components/modal_ajout */ "./assets/components/modal_ajout.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










function Accueil(props) {
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    Category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    filter = _useState6[0],
    setFilter = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    setTimeout(function () {
      fetchProducts().then(function (data) {
        setItem(data);
        fetchProductsCat().then(function (data) {
          setCategory(data);
          setLoading(false);
        });
      });
    });
  }, []);
  function removeOpacity() {
    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }
    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function AllItems(_ref) {
    var page = _ref.page,
      loading = _ref.loading,
      filter = _ref.filter,
      setFilter = _ref.setFilter,
      Items = _ref.Items,
      setItem = _ref.setItem,
      CATEGORIES = _ref.CATEGORIES;
    var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", {
        style: {
          height: '4%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_38__["default"], {
        variant: "text",
        width: "30%",
        height: "80%",
        sx: {
          marginLeft: '5%',
          marginTop: '1.5%'
        }
      }));
    };
    var SkeletonItem = function SkeletonItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_38__["default"], {
        variant: "rounded",
        width: "45%",
        height: "15%",
        sx: {
          marginLeft: '1%',
          marginTop: '3%'
        }
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(SkeletonItem, {
        key: item
      });
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_36__["default"], {
      Category: page,
      Filter: filter,
      onCatChange: function onCatChange(categorie) {
        return setFilter(categorie);
      },
      ITEMS: Items,
      CAT: CATEGORIES
    }), items(page, filter, Items, setItem, CATEGORIES)));
  }
  var items = function items(Categorys, filterValue, ITEMS, setItem, CATEGORIES) {
    if (filterValue != 0) {
      return ITEMS.filter(function (item) {
        return item.categoryid == filterValue;
      }).filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_35__["default"], {
          props: props,
          key: item.productID,
          item: item,
          ITEMS: ITEMS,
          Category: Category,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    } else {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_35__["default"], {
          props: props,
          key: item.productID,
          item: item,
          ITEMS: ITEMS,
          Category: Category,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_loading__WEBPACK_IMPORTED_MODULE_34__["default"], null), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("main", {
    id: "main",
    className: "main",
    onLoad: removeOpacity
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_39__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", null, "Materiel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "WelcomeMSG"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", null, "Bonjour ", props.appUserLogin), props.appUserRole[0] == "ROLE_ADMIN" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_modal_ajout__WEBPACK_IMPORTED_MODULE_37__["default"], {
    Items: Items,
    Category: Category,
    setItem: setItem
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_32__["default"], {
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(AllItems, {
    page: "",
    loading: loading,
    filter: filter,
    setFilter: setFilter,
    Items: Items,
    setItem: setItem,
    CATEGORIES: Category
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_33__["default"], null))))));
}

/***/ }),

/***/ "./assets/react/controllers/login.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/login.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Login(props) {
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var AlertSleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context2.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var finalFormEndpoint = e.target.action;
    var data = Array.from(e.target.elements).filter(function (input) {
      return input.name;
    }).reduce(function (obj, input) {
      return Object.assign(obj, _defineProperty({}, input.name, input.value));
    }, {});
    // console.log(data);
    if (alertOpen == true) {
      return;
    }
    fetch(finalFormEndpoint, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'login': data.login,
        'password': data.password,
        '_csrf_token': props.csrf_token
      })
    }).then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    }).then(function (response) {
      return response.text();
    }).then(function (res) {
      // console.log(res);
      if (!res.includes('BadCredentialsException')) {
        return window.location.reload();
      } else {
        setAlertOpen(false);
        setAlertOpen(true);
        setAlertInfo('error');
        setAlertMessage("Identifiant ou mot de passe incorrect");
        AlertSleep();
      }
    })["catch"](function (err) {
      setAlertOpen(false);
      setAlertOpen(true);
      setAlertInfo('error');
      setAlertMessage("Le serveur est actuellement hors ligne");
      AlertSleep();
      // console.log(err);
    });

    return {
      handleSubmit: handleSubmit
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "panelLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "leftForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "leftFormControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("img", {
    src: "/build/images/digitlight.svg",
    alt: "DigitLight",
    width: "500",
    height: "500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("h3", null, "Le gestionnaire de r\xE9servation et de pr\xE8s de mat\xE9riels centralis\xE9s")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "panelRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "rightForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("form", {
    onSubmit: handleSubmit,
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "panelRightTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("h3", null, "Connexion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_40__["default"], {
    margin: "dense",
    id: "login",
    type: "login",
    name: "login",
    defaultValue: props.last_username,
    color: "primary",
    label: "Identifiant",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_40__["default"], {
    margin: "dense",
    id: "password",
    type: "password",
    name: "password",
    autoComplete: "",
    color: "primary",
    label: "Mot de passe",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_41__["default"], {
    size: "large",
    variant: "outlined",
    type: "submit"
  }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "panelRightControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("a", null, "Vous avez besoin d'aide ?\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("a", {
    href: "mailto:corantin.berger@hotmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contactez-nous")))))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/desktop.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/desktop.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Desktop)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Desktop(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    Category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingBtn = _useState8[0],
    setloadingBtn = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    setTimeout(function () {
      fetchProducts().then(function (data) {
        setItem(data);
        fetchProductsCat().then(function (data) {
          setCategory(data);
          setLoading(false);
          setloadingBtn(false);
        });
      });
    });
  }, []);
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function allItems(props, page) {
    var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("span", {
        style: {
          height: '4%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "text",
        width: "30%",
        height: "80%",
        sx: {
          marginLeft: '5%',
          marginTop: '1.5%'
        }
      }));
    };
    var SkeletonItem = function SkeletonItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "rounded",
        width: "45%",
        height: "15%",
        sx: {
          marginLeft: '1%',
          marginTop: '3%'
        }
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonItem, {
        key: item
      });
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_35__["default"], {
      Category: page,
      ITEMS: Items,
      CAT: Category
    }), items(props, page, Items, setItem, Category)));
  }
  var items = function items(props, Category, ITEMS, setItem, CATEGORIES) {
    if (!Category == null || !Category == '') {
      {
        return ITEMS.filter(function (item) {
          return (item.available && CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })) == Category;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_34__["default"], {
            props: props,
            key: item.productID,
            item: item,
            ITEMS: ITEMS,
            Category: CATEGORIES,
            setItem: setItem,
            cat: CATEGORIES.filter(function (cat) {
              return cat.id === item.categoryid;
            }).map(function (cat) {
              return cat.name;
            })
          });
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_32__["default"], {
    title: "Desktop",
    item: "",
    props: props,
    loadingBtn: loadingBtn,
    Items: Items,
    Category: Category,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("section", {
    className: "container"
  }, allItems(props, "desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_33__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/materiel_details.jsx":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/materiel/materiel_details.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel_details__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../components/materiel_details */ "./assets/components/materiel_details.jsx");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_38__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









































function Details(props) {
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var capitalizeWords = function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    ITEMS = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    CATEGORIES = _useState4[0],
    setCategory = _useState4[1];
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  var itemDetail = function itemDetail(props, itemName) {
    return ITEMS.filter(function (item) {
      return capitalizeWords(item.name) == capitalizeWords(itemName);
    }).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_components_materiel_details__WEBPACK_IMPORTED_MODULE_37__["default"], {
        key: item.productID,
        props: props,
        item: item,
        cat: CATEGORIES.filter(function (cat) {
          return cat.id === item.categoryid;
        }).map(function (cat) {
          return cat.name;
        })
      });
    });
  };
  function itemInfo(props, itemName) {
    var ItemImage = function ItemImage() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_39__["default"], {
        animation: "wave",
        variant: "rounded",
        width: "80%",
        height: "55%",
        sx: {
          marginLeft: '10%'
        }
      });
    };
    var TextTitle = function TextTitle() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_39__["default"], {
        variant: "rounded",
        width: "50%",
        height: "3%",
        sx: {
          marginLeft: '10%',
          marginTop: '1%'
        }
      });
    };
    var TextDescription = function TextDescription() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_39__["default"], {
        variant: "rounded",
        width: "80%",
        height: "2%",
        sx: {
          marginLeft: '10%',
          marginTop: '3%'
        }
      });
    };
    var Button = function Button() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_39__["default"], {
        animation: "wave",
        variant: "rounded",
        width: "50%",
        height: "3%",
        sx: {
          marginLeft: '10%',
          marginTop: '8%'
        }
      });
    };
    var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];
    (0,react__WEBPACK_IMPORTED_MODULE_38__.useEffect)(function () {
      setTimeout(function () {
        fetchProducts().then(function (data) {
          setItem(data);
          fetchProductsCat().then(function (data) {
            setCategory(data);
            setLoading(false);
          });
        });
      });
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(ItemImage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(TextTitle, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(TextDescription, {
        key: item
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(Button, null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, itemDetail(props, itemName)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_35__["default"], {
    title: props.cat,
    item: props.item,
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_34__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("section", {
    className: "InfoItem"
  }, itemInfo(props, props.item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_36__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reseau.jsx":
/*!******************************************************!*\
  !*** ./assets/react/controllers/materiel/reseau.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Réseau)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Réseau(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    Category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingBtn = _useState8[0],
    setloadingBtn = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    setTimeout(function () {
      fetchProducts().then(function (data) {
        setItem(data);
        fetchProductsCat().then(function (data) {
          setCategory(data);
          setLoading(false);
          setloadingBtn(false);
        });
      });
    });
  }, []);
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function allItems(props, page) {
    var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("span", {
        style: {
          height: '4%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "text",
        width: "30%",
        height: "80%",
        sx: {
          marginLeft: '5%',
          marginTop: '1.5%'
        }
      }));
    };
    var SkeletonItem = function SkeletonItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "rounded",
        width: "45%",
        height: "15%",
        sx: {
          marginLeft: '1%',
          marginTop: '3%'
        }
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonItem, {
        key: item
      });
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_35__["default"], {
      Category: page,
      ITEMS: Items,
      CAT: Category
    }), items(props, page, Items, setItem, Category)));
  }
  var items = function items(props, Category, ITEMS, setItem, CATEGORIES) {
    if (!Category == null || !Category == '') {
      {
        return ITEMS.filter(function (item) {
          return (item.available && CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })) == Category;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_34__["default"], {
            props: props,
            key: item.productID,
            item: item,
            ITEMS: ITEMS,
            Category: CATEGORIES,
            setItem: setItem,
            cat: CATEGORIES.filter(function (cat) {
              return cat.id === item.categoryid;
            }).map(function (cat) {
              return cat.name;
            })
          });
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_32__["default"], {
    title: "R\xE9seau",
    item: "",
    props: props,
    loadingBtn: loadingBtn,
    Items: Items,
    Category: Category,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("section", {
    className: "container"
  }, allItems(props, "réseau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_33__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reunion.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/reunion.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Réunion)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Réunion(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    Category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingBtn = _useState8[0],
    setloadingBtn = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    setTimeout(function () {
      fetchProducts().then(function (data) {
        setItem(data);
        fetchProductsCat().then(function (data) {
          setCategory(data);
          setLoading(false);
          setloadingBtn(false);
        });
      });
    });
  }, []);
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function allItems(props, page) {
    var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("span", {
        style: {
          height: '4%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "text",
        width: "30%",
        height: "80%",
        sx: {
          marginLeft: '5%',
          marginTop: '1.5%'
        }
      }));
    };
    var SkeletonItem = function SkeletonItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "rounded",
        width: "45%",
        height: "15%",
        sx: {
          marginLeft: '1%',
          marginTop: '3%'
        }
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonItem, {
        key: item
      });
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_35__["default"], {
      Category: page,
      ITEMS: Items,
      CAT: Category
    }), items(props, page, Items, setItem, Category)));
  }
  var items = function items(props, Category, ITEMS, setItem, CATEGORIES) {
    if (!Category == null || !Category == '') {
      {
        return ITEMS.filter(function (item) {
          return (item.available && CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })) == Category;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_34__["default"], {
            props: props,
            key: item.productID,
            item: item,
            ITEMS: ITEMS,
            Category: CATEGORIES,
            setItem: setItem,
            cat: CATEGORIES.filter(function (cat) {
              return cat.id === item.categoryid;
            }).map(function (cat) {
              return cat.name;
            })
          });
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_32__["default"], {
    title: "R\xE9union",
    item: "",
    props: props,
    loadingBtn: loadingBtn,
    Items: Items,
    Category: Category,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("section", {
    className: "container"
  }, allItems(props, "réunion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_33__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/telephonique.jsx":
/*!************************************************************!*\
  !*** ./assets/react/controllers/materiel/telephonique.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Telephonique)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Telephonique(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    Category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingBtn = _useState8[0],
    setloadingBtn = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    setTimeout(function () {
      fetchProducts().then(function (data) {
        setItem(data);
        fetchProductsCat().then(function (data) {
          setCategory(data);
          setLoading(false);
          setloadingBtn(false);
        });
      });
    });
  }, []);
  function fetchProducts() {
    return _fetchProducts.apply(this, arguments);
  }
  function _fetchProducts() {
    _fetchProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var test;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/products").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.items;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context.sent;
            _context.next = 5;
            return test;
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchProducts.apply(this, arguments);
  }
  function fetchProductsCat() {
    return _fetchProductsCat.apply(this, arguments);
  }
  function _fetchProductsCat() {
    _fetchProductsCat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var test;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/productsCat").then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.categories;
            })["catch"](function (error) {
              console.error(error);
            });
          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return test;
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _fetchProductsCat.apply(this, arguments);
  }
  function randomTime(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function allItems(props, page) {
    var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("span", {
        style: {
          height: '4%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "text",
        width: "30%",
        height: "80%",
        sx: {
          marginLeft: '5%',
          marginTop: '1.5%'
        }
      }));
    };
    var SkeletonItem = function SkeletonItem() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_37__["default"], {
        variant: "rounded",
        width: "45%",
        height: "15%",
        sx: {
          marginLeft: '1%',
          marginTop: '3%'
        }
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(SkeletonItem, {
        key: item
      });
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_35__["default"], {
      Category: page,
      ITEMS: Items,
      CAT: Category
    }), items(props, page, Items, setItem, Category)));
  }
  var items = function items(props, Category, ITEMS, setItem, CATEGORIES) {
    if (!Category == null || !Category == '') {
      {
        return ITEMS.filter(function (item) {
          return (item.available && CATEGORIES.filter(function (cat) {
            return cat.id === item.categoryid;
          }).map(function (cat) {
            return cat.name;
          })) == Category;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_34__["default"], {
            props: props,
            key: item.productID,
            item: item,
            ITEMS: ITEMS,
            Category: CATEGORIES,
            setItem: setItem,
            cat: CATEGORIES.filter(function (cat) {
              return cat.id === item.categoryid;
            }).map(function (cat) {
              return cat.name;
            })
          });
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_32__["default"], {
    title: "T\xE9l\xE9phonique",
    item: "",
    props: props,
    loadingBtn: loadingBtn,
    Items: Items,
    Category: Category,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("section", {
    className: "container"
  }, allItems(props, "téléphonique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_33__["default"], null)))));
}

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerReactControllerComponents": () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);













function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      var possibleValues = Object.keys(reactControllers).map(function (key) {
        return key.replace('./', '').replace('.jsx', '').replace('.tsx', '');
      });
      throw new Error("React controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement(react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/global.css":
/*!**********************************!*\
  !*** ./assets/styles/global.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_AddBox_js-node_modules_mui_icons-material_Close_js-no-47bfde"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDK1IsSUFBSSxFQUFFO1FBQ2YvUixPQUFPLENBQUMrUixJQUFJLEdBQUdqQixVQUFVLENBQUMsSUFBSSxDQUFDOVEsT0FBTyxDQUFDO01BQzNDO01BQ0FBLE9BQU8sQ0FBQytSLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7SUFDckM7RUFBQztJQUFBO0lBQUEsT0FDRCx1QkFBY3pPLElBQUksRUFBRTJPLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQzVPLElBQUksRUFBRTtRQUFFNk8sTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0VBQUE7QUFBQSxFQS9CbUJ2UywyREFBVTtBQWlDbEN5UixTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmNUIsU0FBUyxFQUFFNkIsTUFBTTtFQUNqQnRRLEtBQUssRUFBRW1NO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2l0ZW1TdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vZGFsX2Fqb3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9tb2RhbF9lZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9tb2RhbF9yZXNlcnZhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbW9kYWxfc3VwcHJlc3Npb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hY2N1ZWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbG9naW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9kZXNrdG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvbWF0ZXJpZWxfZGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3Jlc2VhdS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3JldW5pb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC90ZWxlcGhvbmlxdWUuanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hY2N1ZWlsLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FjY3VlaWwuanN4XCIsXG5cdFwiLi9sb2dpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9sb2dpbi5qc3hcIixcblx0XCIuL21hdGVyaWVsL2Rlc2t0b3AuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvZGVza3RvcC5qc3hcIixcblx0XCIuL21hdGVyaWVsL21hdGVyaWVsX2RldGFpbHMuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvbWF0ZXJpZWxfZGV0YWlscy5qc3hcIixcblx0XCIuL21hdGVyaWVsL3Jlc2VhdS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9yZXNlYXUuanN4XCIsXG5cdFwiLi9tYXRlcmllbC9yZXVuaW9uLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3JldW5pb24uanN4XCIsXG5cdFwiLi9tYXRlcmllbC90ZWxlcGhvbmlxdWUuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvdGVsZXBob25pcXVlLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjcwcHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMXMgZWFzZSAwc1wiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInN5c3RlbS11aVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJ4LXNtYWxsXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZjc1XCJcclxuICAgICAgICB9fT4gRGlnaXRMaWdodCDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS4gVG91cyBkcm9pdHMgcsOpc2VydsOpcy48L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbGJ1dHRvbiBmcm9tICcuL21vZGFsX2Fqb3V0JztcclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVXb3JkcyhzdHIpIHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXHJcbiAgICAgICAgLmpvaW4oJyAnKS5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIikucmVwbGFjZUFsbCgnLScsIFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKHsgcHJvcHMsIHRpdGxlLCBpdGVtLCBsb2FkaW5nQnRuLCBJdGVtcywgQ2F0ZWdvcnksIHNldEl0ZW0gfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYW5lbEhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0ZXJpZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoIDw9IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtjYXBpdGFsaXplV29yZHModGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcGl0YWxpemVXb3JkcyhpdGVtKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhcGl0YWxpemVXb3JkcyhpdGVtLnNsaWNlKDEpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlbGNvbWVNU0dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb25qb3VyIHtwcm9wcy5hcHBVc2VyTG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hcHBVc2VyUm9sZVswXSA9PSBcIlJPTEVfQURNSU5cIiAmJiBpdGVtLmxlbmd0aCA9PSAwICYmICFsb2FkaW5nQnRuID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsYnV0dG9uIEl0ZW1zPXtJdGVtc30gQ2F0ZWdvcnk9e0NhdGVnb3J5fSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvPilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuXHJcbmNvbnN0IHRvdGFsID0gZnVuY3Rpb24gKHBhZ2UsIEZpbHRlciwgSVRFTVMsIENBVCkge1xyXG5cclxuICBpZiAocGFnZSA9PSBudWxsIHx8IHBhZ2UgPT0gJycpIHtcclxuICAgIGlmIChGaWx0ZXIgPT0gMCkge1xyXG4gICAgICB7IHJldHVybiAoSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubGVuZ3RoKSB9XHJcbiAgICB9XHJcblxyXG4gICAgeyByZXR1cm4gKElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnlpZCA9PSBGaWx0ZXIpLmxlbmd0aCkgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHsgcmV0dXJuIChJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5aWQgPT0gQ0FULmZpbHRlcihjYXQgPT4gKGNhdC5uYW1lID09PSBwYWdlKSkubWFwKGNhdCA9PiAoY2F0LmlkKSkpKS5sZW5ndGggfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXZhaWxhYmxlID0gZnVuY3Rpb24gKHBhZ2UsIEZpbHRlciwgSVRFTVMsIENBVCkge1xyXG4gIGlmIChwYWdlID09IG51bGwgfHwgcGFnZSA9PSAnJykge1xyXG5cclxuICAgIGlmIChGaWx0ZXIgPT0gMCkge1xyXG4gICAgICByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hdmFpbGFibGUpXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIChpdGVtKSkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnlpZCA9PSBGaWx0ZXIgJiYgaXRlbS5hdmFpbGFibGUpXHJcbiAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgKGl0ZW0pKS5sZW5ndGhcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5aWQgPT0gQ0FULmZpbHRlcihjYXQgPT4gKGNhdC5uYW1lID09PSBwYWdlKSkubWFwKGNhdCA9PiAoY2F0LmlkKSkpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKS5sZW5ndGhcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuYXZhaWxhYmxlID0gZnVuY3Rpb24gKHBhZ2UsIEZpbHRlciwgSVRFTVMsIENBVCkge1xyXG4gIGlmIChwYWdlID09IG51bGwgfHwgcGFnZSA9PSAnJykge1xyXG5cclxuICAgIGlmIChGaWx0ZXIgPT0gMCkge1xyXG4gICAgICByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uYXZhaWxhYmxlKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAoaXRlbSkpLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5aWQgPT0gRmlsdGVyICYmICFpdGVtLmF2YWlsYWJsZSlcclxuICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAoaXRlbSkpLmxlbmd0aFxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnlpZCA9PSBDQVQuZmlsdGVyKGNhdCA9PiAoY2F0Lm5hbWUgPT09IHBhZ2UpKS5tYXAoY2F0ID0+IChjYXQuaWQpKSlcclxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS51bmF2YWlsYWJsZSkubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtU3RhdHMoeyBDYXRlZ29yeSwgRmlsdGVyLCBvbkNhdENoYW5nZSwgSVRFTVMsIENBVCB9KSB7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBvbkNhdENoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzSXRlbXNcIj5cclxuXHJcbiAgICAgIHsoQ2F0ZWdvcnkgPT0gbnVsbCB8fCBDYXRlZ29yeSA9PSAnJykgPyAoPD48c3Bhbj5cclxuICAgICAgICBGaWx0cmU6XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTg3cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICBib3R0b206ICcxMXB4J1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5DYXTDqWdvcmllPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17RmlsdGVyfVxyXG4gICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNhdMOpZ29yaWVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCIwXCI+VG91czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjFcIj5Sw6lzZWF1PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiMlwiPlTDqWzDqXBob25pcXVlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiM1wiPkRlc2t0b3A8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI0XCI+UsOpdW5pb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD48Lz4pIDpcclxuICAgICAgICAoPD48Lz4pfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdHNJdGVtc0luZm8nPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgVG90YWw6IHt0b3RhbChDYXRlZ29yeSwgRmlsdGVyLCBJVEVNUywgQ0FUKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBEaXNwb25pYmxlOiB7YXZhaWxhYmxlKENhdGVnb3J5LCBGaWx0ZXIsIElURU1TLCBDQVQpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB7dW5hdmFpbGFibGUoQ2F0ZWdvcnksIEZpbHRlciwgSVRFTVMsIENBVCkgIT0gMCA/XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgSW5kaXNwb25pYmxlOiB7dW5hdmFpbGFibGUoQ2F0ZWdvcnksIEZpbHRlciwgSVRFTVMsIENBVCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PjwvZGl2PlxyXG4gIDwvPilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJpbmdzIH0gZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ0NvbXAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICAgICAgfX0+PFJpbmdzXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1kZWZhdXQtaGVhZGVyLWNvbG9yKVwiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlDb2xvcj0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICByYWRpdXM9JzEyLjUnXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJtdXRhdGluZy1kb3RzLWxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJ1xyXG5pbXBvcnQgQnV0dG9uRGVsZXRlIGZyb20gJy4vbW9kYWxfc3VwcHJlc3Npb24nO1xyXG5pbXBvcnQgQnV0dG9uRWRpdCBmcm9tICcuL21vZGFsX2VkaXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7cHJvcHMsIGl0ZW0sIElURU1TLCBDYXRlZ29yeSwgc2V0SXRlbSwgY2F0IH0pIHtcclxuICBcclxuICBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYW5lbEl0ZW1cIj5cclxuICAgIDxkaXYgaWQ9XCJlbnRyeS1waWNcIiBjbGFzc05hbWU9XCJwYW5lbEltYWdlXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpdGVtLmltZ31cclxuICAgICAgICAgIGFsdD17aXRlbS5hbHR9XHJcbiAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8c3Bhbj5Ob20gZHUgcHJvZHVpdCA6IDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9UaXRsZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtyZW1vdmVBY2NlbnRzKGNhdC50b1N0cmluZygpKX1gfT5cclxuICAgICAgICAgIDxzcGFuPkNhdMOpZ29yaWUgOiB7Y2F0fTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICB7aXRlbS5hdmFpbGFibGUgP1xyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZGFya2dyZWVuXCIgfX0+RGlzcG9uaWJsZTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5Sw6lzZXJ2w6k8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7cHJvcHMuYXBwVXNlclJvbGVbMF0gPT0gXCJST0xFX0FETUlOXCIgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uRWRpdCBJdGVtPXtpdGVtfSBJVEVNUz17SVRFTVN9IENhdGVnb3J5PXtDYXRlZ29yeX0gc2V0SXRlbT17c2V0SXRlbX0gLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uRGVsZXRlIEl0ZW09e2l0ZW19IElURU1TPXtJVEVNU30gQ2F0ZWdvcnk9e0NhdGVnb3J5fSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICA8L2Rpdj4pXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uUmVzZXJ2ZXIgZnJvbSAnLi9tb2RhbF9yZXNlcnZhdGlvbic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgcHJvcHMsIGl0ZW0sIHNldEl0ZW0sIGNhdCB9KSB7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFjY2VudHMoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gem9vbShlKSB7XHJcblxyXG4gICAgdmFyIHpvb21lciA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBsZXQgb2Zmc2V0WDtcclxuICAgIGxldCBvZmZzZXRZO1xyXG5cclxuICAgIGUub2Zmc2V0WCA/IG9mZnNldFggPSBlLm9mZnNldFggOiBvZmZzZXRYID0gZS5wYWdlWDtcclxuICAgIGUub2Zmc2V0WSA/IG9mZnNldFkgPSBlLm9mZnNldFkgOiBvZmZzZXRZID0gZS5wYWdlWTtcclxuXHJcbiAgICBsZXQgeCA9IG9mZnNldFggLyB6b29tZXIub2Zmc2V0V2lkdGggKiA1MFxyXG4gICAgbGV0IHkgPSBvZmZzZXRZIC8gem9vbWVyLm9mZnNldEhlaWdodCAqIDgwXHJcblxyXG4gICAgem9vbWVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHggKyAnJSAnICsgeSArICclJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYW5lbEluZm9JdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsSW1hZ2VcIj5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ6b29tXCIgb25Nb3VzZU1vdmU9e3pvb219IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1nfSlgIH19PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0NhdFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtyZW1vdmVBY2NlbnRzKGNhdFswXSl9YH0+XHJcbiAgICAgICAgICBDYXTDqWdvcmllIDoge3Byb3BzLmNhdH1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpdGVtSW5mb0F2YWlsYWJsZVwifT5cclxuICAgICAgICB7aXRlbS5hdmFpbGFibGUgP1xyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHAgc3R5bGU9e3sgY29sb3I6IFwiZGFya2dyZWVuXCIgfX0+RGlzcG9uaWJsZTwvcD48L3NwYW4+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5Sw6lzZXJ2w6k8L3A+PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9FbXBsXCI+XHJcbiAgICAgICAgPHA+RW1wbGFjZW1lbnQgOiB7aXRlbS5lbXBsYWNlbWVudH0gTsK6IHtpdGVtLnByb2R1Y3RJRH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvRGVzY1wiPlxyXG4gICAgICAgIDxzcGFuPjxoMz5EZXNjcmlwdGlvbiA6IDwvaDM+IHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9DYXJcIj5cclxuICAgICAgICA8c3Bhbj48aDM+Q2FyYWN0w6lyaXN0aXF1ZXMgOiA8L2gzPiB7aXRlbS5jYXJhY3RlcmlzdGlxdWVzfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpdGVtLmF2YWlsYWJsZSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ2VuZGFHb29nbGVcIj5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2VtYmVkP2hlaWdodD02MDAmd2tzdD0xJmJnY29sb3I9JTIzZmZmZmZmJmN0ej1FdXJvcGUlMkZQYXJpcyZzaG93RGF0ZT0xJnNob3dOYXY9MSZzaG93VGl0bGU9MCZzaG93UHJpbnQ9MSZzaG93VGFicz0xJnNob3dDYWxlbmRhcnM9MCZzcmM9NjllMTI5ZDZiNDQwMjIzYzgyZGQ3Yzc2ZWNlYzk5MzliOTIxY2EyODE0YzJhNWQ4NDdiOTI5ZjFkYjcyM2Q1MCU0MGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20mY29sb3I9JTIzNjE2MTYxXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwIH19PlxyXG4gICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIHtpdGVtLmF2YWlsYWJsZSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3V0b25SZXNlcnZlclwiPlxyXG5cclxuICAgICAgICAgIHtwcm9wcy5hcHBVc2VyQ2F0ID09IGl0ZW0uY2F0ZWdvcnlpZCA/XHJcbiAgICAgICAgICAgIDxCdXR0b25SZXNlcnZlciBwcm9wcz17cHJvcHN9IGNhdD17Y2F0fSBJdGVtPXtpdGVtfSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4pXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBBZGRCb3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkQm94JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbXVpL21hdGVyaWFsL0FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgSXRlbXMsIENhdGVnb3J5LCBzZXRJdGVtIH0pIHtcclxuXHJcbiAgICAvL0FMRVJUIE1FU1NBR0VcclxuICAgIGNvbnN0IFthbGVydE9wZW4sIHNldEFsZXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWxlcnRNZXNzYWdlLCBzZXRBbGVydE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW0FsZXJ0SW5mbywgc2V0QWxlcnRJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBzbGVlcCA9IGFzeW5jIChtaWxsaXNlY29uZHMpID0+IHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVNwYWNlc1dpdGhEYXNoZXMoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ0FURUdPUklFUyA9IENhdGVnb3J5O1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogMSxcclxuICAgICAgICAgICAgZW1wbGFjZW1lbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlwiLFxyXG4gICAgICAgICAgICBpbWc6IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGFsZXJ0T3BlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5uYW1lID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuY2F0ZWdvcnkgPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5lbXBsYWNlbWVudCA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmRlc2NyaXB0aW9uID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuY2FyYWN0ZXJpc3RpcXVlcyA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmltZyA9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJylcclxuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHNcIilcclxuICAgICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJRDogSXRlbXMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeWlkOiB2YWx1ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGVtcGxhY2VtZW50OiB2YWx1ZS5lbXBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB2YWx1ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IHZhbHVlLmNhcmFjdGVyaXN0aXF1ZXMsXHJcbiAgICAgICAgICAgICAgICBpbWc6IHZhbHVlLmltZyxcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL1wiICsgcmVtb3ZlQWNjZW50cyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PSB2YWx1ZS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSlbMF0pICsgXCIvXCIgKyByZXBsYWNlU3BhY2VzV2l0aERhc2hlcyh2YWx1ZS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2FkZFByb2R1Y3QnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5SURcIjogdmFsdWUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbXBsYWNlbWVudFwiOiB2YWx1ZS5lbXBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHZhbHVlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyYWN0ZXJpc3RpcXVlc1wiOiB2YWx1ZS5jYXJhY3RlcmlzdGlxdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW1nXCI6IHZhbHVlLmltZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2Uob2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdpbmZvJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2Uob2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbSgoSXRlbXMpID0+IFsuLi5JdGVtcywgbmV3U3RhdGVdKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PnthbGVydE9wZW4gJiZcclxuICAgICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cImFsZXJ0UG9wVXBcIiBzdHlsZT17eyB6SW5kZXg6ICc5OTk5Jywgd2lkdGg6IFwiMVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IHNldmVyaXR5PXtBbGVydEluZm99IGNvbG9yPXtBbGVydEluZm99PlxyXG4gICAgICAgICAgICAgICAge2FsZXJ0TWVzc2FnZX1cclxuICAgICAgICAgICAgPC9BbGVydD59XHJcblxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIiB0aXRsZT1cIkFqb3V0ZXJcIj48SWNvbkJ1dHRvbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjVyZW0gMHB4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXHJcbiAgICAgICAgICAgIH19IG9uQ2xpY2s9e2hhbmRsZU9wZW59PjxBZGRCb3hJY29uIC8+PC9JY29uQnV0dG9uPjwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibW9kYWwwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsMDFCdXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+PENsb3NlSWNvbiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tIGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb24gZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuY2FyYWN0ZXJpc3RpcXVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGNhcmFjdGVyaXN0aXF1ZXM6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FyYWN0w6lyaXN0aXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJhY3TDqXJpc3RpcXVlIGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGltZzogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+RW1wbGFjZW1lbnQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgZW1wbGFjZW1lbnQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2FsbGUgZGUgc3RvY2thZ2UgMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU2FsbGUgZGUgc3RvY2thZ2UgMVwiPlNhbGxlIGRlIHN0b2NrYWdlIDE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDJcIj5TYWxsZSBkZSBzdG9ja2FnZSAyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTYWxsZSBkZSBzdG9ja2FnZSAzXCI+U2FsbGUgZGUgc3RvY2thZ2UgMzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU2FsbGUgZGUgc3RvY2thZ2UgNFwiPlNhbGxlIGRlIHN0b2NrYWdlIDQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+Q2F0w6lnb3JpZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJyw6lzZWF1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUy5tYXAoY2F0ZWdvcnkgPT4gPE1lbnVJdGVtIGtleT17Y2F0ZWdvcnkuaWR9IHZhbHVlPXtjYXRlZ29yeS5pZH0+e2NhdGVnb3J5Lm5hbWV9PC9NZW51SXRlbT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+QWpvdXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Nb2RhbD48Lz5cclxuICAgIClcclxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuaW1wb3J0IEFkZEJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbXVpL21hdGVyaWFsL0FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgSXRlbSwgSVRFTVMsIHNldEl0ZW0sIENhdGVnb3J5IH0pIHtcclxuXHJcblxyXG4gICAgLy9BTEVSVCBNRVNTQUdFXHJcbiAgICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtBbGVydEluZm8sIHNldEFsZXJ0SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2xlZXAgPSBhc3luYyAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcylcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ0FURUdPUklFUyA9IENhdGVnb3J5O1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBJdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5aWQ6IEl0ZW0uY2F0ZWdvcnlpZCxcclxuICAgICAgICAgICAgZW1wbGFjZW1lbnQ6IEl0ZW0uZW1wbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBJdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBJdGVtLmNhcmFjdGVyaXN0aXF1ZXMsXHJcbiAgICAgICAgICAgIGltZzogSXRlbS5pbWcsXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZTogSXRlbS5hdmFpbGFibGUsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGFsZXJ0T3BlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5uYW1lID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuY2F0ZWdvcnlpZCA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmVtcGxhY2VtZW50ID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuZGVzY3JpcHRpb24gPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5jYXJhY3RlcmlzdGlxdWVzID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuaW1nID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuYXZhaWxhYmxlID09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpXHJcbiAgICAgICAgICAgIHNldEFsZXJ0SW5mbygnZXJyb3InKVxyXG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJWZXVpbGxleiByZW1wbGlyIHRvdXMgbGVzIGNoYW1wc1wiKVxyXG4gICAgICAgICAgICBBbGVydFNsZWVwKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSVRFTVMubWFwKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnByb2R1Y3RJRCA9PT0gSXRlbS5wcm9kdWN0SUQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ6IHZhbHVlLmNhdGVnb3J5aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxhY2VtZW50OiB2YWx1ZS5lbXBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiB2YWx1ZS5jYXJhY3RlcmlzdGlxdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IHZhbHVlLmltZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlOiB2YWx1ZS5hdmFpbGFibGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9lZGl0UHJvZHVjdCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBcInByb2R1Y3RpZFwiOiBJdGVtLnByb2R1Y3RJRCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5SURcIjogdmFsdWUuY2F0ZWdvcnlpZCxcclxuICAgICAgICAgICAgICAgICAgICBcImVtcGxhY2VtZW50XCI6IHZhbHVlLmVtcGxhY2VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogdmFsdWUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJhY3RlcmlzdGlxdWVzXCI6IHZhbHVlLmNhcmFjdGVyaXN0aXF1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbWdcIjogdmFsdWUuaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXZhaWxhYmxlXCI6IHZhbHVlLmF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2Uob2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdpbmZvJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2Uob2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD57YWxlcnRPcGVuICYmXHJcbiAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJhbGVydFBvcFVwXCIgc3R5bGU9e3sgekluZGV4OiAnOTk5OScsIHdpZHRoOiBcIjFcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSBzZXZlcml0eT17QWxlcnRJbmZvfSBjb2xvcj17QWxlcnRJbmZvfT5cclxuICAgICAgICAgICAgICAgIHthbGVydE1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+fVxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXRlclwiPjxJY29uQnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAuNXJlbSAwcHgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcclxuICAgICAgICAgICAgfX0gb25DbGljaz17aGFuZGxlT3Blbn0+PEFkZEJveEljb24gLz48L0ljb25CdXR0b24+PC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8TW9kYWwgY2xhc3NOYW1lPSdNb2RhbCdcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtb2RhbDAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwibW9kYWwwMUJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT48Q2xvc2VJY29uIC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb20gZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvbiBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5jYXJhY3RlcmlzdGlxdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgY2FyYWN0ZXJpc3RpcXVlczogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXJhY3TDqXJpc3RpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmFjdMOpcmlzdGlxdWUgZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgaW1nOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlIGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5FbXBsYWNlbWVudDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZW1wbGFjZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGVtcGxhY2VtZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIj5TYWxsZSBkZSBzdG9ja2FnZSAxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTYWxsZSBkZSBzdG9ja2FnZSAyXCI+U2FsbGUgZGUgc3RvY2thZ2UgMjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiPlNhbGxlIGRlIHN0b2NrYWdlIDM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDRcIj5TYWxsZSBkZSBzdG9ja2FnZSA0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkNhdMOpZ29yaWU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmNhdGVnb3J5aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGNhdGVnb3J5aWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicsOpc2VhdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVMubWFwKGNhdGVnb3J5ID0+IDxNZW51SXRlbSBrZXk9e2NhdGVnb3J5LmlkfSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PntjYXRlZ29yeS5uYW1lfTwvTWVudUl0ZW0+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkRpc3BvbmliaWxpdMOpPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGF2YWlsYWJsZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJyw6lzZWF1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dHJ1ZX0+UsOpc2VydmFibGU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtmYWxzZX0+Tm9uIHLDqXNlcnZhYmxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPsOJZGl0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+PC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJ1xyXG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlVGltZUZpZWxkJztcclxuaW1wb3J0ICdkYXlqcy9sb2NhbGUvZnInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBwcm9wcywgSXRlbSwgSXRlbXMsIHNldEl0ZW0gfSkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrR29vZ2xlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaCgnL2FwaS9yZXNlcnZlUHJvZHVjdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogSXRlbS5wcm9kdWN0SUQsXHJcbiAgICAgICAgICAgICAgICBcInVzZXJcIjogcHJvcHMuYXBwVXNlckxvZ2luLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9kdWN0XCI6IHByb3BzLml0ZW0sXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IHByb3BzLmNhdCxcclxuICAgICAgICAgICAgICAgIFwiZW1wbGFjZW1lbnRcIjogSXRlbS5lbXBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogdmFsdWUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0X3RpbWVcIjogdmFsdWUuc3RhcnRkYXRlLFxyXG4gICAgICAgICAgICAgICAgXCJlbmRfdGltZVwiOiB2YWx1ZS5lbmRkYXRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJMYSByw6lzZXJ2YXRpb24gYSByZW5jb250csOpIHVuIHByb2Jsw6htZVwiKVxyXG4gICAgICAgICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V6ZXpleicpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0SW5mbygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJMYSByw6lzZXJ2YXRpb24gYSDDqXTDqSBhcHBsaXF1w6kgYXZlYyBzdWNjw6hzXCIpXHJcbiAgICAgICAgICAgICAgICBBbGVydFNsZWVwKCk7XHJcbiAgICAgICAgICAgICAgICBhdXRvUmVkaXJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vQUxFUlQgTUVTU0FHRVxyXG4gICAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbGVydE1lc3NhZ2UsIHNldEFsZXJ0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbQWxlcnRJbmZvLCBzZXRBbGVydEluZm9dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHNsZWVwID0gYXN5bmMgKG1pbGxpc2Vjb25kcykgPT4ge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9SZWRpcmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FjY3VlaWwnO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVNwYWNlc1dpdGhEYXNoZXMoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IEl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGFzIGRlIGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0ZGF0ZTogZGF5anMobmV3IERhdGUoKSksXHJcbiAgICAgICAgICAgIGVuZGRhdGU6IGRheWpzKG5ldyBEYXRlKCkpLmFkZCgrMSwgJ2RheScpLFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IE5leHREYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHRvbW9ycm93ID0gZGF5anMobmV3IERhdGUoKSkuYWRkKCsxLCAnZGF5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRvbW9ycm93O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHthbGVydE9wZW4gJiZcclxuICAgICAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJhbGVydFBvcFVwXCIgc3R5bGU9e3sgekluZGV4OiAnOTk5OScsIHdpZHRoOiBcIjFcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSBzZXZlcml0eT17QWxlcnRJbmZvfSBjb2xvcj17QWxlcnRJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICB7YWxlcnRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD59XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blJlc2VydmVyXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBzeD17eyBib3JkZXJDb2xvcjogXCJ3aGl0ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFJlc2VydmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UkVTRVJWRVIgQ0UgTUFURVJJRUw8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm1vZGFsMDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbDAxQnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PjxDbG9zZUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0SW5mb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UsOpc2VydmF0ZXVyOiB7cHJvcHMuYXBwVXNlckxvZ2lufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByb2R1aXQ6IHtwcm9wcy5pdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhdMOpZ29yaWU6IHtwcm9wcy5jYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1wbGFjZW1lbnQ6IHtJdGVtLmVtcGxhY2VtZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdEYXRlVGltZUZpZWxkSW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXJMb2NhbGU9XCJmclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkTDqWJ1dCBkZSBsYSByw6lzZXJ2YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RheWpzKG5ldyBEYXRlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIHN0YXJ0ZGF0ZTogZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpbiBkZSBsYSByw6lzZXJ2YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e05leHREYXkoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBlbmRkYXRlOiBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FyYWN0w6lyaXN0aXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21tZW50YWlyZSAob3B0aW9ubmVsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFqb3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+PC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAbXVpL21hdGVyaWFsL01vZGFsJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEFkZEJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IaWdobGlnaHRPZmYnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbXVpL21hdGVyaWFsL0FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgSXRlbSwgSVRFTVMsIHNldEl0ZW0gfSkge1xyXG5cclxuICAgIC8vQUxFUlQgTUVTU0FHRVxyXG4gICAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthbGVydE1lc3NhZ2UsIHNldEFsZXJ0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbQWxlcnRJbmZvLCBzZXRBbGVydEluZm9dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHNsZWVwID0gYXN5bmMgKG1pbGxpc2Vjb25kcykgPT4ge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IEFsZXJ0U2xlZXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgZGVsZXRlQnlJZChJdGVtLnByb2R1Y3RJRClcclxuICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ5SWQgPSBwcm9kdWN0aWQgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2RlbGV0ZVByb2R1Y3QnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFwicHJvZHVjdGlkXCI6IHByb2R1Y3RpZCB9KVxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC50eXBlID09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2Uob2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgyMDAwKTtcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGVydEluZm8oJ2luZm8nKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKG9iamVjdC5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbShJVEVNUy5maWx0ZXIoSXRtID0+IEl0bS5wcm9kdWN0SUQgIT09IHByb2R1Y3RpZCkpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgyMDAwKTtcclxuICAgICAgICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWxlcnRPcGVuID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdpbmZvJylcclxuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiU3VwcnJlc3Npb24gZHUgbWF0w6lyaWVsIGVuIGNvdXJzLi4uXCIpXHJcbiAgICAgICAgICAgIEFsZXJ0U2xlZXAoKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+e2FsZXJ0T3BlbiAmJlxyXG4gICAgICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPVwiYWxlcnRQb3BVcFwiIHN0eWxlPXt7IHpJbmRleDogJzk5OTknLCB3aWR0aDogXCIxXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gc2V2ZXJpdHk9e0FsZXJ0SW5mb30gY29sb3I9e0FsZXJ0SW5mb30+XHJcbiAgICAgICAgICAgICAgICB7YWxlcnRNZXNzYWdlfVxyXG4gICAgICAgICAgICA8L0FsZXJ0Pn1cclxuXHJcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiIHRpdGxlPVwiU3VwcHJpbWVyXCI+PEljb25CdXR0b24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMC41cmVtIDBweCcsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICB9fSBvbkNsaWNrPXtoYW5kbGVPcGVufT48QWRkQm94SWNvbiAvPjwvSWNvbkJ1dHRvbj48L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm1vZGFsMDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbDAxQnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PjxDbG9zZUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCIgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlZvdWxlei12b3VzIHN1cHByaW1lciB7SXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5TdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+PC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcihwcm9wcykge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0TmF2XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGlkPVwiYmdJbWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9kaWdpdGxpZ2h0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJkaWdpbGlnaHQgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvbWF0ZXJpYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm1hdGVyaWFsIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXTDqXJpZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJQYW5lbE1hdGVyaWVsXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hdGVyaWVsL3Jlc2VhdVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbmF2YmFyL3Jlc2VhdS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc2VhdSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlLDqXNlYXU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvdGVsZXBob25pcXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvdGVsZXBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidGVsZXBob25lIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VMOpbMOpcGhvbmlxdWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbmF2YmFyL2Rlc2t0b3AucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZXNrdG9wIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVza3RvcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC9yZXVuaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvcmV1bmlvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJldW5pb24gcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sw6l1bmlvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuTG9nb3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbmF2YmFyL2xvZ291dC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ291dCBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkTDqWNvbm5leGlvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+KVxyXG59IiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi4vanMvYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nQ29tcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRpbmcnXG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21hdGVyaWVsJ1xuaW1wb3J0IEl0ZW1TdGF0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2l0ZW1TdGF0cydcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcbmltcG9ydCBNb2RhbGJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsX2Fqb3V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2N1ZWlsKHByb3BzKSB7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZHVjdHNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLml0ZW1zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNDYXQoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2R1Y3RzQ2F0XCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5jYXRlZ29yaWVzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIHZhciBbSXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XG4gIHZhciBbQ2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZldGNoUHJvZHVjdHMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEl0ZW0oZGF0YSk7XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0c0NhdCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDYXRlZ29yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiByZW1vdmVPcGFjaXR5KCkge1xuXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuXG4gICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG4gIH1cblxuICBmdW5jdGlvbiBBbGxJdGVtcyh7IHBhZ2UsIGxvYWRpbmcsIGZpbHRlciwgc2V0RmlsdGVyLCBJdGVtcywgc2V0SXRlbSwgQ0FURUdPUklFUyB9KSB7XG4gICAgY29uc3QgU2tlbGV0b25CcmVhZGNydW1iID0gKCkgPT4gKFxuICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiAnNCUnLFxuICAgICAgfX0+XG4gICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgd2lkdGg9XCIzMCVcIlxuICAgICAgICAgIGhlaWdodD0nODAlJ1xuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNSUnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXG4gICAgICAgICAgfX0gLz5cbiAgICAgIDwvc3Bhbj4pXG5cbiAgICBjb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgICB3aWR0aD1cIjQ1JVwiXG4gICAgICAgIGhlaWdodD0nMTUlJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxJScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgICB9fSAvPilcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7bG9hZGluZyA/ICg8PlxuXG4gICAgICAgICAgPFNrZWxldG9uQnJlYWRjcnVtYiAvPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cblxuICAgICAgICA8Lz4pIDpcbiAgICAgICAgICAoPD5cbiAgICAgICAgICAgIDxJdGVtU3RhdHMgQ2F0ZWdvcnk9e3BhZ2V9IEZpbHRlcj17ZmlsdGVyfSBvbkNhdENoYW5nZT17KGNhdGVnb3JpZSkgPT4gc2V0RmlsdGVyKGNhdGVnb3JpZSl9IElURU1TPXtJdGVtc30gQ0FUPXtDQVRFR09SSUVTfSAvPlxuICAgICAgICAgICAge2l0ZW1zKHBhZ2UsIGZpbHRlciwgSXRlbXMsIHNldEl0ZW0sIENBVEVHT1JJRVMpfVxuICAgICAgICAgIDwvPil9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBjb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChDYXRlZ29yeXMsIGZpbHRlclZhbHVlLCBJVEVNUywgc2V0SXRlbSwgQ0FURUdPUklFUykge1xuICAgIGlmIChmaWx0ZXJWYWx1ZSAhPSAwKSB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnlpZCA9PSBmaWx0ZXJWYWx1ZSlcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxuICAgICAgICAubWFwKGl0ZW0gPT5cbiAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAga2V5PXtpdGVtLnByb2R1Y3RJRH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgICBDYXRlZ29yeT17Q2F0ZWdvcnl9XG4gICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxuICAgICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnlpZCkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfSAvPilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxuICAgICAgICAubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAgICBrZXk9e2l0ZW0ucHJvZHVjdElEfVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIElURU1TPXtJVEVNU31cbiAgICAgICAgICAgIENhdGVnb3J5PXtDYXRlZ29yeX1cbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeWlkKSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAgICAgLz4pKVxuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExvYWRpbmdDb21wIC8+XG4gICAgICB7bG9hZGluZyA/ICg8PjwvPikgOlxuICAgICAgICAoPD48bWFpbiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJtYWluXCIgb25Mb2FkPXtyZW1vdmVPcGFjaXR5fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFuZWxIZWFkZXJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY3VlaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgQWNjdWVpbFxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgTWF0ZXJpZWxcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlbGNvbWVNU0dcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Cb25qb3VyIHtwcm9wcy5hcHBVc2VyTG9naW59PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hcHBVc2VyUm9sZVswXSA9PSBcIlJPTEVfQURNSU5cIiA/XG4gICAgICAgICAgICAgICAgICA8TW9kYWxidXR0b24gSXRlbXM9e0l0ZW1zfSBDYXRlZ29yeT17Q2F0ZWdvcnl9IHNldEl0ZW09e3NldEl0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIgcHJvcHM9e3Byb3BzfSAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxBbGxJdGVtcyBwYWdlPVwiXCIgbG9hZGluZz17bG9hZGluZ30gZmlsdGVyPXtmaWx0ZXJ9IHNldEZpbHRlcj17c2V0RmlsdGVyfSBJdGVtcz17SXRlbXN9IHNldEl0ZW09e3NldEl0ZW19IENBVEVHT1JJRVM9e0NhdGVnb3J5fSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj48Lz4pfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuXHJcbiAgLy9BTEVSVCBNRVNTQUdFXHJcbiAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWxlcnRNZXNzYWdlLCBzZXRBbGVydE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtBbGVydEluZm8sIHNldEFsZXJ0SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHNsZWVwID0gYXN5bmMgKG1pbGxpc2Vjb25kcykgPT4ge1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcylcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IEFsZXJ0U2xlZXAgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICB9XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZpbmFsRm9ybUVuZHBvaW50ID0gZS50YXJnZXQuYWN0aW9uO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmVsZW1lbnRzKVxyXG4gICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQubmFtZSlcclxuICAgICAgLnJlZHVjZSgob2JqLCBpbnB1dCkgPT4gT2JqZWN0LmFzc2lnbihvYmosIHsgW2lucHV0Lm5hbWVdOiBpbnB1dC52YWx1ZSB9KSwge30pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZiAoYWxlcnRPcGVuID09IHRydWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGZpbmFsRm9ybUVuZHBvaW50LCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAnbG9naW4nOiBkYXRhLmxvZ2luLFxyXG4gICAgICAgICdwYXNzd29yZCc6IGRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgJ19jc3JmX3Rva2VuJzogcHJvcHMuY3NyZl90b2tlbixcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGlmICghcmVzLmluY2x1ZGVzKCdCYWRDcmVkZW50aWFsc0V4Y2VwdGlvbicpKSB7XHJcbiAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJyk7XHJcbiAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJJZGVudGlmaWFudCBvdSBtb3QgZGUgcGFzc2UgaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJyk7XHJcbiAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiTGUgc2VydmV1ciBlc3QgYWN0dWVsbGVtZW50IGhvcnMgbGlnbmVcIik7XHJcbiAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHsgaGFuZGxlU3VibWl0IH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+e2FsZXJ0T3BlbiAmJlxyXG4gICAgICA8QWxlcnQgY2xhc3NOYW1lPVwiYWxlcnRQb3BVcFwiIHN0eWxlPXt7IHpJbmRleDogJzk5OTknLCB3aWR0aDogXCIxXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gc2V2ZXJpdHk9e0FsZXJ0SW5mb30gY29sb3I9e0FsZXJ0SW5mb30+XHJcbiAgICAgICAge2FsZXJ0TWVzc2FnZX1cclxuICAgICAgPC9BbGVydD59XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsTGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Rm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRGb3JtQ29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2J1aWxkL2ltYWdlcy9kaWdpdGxpZ2h0LnN2Z1wiIGFsdD1cIkRpZ2l0TGlnaHRcIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPGgzPkxlIGdlc3Rpb25uYWlyZSBkZSByw6lzZXJ2YXRpb24gZXQgZGUgcHLDqHMgZGUgbWF0w6lyaWVscyBjZW50cmFsaXPDqXM8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxSaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEZvcm1cIj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbm5leGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibG9naW5cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMubGFzdF91c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIklkZW50aWZpYW50XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPScnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxSaWdodENvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxhPlZvdXMgYXZleiBiZXNvaW4gZCdhaWRlID8mbmJzcDs8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmNvcmFudGluLmJlcmdlckBob3RtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgPkNvbnRhY3Rlei1ub3VzPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYXRlcmllbCdcbmltcG9ydCBJdGVtU3RhdHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9pdGVtU3RhdHMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2t0b3AocHJvcHMpIHtcblxuICB2YXIgW0l0ZW1zLCBzZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xuICB2YXIgW0NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdCdG4sIHNldGxvYWRpbmdCdG5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZldGNoUHJvZHVjdHMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEl0ZW0oZGF0YSk7XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0c0NhdCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDYXRlZ29yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRsb2FkaW5nQnRuKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuXG4gICAgY29uc3QgdGVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9kdWN0c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uaXRlbXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhd2FpdCB0ZXN0O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0c0NhdCgpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZHVjdHNDYXRcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLmNhdGVnb3JpZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhd2FpdCB0ZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbn1cblxuZnVuY3Rpb24gYWxsSXRlbXMocHJvcHMsIHBhZ2UpIHtcblxuICBjb25zdCBTa2VsZXRvbkJyZWFkY3J1bWIgPSAoKSA9PiAoXG4gICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgIGhlaWdodDogJzQlJyxcbiAgICB9fT5cbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgIHdpZHRoPVwiMzAlXCJcbiAgICAgICAgaGVpZ2h0PSc4MCUnXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogJzUlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjUlJyxcbiAgICAgICAgfX0gLz5cbiAgICA8L3NwYW4+KVxuXG4gIGNvbnN0IFNrZWxldG9uSXRlbSA9ICgpID0+IChcbiAgICA8U2tlbGV0b24gdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgd2lkdGg9XCI0NSVcIlxuICAgICAgaGVpZ2h0PScxNSUnXG4gICAgICBzeD17e1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMSUnLFxuICAgICAgICBtYXJnaW5Ub3A6ICczJScsXG4gICAgICB9fSAvPilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/ICg8PlxuXG4gICAgICAgIDxTa2VsZXRvbkJyZWFkY3J1bWIgLz5cbiAgICAgICAge1suLi5BcnJheSg4KS5rZXlzKCldLm1hcCgoaXRlbSkgPT4gKDxTa2VsZXRvbkl0ZW0ga2V5PXtpdGVtfSAvPikpfVxuXG4gICAgICA8Lz4pIDogKDw+XG4gICAgICAgIDxJdGVtU3RhdHMgQ2F0ZWdvcnk9e3BhZ2V9IElURU1TPXtJdGVtc30gQ0FUPXtDYXRlZ29yeX0gLz5cbiAgICAgICAge2l0ZW1zKHByb3BzLCBwYWdlLCBJdGVtcywgc2V0SXRlbSwgQ2F0ZWdvcnkpfVxuICAgICAgPC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChwcm9wcywgQ2F0ZWdvcnksIElURU1TLCBzZXRJdGVtLCBDQVRFR09SSUVTKSB7XG5cbiAgaWYgKCFDYXRlZ29yeSA9PSBudWxsIHx8ICFDYXRlZ29yeSA9PSAnJykge1xuICAgIHtcbiAgICAgIHJldHVybiBJVEVNU1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0uYXZhaWxhYmxlICYmIENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5aWQpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKSA9PSBDYXRlZ29yeSlcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgKDxJdGVtXG4gICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgIGtleT17aXRlbS5wcm9kdWN0SUR9XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgQ2F0ZWdvcnk9e0NBVEVHT1JJRVN9XG4gICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeWlkKSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgfVxuICB9XG59XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICA8SGVhZGVyIHRpdGxlPVwiRGVza3RvcFwiIGl0ZW09XCJcIiBwcm9wcz17cHJvcHN9IGxvYWRpbmdCdG49e2xvYWRpbmdCdG59IEl0ZW1zPXtJdGVtc30gQ2F0ZWdvcnk9e0NhdGVnb3J5fSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKHByb3BzLCBcImRlc2t0b3BcIil9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWxfZGV0YWlscydcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzKHByb3BzKSB7XG5cbiAgZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxuICB9XG4gIFxuICBjb25zdCBjYXBpdGFsaXplV29yZHMgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAgIC5qb2luKCcgJykubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2VBbGwoJy0nLCBcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgfTtcbiAgXG4gIHZhciBbSVRFTVMsIHNldEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XG4gIHZhciBbQ0FURUdPUklFUywgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICBcbiAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2R1Y3RzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5pdGVtcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICBcbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0c0NhdCgpIHtcbiAgXG4gICAgY29uc3QgdGVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9kdWN0c0NhdFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uY2F0ZWdvcmllcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICBcbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuICBjb25zdCBpdGVtRGV0YWlsID0gZnVuY3Rpb24gKHByb3BzLCBpdGVtTmFtZSkge1xuICAgIHJldHVybiBJVEVNU1xuICAgICAgLmZpbHRlcihpdGVtID0+IGNhcGl0YWxpemVXb3JkcyhpdGVtLm5hbWUpID09IGNhcGl0YWxpemVXb3JkcyhpdGVtTmFtZSkpXG4gICAgICAubWFwKChpdGVtKSA9PlxuICAgICAgKDxJdGVtXG4gICAgICAgIGtleT17aXRlbS5wcm9kdWN0SUR9XG4gICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnlpZCkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgLz5cbiAgICAgICkpXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGl0ZW1JbmZvKHByb3BzLCBpdGVtTmFtZSkge1xuICBcbiAgICBjb25zdCBJdGVtSW1hZ2UgPSAoKSA9PiAoXG4gICAgICA8U2tlbGV0b25cbiAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgICAgd2lkdGg9XCI4MCVcIlxuICAgICAgICBoZWlnaHQ9JzU1JSdcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgfX0gLz4pXG4gIFxuICAgIGNvbnN0IFRleHRUaXRsZSA9ICgpID0+IChcbiAgICAgIDxTa2VsZXRvblxuICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgaGVpZ2h0PSczJSdcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxJScsXG4gICAgICAgIH19IC8+KVxuICBcbiAgICBjb25zdCBUZXh0RGVzY3JpcHRpb24gPSAoKSA9PiAoXG4gICAgICA8U2tlbGV0b25cbiAgICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgIGhlaWdodD0nMiUnXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgICB9fSAvPilcbiAgXG4gICAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgICAgPFNrZWxldG9uXG4gICAgICAgIGFuaW1hdGlvbj1cIndhdmVcIlxuICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgaGVpZ2h0PSczJSdcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc4JScsXG4gICAgICAgIH19IC8+KVxuICBcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0SXRlbShkYXRhKTtcbiAgICAgICAgICBmZXRjaFByb2R1Y3RzQ2F0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0sIFtdKVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xvYWRpbmcgPyAoPD5cbiAgXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGFsaWduQ29udGVudDogJ2NlbnRlcicgfX0+XG4gIFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PjxJdGVtSW1hZ2UgLz48L3NwYW4+XG4gIFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8VGV4dFRpdGxlIC8+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8VGV4dERlc2NyaXB0aW9uIGtleT17aXRlbX0gLz4pKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC8+KSA6ICg8PntpdGVtRGV0YWlsKHByb3BzLCBpdGVtTmFtZSl9XG4gICAgICAgIDwvPil9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXG4gICAgICAgICAgPEhlYWRlciB0aXRsZT17cHJvcHMuY2F0fSBpdGVtPXtwcm9wcy5pdGVtfSBwcm9wcz17cHJvcHN9IC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgIHtpdGVtSW5mbyhwcm9wcywgcHJvcHMuaXRlbSl9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWwnXG5pbXBvcnQgSXRlbVN0YXRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaXRlbVN0YXRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ta2VsZXRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSw6lzZWF1KHByb3BzKSB7XG5cbiAgdmFyIFtJdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdmFyIFtDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nQnRuLCBzZXRsb2FkaW5nQnRuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmZXRjaFByb2R1Y3RzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRJdGVtKGRhdGEpO1xuXG4gICAgICAgIGZldGNoUHJvZHVjdHNDYXQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0Q2F0ZWdvcnkoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0bG9hZGluZ0J0bihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZHVjdHNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLml0ZW1zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNDYXQoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2R1Y3RzQ2F0XCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5jYXRlZ29yaWVzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmZ1bmN0aW9uIGFsbEl0ZW1zKHByb3BzLCBwYWdlKSB7XG5cbiAgY29uc3QgU2tlbGV0b25CcmVhZGNydW1iID0gKCkgPT4gKFxuICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICc0JScsXG4gICAgfX0+XG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIlxuICAgICAgICB3aWR0aD1cIjMwJVwiXG4gICAgICAgIGhlaWdodD0nODAlJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1JScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXG4gICAgICAgIH19IC8+XG4gICAgPC9zcGFuPilcblxuICBjb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiNDUlXCJcbiAgICAgIGhlaWdodD0nMTUlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzElJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgfX0gLz4pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyAoPD5cblxuICAgICAgICA8U2tlbGV0b25CcmVhZGNydW1iIC8+XG4gICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cblxuICAgICAgPC8+KSA6ICg8PlxuICAgICAgICA8SXRlbVN0YXRzIENhdGVnb3J5PXtwYWdlfSBJVEVNUz17SXRlbXN9IENBVD17Q2F0ZWdvcnl9IC8+XG4gICAgICAgIHtpdGVtcyhwcm9wcywgcGFnZSwgSXRlbXMsIHNldEl0ZW0sIENhdGVnb3J5KX1cbiAgICAgIDwvPil9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgaXRlbXMgPSBmdW5jdGlvbiAocHJvcHMsIENhdGVnb3J5LCBJVEVNUywgc2V0SXRlbSwgQ0FURUdPUklFUykge1xuXG4gIGlmICghQ2F0ZWdvcnkgPT0gbnVsbCB8fCAhQ2F0ZWdvcnkgPT0gJycpIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IChpdGVtLmF2YWlsYWJsZSAmJiBDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeWlkKSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSkgPT0gQ2F0ZWdvcnkpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICg8SXRlbVxuICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICBrZXk9e2l0ZW0ucHJvZHVjdElEfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgIENhdGVnb3J5PXtDQVRFR09SSUVTfVxuICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnlpZCkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAvPlxuICAgICAgICApKVxuICAgIH1cbiAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiUsOpc2VhdVwiIGl0ZW09XCJcIiBwcm9wcz17cHJvcHN9IGxvYWRpbmdCdG49e2xvYWRpbmdCdG59IEl0ZW1zPXtJdGVtc30gQ2F0ZWdvcnk9e0NhdGVnb3J5fSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKHByb3BzLCBcInLDqXNlYXVcIil9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWwnXG5pbXBvcnQgSXRlbVN0YXRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaXRlbVN0YXRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ta2VsZXRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSw6l1bmlvbihwcm9wcykge1xuXG4gIHZhciBbSXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XG4gIHZhciBbQ2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZ0J0biwgc2V0bG9hZGluZ0J0bl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmV0Y2hQcm9kdWN0cygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0SXRlbShkYXRhKTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzQ2F0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldENhdGVnb3J5KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIHNldGxvYWRpbmdCdG4oZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2R1Y3RzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5pdGVtcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRlc3Q7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzQ2F0KCkge1xuXG4gICAgY29uc3QgdGVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9kdWN0c0NhdFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uY2F0ZWdvcmllcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRlc3Q7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxufVxuXG5mdW5jdGlvbiBhbGxJdGVtcyhwcm9wcywgcGFnZSkge1xuXG4gIGNvbnN0IFNrZWxldG9uQnJlYWRjcnVtYiA9ICgpID0+IChcbiAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgaGVpZ2h0OiAnNCUnLFxuICAgIH19PlxuICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgd2lkdGg9XCIzMCVcIlxuICAgICAgICBoZWlnaHQ9JzgwJSdcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNSUnLFxuICAgICAgICAgIG1hcmdpblRvcDogJzEuNSUnLFxuICAgICAgICB9fSAvPlxuICAgIDwvc3Bhbj4pXG5cbiAgY29uc3QgU2tlbGV0b25JdGVtID0gKCkgPT4gKFxuICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICB3aWR0aD1cIjQ1JVwiXG4gICAgICBoZWlnaHQ9JzE1JSdcbiAgICAgIHN4PXt7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICcxJScsXG4gICAgICAgIG1hcmdpblRvcDogJzMlJyxcbiAgICAgIH19IC8+KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nID8gKDw+XG5cbiAgICAgICAgPFNrZWxldG9uQnJlYWRjcnVtYiAvPlxuICAgICAgICB7Wy4uLkFycmF5KDgpLmtleXMoKV0ubWFwKChpdGVtKSA9PiAoPFNrZWxldG9uSXRlbSBrZXk9e2l0ZW19IC8+KSl9XG5cbiAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgPEl0ZW1TdGF0cyBDYXRlZ29yeT17cGFnZX0gSVRFTVM9e0l0ZW1zfSBDQVQ9e0NhdGVnb3J5fSAvPlxuICAgICAgICB7aXRlbXMocHJvcHMsIHBhZ2UsIEl0ZW1zLCBzZXRJdGVtLCBDYXRlZ29yeSl9XG4gICAgICA8Lz4pfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IGl0ZW1zID0gZnVuY3Rpb24gKHByb3BzLCBDYXRlZ29yeSwgSVRFTVMsIHNldEl0ZW0sIENBVEVHT1JJRVMpIHtcblxuICBpZiAoIUNhdGVnb3J5ID09IG51bGwgfHwgIUNhdGVnb3J5ID09ICcnKSB7XG4gICAge1xuICAgICAgcmV0dXJuIElURU1TXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiAoaXRlbS5hdmFpbGFibGUgJiYgQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnlpZCkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpID09IENhdGVnb3J5KVxuICAgICAgICAubWFwKChpdGVtKSA9PlxuICAgICAgICAoPEl0ZW1cbiAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAga2V5PXtpdGVtLnByb2R1Y3RJRH1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIElURU1TPXtJVEVNU31cbiAgICAgICAgICBDYXRlZ29yeT17Q0FURUdPUklFU31cbiAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxuICAgICAgICAgIGNhdD17KENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5aWQpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKX1cbiAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICB9XG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9XCJSw6l1bmlvblwiIGl0ZW09XCJcIiBwcm9wcz17cHJvcHN9IGxvYWRpbmdCdG49e2xvYWRpbmdCdG59IEl0ZW1zPXtJdGVtc30gQ2F0ZWdvcnk9e0NhdGVnb3J5fSBzZXRJdGVtPXtzZXRJdGVtfSAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKHByb3BzLCBcInLDqXVuaW9uXCIpfVxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvcHlyaWdodCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21hdGVyaWVsJ1xuaW1wb3J0IEl0ZW1TdGF0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2l0ZW1TdGF0cydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVsZXBob25pcXVlKHByb3BzKSB7XG5cbiAgdmFyIFtJdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdmFyIFtDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nQnRuLCBzZXRsb2FkaW5nQnRuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmZXRjaFByb2R1Y3RzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRJdGVtKGRhdGEpO1xuXG4gICAgICAgIGZldGNoUHJvZHVjdHNDYXQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0Q2F0ZWdvcnkoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0bG9hZGluZ0J0bihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcblxuICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZHVjdHNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLml0ZW1zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHNDYXQoKSB7XG5cbiAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2R1Y3RzQ2F0XCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXR1cm4ganNvbi5jYXRlZ29yaWVzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmZ1bmN0aW9uIGFsbEl0ZW1zKHByb3BzLCBwYWdlKSB7XG5cbiAgY29uc3QgU2tlbGV0b25CcmVhZGNydW1iID0gKCkgPT4gKFxuICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICc0JScsXG4gICAgfX0+XG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIlxuICAgICAgICB3aWR0aD1cIjMwJVwiXG4gICAgICAgIGhlaWdodD0nODAlJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1JScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXG4gICAgICAgIH19IC8+XG4gICAgPC9zcGFuPilcblxuICBjb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiNDUlXCJcbiAgICAgIGhlaWdodD0nMTUlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzElJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgfX0gLz4pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyAoPD5cblxuICAgICAgICA8U2tlbGV0b25CcmVhZGNydW1iIC8+XG4gICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cblxuICAgICAgPC8+KSA6ICg8PlxuICAgICAgICA8SXRlbVN0YXRzIENhdGVnb3J5PXtwYWdlfSBJVEVNUz17SXRlbXN9IENBVD17Q2F0ZWdvcnl9IC8+XG4gICAgICAgIHtpdGVtcyhwcm9wcywgcGFnZSwgSXRlbXMsIHNldEl0ZW0sIENhdGVnb3J5KX1cbiAgICAgIDwvPil9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgaXRlbXMgPSBmdW5jdGlvbiAocHJvcHMsIENhdGVnb3J5LCBJVEVNUywgc2V0SXRlbSwgQ0FURUdPUklFUykge1xuXG4gIGlmICghQ2F0ZWdvcnkgPT0gbnVsbCB8fCAhQ2F0ZWdvcnkgPT0gJycpIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IChpdGVtLmF2YWlsYWJsZSAmJiBDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeWlkKSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSkgPT0gQ2F0ZWdvcnkpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICg8SXRlbVxuICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICBrZXk9e2l0ZW0ucHJvZHVjdElEfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgIENhdGVnb3J5PXtDQVRFR09SSUVTfVxuICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnlpZCkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAvPlxuICAgICAgICApKVxuICAgIH1cbiAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgPEhlYWRlciB0aXRsZT1cIlTDqWzDqXBob25pcXVlXCIgaXRlbT1cIlwiIHByb3BzPXtwcm9wc30gbG9hZGluZ0J0bj17bG9hZGluZ0J0bn0gSXRlbXM9e0l0ZW1zfSBDYXRlZ29yeT17Q2F0ZWdvcnl9IHNldEl0ZW09e3NldEl0ZW19IC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7YWxsSXRlbXMocHJvcHMsIFwidMOpbMOpcGhvbmlxdWVcIil9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyhyZWFjdENvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy5qc3gnLCAnJykucmVwbGFjZSgnLnRzeCcsICcnKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuIFBvc3NpYmxlIHZhbHVlczogJHtwb3NzaWJsZVZhbHVlcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsImZvb3RlciIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJvcGFjaXR5IiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTGluayIsIk1vZGFsYnV0dG9uIiwiY2FwaXRhbGl6ZVdvcmRzIiwic3RyIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIm5vcm1hbGl6ZSIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwiaGVhZGVyIiwicHJvcHMiLCJ0aXRsZSIsIml0ZW0iLCJsb2FkaW5nQnRuIiwiSXRlbXMiLCJDYXRlZ29yeSIsInNldEl0ZW0iLCJsZW5ndGgiLCJhcHBVc2VyTG9naW4iLCJhcHBVc2VyUm9sZSIsIkZvcm1Db250cm9sIiwiU2VsZWN0IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwidG90YWwiLCJwYWdlIiwiRmlsdGVyIiwiSVRFTVMiLCJDQVQiLCJmaWx0ZXIiLCJjYXRlZ29yeWlkIiwiY2F0IiwibmFtZSIsImlkIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJpdGVtU3RhdHMiLCJvbkNhdENoYW5nZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiYm90dG9tIiwiUmluZ3MiLCJsb2FkaW5nQ29tcCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWFyZ2luIiwiQnV0dG9uRGVsZXRlIiwiQnV0dG9uRWRpdCIsIkl0ZW0iLCJyZW1vdmVBY2NlbnRzIiwiaHJlZiIsImltZyIsImFsdCIsIm9iamVjdEZpdCIsInRvU3RyaW5nIiwiQnV0dG9uUmVzZXJ2ZXIiLCJ6b29tIiwiem9vbWVyIiwiY3VycmVudFRhcmdldCIsIm9mZnNldFgiLCJvZmZzZXRZIiwicGFnZVgiLCJwYWdlWSIsIngiLCJvZmZzZXRXaWR0aCIsInkiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImVtcGxhY2VtZW50IiwicHJvZHVjdElEIiwiZGVzY3JpcHRpb24iLCJjYXJhY3RlcmlzdGlxdWVzIiwiYm9yZGVyIiwiYXBwVXNlckNhdCIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkljb25CdXR0b24iLCJDbG9zZUljb24iLCJBZGRCb3hJY29uIiwidXNlU3RhdGUiLCJUb29sdGlwIiwiQWxlcnQiLCJtb2RhbCIsImFsZXJ0T3BlbiIsInNldEFsZXJ0T3BlbiIsImFsZXJ0TWVzc2FnZSIsInNldEFsZXJ0TWVzc2FnZSIsIkFsZXJ0SW5mbyIsInNldEFsZXJ0SW5mbyIsInNsZWVwIiwibWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVwbGFjZVNwYWNlc1dpdGhEYXNoZXMiLCJBbGVydFNsZWVwIiwiaSIsIkNBVEVHT1JJRVMiLCJjYXRlZ29yeSIsInNldFZhbHVlIiwiaGFuZGxlQ2xpY2siLCJuZXdTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm9iamVjdCIsInR5cGUiLCJtZXNzYWdlIiwiaGFuZGxlQ2xvc2UiLCJlcnJvciIsImNvbnNvbGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJ6SW5kZXgiLCJvYmoiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVUaW1lRmllbGQiLCJkYXlqcyIsImhhbmRsZUNsaWNrR29vZ2xlIiwic3RhcnRkYXRlIiwiZW5kZGF0ZSIsImxvZyIsImF1dG9SZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYWRkIiwiTmV4dERheSIsInRvbW9ycm93IiwiYm9yZGVyQ29sb3IiLCJkZWxldGVCeUlkIiwicHJvZHVjdGlkIiwiSXRtIiwidGV4dEFsaWduIiwicGFkZGluZyIsInVzZUVmZmVjdCIsIm5hdmJhciIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIk5hdmJhciIsIkZvb3RlciIsInVzZVJlZiIsIkxvYWRpbmdDb21wIiwiSXRlbVN0YXRzIiwiU2tlbGV0b24iLCJBY2N1ZWlsIiwiZmV0Y2hQcm9kdWN0cyIsIml0ZW1zIiwidGVzdCIsImZldGNoUHJvZHVjdHNDYXQiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcnkiLCJzZXRGaWx0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJyZW1vdmVPcGFjaXR5IiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyYW5kb21UaW1lIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQWxsSXRlbXMiLCJTa2VsZXRvbkJyZWFkY3J1bWIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiU2tlbGV0b25JdGVtIiwiQXJyYXkiLCJrZXlzIiwiY2F0ZWdvcmllIiwiQ2F0ZWdvcnlzIiwiZmlsdGVyVmFsdWUiLCJMb2dpbiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmluYWxGb3JtRW5kcG9pbnQiLCJhY3Rpb24iLCJmcm9tIiwiZWxlbWVudHMiLCJpbnB1dCIsInJlZHVjZSIsIk9iamVjdCIsImFzc2lnbiIsIkFjY2VwdCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvZ2luIiwicGFzc3dvcmQiLCJjc3JmX3Rva2VuIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwidGV4dCIsInJlcyIsImluY2x1ZGVzIiwicmVsb2FkIiwiZXJyIiwibGFzdF91c2VybmFtZSIsIkhlYWRlciIsIkRlc2t0b3AiLCJzZXRsb2FkaW5nQnRuIiwiYWxsSXRlbXMiLCJEZXRhaWxzIiwiaXRlbURldGFpbCIsIml0ZW1OYW1lIiwiaXRlbUluZm8iLCJJdGVtSW1hZ2UiLCJUZXh0VGl0bGUiLCJUZXh0RGVzY3JpcHRpb24iLCJhbGlnbkNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiUsOpc2VhdSIsIlLDqXVuaW9uIiwiVGVsZXBob25pcXVlIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJmb3JFYWNoIiwia2V5IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==