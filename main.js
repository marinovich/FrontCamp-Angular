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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\napp-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-top: auto;\n  padding: 0 15px;\n  flex-basis: 50px;\n  flex-shrink: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCwrR0FBbUc7RUFDbkcseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLCtHQUFtRztFQUNuRyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmFwcC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmbGV4LWJhc2lzOiA1MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news-api.service */ "./src/app/services/news-api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FrontCamp-Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/app-routing/app-routing.module */ "./src/app/modules/app-routing/app-routing.module.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-mode/edit-mode.component */ "./src/app/components/edit-mode/edit-mode.component.ts");
/* harmony import */ var _components_select_news_mode_select_news_mode_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/select-news-mode/select-news-mode.component */ "./src/app/components/select-news-mode/select-news-mode.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _pipes_news_filter_news_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/news-filter/news-filter.pipe */ "./src/app/pipes/news-filter/news-filter.pipe.ts");


















var appRoutes = [
    { path: 'add', component: _components_edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__["EditModeComponent"] },
    { path: 'edit/:i', component: _components_edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__["EditModeComponent"] },
    { path: 'more/:i', component: _components_select_news_mode_select_news_mode_component__WEBPACK_IMPORTED_MODULE_13__["SelectNewsModeComponent"] },
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_edit_mode_edit_mode_component__WEBPACK_IMPORTED_MODULE_12__["EditModeComponent"],
                _components_select_news_mode_select_news_mode_component__WEBPACK_IMPORTED_MODULE_13__["SelectNewsModeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_16__["ArticleComponent"],
                _pipes_news_filter_news_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["NewsFilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/article/article.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"i<8\" class=\"article\">\n  <div class=\"article__info\">\n    <div class=\"article__info-image\"></div>\n    <div class=\"article__info-main\">\n      <h4 class=\"article__info-main-title\">{{article.title}}</h4>\n      <p class=\"article__info-main-description\">{{article.description}}</p>\n      <a class=\"article__info-main-link\" [routerLink]=\"['/more', i]\">Read more...</a>\n    </div>\n  </div>\n  <div class=\"article__nav\">\n    <span class=\"article__nav-date\">{{article.publishedAt}}</span>\n    <div class=\"article__nav-buttons\">\n      <button mat-raised-button [routerLink]=\"['/edit', i]\">Edit</button>\n      <button mat-raised-button>Delete</button>\n    </div>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/components/article/article.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  list-style: none;\n  margin: 10px 0;\n  padding: 10px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  border-radius: 3px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .article__info {\n    display: flex;\n    overflow: hidden;\n    margin-right: 20px; }\n  .article__info-main {\n      display: flex;\n      flex-direction: column;\n      overflow: hidden; }\n  .article__info-main-title {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n  .article__info-main-description {\n        line-height: 1.4; }\n  .article__info-main-link {\n        color: #444444;\n        text-decoration: none;\n        margin-top: auto; }\n  .article__info-main-link:hover {\n        color: #000000;\n        text-decoration: underline; }\n  .article__info-image {\n      width: 60px;\n      height: 60px;\n      border: 1px #000000 solid;\n      flex-shrink: 0;\n      margin-right: 10px; }\n  .article__nav {\n    height: 100%;\n    flex-shrink: 0; }\n  .article__nav-buttons {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n  .article__nav-buttons .mat-raised-button {\n        font-size: 12px;\n        line-height: 20px;\n        font-weight: normal;\n        margin: 3px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFFaEIsY0FBYztFQUNkLGFBQWE7RUFDYixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwrR0FBbUcsRUFBQTtFQUVuRztJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFFbEI7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGdCQUFnQixFQUFBO0VBRWhCO1FBQ0UsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix1QkFBdUIsRUFBQTtFQUd6QjtRQUNFLGdCQUFnQixFQUFBO0VBR2xCO1FBQ0UsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBQTtFQUdsQjtRQUNFLGNBQWM7UUFDZCwwQkFBMEIsRUFBQTtFQUk5QjtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQUl0QjtJQUNFLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFFZDtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsNkJBQTZCLEVBQUE7RUFIOUI7UUFNRyxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLy8gYm9yZGVyOiAxcHggIzAwMDAwMCBzb2xpZDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuICAmX19pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgJi1tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIH1cblxuICAgICAgJi1saW5rIHtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgIH1cblxuICAgICAgJi1saW5rOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBib3JkZXI6IDFweCAjMDAwMDAwIHNvbGlkO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAmLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgJiAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ArticleComponent.prototype, "i", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/components/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-mode/edit-mode.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-mode/edit-mode.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"userFormGroup\" class=\"edit-container\">\n  <div class=\"edit-container__wrapper\">\n    <mat-form-field>\n      <input matInput placeholder=\"Heading\" required [formControl]=\"headingControl\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Short description\" [formControl]=\"shortDescriptionControl\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea rows=\"11\" matInput placeholder=\"Content\" [formControl]=\"contentControl\" required></textarea>\n    </mat-form-field>\n  </div>\n  <div class=\"edit-container__wrapper\">\n    <div class=\"edit-container__radio-wrapper\">\n\n      <mat-form-field class=\"edit-container__radio-input\">\n        <input matInput placeholder=\"Image\" [formControl]=\"imageSourceControl\">\n      </mat-form-field>\n    </div>\n\n    <mat-form-field class=\"edit-container__radio-input\">\n      <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"Date\" [formControl]=\"dateControl\">\n      <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n      <mat-datepicker #myDatepicker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"edit-container__radio-input\">\n      <input matInput placeholder=\"Author\" [formControl]=\"authorControl\">\n    </mat-form-field>\n\n    <mat-form-field class=\"edit-container__radio-input\">\n      <input matInput placeholder=\"Source URL (https://...)\" [formControl]=\"sourceURLControl\" type=\"url\" pattern=\"https://.*\" required>\n    </mat-form-field>\n\n    <div class=\"edit-container__button-block\">\n      <button mat-raised-button routerLink=\"/\">Cancel</button>\n      <button mat-raised-button routerLink=\"/\" (click)=\"submit()\" [disabled]=\"!this.userFormGroup.valid\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-mode/edit-mode.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-mode/edit-mode.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-container {\n  display: flex;\n  flex-direction: row;\n  width: 600px;\n  height: 400px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 25px auto; }\n  .edit-container__wrapper {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 50%;\n    padding: 15px;\n    justify-content: space-between; }\n  .edit-container__wrapper > * {\n      width: 100%; }\n  .edit-container__radio-wrapper {\n    display: flex;\n    flex-direction: column; }\n  .edit-container__radio {\n    text-align: right; }\n  .edit-container__radio > * {\n      margin-left: 10px; }\n  .edit-container__button-block {\n    text-align: right;\n    padding-bottom: 10px; }\n  .edit-container__button-block > * {\n      margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL2VkaXQtbW9kZS9lZGl0LW1vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0dBQW1HO0VBQ25HLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QixFQUFBO0VBTC9CO01BUUcsV0FBVyxFQUFBO0VBSWY7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFHeEI7SUFDRSxpQkFBaUIsRUFBQTtFQURsQjtNQUlHLGlCQUFpQixFQUFBO0VBSXJCO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBO0VBRnJCO01BS0csaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtbW9kZS9lZGl0LW1vZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG5cbiAgJl9fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICYgPiAqIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICZfX3JhZGlvLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICZfX3JhZGlvIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2J1dHRvbi1ibG9jayB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/edit-mode/edit-mode.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-mode/edit-mode.component.ts ***!
  \*************************************************************/
/*! exports provided: EditModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeComponent", function() { return EditModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news-api.service */ "./src/app/services/news-api.service.ts");




var EditModeComponent = /** @class */ (function () {
    function EditModeComponent(newsApiService) {
        var _this = this;
        this.newsApiService = newsApiService;
        this.headingControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.shortDescriptionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.imageSourceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.dateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.authorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.sourceURLControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.saveButtonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.cancelButtonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.userFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            heading: this.headingControl,
            shortDescription: this.shortDescriptionControl,
            content: this.contentControl,
            imageSource: this.imageSourceControl,
            date: this.dateControl,
            author: this.authorControl,
            sourceURL: this.sourceURLControl,
            saveButton: this.saveButtonControl,
            cancelButton: this.cancelButtonControl,
        });
        this.submit = function () {
            var formGroupData = _this.userFormGroup.getRawValue();
            var localArticle = {
                content: formGroupData.content,
                url: formGroupData.sourceURL,
                author: formGroupData.author,
                description: formGroupData.shortDescription,
                publishedAt: formGroupData.date.toISOString(),
                title: formGroupData.heading,
                urlToImage: formGroupData.imageSource,
            };
            _this.newsApiService.setLocalNews(localArticle);
        };
    }
    EditModeComponent.prototype.ngOnInit = function () { };
    EditModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-mode',
            template: __webpack_require__(/*! ./edit-mode.component.html */ "./src/app/components/edit-mode/edit-mode.component.html"),
            styles: [__webpack_require__(/*! ./edit-mode.component.scss */ "./src/app/components/edit-mode/edit-mode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_3__["NewsApiService"]])
    ], EditModeComponent);
    return EditModeComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Footer</span>\n<a href=\"https://newsapi.org\" target=\"_blank\" class=\"footer__link\">Powered by News API</a>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer__link {\n  color: #000000;\n  text-decoration: none; }\n\n.footer__link:hover {\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgJl9fbGluayB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJl9fbGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header__info\">\n  <div class=\"header__logo\">\n    <span class=\"header__logo-image\"></span>\n    <span class=\"header__logo-text\">Aggregator Logo</span>\n  </div>\n  <div class=\"header__login\">\n    <button mat-raised-button class=\"header__login-button\">Log In</button>\n  </div>\n</div>\n<mat-toolbar *ngIf=\"!!this.selectedSource\" class=\"header__caption\">\n  <h2>{{this.selectedSource.name}}</h2>\n</mat-toolbar>\n<div *ngIf=\"this.router.url === '/'\" class=\"header__navigation\">\n  <mat-select\n    placeholder=\"Select\"\n    class=\"header__navigation-select\"\n    [ngModel]=\"selectedSource\"\n    (ngModelChange)=\"onChange($event)\"\n    [disabled]=\"this.checked\"\n  >\n    <mat-option *ngFor=\"let source of sources\" [value]=\"source\">{{source.name}}</mat-option>\n  </mat-select>\n  <div class=\"header__navigation-input-wrapper\">\n    <mat-form-field>\n      <input matInput placeholder=\"Type your text...\" [(ngModel)]=\"data\">\n    </mat-form-field>\n    <button mat-raised-button (click)=\"filterArticles()\">Filter</button>\n  </div>\n  <mat-checkbox (change)=\"toggle($event)\">Only created by me</mat-checkbox>\n  <button mat-raised-button routerLink=\"/add\" (click)=\"addArticle()\">Add Article</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom-width: 0;\n  padding: 10px 15px; }\n\n.header__logo {\n  display: flex;\n  align-items: center; }\n\n.header__logo-image {\n    height: 20px;\n    width: 20px;\n    border: 1px #444444 solid;\n    margin-right: 10px; }\n\n.header__caption {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px; }\n\n.header__navigation {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.header__navigation-select {\n    max-width: 130px; }\n\n.header__navigation-input-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; }\n\n.header__navigation-input-wrapper mat-form-field {\n      margin-right: 5px;\n      padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFbkI7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUVmO0lBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7O0FBSnBCO01BT0csaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICZfX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuXG4gICZfX2xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCAjNDQ0NDQ0IHNvbGlkO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2NhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAmX19uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxNXB4O1xuXG4gICAgJi1zZWxlY3Qge1xuICAgICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICB9XG5cbiAgICAmLWlucHV0LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news-api.service */ "./src/app/services/news-api.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, newsApiService) {
        var _this = this;
        this.router = router;
        this.newsApiService = newsApiService;
        this.addArticle = function () {
            _this.newsApiService.selectLocalNews();
            _this.selectedSource = _this.newsApiService.getSelectedSource();
        };
        this.toggle = function (event) {
            _this.checked = event.checked;
            if (event.checked) {
                _this.previousSource = _this.selectedSource;
                _this.newsApiService.selectLocalNews();
                _this.selectedSource = _this.newsApiService.getSelectedSource();
            }
            else {
                _this.selectedSource = _this.previousSource;
                _this.newsApiService.updateSelectedSource.emit(_this.selectedSource);
            }
        };
        this.filterArticles = function () {
            _this.newsApiService.applyFilter(_this.data);
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsApiService.getSources();
        this.newsApiService.updatedSourcesData.subscribe(function (sources) { return _this.sources = sources; }, function (error) { return console.error(error); });
    };
    HeaderComponent.prototype.onChange = function (source) {
        this.selectedSource = source;
        this.newsApiService.updateSelectedSource.emit(source);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_3__["NewsApiService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <ul class=\"main__list\">\n    <app-article *ngFor=\"let article of articles | newsFilter: (filter); let i=index\" [i]=\"i\" [article]=\"article\"></app-article>\n  </ul>\n  <button *ngIf=\"!!this.articles.length\" mat-raised-button class=\"main__button\">Load More</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 20px auto; }\n  .main__list {\n    margin-bottom: 20px; }\n  .main__button {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0UsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgJl9fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news-api.service */ "./src/app/services/news-api.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(newsApiService) {
        this.newsApiService = newsApiService;
        this.articles = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsApiService.updateArticlesData.subscribe(function (articles) { return _this.articles = articles; }, function (error) { return console.error(error); });
        this.newsApiService.updateFilter.subscribe(function (filter) { return _this.filter = filter; }, function (error) { return console.error(error); });
        this.newsApiService.getArticles(this.newsApiService.getSelectedSource());
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/select-news-mode/select-news-mode.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/select-news-mode/select-news-mode.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article\">\n  <div class=\"article__info\">\n    <div class=\"article__info-image\"></div>\n    <div class=\"article__info-main\">\n      <h3 class=\"article__info-main-title\">{{article.title}}</h3>\n      <p class=\"article__info-main-description\">{{article.description}}</p>\n      <span class=\"article__nav-date\">{{article.publishedAt}}</span>\n    </div>\n  </div>\n  <div class=\"article__nav\">\n    <div class=\"article__nav-buttons\">\n      <button mat-raised-button routerLink=\"/\">Edit</button>\n      <button mat-raised-button routerLink=\"/\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/select-news-mode/select-news-mode.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/select-news-mode/select-news-mode.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  list-style: none;\n  width: 600px;\n  margin: 10px auto;\n  padding: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  border-radius: 3px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .article__info {\n    display: flex;\n    overflow: hidden;\n    margin-right: 20px; }\n  .article__info-main {\n      display: flex;\n      flex-direction: column;\n      overflow: hidden; }\n  .article__info-main-title {\n        margin-bottom: 20px; }\n  .article__info-main-description {\n        margin-bottom: 20px; }\n  .article__info-main-link {\n        color: #444444;\n        text-decoration: none;\n        margin-top: auto; }\n  .article__info-main-link:hover {\n        color: #000000;\n        text-decoration: underline; }\n  .article__info-image {\n      width: 90px;\n      height: 90px;\n      border: 1px #000000 solid;\n      flex-shrink: 0;\n      margin-right: 20px; }\n  .article__nav {\n    height: 100%;\n    flex-shrink: 0; }\n  .article__nav-buttons {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n  .article__nav-buttons > * {\n        margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvRnJvbnRDYW1wLUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC1uZXdzLW1vZGUvc2VsZWN0LW5ld3MtbW9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQiwrR0FBbUcsRUFBQTtFQUVuRztJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFFbEI7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGdCQUFnQixFQUFBO0VBRWhCO1FBQ0UsbUJBQW1CLEVBQUE7RUFHckI7UUFDRSxtQkFBbUIsRUFBQTtFQUdyQjtRQUNFLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZ0JBQWdCLEVBQUE7RUFHbEI7UUFDRSxjQUFjO1FBQ2QsMEJBQTBCLEVBQUE7RUFJOUI7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixjQUFjO01BQ2Qsa0JBQWtCLEVBQUE7RUFJdEI7SUFDRSxZQUFZO0lBQ1osY0FBYyxFQUFBO0VBRWQ7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDZCQUE2QixFQUFBO0VBSDlCO1FBTUcsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC1uZXdzLW1vZGUvc2VsZWN0LW5ld3MtbW9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuICAmX19pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgJi1tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmLWxpbmsge1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAmLWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pbWFnZSB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIGJvcmRlcjogMXB4ICMwMDAwMDAgc29saWQ7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gIH1cblxuICAmX19uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgICYtYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/select-news-mode/select-news-mode.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/select-news-mode/select-news-mode.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectNewsModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNewsModeComponent", function() { return SelectNewsModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_mockData_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/mockData/articles */ "./src/app/mockData/articles.ts");




var SelectNewsModeComponent = /** @class */ (function () {
    function SelectNewsModeComponent(router) {
        this.router = router;
    }
    SelectNewsModeComponent.prototype.ngOnInit = function () {
        this.i = +this.router.snapshot.paramMap.get('i');
        this.article = src_app_mockData_articles__WEBPACK_IMPORTED_MODULE_3__["articles"][this.i];
    };
    SelectNewsModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-news-mode',
            template: __webpack_require__(/*! ./select-news-mode.component.html */ "./src/app/components/select-news-mode/select-news-mode.component.html"),
            styles: [__webpack_require__(/*! ./select-news-mode.component.scss */ "./src/app/components/select-news-mode/select-news-mode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SelectNewsModeComponent);
    return SelectNewsModeComponent;
}());



/***/ }),

/***/ "./src/app/constants/index.ts":
/*!************************************!*\
  !*** ./src/app/constants/index.ts ***!
  \************************************/
/*! exports provided: API_KEY, API_VERSION, BASE_URL, SERVER_URL, CustomErrorType, ResponseStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorType", function() { return CustomErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseStatus", function() { return ResponseStatus; });
var API_KEY = '7719cc235c3c4a4381f84089ece47f5f';
var API_VERSION = 'v2';
var BASE_URL = 'https://newsapi.org';
var SERVER_URL = 'https://mysterious-peak-89016.herokuapp.com';
var CustomErrorType;
(function (CustomErrorType) {
    CustomErrorType["DEFAULT_ERROR"] = "DEFAULT_ERROR";
    CustomErrorType["NEWS_API_ERROR"] = "NEWS_API_ERROR";
})(CustomErrorType || (CustomErrorType = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["OK"] = "ok";
    ResponseStatus["ERROR"] = "error";
})(ResponseStatus || (ResponseStatus = {}));


/***/ }),

/***/ "./src/app/mockData/articles.ts":
/*!**************************************!*\
  !*** ./src/app/mockData/articles.ts ***!
  \**************************************/
/*! exports provided: articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articles", function() { return articles; });
var articles = [
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "John Parkinson",
        title: "Negotiators hope to salvage border security talks ahead of Friday shutdown deadline",
        description: "",
        url: "https://abcnews.go.com/Politics/negotiators-hope-salvage-border-security-talks-ahead-friday/story?id=60992744",
        urlToImage: "https://s.abcnews.com/images/Politics/border-security-file-gty-jef-190211_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T20:25:00Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Emily Shapiro",
        title: "Michelle Carter, convicted in texting suicide case, is headed to jail",
        description: "Michelle Carter was convicted of involuntary manslaughter in 2017.",
        url: "https://abcnews.go.com/US/michelle-carter-convicted-texting-suicide-case-headed-jail/story?id=60991290",
        urlToImage: "https://s.abcnews.com/images/US/michelle-carter-2017-ap-ps-190211_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T19:14:00Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Meghan Keneally",
        title: "380 Southern Baptist church officials and volunteers faced abuse allegations, explosive report states",
        description: "",
        url: "https://abcnews.go.com/US/380-southern-baptist-church-officials-volunteers-faced-abuse/story?id=60991388",
        urlToImage: null,
        publishedAt: "2019-02-11T18:57:34Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Bill Hutchinson",
        title: "Thousands of Denver public school teachers go on strike in fight for higher pay",
        description: "Denver public school teachers left their classrooms and formed picket lines.",
        url: "https://abcnews.go.com/US/thousands-denver-public-school-teachers-strike-fight-higher/story?id=60991291",
        urlToImage: "https://s.abcnews.com/images/US/strike-2-ap-er-190211_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T17:25:47Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Cheyenne Haslett",
        title: "Presidential candidate Amy Klobuchar refutes Trump questioning whether climate change is real",
        description: "President Donald Trump reacted to Sen. Amy Klobuchar's announcement in snowy Minnesota by questioning global warming.",
        url: "https://abcnews.go.com/Politics/presidential-candidate-amy-klobuchar-refutes-trump-questioning-climate/story?id=60981137",
        urlToImage: "https://s.abcnews.com/images/Politics/klobuchar-11-ap-er-190210_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T15:02:00Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "The Associated Press",
        title: "Indonesian executioner for IS killed in Syria",
        description: "",
        url: "https://abcnews.go.com/International/wireStory/indonesian-executioner-killed-syria-60990132",
        urlToImage: null,
        publishedAt: "2019-02-11T12:46:46Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Morgan Winsor",
        title: "Nearly 100 children dead as world's 2nd-largest Ebola outbreak surpasses 800 cases",
        description: "The second-largest, second-deadliest Ebola outbreak in history has claimed the lives of nearly 100 children so far.",
        url: "https://abcnews.go.com/International/100-children-dead-worlds-2nd-largest-ebola-outbreak/story?id=60988438",
        urlToImage: "https://s.abcnews.com/images/International/ebola-crisis-2014-4-gty-thg-180712_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T11:09:00Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "Max Golembo",
        title: "Major storm targeting Midwest, Northeast",
        description: "A major system from the West is making its way east.",
        url: "https://abcnews.go.com/US/major-storm-targeting-midwest-northeast/story?id=60988865",
        urlToImage: "https://s.abcnews.com/images/US/weather-katu-190211_hpMain_16x9_992.jpg",
        publishedAt: "2019-02-11T11:02:39Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "The Associated Press",
        title: "Strong storm brings damage - and snow - to Hawaii",
        description: "",
        url: "https://abcnews.go.com/US/wireStory/strong-storm-brings-damage-snow-hawaii-60988672",
        urlToImage: null,
        publishedAt: "2019-02-11T10:13:08Z",
        content: null
    },
    {
        source: {
            id: "abc-news",
            name: "ABC News"
        },
        author: "By GARY D. ROBERTSON Associated Press",
        title: "Congressman Walter Jones Jr. of North Carolina dies at 76",
        description: "",
        url: "https://abcnews.go.com/Politics/wireStory/congressman-walter-jones-jr-north-carolina-dies-76-60981545",
        urlToImage: null,
        publishedAt: "2019-02-11T00:12:48Z",
        content: null
    }
];


/***/ }),

/***/ "./src/app/modules/app-routing/app-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/app-routing/app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules.slice(),
            exports: modules.slice(),
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/news-filter/news-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/pipes/news-filter/news-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: NewsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFilterPipe", function() { return NewsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsFilterPipe = /** @class */ (function () {
    function NewsFilterPipe() {
    }
    NewsFilterPipe.prototype.transform = function (articles, filter) {
        if (filter === void 0) { filter = ''; }
        return articles.filter(function (article) { return article.title.includes(filter); });
    };
    NewsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'newsFilter'
        })
    ], NewsFilterPipe);
    return NewsFilterPipe;
}());



/***/ }),

/***/ "./src/app/services/news-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/news-api.service.ts ***!
  \**********************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants/index.ts");




var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        var _this = this;
        this.http = http;
        this.updatedSourcesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateSelectedSource = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateArticlesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sources = [{ id: 'local', name: 'Local News' }];
        this.articlesMap = new WeakMap();
        this.localNews = [];
        this.getSources = function () {
            _this.sources.length > 1
                ? _this.updatedSourcesData.emit(_this.sources)
                : _this.http.get("https://newsapi.org/v2/sources?apiKey=" + src_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_KEY"])
                    .forEach(function (response) {
                    var _a;
                    var sources = response.sources;
                    (_a = _this.sources).push.apply(_a, sources);
                    _this.updatedSourcesData.emit(_this.sources);
                });
        };
        this.getArticles = function (source) {
            if (!source) {
                return;
            }
            if (source.id === 'local') {
                _this.articlesMap.set(source, _this.localNews);
            }
            _this.articlesMap.has(source)
                ? _this.updateArticlesData.emit(_this.articlesMap.get(source))
                : _this.http.get("https://newsapi.org/v2/top-headlines?sources=" + source.id + "&apiKey=" + src_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_KEY"])
                    .forEach(function (response) {
                    var articles = response.articles;
                    _this.articlesMap.set(source, articles);
                    _this.updateArticlesData.emit(articles);
                });
        };
        this.getSelectedSource = function () { return _this.selectedSource; };
        this.setLocalNews = function (article) {
            _this.localNews.push(article);
            _this.updateArticlesData.emit(_this.localNews);
        };
        this.selectLocalNews = function () {
            _this.selectedSource = _this.sources.find(function (source) { return source.id === 'local'; });
            _this.updateSelectedSource.emit(_this.selectedSource);
        };
        this.applyFilter = function (filter) {
            _this.updateFilter.emit(filter);
        };
        this.updateSelectedSource.subscribe(function (source) {
            _this.selectedSource = source;
            _this.getArticles(_this.selectedSource);
        }, function (error) { return console.error(error); });
    }
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexander/FrontCamp-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map