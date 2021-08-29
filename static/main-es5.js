function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'users-dashboard';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "project-name"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Profiles Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-dashboard");
        }
      },
      directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  height: 60px;\n  margin: auto auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border: 1px solid #ddd;\n  border-radius: 0 0 25px 25px;\n  background-color: #7692A7;\n}\n\nheader[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  color: #FFFFFF;\n  font-size: 24px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC9Qcm9qZWN0cy91c2Vycy1kYXNoYm9hcmQtcHJvamVjdC91c2Vycy1kYXNoYm9hcmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnREFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRERFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTJBNztcbiAgJiAucHJvamVjdC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn0iLCIqIHtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTJBNztcbn1cbmhlYWRlciAucHJvamVjdC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/new-user/new-user.component */
    "./src/app/dashboard/new-user/new-user.component.ts");
    /* harmony import */


    var _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/user/user.component */
    "./src/app/dashboard/user/user.component.ts");
    /* harmony import */


    var _dashboard_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/profile-view/profile-view.component */
    "./src/app/dashboard/profile-view/profile-view.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _dashboard_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"], _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _dashboard_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_9__["ProfileViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _dashboard_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"], _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _dashboard_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_9__["ProfileViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts": function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_users_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/users-api.service */
    "./src/app/services/users-api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-user/new-user.component */
    "./src/app/dashboard/new-user/new-user.component.ts");
    /* harmony import */


    var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-view/profile-view.component */
    "./src/app/dashboard/profile-view/profile-view.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/dashboard/user/user.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function DashboardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-user", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_5_Template_app_user_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var user_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r4.setActiveUser(user_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_5_Template_fa_icon_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var user_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r6["delete"](user_r3.login.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", user_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faCoffee);
      }
    }

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-new-user");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_1_div_5_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-profile-view", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.usersDetails.results);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", ctx_r1.activeUser);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(usersApi) {
        var _this = this;

        _classCallCheck(this, DashboardComponent);

        this.usersApi = usersApi;
        this.isLoaded = false;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];

        this.setActiveUser = function (user) {
          _this.activeUser = user;
        };

        this["delete"] = function (username) {
          _this.usersApi.deleteUser(username);

          _this.activeUser = _this.usersDetails.results[0];
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.usersApi.getUsersDetails();

                  case 2:
                    this.usersDetails = this.usersApi.usersData;
                    this.activeUser = this.usersDetails.results[0];
                    this.isLoaded = true;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_api_service__WEBPACK_IMPORTED_MODULE_3__["UsersApiService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 2,
      consts: [["class", "lds-ring", 4, "ngIf"], ["class", "users-dashboard-wrapper", 4, "ngIf"], [1, "lds-ring"], [1, "users-dashboard-wrapper"], [1, "horizontal-line"], [1, "users-dashboard"], [1, "user-cards"], ["class", "user-card", 4, "ngFor", "ngForOf"], [3, "active"], [1, "user-card"], [1, "user", 3, "user", "click"], ["alt", "Delete user", 3, "icon", "click"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 5, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 7, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__["NewUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__["ProfileViewComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]],
      styles: [".users-dashboard-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1000px;\n  margin: auto auto;\n  padding: 20px;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%] {\n  display: block;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 100px;\n  padding: 10px;\n  position: relative;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #e1e1e1;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 5px 5px #e1e1e1, 0px -5px 5px #e1e1e1;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  color: #9a9a9a;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover {\n  color: #585858;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   .user-cards[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   app-user[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .users-dashboard[_ngcontent-%COMP%]   app-profile-view[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: 20px;\n}\n.users-dashboard-wrapper[_ngcontent-%COMP%]   .horizontal-line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: 0;\n  height: 1px;\n  background: #333;\n  background-image: linear-gradient(to right, #ccc, #333, #ccc);\n}\n.lds-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 50px 50%;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #AAAAAA transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC9Qcm9qZWN0cy91c2Vycy1kYXNoYm9hcmQtcHJvamVjdC91c2Vycy1kYXNoYm9hcmQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7QUNFSjtBRERJO0VBQ0UsY0FBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0lSO0FESFE7RUFDRSxnQ0FBQTtBQ0tWO0FESFE7RUFDRSxxREFBQTtBQ0tWO0FESFE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNLVjtBREpVO0VBQ0UsY0FBQTtBQ01aO0FESFE7RUFDRSxlQUFBO0FDS1Y7QURESTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEQUU7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQ0VKO0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0EseURBQUE7QUNFRjtBREFBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQ0dGO0FEREE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDSUY7QURGQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNLRjtBREhBO0VBQ0U7SUFDRSx1QkFBQTtFQ01GO0VESkE7SUFDRSx5QkFBQTtFQ01GO0FBQ0Y7QURaQTtFQUNFO0lBQ0UsdUJBQUE7RUNNRjtFREpBO0lBQ0UseUJBQUE7RUNNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy1kYXNoYm9hcmQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gICYgLnVzZXJzLWRhc2hib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmIC51c2VyLWNhcmRzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgJiAudXNlci1jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAjZTFlMWUxLCAwcHggLTVweCA1cHggI2UxZTFlMTtcbiAgICAgICAgfVxuICAgICAgICAmIGZhLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM1ODU4NTg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYgYXBwLXVzZXI6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmIGFwcC1wcm9maWxlLXZpZXcge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgfVxuICAmIC5ob3Jpem9udGFsLWxpbmUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjMzMzLCAjY2NjKTtcbiAgfVxufVxuXG4ubGRzLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA1MHB4IDUwJTtcbn1cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjQUFBQUFBIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iLCIudXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnVzZXJzLWRhc2hib2FyZC13cmFwcGVyIC51c2Vycy1kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVzZXJzLWRhc2hib2FyZC13cmFwcGVyIC51c2Vycy1kYXNoYm9hcmQgLnVzZXItY2FyZHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2Vycy1kYXNoYm9hcmQtd3JhcHBlciAudXNlcnMtZGFzaGJvYXJkIC51c2VyLWNhcmRzIC51c2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVzZXJzLWRhc2hib2FyZC13cmFwcGVyIC51c2Vycy1kYXNoYm9hcmQgLnVzZXItY2FyZHMgLnVzZXItY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4udXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIgLnVzZXJzLWRhc2hib2FyZCAudXNlci1jYXJkcyAudXNlci1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggI2UxZTFlMSwgMHB4IC01cHggNXB4ICNlMWUxZTE7XG59XG4udXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIgLnVzZXJzLWRhc2hib2FyZCAudXNlci1jYXJkcyAudXNlci1jYXJkIGZhLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5YTlhOWE7XG59XG4udXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIgLnVzZXJzLWRhc2hib2FyZCAudXNlci1jYXJkcyAudXNlci1jYXJkIGZhLWljb246aG92ZXIge1xuICBjb2xvcjogIzU4NTg1ODtcbn1cbi51c2Vycy1kYXNoYm9hcmQtd3JhcHBlciAudXNlcnMtZGFzaGJvYXJkIC51c2VyLWNhcmRzIC51c2VyLWNhcmQgYXBwLXVzZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIgLnVzZXJzLWRhc2hib2FyZCBhcHAtcHJvZmlsZS12aWV3IHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4udXNlcnMtZGFzaGJvYXJkLXdyYXBwZXIgLmhvcml6b250YWwtbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzMzMywgI2NjYyk7XG59XG5cbi5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDUwcHggNTAlO1xufVxuXG4ubGRzLXJpbmcgZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIGJvcmRlci1jb2xvcjogI0FBQUFBQSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_users_api_service__WEBPACK_IMPORTED_MODULE_3__["UsersApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/new-user/new-user.component.ts": function srcAppDashboardNewUserNewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewUserComponent", function () {
      return NewUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/users-api.service */
    "./src/app/services/users-api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewUserComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Second Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Country:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cell:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserComponent_div_3_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.userForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.userForm.valid);
      }
    }

    var NewUserComponent = /*#__PURE__*/function () {
      function NewUserComponent(usersApi) {
        var _this2 = this;

        _classCallCheck(this, NewUserComponent);

        this.usersApi = usersApi;
        this.openAddUser = false;

        this.toggleForm = function () {
          _this2.openAddUser = !_this2.openAddUser;
        };

        this.onSubmit = function () {
          _this2.usersApi.addNewUser(_this2.userForm.value).then(function (value) {
            _this2.toggleForm();

            _this2.userForm.reset();

            alert(value);
          }, function (error) {
            alert(error);
          });
        };
      }

      _createClass(NewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            secondName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }]);

      return NewUserComponent;
    }();

    NewUserComponent.ɵfac = function NewUserComponent_Factory(t) {
      return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_2__["UsersApiService"]));
    };

    NewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewUserComponent,
      selectors: [["app-new-user"]],
      decls: 4,
      vars: 1,
      consts: [[1, "new-user-container"], [1, "add-new-user", "button", 3, "click"], ["class", "form-wrapper", 4, "ngIf"], [1, "form-wrapper"], [1, "form", 3, "formGroup"], [1, "input-block"], ["for", ""], ["formControlName", "userName", "type", "text", "placeholder", "User Name"], ["formControlName", "name", "type", "text", "placeholder", "Name"], ["formControlName", "secondName", "type", "text", "placeholder", "Second Name"], ["formControlName", "age", "type", "number", "placeholder", "Age"], ["formControlName", "country", "type", "text", "placeholder", "Country"], ["formControlName", "city", "type", "text", "placeholder", "City"], ["formControlName", "cell", "type", "text", "placeholder", "Cell"], [1, "submit", "button", 3, "disabled", "click"]],
      template: function NewUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserComponent_Template_button_click_1_listener() {
            return ctx.toggleForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Add New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewUserComponent_div_3_Template, 34, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openAddUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".new-user-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 20px 0;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 30px;\n}\n@media only screen and (max-width: 685px) {\n  .new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 30px;\n  margin-bottom: 15px;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-left: 10px;\n}\n.new-user-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n}\n.new-user-container[_ngcontent-%COMP%]   .add-new-user[_ngcontent-%COMP%] {\n  background-color: #3d7bff;\n  width: auto;\n}\n.new-user-container[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  margin: 0 50%;\n  background-color: #3cb371;\n  width: 100px;\n}\n.new-user-container[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.new-user-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  color: white;\n  height: 40px;\n  padding: 0 15px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC9Qcm9qZWN0cy91c2Vycy1kYXNoYm9hcmQtcHJvamVjdC91c2Vycy1kYXNoYm9hcmQvc3JjL2FwcC9kYXNoYm9hcmQvbmV3LXVzZXIvbmV3LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHTjtBREZNO0VBQ0UsWUFBQTtBQ0lSO0FESFE7RUFDRSxrQkFBQTtBQ0tWO0FESFE7RUFMRjtJQU1JLDBCQUFBO0VDTVI7QUFDRjtBRExRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDT1Y7QUROVTtFQUNFLGlCQUFBO0FDUVo7QUROVTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1FaO0FESk07RUFDRSxjQUFBO0FDTVI7QURGRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSUo7QURISTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0tOO0FERkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy11c2VyLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgJiAuZm9ybS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgJiAuZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAmIC5pbnB1dC1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODVweCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAmIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmIGlucHV0IHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYgLmFkZC1uZXctdXNlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2JmZjtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAmIC5zdWJtaXQge1xuICAgIG1hcmdpbjogMCA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjM3MTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuICAmIC5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbiIsIi5uZXctdXNlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5mb3JtLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5mb3JtLXdyYXBwZXIgLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5uZXctdXNlci1jb250YWluZXIgLmZvcm0td3JhcHBlciAuZm9ybSAuaW5wdXQtYmxvY2sge1xuICB3aWR0aDogMzAwcHg7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5mb3JtLXdyYXBwZXIgLmZvcm0gLmlucHV0LWJsb2NrOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4NXB4KSB7XG4gIC5uZXctdXNlci1jb250YWluZXIgLmZvcm0td3JhcHBlciAuZm9ybSAuaW5wdXQtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5mb3JtLXdyYXBwZXIgLmZvcm0gLmlucHV0LWJsb2NrIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5mb3JtLXdyYXBwZXIgLmZvcm0gLmlucHV0LWJsb2NrIGRpdiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5ldy11c2VyLWNvbnRhaW5lciAuZm9ybS13cmFwcGVyIC5mb3JtIC5pbnB1dC1ibG9jayBkaXYgaW5wdXQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5ldy11c2VyLWNvbnRhaW5lciAuZm9ybS13cmFwcGVyIC5mb3JtIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5ldy11c2VyLWNvbnRhaW5lciAuYWRkLW5ldy11c2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkN2JmZjtcbiAgd2lkdGg6IGF1dG87XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5zdWJtaXQge1xuICBtYXJnaW46IDAgNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiMzcxO1xuICB3aWR0aDogMTAwcHg7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ubmV3LXVzZXItY29udGFpbmVyIC5idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-user',
          templateUrl: './new-user.component.html',
          styleUrls: ['./new-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_2__["UsersApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/profile-view/profile-view.component.ts": function srcAppDashboardProfileViewProfileViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function () {
      return ProfileViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProfileViewComponent = /*#__PURE__*/function () {
      function ProfileViewComponent() {
        _classCallCheck(this, ProfileViewComponent);
      }

      _createClass(ProfileViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileViewComponent;
    }();

    ProfileViewComponent.ɵfac = function ProfileViewComponent_Factory(t) {
      return new (t || ProfileViewComponent)();
    };

    ProfileViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileViewComponent,
      selectors: [["app-profile-view"]],
      inputs: {
        active: "active"
      },
      decls: 42,
      vars: 14,
      consts: [[1, "profile-view-wrapper"], [1, "profile-view"], [1, "top-section"], [1, "user-photo"], [3, "src", "alt"], [1, "bottom-section"], [1, "user-profile-full-wrapper"], [1, "left-card-side"], [1, "info-line"], [1, "right-card-side"]],
      template: function ProfileViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cell:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "City:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Username:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Registered:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.active.picture.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.active.name.first, "'s profile photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.active.name.first, " ", ctx.active.name.last, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.dob.age, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.cell, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.location.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.location.city, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active.login.username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 11, ctx.active.registered.date, "longDate"), "");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".profile-view-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%] {\n  height: 200px;\n  background-color: #7692A7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .user-profile-full-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 50px auto;\n  max-width: 570px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  border: 1px solid #878787;\n  border-radius: 10px;\n  padding: 10px;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .user-profile-full-wrapper[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #e1e1e1;\n}\n.profile-view-wrapper[_ngcontent-%COMP%]   .profile-view[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .user-profile-full-wrapper[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC9Qcm9qZWN0cy91c2Vycy1kYXNoYm9hcmQtcHJvamVjdC91c2Vycy1kYXNoYm9hcmQvc3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHTjtBREZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNJUjtBREhRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0tWO0FEQU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7QUNHVjtBREZVO0VBQ0UsbUJBQUE7QUNJWiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtdmlldy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmIC5wcm9maWxlLXZpZXcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmIC50b3Atc2VjdGlvbiB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OTJBNztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAmIC51c2VyLXBob3RvIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAmIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYgLmJvdHRvbS1zZWN0aW9uIHtcbiAgICAgICYgLnVzZXItcHJvZmlsZS1mdWxsLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA1NzBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4Nzg3ODc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICYgLmluZm8tbGluZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIucHJvZmlsZS12aWV3LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS12aWV3LXdyYXBwZXIgLnByb2ZpbGUtdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wcm9maWxlLXZpZXctd3JhcHBlciAucHJvZmlsZS12aWV3IC50b3Atc2VjdGlvbiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjkyQTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2ZpbGUtdmlldy13cmFwcGVyIC5wcm9maWxlLXZpZXcgLnRvcC1zZWN0aW9uIC51c2VyLXBob3RvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnByb2ZpbGUtdmlldy13cmFwcGVyIC5wcm9maWxlLXZpZXcgLnRvcC1zZWN0aW9uIC51c2VyLXBob3RvIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnByb2ZpbGUtdmlldy13cmFwcGVyIC5wcm9maWxlLXZpZXcgLmJvdHRvbS1zZWN0aW9uIC51c2VyLXByb2ZpbGUtZnVsbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG1heC13aWR0aDogNTcwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODc4Nzg3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnByb2ZpbGUtdmlldy13cmFwcGVyIC5wcm9maWxlLXZpZXcgLmJvdHRvbS1zZWN0aW9uIC51c2VyLXByb2ZpbGUtZnVsbC13cmFwcGVyIC5pbmZvLWxpbmUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbn1cbi5wcm9maWxlLXZpZXctd3JhcHBlciAucHJvZmlsZS12aWV3IC5ib3R0b20tc2VjdGlvbiAudXNlci1wcm9maWxlLWZ1bGwtd3JhcHBlciAuaW5mby1saW5lOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-view',
          templateUrl: './profile-view.component.html',
          styleUrls: ['./profile-view.component.scss']
        }]
      }], function () {
        return [];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/user/user.component.ts": function srcAppDashboardUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/users-api.service */
    "./src/app/services/users-api.service.ts");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(usersApi) {
        _classCallCheck(this, UserComponent);

        this.usersApi = usersApi;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__["UsersApiService"]));
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      inputs: {
        user: "user"
      },
      decls: 15,
      vars: 6,
      consts: [[1, "user-profile-wrapper"], [3, "src", "alt"], [1, "user-details"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cell:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.picture.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.user.name, "'s profile photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.name.first, " ", ctx.user.name.last, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.location.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.cell, "");
        }
      },
      styles: [".user-profile-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.user-profile-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.user-profile-wrapper[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 10px;\n}\n.user-profile-wrapper[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 2px;\n}\n@media only screen and (max-width: 685px) {\n  .user-profile-wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .user-profile-wrapper[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtpdGEvRGVza3RvcC9Qcm9qZWN0cy91c2Vycy1kYXNoYm9hcmQtcHJvamVjdC91c2Vycy1kYXNoYm9hcmQvc3JjL2FwcC9kYXNoYm9hcmQvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7QUNHTjtBREFFO0VBYkY7SUFjSSxjQUFBO0VDR0Y7RURGRTtJQUNFLHlCQUFBO0VDSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAmIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gICYgLnVzZXItZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgJiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjg1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAmIC51c2VyLWRldGFpbHMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn0iLCIudXNlci1wcm9maWxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVzZXItcHJvZmlsZS13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4udXNlci1wcm9maWxlLXdyYXBwZXIgLnVzZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi51c2VyLXByb2ZpbGUtd3JhcHBlciAudXNlci1kZXRhaWxzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODVweCkge1xuICAudXNlci1wcm9maWxlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51c2VyLXByb2ZpbGUtd3JhcHBlciAudXNlci1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__["UsersApiService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/users-api.service.ts": function srcAppServicesUsersApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersApiService", function () {
      return UsersApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsersApiService = function UsersApiService(http) {
      var _this3 = this;

      _classCallCheck(this, UsersApiService);

      this.http = http;

      this.getUsersDetails = function () {
        return _this3.http.get('/api').toPromise().then(function (resp) {
          _this3.usersData = resp;
        })["catch"](function (err) {
          return console.log(err);
        });
      };

      this.addNewUser = function (user) {
        return new Promise(function (resolve, reject) {
          if (!_this3.userNameUniqCheck(user.userName)) {
            var newUser = {
              email: user.email,
              login: {
                username: user.userName
              },
              cell: user.cell,
              dob: {
                age: user.age
              },
              name: {
                first: user.name,
                last: user.secondName
              },
              location: {
                country: user.country,
                city: user.city
              },
              picture: {
                large: 'assets/thumbnail.png',
                thumbnail: 'assets/thumbnail.png'
              },
              registered: {
                date: new Date()
              }
            };

            _this3.usersData.results.push(newUser);

            resolve("User was added successfully");
          } else {
            reject("User with such username already exists!");
          }
        });
      };

      this.userNameUniqCheck = function (username) {
        var userNameExists = false;

        if (_this3.usersData.results.some(function (elem) {
          return elem.login.username === username;
        })) {
          userNameExists = true;
        }

        return userNameExists;
      }; //Assuming usernames are uniq


      this.deleteUser = function (username) {
        var index = _this3.usersData.results.findIndex(function (elem) {
          return elem.login.username == username;
        });

        _this3.usersData.results.splice(index, 1);
      };
    };

    UsersApiService.ɵfac = function UsersApiService_Factory(t) {
      return new (t || UsersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersApiService,
      factory: UsersApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nikita/Desktop/Projects/users-dashboard-project/users-dashboard/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map