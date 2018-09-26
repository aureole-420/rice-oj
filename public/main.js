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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-problem-list></app-problem-list>  -->  <!-- 现在hardcode了problemlist-->\n\n<app-navigation-bar></app-navigation-bar>\n\n<router-outlet></router-outlet>   \n<!-- router的标准用法，把router当作一个component用 === router-outlet 是selector！是angular framework\n提供的selector！-->\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 /* import form module [()]=  two way binding, ()= one way binding*/








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_4__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__["NewProblemComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");



/*
为什么放在app下面？ ---- route 服务整个app，所以直接放在app里
跟restful api有点像，但前端没有crud （crud是对后端的）
*/
/* 内部是一个数组*/
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full' /* full 和 partial两种 */
    },
    {
        path: 'problems',
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"] /* 把path指向某个component，可以多次redirect to,最终总得resolve到一个上面去 */
    },
    {
        path: 'problems/:id',
        /* https://angular-2-training-book.rangle.io/handout/routing/routeparams.html  */
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes); /* 上面是路径的定义，这里是实施，传到angualr里面去 */


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n    #editor {\n      height: 600px;\n    }\n    .lang-select {\n      width: 100px;\n      margin-right: 10px;\n    }\n    header .btn {\n      margin: 0 5px;\n    }\n    footer .btn {\n      margin: 0 5px;\n}\n.editor-footer, .editor-header {\n      margin: 10px 0;\n    }\n.cursor {\n/*position:absolute;*/ background: rgba(0, 250, 0, 0.5); z-index: 40;\nwidth: 2px !important;\n} }"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <header class=\"editor-header\">\n      <div class=\"row\">\n        <select class=\"form-control pull-left lang-select\" name=\"language\"\n          [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n        <option *ngFor=\"let language of languages\" [value]=\"language\">\n          {{language}}\n        </option>\n        </select>\n        <!--reset button -->\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n          Reset\n        </button>\n  \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                You will lose current code in the editor, are you sure?\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                (click)=\"resetEditor()\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    \n    <div id=\"editor\">\n    </div><!-- This is the body -->\n    <div>{{output}}</div>\n\n\n    <footer class=\"editor-footer\">\n        <button type=\"button\" class=\"btn btn-success pull-right\" \n        (click)=\"submit()\">Submit Solution</button>\n    </footer>\n  </section>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = /** @class */ (function () {
    // inject CollaborationService
    function EditorComponent(collaboration, route, dataService) {
        this.collaboration = collaboration;
        this.route = route;
        this.dataService = dataService;
        this.languages = ['Java', 'Python', 'C++'];
        this.language = 'Java';
        this.output = '';
        this.defaultContent = {
            "Java": "public class Example {\n      public static void main(String[] args) {\n        // Type your Java code here.\n      }\n    }",
            "Python": "class Solution:\n    def example():\n        # write your python code here.",
            "C++": "\n     int main() {\n       return 0;\n     }\n    "
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // use problemid as session id
        // since we subscribe the changes, every time the params changes,
        // session id will be updated and the editor will be initilized.
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
        this.collaboration.restoreBuffer();
        // // "editor" is the id in html
        // this.editor = ace.edit("editor");
        // this.editor.setTheme("ace/theme/eclipse");
        // // this.editor.getSession().setMode("ace/mode/java");
        // // // set the java
        // // this.editor.setValue(this.defaultContent["Java"]);
        // this.resetEditor();
        // this.collaboration.init();
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        document.getElementsByTagName('textarea')[0].focus();
        // setup collaboration socket
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        // register change call back
        this.editor.on("change", function (e) {
            console.log('eidtor change:' + JSON.stringify(e));
            // check if the change is same as last change
            // if they are the same, skip this change
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor(); // when language changes, need to reset the editor
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var user_code = this.editor.getValue();
        console.log(user_code);
        // create object that contains user's code and language
        // send this to server
        var data = {
            user_code: user_code,
            lang: this.language.toLocaleLowerCase()
        };
        console.log("<editor.component.submit()> sending data to data service");
        console.log(data);
        // build and run return a promise
        this.dataService.buildAndRun(data)
            .then(function (res) {
            // this.output = res.text;
            console.log("<editor.component.submit()> receive data from dataService.buildAndRun()" + res);
            _this.output = res;
            console.log("<editor.component.submit()> receive data from dataService.buildAndRun()" + _this.output);
        });
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_collaboration_service__WEBPACK_IMPORTED_MODULE_1__["CollaborationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n    text-align: center; /*让div内部文字居中*/\n}"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 收获：\n1. two way binding [(ngModel)]\n2. event binding (click) -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"collapse navbar-collapse main\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/problems\">Problems</a>\n          </li>\n        </ul>\n\n        <form class=\"form-inline\" >\n            <!-- The name attribute specifies the name of an <input> element. \n            The name attribute is used to reference elements in a JavaScript, or \n            to reference form data after a form is submitted. \n            Note: Only form elements with a name attribute will have their values \n            passed when submitting a form. -->\n          <input class=\"form-control mr-sm-2\" name= \"problemName\" type=\"search\" placeholder=\"Search problem name\" \n           [(ngModel)]=\"nameOfProblemToSearch\">\n          <button class=\"btn btn-outline-success\" (click)=\"searchProblem()\">Search</button>\n        </form>\n    </div>\n</nav>\n\n\n<!-- some extra space -->\n<div>&nbsp;</div> \n\n\n\n\n "

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// 收获：
// 1. Router.navigateByUrl做跳转
// 2. handle undefined: typeof variable == 'undefined'
// 3. in function body, call attribute with this.attrName;
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.nameOfProblemToSearch = "Search by problem name";
        this.problemId = -1;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent.prototype.searchProblem = function () {
        console.log("search problem done! ");
        console.log(this.nameOfProblemToSearch);
        var temp = this.dataService.searchProblemByName(this.nameOfProblemToSearch);
        console.log(temp);
        console.log(typeof temp == 'undefined');
        if (typeof temp == 'undefined') {
            console.log("problem [" + this.nameOfProblemToSearch + "] does not exists!");
            return;
        }
        this.problemId = this.dataService.searchProblemByName(this.nameOfProblemToSearch).id;
        console.log("problem [" + this.nameOfProblemToSearch + "] is indexed " + this.problemId);
        if (this.problemId !== -1) {
            this.router.navigateByUrl("/problems/" + this.problemId);
        }
    };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .new-problem {\n    background-color: #42f4d6;\n} */"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"new-problem\">\"This is an indicator that ur new-problem\"</div> -->\n\n<div class = \"new-problem\">\n  <form #formRef = \"ngForm\">\n\n    <div class = \"form-group\">\n      <label for=\"problemName\">Problem name</label>\n      <input name = \"problemName\" id=\"probklemName\" class=\"form-control\"\n        type=\"text\" required placeholder=\"Please enter problem name\"\n        [(ngModel)] = \"newProblem.name\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"problemDesc\">Problem description</label>\n        <textarea name=\"problemDesc\" id=\"problemDesc\" class=\"form-control\"\n        placeholder=\"Please enter problem description\"\n        [(ngModel)] = \"newProblem.desc\" rows=\"3\">\n        </textarea>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"problemDifficulty\">Problem difficulty</label>\n        <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n        [(ngModel)]=\"newProblem.difficulty\">      \n                <option *ngFor = \"let difficulty of difficulties\" [value] = \"difficulty\">\n                  {{difficulty}}\n                </option>\n        </select>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\"\n         (click) = \"addProblem()\">Add problem</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n<br/>\n<br/>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        /* 用来track表的输入 */
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM); /* 深度copy object，因为我们希望DEFAULT_PROBLEM一直不变 */
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    /* 把problem传入PROBLEM数组 */
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem); /* 这一步problem已经被加进去了 */
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM); /* 重新提交时，不会覆盖前一次提交的newProblem, 相当于refresh */
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- 这里是reactive programming，随着用户界面变化而显示屏宽不同-->\n\n<div class=\"container\" *ngIf=\"problem\"> <!-- ngIf check一下problem是否存在，不存在就不显示-->\n  <div class=\"col-sm-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}. {{problem.name}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n    </div>\n  </div>\n\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 /* 通过activated route 拿到当前生效的拿个路径 */

var ProblemDetailComponent = /** @class */ (function () {
    /* 服务注入！ 需要用activateRoute那道当前路径，因为id再路径里面 */
    /* activeRoute是angular提供的服务 */
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.route 永远是当前路径， 通过angular framework的ActivatedRoute获得 */
        /* https://angular-2-training-book.rangle.io/handout/routing/routeparams.html */
        this.route.params.subscribe(function (params) {
            // this.problem = this.dataService.getProblem(+params['id']); /* +"10" 从string变成一个数字  */
            // /* params 是从 route里来的, params都放在一个数组里，用变量名选取。 */
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
            //getProblem return a promise.
            //problem is the returned data source. //this.problem is your local
            //problem.
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());

/*
=> arrow 函数：
x => y
func(x) {
  return y
}
*/


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n}\n\n.badge.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n}\n\n.title{\n    font-size: 1.2em;\n}\n\n.diff-easy {\n    background-color: #42ebf4;\n}\n\n.diff-medium {\n    background-color: #92cf5c;\n}\n\n.diff-hard {\n    background-color: #dd0d1e;\n}\n\n.diff-super {\n    background-color: #8d16e2;\n}"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- html 里面可以直接引用相关的ts里面的变量-->\n\n<div class=\"container\">\n\n  <!-- <app-navigation-bar></app-navigation-bar> -->\n\n  <app-new-problem></app-new-problem> <!--在problemlist上面增添new problem 吧-->\n\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\"> \n      <!-- anckor 方括号内部的变量，和后面的值绑定, routerLink see: \n      https://angular.io/api/router/RouterLink \n    Consider the following route configuration: [{ path: 'user/:name', component: UserCmp }]. When linking to this user/:name route, you use the RouterLink directive.\n\nIf the link is static, you can use the directive as follows: <a routerLink=\"/user/bob\">link to user component</a>\n\nIf you use dynamic values to generate the link, you can pass an array of path segments, followed by the params for each segment.\n\nFor instance ['/team', teamId, 'user', userName, {details: true}] means that we want to generate a link to /team/11/user/bob;details=true\n-->\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\"> \n        <!-- class 和css相对应，这里是拼凑的class，即， diff-easy, diff-medium, etc. -->\n        {{problem.difficulty}}\n      </span>\n      <strong class =\"title\">{{problem.id}}. {{problem.name}}</strong>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* 外部变量 */
/*
const PROBLEMS: Problem[]  = [
  {
    "id" : 1,
    "name": "Two Sum",
    "desc": "Given an array of integers, find two numbers such that they add up to a specific target number.",
    "difficulty": "easy"
  },
  {
    "id" : 2,
    "name": "Three Sum",
    "desc": "Given an array of integers, find three numbers such that they add up to a specific target number.",
    "difficulty": "medium"
  }
];
*/
var ProblemListComponent = /** @class */ (function () {
    /* 通过constructor来injection！不用再constructor里调用； private是因为dataService不想提供给别的component用 */
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
        // getProblems() return observable. need to subscribe it.
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
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

var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        // window.location.origin: the server location on the current page
        // for example, the current page on the browser is "localhost:3000/problems/1", 
        //the window.location.origin = "http/localhost:3000"
        // this.collaborationSocket = io(window.location.origin, {query: 'message=haha'});
        // this.collaborationSocket.on("message", (message) => {
        //   console.log('message received from the server: ' + message);
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // handle the changes sent from server.
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboratioon: editor cahnges by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            // apply the changes on editor
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    // emit event to make changes and inform server and other collaborators;
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        // user emit "restoreBuffer " event
        // let server to handle this event
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {PROBLEMS} from "../mock-problems";


/* service 可以看成一个全局变量 */
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        // problems: Problem[] = PROBLEMS;
        // BehavivorSubject: when subscribe, we can get the value that emitted last time.
        this._problemSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems') // Problem[]
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res); // .next(): next data. observable/subject 发布数据
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; }) // use then, catch to consume the promise, res 
            .catch(this.handleError); // use error handler (a function) to handle error
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }) };
        return this.httpClient.post('api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        console.error('an error occured', err);
        return Promise.reject(err.body || err);
    };
    // getProblems() : Problem[] {
    //   return this.problems;
    // }
    // getProblem(id: number) : Problem { /* number 在ts里跟基本类型差不多 */
    //   return this.problems.find( (problem) => problem.id === id);
    //   /* arrow function (param) => {expression}   --- equivalent to --- => {return expression;}*/
    //   /* (problem) => problem.id === id  ---等同于---  一个返回boolean的函数， === 不止判断值，还判断类型相同*/
    // }
    // addProblem(problem: Problem) {
    //   problem.id = this.problems.length + 1;
    //   this.problems.push(problem);
    // }
    DataService.prototype.searchProblemByName = function (problemName) {
        return null;
        // return this.problems.find((problem) => problem.name === problemName);
    };
    DataService.prototype.buildAndRun = function (data) {
        // define the content-type in http request header
        //content-type declares the body type when you issue a POST request
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/build_and_run', data, options)
            .toPromise() // convert observable to promise
            .then(function (res) {
            console.log("<data.service.buildAndRun()> result received for buildAndRun request");
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }) /* angular 6 中的简化，injectable表示别的地方可以被用， providedIn:'root' 表示提供给所有的component，
        如果只想提供给某个component，就把root换成想要用的component就可以了 */,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/yuhuitong/workspace/fullstack/projects/BitTiger-CS503-1803/week3/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map