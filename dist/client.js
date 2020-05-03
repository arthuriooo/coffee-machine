/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~client"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var CoffeeMachine_store_1 = __webpack_require__(/*! ./store/CoffeeMachine.store */ "./src/store/CoffeeMachine.store.ts");
var Machine_1 = __webpack_require__(/*! ./components/Machine */ "./src/components/Machine.tsx");
var Money_1 = __webpack_require__(/*! ./components/Money */ "./src/components/Money.tsx");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 80%;\n  height: 95%;\n  top: 5%;\n  left: 10%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  width: 80%;\n  height: 95%;\n  top: 5%;\n  left: 10%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.store = new CoffeeMachine_store_1.CoffeeMachineStore();
        return _this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(mobx_react_1.Provider, { store: this.store },
            react_1.default.createElement(Wrapper, null,
                react_1.default.createElement(Machine_1.Machine, null),
                react_1.default.createElement(Money_1.Money, null))));
    };
    return App;
}(react_2.Component));
exports.App = App;
var templateObject_1;


/***/ }),

/***/ "./src/components/Coin.tsx":
/*!*********************************!*\
  !*** ./src/components/Coin.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var CoinWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px 12px;\n\n  box-shadow: 0 0 5px 0.05px #ffc600;\n  border-radius: 50px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n\n  width: ", ";\n  height: ", ";\n\n  background-color: #ffffff;\n\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px 12px;\n\n  box-shadow: 0 0 5px 0.05px #ffc600;\n  border-radius: 50px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n\n  width: ", ";\n  height: ", ";\n\n  background-color: #ffffff;\n\n  ",
    "\n"])), function (props) { return (props.type === "user" ? "70px" : "50px"); }, function (props) { return (props.type === "user" ? "70px" : "50px"); }, function (props) {
    return props.type === "userDeposit"
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          width: 55px;\n          height: 55px;\n          cursor: pointer;\n          transition: background-color 0.5s;\n          font-size: 20px;\n\n          background: linear-gradient(\n            to top,\n            RGBA(255, 198, 0, 1),\n            RGBA(255, 255, 255, 0),\n            RGBA(255, 255, 255, 0)\n          );\n\n          > p {\n            font-size: 18px;\n            bottom: -50px;\n          }\n\n          &:hover {\n            background-color: RGBA(255, 198, 0, 0.4);\n          }\n        "], ["\n          width: 55px;\n          height: 55px;\n          cursor: pointer;\n          transition: background-color 0.5s;\n          font-size: 20px;\n\n          background: linear-gradient(\n            to top,\n            RGBA(255, 198, 0, 1),\n            RGBA(255, 255, 255, 0),\n            RGBA(255, 255, 255, 0)\n          );\n\n          > p {\n            font-size: 18px;\n            bottom: -50px;\n          }\n\n          &:hover {\n            background-color: RGBA(255, 198, 0, 0.4);\n          }\n        "]))) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          width: 45px;\n          height: 45px;\n          font-size: 17px;\n          border: 1px solid #ffc600;\n\n          > p {\n            font-size: 15px;\n            bottom: -45px;\n          }\n        "], ["\n          width: 45px;\n          height: 45px;\n          font-size: 17px;\n          border: 1px solid #ffc600;\n\n          > p {\n            font-size: 15px;\n            bottom: -45px;\n          }\n        "])));
});
var Value = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Amount = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  color: #454545;\n  font-weight: 700;\n"], ["\n  position: absolute;\n  color: #454545;\n  font-weight: 700;\n"])));
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coin.prototype.onClickCoin = function () {
        var _a = this.props, value = _a.value, amount = _a.amount, store = _a.store;
        if (amount > 0) {
            store.addCoin(value);
        }
    };
    Coin.prototype.render = function () {
        var _a = this, onClickCoin = _a.onClickCoin, props = _a.props;
        var value = props.value, amount = props.amount, type = props.type;
        return (react_1.default.createElement(CoinWrapper, { type: type, onClick: onClickCoin },
            react_1.default.createElement(Value, null, value),
            react_1.default.createElement(Amount, null, amount)));
    };
    __decorate([
        mobx_1.action.bound
    ], Coin.prototype, "onClickCoin", null);
    Coin = __decorate([
        mobx_react_1.inject("store"),
        mobx_react_1.observer
    ], Coin);
    return Coin;
}(react_1.default.Component));
exports.Coin = Coin;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/Machine.tsx":
/*!************************************!*\
  !*** ./src/components/Machine.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 65%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  width: 65%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var Title = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n"], ["\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n"])));
var DrinksPrice = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var DrinksList = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-top: 10px;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-top: 10px;\n"])));
var Drink = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  > p {\n    font-size: 12px;\n    font-weight: 800;\n    font-family: \"Montserrat\", sans-serif;\n    text-transform: uppercase;\n  }\n\n  > img {\n    width: 45px;\n    height: 45px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  > p {\n    font-size: 12px;\n    font-weight: 800;\n    font-family: \"Montserrat\", sans-serif;\n    text-transform: uppercase;\n  }\n\n  > img {\n    width: 45px;\n    height: 45px;\n  }\n"])));
var Price = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-transform: lowercase;\n  font-size: 14px;\n  background-color: #1d1d1d;\n  margin-left: 7px;\n  padding: 5px 10px;\n  border-radius: 10px;\n  color: #ffffff;\n"], ["\n  text-transform: lowercase;\n  font-size: 14px;\n  background-color: #1d1d1d;\n  margin-left: 7px;\n  padding: 5px 10px;\n  border-radius: 10px;\n  color: #ffffff;\n"])));
var CoffeeMachine = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding-top: 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background-color: #07070c;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding-top: 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background-color: #07070c;\n"])));
var MachineButtons = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  > div {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  > div {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n"])));
var AmountLeft = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #eee7e1;\n"], ["\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #eee7e1;\n"])));
var Button = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  background-color: #eee7e1;\n  padding: 15px;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.4s;\n\n  ", ";\n\n  &:hover {\n    background-color: #be8f64;\n  }\n\n  > img {\n    width: 50px;\n    height: 50px;\n  }\n"], ["\n  width: 50px;\n  height: 50px;\n  background-color: #eee7e1;\n  padding: 15px;\n  border-radius: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.4s;\n\n  ",
    ";\n\n  &:hover {\n    background-color: #be8f64;\n  }\n\n  > img {\n    width: 50px;\n    height: 50px;\n  }\n"])), function (props) {
    return props.available
        ? styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n          border: 3px solid #00620a;\n          box-shadow: 0 0 30px 1px #00620a;\n        "], ["\n          border: 3px solid #00620a;\n          box-shadow: 0 0 30px 1px #00620a;\n        "]))) : styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n          border: 3px solid #810000;\n          box-shadow: 0 0 30px 1px #810000;\n        "], ["\n          border: 3px solid #810000;\n          box-shadow: 0 0 30px 1px #810000;\n        "])));
});
var MachineImage = styled_components_1.default.img(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 20px;\n  border-top: 3px solid #bb936c;\n"], ["\n  width: 100%;\n  margin-top: 20px;\n  border-top: 3px solid #bb936c;\n"])));
var Hint = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 15px;\n  width: 100%;\n  text-align: center;\n\n  > p {\n    display: inline-block;\n    font-weight: 500;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 15px;\n    text-transform: uppercase;\n    padding: 10px 60px;\n    border-radius: 15px;\n    border: 2px solid RGBA(190, 143, 100, 1);\n    background-color: RGBA(7, 7, 12, 0.7);\n    color: #ffffff;\n  }\n"], ["\n  position: absolute;\n  bottom: 15px;\n  width: 100%;\n  text-align: center;\n\n  > p {\n    display: inline-block;\n    font-weight: 500;\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 15px;\n    text-transform: uppercase;\n    padding: 10px 60px;\n    border-radius: 15px;\n    border: 2px solid RGBA(190, 143, 100, 1);\n    background-color: RGBA(7, 7, 12, 0.7);\n    color: #ffffff;\n  }\n"])));
var Message = styled_components_1.default(Hint)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  bottom: 30%;\n\n  > P {\n    font-size: 14px;\n    padding: 10px 30px;\n    border-radius: 15px;\n    border: ", ";\n    background-color: RGBA(7, 7, 12, 0.7);\n    color: #ffffff;\n  }\n"], ["\n  bottom: 30%;\n\n  > P {\n    font-size: 14px;\n    padding: 10px 30px;\n    border-radius: 15px;\n    border: ",
    ";\n    background-color: RGBA(7, 7, 12, 0.7);\n    color: #ffffff;\n  }\n"])), function (props) {
    return props.successful ? "3px solid #00620A" : "3px solid #810000";
});
var Availability = styled_components_1.default.p(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  bottom: -40px;\n  color: ", ";\n"], ["\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  bottom: -40px;\n  color: ", ";\n"])), function (props) { return (props.available ? "#1B751E" : "#810000"); });
var Machine = /** @class */ (function (_super) {
    __extends(Machine, _super);
    function Machine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Machine.prototype.onClickDrink = function (evt) {
        var drink = evt.currentTarget.dataset.drink;
        this.props.store.getDrink(drink);
    };
    Machine.prototype.render = function () {
        var _a = this, onClickDrink = _a.onClickDrink, props = _a.props;
        var _b = props.store, drinks = _b.drinks, insertedSum = _b.insertedSum, buttonPressed = _b.buttonPressed;
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(DrinksPrice, null,
                react_1.default.createElement(Title, null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u0432:"),
                react_1.default.createElement(DrinksList, null, Object.keys(drinks).map(function (drink) { return (react_1.default.createElement(Drink, { key: drink },
                    react_1.default.createElement("img", { src: drinks[drink].link }),
                    react_1.default.createElement("p", null,
                        drinks[drink].name,
                        react_1.default.createElement(Price, null, drinks[drink].price)))); }))),
            react_1.default.createElement(CoffeeMachine, null,
                react_1.default.createElement(MachineButtons, null, Object.keys(drinks).map(function (drink) {
                    var available = insertedSum >= drinks[drink].price;
                    return (react_1.default.createElement("div", { key: drink, "data-drink": drink, onClick: onClickDrink },
                        react_1.default.createElement(AmountLeft, null, drinks[drink].left),
                        react_1.default.createElement(Button, { available: available },
                            react_1.default.createElement("img", { src: drinks[drink].link })),
                        react_1.default.createElement(Availability, { available: available }, available ? "Доступно" : null)));
                })),
                react_1.default.createElement(MachineImage, { src: "https://i.ibb.co/brLqCLx/coffee-machine.png" }),
                buttonPressed ? (react_1.default.createElement(Message, { successful: buttonPressed.successful },
                    react_1.default.createElement("p", null, buttonPressed.successful
                        ? "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0412\u0430\u043C\u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D " + buttonPressed.drink
                        : "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432: " + buttonPressed.price + " \u0440."))) : null,
                react_1.default.createElement(Hint, null,
                    react_1.default.createElement("p", null, insertedSum > 0
                        ? "Выберите напиток"
                        : "Добавьте монеты в кофемашину")))));
    };
    __decorate([
        mobx_1.action.bound
    ], Machine.prototype, "onClickDrink", null);
    Machine = __decorate([
        mobx_react_1.inject("store"),
        mobx_react_1.observer
    ], Machine);
    return Machine;
}(react_2.Component));
exports.Machine = Machine;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;


/***/ }),

/***/ "./src/components/Money.tsx":
/*!**********************************!*\
  !*** ./src/components/Money.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var Coin_1 = __webpack_require__(/*! ./Coin */ "./src/components/Coin.tsx");
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 35%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 50px;\n\n  > div {\n    height: 200px;\n    margin-bottom: 20px;\n  }\n"], ["\n  width: 35%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 50px;\n\n  > div {\n    height: 200px;\n    margin-bottom: 20px;\n  }\n"])));
var Title = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: #07070c;\n\n  > span {\n    text-transform: lowercase;\n    color: #5e5e5e;\n  }\n"], ["\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: #07070c;\n\n  > span {\n    text-transform: lowercase;\n    color: #5e5e5e;\n  }\n"])));
var Button = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: lowercase;\n  border-radius: 20px;\n  border: 2px solid #ffc600;\n  padding: 10px 30px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.4s;\n\n  &:hover {\n    background-color: RGBA(255, 198, 0, 0.4);\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: lowercase;\n  border-radius: 20px;\n  border: 2px solid #ffc600;\n  padding: 10px 30px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: background-color 0.4s;\n\n  &:hover {\n    background-color: RGBA(255, 198, 0, 0.4);\n  }\n"])));
var CoinsList = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n"])));
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Money.prototype.onClickChange = function () {
        this.props.store.getChange();
    };
    Money.prototype.render = function () {
        var _a = this, onClickChange = _a.onClickChange, props = _a.props;
        var _b = props.store, userDeposit = _b.userDeposit, machineDeposit = _b.machineDeposit, insertedSum = _b.insertedSum;
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Title, null,
                    "\u0412\u043D\u0435\u0441\u0435\u043D\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ",
                    react_1.default.createElement("span", null,
                        insertedSum,
                        " \u0440.")),
                insertedSum > 0 ? (react_1.default.createElement(Button, { onClick: onClickChange }, "\u0412\u044B\u0434\u0430\u0442\u044C \u0441\u0434\u0430\u0447\u0443")) : null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Title, null, "\u0412\u0430\u0448 \u0434\u0435\u043F\u043E\u0437\u0438\u0442:"),
                react_1.default.createElement(CoinsList, null, Object.keys(userDeposit).map(function (coinNumber) { return (react_1.default.createElement(Coin_1.Coin, { key: "user " + coinNumber, type: "userDeposit", value: +coinNumber, amount: userDeposit[coinNumber] })); }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Title, null, "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u044B:"),
                react_1.default.createElement(CoinsList, null, Object.keys(userDeposit).map(function (coinNumber) { return (react_1.default.createElement(Coin_1.Coin, { key: "machine " + coinNumber, type: "machineDeposit", value: +coinNumber, amount: machineDeposit[coinNumber] })); })))));
    };
    __decorate([
        mobx_1.action.bound
    ], Money.prototype, "onClickChange", null);
    Money = __decorate([
        mobx_react_1.inject("store"),
        mobx_react_1.observer
    ], Money);
    return Money;
}(react_2.Component));
exports.Money = Money;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var app_1 = __webpack_require__(/*! ./app */ "./src/app.tsx");
var root = document.getElementById('app-root');
react_dom_1.default.render(react_1.default.createElement(app_1.App, null), root);


/***/ }),

/***/ "./src/store/CoffeeMachine.store.ts":
/*!******************************************!*\
  !*** ./src/store/CoffeeMachine.store.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var CoffeeMachineStore = /** @class */ (function () {
    function CoffeeMachineStore() {
        this.userDeposit = {
            1: 10,
            2: 30,
            5: 20,
            10: 15,
        };
        this.machineDeposit = {
            1: 100,
            2: 100,
            5: 100,
            10: 100,
        };
        this.drinks = {
            tea: {
                name: "Чай",
                price: "13",
                left: 10,
                link: "https://i.ibb.co/FVQj1W2/tea.png",
            },
            coffee: {
                name: "Кофе",
                price: "18",
                left: 20,
                link: "https://i.ibb.co/7RYW2VQ/coffee.png",
            },
            coffeeMilk: {
                name: "Кофе с молоком",
                price: "21",
                left: 20,
                link: "https://i.ibb.co/N1NKRzj/coffee-Milk.png",
            },
            juice: {
                name: "Сок",
                price: "35",
                left: 15,
                link: "https://i.ibb.co/9mXG3bN/juice.png",
            },
        };
        this.insertedSum = 0;
        this.buttonPressed = undefined;
    }
    CoffeeMachineStore.prototype.addCoin = function (value) {
        this.insertedSum += value;
        this.updateDeposit("machineDeposit", value, "add");
        this.updateDeposit("userDeposit", value, "substract");
    };
    CoffeeMachineStore.prototype.updateDeposit = function (type, value, method, amount) {
        if (amount === undefined) {
            amount = 1;
        }
        this[type][value] += method === "add" ? amount : -amount;
    };
    CoffeeMachineStore.prototype.getChange = function (values) {
        if (values === void 0) { values = [10, 5, 2, 1]; }
        var _a = this, updateDeposit = _a.updateDeposit, insertedSum = _a.insertedSum, getChange = _a.getChange;
        var value = values[0];
        var optimal = Math.floor(insertedSum / value);
        updateDeposit("machineDeposit", value, "substract", optimal);
        updateDeposit("userDeposit", value, "add", optimal);
        this.insertedSum -= optimal * value;
        if (insertedSum > 0 && values.length > 1) {
            getChange(values.slice(1));
        }
        else {
            return;
        }
    };
    CoffeeMachineStore.prototype.getDrink = function (drink) {
        var _a = this, insertedSum = _a.insertedSum, drinks = _a.drinks, hideMessage = _a.hideMessage;
        var _b = drinks[drink], price = _b.price, name = _b.name;
        if (price <= insertedSum) {
            this.buttonPressed = {
                successful: true,
                drink: name,
                price: price,
            };
            drinks[drink].left--;
            this.insertedSum -= price;
            hideMessage();
        }
        else {
            this.buttonPressed = {
                successful: false,
                drink: name,
                price: price,
            };
            hideMessage();
        }
    };
    CoffeeMachineStore.prototype.hideMessage = function () {
        var _this = this;
        setTimeout(function () {
            _this.buttonPressed = undefined;
        }, 5000);
    };
    __decorate([
        mobx_1.observable
    ], CoffeeMachineStore.prototype, "userDeposit", void 0);
    __decorate([
        mobx_1.observable
    ], CoffeeMachineStore.prototype, "machineDeposit", void 0);
    __decorate([
        mobx_1.observable
    ], CoffeeMachineStore.prototype, "drinks", void 0);
    __decorate([
        mobx_1.observable
    ], CoffeeMachineStore.prototype, "insertedSum", void 0);
    __decorate([
        mobx_1.observable
    ], CoffeeMachineStore.prototype, "buttonPressed", void 0);
    __decorate([
        mobx_1.action.bound
    ], CoffeeMachineStore.prototype, "addCoin", null);
    __decorate([
        mobx_1.action.bound
    ], CoffeeMachineStore.prototype, "updateDeposit", null);
    __decorate([
        mobx_1.action.bound
    ], CoffeeMachineStore.prototype, "getChange", null);
    __decorate([
        mobx_1.action.bound
    ], CoffeeMachineStore.prototype, "getDrink", null);
    __decorate([
        mobx_1.action.bound
    ], CoffeeMachineStore.prototype, "hideMessage", null);
    return CoffeeMachineStore;
}());
exports.CoffeeMachineStore = CoffeeMachineStore;
exports.coffeeMachineStore = new CoffeeMachineStore();


/***/ })

/******/ });
//# sourceMappingURL=client.js.map