/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window) {
    function $(els) {
        this.el = document.querySelector(els);
        return this;
    }
    $.prototype = {
        attr: function attr(els, val) {
            if (!val) {
                return this.el.getAttribute(els);
            } else {
                return this.el.setAttribute(els, val);
            }
            return this;
        },
        hide: function hide() {
            this.el.style.display = 'none';
            return this;
        },
        css: function css(eles) {
            if ((typeof eles === 'undefined' ? 'undefined' : _typeof(eles)) === 'object') {
                for (i in eles) {
                    this.el.style[i] = eles[i];
                }
            } else {
                console.log('The value must be Object');
            }

            return this;
        },
        on: function on(type, fn, choose) {
            //给choose赋初值
            choose = choose || false;
            if (arguments.length < 2) {
                return;
            }
            //判断浏览器是否支持addEventListener
            if (this.el.addEventListener) {
                this.el.addEventListener(type, fn, choose);
            } else {
                this.el.attachEvent('on' + type, fn, choose);
            }
            return this;
        },
        val: function val(_val) {
            if (!_val) {
                return this.el.value;
            }
            if (_val.length > 0) {
                return this.el.value = _val;
            }
            return this;
        },
        html: function html(val) {
            if (!val) {
                return this.el.innerText;
            }
            if (val.length > 0 && typeof val === 'string') {
                return this.el.innerHTML = val;
            }
            if (val === '' && val.length == 0) {
                return this.el.innerText = '';
            }
            return this;
        }

    };
    window.$ = function (els) {
        return new $(els);
    };
})(window);

/***/ })

/******/ });