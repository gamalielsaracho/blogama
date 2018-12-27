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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = {\n\n\tserver: {\n\t\thost: 'localhost',\n\t\tport: process.env.PORT || 5000\n\t},\n\tdatabase: {\n\t\thost: 'localhost',\n\t\tpost: 27017,\n\t\tdb: 'x',\n\t\turl: 'mongodb://127.0.0.1:27017/x'\n\t},\n\tkey: {\n\t\tprivateKey: 'mysupersecretkey',\n\t\ttokenExpiry: '30d'\n\t}\n};\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./public/src/js/middleware/index.js":
/*!*******************************************!*\
  !*** ./public/src/js/middleware/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.metaTags = metaTags;\n\n// export const urlApi = `http://localhost:5000/api`\nvar urlApi = exports.urlApi = \"https://gamalielsaracho.github.io/public/api\";\n\n// replace the special strings with server generated strings\nfunction metaTags(data, content) {\n    // Estandar\n    data = data.replace(/\\$STRD_DESCRIPTION/g, content.STRD_DESCRIPTION);\n\n    // makup Schema.org for Google+\n    data = data.replace(/\\$ITEMPROP_DESCRIPTION/g, content.ITEMPROP_DESCRIPTION);\n\n    // Twitter Card\n    data = data.replace(/\\$TW_TITLE/g, content.TW_TITLE);\n    data = data.replace(/\\$TW_DESCRIPTION/g, content.TW_DESCRIPTION);\n    data = data.replace(/\\$TW_AUTHOR/g, content.TW_AUTHOR);\n    data = data.replace(/\\$TW_IMAGE/g, content.TW_IMAGE);\n\n    // open Graph\n    data = data.replace(/\\$OG_TITLE/g, content.OG_TITLE);\n    data = data.replace(/\\$OG_URL/g, content.OG_URL);\n    data = data.replace(/\\$OG_IMAGE/g, content.OG_IMAGE);\n    data = data.replace(/\\$OG_DESCRIPTION/g, content.OG_DESCRIPTION);\n    data = data.replace(/\\$OG_PUBLISHED_TIME/g, content.OG_PUBLISHED_TIME);\n    data = data.replace(/\\$OG_MODIFIED_TIME/g, content.OG_MODIFIED_TIME);\n    data = data.replace(/\\$OG_ARTICLE_SECTION/g, content.OG_ARTICLE_SECTION);\n    var result = data.replace(/\\$OG_TAG/g, content.OG_TAG);\n\n    return result;\n}\n\n//# sourceURL=webpack:///./public/src/js/middleware/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _middleware = __webpack_require__(/*! ./././public/src/js/middleware */ \"./public/src/js/middleware/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\n\n// for my satatic files.\napp.use(_express2.default.static('public'));\n\nvar filePath = './index.html';\n\napp.get('/', function (req, res, next) {\n\n  fs.readFile(filePath, 'utf8', function (err, data) {\n    if (err) {\n      return console.log(err);\n    }\n\n    var content = {\n      STRD_DESCRIPTION: '--------',\n\n      ITEMPROP_DESCRIPTION: '--------',\n\n      TW_TITLE: '--------',\n      TW_DESCRIPTION: '--------',\n      TW_AUTHOR: '--------',\n      TW_IMAGE: '--------',\n\n      OG_TITLE: 'Test Home Page',\n      OG_URL: '--------',\n      OG_IMAGE: 'https://i.imgur.com/V7irMl8.png',\n      OG_DESCRIPTION: 'Testing 54 Home page description',\n      OG_PUBLISHED_TIME: '--------',\n      OG_MODIFIED_TIME: '--------',\n      OG_ARTICLE_SECTION: '--------',\n      OG_TAG: '-------'\n    };\n\n    res.send((0, _middleware.metaTags)(data, content));\n  });\n});\n\napp.get('/blog', function (req, res, next) {\n\n  fs.readFile(filePath, 'utf8', function (err, data) {\n    if (err) {\n      return console.log(err);\n    }\n\n    var content = {\n      STRD_DESCRIPTION: '--------',\n\n      ITEMPROP_DESCRIPTION: '--------',\n\n      TW_TITLE: '--------',\n      TW_DESCRIPTION: '--------',\n      TW_AUTHOR: '--------',\n      TW_IMAGE: '--------',\n\n      OG_TITLE: 'el blog rural test.!',\n      OG_URL: '--------',\n      OG_IMAGE: 'https://www.djangoproject.com/s/img/logos/django-logo-negative.png',\n      OG_DESCRIPTION: ':) Haso este blog, pero ya da.',\n      OG_PUBLISHED_TIME: '--------',\n      OG_MODIFIED_TIME: '--------',\n      OG_ARTICLE_SECTION: '--------',\n      OG_TAG: '-------'\n    };\n\n    res.send((0, _middleware.metaTags)(data, content));\n  });\n});\n\napp.get('/blog/:nameFolder', function (req, res, next) {\n\n  fs.readFile(filePath, 'utf8', function (err, data) {\n    if (err) {\n      return console.log(err);\n    }\n\n    _axios2.default.get(_middleware.urlApi + '/publications/publications.json').then(function (publicationsList) {\n      var publications = eval(publicationsList.data);\n\n      publications.map(function (i) {\n        if (i.namefolder == req.params.nameFolder) {\n          _axios2.default.get(_middleware.urlApi + '/publications/' + req.params.nameFolder + '/post.md').then(function (post) {\n\n            i.content = post.data;\n\n            // console.log(i)\n\n            var content = {\n              STRD_DESCRIPTION: i.description,\n\n              ITEMPROP_DESCRIPTION: i.description,\n\n              TW_TITLE: i.title,\n              TW_DESCRIPTION: i.description,\n              TW_AUTHOR: i.authorTwitter,\n              TW_IMAGE: i.image_twitter,\n\n              OG_TITLE: i.title,\n              OG_URL: i.urlContent,\n              OG_IMAGE: i.image_facebook,\n              OG_DESCRIPTION: i.description,\n              OG_PUBLISHED_TIME: i.published_time,\n              OG_MODIFIED_TIME: i.modified_time,\n              OG_ARTICLE_SECTION: i.articleSection,\n              OG_TAG: i.tag\n            };\n\n            res.send((0, _middleware.metaTags)(data, content));\n          }).catch(function (err) {\n            console.log(err);\n          });\n        }\n      });\n    }).catch(function (err) {\n      console.log(err);\n    });\n  });\n});\n\napp.listen(_config2.default.server.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log('Server is listening on port 5000');\n});\n\n//# sourceURL=webpack:///./server.js?");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });