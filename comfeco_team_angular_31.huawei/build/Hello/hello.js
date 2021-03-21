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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "LqNk");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4837":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={
  "type": "div",
  "attr": {},
  "classList": [
    "doc-page"
  ],
  "children": [
    {
      "type": "web",
      "attr": {
        "src": function () {return (this.loadUrl)},
        "trustedurl": function () {return (this.list)},
        "id": "web",
        "supportzoom": function () {return (this.supportZoom)},
        "wideviewport": function () {return ((this.wideViewport))+'}'},
        "overviewmodeinload": function () {return (this.overViewModeLoad)},
        "useragent": function () {return (this.ua)},
        "allowthirdpartycookies": function () {return (this.allowThirdPartyCookies)}
      },
      "classList": [
        "web-page"
      ],
      "events": {
        "pagestart": "onPageStart",
        "pagefinish": "onPageFinish",
        "message": "onMessage",
        "titlereceive": "onTitleReceive",
        "error": "onError"
      },
      "id": "web"
    }
  ]
}

/***/ }),

/***/ "BH7D":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['websrc'],
  data: {
    title: "",
    loadUrl: "https://comfeco-2021-team-angular-31.vercel.app/login",
    allowThirdPartyCookies: true,
    supportZoom: true,
    wideViewport: true,
    overViewModeLoad: true,
    ua: "default",
    list: ["new RegExp('https?.*')"]
  },
  onInit: function onInit() {
    console.info('onInit: ');
  },
  onPageStart: function onPageStart(e) {
    console.info('pagestart: ' + e.url);
  },
  onPageFinish: function onPageFinish(e) {
    console.info('pagefinish: ' + e.url, e.canBack, e.canForward);
  },
  onTitleReceive: function onTitleReceive(e) {
    this.title = e.title;
  },
  onError: function onError(e) {
    console.info('pageError : ' + e.errorMsg);
  },
  onMessage: function onMessage(e) {
    console.info('onmessage e = ' + e.message + ", url = " + e.url);
  },
  onShow: function onShow() {
    console.info(" onshow");
  },
  onHide: function onHide() {
    console.info("  onHide");
  },
  onBackPress: function onBackPress() {
    console.log('onBackPress');
    this.$element('web').canBack({
      callback: function (e) {
        if (e) {
          console.log('web back');
          this.$element('web').back();
        } else {
          console.log('router back');

          _system["default"].back();
        }
      }.bind(this)
    });
    return true;
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.'
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.'
            );
        }
    });
}
}

/***/ }),

/***/ "LqNk":
/*!*****************************************************************************************************************!*\
  !*** e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./hello.ux */ "4837")
var $app_style$ = __webpack_require__(/*! !c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux!./hello.ux */ "f7WP")
var $app_script$ = __webpack_require__(/*! !c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./hello.ux */ "BH7D")

$app_define$('@app-component/hello', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/hello',{ packagerName:'fa-toolkit', packagerVersion: '3.1.2-Stable.301'})

/***/ }),

/***/ "f7WP":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux!e:/jimmy/Eventos y competencias/Team-Angular-31-Comfeco/comfeco_team_angular_31.huawei/src/Hello/hello.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={
  ".doc-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%",
    "position": "fixed"
  },
  ".web-page": {
    "width": "100%",
    "height": "100%",
    "borderTopLeftRadius": "100%"
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxoZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZTovamltbXkvRXZlbnRvcyB5IGNvbXBldGVuY2lhcy9UZWFtLUFuZ3VsYXItMzEtQ29tZmVjby9jb21mZWNvX3RlYW1fYW5ndWxhcl8zMS5odWF3ZWkvc3JjL0hlbGxvL2hlbGxvLnV4P2IwZmUiLCJ3ZWJwYWNrOi8vL2U6L2ppbW15L0V2ZW50b3MgeSBjb21wZXRlbmNpYXMvVGVhbS1Bbmd1bGFyLTMxLUNvbWZlY28vY29tZmVjb190ZWFtX2FuZ3VsYXJfMzEuaHVhd2VpL3NyYy9IZWxsby9oZWxsby51eCIsIndlYnBhY2s6Ly8vZTovamltbXkvRXZlbnRvcyB5IGNvbXBldGVuY2lhcy9UZWFtLUFuZ3VsYXItMzEtQ29tZmVjby9jb21mZWNvX3RlYW1fYW5ndWxhcl8zMS5odWF3ZWkvc3JjL0hlbGxvL2hlbGxvLnV4P2MzZTMiLCJ3ZWJwYWNrOi8vL2U6L2ppbW15L0V2ZW50b3MgeSBjb21wZXRlbmNpYXMvVGVhbS1Bbmd1bGFyLTMxLUNvbWZlY28vY29tZmVjb190ZWFtX2FuZ3VsYXJfMzEuaHVhd2VpL3NyYy9IZWxsby9oZWxsby51eD82M2U0Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIkxxTmtcIik7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImRvYy1wYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid2ViXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmxvYWRVcmwpfSxcbiAgICAgICAgXCJ0cnVzdGVkdXJsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMubGlzdCl9LFxuICAgICAgICBcImlkXCI6IFwid2ViXCIsXG4gICAgICAgIFwic3VwcG9ydHpvb21cIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5zdXBwb3J0Wm9vbSl9LFxuICAgICAgICBcIndpZGV2aWV3cG9ydFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICgodGhpcy53aWRlVmlld3BvcnQpKSsnfSd9LFxuICAgICAgICBcIm92ZXJ2aWV3bW9kZWlubG9hZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLm92ZXJWaWV3TW9kZUxvYWQpfSxcbiAgICAgICAgXCJ1c2VyYWdlbnRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy51YSl9LFxuICAgICAgICBcImFsbG93dGhpcmRwYXJ0eWNvb2tpZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5hbGxvd1RoaXJkUGFydHlDb29raWVzKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid2ViLXBhZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJwYWdlc3RhcnRcIjogXCJvblBhZ2VTdGFydFwiLFxuICAgICAgICBcInBhZ2VmaW5pc2hcIjogXCJvblBhZ2VGaW5pc2hcIixcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwib25NZXNzYWdlXCIsXG4gICAgICAgIFwidGl0bGVyZWNlaXZlXCI6IFwib25UaXRsZVJlY2VpdmVcIixcbiAgICAgICAgXCJlcnJvclwiOiBcIm9uRXJyb3JcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCJ3ZWJcIlxuICAgIH1cbiAgXVxufSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZG9jLXBhZ2VcIj5cclxuICAgIDwhLS0gUmVwbGFjZSB0aGUgbGluayB0byB0aGUgSFRNTDUgYXBwIC0tPlxyXG4gICAgPHdlYiBjbGFzcz1cIndlYi1wYWdlXCIgc3JjPVwie3tsb2FkVXJsfX1cIiB0cnVzdGVkdXJsPVwie3tsaXN0fX1cIiBvbnBhZ2VzdGFydD1cIm9uUGFnZVN0YXJ0XCIgb25wYWdlZmluaXNoPVwib25QYWdlRmluaXNoXCJcclxuICAgICAgb25tZXNzYWdlPVwib25NZXNzYWdlXCIgb250aXRsZXJlY2VpdmU9XCJvblRpdGxlUmVjZWl2ZVwiIG9uZXJyb3I9XCJvbkVycm9yXCIgaWQ9XCJ3ZWJcIiBzdXBwb3J0em9vbT1cInt7c3VwcG9ydFpvb219fVwiXHJcbiAgICAgIHdpZGV2aWV3cG9ydD1cInt7d2lkZVZpZXdwb3J0fX19XCIgb3ZlcnZpZXdtb2RlaW5sb2FkPVwie3tvdmVyVmlld01vZGVMb2FkfX1cIiB1c2VyYWdlbnQ9XCJ7e3VhfX1cIlxyXG4gICAgICBhbGxvd3RoaXJkcGFydHljb29raWVzPVwie3thbGxvd1RoaXJkUGFydHlDb29raWVzfX1cIj5cclxuICAgIDwvd2ViPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgLmRvYy1wYWdlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG4gIC53ZWItcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnd2Vic3JjJ10sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAvLyBUT0RPIFJlcGxhY2UgdGhlIGxpbmsgdG8gdGhlIEg1IGFwcFxyXG4gICAgICBsb2FkVXJsOiBcImh0dHBzOi8vY29tZmVjby0yMDIxLXRlYW0tYW5ndWxhci0zMS52ZXJjZWwuYXBwL2xvZ2luXCIsXHJcbiAgICAgIC8vIEF0dHJpYnV0ZSBhbGxvd3RoaXJkcGFydHljb29raWVzLCBpbmRpY2F0ZXMgd2hldGhlciBjb29raWVzIGNhbiBiZSBkZWxpdmVyZWQgaW4gY3Jvc3MtZG9tYWluIG1vZGUuXHJcbiAgICAgIC8vIElmIHlvdSBuZWVkIGxvZ2luIEdvb2dsZSBBY2NvdW50IG9yIE90aGVyIEFjY291bnQsIFBsZWFzZSBzZXQgVFJVRS5cclxuICAgICAgYWxsb3dUaGlyZFBhcnR5Q29va2llczogdHJ1ZSxcclxuICAgICAgLy9BdHRyaWJ1dGUgc3VwcG9ydHpvb20sIGluZGljYXRlcyB3aGV0aGVyIHRoZSBINSBwYWdlIGNhbiBiZSB6b29tZWQgd2l0aCBnZXN0dXJlcy5cclxuICAgICAgc3VwcG9ydFpvb206IHRydWUsXHJcbiAgICAgIHdpZGVWaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgb3ZlclZpZXdNb2RlTG9hZDogdHJ1ZSxcclxuICAgICAgdWE6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAvLyBIZXJlIHRoZSBhbGxvd2xpc3Qgc2V0dGluZ3MsIHdoZW4gdGhlIGxvYWRpbmcgcGFnZSBoYXMgbXVsdGlwbGUgYWRkcmVzc2VzLCBzdWNoIGFzIHRoZSBzdWNjZXNzZnVsIGxvYWRpbmcgb2YgdGhlIGxvZ2luIGFkZHJlc3MgYW5kIHRoZSBpbmNvbnNpc3RlbnQgZW50cnkgYWRkcmVzcywgaXQgbmVlZHMgdG8gc2V0IHRoZSBhbGxvd2xpc3QgdG8gZG8gc28uXHJcbiAgICAgIGxpc3Q6IFtcIm5ldyBSZWdFeHAoJ2h0dHBzPy4qJylcIl1cclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnb25Jbml0OiAnKTtcclxuICAgIH0sXHJcbiAgICBvblBhZ2VTdGFydChlKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygncGFnZXN0YXJ0OiAnICsgZS51cmwpXHJcbiAgICB9LFxyXG4gICAgLy8gRWFjaCBwYWdlIHN3aXRjaCB0cmlnZ2Vyc1xyXG4gICAgb25QYWdlRmluaXNoKGUpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdwYWdlZmluaXNoOiAnICsgZS51cmwsIGUuY2FuQmFjaywgZS5jYW5Gb3J3YXJkKTtcclxuICAgIH0sXHJcbiAgICBvblRpdGxlUmVjZWl2ZShlKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBlLnRpdGxlO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZSkge1xyXG4gICAgICBjb25zb2xlLmluZm8oJ3BhZ2VFcnJvciA6ICcgKyBlLmVycm9yTXNnKVxyXG4gICAgfSxcclxuICAgIG9uTWVzc2FnZShlKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnb25tZXNzYWdlIGUgPSAnICsgZS5tZXNzYWdlICsgXCIsIHVybCA9IFwiICsgZS51cmwpO1xyXG4gICAgfSxcclxuICAgIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmluZm8oXCIgb25zaG93XCIpO1xyXG4gICAgfSxcclxuICAgIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmluZm8oXCIgIG9uSGlkZVwiKTtcclxuICAgIH0sXHJcbiAgICBvbkJhY2tQcmVzcygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ29uQmFja1ByZXNzJylcclxuICAgICAgdGhpcy4kZWxlbWVudCgnd2ViJykuY2FuQmFjayh7XHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2ViIGJhY2snKVxyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5iYWNrKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgYmFjaycpXHJcbiAgICAgICAgICAgIHJvdXRlci5iYWNrKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhYzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGZhLXRlbXBsYXRlLWxvYWRlci5qcz9kZXBlbmRzPSFjOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9oZWxsby51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhYzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxqaW1teVxcXFxFdmVudG9zIHkgY29tcGV0ZW5jaWFzXFxcXFRlYW0tQW5ndWxhci0zMS1Db21mZWNvXFxcXGNvbWZlY29fdGVhbV9hbmd1bGFyXzMxLmh1YXdlaVxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghYzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1lOlxcXFxqaW1teVxcXFxFdmVudG9zIHkgY29tcGV0ZW5jaWFzXFxcXFRlYW0tQW5ndWxhci0zMS1Db21mZWNvXFxcXGNvbWZlY29fdGVhbV9hbmd1bGFyXzMxLmh1YXdlaVxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi9oZWxsby51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxmYS1zY3JpcHQtbG9hZGVyLmpzIWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhYzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2hlbGxvLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaGVsbG8nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2hlbGxvJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzMuMS4yLVN0YWJsZS4zMDEnfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiLmRvYy1wYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwiLndlYi1wYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjEwMCVcIlxuICB9XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUF4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==