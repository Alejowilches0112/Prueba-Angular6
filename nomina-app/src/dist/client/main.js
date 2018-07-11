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
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settlement/settlement.component */ "./src/app/components/settlement/settlement.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//modules


var routes = [
    { path: '', redirectTo: '/payment', pathMatch: 'full' },
    { path: 'payment', component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"] },
    { path: 'settlement', component: _components_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__["SettlementComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: blue;\r\n  font-family: Arial,Helvetica, sans-serif;\r\n  font-size: 250%\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div  class=\"container\" style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n\n  <div class=\"row\">\n    <img width=\"300\" alt=\"Angular Logo\" src=\"corporativo.jpg\">\n    <div class=\"col-md-6\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
        this.title = 'Listado de nomina';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settlement/settlement.component */ "./src/app/components/settlement/settlement.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
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
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"],
                _components_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_7__["SettlementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_services_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/payment/payment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form (submit)=\"addPayment($event)\">\n      <div class=\"input-group\">\n          <div>\n            <input type=\"number\" name=\"cedula\" [(ngModel)]=\"cedula\" placeholder=\"cedula\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"text\" name=\"nombres\" [(ngModel)]=\"nombres\" placeholder=\"nombre\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"text\" name=\"apellidos\" [(ngModel)]=\"apellidos\" placeholder=\"apellido\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"text\" name=\"contrato\" [(ngModel)]=\"contrato\" placeholder=\"número de contrato\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"number\" name=\"salario\" [(ngModel)]=\"salario\" placeholder=\"salario\" class=\"form-control\">\n          </div>\n          <br>\n          <br>\n          <div>\n          <span class=\"input-group-addon\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Add employee\n            </button>\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<table class=\"table\">\n  <thead>\n    <th> Contrato </th>\n    <th> Cédula </th>\n    <th> Nombres </th>\n    <th> Apellidos </th>\n    <th> Salario </th>\n    <th> Eliminar </th>\n    <th> Pagar </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let payment of payments\">\n      <td>\n        {{payment.contrato}}\n      </td>\n      <td>\n        {{payment.cedula}}\n      </td>\n      <td>\n        {{payment.nombres}}\n      </td>\n      <td>\n        {{payment.apellidos}}\n      </td>\n      <td>\n        {{payment.salario}}\n      </td>\n      <td>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"deletePayment(payment._id)\">\n            <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClick()\" >\n            <i class=\"fa fa-usd\"></i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(paymentService, router) {
        var _this = this;
        this.paymentService = paymentService;
        this.router = router;
        this.btnClick = function () {
            this.router.navigate(['/settlement']);
        };
        this.paymentService.getPayment().subscribe(function (res) {
            _this.payments = res;
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.addPayment = function (event) {
        var _this = this;
        event.preventDefault();
        var newPayment = {
            cedula: this.cedula,
            nombres: this.nombres,
            apellidos: this.apellidos,
            contrato: this.contrato,
            salario: this.salario
        };
        this.paymentService.addPayment(newPayment)
            .subscribe(function (payment) {
            _this.payments.push(payment);
            _this.cedula = 0;
            _this.nombres = '';
            _this.apellidos = '';
            _this.contrato = 'N° ';
            _this.salario = 0;
        });
    };
    PaymentComponent.prototype.deletePayment = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var payments_1 = this.payments;
            this.paymentService.deletePayment(id)
                .subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < payments_1.length; i++) {
                        if (payments_1[i]._id == id) {
                            payments_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/components/payment/payment.component.css")],
            providers: [_services_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]]
        }),
        __metadata("design:paramtypes", [_services_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/settlement/settlement.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/settlement/settlement.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settlement/settlement.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/settlement/settlement.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form (submit)=\"addSettlement($event)\">\n      <div class=\"input-group\">\n        <div>\n          <input type=\"text\"name=\"cedula\" [(ngModel)]=\"cedula\" placeholder=\"cedula\" class=\"form-control\">\n        </div>\n          <div>\n            <input type=\"date\" name=\"fecha_inicial\" [(ngModel)]=\"fecha_inicial\" placeholder=\"fecha_inicial\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"date\" name=\"fecha_final\" [(ngModel)]=\"fecha_final\" placeholder=\"fecha_final\" class=\"form-control\">\n          </div>\n          <div>\n            <input type=\"number\" id=\"bonificacion\"name=\"bonificacion\" value=\"bonificacion\" [(ngModel)]=\"bonificacion\" placeholder=\"bonificacion\" class=\"form-control\">\n          </div>\n          <br>\n          <br>\n          <div>\n          <span class=\"input-group-addon\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              Add settlement\n            </button>\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<table class=\"table\">\n  <thead>\n    <th> Cédula </th>\n    <th> Fecha Inicial </th>\n    <th> Fecha Final </th>\n    <th> Bonificacion </th>\n    <th> Borrar </th>\n    <th> Exportar PDF </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let settlement of settlements\">\n      <td>\n        {{settlement.cedula}}\n      </td>\n      <td>\n        {{settlement.fecha_inicial}}\n      </td>\n      <td>\n        {{settlement.fecha_final}}\n      </td>\n      <td>\n        {{settlement.bonificacion}}\n      </td>\n      <td>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"deleteSettlement(settlement._id)\">\n            <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"btnClick()\">\n            <i class=\"fa fa-file\"></i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"btnClick1()\">\n      Empleados\n  </button>\n"

/***/ }),

/***/ "./src/app/components/settlement/settlement.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/settlement/settlement.component.ts ***!
  \***************************************************************/
/*! exports provided: SettlementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementComponent", function() { return SettlementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicessettlement_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicessettlement/settlement.service */ "./src/app/servicessettlement/settlement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettlementComponent = /** @class */ (function () {
    function SettlementComponent(settlementService, router) {
        var _this = this;
        this.settlementService = settlementService;
        this.router = router;
        this.btnClick = function () {
            //Escribir PDF
        };
        this.btnClick1 = function () {
            this.router.navigate(['/payment']);
        };
        this.settlementService.getSettlement().subscribe(function (res) {
            _this.settlements = res;
        });
    }
    SettlementComponent.prototype.ngOnInit = function () {
    };
    SettlementComponent.prototype.addSettlement = function (event) {
        var _this = this;
        event.preventDefault();
        var newSettlement = {
            cedula: this.cedula,
            fecha_inicial: this.fecha_inicial,
            fecha_final: this.fecha_final,
            bonificacion: 3000000 * (this.bonificacion / 100)
        };
        this.settlementService.addSettlement(newSettlement)
            .subscribe(function (settlement) {
            _this.settlements.push(settlement);
            _this.cedula = 0;
            _this.fecha_inicial = "";
            _this.fecha_final = "";
            _this.bonificacion = 0;
        });
    };
    SettlementComponent.prototype.deleteSettlement = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var settlements_1 = this.settlements;
            this.settlementService.deleteSettlement(id)
                .subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < settlements_1.length; i++) {
                        if (settlements_1[i]._id == id) {
                            settlements_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    SettlementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settlement',
            template: __webpack_require__(/*! ./settlement.component.html */ "./src/app/components/settlement/settlement.component.html"),
            styles: [__webpack_require__(/*! ./settlement.component.css */ "./src/app/components/settlement/settlement.component.css")],
            providers: [_servicessettlement_settlement_service__WEBPACK_IMPORTED_MODULE_2__["SettlementService"]]
        }),
        __metadata("design:paramtypes", [_servicessettlement_settlement_service__WEBPACK_IMPORTED_MODULE_2__["SettlementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SettlementComponent);
    return SettlementComponent;
}());



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    PaymentService.prototype.getPayment = function () {
        return this.http.get(this.domain + "/api/payment")
            .map(function (res) { return res; });
    };
    PaymentService.prototype.addPayment = function (newPayment) {
        return this.http.post(this.domain + "/api/payment", newPayment)
            .map(function (res) { return res; });
    };
    PaymentService.prototype.editPayment = function (newPayment) {
        return this.http.put(this.domain + "/api/payment/" + newPayment._id, newPayment).map(function (res) { return res; });
    };
    PaymentService.prototype.deletePayment = function (id) {
        return this.http.delete(this.domain + "/api/payment/" + id)
            .map(function (res) { return res; });
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/servicessettlement/settlement.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/servicessettlement/settlement.service.ts ***!
  \**********************************************************/
/*! exports provided: SettlementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementService", function() { return SettlementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettlementService = /** @class */ (function () {
    function SettlementService(http) {
        this.http = http;
        this.domain = "http://localhost:3000";
    }
    SettlementService.prototype.getSettlement = function () {
        return this.http.get(this.domain + "/api/settlement")
            .map(function (res) { return res; });
    };
    SettlementService.prototype.addSettlement = function (newSettlement) {
        return this.http.post(this.domain + "/api/settlement", newSettlement)
            .map(function (res) { return res; });
    };
    SettlementService.prototype.deleteSettlement = function (id) {
        return this.http.delete(this.domain + "/api/settlement/" + id)
            .map(function (res) { return res; });
    };
    SettlementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettlementService);
    return SettlementService;
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

module.exports = __webpack_require__(/*! C:\Users\Alejo\Documents\nomina-app\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map