(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng2-collapsable"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else
		root["ng2-collapsable"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_collapsable_component_1 = __webpack_require__(1);
	exports.Ng2CollapsableComponent = ng2_collapsable_component_1.Ng2CollapsableComponent;
	var ng2_collapsable_module_1 = __webpack_require__(3);
	exports.Ng2CollapsableModule = ng2_collapsable_module_1.Ng2CollapsableModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Ng2CollapsableComponent = (function () {
	    function Ng2CollapsableComponent(viewContainer) {
	        this.viewContainer = viewContainer;
	        this.selectedIndexClass = 'selected';
	        this.selectedContentsClass = 'selected';
	        this.el = this.viewContainer.element.nativeElement;
	    }
	    Ng2CollapsableComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.indexEls = [].slice.call(this.el.querySelectorAll('[index]'));
	        this.contentsEls = [].slice.call(this.el.querySelectorAll('[contents]'));
	        this.selectTab(this.selectedIndex);
	        this.indexEls.forEach(function (el) {
	            el.addEventListener('click', function () {
	                _this.selectTab(el.getAttribute('index'));
	            });
	        });
	    };
	    Ng2CollapsableComponent.prototype.selectTab = function (id) {
	        var _this = this;
	        id = id || this.indexEls[0].getAttribute('index');
	        this.indexEls.forEach(function (el) {
	            _this.removeClass(el, _this.selectedIndexClass);
	            if (el.getAttribute('index') == id) {
	                _this.addClass(el, _this.selectedIndexClass);
	            }
	        });
	        this.contentsEls.forEach(function (el) {
	            _this.removeClass(el, _this.selectedContentsClass);
	            if (el.getAttribute('contents') == id) {
	                _this.addClass(el, _this.selectedContentsClass);
	            }
	        });
	    };
	    Ng2CollapsableComponent.prototype.addClass = function (el, str) {
	        var classNames = (el.className || '').split(' ');
	        classNames.push(str);
	        el.className = classNames.join(' ');
	    };
	    Ng2CollapsableComponent.prototype.removeClass = function (el, str) {
	        el.className = (el.className || '').replace(new RegExp('[ ]*' + str), '');
	    };
	    return Ng2CollapsableComponent;
	}());
	__decorate([
	    core_1.Input('selected'),
	    __metadata("design:type", String)
	], Ng2CollapsableComponent.prototype, "selectedIndex", void 0);
	__decorate([
	    core_1.Input('selected-index-class'),
	    __metadata("design:type", String)
	], Ng2CollapsableComponent.prototype, "selectedIndexClass", void 0);
	__decorate([
	    core_1.Input('selected-contents-class'),
	    __metadata("design:type", String)
	], Ng2CollapsableComponent.prototype, "selectedContentsClass", void 0);
	Ng2CollapsableComponent = __decorate([
	    core_1.Component({
	        selector: 'ng2-collapsable, [ng2-collapsable]',
	        encapsulation: core_1.ViewEncapsulation.None,
	        template: "<ng-content></ng-content>",
	        styles: ["\n    [ng2-collapsable] [index] {\n      display: block;\n      cursor: pointer;\n      position: relative;\n      margin: 2px 0 0 0;\n      padding: .5em .5em .5em .7em;\n      border: 1px solid #cccccc;\n      background: #ededed;\n      font-weight: normal;\n      border-radius: 2px; \n      color: #2b2b2b;\n    }\n    [ng2-collapsable] [index].selected {\n      border: 1px solid #003eff;\n      background: #007fff;\n      color: #ffffff;\n      border-radius: 2px 2px 0 0;\n    }\n    [ng2-collapsable] [contents] {\n      border-top: 0;\n      background: #ffffff;\n      color: #333333;\n      padding: 0px;\n      border-radius: 0 0 2px 2px;\n      height: 0;\n      border: 0;\n      font-size: 0;\n    }\n    [ng2-collapsable] [contents].selected {\n      height: 50px;\n      padding: 10px;\n      border: 1px solid #dddddd;\n      transition: font-size 0.3s ease-in, height 0.3s ease-in;\n      font-size: inherit;\n    }\n  "],
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], Ng2CollapsableComponent);
	exports.Ng2CollapsableComponent = Ng2CollapsableComponent;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(4);
	var forms_1 = __webpack_require__(5);
	var ng2_collapsable_component_1 = __webpack_require__(1);
	var Ng2CollapsableModule = (function () {
	    function Ng2CollapsableModule() {
	    }
	    return Ng2CollapsableModule;
	}());
	Ng2CollapsableModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [ng2_collapsable_component_1.Ng2CollapsableComponent],
	        exports: [ng2_collapsable_component_1.Ng2CollapsableComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2CollapsableModule);
	exports.Ng2CollapsableModule = Ng2CollapsableModule;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-collapsable.umd.js.map