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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'tasks', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "<!-- Day 01\n    For Header Need Home  register login contact once login \nuser can see Then todo list and compeatil or not o can delete and change tasks -->\n\n<!-- Day 02 - improve Navbar \n         Buile Api Use Node Express Moogess \n    -  save Form data and get form data -->\n\n    <!-- At Tasks ->\n         ->  Nav it Will be allow View all Daily Tasks Search Fieter \"day weekly monstly \"\n         ->  Edit page \"update\"\" Delete\" -->\n<app-nav></app-nav>\n<section>\n    <router-outlet></router-outlet>\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid height100p banner\" id=\"home\">\n    <div class=\"container h100\">\n        <div class=\"contentBox h100\">\n            <div>\n                <h1>Let's Increase Your Productivity </h1>\n                <h3>____\" 1-3-5 \" RULE ____</h3>\n                <p>We Only have 24 hours per a day, no more no less.\n                    But so many tasks waiting for been accomplish. \n                    With 1-3-5 list means _ Frist, Only pick One Big and \n                    Important thing. <br> Second, Pick Three Medium and Less crucial things. <br> And Last, Write Five Small and much less important things. <br> At the End Unless you will have fulfilled 4 Task, See How Good and easy it is. <br> \n                    What will you waitting for, Let's Do IT ...  \n                </p>\n            </div>\n        </div>\n    </div>     \n</div>\n<section class=\"sec1\">\n    <div class=\"container\">\n        <!-- <div class=\"row\">\n           emty for now            \n        </div> -->\n\n        <div class=\"row\">\n          <div class=\"col-8 mx-auto\">\n            <form #form=\"ngForm\"  (submit)=\"onAddToDoSubmit()\" class=\"card\" style=\"width: 100%; background-color:floralwhite;\" novalidate>\n              <h1>Today, I WILL DO ...</h1>\n              <div class=\"form-group\" [class.has-error]= \"oneBigest.invalid && oneBigest.touched\" >\n                <label class=\"control-label\">(Step 1) What's Bigest To Do</label>\n                <input #oneBigest=\"ngModel\" required type=\"text\" class=\"form-control\" name=\"oneBigest\" [(ngModel)]=\"model.oneBigest\">\n                <div *ngIf=\"oneBigest.invalid && oneBigest.touched\" class=\"alert alert-danger\">Please write your Bigest thing to do</div>\n              </div>\n              <div class=\"form-group\">\n                  <label>(Step 2) What's Three Medium To Do</label>\n                  <input required type=\"text\" class=\"form-control\" name=\"med_1\" [(ngModel)]=\"model.med_1\">\n                  <div *ngIf=\"oneBigest.invalid && oneBigest.touched\" class=\"alert alert-danger\">Please write your Frist Medium thing to do</div>\n\n                  <input required type=\"text\" class=\"form-control\" name=\"med_2\" [(ngModel)]=\"model.med_2\">\n                  <div *ngIf=\"oneBigest.invalid && oneBigest.touched\" class=\"alert alert-danger\">Please write your Second Medium thing to do</div>\n\n                  <input required type=\"text\" class=\"form-control\" name=\"med_3\" [(ngModel)]=\"model.med_3\">\n                  <div *ngIf=\"oneBigest.invalid && oneBigest.touched\" class=\"alert alert-danger\">Please write your Third Medium thing to do</div>\n              </div>\n              <div class=\"form-group\">\n                  <label>(Step 3) What's Five Little ToDo (option)</label>\n                  <input type=\"text\" class=\"form-control\" name=\"sml_1\" [(ngModel)]=\"model.sml_1\">\n                  <input type=\"text\" class=\"form-control\" name=\"sml_2\" [(ngModel)]=\"model.sml_2\">\n                  <input type=\"text\" class=\"form-control\" name=\"sml_3\" [(ngModel)]=\"model.sml_3\">\n                  <input type=\"text\" class=\"form-control\" name=\"sml_4\" [(ngModel)]=\"model.sml_4\">\n                  <input type=\"text\" class=\"form-control\" name=\"sml_5\" [(ngModel)]=\"model.sml_5\">\n              </div>\n             <!-- <div class=\"col-sm-4\">\n                <div class=\"input-group mb-3\">\n                    <input  #newToDo (keyup.enter)=\"addToDo(newToDo.value)\" (blur)=\"addToDo(newToDo.value); newToDo.value='' \"  required type=\"text\"  class=\"form-control\" placeholder=\"Add One Bigest TODO\" aria-label=\"Add One Bigest Thing\" aria-describedby=\"button-addon2\"  name=\"bigesttodo\" ngModel>\n                    <div class=\"input-group-append\">\n                      <button  (click)=\"addToDo(newToDo.value)\" class=\"btn btn-danger\" type=\"button\" id=\"button-addon2\">Add</button>\n                    </div>\n\n                  </div>\n             </div>\n             <div class=\"col-sm-4\">\n                <div class=\"input-group mb-3\">\n                    <input #newMed (keyup.enter)=\"AddMed(newMed.value)\" (blur)=\"AddMed(newMed.value); newMed.value='' \" type=\"text\" class=\"form-control\" placeholder=\"Add Three Medium TODO\" aria-label=\"Add Medium Things\" aria-describedby=\"button-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-warning\" (click)=\"AddMed(newMed.value)\" type=\"button\" id=\"button-addon2\">Add</button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"input-group mb-3\">\n                        <input #newFiveThings (keyup.enter)=\"AddFiveThings(newFiveThings.value)\" (blur)=\"AddFiveThings(newFiveThings.value); newFiveThings.value='' \" type=\"text\" class=\"form-control\" placeholder=\"Add Five Little TODO\" aria-label=\"Add Five Little Things\" aria-describedby=\"button-addon2\">\n                        <div class=\"input-group-append\">\n                          <button class=\"btn btn-info\" type=\"button\" id=\"button-addon2\">Add</button>\n                        </div>\n                      </div>\n                </div> -->\n                <button class=\"btn btn-primary\" type=\"submit\"\n                 [disabled]=\"form.invalid\">Add ToDo</button> \n              </form>\n            </div>\n        </div>\n      <!-- Model: {{model | json}} \n      <br> \n      Angular: {{form.value | json}}\n\n      <h3> Class Name </h3>\n      <h4>{{oneBigest.invalid}}</h4> -->\n\n<!-- Show List -->\n\n        <div class=\"row\">\n                <div class=\"col-sm-4\">\n                     <ul class=\"list-group\">\n                         <li class=\"list-group-item list-group-item-danger\" *ngFor=\"let OneToDo of AddOneToDo\">{{OneToDo}}</li>\n                     </ul>\n                </div>\n                <div class=\"col-sm-4\">\n                     <ul class=\"list-group\">\n                         <li class=\"list-group-item list-group-item-warning\" *ngFor=\"let med of addMeds\">{{med}}</li>\n                     </ul>\n                </div>\n                <div class=\"col-sm-4\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item list-group-item-info\" *ngFor=\"let fivethings of addFiveThings\">{{fivethings}}</li>\n                        </ul>\n                </div>\n        </div>\n    </div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform {\n  background-color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtemhvdS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9Ub0RvMTM1L3RvZG8xMzUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todolist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todolist.model */ "./src/app/models/todolist.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.model = new _models_todolist_model__WEBPACK_IMPORTED_MODULE_1__["ToDoModel"]('', '', '', '', '', '', '', '', '');
        this.url = 'http://localhost:3000/todo';
        // const httpOptions = {
        //   headers: new HttpHeader({
        //     'Content-Type': 'application/json'
        //   });
        // };
        this.title = 'todo135';
    }
    // AddOneToDo = [];
    // addMeds = [];
    // addFiveThings = [];
    // msg = '';
    // nCnt = 0;
    // nCnt2 = 0;
    // nCnt3 = 0;
    HomeComponent.prototype.onAddToDoSubmit = function () {
        // tslint:disable-next-line:prefer-const
        var data = {
            tOne: this.model.oneBigest,
            tMed_1: this.model.med_1,
            tMed_2: this.model.med_2,
            tMed_3: this.model.med_3,
            tSmall_1: this.model.sml_1,
            tSmall_2: this.model.sml_2,
            tSmall_3: this.model.sml_3,
            tSmall_4: this.model.sml_4,
            tSmall_5: this.model.sml_5
        };
        this.http.post(this.url, data)
            .subscribe(function (response) {
            console.log(response);
        });
        // console.log(this.model.oneBigest);
        // console.log(this.model.med_1);
        // console.log(this.model.med_2);
        // console.log(this.model.med_3);
        // const data = this.model;
        // this.http.post(this.url, data)
        //  .subscribe( response => {
        //    console.log(response);
        //  });
    };
    // addToDo(newToDo: string) {
    //   this.nCnt = this.nCnt + 1 ;
    //   if ((this.nCnt) === 3 ) {
    //       // this.msg = `Please Only Add One Bigest TODO`;
    //       alert('Please only add One Bigest ToDo');
    //   } else if (newToDo) {
    //        this.AddOneToDo.push(newToDo);
    //   }
    // }
    // AddMed(newMed: string) {
    //  this.nCnt2 = this.nCnt2 + 1;
    //   if ((this.nCnt2) === 5 ) {
    //    // this.msg = `Please Only Add Three Mid TODO`;
    //     alert('Please only add Three Med ToDo');
    //     // save to database;
    //   } else if (newMed) {
    //        this.addMeds.push(newMed);
    //   }
    // }
    // AddFiveThings(newFiveThings: string) {
    //  // this.nCnt3 = this.nCnt3 + 1;
    //   if ((newFiveThings)) {
    //     this.addFiveThings.push(newFiveThings);
    //   }
    // }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/todolist.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/todolist.model.ts ***!
  \******************************************/
/*! exports provided: ToDoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoModel", function() { return ToDoModel; });
var ToDoModel = /** @class */ (function () {
    function ToDoModel(oneBigest, med_1, med_2, med_3, sml_1, sml_2, sml_3, sml_4, sml_5) {
        this.oneBigest = oneBigest;
        this.med_1 = med_1;
        this.med_2 = med_2;
        this.med_3 = med_3;
        this.sml_1 = sml_1;
        this.sml_2 = sml_2;
        this.sml_3 = sml_3;
        this.sml_4 = sml_4;
        this.sml_5 = sml_5;
    }
    return ToDoModel;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n         <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n          \n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <ul class=\"navbar-nav ml-lg-auto\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <!-- <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          Treatments\n                        </a>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                          <a class=\"dropdown-item\" href=\"#\">Traditional Thai</a>\n                          <a class=\"dropdown-item\" href=\"#\">Deep Tissue</a>\n                          <a class=\"dropdown-item\" href=\"#\">Relaxation Massage</a>\n                          <a class=\"dropdown-item\" href=\"#\">Combination</a>\n                          <a class=\"dropdown-item\" href=\"#\">Aromatherapy Oil</a>\n                          <a class=\"dropdown-item\" href=\"#\">Reflexology-Foot</a>\n                        </div>\n                      </li> -->\n                <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"tasks\">Tasks</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#OurTeam\">Our Team</a>\n                </li> -->\n                <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#Gifts\">Gift Vouchers</a>\n                </li> -->\n                <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#contact\">Contact</a>\n                        <!-- DropDwon menu Make online Booking so on  -->\n                </li>\n              </ul>  \n            </div>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-item\">\n    {{name}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://localhost:3000/todo?email=william@com.au';
        http.get(this.url)
            .subscribe(function (response) {
            console.log(response);
            _this.todos = response;
        });
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoComponent);
    return TodoComponent;
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

module.exports = __webpack_require__(/*! /Users/williamzhou/Documents/MyProjects/ToDo135/todo135/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map