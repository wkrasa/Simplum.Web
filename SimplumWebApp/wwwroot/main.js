(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component/dashboard.component */ "./src/app/dashboard.component/dashboard.component.ts");
/* harmony import */ var _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component/pagenotfound.component */ "./src/app/page-not-found.component/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'dashboard', component: _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { state: 'dashboard' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { state: 'dashboard' } },
    { path: '**', component: _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], data: { state: 'notfound' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component/app.component.css":
/*!*************************************************!*\
  !*** ./src/app/app.component/app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component/app.component.html":
/*!**************************************************!*\
  !*** ./src/app/app.component/app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n  .row > div {\r\n    background: pink;\r\n    border: 1px solid black;\r\n  }\r\n</style>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1>Hello {{name}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/sows\" routerLinkActive=\"active\">Sows</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/errorlink\" routerLinkActive=\"active\">Error</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-10\" [@routerTransition]=\"getState(o)\">\r\n      <router-outlet #o=\"outlet\"></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"btn-group btn-group-toggle\">\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n  </label>\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n  </label>\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n  </label>\r\n</div>\r\n<hr>\r\n<pre>{{model | json}}</pre>\r\n\r\n<modal-dialog [isVisible]=\"dialogVisible\" #dialog>\r\n  <span (click)=\"onCloseModal(dialog)\">close me</span>\r\n  <div>test</div>\r\n</modal-dialog>\r\n\r\n<span (click)=\"onModalToggle(dialog)\">show/hide</span>\r\n<div blink color1=\"yellow\" color2=\"pink\">blink</div>\r\n\r\n<span (click)=\"onShowMessagePopup('test')\">show popup</span>\r\n\r\n<tabs>\r\n  <tab state=\"active\" header=\"tab 1\">\r\n    <div>\r\n      tab 1\r\n    </div>\r\n  </tab>\r\n  <tab header=\"tab 2\">\r\n    <div>\r\n      tab 2\r\n    </div>\r\n  </tab>\r\n  <tab header=\"tab 3\">\r\n    <div>\r\n      tab 3\r\n    </div>\r\n  </tab>\r\n</tabs>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component/app.component.ts":
/*!************************************************!*\
  !*** ./src/app/app.component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-animations */ "./src/app/app.component/router-animations.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(popupService) {
        this.popupService = popupService;
        this.model = { left: false, middle: false, right: false };
        this.name = 'test';
        this.title = 'SimplumWebApp';
        this.dialogVisible = true;
    }
    AppComponent.prototype.getState = function (outlet) {
        console.log(outlet.activatedRouteData.state);
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.onCloseModal = function (dialog) {
        //this.dialogVisible = false;
        console.dir(dialog);
        dialog.close();
    };
    AppComponent.prototype.onModalToggle = function (dialog) {
        //this.dialogVisible = !this.dialogVisible;
        console.dir(dialog);
        dialog.toggle();
    };
    AppComponent.prototype.onShowMessagePopup = function (message) {
        this.popupService.show(message);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component/app.component.html"),
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component/app.component.css")]
        }),
        __metadata("design:paramtypes", [_infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__["PopupService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.component/router-animations.ts":
/*!****************************************************!*\
  !*** ./src/app/app.component/router-animations.ts ***!
  \****************************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    //transition(':leave', [style({ opacity: 0.2, transform: 'translateX(20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
    //transition(':enter', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
    //transition('*=>dashboard', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
    //transition('*=>sows', [style({ opacity: 0.2, transform: 'translateX(-20%)' }), animate(500, style({ opacity: 1, transform: 'translateX(0)' }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.2, transform: 'translateX(-20%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))])
    //transition('dashboard=>*', [style({ opacity: 0.2, transform: 'translateX(0)' }), animate(500, style({ opacity: 1, transform: 'translateX(-20%)' }))]),
]);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component/app.component */ "./src/app/app.component/app.component.ts");
/* harmony import */ var _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component/dashboard.component */ "./src/app/dashboard.component/dashboard.component.ts");
/* harmony import */ var _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found.component/pagenotfound.component */ "./src/app/page-not-found.component/pagenotfound.component.ts");
/* harmony import */ var _piglets_producer_sows_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piglets-producer/sows.module */ "./src/app/piglets-producer/sows.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/*
- mock backend
- login/auth
- roles
- module per functionality
-- routing component
- router guards
- http interceptors (redirect to login)
- animations
- testing
- sows functionality (crud)
-- sows list: grid, datails on focus, more details on click
- sgc funtionality
-- sgc list
--- sgc details
--- sgc reports

#==========
- create popup component
#==========
- create toggle component (https://blog.angularindepth.com/build-a-toggle-component-6e8f44889c2c)
#==========
- play with ElementRef
#==========
- add modal service (https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1)
#==========
check services:
 templateRef: TemplateRef<DelayContext>,
     viewContainerRef: ViewContainerRef
#==========
- Debugger for Chrome extension
#==========
-- play with ElementRef service:
--- add some child elements
--- add styles
--- create custom directive setting backgroud and tooltip
--- play with events (jquery)
#==========
- edit sow via popup and refresh it on grid
#==========
- dialog box service with bootstrap
#==========
- create observable with interval, wrapping other observable
#==========
- sows crud
- sow edit: new model for editing
-- sow editing via router (pass id in url)
#==========
+ sow details component
+ components communication
#==========
- JQuery for angular
#==========
- backend
#==========
--- bootstrap styles (https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a)
--- search for nice styles on the internet
--- bootstrap controls for angular
#==========
--- app layout (header, footer, content)
#==========
--- services
---- sows service
---- message box service
#==========
--- create form
#==========
--- create grid for sows
---- details on focus
#==========
--- authorization (cookie)
---- http interceptor (401 redirect)
---- route guards
#=========
--- animations
#=========
--- boundles
#=========
--- lint (for styles)
#========
--- create backend project
---- WebApi
---- .Net Core
#==========
- tranlations
#==========
- setup for production enviroment
#==========
- CORS for web api
#==========
- OAuth (keycloak)
#==========
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _piglets_producer_sows_module__WEBPACK_IMPORTED_MODULE_8__["SowsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_10__["InfrastructureModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _app_component_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            ],
            providers: [
                _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_10__["PopupService"]
            ],
            bootstrap: [
                _app_component_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            entryComponents: [
                _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_10__["PopupComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard.component/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard.component/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: "<h1>Dahsboard component 23</h1>",
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/blink.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/infrastructure/blink.directive.ts ***!
  \***************************************************/
/*! exports provided: BlinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlinkDirective", function() { return BlinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlinkDirective = /** @class */ (function () {
    function BlinkDirective(element) {
        this.element = element;
        this.color1 = 'red';
        this.color2 = 'green';
    }
    BlinkDirective.prototype.onMouseEnter = function () {
        this.start();
    };
    BlinkDirective.prototype.onMouseLeave = function () {
        this.stop();
    };
    BlinkDirective.prototype.ngOnInit = function () {
        this.highlight(this.color2);
    };
    BlinkDirective.prototype.ngOnDestroy = function () {
    };
    BlinkDirective.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.currentColor = _this.currentColor === _this.color1 ? _this.color2 : _this.color1;
            _this.highlight(_this.currentColor);
        }, 500);
    };
    BlinkDirective.prototype.stop = function () {
        clearInterval(this.interval);
    };
    BlinkDirective.prototype.highlight = function (color) {
        this.element.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlinkDirective.prototype, "color1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlinkDirective.prototype, "color2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlinkDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlinkDirective.prototype, "onMouseLeave", null);
    BlinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[blink]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BlinkDirective);
    return BlinkDirective;
}());

//import { Component, EventEmitter, Input, Output, ElementRef, OnInit, OnDestroy } from '@angular/core';
//declare var $: any;
//@Component({
//  selector: 'modal-dialog',
//  template: `<div class="modal fade" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//                  <div class="modal-dialog" role="document">
//                    <div class="modal-content">
//                        <ng-content></ng-content>
//                    </div>
//                  </div>
//                </div>`,
//})
//export class ModalDialogComponent implements OnInit, OnDestroy {
//  @Input() modalId: string;
//  @Output() opened = new EventEmitter();
//  @Output() closed = new EventEmitter();
//  constructor(private element: ElementRef) {
//  }
//  ngOnInit(): void {
//    console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
//    $('#' + this.modalId).modal({
//      keyboard: false
//    });
//    $('#' + this.modalId).on('show.bs.modal', function (e: any) {
//      console.dir('opened +++++++++++++++++++');
//      this.opened().emit();
//    });
//    $('#' + this.modalId).on('hide.bs.modal', function (e: any) {
//      this.closed().emit();
//    });
//  }
//  ngOnDestroy(): void {
//    $('#' + this.modalId).modal('dispose');
//  }
//  open() {
//    $('#' + this.modalId).modal('show');
//  }
//  close() {
//    $('#' + this.modalId).modal('hide')
//  }
//}


/***/ }),

/***/ "./src/app/infrastructure/infrastructure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalDialogComponent, MessageBoxService, BlinkDirective, PopupService, PopupComponent, InfrastructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureModule", function() { return InfrastructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _message_box_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-box.service */ "./src/app/infrastructure/message-box.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBoxService", function() { return _message_box_service__WEBPACK_IMPORTED_MODULE_2__["MessageBoxService"]; });

/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-dialog.component */ "./src/app/infrastructure/modal-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return _modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ModalDialogComponent"]; });

/* harmony import */ var _blink_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blink.directive */ "./src/app/infrastructure/blink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlinkDirective", function() { return _blink_directive__WEBPACK_IMPORTED_MODULE_4__["BlinkDirective"]; });

/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/infrastructure/popup/popup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"]; });

/* harmony import */ var _popup_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/popup.service */ "./src/app/infrastructure/popup/popup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return _popup_popup_service__WEBPACK_IMPORTED_MODULE_6__["PopupService"]; });

/* harmony import */ var _tabs_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tab.component */ "./src/app/infrastructure/tabs/tab.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/infrastructure/tabs/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//export { TabComponent, TabsComponent }
var InfrastructureModule = /** @class */ (function () {
    function InfrastructureModule() {
    }
    InfrastructureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            declarations: [
                _modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ModalDialogComponent"],
                _blink_directive__WEBPACK_IMPORTED_MODULE_4__["BlinkDirective"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"],
                _tabs_tab_component__WEBPACK_IMPORTED_MODULE_7__["TabComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"]
            ],
            providers: [
                _message_box_service__WEBPACK_IMPORTED_MODULE_2__["MessageBoxService"]
            ],
            exports: [
                _modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ModalDialogComponent"],
                _blink_directive__WEBPACK_IMPORTED_MODULE_4__["BlinkDirective"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"],
                _tabs_tab_component__WEBPACK_IMPORTED_MODULE_7__["TabComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"]
            ]
        })
    ], InfrastructureModule);
    return InfrastructureModule;
}());



/***/ }),

/***/ "./src/app/infrastructure/message-box.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/infrastructure/message-box.service.ts ***!
  \*******************************************************/
/*! exports provided: MessageBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxService", function() { return MessageBoxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageBoxService = /** @class */ (function () {
    function MessageBoxService() {
    }
    MessageBoxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageBoxService);
    return MessageBoxService;
}());



/***/ }),

/***/ "./src/app/infrastructure/modal-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/infrastructure/modal-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(element) {
        this.element = element;
        this.myClasses = {
            red: true,
        };
    }
    Object.defineProperty(ModalDialogComponent.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (value) {
            console.dir(this._isVisible + " -> " + value);
            this._isVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    ModalDialogComponent.prototype.ngOnInit = function () {
        //this.isVisible = true;
        console.dir('Visible: ' + this.isVisible);
        //this.myClasses.hidden = this.isVisible;
    };
    ModalDialogComponent.prototype.ngOnDestroy = function () {
    };
    ModalDialogComponent.prototype.open = function () {
        this.isVisible = true;
    };
    ModalDialogComponent.prototype.close = function () {
        this.isVisible = false;
    };
    ModalDialogComponent.prototype.toggle = function () {
        this.isVisible = !this.isVisible;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isVisible'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ModalDialogComponent.prototype, "isVisible", null);
    ModalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-dialog',
            template: "<div class=\"custom-modal\" [@isVisible]=\"isVisible\" [ngClass]=\"myClasses\">\n            <div>header 2</div>\n                  <ng-content></ng-content>\n            </div>",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('isVisible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false=>true', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.0, transform: 'translateX(-100%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true=>false', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)' }))])
                ])]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());

//import { Component, EventEmitter, Input, Output, ElementRef, OnInit, OnDestroy } from '@angular/core';
//declare var $: any;
//@Component({
//  selector: 'modal-dialog',
//  template: `<div class="modal fade" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//                  <div class="modal-dialog" role="document">
//                    <div class="modal-content">
//                        <ng-content></ng-content>
//                    </div>
//                  </div>
//                </div>`,
//})
//export class ModalDialogComponent implements OnInit, OnDestroy {
//  @Input() modalId: string;
//  @Output() opened = new EventEmitter();
//  @Output() closed = new EventEmitter();
//  constructor(private element: ElementRef) {
//  }
//  ngOnInit(): void {
//    console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
//    $('#' + this.modalId).modal({
//      keyboard: false
//    });
//    $('#' + this.modalId).on('show.bs.modal', function (e: any) {
//      console.dir('opened +++++++++++++++++++');
//      this.opened().emit();
//    });
//    $('#' + this.modalId).on('hide.bs.modal', function (e: any) {
//      this.closed().emit();
//    });
//  }
//  ngOnDestroy(): void {
//    $('#' + this.modalId).modal('dispose');
//  }
//  open() {
//    $('#' + this.modalId).modal('show');
//  }
//  close() {
//    $('#' + this.modalId).modal('hide')
//  }
//}


/***/ }),

/***/ "./src/app/infrastructure/popup/popup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/popup/popup.component.ts ***!
  \*********************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { setTimeout } from 'timers';
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.state = 'closed';
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PopupComponent.prototype, "message", {
        get: function () { return this._message; },
        set: function (message) {
            this._message = message;
            this.state = 'opened';
        },
        enumerable: true,
        configurable: true
    });
    PopupComponent.prototype.onClose = function () {
        var _this = this;
        this.state = 'closed';
        setTimeout(function () {
            _this.closed.emit();
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PopupComponent.prototype, "message", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "closed", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-popup',
            template: "\n    <span>Popup: {{message}}</span>\n    <button (click)=\"onClose()\">&#x2716;</button>\n  ",
            host: {
                '[@state]': 'state',
                'c': '111'
            },
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('opened', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in')),
                ])
            ],
            styles: ["\n    :host {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #009cff;\n      height: 48px;\n      padding: 16px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-top: 1px solid black;\n      font-size: 24px;\n    }\n \n    button {\n      border-radius: 50%;\n    }\n  "]
        })
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/popup/popup.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/infrastructure/popup/popup.service.ts ***!
  \*******************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.component */ "./src/app/infrastructure/popup/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgElement, WithProperties } from '@angular/elements';

var PopupService = /** @class */ (function () {
    function PopupService(injector, applicationRef, componentFactoryResolver) {
        this.injector = injector;
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    // Previous dynamic-loading method required you to set up infrastructure
    // before adding the popup to the DOM.
    PopupService.prototype.show = function (message) {
        var _this = this;
        // Create element
        var popup = document.createElement('popup-component2');
        // Create the component and wire it up with the element
        var factory = this.componentFactoryResolver.resolveComponentFactory(_popup_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"]);
        var popupComponentRef = factory.create(this.injector, [], popup);
        // Attach to the view so that the change detector knows to run
        this.applicationRef.attachView(popupComponentRef.hostView);
        // Listen to the close event
        popupComponentRef.instance.closed.subscribe(function () {
            console.log('removing popup');
            document.body.removeChild(popup);
            _this.applicationRef.detachView(popupComponentRef.hostView);
        });
        // Set the message
        popupComponentRef.instance.message = message;
        // Add to the DOM
        document.body.appendChild(popup);
    };
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/infrastructure/tabs/tab.component.ts":
/*!******************************************************!*\
  !*** ./src/app/infrastructure/tabs/tab.component.ts ***!
  \******************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.component */ "./src/app/infrastructure/tabs/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        this.tabs = tabs;
        this.state = 'closed';
        this.header = 'tab';
        this.tabs.addTab(this);
    }
    TabComponent.prototype.ngOnInit = function () {
        console.log('state: ' + this.state);
    };
    TabComponent.prototype.activate = function () {
        this.state = 'active';
    };
    TabComponent.prototype.close = function () {
        this.state = 'closed';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "header", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab',
            template: "\n    <div class=\"tab\" [hidden]=\"state=='closed'\" [@state]=\"state\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n    .tab{\n      width: 200px;\n      height: 100px;\n      border: solid 1px gray;\n    }\n  "],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(30%)', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed=>active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                ])
            ],
        }),
        __metadata("design:paramtypes", [_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/tabs/tabs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/infrastructure/tabs/tabs.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (x) { return x.close(); });
        tab.activate();
    };
    TabsComponent.prototype.isSelected = function (tab) {
        return tab.state === 'active';
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs',
            template: "\n    <ul class=\"header\">\n      <li *ngFor=\"let tab of tabs\"  [class.selected]=\"isSelected(tab)\" (click)=\"selectTab(tab)\" [@selected]=\"isSelected(tab)\">| {{tab.header}}</li>\n    </ul>\n    <ng-content></ng-content>    \n  ",
            styles: ["\n    .header{\n      height: 30px;\n      clear: both;\n    }\n    .header li{\n       float: left;\n       list-style-type: none;\n    }\n    .selected{\n      background: gray;     \n    }\n  "],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('selected', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'gray' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ background: 'white' })),
                    //transition('active=>closed', [animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(30%)' }))]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                ])
            ]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component/pagenotfound.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/page-not-found.component/pagenotfound.component.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.text = '404';
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: "<h1>Pege not found {{text}}</h1>",
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sow-details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/piglets-producer/sow-details.component.ts ***!
  \***********************************************************/
/*! exports provided: SowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowDetailsComponent", function() { return SowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SowDetailsComponent = /** @class */ (function () {
    function SowDetailsComponent(route, location, sowsService) {
        this.route = route;
        this.location = location;
        this.sowsService = sowsService;
    }
    SowDetailsComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    SowDetailsComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.sowsService.getSow(id)
            .subscribe(function (sow) { return _this.sow = sow; });
    };
    SowDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    SowDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sow-details',
            template: "\n        <button (click)=\"goBack()\">go back</button>\n        <div *ngIf=\"sow\">              \n            <h1>Sow details</h1>\n            <label> name: <span>{{sow.name}}</span></label>\n            <label>elir: <span>{{sow.elir}}</span></label>\n        </div>\n            ",
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _sows_service__WEBPACK_IMPORTED_MODULE_3__["SowsService"]])
    ], SowDetailsComponent);
    return SowDetailsComponent;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sow-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/piglets-producer/sow-edit.component.ts ***!
  \********************************************************/
/*! exports provided: SowEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowEditComponent", function() { return SowEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sow */ "./src/app/piglets-producer/sow.ts");
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SowEditComponent = /** @class */ (function () {
    function SowEditComponent(sowsService) {
        this.sowsService = sowsService;
    }
    SowEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sow__WEBPACK_IMPORTED_MODULE_1__["Sow"])
    ], SowEditComponent.prototype, "sow", void 0);
    SowEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sow-edit',
            template: "\n                <div *ngIf=\"sow\">\n                    <h1>Sow edit</h1>\n                    <label>name:\n                        <input [(ngModel)]=\"sow.name\" placeholder=\"name\">\n                    </label>\n                    <label>elir:\n                        <input [(ngModel)]=\"sow.elir\" placeholder=\"elir\">\n                    </label>\n                </div>\n            ",
        }),
        __metadata("design:paramtypes", [_sows_service__WEBPACK_IMPORTED_MODULE_2__["SowsService"]])
    ], SowEditComponent);
    return SowEditComponent;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sow.ts":
/*!*****************************************!*\
  !*** ./src/app/piglets-producer/sow.ts ***!
  \*****************************************/
/*! exports provided: Sow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sow", function() { return Sow; });
var Sow = /** @class */ (function () {
    function Sow() {
    }
    return Sow;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sows-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/piglets-producer/sows-list.component.ts ***!
  \*********************************************************/
/*! exports provided: SowsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowsListComponent", function() { return SowsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SowsListComponent = /** @class */ (function () {
    function SowsListComponent(sowsService) {
        this.sowsService = sowsService;
    }
    SowsListComponent.prototype.ngOnInit = function () {
        this.getSows();
    };
    SowsListComponent.prototype.onSelectSow = function (sow) {
        this.selectedSow = sow;
    };
    SowsListComponent.prototype.getSows = function () {
        var _this = this;
        this.sowsService.getSows()
            .subscribe(function (sows) {
            _this.sows = sows;
            if (_this.sows.length > 0) {
                _this.selectedSow = _this.sows[0];
            }
        });
    };
    SowsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sows-list',
            template: "<h1>selected sow9: <span *ngIf=\"selectedSow\">{{selectedSow.name || selectedSow.elir}}</span></h1>\n                <ul>\n                    <li *ngFor=\"let sow of sows\" (click)=\"onSelectSow(sow)\" [@sowState]=\"\">\n                        <span [class.active]=\"sow===selectedSow\">{{sow.name || sow.elir}}</span> <a class=\"badge badge-secondary\" routerLink=\"/sow-details/{{sow.id}}\" >Details</a>\n                    </li>\n                </ul>\n                <sow-edit [sow]=\"selectedSow\"></sow-edit>\n            ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('sowState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: 'red', transform: 'translateX(0)' }))]),
                ])]
        }),
        __metadata("design:paramtypes", [_sows_service__WEBPACK_IMPORTED_MODULE_2__["SowsService"]])
    ], SowsListComponent);
    return SowsListComponent;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sows-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/piglets-producer/sows-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SowsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowsRoutingModule", function() { return SowsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sows_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sows-list.component */ "./src/app/piglets-producer/sows-list.component.ts");
/* harmony import */ var _sow_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sow-details.component */ "./src/app/piglets-producer/sow-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    //{ path: 'crisis-center', component: CrisisListComponent },
    { path: 'sows', component: _sows_list_component__WEBPACK_IMPORTED_MODULE_2__["SowsListComponent"], data: { state: 'sows' } },
    { path: 'sow-details/:id', component: _sow_details_component__WEBPACK_IMPORTED_MODULE_3__["SowDetailsComponent"], data: { state: 'sow-details' } }
];
var SowsRoutingModule = /** @class */ (function () {
    function SowsRoutingModule() {
    }
    SowsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SowsRoutingModule);
    return SowsRoutingModule;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sows.module.ts":
/*!*************************************************!*\
  !*** ./src/app/piglets-producer/sows.module.ts ***!
  \*************************************************/
/*! exports provided: SowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowsModule", function() { return SowsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sows_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sows-routing.module */ "./src/app/piglets-producer/sows-routing.module.ts");
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
/* harmony import */ var _sows_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sows-list.component */ "./src/app/piglets-producer/sows-list.component.ts");
/* harmony import */ var _sow_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sow-edit.component */ "./src/app/piglets-producer/sow-edit.component.ts");
/* harmony import */ var _sow_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sow-details.component */ "./src/app/piglets-producer/sow-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SowsModule = /** @class */ (function () {
    function SowsModule() {
    }
    SowsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _sows_routing_module__WEBPACK_IMPORTED_MODULE_4__["SowsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _sows_list_component__WEBPACK_IMPORTED_MODULE_6__["SowsListComponent"],
                _sow_edit_component__WEBPACK_IMPORTED_MODULE_7__["SowEditComponent"],
                _sow_details_component__WEBPACK_IMPORTED_MODULE_8__["SowDetailsComponent"]
            ],
            providers: [
                _sows_service__WEBPACK_IMPORTED_MODULE_5__["SowsService"]
            ]
        })
    ], SowsModule);
    return SowsModule;
}());



/***/ }),

/***/ "./src/app/piglets-producer/sows.service.ts":
/*!**************************************************!*\
  !*** ./src/app/piglets-producer/sows.service.ts ***!
  \**************************************************/
/*! exports provided: SowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SowsService", function() { return SowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var sows = [
    { id: 1, elir: '1111', name: 'sow1', birtDate: new Date('2015-01-11') },
    { id: 2, elir: '2222', name: null, birtDate: new Date('2016-01-01') },
    { id: 3, elir: '3333', name: 'sow3', birtDate: new Date('2016-03-01') },
    { id: 4, elir: '4444', name: 'sow4', birtDate: new Date('2017-04-22') }
];
var SowsService = /** @class */ (function () {
    function SowsService() {
    }
    SowsService.prototype.getSows = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(sows);
    };
    SowsService.prototype.getSow = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(sows.find(function (x) { return x.id === id; }));
    };
    SowsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SowsService);
    return SowsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Simplum.Web\SimplumWebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map