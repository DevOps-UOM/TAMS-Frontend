(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+EhV":
/*!***********************************************************!*\
  !*** ./src/app/shared/nav-tables/nav-tables.component.ts ***!
  \***********************************************************/
/*! exports provided: NavTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTablesComponent", function() { return NavTablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavTablesComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavTablesComponent.ɵfac = function NavTablesComponent_Factory(t) { return new (t || NavTablesComponent)(); };
NavTablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavTablesComponent, selectors: [["app-nav-tables"]], decls: 8, vars: 0, consts: [[1, "nav", "form-search", "form-inline"], ["routerLink", "ca-agents", 1, "nav-link", "btn-outline-secondary"], ["routerLink", "ta-agents", "routerLinkActive", "is-active", 1, "nav-link", "btn-outline-secondary"]], template: function NavTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Call Centre Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Travelling Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtdGFibGVzL25hdi10YWJsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavTablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-tables',
                templateUrl: './nav-tables.component.html',
                styleUrls: ['./nav-tables.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+WtJ":
/*!*************************************************!*\
  !*** ./src/app/shared/auth/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthInterceptor {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    this.router.navigateByUrl('/login');
                }
            }));
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Johan\Campus\Software Project\Travelling Agent Management System\TAMSFrontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1lyD":
/*!*********************************************************!*\
  !*** ./src/app/services/user/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class AuthenticationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1y+R":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    showSidebar(isShowSidebar) {
        //console.log(isShowSidebar);
        this.messageSource.next(isShowSidebar);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5wG6":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "w0r3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");







class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]], exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
                ],
                exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8B9z":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavBarComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetails.first_name);
} }
class NavBarComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        // @Input() burger:boolean;
        this.burgerBooleanEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.burgerBoolean = false;
    }
    ngOnInit() {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            this.userDetails = JSON.parse(userDetails);
        }
        else {
            this.userService.observableUser.subscribe({
                next: (data) => {
                    this.userDetails = data;
                },
                error: (err) => console.log(err)
            });
        }
    }
    callScreen(screenName) {
        console.log("called here" + screenName);
        switch (screenName) {
            case 'Itinerary Map':
                this.router.navigate(['/boards/itinerary-map']);
                break;
            case 'Leaves':
                this.router.navigate(['/boards/leave']);
                break;
            case 'Itinerary Task':
                this.router.navigate(['/boards/itinerary-task']);
                break;
            default:
                this.router.navigate(['/boards/home']);
                break;
        }
    }
    userMenu() {
        document.getElementById("userMenuDropdown").classList.toggle("show");
    }
    onDocumentClick(event) {
        if (!(event.target == document.getElementById("user-det"))) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    BurgerClick() {
        this.burgerBoolean = !this.burgerBoolean;
        this.burgerBooleanEmitter.emit(this.burgerBoolean);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { burgerBooleanEmitter: "burgerBooleanEmitter" }, decls: 20, vars: 2, consts: [["fxLayoutAlign", "space-between center", 1, "flex-container", "shadow-sm", "p-3", "m-0"], [1, "burger_btn_area"], [1, "burger_btn", 3, "click"], [1, "user"], [1, "flex-container", "row-reverse"], ["id", "user-det", 1, "user-btn", 3, "click"], [1, "user-name-div"], ["class", "title", 4, "ngIf"], ["id", "userMenuDropdown", 1, "dropdown-content"], [1, "agent-type"], ["href", "#home"], ["href", "#about"], ["href", "#contact"], [1, "title"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_2_listener() { return ctx.BurgerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_6_listener() { return ctx.userMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_p_8_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetails);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #298E69;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.user-btn[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    width: 60px;\r\n    vertical-align: middle;\r\n    margin-left: 25px;\r\n    background-image: url('ic_user.png');\r\n    background-size: 120%;\r\n    background-position-y: center;\r\n    background-position-x: center;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n}\r\n\r\n.user-btn[_ngcontent-%COMP%]:hover, .user-btn[_ngcontent-%COMP%]:focus {\r\n    border: 5px solid rgba(73, 73, 73, 0.808);\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #2980B9;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    right: 20px;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.agent-type[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    color: black;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(108, 67, 255, 0.664)\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    -ms-box-orient: horizontal;\r\n    display: -moz-flex;\r\n    display: flex;\r\n}\r\n\r\n.row-reverse[_ngcontent-%COMP%] {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.user-name-div[_ngcontent-%COMP%] {\r\n    margin-top: 14px;\r\n}\r\n\r\n.burger_btn[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    width: 35px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 80%;\r\n    background-image: url('ic_burger_button.png');\r\n    border-radius: 5px;\r\n}\r\n\r\n.burger_btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(155, 155, 155, 0.568);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQ0FBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUEsT0FBTzs7QUFFUDtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUkxQixrQkFBa0I7SUFFbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsNkNBQW9FO0lBQ3BFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufSAqL1xyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzI5OEU2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVzZXItYnRuIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY191c2VyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWJ0bjpob3ZlcixcclxuLnVzZXItYnRuOmZvY3VzIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoNzMsIDczLCA3MywgMC44MDgpO1xyXG59XHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hZ2VudC10eXBlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDY3LCAyNTUsIDAuNjY0KVxyXG59XHJcblxyXG4udXNlciB7fVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm93LXJldmVyc2Uge1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUtZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5idXJnZXJfYnRuIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY19idXJnZXJfYnV0dG9uLnBuZ1wiKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1cmdlcl9idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjU2OCk7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.3, transform: 'translateY(-50px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0px)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        //state(),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.3, transform: 'translateY(-50px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0px)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { burgerBooleanEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "9AuV":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/ta-only-detail-form/ta-only-detail-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaOnlyDetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaOnlyDetailFormComponent", function() { return TaOnlyDetailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form-controll.service */ "9RAe");





class TaOnlyDetailFormComponent {
    constructor(formControllService) {
        this.formControllService = formControllService;
        this.formIsValid = false;
        this.recordSent = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    OnSubmit() {
        if (this.form.valid) {
            this.formIsValid = false;
            this.recordSent = true;
            const totalMark = this.form.value.role;
            this.form.patchValue({ role: totalMark });
            const formData = {
                userid: this.form.value.userid,
                email: this.form.value.email,
                first_name: this.form.value.first_name,
                last_name: this.form.value.last_name,
                mobile_number: this.form.value.mobile_number,
                city: this.form.value.city,
                district: this.form.value.district,
                province: this.form.value.province,
                bio: this.form.value.bio,
                role: this.form.value.role,
                password: this.form.value.password,
            };
            this.formControllService.uploadDetails(formData);
            this.form.reset();
        }
        else {
            this.formIsValid = true;
            this.recordSent = false;
            return;
        }
    }
}
TaOnlyDetailFormComponent.ɵfac = function TaOnlyDetailFormComponent_Factory(t) { return new (t || TaOnlyDetailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__["FormControllService"])); };
TaOnlyDetailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaOnlyDetailFormComponent, selectors: [["app-ta-only-detail-form"]], decls: 71, vars: 1, consts: [[1, "form-group"], [3, "formGroup", "ngSubmit"], ["for", "userid"], ["type", "text", "id", "userid", "formControlName", "userid", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "role"], ["name", "type", "id", "role", "formControlName", "role", 1, "form-control"], ["value", "ta", "placeholder", "Travelling Agent", 1, "form-control"], ["for", "first_name"], ["type", "text", "id", "first_name", "formControlName", "first_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", 1, "form-control"], ["for", "mobile_number"], ["type", "text", "id", "mobile_number", "formControlName", "mobile_number", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "formControlName", "city", 1, "form-control"], ["for", "district"], ["type", "text", "id", "district", "formControlName", "district", 1, "form-control"], ["for", "province"], ["type", "text", "id", "province", "formControlName", "province", 1, "form-control"], ["for", "bio"], ["type", "text", "rows", "4", "id", "bio", "formControlName", "bio", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary"]], template: function TaOnlyDetailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaOnlyDetailFormComponent_Template_form_ngSubmit_1_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Agent Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Travelling Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YS1vbmx5LWRldGFpbC1mb3JtL3RhLW9ubHktZGV0YWlsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaOnlyDetailFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ta-only-detail-form',
                templateUrl: './ta-only-detail-form.component.html',
                styleUrls: ['./ta-only-detail-form.component.css']
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__["FormControllService"] }]; }, null); })();


/***/ }),

/***/ "9RAe":
/*!***************************************************!*\
  !*** ./src/app/services/form-controll.service.ts ***!
  \***************************************************/
/*! exports provided: FormControllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControllService", function() { return FormControllService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class FormControllService {
    constructor(http) {
        this.http = http;
        this.updatedgrade = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updatedMaxgrade = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    uploadDetails(form) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/users', form).subscribe((responseData) => {
            console.log(responseData['msg']);
            this.updatedgrade.next(form);
            // if (form.totMark == "Travelling Agent"){
            //   this.updatedMaxgrade.next(form);
            // }
            // http://localhost:3000/marks
        });
    }
}
FormControllService.ɵfac = function FormControllService_Factory(t) { return new (t || FormControllService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FormControllService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormControllService, factory: FormControllService.ɵfac, providedIn: 'any' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControllService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ac7H":
/*!***********************************************************************!*\
  !*** ./src/app/shared/customer-profile/customer-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function() { return CustomerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/customer/customer.service */ "pLNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function CustomerProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "User information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "User ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Assigned Travelling Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contact information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Mobile No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.customer.cust_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.cust_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.name.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.name.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.nic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.default_agent_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.mobile_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.customer.area);
} }
class CustomerProfileComponent {
    constructor(activatedRoute, customerService) {
        this.activatedRoute = activatedRoute;
        this.customerService = customerService;
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            const custId = params['cust_id'];
            this.customerService.findOne(custId).subscribe({
                next: (data) => {
                    this.customer = data.data[0];
                    console.log(this.customer);
                },
                error: (err) => console.log(err),
                complete: () => console.log('Completed')
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"])); };
CustomerProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], decls: 6, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700", "rel", "stylesheet"], ["class", "main-content", 4, "ngIf"], [1, "footer"], [1, "row", "align-items-center", "justify-content-xl-between"], [1, "col-xl-6", "m-auto", "text-center"], [1, "main-content"], [1, "container", "mt-7"], [1, "mb-5"], [1, "row"], [1, "col-xl-8", "m-auto", "order-xl-1"], [1, "card", "bg-secondary", "shadow"], [1, "card-header", "bg-white", "border-0"], [1, "row", "align-items-center"], [1, "col-8"], [1, "mb-0"], [1, "card-body"], [1, "heading-small", "text-muted", "mb-4"], [1, "pl-lg-4"], [1, "col-lg-6"], [1, "form-group", "focused"], ["for", "input-userid", 1, "form-control-label"], ["type", "text", "id", "input-userid", "placeholder", "Username", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], [1, "form-group"], ["for", "input-email", 1, "form-control-label"], ["type", "email", "id", "input-email", "placeholder", "Email", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], ["for", "input-first-name", 1, "form-control-label"], ["type", "text", "id", "input-first-name", "placeholder", "First name", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], ["for", "input-last-name", 1, "form-control-label"], ["type", "text", "id", "input-last-name", "placeholder", "Last name", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], ["for", "input-nic", 1, "form-control-label"], ["type", "text", "id", "input-nic", "placeholder", "NIC", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], ["for", "input-default_agent_id", 1, "form-control-label"], ["type", "text", "id", "input-default_agent_id", "placeholder", "Assigned Travelling Agent", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], [1, "my-4"], [1, "col-md-12"], ["for", "input-address", 1, "form-control-label"], ["id", "input-address", "placeholder", "Mobile Number", "type", "text", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"], [1, "col-lg-4"], ["for", "input-province", 1, "form-control-label"], ["type", "text", "id", "input-area", "placeholder", "Area", "readonly", "", 1, "form-control", "form-control-alternative", 3, "value"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerProfileComponent_div_2_Template, 66, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: ["[_ngcontent-%COMP%]:root {\r\n  --blue: #5e72e4;\r\n  --indigo: #5603ad;\r\n  --purple: #8965e0;\r\n  --pink: #f3a4b5;\r\n  --red: #f5365c;\r\n  --orange: #fb6340;\r\n  --yellow: #ffd600;\r\n  --green: #2dce89;\r\n  --teal: #11cdef;\r\n  --cyan: #2bffc6;\r\n  --white: #fff;\r\n  --gray: #8898aa;\r\n  --gray-dark: #32325d;\r\n  --light: #ced4da;\r\n  --lighter: #e9ecef;\r\n  --primary: #5e72e4;\r\n  --secondary: #f7fafc;\r\n  --success: #2dce89;\r\n  --info: #11cdef;\r\n  --warning: #fb6340;\r\n  --danger: #f5365c;\r\n  --light: #adb5bd;\r\n  --dark: #212529;\r\n  --default: #172b4d;\r\n  --white: #fff;\r\n  --neutral: #fff;\r\n  --darker: black;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: Open Sans, sans-serif;\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\r\n    \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Open Sans, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  text-align: left;\r\n  color: #525f7f;\r\n  background-color: #f8f9fe;\r\n}\r\n\r\n[tabindex=\"-1\"][_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\naddress[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  line-height: inherit;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ndfn[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #5e72e4;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #233dd2;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\r\n    \"Courier New\", monospace;\r\n  font-size: 1em;\r\n}\r\n\r\ncaption[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  caption-side: bottom;\r\n  text-align: left;\r\n  color: #8898aa;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%], input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\ninput[type=\"date\"][_ngcontent-%COMP%], input[type=\"time\"][_ngcontent-%COMP%], input[type=\"datetime-local\"][_ngcontent-%COMP%], input[type=\"month\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  padding: 0;\r\n  white-space: normal;\r\n  color: inherit;\r\n}\r\n\r\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type=\"search\"][_ngcontent-%COMP%] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  margin-bottom: 0.5rem;\r\n  color: #32325d;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\r\n  font-size: 1.0625rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-size: 0.625rem;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-size: 87.5%;\r\n  word-break: break-word;\r\n  color: #f3a4b5;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 720px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%] {\r\n  max-width: 33.33333%;\r\n  flex: 0 0 33.33333%;\r\n}\r\n\r\n.col-8[_ngcontent-%COMP%] {\r\n  max-width: 66.66667%;\r\n  flex: 0 0 66.66667%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md-12[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    flex: 0 0 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-lg-4[_ngcontent-%COMP%] {\r\n    max-width: 33.33333%;\r\n    flex: 0 0 33.33333%;\r\n  }\r\n  .col-lg-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-xl-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n  .col-xl-8[_ngcontent-%COMP%] {\r\n    max-width: 66.66667%;\r\n    flex: 0 0 66.66667%;\r\n  }\r\n  .order-xl-1[_ngcontent-%COMP%] {\r\n    order: 1;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(2.75rem + 2px);\r\n  padding: 0.625rem 0.75rem;\r\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n  color: #8898aa;\r\n  border: 1px solid #cad1d7;\r\n  border-radius: 0.375rem;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  box-shadow: none;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .form-control[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::-ms-expand {\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  color: #8898aa;\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n  outline: 0;\r\n  background-color: #fff;\r\n  box-shadow: none, none;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  opacity: 1;\r\n  color: #adb5bd;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background-color: #e9ecef;\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  display: inline-block;\r\n  padding: 0.625rem 1.25rem;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.65;\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08),\r\n    none;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),\r\n    0 0 0 0 rgba(94, 114, 228, 0.5);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:disabled {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #324cdd;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, 0.5);\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  border-radius: 0.375rem;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  padding: 1.25rem 1.5rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]:first-child {\r\n  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.bg-secondary[_ngcontent-%COMP%] {\r\n  background-color: #f7fafc !important;\r\n}\r\n\r\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\r\n  background-color: #d2e3ee !important;\r\n}\r\n\r\n.bg-default[_ngcontent-%COMP%] {\r\n  background-color: #172b4d !important;\r\n}\r\n\r\na.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus {\r\n  background-color: #0b1526 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.border-0[_ngcontent-%COMP%] {\r\n  border: 0 !important;\r\n}\r\n\r\n.align-items-center[_ngcontent-%COMP%] {\r\n  align-items: center !important;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .justify-content-xl-between[_ngcontent-%COMP%] {\r\n    justify-content: space-between !important;\r\n  }\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.my-4[_ngcontent-%COMP%] {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.mb-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.mt-7[_ngcontent-%COMP%] {\r\n  margin-top: 6rem !important;\r\n}\r\n\r\n.m-auto[_ngcontent-%COMP%] {\r\n  margin: auto !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .pl-lg-4[_ngcontent-%COMP%] {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n}\r\n\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n  color: #8898aa !important;\r\n}\r\n\r\n@media print {\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-shadow: none !important;\r\n    text-shadow: none !important;\r\n  }\r\n  a[_ngcontent-%COMP%]:not(.btn) {\r\n    text-decoration: underline;\r\n  }\r\n  p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    page-break-after: avoid;\r\n  }\r\n  @page {\r\n    size[_ngcontent-%COMP%]:   a3[_ngcontent-%COMP%];\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n@keyframes floating-lg {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(15px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(10px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating-sm {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n[class*=\"shadow\"][_ngcontent-%COMP%] {\r\n  transition: all 0.15s ease;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  position: relative;\r\n  transition: all 0.15s ease;\r\n  letter-spacing: 0.025em;\r\n  text-transform: none;\r\n  will-change: transform;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n[class*=\"btn-outline-\"][_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  padding: 2.5rem 0;\r\n  background: #f7fafc;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.form-control-label[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  font-weight: 600;\r\n  color: #525f7f;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: #adb5bd;\r\n}\r\n\r\ntextarea[resize=\"none\"][_ngcontent-%COMP%] {\r\n  resize: none !important;\r\n}\r\n\r\ntextarea[resize=\"both\"][_ngcontent-%COMP%] {\r\n  resize: both !important;\r\n}\r\n\r\ntextarea[resize=\"vertical\"][_ngcontent-%COMP%] {\r\n  resize: vertical !important;\r\n}\r\n\r\ntextarea[resize=\"horizontal\"][_ngcontent-%COMP%] {\r\n  resize: horizontal !important;\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%] {\r\n  transition: box-shadow 0.15s ease;\r\n  border: 0;\r\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  @keyframes show-navbar-dropdown {\r\n    0% {\r\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\r\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translate(0, 0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes hide-navbar-dropdown {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      transform: translate(0, 10px);\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes show-navbar-collapse {\r\n  0% {\r\n    transform: scale(0.95);\r\n    transform-origin: 100% 0;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes hide-navbar-collapse {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: 100% 0;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    transform: scale(0.95);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  line-height: 1.7;\r\n}\r\n\r\n.heading-small[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  letter-spacing: 0.04em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwrQ0FBK0M7RUFDL0M7K0NBQzZDO0FBQy9DOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBTUE7Ozs7O0VBS0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTs0QkFDMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7OztFQUdFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7OztFQUdFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7OztFQUlFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7RUFNRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7Ozs7Ozs7RUFPRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QiwyREFBMkQ7RUFDM0QsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBWUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFHekIsaUJBQWlCO0VBQ2pCO2dFQUM4RDtFQUM5RCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtRQUNNO0FBQ1I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDRDQUE0QztFQUM1QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztBQUNGOztBQUVBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTs7O0lBR0UsMkJBQTJCO0lBQzNCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7OztJQUdFLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTs7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBOzs7O0VBSUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFVQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFO0lBQ0U7TUFDRSw0REFBNEQ7TUFDNUQsK0RBQStEO01BQy9ELFVBQVU7SUFDWjtJQUNBO01BQ0UsMEJBQTBCO01BQzFCLFVBQVU7SUFDWjtFQUNGO0VBQ0E7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsNkJBQTZCO01BQzdCLFVBQVU7SUFDWjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLXByb2ZpbGUvY3VzdG9tZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tYmx1ZTogIzVlNzJlNDtcclxuICAtLWluZGlnbzogIzU2MDNhZDtcclxuICAtLXB1cnBsZTogIzg5NjVlMDtcclxuICAtLXBpbms6ICNmM2E0YjU7XHJcbiAgLS1yZWQ6ICNmNTM2NWM7XHJcbiAgLS1vcmFuZ2U6ICNmYjYzNDA7XHJcbiAgLS15ZWxsb3c6ICNmZmQ2MDA7XHJcbiAgLS1ncmVlbjogIzJkY2U4OTtcclxuICAtLXRlYWw6ICMxMWNkZWY7XHJcbiAgLS1jeWFuOiAjMmJmZmM2O1xyXG4gIC0td2hpdGU6ICNmZmY7XHJcbiAgLS1ncmF5OiAjODg5OGFhO1xyXG4gIC0tZ3JheS1kYXJrOiAjMzIzMjVkO1xyXG4gIC0tbGlnaHQ6ICNjZWQ0ZGE7XHJcbiAgLS1saWdodGVyOiAjZTllY2VmO1xyXG4gIC0tcHJpbWFyeTogIzVlNzJlNDtcclxuICAtLXNlY29uZGFyeTogI2Y3ZmFmYztcclxuICAtLXN1Y2Nlc3M6ICMyZGNlODk7XHJcbiAgLS1pbmZvOiAjMTFjZGVmO1xyXG4gIC0td2FybmluZzogI2ZiNjM0MDtcclxuICAtLWRhbmdlcjogI2Y1MzY1YztcclxuICAtLWxpZ2h0OiAjYWRiNWJkO1xyXG4gIC0tZGFyazogIzIxMjUyOTtcclxuICAtLWRlZmF1bHQ6ICMxNzJiNGQ7XHJcbiAgLS13aGl0ZTogI2ZmZjtcclxuICAtLW5ldXRyYWw6ICNmZmY7XHJcbiAgLS1kYXJrZXI6IGJsYWNrO1xyXG4gIC0tYnJlYWtwb2ludC14czogMDtcclxuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xyXG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XHJcbiAgLS1icmVha3BvaW50LWxnOiA5OTJweDtcclxuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcclxuICAtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcclxuICAtLWZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbkAtbXMtdmlld3BvcnQge1xyXG4gIHdpZHRoOiBkZXZpY2Utd2lkdGg7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxubWFpbixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjNTI1ZjdmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmU7XHJcbn1cclxuXHJcblt0YWJpbmRleD1cIi0xXCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDYge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmFkZHJlc3Mge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5kZm4ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjMzZGQyO1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlcixcclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsXHJcbiAgICBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuY2FwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzg4OThhYTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xyXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5idXR0b24sXHJcblt0eXBlPVwicmVzZXRcIl0sXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcclxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuW3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDYsXHJcbi5oMixcclxuLmgzLFxyXG4uaDYge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgY29sb3I6ICMzMjMyNWQ7XHJcbn1cclxuXHJcbmgyLFxyXG4uaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuaDMsXHJcbi5oMyB7XHJcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XHJcbn1cclxuXHJcbmg2LFxyXG4uaDYge1xyXG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtc2l6ZTogODcuNSU7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBjb2xvcjogI2YzYTRiNTtcclxufVxyXG5cclxuYSA+IGNvZGUge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb2wtNCxcclxuLmNvbC04LFxyXG4uY29sLW1kLTEyLFxyXG4uY29sLWxnLTQsXHJcbi5jb2wtbGctNixcclxuLmNvbC14bC02LFxyXG4uY29sLXhsLTgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jb2wtNCB7XHJcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgZmxleDogMCAwIDMzLjMzMzMzJTtcclxufVxyXG5cclxuLmNvbC04IHtcclxuICBtYXgtd2lkdGg6IDY2LjY2NjY3JTtcclxuICBmbGV4OiAwIDAgNjYuNjY2NjclO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29sLW1kLTEyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbC1sZy00IHtcclxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcclxuICB9XHJcbiAgLmNvbC1sZy02IHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29sLXhsLTYge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gIH1cclxuICAuY29sLXhsLTgge1xyXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjclO1xyXG4gIH1cclxuICAub3JkZXIteGwtMSB7XHJcbiAgICBvcmRlcjogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygyLjc1cmVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQxZDc7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotbXMtZXhwYW5kIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIDAuMjUpO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiBub25lLCBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCxcclxuLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW07XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLmJ0biB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bjpob3ZlcixcclxuLmJ0bjpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxyXG4gICAgbm9uZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWU3MmU0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTcyZTQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxyXG4gICAgMCAwIDAgMCByZ2JhKDk0LCAxMTQsIDIyOCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWU3MmU0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjRjZGQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUsIDAgMCAwIDAgcmdiYSg5NCwgMTE0LCAyMjgsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FyZCA+IGhyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjM3NXJlbSAtIDFweCkgY2FsYygwLjM3NXJlbSAtIDFweCkgMCAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDFyZW0gMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJnLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmFmYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLXNlY29uZGFyeTpob3ZlcixcclxuYS5iZy1zZWNvbmRhcnk6Zm9jdXMsXHJcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6aG92ZXIsXHJcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmUzZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy1kZWZhdWx0OmhvdmVyLFxyXG5hLmJnLWRlZmF1bHQ6Zm9jdXMsXHJcbmJ1dHRvbi5iZy1kZWZhdWx0OmhvdmVyLFxyXG5idXR0b24uYmctZGVmYXVsdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMTUyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy13aGl0ZTpob3ZlcixcclxuYS5iZy13aGl0ZTpmb2N1cyxcclxuYnV0dG9uLmJnLXdoaXRlOmhvdmVyLFxyXG5idXR0b24uYmctd2hpdGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItMCB7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIDAgcmdiYSgxMzYsIDE1MiwgMTcwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktNCB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi00LFxyXG4ubXktNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi01IHtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC03IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWF1dG8ge1xyXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAucGwtbGctNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzg4OThhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGE6bm90KC5idG4pIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBwLFxyXG4gIGgyLFxyXG4gIGgzIHtcclxuICAgIG9ycGhhbnM6IDM7XHJcbiAgICB3aWRvd3M6IDM7XHJcbiAgfVxyXG4gIGgyLFxyXG4gIGgzIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xyXG4gIH1cclxuICBAcGFnZSB7XHJcbiAgICBzaXplOiBhMztcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuZmlnY2FwdGlvbixcclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLXdoaXRlOmhvdmVyLFxyXG5hLmJnLXdoaXRlOmZvY3VzLFxyXG5idXR0b24uYmctd2hpdGU6aG92ZXIsXHJcbmJ1dHRvbi5iZy13aGl0ZTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLWxnIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdGluZy1zbSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbltjbGFzcyo9XCJzaGFkb3dcIl0ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLXNtIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbltjbGFzcyo9XCJidG4tb3V0bGluZS1cIl0ge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xyXG4gIGJhY2tncm91bmQ6ICNmN2ZhZmM7XHJcbn1cclxuXHJcbi5mb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNTI1ZjdmO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG5cclxudGV4dGFyZWFbcmVzaXplPVwibm9uZVwiXSB7XHJcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhW3Jlc2l6ZT1cImJvdGhcIl0ge1xyXG4gIHJlc2l6ZTogYm90aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYVtyZXNpemU9XCJ2ZXJ0aWNhbFwiXSB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYVtyZXNpemU9XCJob3Jpem9udGFsXCJdIHtcclxuICByZXNpemU6IGhvcml6b250YWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1hbHRlcm5hdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg1MCwgNTAsIDkzLCAwLjE1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWFsdGVybmF0aXZlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIDAuMjUpO1xyXG59XHJcblxyXG4uZm9jdXNlZCAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNTAsIDE1MSwgMjExLCAwLjI1KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgQGtleWZyYW1lcyBzaG93LW5hdmJhci1kcm9wZG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcGVyc3BlY3RpdmUoMjAwcHgpIHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWRyb3Bkb3duIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy1uYXZiYXItY29sbGFwc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoaWRlLW5hdmJhci1jb2xsYXBzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4uaGVhZGluZy1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-profile',
                templateUrl: './customer-profile.component.html',
                styleUrls: ['./customer-profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA3NaSDYcEIOfu68KY2WxtiwXESh5KKoLc",
        authDomain: "tams-uom.firebaseapp.com",
        databaseURL: "https://tams-uom.firebaseio.com",
        projectId: "tams-uom",
        storageBucket: "tams-uom.appspot.com",
        messagingSenderId: "168278577046",
        appId: "1:168278577046:web:75dcbe451c322bb67397b7",
        measurementId: "G-2RMZVS81PN"
    },
    googleMapsKeys: 'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0',
    apiBaseUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BJxj":
/*!*************************************************************!*\
  !*** ./src/app/shared/detail-form/detail-form.component.ts ***!
  \*************************************************************/
/*! exports provided: DetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFormComponent", function() { return DetailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form-controll.service */ "9RAe");





class DetailFormComponent {
    constructor(formControllService) {
        this.formControllService = formControllService;
        this.formIsValid = false;
        this.recordSent = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    OnSubmit() {
        if (this.form.valid) {
            this.formIsValid = false;
            this.recordSent = true;
            const totalMark = this.form.value.role;
            this.form.patchValue({ role: totalMark });
            const formData = {
                userid: this.form.value.userid,
                email: this.form.value.email,
                first_name: this.form.value.first_name,
                last_name: this.form.value.last_name,
                mobile_number: this.form.value.mobile_number,
                city: this.form.value.city,
                district: this.form.value.district,
                province: this.form.value.province,
                bio: this.form.value.bio,
                role: this.form.value.role,
                password: this.form.value.password,
            };
            this.formControllService.uploadDetails(formData);
            this.form.reset();
        }
        else {
            this.formIsValid = true;
            this.recordSent = false;
            return;
        }
    }
}
DetailFormComponent.ɵfac = function DetailFormComponent_Factory(t) { return new (t || DetailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__["FormControllService"])); };
DetailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFormComponent, selectors: [["app-detail-form"]], decls: 76, vars: 1, consts: [[1, "form-group"], [3, "formGroup", "ngSubmit"], ["for", "userid"], ["type", "text", "id", "userid", "formControlName", "userid", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "role"], ["name", "type", "id", "role", "formControlName", "role", 1, "form-control"], ["value", "ca", 1, "form-control"], ["value", "ta", 1, "form-control"], ["value", "Admin", 1, "form-control"], ["for", "first_name"], ["type", "text", "id", "first_name", "formControlName", "first_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", 1, "form-control"], ["for", "mobile_number"], ["type", "text", "id", "mobile_number", "formControlName", "mobile_number", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "formControlName", "city", 1, "form-control"], ["for", "district"], ["type", "text", "id", "district", "formControlName", "district", 1, "form-control"], ["for", "province"], ["type", "text", "id", "province", "formControlName", "province", 1, "form-control"], ["for", "bio"], ["rows", "4", "type", "text", "id", "bio", "formControlName", "bio", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary"]], template: function DetailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetailFormComponent_Template_form_ngSubmit_1_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Agent Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Call Centre Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Travelling Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".form[_ngcontent-%COMP%] {\r\n  background-color: beige;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbC1mb3JtL2RldGFpbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlsLWZvcm0vZGV0YWlsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-form',
                templateUrl: './detail-form.component.html',
                styleUrls: ['./detail-form.component.css'],
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_2__["FormControllService"] }]; }, null); })();


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/role.model */ "Zh2F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");







class UserService {
    constructor(http) {
        this.http = http;
        this.selectedUser = {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            role: _models_role_model__WEBPACK_IMPORTED_MODULE_0__["Role"].User,
        };
        this.observableUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    //HttpMethods
    // postUser(user: User){
    //   return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
    // }
    login(authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/api/authenticate', authCredentials, this.noAuthHeader);
    }
    getUserProfile() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/api/userProfile');
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl}/api/users/${id}`);
    }
    //Helper Methods
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }
    isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "CMg+":
/*!*********************************************************!*\
  !*** ./src/app/shared/container/container.component.ts ***!
  \*********************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 6, vars: 0, consts: [[1, "nav", "form-search", "form-inline"], ["routerLink", "ta-agents", "routerLinkActive", "is-active", 1, "nav-link", "btn-outline-secondary"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Travelling Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".forum-container[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ydW0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EP7C":
/*!********************************************!*\
  !*** ./src/app/models/realtimedb.model.ts ***!
  \********************************************/
/*! exports provided: LocationModel, Coordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
class LocationModel {
}
class Coordinates {
}


/***/ }),

/***/ "FDte":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-profile/user-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserProfileComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_table_0_Template_input_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_table_0_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetails.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetails.email);
} }
class UserProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe((res) => {
            this.userDetails = res['user'];
            localStorage.setItem('user', JSON.stringify(res.user));
            this.userService.observableUser.next(res.user);
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        this.userService.deleteToken();
        this.router.navigate(['/boards/login']);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 1, vars: 1, consts: [["class", "table-fill", 4, "ngIf"], [1, "table-fill"], ["colspan", "2", 1, "text-center"], ["type", "button", "value", "Logout", 3, "click"], ["type", "button", "value", "Reset Password", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_table_0_Template, 21, 2, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_ngcontent-%COMP%]:root {\r\n  --blue: #5e72e4;\r\n  --indigo: #5603ad;\r\n  --purple: #8965e0;\r\n  --pink: #f3a4b5;\r\n  --red: #f5365c;\r\n  --orange: #fb6340;\r\n  --yellow: #ffd600;\r\n  --green: #2dce89;\r\n  --teal: #11cdef;\r\n  --cyan: #2bffc6;\r\n  --white: #fff;\r\n  --gray: #8898aa;\r\n  --gray-dark: #32325d;\r\n  --light: #ced4da;\r\n  --lighter: #e9ecef;\r\n  --primary: #5e72e4;\r\n  --secondary: #f7fafc;\r\n  --success: #2dce89;\r\n  --info: #11cdef;\r\n  --warning: #fb6340;\r\n  --danger: #f5365c;\r\n  --light: #adb5bd;\r\n  --dark: #212529;\r\n  --default: #172b4d;\r\n  --white: #fff;\r\n  --neutral: #fff;\r\n  --darker: black;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: Open Sans, sans-serif;\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\r\n    \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Open Sans, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  text-align: left;\r\n  color: #525f7f;\r\n  background-color: #f8f9fe;\r\n}\r\n\r\n[tabindex=\"-1\"][_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\naddress[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  line-height: inherit;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\ndfn[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #5e72e4;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #233dd2;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\r\n    \"Courier New\", monospace;\r\n  font-size: 1em;\r\n}\r\n\r\ncaption[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  caption-side: bottom;\r\n  text-align: left;\r\n  color: #8898aa;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%], input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\ninput[type=\"date\"][_ngcontent-%COMP%], input[type=\"time\"][_ngcontent-%COMP%], input[type=\"datetime-local\"][_ngcontent-%COMP%], input[type=\"month\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  padding: 0;\r\n  white-space: normal;\r\n  color: inherit;\r\n}\r\n\r\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type=\"search\"][_ngcontent-%COMP%] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  margin-bottom: 0.5rem;\r\n  color: #32325d;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\r\n  font-size: 1.0625rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-size: 0.625rem;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-size: 87.5%;\r\n  word-break: break-word;\r\n  color: #f3a4b5;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 720px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%] {\r\n  max-width: 33.33333%;\r\n  flex: 0 0 33.33333%;\r\n}\r\n\r\n.col-8[_ngcontent-%COMP%] {\r\n  max-width: 66.66667%;\r\n  flex: 0 0 66.66667%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md-12[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    flex: 0 0 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-lg-4[_ngcontent-%COMP%] {\r\n    max-width: 33.33333%;\r\n    flex: 0 0 33.33333%;\r\n  }\r\n  .col-lg-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-xl-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n  .col-xl-8[_ngcontent-%COMP%] {\r\n    max-width: 66.66667%;\r\n    flex: 0 0 66.66667%;\r\n  }\r\n  .order-xl-1[_ngcontent-%COMP%] {\r\n    order: 1;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(2.75rem + 2px);\r\n  padding: 0.625rem 0.75rem;\r\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n  color: #8898aa;\r\n  border: 1px solid #cad1d7;\r\n  border-radius: 0.375rem;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  box-shadow: none;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .form-control[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::-ms-expand {\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  color: #8898aa;\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n  outline: 0;\r\n  background-color: #fff;\r\n  box-shadow: none, none;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  opacity: 1;\r\n  color: #adb5bd;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background-color: #e9ecef;\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  display: inline-block;\r\n  padding: 0.625rem 1.25rem;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.65;\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08),\r\n    none;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),\r\n    0 0 0 0 rgba(94, 114, 228, 0.5);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:disabled {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #324cdd;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, 0.5);\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  border-radius: 0.375rem;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  padding: 1.25rem 1.5rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]:first-child {\r\n  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.bg-secondary[_ngcontent-%COMP%] {\r\n  background-color: #f7fafc !important;\r\n}\r\n\r\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\r\n  background-color: #d2e3ee !important;\r\n}\r\n\r\n.bg-default[_ngcontent-%COMP%] {\r\n  background-color: #172b4d !important;\r\n}\r\n\r\na.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus {\r\n  background-color: #0b1526 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.border-0[_ngcontent-%COMP%] {\r\n  border: 0 !important;\r\n}\r\n\r\n.align-items-center[_ngcontent-%COMP%] {\r\n  align-items: center !important;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .justify-content-xl-between[_ngcontent-%COMP%] {\r\n    justify-content: space-between !important;\r\n  }\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.my-4[_ngcontent-%COMP%] {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.mb-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.mt-7[_ngcontent-%COMP%] {\r\n  margin-top: 6rem !important;\r\n}\r\n\r\n.m-auto[_ngcontent-%COMP%] {\r\n  margin: auto !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .pl-lg-4[_ngcontent-%COMP%] {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n}\r\n\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n  color: #8898aa !important;\r\n}\r\n\r\n@media print {\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-shadow: none !important;\r\n    text-shadow: none !important;\r\n  }\r\n  a[_ngcontent-%COMP%]:not(.btn) {\r\n    text-decoration: underline;\r\n  }\r\n  p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    page-break-after: avoid;\r\n  }\r\n  @page {\r\n    size[_ngcontent-%COMP%]:   a3[_ngcontent-%COMP%];\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n@keyframes floating-lg {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(15px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(10px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating-sm {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n[class*=\"shadow\"][_ngcontent-%COMP%] {\r\n  transition: all 0.15s ease;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  position: relative;\r\n  transition: all 0.15s ease;\r\n  letter-spacing: 0.025em;\r\n  text-transform: none;\r\n  will-change: transform;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n[class*=\"btn-outline-\"][_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  padding: 2.5rem 0;\r\n  background: #f7fafc;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.form-control-label[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  font-weight: 600;\r\n  color: #525f7f;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: #adb5bd;\r\n}\r\n\r\ntextarea[resize=\"none\"][_ngcontent-%COMP%] {\r\n  resize: none !important;\r\n}\r\n\r\ntextarea[resize=\"both\"][_ngcontent-%COMP%] {\r\n  resize: both !important;\r\n}\r\n\r\ntextarea[resize=\"vertical\"][_ngcontent-%COMP%] {\r\n  resize: vertical !important;\r\n}\r\n\r\ntextarea[resize=\"horizontal\"][_ngcontent-%COMP%] {\r\n  resize: horizontal !important;\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%] {\r\n  transition: box-shadow 0.15s ease;\r\n  border: 0;\r\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, 0.25);\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  @keyframes show-navbar-dropdown {\r\n    0% {\r\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\r\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translate(0, 0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes hide-navbar-dropdown {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      transform: translate(0, 10px);\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes show-navbar-collapse {\r\n  0% {\r\n    transform: scale(0.95);\r\n    transform-origin: 100% 0;\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes hide-navbar-collapse {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: 100% 0;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    transform: scale(0.95);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  line-height: 1.7;\r\n}\r\n\r\n.heading-small[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  letter-spacing: 0.04em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DOytDQUM2QztBQUMvQzs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQU1BOzs7OztFQUtFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7NEJBQzBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBOzs7RUFHRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSwwQkFBMEI7QUFDNUI7O0FBRUE7Ozs7RUFJRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7O0VBTUUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7O0VBT0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMkRBQTJEO0VBQzNELGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQVlBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIseUJBQXlCO0VBR3pCLGlCQUFpQjtFQUNqQjtnRUFDOEQ7RUFDOUQsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7UUFDTTtBQUNSOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTttQ0FDaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7RUFDNUMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7O0VBSUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7O0VBSUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBOzs7O0VBSUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSx5Q0FBeUM7RUFDM0M7QUFDRjs7QUFFQTtFQUNFLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7OztJQUdFLDJCQUEyQjtJQUMzQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBOzs7SUFHRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7O0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7OztFQUlFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBVUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCx5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFO01BQ0UsNERBQTREO01BQzVELCtEQUErRDtNQUMvRCxVQUFVO0lBQ1o7SUFDQTtNQUNFLDBCQUEwQjtNQUMxQixVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLDZCQUE2QjtNQUM3QixVQUFVO0lBQ1o7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1ibHVlOiAjNWU3MmU0O1xyXG4gIC0taW5kaWdvOiAjNTYwM2FkO1xyXG4gIC0tcHVycGxlOiAjODk2NWUwO1xyXG4gIC0tcGluazogI2YzYTRiNTtcclxuICAtLXJlZDogI2Y1MzY1YztcclxuICAtLW9yYW5nZTogI2ZiNjM0MDtcclxuICAtLXllbGxvdzogI2ZmZDYwMDtcclxuICAtLWdyZWVuOiAjMmRjZTg5O1xyXG4gIC0tdGVhbDogIzExY2RlZjtcclxuICAtLWN5YW46ICMyYmZmYzY7XHJcbiAgLS13aGl0ZTogI2ZmZjtcclxuICAtLWdyYXk6ICM4ODk4YWE7XHJcbiAgLS1ncmF5LWRhcms6ICMzMjMyNWQ7XHJcbiAgLS1saWdodDogI2NlZDRkYTtcclxuICAtLWxpZ2h0ZXI6ICNlOWVjZWY7XHJcbiAgLS1wcmltYXJ5OiAjNWU3MmU0O1xyXG4gIC0tc2Vjb25kYXJ5OiAjZjdmYWZjO1xyXG4gIC0tc3VjY2VzczogIzJkY2U4OTtcclxuICAtLWluZm86ICMxMWNkZWY7XHJcbiAgLS13YXJuaW5nOiAjZmI2MzQwO1xyXG4gIC0tZGFuZ2VyOiAjZjUzNjVjO1xyXG4gIC0tbGlnaHQ6ICNhZGI1YmQ7XHJcbiAgLS1kYXJrOiAjMjEyNTI5O1xyXG4gIC0tZGVmYXVsdDogIzE3MmI0ZDtcclxuICAtLXdoaXRlOiAjZmZmO1xyXG4gIC0tbmV1dHJhbDogI2ZmZjtcclxuICAtLWRhcmtlcjogYmxhY2s7XHJcbiAgLS1icmVha3BvaW50LXhzOiAwO1xyXG4gIC0tYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiAgLS1icmVha3BvaW50LW1kOiA3NjhweDtcclxuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG4gIC0tYnJlYWtwb2ludC14bDogMTIwMHB4O1xyXG4gIC0tZm9udC1mYW1pbHktc2Fucy1zZXJpZjogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xyXG4gIC0tZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXHJcbiAgICBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQC1tcy12aWV3cG9ydCB7XHJcbiAgd2lkdGg6IGRldmljZS13aWR0aDtcclxufVxyXG5cclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5tYWluLFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM1MjVmN2Y7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmZTtcclxufVxyXG5cclxuW3RhYmluZGV4PVwiLTFcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaHIge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuaDIsXHJcbmgzLFxyXG5oNiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuYWRkcmVzcyB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmRmbiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzVlNzJlNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMyMzNkZDI7XHJcbn1cclxuXHJcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyLFxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIixcclxuICAgIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG5jYXB0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XHJcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuW3R5cGU9XCJyZXNldFwiXSxcclxuW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxyXG5pbnB1dFt0eXBlPVwibW9udGhcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDIsXHJcbmgzLFxyXG5oNixcclxuLmgyLFxyXG4uaDMsXHJcbi5oNiB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBjb2xvcjogIzMyMzI1ZDtcclxufVxyXG5cclxuaDIsXHJcbi5oMiB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG5oMyxcclxuLmgzIHtcclxuICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxufVxyXG5cclxuaDYsXHJcbi5oNiB7XHJcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgZm9udC1zaXplOiA4Ny41JTtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGNvbG9yOiAjZjNhNGI1O1xyXG59XHJcblxyXG5hID4gY29kZSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbC00LFxyXG4uY29sLTgsXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbGctNCxcclxuLmNvbC1sZy02LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtOCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbC00IHtcclxuICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcclxuICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xyXG59XHJcblxyXG4uY29sLTgge1xyXG4gIG1heC13aWR0aDogNjYuNjY2NjclO1xyXG4gIGZsZXg6IDAgMCA2Ni42NjY2NyU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb2wtbWQtMTIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuY29sLWxnLTQge1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xyXG4gIH1cclxuICAuY29sLWxnLTYge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb2wteGwtNiB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgfVxyXG4gIC5jb2wteGwtOCB7XHJcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTtcclxuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XHJcbiAgfVxyXG4gIC5vcmRlci14bC0xIHtcclxuICAgIG9yZGVyOiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDIuNzVyZW0gKyAycHgpO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgY29sb3I6ICM4ODk4YWE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhZDFkNztcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Oi1tcy1leHBhbmQge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgY29sb3I6ICM4ODk4YWE7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgMC4yNSk7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUsIG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVkLFxyXG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMS4yNXJlbTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAuYnRuIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuOmhvdmVyLFxyXG4uYnRuOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXHJcbiAgICBub25lO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzVlNzJlNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3MmU0O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCksXHJcbiAgICAwIDAgMCAwIHJnYmEoOTQsIDExNCwgMjI4LCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzVlNzJlNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3MmU0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNGNkZDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSwgMCAwIDAgMCByZ2JhKDk0LCAxMTQsIDIyOCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1zbSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jYXJkID4gaHIge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMzc1cmVtIC0gMXB4KSBjYWxjKDAuMzc1cmVtIC0gMXB4KSAwIDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXJlbSAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYmctc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYWZjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYmctc2Vjb25kYXJ5OmhvdmVyLFxyXG5hLmJnLXNlY29uZGFyeTpmb2N1cyxcclxuYnV0dG9uLmJnLXNlY29uZGFyeTpob3ZlcixcclxuYnV0dG9uLmJnLXNlY29uZGFyeTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTNlZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLWRlZmF1bHQ6aG92ZXIsXHJcbmEuYmctZGVmYXVsdDpmb2N1cyxcclxuYnV0dG9uLmJnLWRlZmF1bHQ6aG92ZXIsXHJcbmJ1dHRvbi5iZy1kZWZhdWx0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxNTI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmJnLXdoaXRlOmhvdmVyLFxyXG5hLmJnLXdoaXRlOmZvY3VzLFxyXG5idXR0b24uYmctd2hpdGU6aG92ZXIsXHJcbmJ1dHRvbi5iZy13aGl0ZTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci0wIHtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMCByZ2JhKDEzNiwgMTUyLCAxNzAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi0wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS00IHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTQsXHJcbi5teS00IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTcge1xyXG4gIG1hcmdpbi10b3A6IDZyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tYXV0byB7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5wbC1sZy00IHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjODg5OGFhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgKixcclxuICAqOjpiZWZvcmUsXHJcbiAgKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgYTpub3QoLmJ0bikge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIHAsXHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgb3JwaGFuczogMztcclxuICAgIHdpZG93czogMztcclxuICB9XHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XHJcbiAgfVxyXG4gIEBwYWdlIHtcclxuICAgIHNpemU6IGEzO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIG1pbi13aWR0aDogOTkycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5maWdjYXB0aW9uLFxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubWFpbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYmctd2hpdGU6aG92ZXIsXHJcbmEuYmctd2hpdGU6Zm9jdXMsXHJcbmJ1dHRvbi5iZy13aGl0ZTpob3ZlcixcclxuYnV0dG9uLmJnLXdoaXRlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXRpbmctbGcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLXNtIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuW2NsYXNzKj1cInNoYWRvd1wiXSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5idG46bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuW2NsYXNzKj1cImJ0bi1vdXRsaW5lLVwiXSB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZmFmYztcclxufVxyXG5cclxuLmZvb3RlciAuY29weXJpZ2h0IHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1MjVmN2Y7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FkYjViZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG50ZXh0YXJlYVtyZXNpemU9XCJub25lXCJdIHtcclxuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWFbcmVzaXplPVwiYm90aFwiXSB7XHJcbiAgcmVzaXplOiBib3RoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhW3Jlc2l6ZT1cInZlcnRpY2FsXCJdIHtcclxuICByZXNpemU6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhW3Jlc2l6ZT1cImhvcml6b250YWxcIl0ge1xyXG4gIHJlc2l6ZTogaG9yaXpvbnRhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWFsdGVybmF0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2U7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtYWx0ZXJuYXRpdmU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmZvY3VzZWQgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgMC4yNSk7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIDAuMjUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBAa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWRyb3Bkb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSBwZXJzcGVjdGl2ZSgyMDBweCkgcm90YXRlWCgtMmRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgaGlkZS1uYXZiYXItZHJvcGRvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93LW5hdmJhci1jb2xsYXBzZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWNvbGxhcHNlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXNtYWxsIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ISAC":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/itinerary.model */ "bT0R");
/* harmony import */ var _models_realtimedb_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/realtimedb.model */ "EP7C");
/* harmony import */ var _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/itinerary/itinerary.service */ "hN0B");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/task-assignment/task-assignment.service */ "QGdk");
/* harmony import */ var _services_geo_geo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/geo/geo.service */ "ep4l");










const _c0 = ["AgmMap"];
const _c1 = ["wrapper"];
const _c2 = ["map"];
const _c3 = ["search"];
class MapComponent {
    constructor(itineraryService, renderer, mapsAPILoader, ngZone, data, taskAssignmentService, geo) {
        this.itineraryService = itineraryService;
        this.renderer = renderer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.data = data;
        this.taskAssignmentService = taskAssignmentService;
        this.geo = geo;
        this.markerList = [];
        this.tempOptimalRoute = [];
        this.minTime = null;
        this.optimalRoute = [];
        this.latitude = 7.928309;
        this.longitude = 80.5;
        this.centerLat = 7.928309;
        this.centerLng = 80.5;
        this.zoom = 8;
        this.changeLat = 7.928309;
        this.changeLng = 80.5;
        this.currentLocaionIcon = '../../../assets/images/ic_ta_location.svg';
        this.customerLocationIcon = '../../../assets/images/ic_customer_location.svg';
        this.widthReduce = 0;
        this.heightReduce = 150;
        this.waypoints = [];
        this.markers = [];
        this.liveMarkers = [];
        this.liveLocation = new _models_realtimedb_model__WEBPACK_IMPORTED_MODULE_3__["LocationModel"]();
        this.userId = "TA003";
        this.userName = "yasitha";
        //this.trackMe();
        this.geo.updateOnDisconnect(this.userId);
    }
    onWindowResize() {
        this.onResize();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        // this.geo.delete(this.userId);
        // console.log("Destroyed")
    }
    ngAfterViewInit() {
        if (this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["modeSignalStatus"].singlePathMode) {
            if (this.isShowSidebar) {
                console.log(this.modeSignal);
                this.widthReduce = 420;
            }
            else {
                this.widthReduce = 175;
            }
        }
        else if (this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["modeSignalStatus"].directionMode) {
            if (this.isShowSidebar) {
                this.widthReduce = 300;
            }
            else {
                this.widthReduce = 5;
            }
        }
        this.renderer.setStyle(this.wrapper.nativeElement, 'width', (window.innerWidth - this.widthReduce) + 'px');
        this.renderer.setStyle(this.wrapper.nativeElement, 'height', (window.innerHeight - this.heightReduce) + 'px');
        // this.agmMap.triggerResize().then(() =>
        //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));
    }
    ngOnChanges() {
    }
    onResize() {
        // resize the container for the google map
        if (this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["modeSignalStatus"].singlePathMode) {
            if (this.isShowSidebar) {
                this.widthReduce = 420;
                console.log(this.modeSignal);
            }
            else {
                this.widthReduce = 175;
            }
        }
        else if (this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["modeSignalStatus"].directionMode) {
            if (this.isShowSidebar) {
                this.widthReduce = 300;
            }
            else {
                this.widthReduce = 5;
            }
        }
        this.renderer.setStyle(this.wrapper.nativeElement, 'width', (window.innerWidth - this.widthReduce) + 'px');
        this.renderer.setStyle(this.wrapper.nativeElement, 'height', (window.innerHeight - this.heightReduce) + 'px');
        // recenters the map to the resized area.
        // this.agmMap.triggerResize().then(() =>
        //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));
    }
    // idle fires after paning or zooming is done. 
    // This is where we want to capture the center of the map.
    // This way if the user resizes, the center is preserved.
    idle() {
        this.centerLat = this.changeLat;
        this.centerLng = this.changeLng;
    }
    // this event fires whenever any event changes the center. Panning, zooming, or resizing.
    centerChange(event) {
        if (event) {
            this.changeLat = event.lat;
            this.changeLng = event.lng;
        }
    }
    ngOnInit() {
        //console.log("marker list"+JSON.stringify(this.markerList));
        //this.trackMe();
        console.log("Called");
        this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar);
        // this.initMap();
        //this.getSingleDirection();
        //this.geo.setLocation("test-1",[80,50]);
        this.trackMe();
        //this.geo.hits.subscribe(hits => this.liveMarkers = hits);
        console.log(this.modeSignal);
        switch (this.modeSignal) {
            case "directionMode":
                this.getDirections();
                break;
            case "markerMode":
                this.getMarkers();
                break;
            case "singlePathMode":
                this.getSingleDirection();
                break;
            case "liveMode":
                this.showTrackingPosition();
                break;
            default: console.log("default Case Triggered");
        }
        // setTimeout(() => {
        //   this.calculateRoute();
        // }, 3000);
        //this.test();
    }
    getSingleDirection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.trackMe();
            yield this.setCurrentLocation(1);
            this.mapsAPILoader.load().then(() => {
                //this.setCurrentLocation();
                this.geoCoder = new google.maps.Geocoder;
            });
            setTimeout(() => {
                this.origin = {
                    lat: this.currentLat,
                    lng: this.currentLng
                };
                this.destination = {
                    lat: this.selectedCustomer.location.coordinates[0],
                    lng: this.selectedCustomer.location.coordinates[1]
                };
                console.log(this.currentLat + " " + this.currentLng);
            }, 2000);
            this.initMap();
        });
    }
    getDirections() {
        var loc;
        var i;
        if (this.markerList && this.markerList[0] && this.markerList[0].location && this.markerList[0].location.coordinates) {
            // this.origin = {
            //   lat: this.currentLat,
            //   lng: this.currentLng
            // };
            this.origin = {
                lat: 6.879277,
                lng: 79.918083
            };
            for (i = 0; i < this.markerList.length - 1; i++) {
                loc = {
                    location: {
                        lat: this.markerList[i].location.coordinates[0],
                        lng: this.markerList[i].location.coordinates[1]
                    },
                    stopover: true
                };
                this.waypoints.push(loc);
            }
            console.log(this.waypoints);
            this.destination = {
                lat: this.markerList[i].location.coordinates[0],
                lng: this.markerList[i].location.coordinates[1]
            };
        }
        this.initMap();
        //console.log(this.origin);
        //console.log(this.destination);
    }
    getMarkers() {
        for (var i = 0; i < this.markerList.length; i++) {
            this.markers.push({
                lat: this.markerList[i].location.coordinates[0],
                lng: this.markerList[i].location.coordinates[1]
            });
        }
        this.displayMarkers();
        //console.log(this.markers);
    }
    // trackMe() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.watchPosition((position) => {
    //       this.currentLng = +position.coords.longitude;
    //       this.currentLat = +position.coords.latitude;
    //     });
    //     console.log(this.currentLat+" "+this.currentLng);
    //   } else {
    //     alert("Geolocation is not supported by this browser.");
    //   }
    // }
    setCurrentLocation(x) {
        return new Promise(resolve => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentLat = position.coords.latitude;
                    this.currentLng = position.coords.longitude;
                    resolve(x);
                    //this.zoom = 8;
                    //this.getAddress(this.currentLat, this.currentLng);
                }, (err) => {
                    console.log("Current Location Error" + err);
                });
            }
            else {
                alert("Geo location is not supported");
            }
        });
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    //this.zoom = 12;
                    this.address = results[0].formatted_address;
                    console.log(this.address);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    initMap() {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: 7.928309, lng: 80.5 },
        });
        directionsRenderer.setMap(map);
        switch (this.modeSignal) {
            case "directionMode":
                this.calculateAndDisplayRoute(directionsService, directionsRenderer);
                break;
            case "singlePathMode":
                this.displaySingleRoute(directionsService, directionsRenderer);
                break;
            // case "liveMode": this.showTrackingPosition();break;
            default: console.log("default Case Triggered");
        }
    }
    displayMarkers() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: 7.928309, lng: 80.5 },
        });
        const infoWindow = new google.maps.InfoWindow();
        for (var i = 0; i < this.markers.length; i++) {
            const mark = new google.maps.Marker({
                position: this.markers[i],
                map,
                title: this.markerList[i].name.first_name + " " + this.markerList[i].name.last_name,
                label: (i + 1 + ""),
                optimized: false
            });
            mark.addListener("click", () => {
                infoWindow.close();
                infoWindow.setContent(mark.getTitle());
                infoWindow.open(mark.getMap(), mark);
            });
        }
    }
    displaySingleRoute(directionsService, directionsRenderer) {
        if (this.origin && this.destination) {
            directionsService.route({
                origin: this.origin,
                destination: this.destination,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK" && response) {
                    //console.log(response);
                    directionsRenderer.setDirections(response);
                    const route = response.routes[0];
                    // For each route, display summary information.
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
        }
        else {
            setTimeout(() => {
                this.displaySingleRoute(directionsService, directionsRenderer);
            }, 1000);
        }
    }
    calculateRoute() {
        var count = 0;
        var loc;
        const directionsService = new google.maps.DirectionsService();
        let tempOrigin = this.origin;
        for (var i = 0; i < this.markerList.length; i++) {
            const tempWaypoints = [];
            let tempDestination = {
                lat: this.markerList[i].location.coordinates[0],
                lng: this.markerList[i].location.coordinates[1]
            };
            //console.log(this.markerList.length);
            for (var j = 0; j < this.markerList.length; j++) {
                //console.log(this.markerList[j]);
                if (i == j) {
                    continue;
                }
                loc = {
                    location: {
                        lat: this.markerList[j].location.coordinates[0],
                        lng: this.markerList[j].location.coordinates[1]
                    },
                    stopover: true
                };
                tempWaypoints.push(loc);
            }
            // var tempBool = false;
            var route;
            directionsService.route({
                origin: tempOrigin,
                destination: tempDestination,
                waypoints: tempWaypoints,
                optimizeWaypoints: false,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK" && response) {
                    //console.log(response);
                    route = response.routes[0];
                    let tempTime = 0;
                    //console.log(route);
                    for (var k = 0; k < route.legs.length; k++) {
                        tempTime += route.legs[k].duration.value;
                    }
                    if (this.minTime == null || this.minTime > tempTime) {
                        this.tempOptimalRoute = route.waypoint_order;
                        this.minTime = tempTime;
                        this.destNum = count;
                    }
                    // console.log(count++);
                    // console.log("Time : " + tempTime);
                    // console.log("Route : " + route.waypoint_order);
                    // For each route, display summary information.
                }
                else {
                    alert("Directions request failed due to " + status);
                }
            });
            //console.log(route);
        }
        //while(loading);
        setTimeout(() => {
            // console.log("Minimum Time : " + this.minTime);
            // console.log("Optimal Route : " + this.tempOptimalRoute);
            // console.log("Destination : " + this.destNum);
            for (var i = 0; i < this.tempOptimalRoute.length; i++) {
                if (this.tempOptimalRoute[i] >= this.destNum) {
                    this.tempOptimalRoute[i]++;
                }
                this.optimalRoute.push(this.tempOptimalRoute[i]);
            }
            this.optimalRoute.push(this.destNum);
            //console.log(this.optimalRoute);
            this.updateQueueNumber();
        }, 2000);
    }
    updateQueueNumber() {
        for (var i = 0; i < this.markerList.length; i++) {
            let data = {
                cust_id: this.markerList[this.optimalRoute[i]].cust_id,
                itinerary_id: this.currentItinerary,
                queue_number: i
            };
            //console.log(data);
            this.taskAssignmentService.updateQueueNumber(data).subscribe((res) => {
                try {
                    console.log(res);
                }
                catch (exception) {
                    alert("Updating Optimal Route Error...!");
                }
            });
        }
    }
    calculateAndDisplayRoute(directionsService, directionsRenderer) {
        if (this.origin && this.destination) {
            directionsService.route({
                origin: this.origin,
                destination: this.destination,
                waypoints: this.waypoints,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK" && response) {
                    //console.log(response);
                    directionsRenderer.setDirections(response);
                    const route = response.routes[0];
                    // For each route, display summary information.
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
        }
        else {
            setTimeout(() => {
                this.calculateAndDisplayRoute(directionsService, directionsRenderer);
            }, 1000);
        }
    }
    trackMe() {
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition((position) => {
                this.liveLat = position.coords.latitude;
                this.liveLng = position.coords.longitude;
                this.geo.get(this.userId).valueChanges().subscribe(res => {
                    console.log(res);
                    if (res) {
                        var angle = Math.atan2(this.liveLat - res.coordinates.lat, this.liveLng - res.coordinates.lng) * 180 / Math.PI;
                        console.log(angle);
                        this.geo.update(this.userId, { userName: this.userName, coordinates: { lat: this.liveLat, lng: this.liveLng }, angle: angle });
                    }
                    else {
                        console.log("creating");
                        this.liveLocation = {
                            userName: this.userName,
                            coordinates: { lat: this.liveLat, lng: this.liveLng },
                            angle: 0
                        };
                        this.geo.update(this.userId, this.liveLocation);
                    }
                });
                console.log(position);
                //this.showTrackingPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    // showTrackingPosition(position) {
    //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    //   this.liveLat = position.coords.latitude;
    //   this.liveLng = position.coords.longitude;
    //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //   this.map.panTo(location);
    //   if (!this.marker) {
    //     this.marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       title: 'Got you!'
    //     });
    //   }
    //   else {
    //     this.marker.setPosition(location);
    //   }
    // }
    showTrackingPosition() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: 7.928309, lng: 80.5 },
        });
        const infoWindow = new google.maps.InfoWindow();
        console.log("tracking position");
        this.geo.getAll().valueChanges().subscribe(res => {
            console.log(res);
            if (this.liveMarkers) {
                for (var i = 0; i < this.liveMarkers.length; i++) {
                    this.liveMarkers[i].setMap(null);
                }
                //this.liveMarkers=[];
            }
            for (var i = 0; i < res.length; i++) {
                var icon = {
                    path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
                    scale: 0.4,
                    fillColor: "#427af4",
                    fillOpacity: 1,
                    rotation: res[i].angle,
                    strokeWeight: 1,
                    anchor: new google.maps.Point(0, 5),
                };
                this.liveMarkers.push(new google.maps.Marker({
                    position: { lat: res[i].coordinates.lat, lng: res[i].coordinates.lng },
                    map,
                    icon: icon,
                    title: res[i].userName,
                    optimized: false
                }));
                // 
                //this.liveMarkers.push(mark);
                //console.log(this.liveMarkers[i]);
                // this.liveMarkers[i].addListener("click", () => {
                //   infoWindow.close();
                //   infoWindow.setContent("hello");
                //   infoWindow.open(map, this.liveMarkers[i]);
                // })
            }
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_7__["TaskAssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_geo_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.agmMap = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, hostBindings: function MapComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function MapComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { modeSignal: "modeSignal", markerList: "markerList", currentItinerary: "currentItinerary", selectedCustomer: "selectedCustomer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [[1, "outer-wrapper"], ["id", "wrapper", 1, "map-wrapper"], ["wrapper", ""], ["id", "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".outer-wrapper[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 20px 20px 20px 20px;\r\n}\r\n\r\n.map-wrapper[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n}\r\n\r\n\r\n\r\n#map[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    float: left;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUdBOzs7OztHQUtHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLm1hcC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufSAqL1xyXG5cclxuI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_7__["TaskAssignmentService"] }, { type: _services_geo_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"] }]; }, { modeSignal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], markerList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentItinerary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], agmMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['AgmMap']
        }], wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['wrapper']
        }], mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['map']
        }], selectedCustomer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['search']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }] }); })();
class Loc {
}
class PointLoc {
}


/***/ }),

/***/ "LkDp":
/*!**************************************************!*\
  !*** ./src/app/shared/ta-task-card/keyframes.ts ***!
  \**************************************************/
/*! exports provided: swing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const swing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(6px)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-6px)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(3px)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-3px)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 }),
];


/***/ }),

/***/ "MiVz":
/*!*************************************************************!*\
  !*** ./src/app/shared/user-shared/user-shared.component.ts ***!
  \*************************************************************/
/*! exports provided: UserSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSharedComponent", function() { return UserSharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserSharedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSharedComponent.ɵfac = function UserSharedComponent_Factory(t) { return new (t || UserSharedComponent)(); };
UserSharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSharedComponent, selectors: [["app-user-shared"]], decls: 2, vars: 0, template: function UserSharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-shared works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLXNoYXJlZC91c2VyLXNoYXJlZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-shared',
                templateUrl: './user-shared.component.html',
                styleUrls: ['./user-shared.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OJTh":
/*!*******************************************************************!*\
  !*** ./src/app/shared/customer-table/customer-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableComponent", function() { return CustomerTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/customer/customer.service */ "pLNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CustomerTableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.cust_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.mobile_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.email);
} }
class CustomerTableComponent {
    constructor(customerService, fb) {
        this.customerService = customerService;
        this.fb = fb;
        this.customers = [];
    }
    ngOnInit() {
        this.formInstaller();
        this.loadcustomers();
    }
    // tslint:disable-next-line:typedef
    loadcustomers() {
        this.customerService.listAllCustomers()
            .subscribe(res => {
            this.customers = res.data;
            this.displaycustomers = this.customers = [];
        }, error => {
        });
    }
    formInstaller() {
        this.customerForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cust_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
}
CustomerTableComponent.ɵfac = function CustomerTableComponent_Factory(t) { return new (t || CustomerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CustomerTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerTableComponent, selectors: [["app-customer-table"]], decls: 16, vars: 1, consts: [[1, "tables"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary"]], template: function CustomerTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cust ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerTableComponent_tr_15_Template, 14, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  font-family: FontAwesome;\r\n}\r\n\r\n\r\n\r\n.tables[_ngcontent-%COMP%] {\r\n  max-width: 3000px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztLQUVLOztBQUNMO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLXRhYmxlL2N1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWhlcm8ge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDAgI2IwYzFkOTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxufVxyXG5cclxuLyogLnRhYmxlcyB7XHJcbiAgICAgIG1hcmdpbjogNTBweDtcclxuICB9ICovXHJcbi50YWJsZXMge1xyXG4gIG1heC13aWR0aDogMzAwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-table',
                templateUrl: './customer-table.component.html',
                styleUrls: ['./customer-table.component.css']
            }]
    }], function () { return [{ type: _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: firebaseConfig, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-table/customer-table.component */ "OJTh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "IZFd");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "ISAC");
/* harmony import */ var _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ta-task-card/ta-task-card.component */ "iIw0");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/snazzy-info-window */ "N4x2");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "yObi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./container/container.component */ "CMg+");
/* harmony import */ var _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detail-form/detail-form.component */ "BJxj");
/* harmony import */ var _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ca-agents-table/ca-agents-table.component */ "o0XD");
/* harmony import */ var _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ta-agents-table/ta-agents-table.component */ "sYS2");
/* harmony import */ var _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav-tables/nav-tables.component */ "+EhV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-task/add-task.component */ "aIST");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _ta_only_detail_form_ta_only_detail_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ta-only-detail-form/ta-only-detail-form.component */ "9AuV");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "FDte");
/* harmony import */ var _customer_detail_form_customer_detail_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./customer-detail-form/customer-detail-form.component */ "dJZH");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "Ac7H");
/* harmony import */ var _user_shared_user_shared_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user-shared/user-shared.component */ "MiVz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./auth/auth.guard */ "WoVx");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./auth/auth.interceptor */ "+WtJ");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../services/user/user.service */ "CFL1");

//import { BrowserModule } from '@angular/platform-browser';








































const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebaseConfig;
const admin_routes = [
    // { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
    // { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
    { path: 'boards/admin-user-management/ta-agents/:userid', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"] },
    { path: 'boards/admin-user-management/ca-agents/:userid', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"] },
    { path: 'boards/ca-user-management/ta-agents/:userid', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"] },
    { path: 'boards/ca-user-management/customers-registration/:cust_id', component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_31__["CustomerProfileComponent"] },
    { path: 'userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]] }
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_35__["AuthInterceptor"],
            multi: true
        }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            //BrowserModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(firebaseConfig),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].googleMapsKeys,
                libraries: ['places']
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(admin_routes),
            agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_11__["AgmSnazzyInfoWindowModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__["Ng2SearchPipeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_24__["AddTaskComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_10__["TaTaskCardComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"], _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_17__["DetailFormComponent"], _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_18__["CaAgentsTableComponent"], _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_19__["TaAgentsTableComponent"], _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_20__["NavTablesComponent"], _ta_only_detail_form_ta_only_detail_form_component__WEBPACK_IMPORTED_MODULE_28__["TaOnlyDetailFormComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"], _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_2__["CustomerTableComponent"], _customer_detail_form_customer_detail_form_component__WEBPACK_IMPORTED_MODULE_30__["CustomerDetailFormComponent"], _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_31__["CustomerProfileComponent"], _user_shared_user_shared_component__WEBPACK_IMPORTED_MODULE_32__["UserSharedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
        _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_11__["AgmSnazzyInfoWindowModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__["Ng2SearchPipeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]], exports: [_ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_18__["CaAgentsTableComponent"], _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_19__["TaAgentsTableComponent"], _ta_only_detail_form_ta_only_detail_form_component__WEBPACK_IMPORTED_MODULE_28__["TaOnlyDetailFormComponent"], _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_2__["CustomerTableComponent"], _customer_detail_form_customer_detail_form_component__WEBPACK_IMPORTED_MODULE_30__["CustomerDetailFormComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"], _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_10__["TaTaskCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"], _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_17__["DetailFormComponent"], _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_20__["NavTablesComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_24__["AddTaskComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_24__["AddTaskComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_10__["TaTaskCardComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"], _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_17__["DetailFormComponent"], _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_18__["CaAgentsTableComponent"], _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_19__["TaAgentsTableComponent"], _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_20__["NavTablesComponent"], _ta_only_detail_form_ta_only_detail_form_component__WEBPACK_IMPORTED_MODULE_28__["TaOnlyDetailFormComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"], _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_2__["CustomerTableComponent"], _customer_detail_form_customer_detail_form_component__WEBPACK_IMPORTED_MODULE_30__["CustomerDetailFormComponent"], _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_31__["CustomerProfileComponent"], _user_shared_user_shared_component__WEBPACK_IMPORTED_MODULE_32__["UserSharedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    //BrowserModule,
                    _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(firebaseConfig),
                    _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                        apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].googleMapsKeys,
                        libraries: ['places']
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(admin_routes),
                    agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
                    _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_11__["AgmSnazzyInfoWindowModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__["Ng2SearchPipeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]
                ],
                exports: [
                    _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_18__["CaAgentsTableComponent"], _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_19__["TaAgentsTableComponent"], _ta_only_detail_form_ta_only_detail_form_component__WEBPACK_IMPORTED_MODULE_28__["TaOnlyDetailFormComponent"], _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_2__["CustomerTableComponent"], _customer_detail_form_customer_detail_form_component__WEBPACK_IMPORTED_MODULE_30__["CustomerDetailFormComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"], _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_10__["TaTaskCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"], _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_17__["DetailFormComponent"], _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_20__["NavTablesComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_24__["AddTaskComponent"]
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_35__["AuthInterceptor"],
                        multi: true
                    }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_36__["UserService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QGdk":
/*!*********************************************************************!*\
  !*** ./src/app/services/task-assignment/task-assignment.service.ts ***!
  \*********************************************************************/
/*! exports provided: TaskAssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssignmentService", function() { return TaskAssignmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TaskAssignmentService {
    constructor(http) {
        this.http = http;
        this.apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    updateTaskStatus(changeStatus) {
        return this.http.put(this.apiEndPoint + '/taskAssignment/' + changeStatus.itinerary_id + '/' + changeStatus.cust_id, changeStatus);
    }
    getTaskStatus(itinerary_id, cust_id) {
        return this.http.get(`${this.apiEndPoint}/taskAssignment/${itinerary_id}/${cust_id}`);
    }
    updateQueueNumber(data) {
        return this.http.put(this.apiEndPoint + '/taskAssignment/' + data.itinerary_id + '/' + data.cust_id, data);
    }
}
TaskAssignmentService.ɵfac = function TaskAssignmentService_Factory(t) { return new (t || TaskAssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TaskAssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskAssignmentService, factory: TaskAssignmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskAssignmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout/layout.component */ "w0r3");



class AppComponent {
    constructor() {
        this.title = 'TAMSFrontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
    } }, directives: [_layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UitZ":
/*!**************************************************!*\
  !*** ./src/app/services/task-service.service.ts ***!
  \**************************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TaskServiceService {
    constructor(http) {
        this.http = http;
    }
    createTask(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/task', data);
    }
    getAllTask() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/task');
    }
}
TaskServiceService.ɵfac = function TaskServiceService_Factory(t) { return new (t || TaskServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TaskServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskServiceService, factory: TaskServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WoVx":
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "CFL1");
/* harmony import */ var _services_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user/authentication.service */ "1lyD");





class AuthGuard {
    constructor(router, userService, authenticationService) {
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
    }
    canActivate(next, state) {
        const user = this.authenticationService.userValue;
        if (!this.userService.isLoggedIn()) {
            return false;
        }
        if (next.data.roles && next.data.roles.indexOf(user.role) === -1) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts.module */ "5wG6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-alert-module */ "vH8g");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");















const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig;
class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_9__["DIRECTION_ALL"] }
        };
    }
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(firebaseConfig),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production })
                ],
                providers: [{
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zh2F":
/*!**************************************!*\
  !*** ./src/app/models/role.model.ts ***!
  \**************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));


/***/ }),

/***/ "aIST":
/*!*******************************************************!*\
  !*** ./src/app/shared/add-task/add-task.component.ts ***!
  \*******************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/task-service.service */ "UitZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
//import { MatIconModule } from '@angular/material/icon';








class AddTaskComponent {
    constructor(fb, taskService, dialogRef) {
        this.fb = fb;
        this.taskService = taskService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.formInstaller();
    }
    formInstaller() {
        this.taskForm = this.fb.group({
            note: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            task_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            task_duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    onAddTask() {
        console.log(this.taskForm.value);
        this.taskService.createTask(this.taskForm.value)
            .subscribe(res => {
            console.log(res);
            this.dialogRef.close();
        }, error => {
            console.log(error);
        });
        this.taskForm.reset();
    }
    onClose() {
        this.dialogRef.close();
    }
}
AddTaskComponent.ɵfac = function AddTaskComponent_Factory(t) { return new (t || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
AddTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddTaskComponent, selectors: [["app-add-task"]], decls: 27, vars: 1, consts: [[1, "text-center", "text-black-50"], ["mat-stroked-button", "", "tabindex", "-1", 1, "btn-dialog-close", 3, "click"], [1, "mt-5", 3, "formGroup"], [1, "form-group", "col-md"], ["for", ""], ["formControlName", "task_name", "type", "text", "placeholder", "", 1, "form-control"], ["formControlName", "task_duration", 1, "custom-select"], ["selected", ""], ["formControlName", "note", "name", "", "id", "", "cols", "30", "rows", "10", 1, "form-control"], [1, "btn", "btn-info", "float-right", "ml-2", 2, "background-color", "#33B585", 3, "click"]], template: function AddTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\nAdd Task\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTaskComponent_Template_button_click_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Task Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Estimated Task Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "15 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "30 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "45 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Task Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTaskComponent_Template_div_click_25_listener() { return ctx.onAddTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.taskForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-task',
                templateUrl: './add-task.component.html',
                styleUrls: ['./add-task.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _services_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "bT0R":
/*!*******************************************!*\
  !*** ./src/app/models/itinerary.model.ts ***!
  \*******************************************/
/*! exports provided: Itinerary, AllocatedCustomers, modeSignalStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Itinerary", function() { return Itinerary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocatedCustomers", function() { return AllocatedCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeSignalStatus", function() { return modeSignalStatus; });
class Itinerary {
    constructor(_id, taid, location, assigned_customer_id, date) {
        this._id = _id;
        this.taid = taid;
        this.location = location;
        this.assigned_customer_id = assigned_customer_id;
        this.date = date;
    }
}
class AllocatedCustomers {
    constructor(address, area, cust_id, email, location, mobile_number, name, nic, default_agent_id) {
        this.address = address;
        this.area = area;
        this.cust_id = cust_id;
        this.email = email;
        this.location = location;
        this.mobile_number = mobile_number;
        this.name = name;
        this.nic = nic;
        this.default_agent_id = default_agent_id;
    }
}
var modeSignalStatus;
(function (modeSignalStatus) {
    modeSignalStatus["directionMode"] = "directionMode";
    modeSignalStatus["markerMode"] = "markerMode";
    modeSignalStatus["singlePathMode"] = "singlePathMode";
    modeSignalStatus["liveMode"] = "liveMode";
})(modeSignalStatus || (modeSignalStatus = {}));


/***/ }),

/***/ "dJZH":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/customer-detail-form/customer-detail-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerDetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailFormComponent", function() { return CustomerDetailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/customer/customer.service */ "pLNb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








function CustomerDetailFormComponent_tbody_74_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailFormComponent_tbody_74_tr_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const customer_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.navigateToProfile(customer_r2.cust_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.cust_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.name.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.name.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.mobile_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.nic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.default_agent_id);
} }
function CustomerDetailFormComponent_tbody_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDetailFormComponent_tbody_74_tr_1_Template, 20, 8, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.customers, ctx_r0.searchText));
} }
class CustomerDetailFormComponent {
    constructor(fb, customerService, router, activatedRoute) {
        this.fb = fb;
        this.customerService = customerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.customerId = '';
        this.customers = [];
    }
    ngOnInit() {
        this.formInstaller();
        this.loadcustomers();
    }
    // tslint:disable-next-line:typedef
    loadcustomers() {
        this.customerService.listAllCustomers()
            .subscribe(res => {
            this.customers = res.data;
            this.displaycustomers = this.customers;
            console.log(res.data);
        }, error => {
        });
    }
    formInstaller() {
        this.customerForm = this.fb.group({
            cust_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: this.fb.group({
                first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            // location: this.fb.group({
            //   coordinates: ['', Validators.required],
            // }),
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            default_agent_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // tslint:disable-next-line:typedef
    OnSubmit() {
        // console.log(this.customerForm.value);
        this.customerService.addACustomer(this.customerForm.value)
            .subscribe(res => {
            console.log(res);
            this.loadcustomers();
        }, error => {
            console.log(error);
        });
        this.customerForm.reset();
    }
    // public changeListener(files: FileList){
    //   console.log(files);
    //   if(files && files.length > 0) {
    //      let file : File = files.item(0); 
    //        console.log(file.name);
    //        console.log(file.size);
    //        console.log(file.type);
    //        let reader: FileReader = new FileReader();
    //        reader.readAsText(file);
    //        reader.onload = (e) => {
    //           let csv: string = reader.result as string;
    //           console.log(csv);
    //        }
    //     }
    // }
    // onSearch(term: any) {
    //   console.log(term);
    //   if (term === '') {
    //     this.displaycustomers = this.customers;
    //   } else {
    //     this.displaycustomers =  this.customers.filter((a) => {
    //       return a.ta_id === term; 
    //     });
    //   }
    // }
    navigateToProfile(cust_id) {
        this.router.navigate(['./' + cust_id], { relativeTo: this.activatedRoute });
    }
}
CustomerDetailFormComponent.ɵfac = function CustomerDetailFormComponent_Factory(t) { return new (t || CustomerDetailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CustomerDetailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDetailFormComponent, selectors: [["app-customer-detail-form"]], decls: 75, vars: 3, consts: [[1, "form-group"], [3, "formGroup", "ngSubmit"], ["for", "cust_id"], ["type", "text", "id", "cust_id", "formControlName", "cust_id", 1, "form-control"], ["formGroupName", "name"], ["for", "first_name"], ["type", "text", "id", "first_name", "formControlName", "first_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", 1, "form-control"], ["for", "area"], ["type", "text", "id", "area", "formControlName", "area", 1, "form-control"], ["for", "nic"], ["type", "text", "id", "nic", "formControlName", "nic", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "mobile_number"], ["type", "text", "id", "mobile_number", "formControlName", "mobile_number", 1, "form-control"], ["for", "default_agent_id"], ["type", "text", "id", "default_agent_id", "formControlName", "default_agent_id", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info", 2, "background-color", "#33B585", "font-size", "17px"], [1, "tables"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Start searching for a customer", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary", 3, "click"]], template: function CustomerDetailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerDetailFormComponent_Template_form_ngSubmit_1_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "NIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Assigned Travelling Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDetailFormComponent_Template_input_ngModelChange_54_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cust ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Contact No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "NIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Assigned Travelling Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, CustomerDetailFormComponent_tbody_74_Template, 3, 4, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customers.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  font-family: FontAwesome;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLWRldGFpbC1mb3JtL2N1c3RvbWVyLWRldGFpbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N1c3RvbWVyLWRldGFpbC1mb3JtL2N1c3RvbWVyLWRldGFpbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWhlcm8ge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDAgI2IwYzFkOTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDetailFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-detail-form',
                templateUrl: './customer-detail-form.component.html',
                styleUrls: ['./customer-detail-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ep4l":
/*!*********************************************!*\
  !*** ./src/app/services/geo/geo.service.ts ***!
  \*********************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



class GeoService {
    constructor(db) {
        this.db = db;
        // dbRef: any;
        // geoFire: any;
        // liveLocations:Observable<any[]>;
        // hits = new BehaviorSubject([]);
        this.dbPath = '/locations';
        this.locationsRef = db.list(this.dbPath);
        // console.log("Geo called")
        // this.dbRef = this.db.list('locations');
        // this.geoFire = new GeoFire.GeoFire(this.dbRef).ref();      
        // this.liveLocations = this.dbRef.valueChanges();  
    }
    getAll() {
        return this.locationsRef;
    }
    create(location) {
        return this.locationsRef.push(location);
    }
    update(key, value) {
        return this.locationsRef.update(key, value);
    }
    delete(key) {
        return this.locationsRef.remove(key);
    }
    deleteAll() {
        return this.locationsRef.remove();
    }
    get(key) {
        return this.db.object('/locations/' + key);
    }
    updateOnDisconnect(key) {
        return this.db.object('/locations/' + key).query.ref.onDisconnect().remove();
    }
}
GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
GeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoService, factory: GeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "hN0B":
/*!*********************************************************!*\
  !*** ./src/app/services/itinerary/itinerary.service.ts ***!
  \*********************************************************/
/*! exports provided: ItineraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryService", function() { return ItineraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ItineraryService {
    constructor(http) {
        this.http = http;
        this.apiEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    getItineraries() {
        return this.http.get(this.apiEndPoint + '/itineraries');
    }
    addItinerary(newItinerary) {
        return this.http.post(this.apiEndPoint + '/itineraries', newItinerary);
    }
    updateItinerary(updatedItinerary) {
        return this.http.put(this.apiEndPoint + '/itineraries/' + updatedItinerary.date + '/' + updatedItinerary.taid, updatedItinerary);
    }
    deleteItinerary(date, taid) {
        return this.http.delete(this.apiEndPoint + '/itineraries/' + date + '/' + taid);
    }
    getASingleItinerary(date, taid) {
        return this.http.get(this.apiEndPoint + '/itineraries/' + date + '/' + taid);
    }
    getAllocatedCustomers(date, taid) {
        //console.log("1");
        return this.http.get(`${this.apiEndPoint}/itineraries/allocated_customers/${date}/${taid}`, { observe: 'response' });
    }
    getAllocatedPendingCustomers(date, taid) {
        //console.log("1");
        return this.http.get(`${this.apiEndPoint}/itineraries/allocated_pending_customers/${date}/${taid}`, { observe: 'response' });
    }
}
ItineraryService.ɵfac = function ItineraryService_Factory(t) { return new (t || ItineraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ItineraryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItineraryService, factory: ItineraryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItineraryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "iIw0":
/*!***************************************************************!*\
  !*** ./src/app/shared/ta-task-card/ta-task-card.component.ts ***!
  \***************************************************************/
/*! exports provided: TaTaskCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaTaskCardComponent", function() { return TaTaskCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/itinerary.model */ "bT0R");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframes */ "LkDp");
/* harmony import */ var _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/itinerary/itinerary.service */ "hN0B");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/task-assignment/task-assignment.service */ "QGdk");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../map/map.component */ "ISAC");















function TaTaskCardComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaTaskCardComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.TaskButton("Completed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaTaskCardComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaTaskCardComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.TaskButton("Postponed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaTaskCardComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaTaskCardComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.TaskButton("Pending"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reschedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "width.px": a0 }; };
function TaTaskCardComponent_mat_list_item_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r3.text_width));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r12 + 1, ". ", task_r11.task_name, "");
} }
function TaTaskCardComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modeSignal", ctx_r4.modeSignal)("selectedCustomer", ctx_r4.customer);
} }
class TaTaskCardComponent {
    constructor(cd, itineraryService, data, taskAssignmentService) {
        this.cd = cd;
        this.itineraryService = itineraryService;
        this.data = data;
        this.taskAssignmentService = taskAssignmentService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabled = true;
        this.loading = false;
        this.isShowMap = false;
        this.date = new Date("2021-04-05");
        this.taid = "TA001";
        this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_1__["modeSignalStatus"].singlePathMode;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onResize() {
        this.changeSize();
    }
    changeSize() {
        if (this.isShowSidebar) {
            this.text_width = window.innerWidth - 460;
        }
        else {
            this.text_width = window.innerWidth - 230;
        }
    }
    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar);
        console.log(this.selectedItinerary);
        //console.log(this.customer);
        this.changeSize();
        this.checkStatus();
    }
    toggle() {
        this.isShowMap = !this.isShowMap;
    }
    startAnimation(state) {
        if (!this.animationState) {
            this.animationState = state;
        }
    }
    resetAnimationState() {
        this.animationState = '';
    }
    checkStatus() {
        try {
            this.taskAssignmentService.getTaskStatus(this.selectedItinerary._id, this.customer.cust_id).subscribe((res) => {
                if (res.data && res.data[0] && res.data[0].status) {
                    this.currentStatus = res.data[0].status;
                    this.tasks = res.data[0].task;
                    console.log(this.tasks);
                }
                if (this.currentStatus == "Completed" || this.currentStatus == "Postponed") {
                    this.isDisabled = true;
                }
                else {
                    this.isDisabled = false;
                }
            });
        }
        catch (exception) {
            console.log("Checking Status Error");
        }
    }
    TaskButton(taskStatus) {
        //console.log(this.selectedItinerary);
        //console.log(this.selectedItinerary._id);
        let changeStatus = {
            itinerary_id: this.selectedItinerary._id,
            cust_id: this.customer.cust_id,
            status: taskStatus,
            queue_number: 100
        };
        this.taskAssignmentService.updateTaskStatus(changeStatus).subscribe((res) => {
            //console.log(res);
            this.currentStatus = res.data.status;
            //this.cd.detectChanges();
            console.log(res);
            //this.getColor()
            this.refresh.emit();
            if (this.currentStatus == "Completed" || this.currentStatus == "Postponed") {
                this.isDisabled = true;
            }
            else {
                //console.log("Called")
                this.isDisabled = false;
            }
            console.log(res.data.status);
        });
    }
    navigate() {
        let stringDestination = "" + this.customer.location.coordinates[0] + "," + this.customer.location.coordinates[1];
        let url = `https://www.google.com/maps/dir/?api=1&destination=${stringDestination}`;
        console.log(url);
        // window.location.href = url;
        window.open(url, "_blank");
    }
}
TaTaskCardComponent.ɵfac = function TaTaskCardComponent_Factory(t) { return new (t || TaTaskCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__["TaskAssignmentService"])); };
TaTaskCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaTaskCardComponent, selectors: [["app-ta-task-card"]], hostBindings: function TaTaskCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function TaTaskCardComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { customer: "customer", selectedItinerary: "selectedItinerary" }, outputs: { refresh: "refresh" }, decls: 31, vars: 9, consts: [["fxLayout", "column", "fxLayoutAlign", "start start", 1, "task-card", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "text-card-area"], [1, "label"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "row"], ["mat-raised-button", "", "class", "card-button label-btn col-sm-auto ", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "card-button label-btn col-sm-auto", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "card-button", "label-btn", "col-sm-auto", 3, "click"], ["fxLayout", "row ", "fxLayoutAlign", "start center "], ["role", "list", 1, "text-area"], ["role", "listitem", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "map ", 4, "ngIf"], ["role", "listitem", 3, "ngStyle"], [1, "map"], [3, "modeSignal", "selectedCustomer"]], template: function TaTaskCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@cardAnimator.done", function TaTaskCardComponent_Template_div_animation_cardAnimator_done_0_listener() { return ctx.resetAnimationState(); })("click", function TaTaskCardComponent_Template_div_click_0_listener() { return ctx.startAnimation("swing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customer : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaTaskCardComponent_button_16_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaTaskCardComponent_button_17_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaTaskCardComponent_button_18_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaTaskCardComponent_Template_button_click_19_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaTaskCardComponent_Template_button_click_21_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Navigate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tasks\u00A0: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TaTaskCardComponent_mat_list_item_29_Template, 2, 5, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaTaskCardComponent_div_30_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardAnimator", ctx.animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.customer.name.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.customer.cust_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isShowMap ? "Close Map" : "View in Map", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer != null && ctx.isShowMap);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"]], styles: [".task-card[_ngcontent-%COMP%] {\r\n    margin: 25px;\r\n    padding: 10px 30px 10px 30px;\r\n    border-radius: 15px;\r\n    width: auto;\r\n    min-width: 340px;\r\n    background-color: rgba(0, 0, 0, 0.205);\r\n    box-shadow: 8px 8px 6px -6px rgb(168, 168, 168);\r\n    z-index: 100;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.label-btn[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 350;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.text-card-area[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    background-color: #298E69;\r\n    color: white;\r\n    border-radius: 10px;\r\n    \r\n    box-shadow: 3px 8px 6px -6px rgb(104, 104, 104);\r\n    z-index: 10;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%]:active {\r\n    box-shadow: inset 0px 0px 5px #2b2b2b;\r\n    outline: none;\r\n}\r\n\r\n.text-area[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    min-width: 190px;\r\n    font-size: 12px;\r\n    font-weight: 350;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.map[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-right: 20px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhLXRhc2stY2FyZC90YS10YXNrLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBR3RDLCtDQUErQztJQUMvQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBR2hDLCtDQUErQztJQUMvQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGEtdGFzay1jYXJkL3RhLXRhc2stY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY2FyZCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggOHB4IDZweCAtNnB4IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogOHB4IDhweCA2cHggLTZweCByZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDZweCAtNnB4IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sYWJlbC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRleHQtY2FyZC1hcmVhIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOThFNjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLyogcGFkZGluZzogN3B4IDEwcHggMHB4IDEwcHg7ICovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA4cHggNnB4IC02cHggcmdiKDEwNCwgMTA0LCAxMDQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggOHB4IDZweCAtNnB4IHJnYigxMDQsIDEwNCwgMTA0KTtcclxuICAgIGJveC1zaGFkb3c6IDNweCA4cHggNnB4IC02cHggcmdiKDEwNCwgMTA0LCAxMDQpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlDODkyO1xyXG59XHJcblxyXG4uY2FyZC1idXR0b246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4ICMyYjJiMmI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGV4dC1hcmVhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgbWluLXdpZHRoOiAxOTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(700, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["swing"]))),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaTaskCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ta-task-card',
                templateUrl: './ta-task-card.component.html',
                styleUrls: ['./ta-task-card.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(700, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["swing"]))),
                    ]),
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_4__["ItineraryService"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__["TaskAssignmentService"] }]; }, { customer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["refresh"]
        }], selectedItinerary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "o0XD":
/*!*********************************************************************!*\
  !*** ./src/app/shared/ca-agents-table/ca-agents-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CaAgentsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaAgentsTableComponent", function() { return CaAgentsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-controll.service */ "9RAe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








function CaAgentsTableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaAgentsTableComponent_tr_15_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const grade_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateToProfile(grade_r1.userid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.mobile_number);
} }
class CaAgentsTableComponent {
    constructor(formControllService, http, router, activatedRoute) {
        this.formControllService = formControllService;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.grades = this.formControllService.grades;
        this.grades = this.formControllService.grades;
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/ca-agents').subscribe((postData) => {
            this.grades = postData['data'];
        });
        this.formControllService.updatedgrade.subscribe((form) => {
            this.grades.push(form);
        });
    }
    navigateToProfile(userid) {
        this.router.navigate(['./' + userid], { relativeTo: this.activatedRoute });
    }
}
CaAgentsTableComponent.ɵfac = function CaAgentsTableComponent_Factory(t) { return new (t || CaAgentsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CaAgentsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaAgentsTableComponent, selectors: [["app-ca-agents-table"]], decls: 17, vars: 5, consts: [[1, "tables"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Start searching for an agent", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary", 3, "click"]], template: function CaAgentsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaAgentsTableComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CaAgentsTableComponent_tr_15_Template, 12, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 2, ctx.grades, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  font-family: FontAwesome;\r\n}\r\n\r\n\r\n\r\n.tables[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhLWFnZW50cy10YWJsZS9jYS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0dBRUc7O0FBQ0g7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2EtYWdlbnRzLXRhYmxlL2NhLWFnZW50cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1oZXJvIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCAwICNiMGMxZDk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbn1cclxuXHJcbi8qIC50YWJsZXMge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59ICovXHJcbi50YWJsZXMge1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaAgentsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ca-agents-table',
                templateUrl: './ca-agents-table.component.html',
                styleUrls: ['./ca-agents-table.component.css']
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "pLNb":
/*!*******************************************************!*\
  !*** ./src/app/services/customer/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CustomerService {
    //apiEndPoint = 'http://localhost:3000';
    constructor(http) {
        this.http = http;
    }
    getASingleItinerary(cusid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/customers/' + cusid);
    }
    addACustomer(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/customers', data);
    }
    listAllCustomers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/customers');
    }
    findOne(cust_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/customers/' + cust_id);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sYS2":
/*!*********************************************************************!*\
  !*** ./src/app/shared/ta-agents-table/ta-agents-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: TaAgentsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaAgentsTableComponent", function() { return TaAgentsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-controll.service */ "9RAe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








function TaAgentsTableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaAgentsTableComponent_tr_15_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const grade_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateToProfile(grade_r1.userid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.mobile_number);
} }
class TaAgentsTableComponent {
    constructor(formControllService, http, router, activatedRoute) {
        this.formControllService = formControllService;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.grades = this.formControllService.maxGrades;
        this.grades = this.formControllService.maxGrades;
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/ta-agents').subscribe((postData) => {
            this.grades = postData['data'];
        });
        this.formControllService.updatedMaxgrade.subscribe((form) => {
            this.grades.push(form);
        });
    }
    navigateToProfile(userid) {
        this.router.navigate(['./' + userid], { relativeTo: this.activatedRoute });
    }
}
TaAgentsTableComponent.ɵfac = function TaAgentsTableComponent_Factory(t) { return new (t || TaAgentsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TaAgentsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaAgentsTableComponent, selectors: [["app-ta-agents-table"]], decls: 17, vars: 5, consts: [[1, "tables"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Start searching for an agent", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary", 3, "click"]], template: function TaAgentsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaAgentsTableComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaAgentsTableComponent_tr_15_Template, 12, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 2, ctx.grades, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  font-family: FontAwesome;\r\n}\r\n\r\n\r\n\r\n.tables[_ngcontent-%COMP%] {\r\n  max-width: 3000px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhLWFnZW50cy10YWJsZS90YS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0dBRUc7O0FBQ0g7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGEtYWdlbnRzLXRhYmxlL3RhLWFnZW50cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1oZXJvIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCAwICNiMGMxZDk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbn1cclxuXHJcbi8qIC50YWJsZXMge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59ICovXHJcbi50YWJsZXMge1xyXG4gIG1heC13aWR0aDogMzAwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaAgentsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ta-agents-table',
                templateUrl: './ta-agents-table.component.html',
                styleUrls: ['./ta-agents-table.component.css']
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [{
        path: '',
        redirectTo: '/boards/itinerary-map',
        pathMatch: "full"
    },
    {
        path: 'boards',
        loadChildren: () => __webpack_require__.e(/*! import() | boards-boards-module */ "boards-boards-module").then(__webpack_require__.bind(null, /*! ./boards/boards.module */ "01C7")).then(module => module.BoardsModule)
    },
    {
        path: 'shared',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shared/shared.module */ "PCNd")).then(module => module.SharedModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w0r3":
/*!****************************************************!*\
  !*** ./src/app/layouts/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "yObi");








function LayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LayoutComponent {
    constructor(cdr, data) {
        this.cdr = cdr;
        this.data = data;
        this.viewInitAfter = false;
        this.isShowSidebar = false;
    }
    onResize() {
        this.detectScreenSize();
    }
    ngAfterViewInit() {
        this.viewInitAfter = true;
        this.cdr.detectChanges();
    }
    ngOnChange() {
        this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    detectScreenSize() {
        if (window.innerWidth > 1024) {
            this.isDesktop = true;
            this.isTablet = false;
            this.isMobile = false;
            this.fontSize = 120;
        }
        else if (window.innerWidth > 600) {
            this.isDesktop = false;
            this.isTablet = true;
            this.isMobile = false;
            this.fontSize = 100;
        }
        else {
            this.isDesktop = false;
            this.isTablet = false;
            this.isMobile = true;
            this.fontSize = 80;
        }
    }
    ngOnInit() {
        this.detectScreenSize();
        //console.log("layout called")
        this.showSideBar(this.isTablet || this.isDesktop);
    }
    showSideBar(burgerBoolean) {
        this.isShowSidebar = burgerBoolean;
        this.data.showSidebar(this.isShowSidebar);
        //console.log(this.isShowSidebar);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 1, consts: [["fxLayout", "row"], ["fxLayout", "column", "class", "sidebar", 4, "ngIf"], ["fxLayout", "column", 1, "boards"], ["fxLayout", "row", 1, ""], [3, "burgerBooleanEmitter"], [1, "content"], ["fxLayout", "column", 1, "sidebar"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-nav-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("burgerBooleanEmitter", function LayoutComponent_Template_app_nav_bar_burgerBooleanEmitter_4_listener($event) { return ctx.showSideBar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowSidebar);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n\r\napp-nav-bar[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    width: 100%;\r\n    padding: 0px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    height: auto;\r\n    width: 300px;\r\n}\r\n\r\n.boards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n    padding: 0px;\r\n}\r\n\r\n.container-row[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYXBwLW5hdi1iYXIge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5ib2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItcm93IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "yObi":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





class SideBarComponent {
    constructor(router) {
        this.router = router;
        this.TAButton = false;
        this.panelOpenState = false;
    }
    ngOnInit() {
    }
    callScreen(screenName) {
        console.log("called here" + screenName);
        switch (screenName) {
            case 'Itinerary Map':
                this.router.navigate(['/boards/itinerary-map']);
                break;
            case 'TA Map':
                this.router.navigate(['/boards/ta-map']);
                break;
            case 'Itinerary Details':
                this.router.navigate(['/boards/itinerary-details']);
                break;
            case 'Leaves':
                this.router.navigate(['/boards/leave']);
                break;
            case 'Itinerary Task':
                this.router.navigate(['/boards/itinerary-task']);
                break;
            case 'Customer Availability':
                this.router.navigate(['/boards/customer-availability']);
                break;
            case 'User Management':
                this.router.navigate(["/boards/admin-user-management"]);
                break;
            case 'Assign':
                this.router.navigate(['/boards/assign']);
                break;
            case 'CA User Management':
                this.router.navigate(["/boards/ca-user-management"]);
                break;
            case 'Statistical Dashboard':
                this.router.navigate(["/boards/stat-dashboard"]);
                break;
            default:
                this.router.navigate(['/boards/home']);
                break;
        }
    }
    CollapseChange(buttonName) {
        switch (buttonName) {
            case 'TA':
                console.log("sdsds");
                break;
        }
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 57, vars: 1, consts: [[1, "sidebar"], ["fxLayoutAlign", "center center", 1, "topic"], [1, "title"], [1, "buttons"], [1, "button", 2, "cursor", "pointer", 3, "click"], [1, "label"], [1, "button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "type", "button", "data-toggle", "collapse", "data-target", "#collapseTA", "aria-expanded", "false", "aria-controls", "collapseTA", 1, "collapse-button", 3, "click"], [1, "collaspe-icon"], ["id", "collapseSVGTA", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["id", "collapseTA", 1, "collapse"], [1, "sub-button"], [1, "sidebar-log-area", "center"], [1, "log-button", 2, "cursor", "pointer"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TAMS SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_6_listener() { return ctx.callScreen("Itinerary Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Itinerary Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_9_listener() { return ctx.callScreen("TA Map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Travel Agent Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_12_listener() { return ctx.callScreen("Itinerary Details"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Itinerary Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_15_listener() { return ctx.callScreen("Leaves"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Leaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_18_listener() { return ctx.callScreen("Itinerary Task"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_21_listener() { return ctx.callScreen("Customer Availability"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Customer Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_24_listener() { return ctx.callScreen("User Management"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_27_listener() { return ctx.callScreen("User Management"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Admin User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_30_listener() { return ctx.callScreen("CA User Management"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "CA User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_33_listener() { return ctx.callScreen("Assign"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Assign Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_36_listener() { return ctx.callScreen("Statistical Dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Statistical Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_39_listener() { return ctx.CollapseChange("TA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Travel Itinerary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n  background-color: #298e69;\r\n  height: 100vh;\r\n  width: 100%;\r\n  min-width: 240px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n  color: rgb(255, 255, 255);\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.topic[_ngcontent-%COMP%] {\r\n  padding-top: 34px;\r\n  padding-bottom: 34px;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 350;\r\n  color: rgb(255, 255, 255);\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  padding-left: 20%;\r\n  padding-top: 13px;\r\n}\r\n\r\n.log-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39c892;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39c892;\r\n}\r\n\r\n.log-button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 30%);\r\n  padding-left: 33px;\r\n  padding-right: 33px;\r\n  padding-top: 7px;\r\n  padding-bottom: 4px;\r\n  vertical-align: middle;\r\n  border-radius: 30px;\r\n  background-color: #298e69;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.sidebar-log-area[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.sub-button[_ngcontent-%COMP%] {\r\n  padding: 3px;\r\n  padding-left: 30%;\r\n  padding-top: 11px;\r\n}\r\n\r\n.collaspe-icon[_ngcontent-%COMP%] {\r\n  padding-right: 15px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.collapse-button[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  padding-left: 7%;\r\n  padding-top: 13px;\r\n}\r\n\r\n.collapse-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39c892;\r\n}\r\n\r\n.sub-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39c892;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5OGU2OTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRvcGljIHtcclxuICBwYWRkaW5nLXRvcDogMzRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzRweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgcGFkZGluZy10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5sb2ctYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzljODkyO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzljODkyO1xyXG59XHJcblxyXG4ubG9nLWJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDMwJSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMzcHg7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4ZTY5O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnNpZGViYXItbG9nLWFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uc3ViLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMXB4O1xyXG59XHJcblxyXG4uY29sbGFzcGUtaWNvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2UtYnV0dG9uIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICBwYWRkaW5nLXRvcDogMTNweDtcclxufVxyXG5cclxuLmNvbGxhcHNlLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5Yzg5MjtcclxufVxyXG5cclxuLnN1Yi1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWM4OTI7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.3, transform: 'translateX(-50px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                        //state(),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.3, transform: 'translateX(-50px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0px)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map