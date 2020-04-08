(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/http/http.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/http/http.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>http works!</p>\n");

/***/ }),

/***/ "./src/app/shared/layout/http/http-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/http/http-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HttpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRoutingModule", function() { return HttpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _http_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.component */ "./src/app/shared/layout/http/http.component.ts");




const routes = [
    {
        path: '',
        component: _http_component__WEBPACK_IMPORTED_MODULE_3__["HttpComponent"]
    }
];
let HttpRoutingModule = class HttpRoutingModule {
};
HttpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HttpRoutingModule);



/***/ }),

/***/ "./src/app/shared/layout/http/http.component.scss":
/*!********************************************************!*\
  !*** ./src/app/shared/layout/http/http.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaHR0cC9odHRwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/layout/http/http.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/http/http.component.ts ***!
  \******************************************************/
/*! exports provided: HttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpComponent", function() { return HttpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HttpComponent = class HttpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HttpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-http',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./http.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/http/http.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./http.component.scss */ "./src/app/shared/layout/http/http.component.scss")).default]
    })
], HttpComponent);



/***/ }),

/***/ "./src/app/shared/layout/http/http.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/http/http.module.ts ***!
  \***************************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-routing.module */ "./src/app/shared/layout/http/http-routing.module.ts");
/* harmony import */ var _http_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.component */ "./src/app/shared/layout/http/http.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let HttpModule = class HttpModule {
};
HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _http_component__WEBPACK_IMPORTED_MODULE_3__["HttpComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _http_routing_module__WEBPACK_IMPORTED_MODULE_2__["HttpRoutingModule"]
        ],
        providers: [],
        bootstrap: [_http_component__WEBPACK_IMPORTED_MODULE_3__["HttpComponent"]]
    })
], HttpModule);



/***/ })

}]);
//# sourceMappingURL=3-es2015.1f2e576dc9831e80e823.js.map