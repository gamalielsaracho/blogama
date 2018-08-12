/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/project/project.controllers.js":
/*!********************************************!*\
  !*** ./app/project/project.controllers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _projectsList = __webpack_require__(/*! ./projectsList */ \"./app/project/projectsList.js\");\n\nvar _projectsList2 = _interopRequireDefault(_projectsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.projects = function (req, res) {\n\tres.json(_projectsList2.default);\n};\n\n//# sourceURL=webpack:///./app/project/project.controllers.js?");

/***/ }),

/***/ "./app/project/project.routes.js":
/*!***************************************!*\
  !*** ./app/project/project.routes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _project = __webpack_require__(/*! ./project.controllers */ \"./app/project/project.controllers.js\");\n\nvar _project2 = _interopRequireDefault(_project);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n\tapp.route('/api/projects').get(_project2.default.projects);\n};\n\n//# sourceURL=webpack:///./app/project/project.routes.js?");

/***/ }),

/***/ "./app/project/projectsList.js":
/*!*************************************!*\
  !*** ./app/project/projectsList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar projects = [{\n  id: 1,\n  name: \"Regalalgo\",\n  description: \"Descripción del proyecto realizado.\",\n  imageProject: \"/src/images/portafolio.png\",\n  image_facebook: \"regalalgo.jpg\",\n  image_twitter: \"regalalgo.jpg\",\n  image_google: \"regalalgo.jpg\",\n  frontEndList: [{ id: 1, name: \"react\" }, { id: 2, name: \"html5\" }, { id: 3, name: \"css3\" }],\n  backEndList: [{ id: 1, name: \"nodejs\" }, { id: 2, name: \"mongodb\" }, { id: 3, name: \"express\" }]\n}, {\n  id: 2,\n  name: \"Infocree\",\n  description: \"Descripción del proyecto realizado.\",\n  imageProject: \"/src/images/portafolio.png\",\n  image_facebook: \"infocree.jpg\",\n  image_twitter: \"infocree.jpg\",\n  image_google: \"infocree.jpg\",\n  frontEndList: [{ id: 1, name: \"react\" }, { id: 2, name: \"html5\" }, { id: 3, name: \"css3\" }],\n  backEndList: [{ id: 1, name: \"nodejs\" }, { id: 2, name: \"mongodb\" }, { id: 3, name: \"express\" }]\n}, {\n  id: 3,\n  name: \"Algo\",\n  description: \"Descripción del proyecto realizado.\",\n  imageProject: \"/src/images/portafolio.png\",\n  image_facebook: \"infocree.jpg\",\n  image_twitter: \"infocree.jpg\",\n  image_google: \"infocree.jpg\",\n  frontEndList: [{ id: 1, name: \"react\" }, { id: 2, name: \"html5\" }, { id: 3, name: \"css3\" }],\n  backEndList: [{ id: 1, name: \"nodejs\" }, { id: 2, name: \"mongodb\" }, { id: 3, name: \"express\" }]\n}, {\n  id: 4,\n  name: \"Algo\",\n  description: \"Descripción del proyecto realizado.\",\n  imageProject: \"/src/images/portafolio.png\",\n  image_facebook: \"infocree.jpg\",\n  image_twitter: \"infocree.jpg\",\n  image_google: \"infocree.jpg\",\n  frontEndList: [{ id: 1, name: \"react\" }, { id: 2, name: \"html5\" }, { id: 3, name: \"css3\" }],\n  backEndList: [{ id: 1, name: \"nodejs\" }, { id: 2, name: \"mongodb\" }, { id: 3, name: \"express\" }]\n}, {\n  id: 5,\n  name: \"Algo\",\n  description: \"Descripción del proyecto realizado.\",\n  imageProject: \"/src/images/portafolio.png\",\n  image_facebook: \"infocree.jpg\",\n  image_twitter: \"infocree.jpg\",\n  image_google: \"infocree.jpg\",\n  frontEndList: [{ id: 1, name: \"react\" }, { id: 2, name: \"html5\" }, { id: 3, name: \"css3\" }],\n  backEndList: [{ id: 1, name: \"nodejs\" }, { id: 2, name: \"mongodb\" }, { id: 3, name: \"express\" }]\n}];\n\nexports.default = projects;\n\n//# sourceURL=webpack:///./app/project/projectsList.js?");

/***/ }),

/***/ "./app/routes.js":
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _project = __webpack_require__(/*! ./project/project.routes */ \"./app/project/project.routes.js\");\n\nvar _project2 = _interopRequireDefault(_project);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n\t(0, _project2.default)(app);\n};\n\n//# sourceURL=webpack:///./app/routes.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = {\n\n\tserver: {\n\t\thost: 'localhost',\n\t\tport: 3000 || process.env.PORT\n\t},\n\tdatabase: {\n\t\thost: 'localhost',\n\t\tpost: 27017,\n\t\tdb: 'x',\n\t\turl: 'mongodb://127.0.0.1:27017/x'\n\t},\n\tkey: {\n\t\tprivateKey: 'mysupersecretkey',\n\t\ttokenExpiry: '30d'\n\t}\n};\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./public/src/js/app/components/Activity/Activity.js":
/*!***********************************************************!*\
  !*** ./public/src/js/app/components/Activity/Activity.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Activity = function (_Component) {\n\t_inherits(Activity, _Component);\n\n\tfunction Activity() {\n\t\t_classCallCheck(this, Activity);\n\n\t\treturn _possibleConstructorReturn(this, (Activity.__proto__ || Object.getPrototypeOf(Activity)).apply(this, arguments));\n\t}\n\n\t_createClass(Activity, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar styles = {\n\t\t\t\t\"box-shadow\": \"0 0 15px #888\",\n\t\t\t\t\"padding-bottom\": \"2em\"\n\t\t\t\t// /api/icons/react.svg\n\t\t\t};return _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"container-max\" },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"h2\",\n\t\t\t\t\tnull,\n\t\t\t\t\t\"Habilidades\"\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"container-max__activities\" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"container-max__activities__activity\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"JavaScript\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"React\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Node\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Java\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Php\"\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"container-max__activities__activity\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Redux\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Jquery\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Java web\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Java escrit\\xF3rio\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Mysql\"\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"container-max__activities__activity\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"mongodb\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"c++\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"html5\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Progressive web app\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"css3\"\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"container-max__activities__activity\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Git\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Github\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Python\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Laravel\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Rails\"\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Activity;\n}(_react.Component);\n\nexports.default = Activity;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Activity/Activity.js?");

/***/ }),

/***/ "./public/src/js/app/components/Activity/index.js":
/*!********************************************************!*\
  !*** ./public/src/js/app/components/Activity/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Activity = __webpack_require__(/*! ./Activity */ \"./public/src/js/app/components/Activity/Activity.js\");\n\nvar _Activity2 = _interopRequireDefault(_Activity);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Activity2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Activity/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/App/App.js":
/*!*************************************************!*\
  !*** ./public/src/js/app/components/App/App.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _HelmetShow = __webpack_require__(/*! ../HelmetShow */ \"./public/src/js/app/components/HelmetShow/index.js\");\n\nvar _HelmetShow2 = _interopRequireDefault(_HelmetShow);\n\nvar _Footer = __webpack_require__(/*! ../Footer */ \"./public/src/js/app/components/Footer/index.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _Menu = __webpack_require__(/*! ../Menu */ \"./public/src/js/app/components/Menu/index.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ../../../routes */ \"./public/src/js/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _LoadAnimation = __webpack_require__(/*! ../LoadAnimation */ \"./public/src/js/app/components/LoadAnimation/index.js\");\n\nvar _LoadAnimation2 = _interopRequireDefault(_LoadAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n\n\n    // componentDidMount() {\n    //   setTimeout(() => this.props.readyApp(), 1500);\n    // }\n\n    value: function render() {\n\n      // const { loading } = this.props.page\n\n      // if(loading) {\n      //   return <h1>Cargando...</h1>\n      // } else {\n      return _react2.default.createElement(\n        'div',\n        { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },\n        _react2.default.createElement(\n          'header',\n          { className: 'mdl-layout__header' },\n          _react2.default.createElement(\n            'div',\n            { className: 'mdl-layout__header-row' },\n            _react2.default.createElement('span', { className: 'mdl-layout-title' }),\n            _react2.default.createElement('div', { className: 'mdl-layout-spacer' }),\n            _react2.default.createElement(\n              'nav',\n              { className: 'mdl-navigation mdl-layout--large-screen-only' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { className: 'mdl-navigation__link', to: '/' },\n                'Inicio'\n              ),\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { className: 'mdl-navigation__link', to: '/blog' },\n                'Proyectos'\n              ),\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { className: 'mdl-navigation__link', to: '/blog' },\n                'Blog'\n              )\n            ),\n            _react2.default.createElement('div', { className: 'mdl-layout-spacer' })\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'mdl-layout__drawer mdl-layout--small-screen-only' },\n          _react2.default.createElement('span', { className: 'mdl-layout-title' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'nav',\n            { className: 'mdl-navigation' },\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { className: 'mdl-navigation__link', to: '/' },\n              'Inicio'\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { className: 'mdl-navigation__link', to: '/blog' },\n              'Proyectos'\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { className: 'mdl-navigation__link', to: '/blog' },\n              'Blog'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'main',\n          { className: 'mdl-layout__content' },\n          _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _routes2.default.map(function (_ref) {\n              var path = _ref.path,\n                  exact = _ref.exact,\n                  C = _ref.component,\n                  rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n              return _react2.default.createElement(_reactRouterDom.Route, {\n                key: path,\n                path: path,\n                exact: exact,\n                render: function render(props) {\n                  return _react2.default.createElement(C, _extends({}, props, rest));\n                }\n              });\n            })\n          ),\n          _react2.default.createElement(_Footer2.default, null)\n        )\n      );\n\n      // }\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./public/src/js/app/components/App/App.js?");

/***/ }),

/***/ "./public/src/js/app/components/App/index.js":
/*!***************************************************!*\
  !*** ./public/src/js/app/components/App/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _App = __webpack_require__(/*! ./App */ \"./public/src/js/app/components/App/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _App2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/App/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/Footer/Footer.js":
/*!*******************************************************!*\
  !*** ./public/src/js/app/components/Footer/Footer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar d = new Date();\nvar year = d.getFullYear();\n\nvar Footer = function (_Component) {\n\t_inherits(Footer, _Component);\n\n\tfunction Footer() {\n\t\t_classCallCheck(this, Footer);\n\n\t\treturn _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));\n\t}\n\n\t_createClass(Footer, [{\n\t\tkey: 'render',\n\n\t\t// <a href='#' target='_blank'>\n\t\t// \t<i className='fi-social-github'></i>\n\t\t// </a>\n\n\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'footer',\n\t\t\t\t{ className: 'container-footer' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'container-footer__max' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'container-footer__max__content' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'container-footer__max__content__description' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Un blog hecho con Mucho Amor y Tiempo',\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('i', { className: 'fi-heart' })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'container-footer__max__content__socials__buttons' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'container-footer__max__content__socials__buttons__button' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: '#', target: '_blank' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('span', { className: 'icon-facebook' })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'container-footer__max__content__socials__buttons__button' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: '#', target: '_blank' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('span', { className: 'icon-twitter' })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'container-footer__max__content__socials__buttons__button' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: '#', target: '_blank' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('span', { className: 'icon-github' })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Footer;\n}(_react.Component);\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Footer/Footer.js?");

/***/ }),

/***/ "./public/src/js/app/components/Footer/index.js":
/*!******************************************************!*\
  !*** ./public/src/js/app/components/Footer/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Footer = __webpack_require__(/*! ./Footer */ \"./public/src/js/app/components/Footer/Footer.js\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Footer2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Footer/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/HelmetShow/HelmetShow.js":
/*!***************************************************************!*\
  !*** ./public/src/js/app/components/HelmetShow/HelmetShow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HelmetShow = function (_React$Component) {\n  _inherits(HelmetShow, _React$Component);\n\n  function HelmetShow() {\n    _classCallCheck(this, HelmetShow);\n\n    return _possibleConstructorReturn(this, (HelmetShow.__proto__ || Object.getPrototypeOf(HelmetShow)).apply(this, arguments));\n  }\n\n  _createClass(HelmetShow, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          title = _props.title,\n          description = _props.description,\n          image_facebook = _props.image_facebook,\n          image_twitter = _props.image_twitter,\n          image_google = _props.image_google,\n          urlData = _props.urlData;\n\n      // var urlDetail = `https://gamalielsaracho.github.io/#/${urlData}`\n\n      var urlDetail = 'http://localhost:3000/' + urlData;\n\n      // var urlBase = `https://gamalielsaracho.github.io/`\n      var urlBase = 'http://localhost:3000/';\n\n      if (!urlData) {\n        urlDetail = urlBase;\n      }\n\n      return _react2.default.createElement(_reactHelmet2.default, {\n        title: title,\n        titleTemplate: title,\n        defaultTitle: 'Gamaliel Saracho Franco Programador.',\n        base: { \"target\": \"_blank\", \"href\": urlBase },\n        meta: [{ \"name\": \"description\", \"content\": description }, { \"name\": \"theme-color\", \"content\": \"#15210B\" },\n\n        // facebook.\n        // {\"property\":\"fb:admins\", \"content\":\"prueba\"},\n        { \"property\": \"og:title\", \"content\": title }, { \"property\": \"og:image\", \"content\": image_facebook }, { \"property\": \"og:description\", \"content\": description }, { \"property\": \"og:type\", \"content\": \"website\" }, { \"property\": \"og:url\", \"content\": urlDetail }, { \"property\": \"og:site_name\", \"content\": \"gamalielsaracho.github.io\" },\n\n        // google.\n        { \"itemprop\": \"description\", \"content\": description },\n\n        // twitter.\n        { \"property\": \"twitter:account_id\", \"content\": \"4503599630205252\" }, { \"name\": \"twitter:card\", \"content\": \"summary_large_image\" }, { \"name\": \"twitter:site\", \"content\": \"@gamalielsaracho\" }, { \"name\": \"twitter:title\", \"content\": title }, { \"name\": \"twitter:description\", \"content\": description }, { \"name\": \"twitter:creator\", \"content\": \"@gamalielsaracho\" }, { \"name\": \"twitter:image:src\", \"content\": image_twitter }, { \"name\": \"twitter:domain\", \"content\": \"https://gamalielsaracho.github.io/\" }],\n        link: [{ \"rel\": \"canonical\", \"href\": \"http://mysite.com/example\" }, { \"rel\": \"apple-touch-icon\", \"href\": \"http://mysite.com/img/apple-touch-icon-57x57.png\" }, { \"rel\": \"apple-touch-icon\", \"sizes\": \"72x72\", \"href\": \"http://mysite.com/img/apple-touch-icon-72x72.png\" }],\n        script: [{ \"src\": \"\", \"type\": \"text/javascript\" }, { \"type\": \"application/ld+json\", innerHTML: '{ \"@context\": \"http://schema.org\" }' }],\n        onChangeClientState: function onChangeClientState(newState) {\n          return console.log(newState);\n        }\n      });\n    }\n  }]);\n\n  return HelmetShow;\n}(_react2.default.Component);\n\nexports.default = HelmetShow;\n\n//# sourceURL=webpack:///./public/src/js/app/components/HelmetShow/HelmetShow.js?");

/***/ }),

/***/ "./public/src/js/app/components/HelmetShow/index.js":
/*!**********************************************************!*\
  !*** ./public/src/js/app/components/HelmetShow/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HelmetShow = __webpack_require__(/*! ./HelmetShow */ \"./public/src/js/app/components/HelmetShow/HelmetShow.js\");\n\nvar _HelmetShow2 = _interopRequireDefault(_HelmetShow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _HelmetShow2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/HelmetShow/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/InfoFreelance/InfoFreelance.js":
/*!*********************************************************************!*\
  !*** ./public/src/js/app/components/InfoFreelance/InfoFreelance.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import Helmet from 'react-helmet'\n\nvar InfoFreelance = function (_React$Component) {\n  _inherits(InfoFreelance, _React$Component);\n\n  function InfoFreelance() {\n    _classCallCheck(this, InfoFreelance);\n\n    return _possibleConstructorReturn(this, (InfoFreelance.__proto__ || Object.getPrototypeOf(InfoFreelance)).apply(this, arguments));\n  }\n\n  _createClass(InfoFreelance, [{\n    key: \"render\",\n    value: function render() {\n      // \n      // data-aos='flip-left'\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"mdl-grid\" },\n        _react2.default.createElement(\"div\", { className: \"mdl-layout-spacer\" }),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--12-col-phone\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"mdl-grid\" },\n            _react2.default.createElement(\"div\", { className: \"photo-freelance\" })\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"mdl-card__title\" },\n            _react2.default.createElement(\n              \"h2\",\n              { className: \"mdl-card__title-text\" },\n              \"Gamaliel Saracho\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"mdl-card__supporting-text\" },\n            \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque.\"\n          )\n        ),\n        _react2.default.createElement(\"div\", { className: \"mdl-layout-spacer\" })\n      );\n    }\n  }]);\n\n  return InfoFreelance;\n}(_react2.default.Component);\n\nexports.default = InfoFreelance;\n\n//# sourceURL=webpack:///./public/src/js/app/components/InfoFreelance/InfoFreelance.js?");

/***/ }),

/***/ "./public/src/js/app/components/InfoFreelance/index.js":
/*!*************************************************************!*\
  !*** ./public/src/js/app/components/InfoFreelance/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _InfoFreelance = __webpack_require__(/*! ./InfoFreelance */ \"./public/src/js/app/components/InfoFreelance/InfoFreelance.js\");\n\nvar _InfoFreelance2 = _interopRequireDefault(_InfoFreelance);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _InfoFreelance2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/InfoFreelance/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/LastProject/LastProject.js":
/*!*****************************************************************!*\
  !*** ./public/src/js/app/components/LastProject/LastProject.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LastProject = function (_Component) {\n\t_inherits(LastProject, _Component);\n\n\tfunction LastProject() {\n\t\t_classCallCheck(this, LastProject);\n\n\t\treturn _possibleConstructorReturn(this, (LastProject.__proto__ || Object.getPrototypeOf(LastProject)).apply(this, arguments));\n\t}\n\n\t_createClass(LastProject, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar styles = {\n\t\t\t\tlastProjectContainer: {\n\t\t\t\t\t\"boxShadow\": \"0 0 15px #888\",\n\t\t\t\t\t\"padding\": \"1em\"\n\t\t\t\t},\n\t\t\t\tcontainerImage: {\n\t\t\t\t\t\"width\": \"100%\",\n\t\t\t\t\t\"height\": \"200px\"\n\t\t\t\t},\n\t\t\t\ttitleTecnologies: {\n\t\t\t\t\t\"marginTop\": \"1em\"\n\t\t\t\t},\n\t\t\t\tcontainerListTecnologies: {\n\t\t\t\t\t\"marginLeft\": \"2em\"\n\t\t\t\t},\n\t\t\t\tbutton: {\n\t\t\t\t\t\"backgroundColor\": \"#F44336\",\n\t\t\t\t\t\"paddingRight\": \"0em\",\n\t\t\t\t\t\"paddingTop\": \"5px\",\n\t\t\t\t\t\"paddingBottom\": \"5px\"\n\t\t\t\t},\n\t\t\t\tcontainerButtonRepository: {\n\t\t\t\t\t\"minHeight\": \"226px\"\n\t\t\t\t},\n\t\t\t\tlinkDemo: {\n\t\t\t\t\t\"color\": \"#03a9f4\"\n\t\t\t\t}\n\t\t\t};\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"container\" },\n\t\t\t\t_react2.default.createElement(\"br\", null),\n\t\t\t\t_react2.default.createElement(\"br\", null),\n\t\t\t\t_react2.default.createElement(\"h3\", { className: \"text-center\" }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ style: styles.lastProjectContainer, className: \"row center-lg center-md center-sm center-xs\" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"col-xs-10 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"strong\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\"Detalle\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t\t{ href: \"#\", target: \"_blank\", style: styles.linkDemo },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\"h5\",\n\t\t\t\t\t\t\t\t{ className: \"text-left\" },\n\t\t\t\t\t\t\t\t\"Regalalgo\"\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t{ className: \"container-icon-post\" },\n\t\t\t\t\t\t\t_react2.default.createElement(\"img\", { className: \"icon-post\", src: \"./api/icons/landing-page.jpg\" })\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"col-xs-10 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"h4\",\n\t\t\t\t\t\t\t{ style: styles.titleTecnologies },\n\t\t\t\t\t\t\t\"Tecnolog\\xEDas Utilizadas\"\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t{ style: styles.containerButtonRepository, className: \"row center-lg center-md center-sm center-xs\" },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t{ className: \"col-xs-10 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"h5\",\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\"Front-end\"\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t\t\t\t{ style: styles.containerListTecnologies, className: \"text-left\" },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"Html5.\"\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"css3.\"\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"React.\"\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"Redux.\"\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"React-router.\"\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t{ className: \"col-xs-10 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"h5\",\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\"Back-end\"\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t\t\t\t{ style: styles.containerListTecnologies, className: \"text-left\" },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"Node.\"\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"li\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"Mongodb.\"\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t\t{ style: styles.button, className: \"button success\" },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t{ className: \"row middle-lg middle-md middle-sm middle-xs\" },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t\t{ className: \"col-xs-6 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"span\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\"Repositorio\"\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t\t{ className: \"col-xs-6 col-sm-6 col-md-6 col-lg-6\" },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\"span\",\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\"i\", { className: \"fi-social-github\" })\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LastProject;\n}(_react.Component);\n\nexports.default = LastProject;\n\n//# sourceURL=webpack:///./public/src/js/app/components/LastProject/LastProject.js?");

/***/ }),

/***/ "./public/src/js/app/components/LastProject/index.js":
/*!***********************************************************!*\
  !*** ./public/src/js/app/components/LastProject/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LastProject = __webpack_require__(/*! ./LastProject */ \"./public/src/js/app/components/LastProject/LastProject.js\");\n\nvar _LastProject2 = _interopRequireDefault(_LastProject);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _LastProject2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/LastProject/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/LoadAnimation/LoadAnimation.js":
/*!*********************************************************************!*\
  !*** ./public/src/js/app/components/LoadAnimation/LoadAnimation.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoadAnimation = function (_Component) {\n\t_inherits(LoadAnimation, _Component);\n\n\tfunction LoadAnimation() {\n\t\t_classCallCheck(this, LoadAnimation);\n\n\t\treturn _possibleConstructorReturn(this, (LoadAnimation.__proto__ || Object.getPrototypeOf(LoadAnimation)).apply(this, arguments));\n\t}\n\n\t_createClass(LoadAnimation, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\"div\", { className: \"spinner\" })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn LoadAnimation;\n}(_react.Component);\n\nexports.default = LoadAnimation;\n\n//# sourceURL=webpack:///./public/src/js/app/components/LoadAnimation/LoadAnimation.js?");

/***/ }),

/***/ "./public/src/js/app/components/LoadAnimation/index.js":
/*!*************************************************************!*\
  !*** ./public/src/js/app/components/LoadAnimation/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LoadAnimation = __webpack_require__(/*! ./LoadAnimation */ \"./public/src/js/app/components/LoadAnimation/LoadAnimation.js\");\n\nvar _LoadAnimation2 = _interopRequireDefault(_LoadAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _LoadAnimation2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/LoadAnimation/index.js?");

/***/ }),

/***/ "./public/src/js/app/components/Menu/Menu.js":
/*!***************************************************!*\
  !*** ./public/src/js/app/components/Menu/Menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import $ from 'jquery'\n\nvar Menu = function (_Component) {\n\t_inherits(Menu, _Component);\n\n\tfunction Menu() {\n\t\t_classCallCheck(this, Menu);\n\n\t\treturn _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));\n\t}\n\n\t_createClass(Menu, [{\n\t\tkey: 'render',\n\n\t\t// constructor(props) {\n\t\t// \tsuper(props);\n\t\t// \t// this.state = {\n\t\t// \t//     windowWidth: window.innerWidth,\n\t\t// \t//     mobileNavVisible: false\n\t\t//  //  \t}\n\t\t// }\n\n\t\t// componentDidMount\n\n\t\t// handleResize() {\n\t\t//   this.setState({ windowWidth: window.innerWidth });\n\t\t// }\n\n\t\t// componentDidMount() {\n\t\t//   window.addEventListener('resize', this.handleResize.bind(this));\n\n\t\t//   $(document).ready(mainMenu)\n\n\t\t// \tfunction mainMenu() {\n\t\t// \t\t$('#btn-menu').click(function() {\n\t\t// \t\t\t$('.enlaces').toggle()\n\t\t// \t\t})\n\t\t// \t}\n\n\t\t//   // $('#btn-menu').click(() => {\n\t\t//   // \talert('Hola.')\n\t\t//   // })\n\t\t// }\n\n\t\t// componentWillUnmount() {\n\t\t//   window.removeEventListener('resize', this.handleResize.bind(this));\n\t\t// }\n\n\t\t// navigationLinks() { // MOVIL MENU.\n\t\t// \treturn <ul className=\"menu row\">\n\t\t// \t\t<li className='column small-12'>\n\t\t// \t\t\t<Link to={`/`} className='text-center'>Inicio</Link>\n\t\t// \t\t</li>\n\t\t// \t\t<li className='column small-12'>\n\t\t// \t\t\t<a href=\"\" className='text-center'>Proyectos</a>\n\t\t// \t\t</li>\n\t\t// \t\t<li className='column small-12'>\n\t\t// \t      <Link to={`/blog`} className='text-center'>Blog</Link>\n\t\t// \t\t</li>\n\t\t// \t\t<li className='column small-12'>\n\t\t// \t\t\t<a href=\"\" className='text-center'>Contactame</a>\n\t\t// \t\t</li>\n\t\t// \t</ul>\n\t\t// }\n\n\t\t// renderMobileNav() {\n\t\t//   if(this.state.mobileNavVisible) {\n\t\t//     return this.navigationLinks();\n\t\t//   }\n\t\t// }\n\n\t\t// handleNavClick() {\n\t\t//   if(!this.state.mobileNavVisible) {\n\t\t//     this.setState({ mobileNavVisible: true });\n\t\t//   } else {\n\t\t//     this.setState({ mobileNavVisible: false });\n\t\t//   }\n\t\t// }\n\n\t\t// renderNavigation() {\n\t\t//   if(this.state.windowWidth <= 631) {\n\t\t//     return <div>\n\t\t//         <ul className=\"menu align-right\">\n\t\t//             <a className='btn-menu' onClick={this.handleNavClick.bind(this)}>\n\t\t// \t\t\t\t<i className=\"fi-list\"></i>\n\t\t//             </a>\n\t\t// \t\t</ul>\n\n\t\t//         { this.renderMobileNav() }\n\t\t//     </div>\n\n\t\t//   } else {\n\t\t//     return <ul className=\"menu\">\n\t\t// \t\t<li>\n\t\t// \t\t\t<Link to={`/`}>Inicio</Link>\n\t\t// \t\t</li>\n\t\t// \t\t<li>\n\t\t// \t\t\t<a href=\"#\">Proyectos</a>\n\t\t// \t\t</li>\n\t\t// \t\t<li>\n\t\t// \t\t\t<Link to={`/blog`}>Blog</Link>\n\t\t// \t\t</li>\n\t\t// \t\t<li>\n\t\t// \t\t\t<a href=\"#\">Contactame</a>\n\t\t// \t\t</li>\n\t\t// \t</ul>\n\t\t//   }\n\t\t// }\n\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'header',\n\t\t\t\t\t{ className: 'mdl-layout__header' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'mdl-layout__header-row' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'mdl-layout-title' },\n\t\t\t\t\t\t\t'Title'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement('div', { className: 'mdl-layout-spacer' }),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'nav',\n\t\t\t\t\t\t\t{ className: 'mdl-navigation mdl-layout--large-screen-only' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', to: '/' },\n\t\t\t\t\t\t\t\t'Inicio'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', to: 'blog' },\n\t\t\t\t\t\t\t\t'Blog'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'mdl-layout__drawer mdl-layout--small-screen-only' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'mdl-layout-title' },\n\t\t\t\t\t\t'Title'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'nav',\n\t\t\t\t\t\t{ className: 'mdl-navigation' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ className: 'mdl-navigation__link', href: '' },\n\t\t\t\t\t\t\t'Link'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'main',\n\t\t\t\t\t{ className: 'mdl-layout__content' },\n\t\t\t\t\tthis.props.children\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\n\t\t// render() {\n\t\t// \tconsole.log(this.state)\n\t\t// \treturn <section id='menu-container'>\n\n\t\t//         <div className='row end-lg end-md end-sm end-xs'>\n\n\t\t//           <div className='col-xs-12 col-sm-8 col-md-6 col-lg-6'>\n\n\t\t//             { this.renderNavigation() }\n\n\t\t//           </div>\n\t\t//     \t</div>\n\n\t\t//      </section>\n\t\t// }\n\n\n\t\t// return <div id='header'>\n\t\t// \t<nav className='menu'>\n\t\t//\n\t\t// \t\t<div className='container-logo-btnShowMenu' id='btn-menu'>\n\t\t// \t\t\t<i className=\"fi-list\"></i>\n\t\t// \t\t</div>\n\t\t//\n\t\t// \t\t<div className='enlaces'>\n\t\t// \t\t\t<li className='enlaces_btn'>\n\t\t// \t\t\t\t<Link to={`/`}>Inicio</Link>\n\t\t// \t\t\t</li>\n\t\t// \t\t\t<li className='enlaces_btn'>\n\t\t// \t\t\t\t<a href=\"#\">Proyectos</a>\n\t\t// \t\t\t</li>\n\t\t// \t\t\t<li className='enlaces_btn'>\n\t\t// \t\t\t\t<Link to={`/blog`}>Blog</Link>\n\t\t// \t\t\t</li>\n\t\t// \t\t\t<li className='enlaces_btn'>\n\t\t// \t\t\t\t<Link to={`/tienda`}>Tienda</Link>\n\t\t// \t\t\t</li>\n\t\t// \t\t</div>\n\t\t//\n\t\t// \t</nav>\n\t\t// </div>\n\n\t}]);\n\n\treturn Menu;\n}(_react.Component);\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Menu/Menu.js?");

/***/ }),

/***/ "./public/src/js/app/components/Menu/index.js":
/*!****************************************************!*\
  !*** ./public/src/js/app/components/Menu/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Menu = __webpack_require__(/*! ./Menu */ \"./public/src/js/app/components/Menu/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Menu2.default;\n\n//# sourceURL=webpack:///./public/src/js/app/components/Menu/index.js?");

/***/ }),

/***/ "./public/src/js/app/pages/HomePage.js":
/*!*********************************************!*\
  !*** ./public/src/js/app/pages/HomePage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HelmetShow = __webpack_require__(/*! ../components/HelmetShow */ \"./public/src/js/app/components/HelmetShow/index.js\");\n\nvar _HelmetShow2 = _interopRequireDefault(_HelmetShow);\n\nvar _Activity = __webpack_require__(/*! ../components/Activity */ \"./public/src/js/app/components/Activity/index.js\");\n\nvar _Activity2 = _interopRequireDefault(_Activity);\n\nvar _LastProject = __webpack_require__(/*! ../components/LastProject */ \"./public/src/js/app/components/LastProject/index.js\");\n\nvar _LastProject2 = _interopRequireDefault(_LastProject);\n\nvar _ListProjects = __webpack_require__(/*! ../../project/components/ListProjects */ \"./public/src/js/project/components/ListProjects/index.js\");\n\nvar _ListProjects2 = _interopRequireDefault(_ListProjects);\n\nvar _ShowProject = __webpack_require__(/*! ../../project/components/ShowProject */ \"./public/src/js/project/components/ShowProject/index.js\");\n\nvar _ShowProject2 = _interopRequireDefault(_ShowProject);\n\nvar _InfoFreelance = __webpack_require__(/*! ../../app/components/InfoFreelance */ \"./public/src/js/app/components/InfoFreelance/index.js\");\n\nvar _InfoFreelance2 = _interopRequireDefault(_InfoFreelance);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_Component) {\n\t_inherits(HomePage, _Component);\n\n\tfunction HomePage() {\n\t\t_classCallCheck(this, HomePage);\n\n\t\treturn _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));\n\t}\n\n\t_createClass(HomePage, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(_HelmetShow2.default, { title: 'Programador',\n\t\t\t\t\tdescription: 'npm install gamaliel jeje',\n\t\t\t\t\timage_facebook: 'image_facebook_home.jpg',\n\t\t\t\t\timage_twitter: 'image_twitter_home.jpg',\n\t\t\t\t\timage_google: 'image_google_home.jpg',\n\t\t\t\t\turlData: this.props.location.pathname }),\n\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t_react2.default.createElement(_InfoFreelance2.default, null),\n\t\t\t\t_react2.default.createElement(_Activity2.default, null),\n\t\t\t\t_react2.default.createElement(_ListProjects2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn HomePage;\n}(_react.Component);\n\nexports.default = HomePage;\n\n//# sourceURL=webpack:///./public/src/js/app/pages/HomePage.js?");

/***/ }),

/***/ "./public/src/js/post/actions/index.js":
/*!*********************************************!*\
  !*** ./public/src/js/post/actions/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchPosts = fetchPosts;\nexports.fetchPost = fetchPost;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const url = 'http://localhost:8080/api/publications'\nvar url = 'https://gamalielsaracho.github.io/api/publications';\n\nvar allPublications = [];\n\nvar allPublicationsFechPost;\n\nfunction fetchPosts() {\n  // body...\n  return fetch('http://localhost:3000/api/news').then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n// const requestNews = () => ({ type: FETCH_POSTS_REQUEST });\n\n// export function fetchPosts() {\n//   return (dispatch) => {\n//     dispatch({ type: FETCH_POSTS_REQUEST })\n\n//     axios.get(`${url}/publications.json`)\n//       .then((response) => {\n//         let publications = response.data.publications\n//         // console.log(response.data)\n\n//           // publications.map((publication) => {\n\n//           //     axios.get(`${url}/${publication.namefolder}/post.md`)\n//           //     .then((response) => {\n//           //       let mkdContent = response.data\n//           //       publication.content = mkdContent\n//           //     })\n\n//           //     allPublications.push(publication)\n//           // })\n\n//         // console.log(publications)\n\n//           dispatch({ type:FETCH_POSTS_SUCCESS, payload:publications })\n//       })\n//       .catch((error) => {\n//         console.log(error)\n//       })\n//   }\n\n// }\n\n\nfunction fetchPost(name_folder) {\n  return function (dispatch) {\n\n    dispatch({ type: FETCH_POST_REQUEST });\n\n    _axios2.default.get(url + '/publications.json').then(function (response) {\n      response.publications.map(function (publication) {\n\n        if (publication.namefolder == name_folder) {\n\n          $.get(url + '/' + publication.namefolder + '/post.md').then(function (response) {\n            publication.content = response;\n\n            dispatch({ type: FETCH_POST_SUCCESS, payload: publication });\n          });\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./public/src/js/post/actions/index.js?");

/***/ }),

/***/ "./public/src/js/post/components/PostsList/PostsList.js":
/*!**************************************************************!*\
  !*** ./public/src/js/post/components/PostsList/PostsList.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _HelmetShow = __webpack_require__(/*! ../../../app/components/HelmetShow */ \"./public/src/js/app/components/HelmetShow/index.js\");\n\nvar _HelmetShow2 = _interopRequireDefault(_HelmetShow);\n\nvar _LoadAnimation = __webpack_require__(/*! ../../../app/components/LoadAnimation */ \"./public/src/js/app/components/LoadAnimation/index.js\");\n\nvar _LoadAnimation2 = _interopRequireDefault(_LoadAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PostsList = function (_Component) {\n\t_inherits(PostsList, _Component);\n\n\tfunction PostsList(props) {\n\t\t_classCallCheck(this, PostsList);\n\n\t\tvar _this = _possibleConstructorReturn(this, (PostsList.__proto__ || Object.getPrototypeOf(PostsList)).call(this, props));\n\n\t\tvar initialData = void 0;\n\t\tif (props.staticContext) {\n\t\t\tinitialData = props.staticContext.initialData;\n\t\t} else {\n\t\t\tinitialData = window.__initialData__;\n\t\t\tdelete window.__initialData__;\n\t\t}\n\n\t\tconsole.log('props.staticContext');\n\t\tconsole.log(props.staticContext);\n\n\t\t_this.state = {\n\t\t\tloading: initialData ? false : true,\n\t\t\tposts: initialData\n\t\t};\n\n\t\t_this.fetchPosts = _this.fetchPosts.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(PostsList, [{\n\t\tkey: 'fetchPosts',\n\t\tvalue: function fetchPosts() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.setState({ loading: true });\n\n\t\t\t// función desde la url.\n\t\t\tthis.props.fetchInitialData().then(function (data) {\n\t\t\t\treturn _this2.setState({ loading: false, posts: data });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tif (!this.state.posts) {\n\t\t\t\tthis.fetchPosts();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _state = this.state,\n\t\t\t    loading = _state.loading,\n\t\t\t    posts = _state.posts;\n\n\n\t\t\tif (loading === true) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Cargando...'\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'container' },\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'row align-justify' },\n\t\t\t\t\t\tposts.map(function (post) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ key: post.id, className: 'column small-12 medium-6 large-4' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'post-container-title' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t\t\t\t\t{ to: 'blog/' + post.namefolder },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'h1',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'title-post' },\n\t\t\t\t\t\t\t\t\t\t\tpost.title\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\t\t{ className: 'text-right' },\n\t\t\t\t\t\t\t\t\tpost.date\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn PostsList;\n}(_react.Component);\n\nexports.default = PostsList;\n\n//# sourceURL=webpack:///./public/src/js/post/components/PostsList/PostsList.js?");

/***/ }),

/***/ "./public/src/js/post/components/PostsList/index.js":
/*!**********************************************************!*\
  !*** ./public/src/js/post/components/PostsList/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _PostsList = __webpack_require__(/*! ./PostsList */ \"./public/src/js/post/components/PostsList/PostsList.js\");\n\nvar _PostsList2 = _interopRequireDefault(_PostsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _PostsList2.default;\n\n//# sourceURL=webpack:///./public/src/js/post/components/PostsList/index.js?");

/***/ }),

/***/ "./public/src/js/project/components/ListProjects/ListProjects.js":
/*!***********************************************************************!*\
  !*** ./public/src/js/project/components/ListProjects/ListProjects.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _LoadAnimation = __webpack_require__(/*! ../../../app/components/LoadAnimation */ \"./public/src/js/app/components/LoadAnimation/index.js\");\n\nvar _LoadAnimation2 = _interopRequireDefault(_LoadAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ListProjects = function (_Component) {\n\t_inherits(ListProjects, _Component);\n\n\tfunction ListProjects(props) {\n\t\t_classCallCheck(this, ListProjects);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ListProjects.__proto__ || Object.getPrototypeOf(ListProjects)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tloading: false,\n\t\t\tprojects: null\n\t\t};\n\n\t\treturn _this;\n\t}\n\n\t_createClass(ListProjects, [{\n\t\tkey: 'componentWillMount',\n\t\tvalue: function componentWillMount() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.setState({ loading: true });\n\n\t\t\tif (false) {}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _state = this.state,\n\t\t\t    loading = _state.loading,\n\t\t\t    projects = _state.projects;\n\n\n\t\t\tvar styles = {\n\t\t\t\tbutton: {\n\t\t\t\t\t\"backgroundColor\": \"#85ca38\"\n\t\t\t\t},\n\t\t\t\tnameProject: {\n\t\t\t\t\t\"marginTop\": \"1em\",\n\t\t\t\t\t\"marginBottom\": \"0.5em\"\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tif (loading) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Cargando....'\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'container-projects-list' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'h1',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Proyectos'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'container-projects-list__max-container' },\n\t\t\t\t\t\tprojects.map(function (project) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'container-projects-list__project', key: project.id },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'container-projects-list__image-container' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('img', { className: 'container-projects-list__image', src: project.imageProject })\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tproject.name\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'container-projects-list__button-container' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\t\t\t_this3.props.fetchProjectL(project.id);\n\t\t\t\t\t\t\t\t\t\t\t}, className: 'container-projects-list__button' },\n\t\t\t\t\t\t\t\t\t\t'Ver Detalles'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn ListProjects;\n}(_react.Component);\n\nexports.default = ListProjects;\n\n//# sourceURL=webpack:///./public/src/js/project/components/ListProjects/ListProjects.js?");

/***/ }),

/***/ "./public/src/js/project/components/ListProjects/index.js":
/*!****************************************************************!*\
  !*** ./public/src/js/project/components/ListProjects/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ListProjects = __webpack_require__(/*! ./ListProjects */ \"./public/src/js/project/components/ListProjects/ListProjects.js\");\n\nvar _ListProjects2 = _interopRequireDefault(_ListProjects);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ListProjects2.default;\n\n//# sourceURL=webpack:///./public/src/js/project/components/ListProjects/index.js?");

/***/ }),

/***/ "./public/src/js/project/components/ShowProject/ShowProject.js":
/*!*********************************************************************!*\
  !*** ./public/src/js/project/components/ShowProject/ShowProject.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactModal = __webpack_require__(/*! react-modal */ \"react-modal\");\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ShowProject = function (_Component) {\n\t_inherits(ShowProject, _Component);\n\n\tfunction ShowProject(props) {\n\t\t_classCallCheck(this, ShowProject);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ShowProject.__proto__ || Object.getPrototypeOf(ShowProject)).call(this, props));\n\n\t\t_this.renderFrontEnd = _this.renderFrontEnd.bind(_this);\n\t\t_this.renderBackEnd = _this.renderBackEnd.bind(_this);\n\t\treturn _this;\n\t}\n\n\t// componentWillMount() {\n\t// \tthis.props.fetchProjectL(1)\n\t// }\n\n\t_createClass(ShowProject, [{\n\t\tkey: 'renderFrontEnd',\n\t\tvalue: function renderFrontEnd(tecnologies) {\n\t\t\tif (tecnologies) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\ttecnologies.map(function (tecnology) {\n\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t{ key: tecnology.id },\n\t\t\t\t\t\t\ttecnology.name\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn _react2.default.createElement('span', null);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'renderBackEnd',\n\t\tvalue: function renderBackEnd(tecnologies) {\n\t\t\tif (tecnologies) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\ttecnologies.map(function (tecnology) {\n\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t{ key: tecnology.id },\n\t\t\t\t\t\t\ttecnology.name\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn _react2.default.createElement('span', null);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props$fetchProject = this.props.fetchProject,\n\t\t\t    loading = _props$fetchProject.loading,\n\t\t\t    modalOpened = _props$fetchProject.modalOpened,\n\t\t\t    project = _props$fetchProject.project;\n\n\n\t\t\tvar customStyles = {\n\t\t\t\t// overlay : {\n\t\t\t\t//     position: '',\n\t\t\t\t//     // top: 0,\n\t\t\t\t//     // left: 0,\n\t\t\t\t//     // right: 0,\n\t\t\t\t//     // bottom: 0,\n\t\t\t\t//     // backgroundColor: 'rgba(255, 255, 255, 0.75)'\n\t\t\t\t// },\n\t\t\t\tcontent: {\n\t\t\t\t\ttop: '51%',\n\t\t\t\t\tleft: '50%',\n\t\t\t\t\tright: 'auto',\n\t\t\t\t\tbottom: 'auto',\n\t\t\t\t\theight: '100vh',\n\t\t\t\t\tmarginRight: '-50%',\n\t\t\t\t\ttransform: 'translate(-50%, -50%)',\n\t\t\t\t\tborder: 'none',\n\t\t\t\t\tbackground: 'none'\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tvar styles = {\n\t\t\t\tlastProjectContainer: {\n\t\t\t\t\t\"box-shadow\": \"0 0 10px #888\",\n\t\t\t\t\t\"padding\": \"1em\",\n\t\t\t\t\t\"background\": \"#fff\"\n\t\t\t\t},\n\t\t\t\tcontainerImage: {\n\t\t\t\t\t\"width\": \"100%\",\n\t\t\t\t\t\"height\": \"200px\"\n\t\t\t\t},\n\t\t\t\ttitleTecnologies: {\n\t\t\t\t\t\"marginTop\": \"1em\"\n\t\t\t\t},\n\t\t\t\tcontainerListTecnologies: {\n\t\t\t\t\t\"marginLeft\": \"2em\"\n\t\t\t\t},\n\t\t\t\tbutton: {\n\t\t\t\t\t\"backgroundColor\": \"#03a9f4\",\n\t\t\t\t\t\"paddingRight\": \"0em\",\n\t\t\t\t\t\"paddingTop\": \"5px\",\n\t\t\t\t\t\"paddingBottom\": \"5px\"\n\t\t\t\t},\n\t\t\t\tcontainerButtonRepository: {\n\t\t\t\t\t\"minHeight\": \"226px\"\n\t\t\t\t},\n\t\t\t\tlinkDemo: {\n\t\t\t\t\t\"color\": \"#03a9f4\"\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tif (project && modalOpened) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t_reactModal2.default,\n\t\t\t\t\t{ isOpen: modalOpened,\n\t\t\t\t\t\tcontentLabel: 'Minimal Modal Example',\n\t\t\t\t\t\tstyle: customStyles },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ style: styles.lastProjectContainer },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'row end-lg end-md end-sm end-xs' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\t_this2.props.closeModalFetchProject();\n\t\t\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t\t\t_react2.default.createElement('i', { className: 'fi-x' })\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'row center-lg center-md center-sm center-xs' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t'Detalle'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ style: styles.linkDemo },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\t\t\t\t{ className: 'text-left' },\n\t\t\t\t\t\t\t\t\t\tproject.name\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'container-icon-post' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement('img', { className: 'icon-post', src: project.imageProject })\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\t\t\t{ style: styles.titleTecnologies },\n\t\t\t\t\t\t\t\t\t'Tecnolog\\xEDas Utilizadas'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ style: styles.containerButtonRepository, className: 'row center-lg center-md center-sm center-xs' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t{ className: 'col-xs-10 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t'Front-end'\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\t\t\t\t{ style: styles.containerListTecnologies, className: 'text-left' },\n\t\t\t\t\t\t\t\t\t\t\tthis.renderFrontEnd(project.frontEndList)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t{ className: 'col-xs-10 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t'Back-end'\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\t\t\t\t{ style: styles.containerListTecnologies, className: 'text-left' },\n\t\t\t\t\t\t\t\t\t\t\tthis.renderBackEnd(project.backEndList)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ style: styles.button, className: 'button success' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t{ className: 'row middle-lg middle-md middle-sm middle-xs' },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t\t'Repositorio'\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6' },\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement('i', { className: 'fi-social-github' })\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t} else {\n\t\t\t\treturn _react2.default.createElement('span', null);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn ShowProject;\n}(_react.Component);\n\nexports.default = ShowProject;\n\n//# sourceURL=webpack:///./public/src/js/project/components/ShowProject/ShowProject.js?");

/***/ }),

/***/ "./public/src/js/project/components/ShowProject/index.js":
/*!***************************************************************!*\
  !*** ./public/src/js/project/components/ShowProject/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ShowProject = __webpack_require__(/*! ./ShowProject */ \"./public/src/js/project/components/ShowProject/ShowProject.js\");\n\nvar _ShowProject2 = _interopRequireDefault(_ShowProject);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ShowProject2.default;\n\n//# sourceURL=webpack:///./public/src/js/project/components/ShowProject/index.js?");

/***/ }),

/***/ "./public/src/js/routes.js":
/*!*********************************!*\
  !*** ./public/src/js/routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _HomePage = __webpack_require__(/*! ./app/pages/HomePage */ \"./public/src/js/app/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _PostsList = __webpack_require__(/*! ./post/components/PostsList */ \"./public/src/js/post/components/PostsList/index.js\");\n\nvar _PostsList2 = _interopRequireDefault(_PostsList);\n\nvar _actions = __webpack_require__(/*! ./post/actions */ \"./public/src/js/post/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n\tpath: '/',\n\tcomponent: _HomePage2.default,\n\texact: true\n}, {\n\tpath: '/blog',\n\tcomponent: _PostsList2.default,\n\tfetchInitialData: function fetchInitialData() {\n\t\treturn (0, _actions.fetchPosts)();\n\t}\n}];\n\n// allRoutes configuration.\nexports.default = routes;\n\n// export default (\n//   <Route path='/' component={AppContainer}> // la raiz principal.\n//     <IndexRoute component={HomePage}/>\n//     <Route path=\"/blog\" component={PostsListPage}/>\n//     <Route path=\"/blog/:namefolder\" component={ShowPostPage}/>\n//   </Route>\n// )\n\n// // console.log('ddd '+process.env.PUBLIC_URL)\n\n//# sourceURL=webpack:///./public/src/js/routes.js?");

/***/ }),

/***/ "./renderFullPage.js":
/*!***************************!*\
  !*** ./renderFullPage.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = renderFullPage;\nfunction renderFullPage(html, preloadedState, helmet) {\n\treturn \"<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t<head>\\n\\t\\t\\t\" + helmet.title.toString() + \"\\n            \" + helmet.meta.toString() + \"\\n            \" + helmet.link.toString() + \"\\n\\n\\t\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\\\" type=\\\"text/css\\\">\\n\\n\\n\\t\\t\\t<script src='/src/js/libs/material.min.js'></script>\\n\\n\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/activity.css\\\">\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/footer.css\\\">\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/postsList.css\\\">\\n\\n\\n\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/material.min.css\\\">\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/icons/style.css\\\">\\n\\t\\t\\t\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/src/css/flexboxgrid.css\\\">\\n\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"https://code.getmdl.io/1.3.0/material.lime-red.min.css\\\" />\\n\\t\\t\\t<style>\\n\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t.photo-freelance {\\n\\t\\t\\t\\t   width: 190px;\\n\\t\\t\\t\\t   height: 190px;\\n\\t\\t\\t\\t   display: inline-block;\\n\\t\\t\\t\\t   border-radius: 50%;\\n\\t\\t\\t\\t   background-image: url('./src/images/gama2.jpg');\\n\\t\\t\\t\\t   background-size: cover;\\n\\t\\t\\t\\t   background-position: center;\\n\\t\\t\\t\\t}\\n\\t\\t\\t</style>\\n\\t\\t\\t<script>\\n\\t\\t\\t\\twindow.__initialData__ = \" + JSON.stringify(preloadedState) + \"\\n\\t\\t\\t</script>\\n\\t\\t</head>\\n\\t\\t<body \" + helmet.bodyAttributes.toString() + \">\\n\\n\\t\\t<div id='app'>\" + html + \"</div>\\n\\t\\t\\n\\t\\t<script src='/dist/bundle.js'></script>\\n\\t</body>\\n\\t</html>\";\n}\n\n//# sourceURL=webpack:///./renderFullPage.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _renderFullPage = __webpack_require__(/*! ./renderFullPage */ \"./renderFullPage.js\");\n\nvar _renderFullPage2 = _interopRequireDefault(_renderFullPage);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./public/src/js/app/components/App */ \"./public/src/js/app/components/App/index.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ./public/src/js/routes */ \"./public/src/js/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _routes3 = __webpack_require__(/*! ./app/routes */ \"./app/routes.js\");\n\nvar _routes4 = _interopRequireDefault(_routes3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\n// Backend.\n\n\n(0, _routes4.default)(app);\n\napp.use((0, _cors2.default)());\napp.use(_express2.default.static('public'));\n\napp.get(\"/api/news\", function (req, res) {\n  res.json([{\n    id: 1,\n    upvotes: 130,\n    title: \"Fianto Duri, the complete tutorial\",\n    author: \"RubeusH\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 2,\n    upvotes: 126,\n    title: \"Ordinary Wizarding Levels study guide\",\n    author: \"BathBabb\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 3,\n    upvotes: 114,\n    title: \"Is muggle-baiting ever acceptable?\",\n    author: \"Falco\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 4,\n    upvotes: 97,\n    title: \"Untransfiguration classes to become compulsory at Hogwarts\",\n    author: \"Baddock\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 5,\n    upvotes: 85,\n    title: \"Cracking the Aurologist Interview \",\n    author: \"Hetty\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 6,\n    upvotes: 74,\n    title: \"Conserving waterplants cheatsheet.\",\n    author: \"Otto\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 7,\n    upvotes: 66,\n    title: \"The Pragmatic Dragon Feeder\",\n    author: \"Baruffio\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 8,\n    upvotes: 50,\n    title: \"The complete quidditch statistics\",\n    author: \"Hbeery\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 9,\n    upvotes: 34,\n    title: \"Cracking the Aurologist Interview \",\n    author: \"Marcusb\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 10,\n    upvotes: 29,\n    title: \"Could wizards prevent WW3?\",\n    author: \"Cuthbert\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 11,\n    upvotes: 20,\n    title: \"ASK WN: What do you use to digitalize your scrolls?\",\n    author: \"Alphard\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }, {\n    id: 12,\n    upvotes: 16,\n    title: \"Show WN: Wand-Extinguishing Protection\",\n    author: \"Humphrey22\",\n    date: new Date(\"2017-04-14T15:30:00.000Z\")\n  }]);\n});\n\napp.get('*', function (req, res, next) {\n\n  var activeRoute = _routes2.default.find(function (route) {\n    return (0, _reactRouterDom.matchPath)(req.url, route);\n  }) || {};\n\n  var requestInitialData = activeRoute.fetchInitialData && activeRoute.fetchInitialData(req.path);\n\n  Promise.resolve(requestInitialData).then(function (initialData) {\n    // console.log(initialData)\n\n    var context = { initialData: initialData\n\n      // console.log('solicitud de dato inicial segun la ruta.')\n      // console.log(initialData)\n\n    };var markup = (0, _server.renderToString)(_react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_App2.default, null)\n    ));\n\n    var helmet = _reactHelmet2.default.renderStatic();\n\n    // var initialData = []\n    var seoContent = {\n      title: helmet.title.toString(),\n      meta: helmet.meta.toString(),\n      link: helmet.link.toString(),\n      bodyAttributes: helmet.bodyAttributes.toString()\n    };\n\n    res.send((0, _renderFullPage2.default)(markup, initialData, seoContent));\n  }).catch(function (error) {\n    console.log(error);\n  });\n});\n\napp.listen(_config2.default.server.port, function () {\n\n  console.log('Server is listening on port 3000');\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");\n\n//# sourceURL=webpack:///external_%22jquery%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-modal\");\n\n//# sourceURL=webpack:///external_%22react-modal%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });