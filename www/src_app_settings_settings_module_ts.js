"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 4394)).then(m => m.AccountPageModule)
    }
];
class SettingsPageRoutingModule {
}
SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) { return new (t || SettingsPageRoutingModule)(); };
SettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsPageRoutingModule });
SettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _wallet_my_wallet_my_wallet_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/my-wallet/my-wallet.modal */ 94737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class SettingsPageModule {
}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); };
SettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_2__.SettingsPage,
        _wallet_my_wallet_my_wallet_modal__WEBPACK_IMPORTED_MODULE_3__.MyWalletModal], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsPageRoutingModule] }); })();


/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var src_app_settings_wallet_my_wallet_my_wallet_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings/wallet/my-wallet/my-wallet.modal */ 94737);
/* harmony import */ var src_app_shared_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base-page/base-page.component */ 10022);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 18313);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/haptics */ 66909);
/* harmony import */ var src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/modal.types */ 88729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ 59374);
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/authentication.service */ 47612);
/* harmony import */ var src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/wallet.service */ 75282);
/* harmony import */ var src_app_core_loading_indicator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/loading-indicator.service */ 72028);
/* harmony import */ var src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/qr-scanner.service */ 86542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function SettingsPage_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function SettingsPage_ion_item_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SettingsPage_ion_item_10_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r4.openMyWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "h2", 15)(3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function SettingsPage_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SettingsPage_ng_template_11_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r6.setupWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 18)(3, "h2", 19)(4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
class SettingsPage extends src_app_shared_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BasePageComponent {
    constructor(modalService, authenticationService, walletService, loadingIndicatorService, qrScannerService) {
        super();
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.walletService = walletService;
        this.loadingIndicatorService = loadingIndicatorService;
        this.qrScannerService = qrScannerService;
    }
    ngOnInit() {
        this.loadingIndicatorService.startLoading('settingsPage');
        this.walletService.hasWallet()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => this.loadingIndicatorService.stopLoading('settingsPage')))
            .subscribe(hasWallet => this.hasWallet = hasWallet);
    }
    logout() {
        this.authenticationService.logout();
    }
    openMyWallet() {
        this.modalService.open(src_app_settings_wallet_my_wallet_my_wallet_modal__WEBPACK_IMPORTED_MODULE_0__.MyWalletModal, src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_5__.ModalSize.fullscreen);
    }
    setupWallet() {
        if (this.hasWallet) {
            this.scanQRCode();
        }
        else {
            this.walletService.showCreateWalletNotification();
        }
    }
    ;
    scanQRCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const scanResult = yield this.qrScannerService.startScan();
            if (scanResult.hasContent) {
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_4__.Haptics.impact({ style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_4__.ImpactStyle.Light });
                this.walletService.setWalletPrivateKey(scanResult.content);
            }
        });
    }
    openUserAccountUrl() {
        // Temporally redirect to the website, until we implement the AccountPage with later stories
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.accountUrl });
    }
}
SettingsPage.ɵfac = function SettingsPage_Factory(t) { return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_8__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_loading_indicator_service__WEBPACK_IMPORTED_MODULE_9__.LoadingIndicatorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_10__.QrScannerService)); };
SettingsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SettingsPage, selectors: [["app-settings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 11, consts: [[3, "fullscreen"], ["class", "loading-indicator", 4, "ngIf"], [3, "translucent"], ["color", "translucent"], [1, "settings-title"], ["button", "", "detail", "", 3, "click", 4, "ngIf", "ngIfElse"], ["setupWalletCard", ""], ["routerDirection", "forward", "detail", "", 3, "click"], [1, "ion-text-wrap"], ["translate", "settings.myAccountButton"], ["translate", "settings.myAccountButtonNote"], ["expand", "block", "fill", "outline", "color", "white", 1, "logout-button", 3, "click"], [1, "loading-indicator"], ["src", "assets/images/logo.svg", "alt", "Logo", 1, "logo", "blur-out", "position-absolute", "top-50", "start-50", "translate-middle"], ["button", "", "detail", "", 3, "click"], ["translate", "settings.myWalletButton"], ["translate", "settings.myWalletButtonNote"], ["button", "", "detail", "", 1, "attention", 3, "click"], ["name", "alert-circle-outline", 1, "alert-icon", "ion-float-left"], ["translate", "settings.setupWalletButton"], ["translate", "settings.setupWalletButtonNote"]], template: function SettingsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SettingsPage_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-header", 2)(3, "ion-toolbar", 3)(4, "ion-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-grid")(8, "ion-row")(9, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, SettingsPage_ion_item_10_Template, 4, 0, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, SettingsPage_ng_template_11_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row")(14, "ion-col")(15, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_15_listener() { return ctx.openUserAccountUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "h2", 9)(18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loadingIndicatorService.isLoading("settingsPage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 7, "settings.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.hasWallet)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 9, "settings.logoutButton"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".settings-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 0.25rem;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding: 0 0.875rem;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin: 0.675rem 1rem;\n}\n\nion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 6px;\n}\n\n.alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-left: -0.125rem;\n  padding-top: 0.1875rem;\n  padding-right: 0.5rem;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  margin-bottom: 1rem;\n  position: absolute;\n  bottom: 6.875rem;\n  width: calc(100% - 3rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUFGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDAgMC44NzVyZW07XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMC42NzVyZW0gMXJlbTtcblxuICAmIGgyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG59XG5cbi5hbGVydC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC4xMjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjE4NzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2Ljg3NXJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDNyZW0pO1xufVxuIl19 */"] });


/***/ }),

/***/ 94737:
/*!**************************************************************!*\
  !*** ./src/app/settings/wallet/my-wallet/my-wallet.modal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyWalletModal": () => (/* binding */ MyWalletModal)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/wallet.service */ 75282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_obscure_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/obscure.pipe */ 21451);







const _c0 = function () { return { balance: 36.2715 }; };
const _c1 = function () { return { balance: 0.1412 }; };
class MyWalletModal {
    constructor(modalCtrl, walletService) {
        this.modalCtrl = modalCtrl;
        this.obscured = true;
        this.$walletPrivateKey = walletService.getWalletPrivateKey();
        this.$walletINFBalance = walletService.getINFBalance();
        this.$walletLBTCBalance = walletService.getLBTCBalance();
        this.$walletAssets = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(12); // TODO check where to get the real count.
    }
    ngOnInit() { }
    onClose() {
        this.modalCtrl.dismiss();
    }
    toggleShowKey() {
        this.obscured = !this.obscured;
    }
}
MyWalletModal.ɵfac = function MyWalletModal_Factory(t) { return new (t || MyWalletModal)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_0__.WalletService)); };
MyWalletModal.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MyWalletModal, selectors: [["app-my-wallet"]], decls: 64, vars: 48, consts: [[3, "translucent"], ["color", "translucent"], [1, "my-wallet-title"], ["slot", "primary"], [3, "click"], ["name", "close"], [1, "mt-3", "ion-text-wrap"], [1, "mb-0", "fw-bold"], ["slot", "end", 3, "name", "click"], ["expand", "block", "fill", "solid", "color", "white"], ["expand", "block", "fill", "outline", "color", "white"]], template: function MyWalletModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content")(1, "ion-header", 0)(2, "ion-toolbar", 1)(3, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyWalletModal_Template_ion_button_click_8_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-grid")(11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-label", 6)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "obscure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyWalletModal_Template_ion_icon_click_22_listener() { return ctx.toggleShowKey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-row")(24, "ion-col")(25, "ion-item")(26, "ion-label", 6)(27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-col")(35, "ion-item")(36, "ion-label", 6)(37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-row")(44, "ion-col")(45, "ion-item")(46, "ion-label", 6)(47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ion-row")(55, "ion-col")(56, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-row")(60, "ion-col")(61, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 15, "settings.myWallet.title")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 19, "settings.myWalletPublicKey")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 21, "fhd384ygt7839hf82374fh387", ctx.obscured));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.obscured ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 26, "settings.myWalletINFBalance")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 28, "settings.myWalletINFBalanceValue", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](46, _c0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 31, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 33, "settings.myWalletAssets")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 35, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 37, "settings.myWalletLBTCBalance")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](53, 39, "settings.myWalletLBTCBalanceValue", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](47, _c1)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 42, "settings.myWalletCloneWallet"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 44, "settings.myWalletRestoreWallet"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _shared_obscure_pipe__WEBPACK_IMPORTED_MODULE_1__.ObscurePipe], styles: ["ion-col[_ngcontent-%COMP%] {\n  margin: 0.1875rem;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin: 0.675rem 1rem;\n}\n\nion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.625rem;\n  margin-top: 0.375rem;\n}\n\n.my-wallet-title[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXdhbGxldC5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFHQTtFQUNFLG9CQUFBO0FBQUYiLCJmaWxlIjoibXktd2FsbGV0Lm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcbiAgbWFyZ2luOiAwLjE4NzVyZW07XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwLjY3NXJlbSAxcmVtO1xuXG4gICYgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4zNzVyZW07XG4gIH1cbn1cblxuLm15LXdhbGxldC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 17682:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HapticsImpactStyle": () => (/* binding */ HapticsImpactStyle),
/* harmony export */   "HapticsNotificationType": () => (/* binding */ HapticsNotificationType),
/* harmony export */   "ImpactStyle": () => (/* binding */ ImpactStyle),
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
var ImpactStyle;
(function (ImpactStyle) {
    /**
     * A collision between large, heavy user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Heavy"] = "HEAVY";
    /**
     * A collision between moderately sized user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Medium"] = "MEDIUM";
    /**
     * A collision between small, light user interface elements
     *
     * @since 1.0.0
     */
    ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
    /**
     * A notification feedback type indicating that a task has completed successfully
     *
     * @since 1.0.0
     */
    NotificationType["Success"] = "SUCCESS";
    /**
     * A notification feedback type indicating that a task has produced a warning
     *
     * @since 1.0.0
     */
    NotificationType["Warning"] = "WARNING";
    /**
     * A notification feedback type indicating that a task has failed
     *
     * @since 1.0.0
     */
    NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
/**
 * @deprecated Use `NotificationType`.
 * @since 1.0.0
 */
const HapticsNotificationType = NotificationType;
/**
 * @deprecated Use `ImpactStyle`.
 * @since 1.0.0
 */
const HapticsImpactStyle = ImpactStyle;


/***/ }),

/***/ 66909:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Haptics": () => (/* binding */ Haptics),
/* harmony export */   "HapticsImpactStyle": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsImpactStyle),
/* harmony export */   "HapticsNotificationType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsNotificationType),
/* harmony export */   "ImpactStyle": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ImpactStyle),
/* harmony export */   "NotificationType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.NotificationType)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17682);

const Haptics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Haptics', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_haptics_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 82237)).then(m => new m.HapticsWeb()),
});




/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map