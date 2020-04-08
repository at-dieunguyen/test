(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/dashboard2/dashboard2.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/dashboard2/dashboard2.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard2 works!</p>\n");

/***/ }),

/***/ "./src/app/shared/layout/account2/dashboard2/dashboard2-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/layout/account2/dashboard2/dashboard2-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: Dashboard2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2RoutingModule", function() { return Dashboard2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2.component */ "./src/app/shared/layout/account2/dashboard2/dashboard2.component.ts");




const routes = [
    {
        path: '',
        component: _dashboard2_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Component"]
    }
];
let Dashboard2RoutingModule = class Dashboard2RoutingModule {
};
Dashboard2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Dashboard2RoutingModule);



/***/ }),

/***/ "./src/app/shared/layout/account2/dashboard2/dashboard2.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layout/account2/dashboard2/dashboard2.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvYWNjb3VudDIvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/layout/account2/dashboard2/dashboard2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/layout/account2/dashboard2/dashboard2.component.ts ***!
  \***************************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Dashboard2Component = class Dashboard2Component {
    constructor() { }
    ngOnInit() {
    }
};
Dashboard2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/dashboard2/dashboard2.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard2.component.scss */ "./src/app/shared/layout/account2/dashboard2/dashboard2.component.scss")).default]
    })
], Dashboard2Component);



/***/ }),

/***/ "./src/app/shared/layout/account2/dashboard2/dashboard2.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/account2/dashboard2/dashboard2.module.ts ***!
  \************************************************************************/
/*! exports provided: Dashboard2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Module", function() { return Dashboard2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2-routing.module */ "./src/app/shared/layout/account2/dashboard2/dashboard2-routing.module.ts");
/* harmony import */ var _dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard2.component */ "./src/app/shared/layout/account2/dashboard2/dashboard2.component.ts");





let Dashboard2Module = class Dashboard2Module {
};
Dashboard2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Dashboard2RoutingModule"]
        ]
    })
], Dashboard2Module);



/***/ })

}]);
//# sourceMappingURL=1-es2015.b7d94650c0b8bbe25b0b.js.map