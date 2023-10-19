"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_warehouse_ship-deposit_ship-deposit_module_ts"],{

/***/ 61433:
/*!***********************************************************************!*\
  !*** ./src/app/warehouse/ship-deposit/ship-deposit-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipDepositPageRoutingModule": () => (/* binding */ ShipDepositPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ship_deposit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-deposit.page */ 25249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _ship_deposit_page__WEBPACK_IMPORTED_MODULE_0__.ShipDepositPage
    }
];
class ShipDepositPageRoutingModule {
}
ShipDepositPageRoutingModule.ɵfac = function ShipDepositPageRoutingModule_Factory(t) { return new (t || ShipDepositPageRoutingModule)(); };
ShipDepositPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShipDepositPageRoutingModule });
ShipDepositPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShipDepositPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 40933:
/*!***************************************************************!*\
  !*** ./src/app/warehouse/ship-deposit/ship-deposit.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipDepositPageModule": () => (/* binding */ ShipDepositPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ship_deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-deposit-routing.module */ 61433);
/* harmony import */ var _ship_deposit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-deposit.page */ 25249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ShipDepositPageModule {
}
ShipDepositPageModule.ɵfac = function ShipDepositPageModule_Factory(t) { return new (t || ShipDepositPageModule)(); };
ShipDepositPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShipDepositPageModule });
ShipDepositPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ship_deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShipDepositPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShipDepositPageModule, { declarations: [_ship_deposit_page__WEBPACK_IMPORTED_MODULE_1__.ShipDepositPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ship_deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShipDepositPageRoutingModule] }); })();


/***/ }),

/***/ 25249:
/*!*************************************************************!*\
  !*** ./src/app/warehouse/ship-deposit/ship-deposit.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipDepositPage": () => (/* binding */ ShipDepositPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_base_subscribe_handler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/base-subscribe-handler.component */ 19002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_warehouse_ship_deposit_ship_deposit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/warehouse/ship-deposit/ship-deposit.service */ 80598);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);






const _c0 = ["shipDepositContainer"];
class ShipDepositPage extends src_app_shared_base_subscribe_handler_component__WEBPACK_IMPORTED_MODULE_0__.BaseSubscribeHandlerComponent {
    constructor(renderer2, router, shipDepositService) {
        super();
        this.renderer2 = renderer2;
        this.router = router;
        this.shipDepositService = shipDepositService;
    }
    ngAfterViewInit() {
        this.generateDepositWebComponent();
    }
    navigate(route) {
        this.router.navigateByUrl(route.detail);
    }
    navigateToWarehouse(route) {
        this.router.navigateByUrl('/tabs/warehouse');
    }
    generateDepositWebComponent() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([
            this.shipDepositService.getPlayerWalletAddress(),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(__webpack_require__.e(/*! import() */ "node_modules_pixelmatic_inf-web-components_inf-wcomp-ship-deposit_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @pixelmatic/inf-web-components/inf-wcomp-ship-deposit.js */ 91554, 23)))
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(([playerWalletInfo]) => {
            const shipDepositElement = this.renderer2.createElement('inf-wcomp-ship-deposit');
            this.renderer2.setProperty(shipDepositElement, 'walletAddress', playerWalletInfo.address);
            this.renderer2.setProperty(shipDepositElement, 'browserEnv', false);
            this.renderer2.listen(shipDepositElement, 'navigateToContextRoute', this.navigate.bind(this));
            this.renderer2.listen(shipDepositElement, 'navigateToWarehouse', this.navigateToWarehouse.bind(this));
            this.renderer2.appendChild(this.shipDepositContainer.nativeElement, shipDepositElement);
        });
    }
}
ShipDepositPage.ɵfac = function ShipDepositPage_Factory(t) { return new (t || ShipDepositPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_warehouse_ship_deposit_ship_deposit_service__WEBPACK_IMPORTED_MODULE_1__.ShipDepositService)); };
ShipDepositPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ShipDepositPage, selectors: [["app-ship-deposit"]], viewQuery: function ShipDepositPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.shipDepositContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["overflow-scroll", "false", 3, "fullscreen"], [1, "ship-deposit-container", "container"], ["shipDepositContainer", ""]], template: function ShipDepositPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwLWRlcG9zaXQucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ 80598:
/*!****************************************************************!*\
  !*** ./src/app/warehouse/ship-deposit/ship-deposit.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipDepositService": () => (/* binding */ ShipDepositService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ShipDepositService {
    constructor(http) {
        this.http = http;
    }
    getPlayerWalletAddress() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.custodialWalletService}/v1/player-deposit-address/current`);
    }
}
ShipDepositService.ɵfac = function ShipDepositService_Factory(t) { return new (t || ShipDepositService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ShipDepositService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShipDepositService, factory: ShipDepositService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_warehouse_ship-deposit_ship-deposit_module_ts.js.map