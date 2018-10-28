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
/* harmony import */ var _exports_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exports/routes */ "./src/app/exports/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_exports_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"app-container\">\n\t<h1>Food Truck Finder</h1>\n\t<div id=\"create-account\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-container {\n  max-width: 1000px;\n  margin: auto;\n  padding: 30px; }\n\nh1 {\n  text-align: center;\n  margin: 30px 0 30px 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'food-truck';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _exports_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exports/components.module */ "./src/app/exports/components.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_events_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/events-resolver.service */ "./src/app/services/events-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _exports_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCsVXEjmNBqq8gKxIJeu4Aqno25tEmuIAU',
                    libraries: ["places"],
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_services_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"], _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"], _services_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"], _services_events_resolver_service__WEBPACK_IMPORTED_MODULE_10__["EventsResolverService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/exports/components.module.ts":
/*!**********************************************!*\
  !*** ./src/app/exports/components.module.ts ***!
  \**********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/create-account/create-account.component */ "./src/app/pages/create-account/create-account.component.ts");
/* harmony import */ var _pages_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/create-event/create-event.component */ "./src/app/pages/create-event/create-event.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/events/events.component */ "./src/app/pages/events/events.component.ts");
/* harmony import */ var _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/event-details/event-details.component */ "./src/app/pages/event-details/event-details.component.ts");
/* harmony import */ var _filters_eventsFilterPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../filters/eventsFilterPipe */ "./src/app/filters/eventsFilterPipe.ts");
/* harmony import */ var _pages_vendor_details_vendor_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/vendor-details/vendor-details.component */ "./src/app/pages/vendor-details/vendor-details.component.ts");
/* harmony import */ var _pages_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/reviews/reviews.component */ "./src/app/pages/reviews/reviews.component.ts");
/* harmony import */ var _pages_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/vendor/vendor.component */ "./src/app/pages/vendor/vendor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var Components = [
    _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_4__["CreateAccountComponent"],
    _pages_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"],
    _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
    _pages_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
    _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailsComponent"],
    _filters_eventsFilterPipe__WEBPACK_IMPORTED_MODULE_10__["EventsFilterPipe"],
    _pages_vendor_details_vendor_details_component__WEBPACK_IMPORTED_MODULE_11__["VendorDetailsComponent"],
    _pages_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"],
    _pages_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_13__["VendorComponent"]
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [Components],
            exports: [Components, _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/exports/routes.ts":
/*!***********************************!*\
  !*** ./src/app/exports/routes.ts ***!
  \***********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/create-account/create-account.component */ "./src/app/pages/create-account/create-account.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/create-event/create-event.component */ "./src/app/pages/create-event/create-event.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/events/events.component */ "./src/app/pages/events/events.component.ts");
/* harmony import */ var _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/event-details/event-details.component */ "./src/app/pages/event-details/event-details.component.ts");
/* harmony import */ var _services_events_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/events-resolver.service */ "./src/app/services/events-resolver.service.ts");
/* harmony import */ var _pages_vendor_details_vendor_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/vendor-details/vendor-details.component */ "./src/app/pages/vendor-details/vendor-details.component.ts");








var ROUTES = [
    { path: 'createAccount', component: _pages_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_0__["CreateAccountComponent"] },
    { path: 'editProfile', component: _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__["EditProfileComponent"] },
    { path: 'createEvent', component: _pages_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_2__["CreateEventComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'events', runGuardsAndResolvers: "always",
        component: _pages_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"], resolve: {
            events: _services_events_resolver_service__WEBPACK_IMPORTED_MODULE_6__["EventsResolverService"]
        } },
    { path: 'event/:id', component: _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"] },
    { path: 'vendor/:username', component: _pages_vendor_details_vendor_details_component__WEBPACK_IMPORTED_MODULE_7__["VendorDetailsComponent"] }
];


/***/ }),

/***/ "./src/app/filters/eventsFilterPipe.ts":
/*!*********************************************!*\
  !*** ./src/app/filters/eventsFilterPipe.ts ***!
  \*********************************************/
/*! exports provided: EventsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsFilterPipe", function() { return EventsFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsFilterPipe = /** @class */ (function () {
    function EventsFilterPipe() {
    }
    EventsFilterPipe.prototype.transform = function (events, location, startDate) {
        if (location == "" || location == undefined) {
            return events;
        }
        return events.filter(function (event) { return event.address.includes(location); });
    };
    EventsFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'eventsFilter',
            pure: false
        })
    ], EventsFilterPipe);
    return EventsFilterPipe;
}());



/***/ }),

/***/ "./src/app/models/account.ts":
/*!***********************************!*\
  !*** ./src/app/models/account.ts ***!
  \***********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(username, password) {
        this.username = username;
        this.password = password;
    }
    return Account;
}());



/***/ }),

/***/ "./src/app/models/event.ts":
/*!*********************************!*\
  !*** ./src/app/models/event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(id, vendorUsername, start, end, address, saleDescription, vendor) {
        this.id = id;
        this.vendorUsername = vendorUsername;
        this.start = start;
        this.end = end;
        this.address = address;
        this.saleDescription = saleDescription;
        this.vendor = vendor;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/models/vendor.ts":
/*!**********************************!*\
  !*** ./src/app/models/vendor.ts ***!
  \**********************************/
/*! exports provided: Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
var Vendor = /** @class */ (function () {
    function Vendor(username, name, foodType, description, menu) {
        this.username = username;
        this.name = name;
        this.foodType = foodType;
        this.description = description;
        this.menu = menu;
    }
    return Vendor;
}());



/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create account</h2>\n<form [formGroup]=\"newAccountForm\" (ngSubmit)=\"onSubmit()\">\n\t<div >\n\t\t<label for=\"username\">Username</label>\n\t\t<div *ngIf=\"displayError\" class=\"alert alert-danger\">\n\t\t\tUsername already taken, please choose a different username\n\t\t</div>\n\t\t<input type=\"text\" class=\"form-control\" id=\"username\" required formControlName=\"username\" name=\"username\">\n\t\t<div *ngIf=\"username.invalid && username.dirty\" class=\"alert alert-danger\">\n\t\t\tUsername is required\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"password\">Password</label>\n\t\t<input type=\"password\" class=\"form-control\" id=\"password\" required formControlName=\"password\" name=\"password\">\n\t\t<div *ngIf=\"password.invalid && password.dirty\" class=\"alert alert-danger\">\n\t\t\tPassword is required\n\t\t</div>\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"newAccountForm.invalid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n"

/***/ }),

/***/ "./src/app/pages/create-account/create-account.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/create-account/create-account.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/account */ "./src/app/models/account.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(router, accountService, fb) {
        this.router = router;
        this.accountService = accountService;
        this.fb = fb;
        this.model = new _models_account__WEBPACK_IMPORTED_MODULE_2__["Account"]('', '');
        this.displayError = false;
    }
    Object.defineProperty(CreateAccountComponent.prototype, "username", {
        get: function () {
            return this.newAccountForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponent.prototype, "password", {
        get: function () {
            return this.newAccountForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.newAccountForm = this.fb.group(this.model);
        this.newAccountForm.get('username').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.newAccountForm.get('password').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    };
    CreateAccountComponent.prototype.onSubmit = function () {
        var _this = this;
        this.displayError = false;
        this.accountService.createAccount(JSON.stringify(this.newAccountForm.value)).subscribe(function (account) {
            _this.router.navigate(['/login']);
        }, function (error) { return _this.displayError = true; });
    };
    CreateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/pages/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.scss */ "./src/app/pages/create-account/create-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-event/create-event.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/create-event/create-event.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enter The Event Details</h2><br>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"eventForm\">\n    <div class=\"form-group\">\n        <label for=\"truck-description\">Vendor Description</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"vendorDescription\" placeholder=\"Describe your business...\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"truck-description\">Event Description</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"eventDescription\" placeholder=\"Describe your event...\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"fdate\">Start Time</label>\n        <input type=\"date\" id=\"from\" class=\"form-control\" size=\"20\" formControlName=\"startDate\"/>\n        <input type=\"time\" id=\"appt-time\" class=\"form-control\" formControlName=\"startTime\" value=\"00:00\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"tdate\">End Time</label>\n        <input type=\"date\" id=\"to\" class=\"form-control\" formControlName=\"endDate\" size=\"20\" />\n        <input type=\"time\" id=\"appt-time\" class=\"form-control\" formControlName=\"endTime\" value=\"00:00\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"lodcation\">Location</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Where is your sale happening?\" formControlName=\"location\" autocorrect=\"off\">\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"submit\" name=\"submit\" value=\"Submit\" class=\"btn btn-primary nav-button\" id=\"submit-id\" />\n        <input type=\"reset\" name=\"reset\" value=\"Reset\" class=\"btn btn-secondary\" id=\"button-id\" />\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/create-event/create-event.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/create-event/create-event.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  width: 100%; }\n\n.form-group {\n  margin-bottom: 30px; }\n\n.nav-button {\n  margin-right: 30px; }\n"

/***/ }),

/***/ "./src/app/pages/create-event/create-event.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-event/create-event.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/event */ "./src/app/models/event.ts");
/* harmony import */ var _models_vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/vendor */ "./src/app/models/vendor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, formBuilder, eventService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.eventService = eventService;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        this.eventForm = this.formBuilder.group({
            vendorDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            eventDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    };
    CreateEventComponent.prototype.onSubmit = function () {
        // TODO: Dynamically pull Vendor, utilize time fields
        var _this = this;
        var id = this.eventService.events.length;
        var vendor = new _models_vendor__WEBPACK_IMPORTED_MODULE_4__["Vendor"]('username', 'name', 'foodType', 'description', 'menu');
        var event = new _models_event__WEBPACK_IMPORTED_MODULE_3__["Event"](id, this.eventForm.value.vendorDescription, this.eventForm.value.startDate, this.eventForm.value.endDate, this.eventForm.value.location, this.eventForm.value.eventDescription, vendor);
        this.eventService.createEvent(event).then(function () {
            _this.router.navigate(['/events']);
        });
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/pages/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/pages/create-event/create-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Setup Vendor Profile</h2>\n<form>\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">Name of food truck</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"name\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"category\">Select type of food</label>\n\t\t<select class=\"form-control\" id=\"category\" required>\n\t\t\t<option [value]=\"undefined\" selected>Select one</option>\n\t\t\t<option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"menu\">Upload a menu</label>\n\t\t<input type=\"file\" class=\"form-control\" id=\"menu\" (change)=\"onMenuUpload($event)\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"menu\">Upload pictures</label>\n\t\t<input type=\"file\" class=\"form-control\" id=\"picture\" (change)=\"onImageUpload($event)\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/vendor */ "./src/app/models/vendor.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(formBuilder, eventService) {
        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.submitted = false;
        this.categories = ['Italian', 'American', 'Mexican'];
        this.model = new _models_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"](null, null, null, null, null);
    }
    EditProfileComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    EditProfileComponent.prototype.onMenuUpload = function (event) {
        this.menu = event.target.files[0].toString();
    };
    EditProfileComponent.prototype.onImageUpload = function (event) {
        this.images = event.target.files[0];
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/pages/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/event-details/event-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <a [routerLink]=\"['/events']\">Back to All Events</a>\n</p>\n<p>\n    <a [routerLink]=\"['/vendor/' + event?.vendorUsername]\">Vendor details</a>\n</p>\n<app-vendor *ngIf=\"event\" [vendorUsername]=\"event?.vendorUsername\"></app-vendor>\n<div *ngIf=\"event\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"well\">\n                <h4>Sale Information</h4>\n                <p><span class=\"font-weight-bold\">Description: </span> {{event?.saleDescription}}</p>\n                <p><span class=\"font-weight-bold\">Starts: </span> {{event?.start | date : 'medium'}}</p>\n                <p><span class=\"font-weight-bold\">Ends: </span>{{event?.end | date : 'medium'}}</p>\n                <p><span class=\"font-weight-bold\">Location: </span>{{event?.address}}</p>\n                <img alt=\"image\" src='{{event?.vendor?.menu}}' />\n            </div>\n        </div>\n    </div>\n</div>\n<app-reviews *ngIf=\"event\" [vendorUsername]=\"event?.vendorUsername\"></app-reviews>"

/***/ }),

/***/ "./src/app/pages/event-details/event-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 200px;\n  width: 50%; }\n\n.padding-bottom {\n  padding-bottom: 15px; }\n\n.padding-top {\n  padding-bottom: 15px; }\n\n/* Customize the label (the container) */\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 12px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.container input {\n  position: absolute;\n  opacity: 0; }\n\n/* Create a custom radio button */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  background-color: #eee;\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the radio button is checked, add a blue background */\n\n.container input:checked ~ .checkmark {\n  background-color: #2196F3; }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.container input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.container .checkmark:after {\n  top: 4px;\n  left: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: white; }\n"

/***/ }),

/***/ "./src/app/pages/event-details/event-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, route, fb) {
        this.eventService = eventService;
        this.route = route;
        this.fb = fb;
    }
    ;
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe(function (event) {
            _this.event = event;
        });
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/pages/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.scss */ "./src/app/pages/event-details/event-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/events/events.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/events/events.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button class=\"btn btn-primary nav-button\" [routerLink]=\"['/createEvent']\">Create new event</button>\n</div>\n<div>\n   <p><span class=\"font-weight-bold\">Filter by location  </span>  <input [(ngModel)]=\"locationFilter\"></p>\n\n</div>\n<div class=\"row\" *ngFor=\"let event of events | eventsFilter : locationFilter\" [routerLink]=\"['/event', event.id]\">\n    <div class=\"col-md-12\">\n        <div class=\"well clickable\">\n            <h4>{{event?.vendor?.name}}</h4>\n            Category: <p>{{event?.vendor?.foodType}}</p>\n            Starts: <p>{{event.start | date : 'medium'}}</p>\n            Location: <p>{{event.address}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/events/events.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/events/events.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0 0 30px 15px; }\n\n.clickable {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/events/events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/events/events.component.ts ***!
  \**************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = /** @class */ (function () {
    function EventsComponent(route) {
        this.route = route;
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/pages/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/pages/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div [hidden]=\"!displayError\" class=\"alert alert-danger\">\n        Login failed, please try again.\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"credentials.username\" name=\"username\"\n            #username=\"ngModel\">\n        <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n            Username is required\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"credentials.password\" name=\"password\"\n            #password=\"ngModel\">\n        <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n            Password is required\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <a [routerLink]=\"['/createAccount']\">If you do not have an account, click here to create one</a>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
        this.CUSTOMER = 'customer';
        this.VENDOR = 'vendor';
        this.types = [this.CUSTOMER, this.VENDOR];
        this.credentials = {
            username: '',
            password: ''
        };
        this.submitted = false;
        this.displayError = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.displayError = false;
        this.authenticated = this.accountService.authenticate(this.credentials.username, this.credentials.password).valueOf;
        if (this.authenticated) {
            this.submitted = true;
            this.router.navigate(['/events']);
        }
        else {
            this.displayError = true;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/reviews/reviews.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/reviews/reviews.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" *ngIf=\"vendorUsername && loggedInUser && eventReviewForm\" [formGroup]=\"eventReviewForm\">\n  <h4>Review Vendor <span class=\"glyphicon glyphicon-thumbs-up\"></span></h4>\n  <div class=\"form-group\">\n      <label *ngFor=\"let rating of ratings\" class=\"container \">\n          <input type=\"radio\" id=\"event-rating\" formControlName=\"rating\" [value]=\"rating.rating\">\n          <span class=\"checkmark\"></span>{{rating.rating}} {{rating.text}}\n      </label>\n  </div>\n  <div class=\"form-group padding-top \">\n      <label for=\"event-review\">Leave a comment</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"comment\" placeholder=\"Review this event\" value=\"comment\"\n          maxlength=\"140\">\n  </div>\n  <div class=\"form-group\">\n      <input type=\"submit\" name=\"submit\" value=\"Submit\" class=\"btn btn-primary nav-button\" id=\"submit-id\" [disabled]=\"!eventReviewForm.valid\" />\n  </div>\n</form>\n<div class=\"table-responsive\">\n  <h2>Reviews</h2>\n  <table class=\"table table-striped table-condensed\">\n      <thead>\n          <tr>\n              <th class=\"col-md-2\">Rating</th>\n              <th>Comment</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let review of reviews\">\n              <td>{{review.rating}}</td>\n              <td>{{review.comment}}</td>\n          </tr>\n      </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/reviews/reviews.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/reviews/reviews.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/reviews/reviews.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reviews/reviews.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(eventService, fb, route) {
        this.eventService = eventService;
        this.fb = fb;
        this.route = route;
        this.ratings = [
            { rating: 5, text: ' - Excellent' },
            { rating: 4, text: '' },
            { rating: 3, text: '' },
            { rating: 2, text: '' },
            { rating: 1, text: ' - Terrible' }
        ];
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = sessionStorage.getItem("username");
        this.eventService.getReviews(this.vendorUsername).subscribe(function (reviews) {
            _this.reviews = reviews;
            _this.eventReviewForm = _this.buildFormGroup();
        });
    };
    ReviewsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.eventReviewForm.value);
        if (this.eventReviewForm.valid) {
            this.eventService.createReview(JSON.stringify(this.eventReviewForm.value)).subscribe(function (review) {
                _this.reviews.push(_this.eventReviewForm.value);
                console.log(review);
                _this.eventReviewForm.reset();
            });
        }
    };
    ReviewsComponent.prototype.buildFormGroup = function () {
        return this.fb.group({
            loggedInUser: [this.loggedInUser],
            vendorUsername: [this.vendorUsername],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(140)],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            inputs: ['vendorUsername'],
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/pages/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.scss */ "./src/app/pages/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor-details/vendor-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/vendor-details/vendor-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-vendor *ngIf=\"vendorUsername\" [vendorUsername]=\"vendorUsername\"></app-vendor>\n<app-reviews *ngIf=\"vendorUsername\" [vendorUsername]=\"vendorUsername\"></app-reviews>"

/***/ }),

/***/ "./src/app/pages/vendor-details/vendor-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/vendor-details/vendor-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/vendor-details/vendor-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/vendor-details/vendor-details.component.ts ***!
  \******************************************************************/
/*! exports provided: VendorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorDetailsComponent", function() { return VendorDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VendorDetailsComponent = /** @class */ (function () {
    function VendorDetailsComponent(eventService, accountService, route, fb) {
        this.eventService = eventService;
        this.accountService = accountService;
        this.route = route;
        this.fb = fb;
    }
    ;
    VendorDetailsComponent.prototype.ngOnInit = function () {
        this.loggedInUser = sessionStorage.getItem("username");
        this.vendorUsername = this.route.snapshot.params['username'];
    };
    VendorDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-details',
            template: __webpack_require__(/*! ./vendor-details.component.html */ "./src/app/pages/vendor-details/vendor-details.component.html"),
            styles: [__webpack_require__(/*! ./vendor-details.component.scss */ "./src/app/pages/vendor-details/vendor-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], VendorDetailsComponent);
    return VendorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/vendor.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/vendor/vendor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"well\">\n              <h1>{{vendor?.name}}\n                  <h5><span class=\"glyphicon glyphicon-star-empty\"></span>Rating: {{avgRating | number:'1.0-2' }}</h5>\n              </h1>\n              <p>Category: {{vendor?.foodType}}</p>\n              <p>Description: {{vendor?.description}}</p>\n              <p>Menu: {{vendor?.menu}}</p>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/vendor/vendor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/vendor/vendor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/vendor/vendor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/vendor/vendor.component.ts ***!
  \**************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VendorComponent = /** @class */ (function () {
    function VendorComponent(eventService, accountService, route, fb) {
        this.eventService = eventService;
        this.accountService = accountService;
        this.route = route;
        this.fb = fb;
        this.pageReady = false;
        this.avgRating = 0;
    }
    ;
    VendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = sessionStorage.getItem("username");
        var vendorObservable = this.accountService.getVendorDetails(this.vendorUsername);
        var reviewsObservable = this.eventService.getReviews(this.vendorUsername);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(vendorObservable, reviewsObservable).subscribe(function (_a) {
            var vendor = _a[0], reviews = _a[1];
            _this.reviews = reviews;
            _this.vendor = vendor;
            reviews.forEach(function (review) {
                _this.avgRating += review.rating;
            });
            _this.avgRating = _this.avgRating / _this.reviews.length;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VendorComponent.prototype, "vendorUsername", void 0);
    VendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/pages/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.scss */ "./src/app/pages/vendor/vendor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ "./src/app/services/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(restService) {
        this.restService = restService;
        this._accounts = {};
        this._authenticated = false;
    }
    AccountService.prototype.createAccount = function (payload) {
        return this.restService.post('/api/createAccount/', payload);
    };
    AccountService.prototype.getAccount = function (username) {
        return this.restService.get('/api/getAccount/' + username);
    };
    AccountService.prototype.getVendorDetails = function (username) {
        return this.restService.get('/api/getVendor/' + username);
    };
    AccountService.prototype.authenticate = function (username, password) {
        var _this = this;
        this.getAccount(username).subscribe(function (account) {
            if (account) {
                _this._authenticated = (password === account.password);
                sessionStorage.setItem("username", username);
            }
        });
        return this._authenticated;
    };
    AccountService.prototype.reset = function () {
        this._accounts = {};
    };
    Object.defineProperty(AccountService.prototype, "authenticated", {
        get: function () {
            return this._authenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "accounts", {
        get: function () {
            return this._accounts;
        },
        enumerable: true,
        configurable: true
    });
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = /** @class */ (function () {
    function EventService(restService) {
        this.restService = restService;
        this.events = [];
        this.sampleEvents = [
            { username: "user1", name: "Italian Junky", foodType: "Italian", description: "Fun and loud with delicious food", menu: "/src/app/images/Italian.png" },
            { username: "user2", name: "Mexican Jiggler", foodType: "Mexican", description: "Zesty and authentic", menu: "/src/app/images/Mexican.jpg" },
        ];
        // TODO: Perhaps initialize events
    }
    EventService.prototype.createEvent = function (event) {
        var _this = this;
        // TODO: Decomposing event to send without Vendor, fix
        var payload = {
            id: event.id,
            vendorUsername: event.vendorUsername,
            saleDescription: event.saleDescription,
            start: event.start,
            end: event.end,
            address: event.address
        };
        return new Promise(function (resolve, reject) {
            _this.postEvent(JSON.stringify(payload)).subscribe(function (response) {
                if (response) {
                    _this.events.push(event);
                    resolve();
                }
            });
        });
    };
    EventService.prototype.createReview = function (payload) {
        return this.restService.post('/api/createReview/', payload);
    };
    EventService.prototype.getEvent = function (id) {
        return this.restService.get("/api/getEvent/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEvent')));
    };
    EventService.prototype.getReviews = function (vendorUsername) {
        return this.restService.get("/api/getReviews/" + vendorUsername)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getReviews')));
    };
    EventService.prototype.getEvents = function () {
        return this.restService.get('/api/getEvents')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEvents', [])));
    };
    EventService.prototype.postEvent = function (payload) {
        return this.restService.post('/api/createEvent/', payload);
    };
    EventService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/events-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/events-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: EventsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsResolverService", function() { return EventsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//get vendor data
var EventsResolverService = /** @class */ (function () {
    function EventsResolverService(eventService) {
        this.eventService = eventService;
    }
    EventsResolverService.prototype.resolve = function () {
        return this.eventService.getEvents();
    };
    EventsResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventsResolverService);
    return EventsResolverService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    RestService.prototype.post = function (url, body) {
        return this.http.post(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post', [])));
    };
    RestService.prototype.get = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
    };
    RestService.prototype.promiseGet = function (url, subject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(url).subscribe(function (response) {
                if (response > 300) {
                    subject.next(__assign({}, response.body));
                    resolve(response);
                }
                else {
                    reject();
                }
            });
        });
    };
    RestService.prototype.promisePost = function (url, subject, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.post(url, payload).subscribe(function (response) {
                if (response > 300) {
                    subject.next(__assign({}, response.body));
                    resolve(response);
                }
                else {
                    reject();
                }
            });
        });
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RestService);
    return RestService;
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

module.exports = __webpack_require__(/*! /Users/justin.dilks/Documents/GitHub/sweng894_ng/food-truck/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map