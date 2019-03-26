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

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about_us\" class=\"about-us_wrapper\">\n            <!-- add_flex__nowrap\n            flex_jcontent_between\n            flex__align-items_start\"> -->\n\n  <h2 class=\"section_title\" i18n=\"@@sectionAboutUsTitle\">\n    About\n    <span>Us</span>\n  </h2>\n\n  <div class=\"section_content\" i18n=\"@@sectionAboutUsContent\">\n    MTC(Maita Travel Club) - the new Innovation Travel Program is a travel agency that market its own inventory . Our team works\n    round the clock to deliver excellent customer service and good results driven by creativity and strong knowledge rooted\n    in the travel services.\n  </div>\n\n  <div class=\"network\">\n    <img src=\"assets/content/network.png\" alt=\"Network Image\">\n\n    <div class=\"network__items\">\n      <div class=\"network__item item_1\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Jordan River</div>\n          <div class=\"item_country\">Jordan</div>\n        </div>\n      </div>\n      <!-- end of .item_1 -->\n\n      <div class=\"network__item item_2\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Tala Bay</div>\n          <div class=\"item_country\">Jordan</div>\n        </div>\n      </div>\n      <!-- end of .item_2 -->\n\n      <div class=\"network__item item_3\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Aqaba</div>\n          <div class=\"item_country\">Jordan</div>\n        </div>\n      </div>\n      <!-- end of .item_3 -->\n\n      <div class=\"network__item item_4\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Moon Island Camp</div>\n          <div class=\"item_country\">Egypt</div>\n        </div>\n      </div>\n      <!-- end of .item_4 -->\n\n      <div class=\"network__item item_5\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Sharm el Sheikh</div>\n          <div class=\"item_country\">Egypt</div>\n        </div>\n      </div>\n      <!-- end of .item_5 -->\n\n      <div class=\"network__item item_6\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Istanbul and Antalya</div>\n          <div class=\"item_country\">Turkey</div>\n        </div>\n      </div>\n      <!-- end of .item_6 -->\n\n      <div class=\"network__item item_7\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Mecca Medina</div>\n          <div class=\"item_country\">Arabia</div>\n        </div>\n      </div>\n      <!-- end of .item_7 -->\n\n      <div class=\"network__item item_8\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Wadi Rum</div>\n          <div class=\"item_country\">Jordan</div>\n        </div>\n      </div>\n      <!-- end of .item_8 -->\n\n      <div class=\"network__item item_9\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Dahab</div>\n          <div class=\"item_country\">Egypt</div>\n        </div>\n      </div>\n      <!-- end of .item_9 -->\n\n      <div class=\"network__item item_10\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">Nuweiba</div>\n          <div class=\"item_country\">Egypt</div>\n        </div>\n      </div>\n      <!-- end of .item_10 -->\n\n      <div class=\"network__item item_11\">\n        <div class=\"item_content\">\n          <div class=\"item_name\">St. Catherine Sinai</div>\n          <div class=\"item_country\">Egypt</div>\n        </div>\n      </div>\n      <!-- end of .item_11 -->\n\n      <div class=\"network__item item_12\">\n          <div class=\"item_content\">\n            <div class=\"item_name\">Taba</div>\n            <div class=\"item_country\">Egypt</div>\n          </div>\n        </div>\n        <!-- end of .item_12 -->\n\n      <div class=\"network__item item_13\">\n          <div class=\"item_content\">\n            <div class=\"item_name\">Petra</div>\n            <div class=\"item_country\">Jordan</div>\n          </div>\n        </div>\n        <!-- end of .item_13 -->\n\n    </div>\n    <!-- end of .network__items -->\n  </div>\n  <!-- end of .network -->\n\n</div>\n<!-- end of .about-us_wrapper -->\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.about-us_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 0 9.12vw 15.63vw 8.59vw;\n  margin-top: -9.4vw;\n  position: relative;\n  z-index: 1;\n  background-image: url('about_us_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top; }\n\n.about-us_wrapper .section_title,\n  .about-us_wrapper .section_content {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    top: 16vw;\n    z-index: 5;\n    text-align: left; }\n\n.about-us_wrapper .section_title {\n    margin-bottom: 4.22vw; }\n\n.about-us_wrapper .section_content {\n    margin-bottom: 4.22vw; }\n\n.about-us_wrapper .network {\n    width: 63.39vw;\n    height: auto;\n    margin: 21vw auto 0;\n    z-index: 10; }\n\n.about-us_wrapper .network img {\n      width: 93%;\n      height: auto;\n      margin-top: 4vw; }\n\n.about-us_wrapper .network__item {\n      width: 8.59vw;\n      height: 8.59vw;\n      position: absolute;\n      z-index: 20;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: center;\n      border: 2px dashed #fff;\n      border-radius: 50%;\n      text-align: center; }\n\n.about-us_wrapper .network__item:hover {\n        -webkit-transform: scale(1.25);\n                transform: scale(1.25);\n        transition: all 200ms ease-in; }\n\n.about-us_wrapper .network .item_name {\n      font-size: 1.25vmax;\n      color: #232323; }\n\n.about-us_wrapper .network .item_country {\n      font-size: 0.94vmax;\n      text-transform: uppercase;\n      color: #044b98; }\n\n.about-us_wrapper .network .item_1 {\n      left: 48vw;\n      bottom: 40vw; }\n\n.about-us_wrapper .network .item_2 {\n      left: 63vw;\n      bottom: 44.5vw; }\n\n.about-us_wrapper .network .item_3 {\n      left: 62vw;\n      bottom: 31vw; }\n\n.about-us_wrapper .network .item_4 {\n      left: 76vw;\n      bottom: 26vw; }\n\n.about-us_wrapper .network .item_5 {\n      width: 10vw;\n      height: 10vw;\n      left: 73vw;\n      bottom: 15vw; }\n\n.about-us_wrapper .network .item_6 {\n      left: 63.5vw;\n      bottom: 10vw; }\n\n.about-us_wrapper .network .item_7 {\n      width: 9.5vw;\n      height: 9.5vw;\n      left: 47vw;\n      bottom: 11vw; }\n\n.about-us_wrapper .network .item_8 {\n      left: 31.5vw;\n      bottom: 9vw; }\n\n.about-us_wrapper .network .item_9 {\n      left: 18vw;\n      bottom: 13vw; }\n\n.about-us_wrapper .network .item_10 {\n      left: 18.5vw;\n      bottom: 23.5vw; }\n\n.about-us_wrapper .network .item_11 {\n      width: 9.5vw;\n      height: 9.5vw;\n      left: 7.5vw;\n      bottom: 32vw; }\n\n.about-us_wrapper .network .item_12 {\n      left: 21.5vw;\n      bottom: 37vw; }\n\n.about-us_wrapper .network .item_13 {\n      left: 31vw;\n      bottom: 44vw; }\n\n@media all and (max-width: 1024px) {\n  .about-us_wrapper {\n    margin-top: -36vmin; }\n    .about-us_wrapper .section_title,\n    .about-us_wrapper .section_content {\n      width: 100%; }\n    .about-us_wrapper .section_title {\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
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

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header></page-header>\n<main-section></main-section>\n<section-maita-travel></section-maita-travel>\n<about-us></about-us>\n<our-story></our-story>\n<our-mission></our-mission>\n<our-services></our-services>\n<our-portfolio></our-portfolio>\n<contact-us></contact-us>\n<page-footer></page-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\nbody {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  font-family: \"Helvetica Neue LT Std 47 Light Condensed\";\n  font-size: 1.15vmax;\n  font-weight: 300;\n  line-height: 1.82; }\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.title = 'maita-travel';
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 50) {
            var element = document.getElementById('page_header');
            element.classList.add('sticky');
        }
        else {
            var element = document.getElementById('page_header');
            element.classList.remove('sticky');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "./src/app/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-section/main-section.component */ "./src/app/main-section/main-section.component.ts");
/* harmony import */ var _section_maita_travel_section_maita_travel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-maita-travel/section-maita-travel.component */ "./src/app/section-maita-travel/section-maita-travel.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/our-story/our-story.component.ts");
/* harmony import */ var _our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./our-mission/our-mission.component */ "./src/app/our-mission/our-mission.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/our-services/our-services.component.ts");
/* harmony import */ var _our_portfolio_our_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./our-portfolio/our-portfolio.component */ "./src/app/our-portfolio/our-portfolio.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-footer/page-footer.component */ "./src/app/page-footer/page-footer.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"],
                _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileMenuComponent"],
                _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__["MainSectionComponent"],
                _section_maita_travel_section_maita_travel_component__WEBPACK_IMPORTED_MODULE_6__["SectionMaitaTravelComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_8__["OurStoryComponent"],
                _our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_9__["OurMissionComponent"],
                _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_10__["OurServicesComponent"],
                _our_portfolio_our_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["OurPortfolioComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_13__["PageFooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"contact_us\"\n      class=\"contact-us_wrapper\n            add_flex__nowrap\n            flex_jcontent_start\n            flex__align-items_center\">\n\n  <h2 class=\"section_title\" i18n=\"@@sectionContactUsTitle\">Contact <span>Us</span></h2>\n\n  <div class=\"section_subtitle\n              main_flex__nowrap\n              flex__jcontent_between\n              flex__align-items_center\"\n      i18n=\"@@sectionContactUsSubtitle\">\n\n    by\n    <img src=\"assets/icons/phone_icon.png\" alt=\"Phone Icon\">\n    phone or\n    <img src=\"assets/icons/whatsapp_icon.png\" alt=\"Whatsapp Icon\">\n    whatsapp\n  </div>\n\n  <div class=\"phones\n              main_flex__nowrap\n              flex__jcontent_between\n              flex__align-items_start\">\n\n    <div class=\"column\n                add_flex__nowrap\n                flex__jcontent_start\n                flex__align-items_center\">\n\n      <p i18n=\"@@sectionContactUsFromInsideJordanText\">From Inside Jordan</p>\n\n      <div class=\"phone\">079 70 436 70</div>\n      <div class=\"phone\">06 200 36 37</div>\n    </div>\n    <!-- end of 1st column -->\n\n    <div class=\"column\n                add_flex__nowrap\n                flex__jcontent_start\n                flex__align-items_center\">\n        <p i18n=\"@@sectionContactUsFroumOtsideJordanText\">From Outside of Jordan</p>\n\n        <div class=\"phone\">00962 7 970 436 70</div>\n        <div class=\"phone\">00962 6 200 36 37</div>\n      </div>\n      <!-- end of 1st column -->\n  </div>\n  <!-- end of .phones -->\n\n  <div class=\"email\" i18n=\"@@sectionContactUsEmail\">\n    Email:\n    <a href=\"mailto:sales@maitatravel.com\">Sales@maitatravel.com</a>\n  </div>\n</div>\n<!-- end of ..contact-us_wrapper -->\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.contact-us_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 27vw 5vw 0 60vw;\n  margin-top: -45vw;\n  position: relative;\n  background-image: url('contact_us_bg.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: right top; }\n\n.contact-us_wrapper .section_title {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    z-index: 5;\n    text-align: center; }\n\n.contact-us_wrapper .section_subtitle {\n    margin-bottom: 2.92vw;\n    font-size: 0.94vmax;\n    text-transform: uppercase;\n    color: #044b98; }\n\n.contact-us_wrapper .section_subtitle img {\n      margin: 1vw; }\n\n.contact-us_wrapper .phones {\n    margin-bottom: 2.92vw; }\n\n.contact-us_wrapper .phones .column {\n      margin-right: 1.67vw; }\n\n.contact-us_wrapper .phones .column:last-child {\n        margin-right: 0; }\n\n.contact-us_wrapper .phones p {\n      font-size: 0.94vmax;\n      line-height: 2.22;\n      text-align: center;\n      color: #232323; }\n\n.contact-us_wrapper .phones .phone {\n      width: 12.08vw;\n      height: 3.44vw;\n      margin-bottom: 1.04vw;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border: 3px solid #ffdf00;\n      font-family: 'helveticaneuebold';\n      font-size: 1.15vmax;\n      font-weight: bold;\n      color: #232323; }\n\n.contact-us_wrapper .email {\n    margin-bottom: 4.3vw;\n    font-size: 5vmin; }\n\n@media all and (max-width: 1024px) {\n  .contact-us_wrapper {\n    padding-left: 25vw;\n    padding-right: 0;\n    background-image: url('contact_us_mobile_bg.png');\n    background-position: right bottom; }\n    .contact-us_wrapper .section_title {\n      width: 40vw; }\n    .contact-us_wrapper .section_subtitle {\n      font-size: 4vmin; }\n      .contact-us_wrapper .section_subtitle img {\n        margin: 1.6vmin; }\n    .contact-us_wrapper .phones {\n      margin-bottom: 2vmin; }\n      .contact-us_wrapper .phones .column {\n        margin-right: 2.5vmin; }\n      .contact-us_wrapper .phones p {\n        font-size: 4vmin; }\n      .contact-us_wrapper .phones .phone {\n        width: 33vmin;\n        height: 7.5vmin;\n        font-size: 3.75vmin; }\n    .contact-us_wrapper .email {\n      margin-bottom: 3.5vmin; } }\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/main-section/main-section.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-section/main-section.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section_wrapper\">\n  <div class=\"main-section_content\n              main_flex__nowrap\n              flex__jcontent_start\n              flex__align-items_end\">\n\n    <h1 i18n=\"@@sectionMainTitle\">A creative  travel  agency</h1>\n\n    <div class=\"slogan\" i18n=\"@@sectionMainSlogan\">\n      that you can <span>trust</span> because <br>\n      <span>trust</span> is mutual\n    </div>\n    <!-- end of .slogan -->\n  </div>\n  <!-- end of .main-section_content -->\n\n  <div class=\"socials\n              add_flex__nowrap\n              flex__jcontent_between\n              flex__align-items_baseline\">\n\n    <a href=\"https://web.facebook.com/Maitatravel/\" class=\"facebook_icon\n                      icon\"\n                target=\"_blank\">\n      <svg version=\"1.1\" id=\"\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 310 310\" style=\"enable-background:new 0 0 310 310;\" xml:space=\"preserve\">\n        <path id=\"XMLID_835_\" d=\"M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064\n          c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996\n          V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545\n          C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703\n          c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z\"/>\n      </svg>\n    </a>\n    <!-- end of .facebook_icon -->\n\n    <a href=\"https://twitter.com/maitatravel1\" class=\"twitter_icon\n                      icon\"\n                target=\"_blank\">\n      <svg version=\"1.1\" id=\"\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 310 310\" style=\"enable-background:new 0 0 310 310;\" xml:space=\"preserve\">\n        <path id=\"XMLID_827_\" d=\"M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73\n          c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783\n          c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598\n          C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467\n          c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977\n          c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889\n          c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597\n          c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961\n          c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895\n          c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367\n          c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998\n          C307.394,57.037,305.009,56.486,302.973,57.388z\"/>\n      </svg>\n    </a>\n    <!-- end of .twitter_icon -->\n\n    <a href=\"https://www.instagram.com/maitatravel/\" class=\"instagram_icon\n                      icon\"\n                target=\"_blank\">\n      <svg version=\"1.1\" id=\"\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 300 300\" style=\"enable-background:new 0 0 300 300;\" xml:space=\"preserve\">\n        <path id=\"XMLID_505_\" d=\"M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49\n          H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329\n          c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514\n          V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759\n          c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732\n          c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978\n          c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375\n          C210.542,117.105,183.561,90.978,150.283,90.978z\"/>\n      </svg>\n    </a>\n    <!-- end of .instagram_icon -->\n\n  </div>\n  <!-- end of .socials -->\n</div>\n<!-- end of .main-section_wrapper -->\n"

/***/ }),

/***/ "./src/app/main-section/main-section.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-section/main-section.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.main-section_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 35vw 9.12vw 0 8.59vw;\n  margin-top: -6vw;\n  position: relative;\n  z-index: 5;\n  background-image: url('main_section_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top; }\n\n.main-section_content h1 {\n  width: 20.05vw;\n  padding-bottom: 15.63vw;\n  font-family: 'helveticaneuebold';\n  font-size: 3.23vmax;\n  font-weight: bold;\n  font-stretch: expanded;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #044b98; }\n\n.main-section_content .slogan {\n  margin-left: -2.92vw;\n  margin-bottom: 16.15vw;\n  font-family: 'helveticaneuelight';\n  font-size: 1.72vmax;\n  font-stretch: extra-expanded;\n  line-height: 1.46;\n  color: #232323; }\n\n.main-section_content .slogan span {\n    font-family: 'helveticaneuebold';\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #044b98; }\n\n.socials {\n  width: 4.22vw;\n  height: 12.08vw;\n  padding: 1.3vw 1.04vw;\n  position: absolute;\n  top: 50%;\n  right: 2.29vw;\n  -webkit-transform: translate(0, -95%);\n          transform: translate(0, -95%);\n  border: 7px solid #ffdf00;\n  border-radius: 40px; }\n\n.socials .icon {\n    margin-bottom: 2.45vw;\n    fill: #044b98; }\n\n.socials .icon:last-child {\n      margin-bottom: 0; }\n\n.socials .icon:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.socials .icon svg {\n      width: 100%;\n      height: 100%; }\n\n@media all and (max-width: 1024px) {\n  .main-section_wrapper {\n    height: 115vmin;\n    padding-top: 95vmin;\n    margin-bottom: 10vmin;\n    display: flex;\n    flex-flow: column nowrap;\n    background-position: left top; }\n  .main-section_content {\n    margin-bottom: 0;\n    justify-content: space-between; }\n    .main-section_content h1 {\n      width: 50%;\n      font-size: 7.5vmin; }\n    .main-section_content .slogan {\n      width: 45%;\n      font-size: 4.3vmin; }\n  .socials {\n    width: 25vmin;\n    height: 25vmin;\n    padding-bottom: 5vmin;\n    margin: 0 auto;\n    flex-direction: row;\n    position: relative;\n    border: none; }\n    .socials .icon {\n      width: 5vmin;\n      height: auto; } }\n"

/***/ }),

/***/ "./src/app/main-section/main-section.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-section/main-section.component.ts ***!
  \********************************************************/
/*! exports provided: MainSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function() { return MainSectionComponent; });
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


var MainSectionComponent = /** @class */ (function () {
    function MainSectionComponent() {
    }
    MainSectionComponent.prototype.ngOnInit = function () {
    };
    MainSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-section',
            template: __webpack_require__(/*! ./main-section.component.html */ "./src/app/main-section/main-section.component.html"),
            styles: [__webpack_require__(/*! ./main-section.component.scss */ "./src/app/main-section/main-section.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Native
        }),
        __metadata("design:paramtypes", [])
    ], MainSectionComponent);
    return MainSectionComponent;
}());



/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"disable_page\"></div>\n<!-- end of .disable_page -->\n\n<div class=\"mobile_menu\">\n  <div class=\"container\">\n\n    <div class=\"mobile_languages\">\n      <ul class=\"add_flex__nowrap\n                 flex__jcontent_start\n                 flex__align-items_center\">\n\n        <li><a  class=\"selected\" href=\"#\">English</a></li>\n        <li><a dir=\"rtl\" href=\"#\">ﻰﺑﺮﻋ</a></li>\n      </ul>\n    </div>\n    <!-- end of languages -->\n\n    <nav class=\"main_menu\">\n\n      <ul class=\"add_flex__nowrap\n                flex__jcontent_between\n                flex__align-items_center\">\n\n        <li><a href=\"#\">about</a></li>\n        <li><a href=\"#\">story</a></li>\n        <li><a href=\"#\">mission</a></li>\n        <li><a href=\"#\">services</a></li>\n        <li><a href=\"#\">portfolio</a></li>\n        <li><a href=\"#\">contact us</a></li>\n\n      </ul>\n      <!-- end of ul -->\n\n    </nav>\n    <!-- end of .main_menu -->\n\n  </div>\n  <!-- end of .container -->\n</div>\n<!-- end of .mobile_menu -->\n"

/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.disable_page,\n.mobile_menu {\n  display: none; }\n\n.mobile_menu {\n  width: 100%;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.ts ***!
  \******************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
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

var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
    };
    MobileMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mobile-menu',
            template: __webpack_require__(/*! ./mobile-menu.component.html */ "./src/app/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/mobile-menu/mobile-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/our-mission/our-mission.component.html":
/*!********************************************************!*\
  !*** ./src/app/our-mission/our-mission.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"our_mission\" class=\"our-mission_wrapper\">\n  <h2 class=\"section_title\" i18n=\"@@sectionOurMissionTitle\">Our <span>Mission</span></h2>\n\n  <div class=\"section_content\" i18n=\"@@sectionOurMissionSlogan\">\n    To provide quality services that would exceed the expectations of our esteemed clients , focusing in building a strong long term relationship with our customers and clients and providing exceptional customer services by pursuing business through innovation and advanced technology.\n  </div>\n</div>\n<!-- end of .our-mission_wrapper -->\n"

/***/ }),

/***/ "./src/app/our-mission/our-mission.component.scss":
/*!********************************************************!*\
  !*** ./src/app/our-mission/our-mission.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.our-mission_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 0 9.12vw 15.63vw 8.59vw;\n  margin-top: -33.4vw;\n  position: relative;\n  background-image: url('our_mission_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top; }\n\n.our-mission_wrapper .section_title,\n  .our-mission_wrapper .section_content {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    top: 20vw;\n    z-index: 5;\n    text-align: left; }\n\n.our-mission_wrapper .section_title {\n    margin-bottom: 4.22vw; }\n\n.our-mission_wrapper .section_content {\n    margin-bottom: 54.69vw; }\n\n@media all and (max-width: 1024px) {\n  .our-mission_wrapper {\n    padding-top: 10vmin;\n    margin-top: -20vmin;\n    margin-bottom: 15vmin;\n    background-position: left 15vmin;\n    background-size: auto 245vmin; }\n    .our-mission_wrapper .section_content {\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/our-mission/our-mission.component.ts":
/*!******************************************************!*\
  !*** ./src/app/our-mission/our-mission.component.ts ***!
  \******************************************************/
/*! exports provided: OurMissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurMissionComponent", function() { return OurMissionComponent; });
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

var OurMissionComponent = /** @class */ (function () {
    function OurMissionComponent() {
    }
    OurMissionComponent.prototype.ngOnInit = function () {
    };
    OurMissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'our-mission',
            template: __webpack_require__(/*! ./our-mission.component.html */ "./src/app/our-mission/our-mission.component.html"),
            styles: [__webpack_require__(/*! ./our-mission.component.scss */ "./src/app/our-mission/our-mission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurMissionComponent);
    return OurMissionComponent;
}());



/***/ }),

/***/ "./src/app/our-portfolio/our-portfolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/our-portfolio/our-portfolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"our_portfolio\"\n      class=\"our-portfolio_wrapper\n            add_flex__nowrap\n            flex__jcontent_start\n            flex__align-items_start\">\n\n  <h2 class=\"section_title\" i18n=\"@@sectionOurPortfolioTitle\">Our <span>Portfolio</span></h2>\n\n  <div class=\"section_content\" i18n=\"@@sectionOurPortfolioContent\">\n    We are passionate about traveling which is why we excel at creating fabulous holiday experiences and from the moment you walk through our door we will assist you with your travel plans every steps of the way and will ensure your expectations are exceeded. We have the best destinations guides and services. We work with 700 tour operators.\n  </div>\n\n  <div class=\"partners\n              main_flex\n              flex__jcontent_start\n              flex__align-items_center\">\n\n    <img class=\"logo_1\" src=\"assets/icons/partner_logo_01.png\" alt=\"Partner Logo\">\n    <img class=\"logo_2\" src=\"assets/icons/partner_logo_02.png\" alt=\"Partner Logo\">\n    <img class=\"logo_3\" src=\"assets/icons/partner_logo_03.png\" alt=\"Partner Logo\">\n    <img class=\"logo_4\" src=\"assets/icons/partner_logo_04.png\" alt=\"Partner Logo\">\n    <img class=\"logo_5\" src=\"assets/icons/partner_logo_05.png\" alt=\"Partner Logo\">\n    <img class=\"logo_6\" src=\"assets/icons/partner_logo_06.png\" alt=\"Partner Logo\">\n    <img class=\"logo_7\" src=\"assets/icons/partner_logo_07.png\" alt=\"Partner Logo\">\n  </div>\n  <!-- end of .partners -->\n\n  <div class=\"programs_list\" i18n=\"@@sectionOurPortfolioProgramsList\">\n    *Beach Holidays , Business Travel , Cruise and Excursions,\n    Escorted Tours , City Breaks ,Flights , HoneyMoon , Taylormade Vacations , Weddings , Ski , Spa Holidays , Special Interest, Sports , Concerts , UK Break , Villas , and More.\n  </div>\n</div>\n<!-- end of .our-portfolio_wrapper -->\n"

/***/ }),

/***/ "./src/app/our-portfolio/our-portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/our-portfolio/our-portfolio.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.our-portfolio_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 5vw 9.12vw 15.63vw 8.59vw;\n  margin-top: -7vw;\n  position: relative;\n  background-image: url('our_portfolio_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top; }\n\n.our-portfolio_wrapper .section_title,\n  .our-portfolio_wrapper .section_content {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    top: 10vw;\n    z-index: 5;\n    text-align: left; }\n\n.our-portfolio_wrapper .section_title {\n    margin-bottom: 4.22vw; }\n\n.our-portfolio_wrapper .section_content {\n    margin-bottom: 14vw; }\n\n.our-portfolio_wrapper .partners {\n    margin-bottom: 8.59vw; }\n\n.our-portfolio_wrapper .partners img {\n      margin-right: 4.95vw;\n      margin-bottom: 2.92vw; }\n\n.our-portfolio_wrapper .partners .logo_1 {\n      width: 14.01vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_2 {\n      width: 12.03vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_3 {\n      width: 13.91vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_4 {\n      width: 16.04vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_5 {\n      width: 11.3vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_6 {\n      width: 20vw;\n      height: auto; }\n\n.our-portfolio_wrapper .partners .logo_7 {\n      width: 13.7vw;\n      height: auto; }\n\n.our-portfolio_wrapper .programs_list {\n    width: 33.33vw;\n    margin-bottom: 20.05vw;\n    align-self: flex-end;\n    font-size: 1.15vmax;\n    font-weight: normal;\n    line-height: 1.82;\n    text-align: right;\n    color: #232323; }\n\n@media all and (max-width: 1024px) {\n  .our-portfolio_wrapper {\n    padding-top: 15vmin; }\n    .our-portfolio_wrapper .section_title,\n    .our-portfolio_wrapper .section_content {\n      width: 85vw; }\n    .our-portfolio_wrapper .partners {\n      margin-bottom: 0; }\n      .our-portfolio_wrapper .partners img {\n        margin: 0 auto 10vw; }\n      .our-portfolio_wrapper .partners .logo_1,\n      .our-portfolio_wrapper .partners .logo_2,\n      .our-portfolio_wrapper .partners .logo_3,\n      .our-portfolio_wrapper .partners .logo_4,\n      .our-portfolio_wrapper .partners .logo_5,\n      .our-portfolio_wrapper .partners .logo_6,\n      .our-portfolio_wrapper .partners .logo_7 {\n        width: 65vw; }\n    .our-portfolio_wrapper .programs_list {\n      width: 85vw;\n      font-size: 3.15vmin; } }\n"

/***/ }),

/***/ "./src/app/our-portfolio/our-portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/our-portfolio/our-portfolio.component.ts ***!
  \**********************************************************/
/*! exports provided: OurPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPortfolioComponent", function() { return OurPortfolioComponent; });
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

var OurPortfolioComponent = /** @class */ (function () {
    function OurPortfolioComponent() {
    }
    OurPortfolioComponent.prototype.ngOnInit = function () {
    };
    OurPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'our-portfolio',
            template: __webpack_require__(/*! ./our-portfolio.component.html */ "./src/app/our-portfolio/our-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./our-portfolio.component.scss */ "./src/app/our-portfolio/our-portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurPortfolioComponent);
    return OurPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/our-services/our-services.component.html":
/*!**********************************************************!*\
  !*** ./src/app/our-services/our-services.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"our_services\"\n      class=\"our-services_wrapper\n            add_flex__nowrap\n            flex__jcontent_start\n            flex__align-items_center\">\n\n  <h2 class=\"section_title\" i18n=\"@@sectionOurServicesTitle\">Our <span>Services</span></h2>\n\n  <div class=\"section_remark\" i18n=\"@@sectionOurServicesRemark\">\n    We provide all the services according to the\n    needs of the traveler.\n  </div>\n  <!-- end of .section_remark -->\n\n  <div class=\"section_content\">\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n\n        <img src=\"assets/icons/camel_ride_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem1\">camel ride</h3>\n    </div>\n    <!-- end of Item 1 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/bus_tickets_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem2\">bus tickets</h3>\n    </div>\n    <!-- end of Item 2 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/airfares_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem3\">airfares</h3>\n    </div>\n    <!-- end of Item 3 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/cruises_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem4\">cruises</h3>\n    </div>\n    <!-- end of Item 4 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/hostels_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem5\">hostels</h3>\n    </div>\n    <!-- end of Item 5 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/camps_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem6\">camps</h3>\n    </div>\n    <!-- end of Item 6 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/hotels_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem7\">hotels</h3>\n    </div>\n    <!-- end of Item 7 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/water_sports_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem8\">water sports</h3>\n    </div>\n    <!-- end of Item 8 -->\n\n    <div class=\"section_content__item\n                add_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <img src=\"assets/icons/many_more_icon.png\" alt=\"Item Icon\">\n        <h3 i18n=\"@@sectionOurServicesItem9\">many more</h3>\n    </div>\n    <!-- end of Item 9 -->\n  </div>\n\n</div>\n<!-- end of .our-services_wrapper -->\n"

/***/ }),

/***/ "./src/app/our-services/our-services.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/our-services/our-services.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.our-services_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 0 27.6vw 15.63vw;\n  margin-top: -2.4vw;\n  position: relative; }\n\n.our-services_wrapper .section_title {\n    width: 100%;\n    height: auto;\n    margin-bottom: 4.22vw;\n    position: relative;\n    z-index: 5;\n    text-align: center; }\n\n.our-services_wrapper .section_remark {\n    margin-left: 22vw;\n    margin-bottom: 4.95vw;\n    padding-left: 0.5vw;\n    border-left: 1px solid #ffdf00; }\n\n.our-services_wrapper .section_content {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n    -ms-grid-rows: (1fr)[3];\n        grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 11.51vw;\n    grid-row-gap: 5vw; }\n\n.our-services_wrapper .section_content__item {\n      width: 10vw;\n      -ms-grid-row-align: end;\n          align-self: end; }\n\n.our-services_wrapper .section_content__item img {\n        margin: 0 auto; }\n\n.our-services_wrapper .section_content__item h3 {\n        font-family: 'helveticaneuebold';\n        font-size: 1.15vmax;\n        font-weight: bold;\n        line-height: 1.82;\n        text-transform: uppercase;\n        text-align: center;\n        color: #044b98; }\n\n@media all and (max-width: 1024px) {\n  .our-services_wrapper {\n    padding: 0 6vw; }\n    .our-services_wrapper .section_content {\n      -ms-grid-columns: 1fr;\n          grid-template-columns: 1fr;\n      -ms-grid-rows: (auto)[9];\n          grid-template-rows: repeat(9, auto); }\n      .our-services_wrapper .section_content__item {\n        width: 60vw;\n        justify-content: center; }\n        .our-services_wrapper .section_content__item img {\n          width: 30vmin;\n          height: auto; }\n        .our-services_wrapper .section_content__item h3 {\n          font-size: 5vmin; } }\n"

/***/ }),

/***/ "./src/app/our-services/our-services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-services/our-services.component.ts ***!
  \********************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
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

var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent() {
    }
    OurServicesComponent.prototype.ngOnInit = function () {
    };
    OurServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'our-services',
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/our-services/our-services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ }),

/***/ "./src/app/our-story/our-story.component.html":
/*!****************************************************!*\
  !*** ./src/app/our-story/our-story.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"our_story\" class=\"our-story_wrapper\">\n\n  <div class=\"our-story_image\">\n    <img src=\"assets/content/our_story_image.png\" alt=\"Our Story Image\">\n\n    <div class=\"network_staff\">\n      <div class=\"network_staff__item\n                  item_1\">\n        <img src=\"assets/content/network_ceo.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_1\"\n            i18n=\"@@sectionOurStoryQuote1\">\n          Thinks about strategy and collects the team together all the time\n        </div>\n      </div>\n      <!-- end of .item_1 -->\n\n      <div class=\"network_staff__item\n                  item_2\">\n        <img src=\"assets/content/network_sales_01.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_2\"\n            i18n=\"@@sectionOurStoryQuote2\">\n          If he could sell his own pants - someone possibly was\n          wearing them already\n        </div>\n      </div>\n      <!-- end of .item_2 -->\n\n      <div class=\"network_staff__item\n                  item_3\">\n        <img src=\"assets/content/network_project_director.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_3\"\n            i18n=\"@@sectionOurStoryQuote3\">\n          Descrypts thoughts of CEO and turn them into certain action\n        </div>\n      </div>\n      <!-- end of .item_3 -->\n\n      <div class=\"network_staff__item\n                  item_4\">\n        <img src=\"assets/content/network_financial_manager.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_4\"\n            i18n=\"@@sectionOurStoryQuote4\">\n          Loves big numbers and to spend money\n        </div>\n      </div>\n      <!-- end of .item_4 -->\n\n      <div class=\"network_staff__item\n                  item_5\">\n        <img src=\"assets/content/network_operations_manager.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_5\"\n            i18n=\"@@sectionOurStoryQuote5\">\n          All operations this guy make are clean and neatly like\n          at hospital\n        </div>\n      </div>\n      <!-- end of .item_5 -->\n\n      <div class=\"network_staff__item\n                  item_6\">\n        <img src=\"assets/content/network_sales_02.png\" alt=\"Network Member Image\">\n\n        <div class=\"quote\n                  quote_6\"\n            i18n=\"@@sectionOurStoryQuote6\">\n          Give him what to sell and he'll ask you if you have more\n        </div>\n      </div>\n      <!-- end of .item_6 -->\n    </div>\n    <!-- end of .network_staff -->\n  </div>\n\n  <h2 class=\"section_title\" i18n=\"@@sectionOurStoryTitle\">Our <span>Story</span></h2>\n\n  <div class=\"section_content\" i18n=\"@@sectionOurStoryContent1\">\n    Alma’Aitah Family has reach a number of 60,000 members in Jordan, the strength of our tribe had driven us to give our name the slogan “ A GOOD NAME WORTH MORE THAN GOLD “. We deliver integrity, honesty,\n    responsibility, dedication and business ethics.\n  </div>\n\n  <div class=\"section_content\" i18n=\"@@sectionOurStoryContent2\">\n    <strong>Mo’Ath Alma’Aitah</strong> a young entrepreneur came up with the idea to adventure himself to open a location to sell tickets for people that want to go to Neweba, Sharm El Sheik and tours around the triangle, but at that particular time he only had $ 300 USD. Not a lot of money for a tour agency. But hope, faith and PMA were his bigger tools to make it happened and those $ 300 USD became just the ramp to increased 1000 % his money to $ 30,000 JD’s. By working hard and intelligent, he accomplished in short time his goal to focus in his new challenge.\n  </div>\n\n</div>\n<!-- end of .our-story_wrapper -->\n"

/***/ }),

/***/ "./src/app/our-story/our-story.component.scss":
/*!****************************************************!*\
  !*** ./src/app/our-story/our-story.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.our-story_wrapper {\n  width: 100%;\n  height: 750px;\n  padding: 2vw 9.12vw 110vw 8.59vw;\n  margin-top: -10vw;\n  position: relative; }\n\n.our-story_wrapper .our-story_image {\n    width: 80.73vw;\n    height: auto;\n    position: absolute;\n    right: 0;\n    top: 3vw; }\n\n.our-story_wrapper .our-story_image img {\n      width: 100%;\n      height: auto; }\n\n.our-story_wrapper .section_title,\n  .our-story_wrapper .section_content {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    top: 16vw;\n    z-index: 5;\n    text-align: left; }\n\n.our-story_wrapper .section_title {\n    margin-bottom: 4.22vw; }\n\n.our-story_wrapper .section_content {\n    margin-bottom: 4.22vw; }\n\n.our-story_wrapper .network_staff__item {\n    position: absolute;\n    z-index: 7; }\n\n.our-story_wrapper .network_staff__item img {\n      width: 100%;\n      height: auto; }\n\n.our-story_wrapper .network_staff__item .quote {\n      width: 11.51vw;\n      height: 7.81vw;\n      padding: 2.3vw 0.5vw;\n      display: none;\n      top: -5vw;\n      right: 7vw;\n      position: absolute;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACUCAYAAAAXkyy+AAANL0lEQVR4nO3de3BU5R3G8S8LCSEETCAECBdRDCBaQBQFkQGFGYpgL7aDDhXrBaX2grZlbLVDq73YsaNt0Wnrdbx1HGpbKYpWh6pYpYiIiqhFEI1YVBABI+EWDP3jd5Zslt1kL+eye87zmTmTZLOXH8x58p7znve8b4dO029DfNURqHG2SqAH0NP5ehRQDlQ4W7mzdU14fQnQJeHnvUBTws+NwB5n2+1se4BPgR3AJ87XXcA2Z/vcxX+ftKNT0AWE1FHAIOBYYCDQF6h1thog5uJndaF1CLtn+fpmLHgfONuHwGbgHaAeC6u4SKHLTxkwBBjmbIOxoFUFWVSWYkAfZxud4vc7gXeBt4H1zrYB2OdXgWGj0GUuBtQBJwGjgOFYa+Zmq1WIqpwtMZDNWCv4JvAq8Aqw0Xlc2qHQpVcCjABOw4I2gtbnVlEWw1r0Y4EZzmONwGtYAFc53zelfHXEdVBHSit1wOnAWOBkrBNDcrMHWAO8AKzEDkkFtXQlwBjgTGAi1tEh7igHJjgbWCfNs8AzwGoi3ApGsaXrjO0I04Az0CFjEBqB54F/As8B+4Mtx19Raek6AeOBL2KtWkWw5UReV2CqszUCTwNPACuAgwHW5Yuwh64O+Cp2st8j4Fokta7AOc62A1gKLMZ6Q0MpjIeX5cB04CvAyIBrkdytBf4BPIZ1yoRGmEI3ADgfOBfoFnAt4p7PgIeBRcD7AdfiijCE7lRgNtb7GPYL1VHWjPV+PgC8GHAteSnWc7oOwCRgDjqEjIoY1gl2JnboeRewHDgUYE05KbbQxbAeyMuwThKJppHArVhny13YpYeiGYJWTIeXZwLzUNjkSBuBW7AL7wWvGFq6McBV6DBS0qvDWr61wO+xES8Fq5BDNxD4ITA56EKkaIwE7gGeAm7G7gssOIXY21eOHUYuQYGT3EzG9p8rKcBB64UWuinYiITLscHIIrkqwTrcHsP2q4JRKKGrARZix+M1Adci4dIL268WUiD7VtCh6wDMBB5Bh5LircnYfjYT2+8CE2RHSm/gl8C4AGsoGhdOGdp98qh+FSOP6Vm2ZGV9w8/+vHp7uucO7V9ZOmtSXfeJI2orvjCoR1nPmfes97PWAlYB/BS7/LQASPt/6KWgQjcFuB6bNUvacP0FY6pnTxlSNaC6ojT+2JKV9Q2pnju0f2Xpby4d1/vsMQOznREsaiZgdzJch/V0+srv0JUCP8aaeGnHffPPqp01qS6jmcVOH96ny6PXTTu6e3lpR6/rCokq7DzvL8CNwAG/PtjPc7q+2GBVBS4Dt3zrjN6ZBm5o/8rSdIFr2HNAE8m27Txsv/Rtqg6/WroJwK+xGY2lHUP7V5ZeMeOE6uTHb1j08tZbH1m3c3vDvlZBuvb80dXJgXvjvR17F9y/euujq+obva43BE4AHgKuwaaP8JQfobsQmE/wPaVFY9akuiPOyW5Y9PLWdJ0nM049utXz39+++8CUax59Lzmc0qZK4A/ATcD9Xn6Ql6HrCPwEHU5mbeKI2lZzuDTsOfB5usCdc9qgrsmt3AP/2nBEaygZiQFXY5MI/wqP1njwqvXpCvwJBS4nA2sqWo3GWVe/I+0U5oP7di9NfuyljR/v9aKuCJmJ7b+eTGDlRUtXCdyOHSdLDhIvDwCMH96na9PSuYf/PxMPNasqOh/RefLwgqmDEn8umXH7Gx6VGmanA3cDc7EVjlzjdkvXC7gXBU7C4QRsf+7l5pu6Gbpa7AT0OBffUyRox+HyJQW3QleD3TY/wKX3Eykk/bH925UB026Ergq4E7vpVCSsBmLBy3vtwXxDV4EFbnC+hYgUgWOx4OXVq5lP6EqwsWvD8ilApMgMxfb7nG+yzid012ALJopEzWnY/p+TXEN3CbrwLdE2E8tB1nK5OD4WmxJPPHLuL56sb+v3G7bsOryg4oPLNzZoBEpgrsLWXX8hmxdlO9lsDfA3tOyUSNwO4OvAtkxfkM3hZUdsBLYCJ9KiB5aLjG8eziZ0lwOjs61IJAJGY/nISKahG5bNm4pE0FwyvHyWSehKsLu+NfmrSHqdyDAnmYTuErRSjkgm6oBL23tSe6Hri01NLSKZmYPlJq32QjcfKHOtHJHwK8Nyk1ZboTsFmOpqOSLRMBXLT0pthe5K92sRiYy0o7bShW48cJI3tYhEwigsR0dIF7pve1eLSGSkzFGq0I1B63uLuGEklqdWUoVutve1iETGEXlKDl0tMMmXUkSiYRJJM4klh+5rKR4TkdzFsFy1eiDRNP9qEYmMsxN/SAzdiWgaPREvDMDyBbQOnVo5Ee8czldi6KYEUIhIVBzOVzx0xwD9gqlFJBL6YTk7HLqxwdUiEhnjoCV0aUdEi4hrToaW0J3YxhNFxB0ngoWuGzqfE/FDP6B7DDg+6EpEImRYDE06JOKnuhjtTKIiIq6qVehE/NUnBvQJugqRCOkTA6qDrkIkQqpj5Ll+sohkpVsMTSYr4qeyGNA56CpEIqRUUzOI+OtQDNgfdBUiEdIYA/YFXYVIhDTFgN1BVyESIY0xYHvQVYhEyCcx4KOgqxCJkG0x4MOgqxCJkK0KnYi/NseAjUFXIRIhG2LA+qCrEImQTTGgAdgSdCUiEfARsDM+DOz1ICsRiYg10DIF35oACxGJilahWxlgISJRsRpaQvcu8EFwtYiE3mYsZ61W7VkWTC0ikfB0/JvE0D0RQCEiUfFU/JvE0K0D3ve/FpHQ2wK8Gv8h+c7xx/2tRSQSFgOH4j8kh+5hoNnXckTCrRlYkvhAcui2AMv9qkYkApaTdFNBqomJHvClFJFouDf5gVShWw2s9bwUkfBbC7yc/GC6Kfj+6G0tIpFwV6oH04VuBQldnCKStbXAM6l+0dZkswu9qUUkEm5O94u2QrcaeNL9WkRC72lSnMvFtTet+k1oMlqRbOwDbmzrCe2F7kPSnAyKSEp30M5MDJksIHI3mrxIJBObSHFdLlkmoWsCrgUO5lmQSJgdxHJyoL0nZrpU1n+xZlNEUrsDeCOTJ2azPt0dtNEjIxJhrwC3Z/rkbEJ3EJgP7Mi2IpEQ24nl4vNMX5DtSqzbgB+h239EwHJwNbA1mxflsvzxSjRaRQQsB1nPpJfrmuN3A3/N8bUiYbAYy0HWcg0dwA3AqjxeL1KsVgE/z/XF+YSuCbgSeCuP9xApNuux/b4p1zfIJ3Rg65XPAd7J831EikE9cBm23+cs39CBdZlehs1gKxJWHwCXYvt7XtwIHViX6Ry05JaE02bgm2R5aSAdt0IH9pdgNvC2i+8pErR3gYtwcZlwN0MHdvH8IjIcgyZS4N7EWrhtbr6p26ED2IUd+/7Hg/cW8cvzWAPi+rBHL0IH1rtzBfCQR+8v4qXFwHeAPV68ecfYkBlevC/Y3O3PYgEcB3Tw6oNEXNKMTVHyOxLWHnCbVy1dovuB72KHnSKF6lNgLnCf1x/kR+gA/g2chzpYpDC9CZyPT8uA+xU6sGt4s9F5nhSW54AL8HFtRj9DBzZ/xM+B7wMNPn+2SCrNZDCviZv8Dl3cMuBcfGrORdpwCtDJzw8MKnQAHwGXYy1fXgNIRfLQFTjZzw8MMnRg3bIPAV/CpqIWCcIUPz8s6NDFbQPmYed6Hwdci0TPNKDErw8rlNDFLQOmA3eSx02CIlmqxMfWrtBCBzb0ZiHwZeCpgGuR6LjYrw8qxNDFbcZui78YLccs3hsOTPDjgwo5dHGrgW8A30MLmYi3foAPmfBywLPb6rFp/+qBQUDPAGuRcOqJDdp4zcsPKYaWLlEz8Bh2YX0eHv/nSCTNAwZ4+QHFFrq4Q9h1vVnYDbPPoqnexR1dgN8Cnb36gGI6vExnC/A4sBQL3mCgNNCKpNj1AvrhUe95GEIX1wCsAB7EJknqCfQOtCIpZkOAMjwYHxym0MU1YfdH/R272H4AO0bvEmRR4ooGYH+arQT3Zyc4CeiO/TF3TYdO029z8/0KVSdgPDbc5yygPNhyJME+YDn2h3InFqxPnW0P8BktwcpUBdANC0zi1gc7dOztfF/rPK89S4EFuDRKKiqhS9QZmIgFcDwKYBD2YrMJLMM6wfYGWEsVcLSzDQaGYYeW1UnPexG4ChfuA41i6BJ1BsYAk7Ag9g20mnDbggXtOWzVm2xariBUA3XA8VgQ62gZJZWXqIcu2VBs5rKx2D1WOg/M3X5sLe4VWGumRWYcvt4xWwTecrZ7sRPzkcCp2An1COyGR0ltHzZYYQ02dG8thd+aBUKhS68JeMnZwAYS1GEBHIUNkB1E8Q4wyEczsAl4HVjnfN0AHAyyqGKh0GWumZaWcJHzWBl20j2MluP+Y7D7s8JiJzbQfJPz9W1sYURPZj+OAoUuP/FDquQxoJVY+AZhvWJ9se7pWqzLutBax21YR8f/nC3+/SZcWI9NWlPovLEL60R4JcXvOgE1WPiqnK0a6IGFtdzZuiV8n3hZo4zWw9z20TKF3CHsulYTNtnTbufnRuf7XVjAdgDbsakxdqDDQl/9H7+yZSarStGZAAAAAElFTkSuQmCC\");\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center top;\n      font-size: 1.04vmax;\n      text-align: center;\n      color: #fff; }\n\n.our-story_wrapper .network_staff .item_1 {\n    width: 8.59vw;\n    height: auto;\n    right: 43vw;\n    top: 56vw; }\n\n.our-story_wrapper .network_staff .item_1:hover > .quote_1 {\n      display: block; }\n\n.our-story_wrapper .network_staff .item_2 {\n    width: 9.69vw;\n    height: auto;\n    right: 24vw;\n    top: 64vw; }\n\n.our-story_wrapper .network_staff .item_2:hover > .quote_2 {\n      display: block; }\n\n.our-story_wrapper .network_staff .item_3 {\n    width: 8.5vw;\n    height: auto;\n    right: 4vw;\n    top: 56vw; }\n\n.our-story_wrapper .network_staff .item_3:hover > .quote_3 {\n      display: block; }\n\n.our-story_wrapper .network_staff .item_4 {\n    width: 8.59vw;\n    height: auto;\n    right: 50vw;\n    top: 69vw; }\n\n.our-story_wrapper .network_staff .item_4:hover > .quote_4 {\n      display: block; }\n\n.our-story_wrapper .network_staff .item_5 {\n    width: 11vw;\n    height: auto;\n    right: 12vw;\n    top: 74vw; }\n\n.our-story_wrapper .network_staff .item_5:hover > .quote_5 {\n      display: block; }\n\n.our-story_wrapper .network_staff .item_6 {\n    width: 11vw;\n    height: auto;\n    right: 35vw;\n    top: 80vw; }\n\n.our-story_wrapper .network_staff .item_6:hover > .quote_6 {\n      display: block; }\n\n@media all and (max-width: 1024px) {\n  .our-story_wrapper {\n    padding-bottom: 325vmin;\n    margin-bottom: 25vmin; }\n    .our-story_wrapper .our-story_image {\n      top: 10vw;\n      width: 100%; }\n    .our-story_wrapper .section_title,\n    .our-story_wrapper .section_content {\n      width: 100%; }\n    .our-story_wrapper .section_title {\n      margin-bottom: 120vmin; }\n    .our-story_wrapper .network_staff__item .quote {\n      width: 23.51vw;\n      height: 15.81vw;\n      padding-top: 4vw;\n      top: -13vw;\n      right: 10vw;\n      font-size: 2.25vmin; }\n    .our-story_wrapper .network_staff .item_1 {\n      width: 16vmin;\n      right: 55vw;\n      top: 65vw; }\n    .our-story_wrapper .network_staff .item_2 {\n      width: 18vmin;\n      right: 28vw;\n      top: 85vw; }\n    .our-story_wrapper .network_staff .item_3 {\n      width: 16.6vmin;\n      top: 73vw; }\n    .our-story_wrapper .network_staff .item_4 {\n      width: 16vmin;\n      right: 65vw;\n      top: 90vw; }\n    .our-story_wrapper .network_staff .item_5 {\n      width: 20vmin;\n      top: 100vw;\n      right: 5vw; }\n    .our-story_wrapper .network_staff .item_6 {\n      width: 20vw;\n      right: 40vw;\n      top: 110vw; } }\n"

/***/ }),

/***/ "./src/app/our-story/our-story.component.ts":
/*!**************************************************!*\
  !*** ./src/app/our-story/our-story.component.ts ***!
  \**************************************************/
/*! exports provided: OurStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryComponent", function() { return OurStoryComponent; });
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

var OurStoryComponent = /** @class */ (function () {
    function OurStoryComponent() {
    }
    OurStoryComponent.prototype.ngOnInit = function () {
    };
    OurStoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'our-story',
            template: __webpack_require__(/*! ./our-story.component.html */ "./src/app/our-story/our-story.component.html"),
            styles: [__webpack_require__(/*! ./our-story.component.scss */ "./src/app/our-story/our-story.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurStoryComponent);
    return OurStoryComponent;
}());



/***/ }),

/***/ "./src/app/page-footer/page-footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-footer/page-footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer_wrapper\n            main_flex\n            flex__jcontent_center\n            flex__align-items_center\"\n    i18n=\"@@footerContent\">\n  ©  2018 Maita travel all right receive\n</div>\n<!-- end of .page-footer_wrapper -->\n"

/***/ }),

/***/ "./src/app/page-footer/page-footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-footer/page-footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.page-footer_wrapper {\n  width: 100%;\n  height: 3.44vw;\n  background-color: #262626;\n  font-size: 0.83vmax;\n  color: #c2c2c2; }\n\n@media all and (max-width: 1024px) {\n  .page-footer_wrapper {\n    height: 15vmin;\n    font-size: 4vmin; } }\n"

/***/ }),

/***/ "./src/app/page-footer/page-footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-footer/page-footer.component.ts ***!
  \******************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
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

var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    PageFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-footer',
            template: __webpack_require__(/*! ./page-footer.component.html */ "./src/app/page-footer/page-footer.component.html"),
            styles: [__webpack_require__(/*! ./page-footer.component.scss */ "./src/app/page-footer/page-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header_wrapper\" id=\"page_header\">\n  <div class=\"logo\">\n    <img src=\"assets/icons/logo.png\" alt=\"Maita Travel Logo\">\n  </div>\n  <!-- end of .logo -->\n\n  <div class=\"languages\">\n    <ul>\n      <li><a  class=\"selected\" href=\"#\">English</a></li>\n      <li><a href=\"../maita-travel-ar/index.html\">ﻋﺮﺑﻰ</a></li>\n    </ul>\n  </div>\n  <!-- end of languages -->\n\n  <nav class=\"main_menu\n              main_flex__nowrap\n              flex__jcontent_between\n              flex__align-items_center\">\n\n    <div class=\"main_menu__left\">\n      <ul class=\"main_flex__nowrap\n                flex__jcontent_start\n                flex__align-items_center\">\n        <li><a href=\"./index.html#about_us\" i18n=\"@@mainMenuAboutItem\">about</a></li>\n        <li><a href=\"./index.html#our_story\" i18n=\"@@mainMenuStoryItem\">story</a></li>\n        <li><a href=\"./index.html#our_mission\" i18n=\"@@mainMenuMissionItem\">mission</a></li>\n      </ul>\n    </div>\n    <!-- end of .main_menu__left -->\n\n    <div class=\"main_menu__right\">\n      <ul class=\"main_flex__nowrap\n                flex__jcontent_end\n                flex__align-items_center\">\n        <li><a href=\"./index.html#our_services\" i18n=\"@@mainMenuServicesItem\">services</a></li>\n        <li><a href=\"./index.html#our_portfolio\" i18n=\"@@mainMenuPortfolioItem\">portfolio</a></li>\n        <li><a href=\"./index.html#contact_us\" i18n=\"@@mainMenuContactItem\">contact us</a></li>\n      </ul>\n    </div>\n    <!-- end of .main_menu__right -->\n  </nav>\n  <!-- end of .main_menu -->\n  <!-- <mobile-menu></mobile-menu> -->\n</div>\n<!-- end of .page-header_wrapper -->\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.page-header_wrapper {\n  padding: 1.3vw 9.12vw 0 8.59vw;\n  position: relative;\n  z-index: 10; }\n\n.sticky {\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  background-color: #30ACD8;\n  border-radius: 0 0 0 300px; }\n\n.sticky .logo {\n    width: 35vmin;\n    height: auto; }\n\n.logo {\n  width: 32.29vw;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-60%, 0);\n          transform: translate(-60%, 0);\n  z-index: 10; }\n\n.logo img {\n    width: 100%;\n    height: auto; }\n\n.languages ul,\n.main_menu ul {\n  list-style: none; }\n\n.languages {\n  margin-bottom: 1.04vw; }\n\n.languages ul {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    align-items: center; }\n\n.languages ul li {\n      padding-left: 1.3vw; }\n\n.languages ul li a {\n        font-family: 'helveticaneuelight';\n        font-size: 2.5vmin;\n        line-height: 1;\n        text-decoration: none;\n        color: #fff; }\n\n.languages ul li a.selected {\n          font-family: 'helveticaneuebold';\n          color: #fed90f; }\n\n.main_menu {\n  width: 100%; }\n\n.main_menu ul li a {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.94vmax;\n    font-weight: bold;\n    line-height: 1.85;\n    text-transform: uppercase;\n    text-decoration: none;\n    color: #232323; }\n\n.main_menu ul li a:hover {\n      text-decoration: underline; }\n\n.main_menu__left li {\n    margin-right: 2.6vw; }\n\n.main_menu__right li {\n    margin-left: 2.6vw; }\n\n@media all and (max-width: 1024px) {\n  .main_menu {\n    display: none; }\n  .logo {\n    width: 35vmin;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); }\n  .languages ul li a {\n    font-size: 3.5vmin; }\n  .sticky {\n    height: 8vmax; }\n    .sticky .logo {\n      width: 20vmin; } }\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PageHeaderComponent = /** @class */ (function () {
    // public fixed: boolean = false;
    function PageHeaderComponent(doc) {
        this.doc = doc;
    }
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "page-header",
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/page-header/page-header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/section-maita-travel/section-maita-travel.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/section-maita-travel/section-maita-travel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-maita-travel_wrapper\n            add_flex__nowrap\n            flex_jcontent_start\n            flex__align-items_end\">\n\n  <h2 class=\"section_title\" i18n=\"@@sectionMaitaTravelTitle\">Maita <span>Travel</span></h2>\n\n  <div class=\"section_content\" i18n=\"@@sectionMaitaTravelContent\">\n    Our team of professionals make a big difference in helping people to ensure that our customers will get to their destinies save and <span>secured</span>\n    Again our personnel is our most special asset in our company . “ Trust is our name “ . Our new way of handling traveling is what we make us different than the rest . Innovating the market and creating new concepts of traveling give us the confidence to explore and invest in our customers and clients.\n  </div>\n</div>\n<!-- end of .section-maita-travel_wrapper -->\n"

/***/ }),

/***/ "./src/app/section-maita-travel/section-maita-travel.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/section-maita-travel/section-maita-travel.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\na,\na:hover,\nbutton,\nbutton:hover,\n.anime {\n  transition: all 200ms linear;\n  cursor: pointer; }\n\nbody,\ndiv,\nul,\nli,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\n.main_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row wrap; }\n\n.main_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row nowrap; }\n\n.main_flex__nowrap_reverse {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: row-reverse nowrap; }\n\n.add_flex {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column wrap; }\n\n.add_flex__nowrap {\n  display: flex;\n  display: -webkit-flex;\n  flex-flow: column nowrap; }\n\n.flex__jcontent_between {\n  justify-content: space-between;\n  -webkit-justify-content: space-between; }\n\n.flex__jcontent_start {\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start; }\n\n.flex__jcontent_end {\n  justify-content: flex-end;\n  -webkit-justify-content: flex-end; }\n\n.flex__jcontent_center {\n  justify-content: center;\n  -webkit-justify-content: center; }\n\n.flex__jcontent_around {\n  justify-content: space-around;\n  -webkit-justify-content: space-around; }\n\n.flex__align-items_start {\n  align-items: flex-start;\n  -webkit-align-items: flex-start; }\n\n.flex__align-items_end {\n  align-items: flex-end;\n  -webkit-align-items: flex-end; }\n\n.flex__align-items_baseline {\n  align-items: baseline;\n  -webkit-align-items: baseline; }\n\n.flex__align-items_stretch {\n  align-items: stretch;\n  -webkit-align-items: stretch; }\n\n.flex__align-items_center {\n  align-items: center;\n  -webkit-align-items: center; }\n\n.flex__align-content_flex-start {\n  align-content: flex-start;\n  -webkit-align-content: flex-start; }\n\n.flex__align-content_flex-end {\n  align-content: flex-end;\n  -webkit-align-content: flex-end; }\n\n.flex__align-content_space-between {\n  align-content: space-between;\n  -webkit-align-content: space-between; }\n\n.flex__align-content_center {\n  align-content: center;\n  -webkit-align-content: center; }\n\n.flex__align-content_space-around {\n  align-content: space-around;\n  -webkit-align-content: space-around; }\n\n.flex__align-content_stretch {\n  align-content: stretch;\n  -webkit-align-content: stretch; }\n\n.section-maita-travel_wrapper {\n  width: 100%;\n  height: auto;\n  padding: 0 9.12vw 0 8.59vw;\n  margin-top: -18vw;\n  z-index: 4;\n  background-image: url('section_maita_travel_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top; }\n\n.section-maita-travel_wrapper .section_title,\n  .section-maita-travel_wrapper .section_content {\n    width: 34.64vw;\n    height: auto;\n    position: relative;\n    top: 20vw;\n    z-index: 5;\n    text-align: right; }\n\n.section-maita-travel_wrapper .section_title {\n    margin-bottom: 4.22vw; }\n\n.section-maita-travel_wrapper .section_content {\n    margin-bottom: 55.25vw; }\n\n@media all and (max-width: 1024px) {\n  .section-maita-travel_wrapper {\n    justify-content: space-between;\n    align-items: flex-start;\n    background-image: none; }\n    .section-maita-travel_wrapper .section_title,\n    .section-maita-travel_wrapper .section_content {\n      width: 85vw; }\n    .section-maita-travel_wrapper .section_title {\n      text-align: center; }\n    .section-maita-travel_wrapper .section_content {\n      margin-bottom: 60vmin;\n      text-align: left; } }\n"

/***/ }),

/***/ "./src/app/section-maita-travel/section-maita-travel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/section-maita-travel/section-maita-travel.component.ts ***!
  \************************************************************************/
/*! exports provided: SectionMaitaTravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionMaitaTravelComponent", function() { return SectionMaitaTravelComponent; });
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

var SectionMaitaTravelComponent = /** @class */ (function () {
    function SectionMaitaTravelComponent() {
    }
    SectionMaitaTravelComponent.prototype.ngOnInit = function () {
    };
    SectionMaitaTravelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-maita-travel',
            template: __webpack_require__(/*! ./section-maita-travel.component.html */ "./src/app/section-maita-travel/section-maita-travel.component.html"),
            styles: [__webpack_require__(/*! ./section-maita-travel.component.scss */ "./src/app/section-maita-travel/section-maita-travel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionMaitaTravelComponent);
    return SectionMaitaTravelComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MyData\Бизнес\Upwork\in progress\Maita Travel\maita-travel-en\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map