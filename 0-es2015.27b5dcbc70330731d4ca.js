(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/account2.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/account2.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>Account2 page</h1>\n  <a routerLink=\"/account2/profile2\">Profile2</a><br>\n  <a routerLink=\"/account2/dashboard2\">Dashboard2</a><br>\n  <button class=\"btn btn-primary\" (click)=\"logout()\">Log out</button>\n\n  <ul *ngFor=\"let dt of data\">\n    <li>Email: {{ dt.email }}</li>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./src/app/shared/layout/account2/account2-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layout/account2/account2-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: Account2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account2RoutingModule", function() { return Account2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account2.component */ "./src/app/shared/layout/account2/account2.component.ts");




const routes = [
    {
        path: '',
        component: _account2_component__WEBPACK_IMPORTED_MODULE_3__["Account2Component"],
        children: [
            {
                path: 'profile2',
                loadChildren: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./profile2/profile2.module */ "./src/app/shared/layout/account2/profile2/profile2.module.ts")).then(m => m.Profile2Module)
            },
            {
                path: 'dashboard2',
                loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./dashboard2/dashboard2.module */ "./src/app/shared/layout/account2/dashboard2/dashboard2.module.ts")).then(m => m.Dashboard2Module)
            }
        ]
    }
];
let Account2RoutingModule = class Account2RoutingModule {
};
Account2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Account2RoutingModule);



/***/ }),

/***/ "./src/app/shared/layout/account2/account2.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/layout/account2/account2.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvYWNjb3VudDIvYWNjb3VudDIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/layout/account2/account2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/account2/account2.component.ts ***!
  \**************************************************************/
/*! exports provided: Account2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account2Component", function() { return Account2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authen.service */ "./src/app/shared/services/authen.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/shared/services/api.service.ts");




let Account2Component = class Account2Component {
    constructor(auth, apiSer) {
        this.auth = auth;
        this.apiSer = apiSer;
    }
    ngOnInit() {
        this.apiSer.get(_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].users, { page: 2 }).subscribe(e => {
            // console.log(e);
            this.data = e.data;
        });
        this.apiSer.getAssets('../../../../assets/events.json').subscribe(e => {
            console.log(e);
        });
        this.apiSer.get(_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].users).subscribe(e => {
            // console.log(e);
            // this.data = e.data;
        });
    }
    logout() {
        this.auth.logout();
    }
};
Account2Component.ctorParameters = () => [
    { type: _services_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
Account2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/account2/account2.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account2.component.scss */ "./src/app/shared/layout/account2/account2.component.scss")).default]
    })
], Account2Component);



/***/ }),

/***/ "./src/app/shared/layout/account2/account2.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/account2/account2.module.ts ***!
  \***********************************************************/
/*! exports provided: Account2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account2Module", function() { return Account2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _account2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account2-routing.module */ "./src/app/shared/layout/account2/account2-routing.module.ts");
/* harmony import */ var _account2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account2.component */ "./src/app/shared/layout/account2/account2.component.ts");





let Account2Module = class Account2Module {
};
Account2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account2_component__WEBPACK_IMPORTED_MODULE_4__["Account2Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _account2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Account2RoutingModule"]
        ]
    })
], Account2Module);



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ENDPOINT, API_DOMAIN, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT", function() { return ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const ENDPOINT = {
    users: 'users',
    register: 'register'
};
const API_DOMAIN = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    /**
   * Get api
   * @param url : path from ENDPOINT
   * @param params : ex: {key: value}
   */
    get(url, params) {
        return this.http.get(API_DOMAIN + url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
    * Post api
    * @param url : path from ENDPOINT
    * @param params : ex: {key: value}
    */
    post(url, params) {
        return this.http.post(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
    * Put api
    * @param url : path from ENDPOINT
    * @param params : ex: {key: value}
    */
    put(url, params) {
        return this.http.put(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
    * Get file from assets folder
    * @param url : path from assets folder
    */
    getAssets(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
    * Get api with full response
    * include: headers, body, ...
    * @param url : string
    */
    getConfigResponse(url) {
        return this.http.get(API_DOMAIN + url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
    * Handle error from Response
    * @param error: any
    */
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=0-es2015.27b5dcbc70330731d4ca.js.map