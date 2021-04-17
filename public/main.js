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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Johan\Campus\Software Project\Travelling Agent Management System\TAMSFrontend\src\main.ts */"zUnb");


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





class NavBarComponent {
    constructor(router) {
        this.router = router;
        // @Input() burger:boolean;
        this.burgerBooleanEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.burgerBoolean = false;
    }
    ngOnInit() {
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
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { burgerBooleanEmitter: "burgerBooleanEmitter" }, decls: 21, vars: 1, consts: [["fxLayoutAlign", "space-between center", 1, "flex-container", "shadow-sm", "p-3", "m-0"], [1, "burger_btn_area"], [1, "burger_btn", 3, "click"], [1, "user"], [1, "flex-container", "row-reverse"], ["id", "user-det", 1, "user-btn", 3, "click"], [1, "user-name-div"], [1, "title"], ["id", "userMenuDropdown", 1, "dropdown-content"], [1, "agent-type"], ["href", "#home"], ["href", "#about"], ["href", "#contact"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"]], styles: [".title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #298E69;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.user-btn[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    width: 60px;\r\n    vertical-align: middle;\r\n    margin-left: 25px;\r\n    background-image: url('ic_user.png');\r\n    background-size: 120%;\r\n    background-position-y: center;\r\n    background-position-x: center;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n}\r\n\r\n.user-btn[_ngcontent-%COMP%]:hover, .user-btn[_ngcontent-%COMP%]:focus {\r\n    border: 5px solid rgba(73, 73, 73, 0.808);\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: #2980B9;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    right: 20px;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    overflow: auto;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.agent-type[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    color: black;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(108, 67, 255, 0.664)\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    -ms-box-orient: horizontal;\r\n    display: -moz-flex;\r\n    display: flex;\r\n}\r\n\r\n.row-reverse[_ngcontent-%COMP%] {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.user-name-div[_ngcontent-%COMP%] {\r\n    margin-top: 14px;\r\n}\r\n\r\n.burger_btn[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    width: 35px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 80%;\r\n    background-image: url('ic_burger_button.png');\r\n    border-radius: 5px;\r\n}\r\n\r\n.burger_btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(155, 155, 155, 0.568);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQ0FBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUEsT0FBTzs7QUFFUDtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUkxQixrQkFBa0I7SUFFbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsNkNBQW9FO0lBQ3BFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufSAqL1xyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzI5OEU2OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVzZXItYnRuIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY191c2VyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyLWJ0bjpob3ZlcixcclxuLnVzZXItYnRuOmZvY3VzIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoNzMsIDczLCA3MywgMC44MDgpO1xyXG59XHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hZ2VudC10eXBlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDgsIDY3LCAyNTUsIDAuNjY0KVxyXG59XHJcblxyXG4udXNlciB7fVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm93LXJldmVyc2Uge1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUtZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5idXJnZXJfYnRuIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY19idXJnZXJfYnV0dG9uLnBuZ1wiKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ1cmdlcl9idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE1NSwgMTU1LCAwLjU2OCk7XHJcbn0iXX0= */"], data: { animation: [
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
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { burgerBooleanEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FormControllService {
    constructor(http) {
        this.http = http;
        this.updatedgrade = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updatedMaxgrade = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    uploadDetails(form) {
        this.http.post('http://localhost:3000/users', form).subscribe((responseData) => {
            console.log(responseData['msg']);
            this.updatedgrade.next(form);
            // if (form.totMark == "Travelling Agent"){
            //   this.updatedMaxgrade.next(form);
            // }
            // http://localhost:3000/marks
        });
    }
}
FormControllService.ɵfac = function FormControllService_Factory(t) { return new (t || FormControllService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FormControllService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormControllService, factory: FormControllService.ɵfac, providedIn: 'any' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControllService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    googleMapsKeys: 'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0'
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
            //Validators.min(0),
            //Validators.max(100),
            //engMark: new FormControl('', [
            //Validators.required,
            //Validators.min(0),
            //Validators.max(100),
            //]),
            //sciMark: new FormControl('', [
            //Validators.required,
            //Validators.min(0),
            //Validators.max(100),
            //]),
            agentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        //this.formControllService.downloadDetails();
    }
    OnSubmit() {
        if (this.form.valid) {
            this.formIsValid = false;
            this.recordSent = true;
            const totalMark = this.form.value.agentType;
            this.form.patchValue({ agentType: totalMark });
            const formData = {
                userid: this.form.value.userid,
                email: this.form.value.email,
                //engMark: this.form.value.engMark,
                //sciMark: this.form.value.sciMark,
                agentType: this.form.value.agentType,
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
DetailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFormComponent, selectors: [["app-detail-form"]], decls: 25, vars: 1, consts: [[1, "form-group"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "agenttype"], ["name", "type", "id", "agenttype", "formControlName", "agentType", 1, "form-control"], ["value", "ca", 1, "form-control"], ["value", "ta", 1, "form-control"], ["for", "userid"], ["type", "text", "id", "userid", "value", "AB00001", "formControlName", "userid", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary"]], template: function DetailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetailFormComponent_Template_form_ngSubmit_1_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agent Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Call Centre Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Travelling Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add");
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


class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 0, vars: 0, template: function ContainerComponent_Template(rf, ctx) { }, styles: [".forum-container[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ydW0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/itinerary/itinerary.service */ "hN0B");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/task-assignment/task-assignment.service */ "QGdk");
/* harmony import */ var _services_geo_geo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/geo/geo.service */ "ep4l");









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
        //this.trackMe();
    }
    onWindowResize() {
        this.onResize();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        if (this.modeSignal = src_app_models_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["modeSignalStatus"].singlePathMode) {
            if (this.isShowSidebar) {
                this.widthReduce = 400;
            }
            else {
                this.widthReduce = 150;
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
                this.widthReduce = 400;
            }
            else {
                this.widthReduce = 150;
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
        this.geo.hits.subscribe(hits => this.liveMarkers = hits);
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
                ;
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
                this.geo.setLocation("User-C", [this.liveLat, this.liveLng]);
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
        this.geo.liveLocations.subscribe(res => {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                const mark = new google.maps.Marker({
                    position: { lat: res[i][0], lng: res[i][1] },
                    map,
                    // title: this.markerList[i].name.first_name + " " + this.markerList[i].name.last_name,
                    label: (i + 1 + ""),
                    optimized: false
                });
                // mark.addListener("click", () => {
                //   infoWindow.close();
                //   infoWindow.setContent(mark.getTitle());
                //   infoWindow.open(mark.getMap(), mark);
                // })
            }
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__["TaskAssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_geo_geo_service__WEBPACK_IMPORTED_MODULE_7__["GeoService"])); };
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
    } }, styles: [".outer-wrapper[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 20px 20px 20px 20px;\r\n}\r\n\r\n.map-wrapper[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n}\r\n\r\n\r\n\r\n#map[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBR0E7Ozs7O0dBS0c7O0FBRUg7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLm1hcC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufSAqL1xyXG5cclxuI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _services_itinerary_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _services_task_assignment_task_assignment_service__WEBPACK_IMPORTED_MODULE_6__["TaskAssignmentService"] }, { type: _services_geo_geo_service__WEBPACK_IMPORTED_MODULE_7__["GeoService"] }]; }, { modeSignal: [{
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! agm-direction */ "IZFd");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "ISAC");
/* harmony import */ var _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ta-task-card/ta-task-card.component */ "iIw0");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/snazzy-info-window */ "N4x2");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "yObi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./container/container.component */ "CMg+");
/* harmony import */ var _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail-form/detail-form.component */ "BJxj");
/* harmony import */ var _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ca-agents-table/ca-agents-table.component */ "o0XD");
/* harmony import */ var _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ta-agents-table/ta-agents-table.component */ "sYS2");
/* harmony import */ var _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav-tables/nav-tables.component */ "+EhV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-task/add-task.component */ "aIST");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ "spgP");

//import { BrowserModule } from '@angular/platform-browser';





























const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebaseConfig;
const admin_routes = [
// { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
// { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            //BrowserModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(firebaseConfig),
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].googleMapsKeys,
                libraries: ['places']
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(admin_routes),
            agm_direction__WEBPACK_IMPORTED_MODULE_6__["AgmDirectionModule"],
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_9__["AgmSnazzyInfoWindowModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
        _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaTaskCardComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
        _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
        _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_15__["DetailFormComponent"],
        _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
        _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
        _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_18__["NavTablesComponent"],
        _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_22__["AddTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], agm_direction__WEBPACK_IMPORTED_MODULE_6__["AgmDirectionModule"],
        _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_9__["AgmSnazzyInfoWindowModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"]], exports: [_ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
        _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
        _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaTaskCardComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
        _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_15__["DetailFormComponent"],
        _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_18__["NavTablesComponent"],
        _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
        _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
        _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_22__["AddTaskComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                    _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaTaskCardComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
                    _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
                    _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_15__["DetailFormComponent"],
                    _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
                    _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
                    _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_18__["NavTablesComponent"],
                    _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_22__["AddTaskComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    //BrowserModule,
                    _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(firebaseConfig),
                    _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                        apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].googleMapsKeys,
                        libraries: ['places']
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(admin_routes),
                    agm_direction__WEBPACK_IMPORTED_MODULE_6__["AgmDirectionModule"],
                    _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_9__["AgmSnazzyInfoWindowModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"]
                ],
                exports: [
                    _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
                    _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
                    _ta_task_card_ta_task_card_component__WEBPACK_IMPORTED_MODULE_8__["TaTaskCardComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
                    _detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_15__["DetailFormComponent"],
                    _nav_tables_nav_tables_component__WEBPACK_IMPORTED_MODULE_18__["NavTablesComponent"],
                    _ta_agents_table_ta_agents_table_component__WEBPACK_IMPORTED_MODULE_17__["TaAgentsTableComponent"],
                    _ca_agents_table_ca_agents_table_component__WEBPACK_IMPORTED_MODULE_16__["CaAgentsTableComponent"],
                    _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_22__["AddTaskComponent"]
                ]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TaskAssignmentService {
    constructor(http) {
        this.http = http;
        this.apiEndPoint = 'http://localhost:3000';
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
TaskAssignmentService.ɵfac = function TaskAssignmentService_Factory(t) { return new (t || TaskAssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskAssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskAssignmentService, factory: TaskAssignmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskAssignmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TaskServiceService {
    constructor(http) {
        this.http = http;
    }
    createTask(data) {
        return this.http.post('http://localhost:3000/task', data);
    }
    getAllTask() {
        return this.http.get('http://localhost:3000/task');
    }
}
TaskServiceService.ɵfac = function TaskServiceService_Factory(t) { return new (t || TaskServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskServiceService, factory: TaskServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]] }); })();
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
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
                ],
                providers: [{
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


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
    constructor(address, area, cust_id, email, location, mobile_number, name, nic) {
        this.address = address;
        this.area = area;
        this.cust_id = cust_id;
        this.email = email;
        this.location = location;
        this.mobile_number = mobile_number;
        this.name = name;
        this.nic = nic;
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
/* harmony import */ var geofire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire */ "AaxA");
/* harmony import */ var geofire__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");





class GeoService {
    constructor(db) {
        this.db = db;
        this.hits = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // console.log("Geo called")
        this.dbRef = this.db.list('locations');
        this.geoFire = new geofire__WEBPACK_IMPORTED_MODULE_1__["GeoFire"](this.dbRef).ref();
        this.liveLocations = this.dbRef.valueChanges();
    }
    setLocation(key, coords) {
        console.log(key);
        this.geoFire.set(key, coords)
            .then(_ => console.log('location updated'))
            .catch(err => console.log("Location setting Error : " + err));
    }
}
GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"])); };
GeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoService, factory: GeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ItineraryService {
    constructor(http) {
        this.http = http;
        this.apiEndPoint = 'http://localhost:3000';
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
ItineraryService.ɵfac = function ItineraryService_Factory(t) { return new (t || ItineraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItineraryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItineraryService, factory: ItineraryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItineraryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"]], styles: [".task-card[_ngcontent-%COMP%] {\r\n    margin: 25px;\r\n    padding: 10px 30px 10px 30px;\r\n    border-radius: 15px;\r\n    width: auto;\r\n    min-width: 340px;\r\n    background-color: rgba(0, 0, 0, 0.205);\r\n    box-shadow: 8px 8px 6px -6px rgb(168, 168, 168);\r\n    z-index: 100;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.label-btn[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 350;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.text-card-area[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    background-color: #298E69;\r\n    color: white;\r\n    border-radius: 10px;\r\n    \r\n    box-shadow: 3px 8px 6px -6px rgb(104, 104, 104);\r\n    z-index: 10;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%]:active {\r\n    box-shadow: inset 0px 0px 5px #2b2b2b;\r\n    outline: none;\r\n}\r\n\r\n.text-area[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n    min-width: 190px;\r\n    font-size: 12px;\r\n    font-weight: 350;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.map[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhLXRhc2stY2FyZC90YS10YXNrLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBR3RDLCtDQUErQztJQUMvQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBR2hDLCtDQUErQztJQUMvQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YS10YXNrLWNhcmQvdGEtdGFzay1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jYXJkIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggOHB4IDZweCAtNnB4IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggNnB4IC02cHggcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxhYmVsLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dC1jYXJkLWFyZWEge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5OEU2OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBwYWRkaW5nOiA3cHggMTBweCAwcHggMTBweDsgKi9cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDhweCA2cHggLTZweCByZ2IoMTA0LCAxMDQsIDEwNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCA4cHggNnB4IC02cHggcmdiKDEwNCwgMTA0LCAxMDQpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDhweCA2cHggLTZweCByZ2IoMTA0LCAxMDQsIDEwNCk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOUM4OTI7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggIzJiMmIyYjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWFyZWEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"], data: { animation: [
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CaAgentsTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.email);
} }
class CaAgentsTableComponent {
    constructor(formControllService, http) {
        this.formControllService = formControllService;
        this.http = http;
        this.grades = this.formControllService.grades;
        this.grades = this.formControllService.grades;
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/marks').subscribe((postData) => {
            this.grades = postData['data'];
        });
        this.formControllService.updatedgrade.subscribe((form) => {
            this.grades.push(form);
        });
    }
}
CaAgentsTableComponent.ɵfac = function CaAgentsTableComponent_Factory(t) { return new (t || CaAgentsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CaAgentsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaAgentsTableComponent, selectors: [["app-ca-agents-table"]], decls: 10, vars: 1, consts: [[1, "tables"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary"]], template: function CaAgentsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CaAgentsTableComponent_tr_9_Template, 8, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n    font-family: FontAwesome;\r\n}\r\n\r\n.tables[_ngcontent-%COMP%] {\r\n    margin: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhLWFnZW50cy10YWJsZS9jYS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhLWFnZW50cy10YWJsZS9jYS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaGVybyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMCAjYjBjMWQ5O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbn1cclxuXHJcbi50YWJsZXMge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaAgentsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ca-agents-table',
                templateUrl: './ca-agents-table.component.html',
                styleUrls: ['./ca-agents-table.component.css']
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TaAgentsTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r1.email);
} }
class TaAgentsTableComponent {
    constructor(formControllService, http) {
        this.formControllService = formControllService;
        this.http = http;
        this.grades = this.formControllService.maxGrades;
        this.grades = this.formControllService.maxGrades;
    }
    ngOnInit() {
        this.http.get('http://localhost:3000/marks/max').subscribe((postData) => {
            this.grades = postData['data'];
        });
        this.formControllService.updatedMaxgrade.subscribe((form) => {
            this.grades.push(form);
        });
    }
}
TaAgentsTableComponent.ɵfac = function TaAgentsTableComponent_Factory(t) { return new (t || TaAgentsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TaAgentsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaAgentsTableComponent, selectors: [["app-ta-agents-table"]], decls: 10, vars: 1, consts: [[1, "tables"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "btn btn-small btn-secondary"]], template: function TaAgentsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaAgentsTableComponent_tr_9_Template, 8, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".search-hero[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    box-shadow: 0 10px 40px 0 #b0c1d9;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n    font-family: FontAwesome;\r\n}\r\n\r\n.tables[_ngcontent-%COMP%] {\r\n    margin: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhLWFnZW50cy10YWJsZS90YS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhLWFnZW50cy10YWJsZS90YS1hZ2VudHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaGVybyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMCAjYjBjMWQ5O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbn1cclxuXHJcbi50YWJsZXMge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaAgentsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ta-agents-table',
                templateUrl: './ta-agents-table.component.html',
                styleUrls: ['./ta-agents-table.component.css']
            }]
    }], function () { return [{ type: _services_form_controll_service__WEBPACK_IMPORTED_MODULE_1__["FormControllService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    } }, decls: 7, vars: 1, consts: [["fxLayout", "row"], ["fxLayout", "column", "class", "sidebar", 4, "ngIf"], ["fxLayout", "column", 1, "boards"], ["fxLayout", "row", 1, "navbar"], [3, "burgerBooleanEmitter"], [1, "content"], ["fxLayout", "column", 1, "sidebar"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n\r\napp-nav-bar[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    width: 100%;\r\n    padding: 0px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    height: auto;\r\n    width: 300px;\r\n}\r\n\r\n.boards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1uYXYtYmFyIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYm9hcmRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Il19 */"] });
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
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 47, vars: 1, consts: [[1, "sidebar"], ["fxLayoutAlign", "center center", 1, "topic"], [1, "title"], [1, "buttons"], [1, "button", 2, "cursor", "pointer", 3, "click"], [1, "label"], [1, "button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "type", "button", "data-toggle", "collapse", "data-target", "#collapseTA", "aria-expanded", "false", "aria-controls", "collapseTA", 1, "collapse-button", 3, "click"], [1, "collaspe-icon"], ["id", "collapseSVGTA", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["id", "collapseTA", 1, "collapse"], [1, "sub-button"], [1, "sidebar-log-area", "center"], [1, "log-button", 2, "cursor", "pointer"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_27_listener() { return ctx.callScreen("Assign"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Assign Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_div_click_30_listener() { return ctx.CollapseChange("TA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Travel Itinerary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    background-color: #298E69;\r\n    height: 1000px;\r\n    width: 100%;\r\n    min-width: 240px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    color: rgb(255, 255, 255);\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.topic[_ngcontent-%COMP%] {\r\n    padding-top: 34px;\r\n    padding-bottom: 34px;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 350;\r\n    color: rgb(255, 255, 255);\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    padding-left: 20%;\r\n    padding-top: 13px;\r\n}\r\n\r\n.log-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\r\n\r\n.log-button[_ngcontent-%COMP%] {\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 30%);\r\n    padding-left: 33px;\r\n    padding-right: 33px;\r\n    padding-top: 7px;\r\n    padding-bottom: 4px;\r\n    vertical-align: middle;\r\n    border-radius: 30px;\r\n    background-color: #298E69;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.sidebar-log-area[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 200px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.sub-button[_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    padding-left: 30%;\r\n    padding-top: 11px;\r\n}\r\n\r\n.collaspe-icon[_ngcontent-%COMP%] {\r\n    padding-right: 15px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.collapse-button[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    padding-left: 7%;\r\n    padding-top: 13px;\r\n}\r\n\r\n.collapse-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\r\n\r\n.sub-button[_ngcontent-%COMP%]:hover {\r\n    background-color: #39C892;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4RTY5O1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRvcGljIHtcclxuICAgIHBhZGRpbmctdG9wOiAzNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM0cHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG59XHJcblxyXG4ubG9nLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlDODkyO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOUM4OTI7XHJcbn1cclxuXHJcbi5sb2ctYnV0dG9uIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAzMCUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzNweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4RTY5O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2ctYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnN1Yi1idXR0b24ge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxufVxyXG5cclxuLmNvbGxhc3BlLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jb2xsYXBzZS1idXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG59XHJcblxyXG4uY29sbGFwc2UtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOUM4OTI7XHJcbn1cclxuXHJcbi5zdWItYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOUM4OTI7XHJcbn0iXX0= */"], data: { animation: [
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