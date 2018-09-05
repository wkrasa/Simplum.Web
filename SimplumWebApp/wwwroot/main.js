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
    { path: 'dashboard', component: _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
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

module.exports = "\r\n<style>\r\n  .row > div {\r\n    background: pink;\r\n    border: 1px solid black;\r\n  }\r\n</style>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1>Hello 222 {{name}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/sows\" routerLinkActive=\"active\">Sows</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/errorlink\" routerLinkActive=\"active\">Error</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"btn-group btn-group-toggle\">\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n  </label>\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n  </label>\r\n  <label class=\"btn-primary\" ngbButtonLabel>\r\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n  </label>\r\n</div>\r\n<hr>\r\n<pre>{{model | json}}</pre>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.model = {};
        this.title = 'SimplumWebApp222';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component/app.component */ "./src/app/app.component/app.component.ts");
/* harmony import */ var _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component/dashboard.component */ "./src/app/dashboard.component/dashboard.component.ts");
/* harmony import */ var _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component/pagenotfound.component */ "./src/app/page-not-found.component/pagenotfound.component.ts");
/* harmony import */ var _piglets_producer_sows_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piglets-producer/sows.module */ "./src/app/piglets-producer/sows.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _piglets_producer_sows_module__WEBPACK_IMPORTED_MODULE_7__["SowsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_9__["InfrastructureModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [
                _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_component_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _page_not_found_component_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
            ],
            providers: [],
            bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
            template: "<h1>Dahsboard component 22</h1>",
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/infrastructure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.module.ts ***!
  \*********************************************************/
/*! exports provided: MessageBoxService, InfrastructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureModule", function() { return InfrastructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_box_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-box.service */ "./src/app/infrastructure/message-box.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBoxService", function() { return _message_box_service__WEBPACK_IMPORTED_MODULE_1__["MessageBoxService"]; });

/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dialog.component */ "./src/app/infrastructure/modal-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfrastructureModule = /** @class */ (function () {
    function InfrastructureModule() {
    }
    InfrastructureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ModalDialogComponent"]
            ],
            providers: [
                _message_box_service__WEBPACK_IMPORTED_MODULE_1__["MessageBoxService"]
            ],
            exports: [
                _modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ModalDialogComponent"]
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
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
        console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
        $('#' + this.modalId).modal({
            keyboard: false
        });
        $('#' + this.modalId).on('show.bs.modal', function (e) {
            console.dir('opened +++++++++++++++++++');
            this.opened().emit();
        });
        $('#' + this.modalId).on('hide.bs.modal', function (e) {
            this.closed().emit();
        });
    };
    ModalDialogComponent.prototype.ngOnDestroy = function () {
        $('#' + this.modalId).modal('dispose');
    };
    ModalDialogComponent.prototype.open = function () {
        $('#' + this.modalId).modal('show');
    };
    ModalDialogComponent.prototype.close = function () {
        $('#' + this.modalId).modal('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalDialogComponent.prototype, "modalId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "opened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "closed", void 0);
    ModalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-dialog',
            template: "<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <ng-content></ng-content>\n                    </div>\n                  </div>\n                </div>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
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
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
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
            template: "<h1>selected sow: <span *ngIf=\"selectedSow\">{{selectedSow.name || selectedSow.elir}}</span></h1>\n                <ul>\n                    <li *ngFor=\"let sow of sows\" (click)=\"onSelectSow(sow)\">\n                        <span [class.active]=\"sow===selectedSow\">{{sow.name || sow.elir}}</span> <a class=\"badge badge-secondary\" routerLink=\"/sow-details/{{sow.id}}\" >Details</a>\n                    </li>\n                </ul>\n                <sow-edit [sow]=\"selectedSow\"></sow-edit>\n            ",
        }),
        __metadata("design:paramtypes", [_sows_service__WEBPACK_IMPORTED_MODULE_1__["SowsService"]])
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
    { path: 'sows', component: _sows_list_component__WEBPACK_IMPORTED_MODULE_2__["SowsListComponent"] },
    { path: 'sow-details/:id', component: _sow_details_component__WEBPACK_IMPORTED_MODULE_3__["SowDetailsComponent"] }
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
/* harmony import */ var _sows_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sows-routing.module */ "./src/app/piglets-producer/sows-routing.module.ts");
/* harmony import */ var _sows_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sows.service */ "./src/app/piglets-producer/sows.service.ts");
/* harmony import */ var _sows_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sows-list.component */ "./src/app/piglets-producer/sows-list.component.ts");
/* harmony import */ var _sow_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sow-edit.component */ "./src/app/piglets-producer/sow-edit.component.ts");
/* harmony import */ var _sow_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sow-details.component */ "./src/app/piglets-producer/sow-details.component.ts");
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
                _sows_routing_module__WEBPACK_IMPORTED_MODULE_3__["SowsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _sows_list_component__WEBPACK_IMPORTED_MODULE_5__["SowsListComponent"],
                _sow_edit_component__WEBPACK_IMPORTED_MODULE_6__["SowEditComponent"],
                _sow_details_component__WEBPACK_IMPORTED_MODULE_7__["SowDetailsComponent"]
            ],
            providers: [
                _sows_service__WEBPACK_IMPORTED_MODULE_4__["SowsService"]
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