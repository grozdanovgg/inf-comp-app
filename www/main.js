(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 49006:
/*!*****************************!*\
  !*** ./capacitor.config.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
    appId: 'infinite.fleet.companion',
    appName: 'Infinite Fleet',
    webDir: 'www',
    bundledWebRuntime: false,
    ios: {
        contentInset: 'automatic'
    },
    plugins: {
        SplashScreen: {
            launchShowDuration: 2000,
            launchAutoHide: true
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_logged_out_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/logged-out.guard */ 99303);
/* harmony import */ var _core_logged_in_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/logged-in.guard */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule),
        canActivate: [_core_logged_in_guard__WEBPACK_IMPORTED_MODULE_1__.LoggedInGuard],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start_start_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start/start.module */ 98030)).then(m => m.StartModule),
        canActivate: [src_app_core_logged_out_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedOutGuard]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/browser */ 18313);
/* harmony import */ var capacitor_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor.config */ 49006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var src_app_shared_base_subscribe_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base-subscribe-handler.component */ 19002);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_features_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/features-control.service */ 98076);
/* harmony import */ var src_app_core_flagsmith_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/flagsmith.service */ 64397);
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/authentication.service */ 47612);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/wallet.service */ 75282);
/* harmony import */ var _ngx_matomo_tracker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-matomo/tracker */ 273);
/* harmony import */ var src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/qr-scanner.service */ 86542);
/* harmony import */ var src_app_shared_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/qr-scanner/qr-scanner.component */ 45794);


















class AppComponent extends src_app_shared_base_subscribe_handler_component__WEBPACK_IMPORTED_MODULE_3__.BaseSubscribeHandlerComponent {
    constructor(platform, featuresControlService, flagsmithService, ngZone, authenticationService, router, translate, walletService, modalCtrl, matomo, qrScannerService) {
        super();
        this.platform = platform;
        this.featuresControlService = featuresControlService;
        this.flagsmithService = flagsmithService;
        this.ngZone = ngZone;
        this.authenticationService = authenticationService;
        this.router = router;
        this.walletService = walletService;
        this.modalCtrl = modalCtrl;
        this.matomo = matomo;
        this.qrScannerService = qrScannerService;
        this.isAppInCompatible = false;
        translate.setDefaultLang('en');
        translate.use('en');
        this.checkUserConsents();
        this.platform.ready()
            .then(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(this.flagsmithService.refresh()))
            .then(() => this.featuresControlService.checkVersionCompatibility());
    }
    ngOnInit() {
        this.backButtonSub = this.platform.backButton.subscribeWithPriority(10000, () => this.handleBackButton());
        _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.addListener('appStateChange', ({ isActive }) => this.onAppStateChangeasync(isActive));
        _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.addListener('appUrlOpen', ({ url }) => this.onAppUrlOpen(url));
    }
    ngOnDestroy() {
        var _a;
        super.ngOnDestroy();
        _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.removeAllListeners();
        (_a = this.backButtonSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    checkUserConsents() {
        this.matomo.requireCookieConsent();
        this.matomo.requireConsent();
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.authenticationService.getUserInfo().subscribe(({ user_metadata }) => {
            if (user_metadata === null || user_metadata === void 0 ? void 0 : user_metadata.pxWebCookieConsent) {
                this.matomo.setCookieConsentGiven();
            }
            if (user_metadata === null || user_metadata === void 0 ? void 0 : user_metadata.pxWebTrackingConsent) {
                this.matomo.setConsentGiven();
            }
        });
    }
    onAppUrlOpen(url) {
        const expectedUrl = `${capacitor_config__WEBPACK_IMPORTED_MODULE_2__["default"].appId}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.auth0.domain}`;
        if (url === null || url === void 0 ? void 0 : url.startsWith(expectedUrl)) {
            if (url.includes('state=') &&
                (url.includes('error=') || url.includes('code='))) {
                this.handleOnLogin(url);
            }
            else {
                this.handleOnLogout(url);
            }
        }
    }
    handleOnLogin(url) {
        this.ngZone.run(() => {
            this.authenticationService.auth0
                .handleRedirectCallback(url)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.authenticationService.auth0.isAuthenticated$), 
            /**
             * Because of a bug in the auth0 SDK
             * isAuthenticated is not true immediatly after login, so we stay subscribed
             * to it untill the value is true, then redirect to /tabs
             * */
            (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(isAuthenticated => !isAuthenticated, true), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.filter)(data => !!data))
                .subscribe(() => {
                this.checkUserConsents();
                if (this.featuresControlService.deviceInfo.platform === 'ios') {
                    _capacitor_browser__WEBPACK_IMPORTED_MODULE_1__.Browser.close();
                }
                this.router.navigateByUrl('/tabs')
                    .then(() => {
                    this.walletService.hasWallet()
                        .subscribe((hasWallet) => {
                        if (!hasWallet) {
                            return this.walletService.showCreateWalletNotification();
                        }
                    });
                });
            });
        });
    }
    handleOnLogout(url) {
        console.log('Returned url without state/code/error', url);
        if (this.featuresControlService.deviceInfo.platform === 'ios') {
            _capacitor_browser__WEBPACK_IMPORTED_MODULE_1__.Browser.close();
        }
        this.ngZone.run(() => {
            console.log('Navigating to /tabs');
            this.router.navigateByUrl('/login');
        });
    }
    onAppStateChangeasync(isActive) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log('App state changed. Is active?', isActive);
            if (isActive) {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(this.flagsmithService.refresh());
                yield this.featuresControlService.checkVersionCompatibility();
            }
        });
    }
    handleBackButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.qrScannerService.isStarted()) {
                this.qrScannerService.stopScan();
            }
            else {
                const isModalOpened = yield this.modalCtrl.getTop();
                if (isModalOpened) {
                    this.modalCtrl.dismiss();
                }
                else if (this.router.url === '/tabs/warehouse') {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.exitApp();
                }
                else if (this.router.url === '/login') {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.exitApp();
                }
                else {
                    this.router.navigateByUrl('tabs/warehouse');
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_features_control_service__WEBPACK_IMPORTED_MODULE_5__.FeaturesControlService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_flagsmith_service__WEBPACK_IMPORTED_MODULE_6__.FlagsmithService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_wallet_service__WEBPACK_IMPORTED_MODULE_8__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_matomo_tracker__WEBPACK_IMPORTED_MODULE_20__.MatomoTracker), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_9__.QrScannerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [[1, "ion-app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-app", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-qr-scanner");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRouterOutlet, src_app_shared_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_10__.QrScannerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "customTranslationLoaderFactory": () => (/* binding */ customTranslationLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_matomo_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-matomo/router */ 31481);
/* harmony import */ var _ngx_matomo_tracker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-matomo/tracker */ 273);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var capacitor_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capacitor.config */ 49006);
/* harmony import */ var src_app_core_translation_loaoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/translation-loaoder */ 81895);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _ngx_grpc_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-grpc/core */ 38236);
/* harmony import */ var _ngx_grpc_grpc_web_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-grpc/grpc-web-client */ 4777);
/* harmony import */ var src_app_shared_qr_scanner_qr_scanner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/qr-scanner/qr-scanner.module */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
























// AoT requires an exported function for factories
const customTranslationLoaderFactory = () => new src_app_core_translation_loaoder__WEBPACK_IMPORTED_MODULE_1__.CustomTranslationLoader();
let redirectUri = `${capacitor_config__WEBPACK_IMPORTED_MODULE_0__["default"].appId}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}`;
if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mobile) {
    redirectUri = 'http://localhost:4200';
}
class AppModule {
    ngDoBootstrap(appRef) {
        appRef.bootstrap(_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
            useClass: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthHttpInterceptor,
            multi: true
        }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthModule.forRoot({
                domain: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain,
                clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.clientId,
                consent: 'prompt',
                audience: `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}/api/v2/`,
                scope: 'read:current_user',
                redirectUri,
                cacheLocation: 'localstorage',
                useRefreshTokens: true,
                httpInterceptor: {
                    allowedList: [
                        `https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}/api/v2/*`,
                        `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.nftServiceBaseURL}/*`,
                        `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.backend}/ships*`,
                        `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.custodialWalletService}/*`,
                        // `${environment.platformPublic}/*`,
                    ]
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot({
                mode: 'md'
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: customTranslationLoaderFactory
                }
            }),
            _ngx_matomo_tracker__WEBPACK_IMPORTED_MODULE_13__.NgxMatomoTrackerModule.forRoot({
                siteId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.matomo.siteId,
                trackerUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.matomo.trackerUrl
            }),
            _ngx_matomo_router__WEBPACK_IMPORTED_MODULE_14__.NgxMatomoRouterModule.forRoot({
                interceptors: [_ngx_matomo_router__WEBPACK_IMPORTED_MODULE_14__.MatomoRouteDataInterceptor]
            }),
            _ngx_grpc_core__WEBPACK_IMPORTED_MODULE_15__.GrpcCoreModule.forRoot(),
            _ngx_grpc_grpc_web_client__WEBPACK_IMPORTED_MODULE_16__.GrpcWebClientModule.forRoot({
                settings: {
                    host: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.platformPublic,
                }
            }),
            _ngx_grpc_core__WEBPACK_IMPORTED_MODULE_15__.GrpcLoggerModule.forRoot({
                settings: {
                    enabled: !src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            src_app_shared_qr_scanner_qr_scanner_module__WEBPACK_IMPORTED_MODULE_5__.QrScannerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_matomo_tracker__WEBPACK_IMPORTED_MODULE_13__.NgxMatomoTrackerModule, _ngx_matomo_router__WEBPACK_IMPORTED_MODULE_14__.NgxMatomoRouterModule, _ngx_grpc_core__WEBPACK_IMPORTED_MODULE_15__.GrpcCoreModule, _ngx_grpc_grpc_web_client__WEBPACK_IMPORTED_MODULE_16__.GrpcWebClientModule, _ngx_grpc_core__WEBPACK_IMPORTED_MODULE_15__.GrpcLoggerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        src_app_shared_qr_scanner_qr_scanner_module__WEBPACK_IMPORTED_MODULE_5__.QrScannerModule] }); })();


/***/ }),

/***/ 47612:
/*!************************************************!*\
  !*** ./src/app/core/authentication.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/browser */ 18313);
/* harmony import */ var capacitor_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capacitor.config */ 49006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 89196);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ 3863);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);







class AuthenticationService {
    constructor(auth0, http) {
        this.auth0 = auth0;
        this.http = http;
        this.onLogout$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    login() {
        return this.auth0.buildAuthorizeUrl()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((url) => _capacitor_browser__WEBPACK_IMPORTED_MODULE_0__.Browser.open({ url, windowName: '_self' })))
            .subscribe();
    }
    logout() {
        let returnTo = `${capacitor_config__WEBPACK_IMPORTED_MODULE_1__["default"].appId}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}`;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mobile) {
            returnTo = 'http://localhost:4200';
        }
        this.auth0.buildLogoutUrl({ returnTo })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((url) => {
            this.auth0.logout({ localOnly: true });
            this.clearCache();
            _capacitor_browser__WEBPACK_IMPORTED_MODULE_0__.Browser.open({ url, windowName: '_self' });
            this.onLogout$.next(true);
        }))
            .subscribe();
    }
    getUser() {
        return this.auth0.user$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(user => Boolean(user)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1));
    }
    getUserInfo() {
        if (!this.userInfoCache$) {
            this.userInfoCache$ = this.getUser()
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ sub }) => {
                console.log(sub);
                return this.http.get(`https://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}/api/v2/users/${sub}`);
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
        }
        return this.userInfoCache$;
    }
    clearCache() {
        this.userInfoCache$ = undefined;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98076:
/*!**************************************************!*\
  !*** ./src/app/core/features-control.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesControlService": () => (/* binding */ FeaturesControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! compare-versions */ 28191);
/* harmony import */ var src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/features-control.types */ 74775);
/* harmony import */ var src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/flagsmith-types */ 88930);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_flagsmith_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/flagsmith.service */ 64397);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












class FeaturesControlService {
    constructor(flagsmithService, alertController, translate) {
        this.flagsmithService = flagsmithService;
        this.alertController = alertController;
        this.translate = translate;
        this.messageMap = new Map([
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.appDisabled, this.translate.instant('appIncompatabiliity.AppDisabled')],
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.operatingSystemNotSupported, this.translate.instant('appIncompatabiliity.operatingSystemNotSupported')],
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.appVersionNotSupported, this.translate.instant('appIncompatabiliity.appVersionNotSupported')],
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.noInternet, this.translate.instant('appIncompatabiliity.noInternet')],
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.flagsmithUnreachable, this.translate.instant('appIncompatabiliity.flagsmithUnreachable')],
            [src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.platformNotSupported, this.translate.instant('appIncompatabiliity.platformNotSupported')]
        ]);
        this.versionCheckInProgress = false;
        _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.addListener('networkStatusChange', this.networkConnectionListener.bind(this));
    }
    checkVersionCompatibility() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.versionCheckInProgress = true;
            // eslint-disable-next-line max-len
            this.supportedVersions = this.flagsmithService
                .getFlag(src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_4__.Flags.companionApp)
                .feature_state_value
                .supportedVersions;
            console.log('Check for supported versions: ', this.supportedVersions);
            if (!this.deviceInfo) {
                this.deviceInfo = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
            }
            if (this.deviceInfo.platform === 'ios' || this.deviceInfo.platform === 'android') {
                this.appInfo = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_0__.App.getInfo();
            }
            /**
             * Skip app compatibility checks in browser mode
             */
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mobile) {
                console.log('Browser environment detected, skipping app versions compatibility checks');
                this.versionCheckInProgress = false;
                return;
            }
            /**
             * Mind the order of this conditions, because we show only the most basic reason first
             * and then stop checking
             */
            if (!this.isPlatformSupported()) {
                this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.platformNotSupported);
                return;
            }
            if (!this.isOsVersionSupported()) {
                this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.operatingSystemNotSupported);
                return;
            }
            if (!this.isAppVersionSupported()) {
                this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.appVersionNotSupported);
                return;
            }
            if (!this.isAppEnabled()) {
                this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.appDisabled);
                return;
            }
            if (!this.flagsmithAvailable()) {
                this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.flagsmithUnreachable);
                return;
            }
            this.setIncopatability(null);
        });
    }
    setIncopatability(appIncompatabiliityReason) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('setting app incompatibility reason', appIncompatabiliityReason);
            this.versionCheckInProgress = false;
            this.currentAppIncompatibility = appIncompatabiliityReason;
            try {
                yield this.alertController.dismiss('incompatability-alert');
            }
            catch (err) { }
            if (this.currentAppIncompatibility) {
                const alert = yield this.alertController.create({
                    id: 'incompatability-alert',
                    subHeader: this.messageMap.get(this.currentAppIncompatibility),
                    cssClass: 'incompatability-alert',
                    backdropDismiss: false,
                    keyboardClose: false
                });
                return yield alert.present();
            }
        });
    }
    isPlatformSupported() {
        console.log('checking isPlatformSupported');
        return this.deviceInfo.platform === 'ios' || this.deviceInfo.platform === 'android';
    }
    isOsVersionSupported() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        console.log('checking isOsVersionSupported');
        console.log('supported versions', this.supportedVersions);
        if (((_a = this.deviceInfo) === null || _a === void 0 ? void 0 : _a.operatingSystem) === 'ios') {
            console.log('ios operating system detected');
            return this.isVersionCompatible(this.deviceInfo.osVersion, (_c = (_b = this.supportedVersions) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.min, (_e = (_d = this.supportedVersions) === null || _d === void 0 ? void 0 : _d.ios) === null || _e === void 0 ? void 0 : _e.max);
        }
        else if (((_f = this.deviceInfo) === null || _f === void 0 ? void 0 : _f.operatingSystem) === 'android') {
            console.log('android operating system detected', this.deviceInfo.osVersion);
            const versionTextArray = this.deviceInfo.osVersion.split(' ');
            // Cover the cases if the osVersion is "Andoid xx" or just "xx".
            const androidVersion = versionTextArray[1] || versionTextArray[0];
            return this.isVersionCompatible(androidVersion, (_h = (_g = this.supportedVersions) === null || _g === void 0 ? void 0 : _g.android) === null || _h === void 0 ? void 0 : _h.min, (_k = (_j = this.supportedVersions) === null || _j === void 0 ? void 0 : _j.android) === null || _k === void 0 ? void 0 : _k.max);
        }
        return false;
    }
    isAppVersionSupported() {
        var _a, _b, _c, _d, _e, _f;
        console.log('checking isAppVersionSupported', (_a = this.appInfo) === null || _a === void 0 ? void 0 : _a.version);
        if ((_b = this.appInfo) === null || _b === void 0 ? void 0 : _b.version) {
            return this.isVersionCompatible(this.appInfo.version, (_d = (_c = this.supportedVersions) === null || _c === void 0 ? void 0 : _c.app) === null || _d === void 0 ? void 0 : _d.min, (_f = (_e = this.supportedVersions) === null || _e === void 0 ? void 0 : _e.app) === null || _f === void 0 ? void 0 : _f.max);
        }
        return false;
    }
    isAppEnabled() {
        console.log('checking isAppEnabled');
        return this.flagsmithService.getFlag(src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_4__.Flags.companionApp).enabled;
    }
    flagsmithAvailable() {
        console.log('checking flagsmithAvailable');
        if (this.flagsmithService.error) {
            return false;
        }
        return true;
    }
    networkConnectionListener(status) {
        console.log('Network status changed', status);
        if (status.connected) {
            if (this.currentAppIncompatibility === src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.noInternet) {
                this.setIncopatability(null);
            }
        }
        else {
            this.setIncopatability(src_app_core_features_control_types__WEBPACK_IMPORTED_MODULE_3__.AppIncompatabiliityReason.noInternet);
        }
    }
    isVersionCompatible(version, min, max) {
        if (min && max) {
            return (0,compare_versions__WEBPACK_IMPORTED_MODULE_8__.compare)(version, min, '>=') && (0,compare_versions__WEBPACK_IMPORTED_MODULE_8__.compare)(version, max, '<=');
        }
        else if (min) {
            return (0,compare_versions__WEBPACK_IMPORTED_MODULE_8__.compare)(version, min, '>=');
        }
        else if (max) {
            return (0,compare_versions__WEBPACK_IMPORTED_MODULE_8__.compare)(version, max, '<=');
        }
        return false;
    }
}
FeaturesControlService.ɵfac = function FeaturesControlService_Factory(t) { return new (t || FeaturesControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_core_flagsmith_service__WEBPACK_IMPORTED_MODULE_6__.FlagsmithService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService)); };
FeaturesControlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: FeaturesControlService, factory: FeaturesControlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74775:
/*!************************************************!*\
  !*** ./src/app/core/features-control.types.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppIncompatabiliityReason": () => (/* binding */ AppIncompatabiliityReason)
/* harmony export */ });
var AppIncompatabiliityReason;
(function (AppIncompatabiliityReason) {
    AppIncompatabiliityReason["appDisabled"] = "appDisabled";
    AppIncompatabiliityReason["operatingSystemNotSupported"] = "operatingSystemNotSupported";
    AppIncompatabiliityReason["appVersionNotSupported"] = "appVersionNotSupported";
    AppIncompatabiliityReason["noInternet"] = "noInternet";
    AppIncompatabiliityReason["flagsmithUnreachable"] = "flagsmithUnreachable";
    AppIncompatabiliityReason["platformNotSupported"] = "platformNotSupported";
})(AppIncompatabiliityReason || (AppIncompatabiliityReason = {}));
;


/***/ }),

/***/ 64397:
/*!*******************************************!*\
  !*** ./src/app/core/flagsmith.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlagsmithService": () => (/* binding */ FlagsmithService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/flagsmith-types */ 88930);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* eslint-disable @typescript-eslint/naming-convention */







class FlagsmithService {
    constructor(http) {
        this.http = http;
        this.flags = new Map();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'x-environment-key': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.flagsmithKey,
                Accept: 'application/json'
            })
        };
        this.endpoints = {
            flag: 'flags/',
            identify: 'identities/?identifier=',
            traits: 'traits/'
        };
    }
    getFlag(flag) {
        return this.flags.get(flag);
    }
    refresh() {
        console.log('refreshing flagsmith flags');
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.flagsmithHost}/${this.endpoints.flag}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((flagsJson) => {
            this.setFlags(flagsJson.map(flagData => new src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_0__.Flag(flagData)));
            this.error = undefined;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
            console.error('Error fetching Flagsmith ', err);
            this.error = new Error(err);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
    }
    setFlags(flagsJson) {
        flagsJson
            .filter(flag => Object.values(src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_0__.Flags).includes(flag.feature.name))
            .forEach(flag => this.flags.set(flag.feature.name, new src_app_models_flagsmith_types__WEBPACK_IMPORTED_MODULE_0__.Flag(flag)));
        console.log('flags updated to ', this.flags);
        return this.flags;
    }
}
FlagsmithService.ɵfac = function FlagsmithService_Factory(t) { return new (t || FlagsmithService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FlagsmithService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FlagsmithService, factory: FlagsmithService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71904:
/*!*****************************************!*\
  !*** ./src/app/core/logged-in.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInGuard": () => (/* binding */ LoggedInGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 47612);




class LoggedInGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        return this.authenticationService.auth0.isAuthenticated$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((isAuthenticated) => {
            console.log('LoggedInGuard isAuthenticated', isAuthenticated, state.url);
            if (!isAuthenticated) {
                console.log('Redirecting to /login');
                this.router.navigateByUrl('/login');
            }
        }));
    }
}
LoggedInGuard.ɵfac = function LoggedInGuard_Factory(t) { return new (t || LoggedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
LoggedInGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoggedInGuard, factory: LoggedInGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99303:
/*!******************************************!*\
  !*** ./src/app/core/logged-out.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedOutGuard": () => (/* binding */ LoggedOutGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/authentication.service */ 47612);




class LoggedOutGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        return this.authenticationService.auth0.isAuthenticated$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((isAuthenticated) => {
            console.log('LoggedOutGuard isAuthenticated', isAuthenticated, state.url);
            if (isAuthenticated) {
                console.log('Redirecting to /');
                this.router.navigateByUrl('/');
            }
            return !isAuthenticated;
        }));
    }
}
LoggedOutGuard.ɵfac = function LoggedOutGuard_Factory(t) { return new (t || LoggedOutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
LoggedOutGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoggedOutGuard, factory: LoggedOutGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86542:
/*!********************************************!*\
  !*** ./src/app/core/qr-scanner.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerService": () => (/* binding */ QrScannerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 48353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class QrScannerService {
    constructor() {
        this.started = false;
    }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.started = true;
                const permissionGranted = yield this.checkUserPermission();
                if (permissionGranted) {
                    yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.hideBackground();
                    document.body.classList.add('qr-scanner-active');
                    const scanResult = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.startScan({
                        targetedFormats: [_capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.SupportedFormat.QR_CODE]
                    });
                    if (scanResult.hasContent) {
                        // Continue the decrypting of the wallet with the next story,
                        // notes: https://pixelmatic.slack.com/archives/C03SNCF4LUQ/p1666912749957049
                        console.log(scanResult.content);
                        return scanResult;
                    }
                }
            }
            finally {
                this.started = false;
                document.body.classList.remove('qr-scanner-active');
                _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.showBackground();
            }
        });
    }
    stopScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.started = false;
            yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.stopScan();
            yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.showBackground();
            document.body.classList.remove('qr-scanner-active');
        });
    }
    isStarted() {
        return this.started;
    }
    checkUserPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.softCheckUserPermission()) || (yield this.forceCheckUserPermission());
        });
    }
    ;
    softCheckUserPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.checkPermission({ force: false });
            console.log('SOFT CHECK', status);
            if (status.granted) {
                return true;
            }
            if (status.denied || status.restricted || status.unknown) {
                const confirmRedirect = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
                if (confirmRedirect) {
                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.openAppSettings();
                }
            }
            return false;
        });
    }
    ;
    forceCheckUserPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const forceCheck = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner.checkPermission({ force: true });
            console.log('FORCE CHECK', forceCheck);
            if (forceCheck.granted) {
                return true;
            }
            return false;
        });
    }
    ;
}
QrScannerService.ɵfac = function QrScannerService_Factory(t) { return new (t || QrScannerService)(); };
QrScannerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QrScannerService, factory: QrScannerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81895:
/*!*********************************************!*\
  !*** ./src/app/core/translation-loaoder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var src_app_core_i18n_de_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var src_app_core_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var src_app_core_i18n_es_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var src_app_core_i18n_fr_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var src_app_core_i18n_it_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var src_app_core_i18n_jp_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
var src_app_core_i18n_ko_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
var src_app_core_i18n_pt_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache;
var src_app_core_i18n_ru_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache;
var src_app_core_i18n_zh_TW_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache;
var src_app_core_i18n_zh_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomTranslationLoader": () => (/* binding */ CustomTranslationLoader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_core_i18n_de_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/i18n/de.json */ 57518);
/* harmony import */ var src_app_core_i18n_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/i18n/en.json */ 86944);
/* harmony import */ var src_app_core_i18n_es_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/i18n/es.json */ 60375);
/* harmony import */ var src_app_core_i18n_fr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/i18n/fr.json */ 8397);
/* harmony import */ var src_app_core_i18n_it_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/i18n/it.json */ 74363);
/* harmony import */ var src_app_core_i18n_jp_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/i18n/jp.json */ 4019);
/* harmony import */ var src_app_core_i18n_ko_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/i18n/ko.json */ 74741);
/* harmony import */ var src_app_core_i18n_pt_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/i18n/pt.json */ 76606);
/* harmony import */ var src_app_core_i18n_ru_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/i18n/ru.json */ 57850);
/* harmony import */ var src_app_core_i18n_zh_TW_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/i18n/zh-TW.json */ 61511);
/* harmony import */ var src_app_core_i18n_zh_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/i18n/zh.json */ 40257);












class CustomTranslationLoader {
    constructor() {
        this.languages = new Map([
            ['de', /*#__PURE__*/ (src_app_core_i18n_de_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (src_app_core_i18n_de_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(src_app_core_i18n_de_json__WEBPACK_IMPORTED_MODULE_0__, 2)))],
            ['en', /*#__PURE__*/ (src_app_core_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (src_app_core_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(src_app_core_i18n_en_json__WEBPACK_IMPORTED_MODULE_1__, 2)))],
            ['es', /*#__PURE__*/ (src_app_core_i18n_es_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (src_app_core_i18n_es_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(src_app_core_i18n_es_json__WEBPACK_IMPORTED_MODULE_2__, 2)))],
            ['fr', /*#__PURE__*/ (src_app_core_i18n_fr_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (src_app_core_i18n_fr_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(src_app_core_i18n_fr_json__WEBPACK_IMPORTED_MODULE_3__, 2)))],
            ['it', /*#__PURE__*/ (src_app_core_i18n_it_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (src_app_core_i18n_it_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(src_app_core_i18n_it_json__WEBPACK_IMPORTED_MODULE_4__, 2)))],
            ['jp', /*#__PURE__*/ (src_app_core_i18n_jp_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (src_app_core_i18n_jp_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(src_app_core_i18n_jp_json__WEBPACK_IMPORTED_MODULE_5__, 2)))],
            ['ko', /*#__PURE__*/ (src_app_core_i18n_ko_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (src_app_core_i18n_ko_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(src_app_core_i18n_ko_json__WEBPACK_IMPORTED_MODULE_6__, 2)))],
            ['pt', /*#__PURE__*/ (src_app_core_i18n_pt_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache || (src_app_core_i18n_pt_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache = __webpack_require__.t(src_app_core_i18n_pt_json__WEBPACK_IMPORTED_MODULE_7__, 2)))],
            ['ru', /*#__PURE__*/ (src_app_core_i18n_ru_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache || (src_app_core_i18n_ru_json__WEBPACK_IMPORTED_MODULE_8___namespace_cache = __webpack_require__.t(src_app_core_i18n_ru_json__WEBPACK_IMPORTED_MODULE_8__, 2)))],
            ['zh-TW', /*#__PURE__*/ (src_app_core_i18n_zh_TW_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache || (src_app_core_i18n_zh_TW_json__WEBPACK_IMPORTED_MODULE_9___namespace_cache = __webpack_require__.t(src_app_core_i18n_zh_TW_json__WEBPACK_IMPORTED_MODULE_9__, 2)))],
            ['zh', /*#__PURE__*/ (src_app_core_i18n_zh_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache || (src_app_core_i18n_zh_json__WEBPACK_IMPORTED_MODULE_10___namespace_cache = __webpack_require__.t(src_app_core_i18n_zh_json__WEBPACK_IMPORTED_MODULE_10__, 2)))]
        ]);
    }
    getTranslation(language) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.languages.get(language) || this.languages.get('en'));
    }
}


/***/ }),

/***/ 75282:
/*!****************************************!*\
  !*** ./src/app/core/wallet.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletService": () => (/* binding */ WalletService)
/* harmony export */ });
/* harmony import */ var _pixelmatic_ewk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixelmatic/ewk */ 13508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 89196);
/* harmony import */ var src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/modal.types */ 88729);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/authentication.service */ 47612);
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ 59374);








class WalletService {
    constructor(authenticationService, modalService) {
        this.authenticationService = authenticationService;
        this.modalService = modalService;
    }
    getINFBalance() {
        return this.getBalances()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(balances => { var _a, _b; return (_b = (_a = balances.find(balance => balance.ticker === 'INF')) === null || _a === void 0 ? void 0 : _a.balance) !== null && _b !== void 0 ? _b : 0; }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
    }
    getLBTCBalance() {
        return this.getBalances()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(balances => { var _a, _b; return (_b = (_a = balances.find(balance => balance.ticker === 'L-BTC')) === null || _a === void 0 ? void 0 : _a.balance) !== null && _b !== void 0 ? _b : 0; }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
    }
    hasWallet() {
        return this.getExoWalletKit()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(ewk => ewk.hasWallet()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
    }
    getBalances() {
        return this.getExoWalletKit()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(ewk => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(ewk.getBalances()
            .then(balances => {
            console.log(balances);
            return balances;
        }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
    }
    showCreateWalletNotification() {
        return this.modalService.openNotification({
            title: 'settings.createWalletPopUp.title',
            content: ['settings.createWalletPopUp.descriptionPart1', 'settings.createWalletPopUp.descriptionPart2'],
            buttonText: 'settings.createWalletPopUp.closeBtn',
            buttonStyle: src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_1__.ModalButtonStyle.outline
        }, src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_1__.ModalSize.m);
    }
    ;
    setWalletPrivateKey(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
            key: 'walletPrivateKey',
            value: key
        }));
    }
    getWalletPrivateKey() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(_capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({ key: 'walletPrivateKey' }))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(getResult => getResult.value));
    }
    getExoWalletKit() {
        if (!this.exoWalletKit$) {
            this.exoWalletKit$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)({
                userInfo: this.authenticationService.getUserInfo(),
                token: this.authenticationService.auth0.getAccessTokenSilently()
            }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(({ userInfo, token }) => new _pixelmatic_ewk__WEBPACK_IMPORTED_MODULE_0__.ExoWalletKit({
                esploraURL: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.walletEsploraURL,
                authConfig: {
                    managementAPIUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth0.domain}/`
                },
                walletServiceHost: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.walletServiceHost,
                userId: userInfo.user_id,
                network: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.network,
                builtInAssets: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.builtInAssets,
                getAccessToken: () => token
            })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
        }
        return this.exoWalletKit$;
    }
}
WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService)); };
WalletService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88930:
/*!*******************************************!*\
  !*** ./src/app/models/flagsmith-types.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feature": () => (/* binding */ Feature),
/* harmony export */   "Flag": () => (/* binding */ Flag),
/* harmony export */   "Flags": () => (/* binding */ Flags)
/* harmony export */ });
var Flags;
(function (Flags) {
    Flags["companionApp"] = "companion_app";
    Flags["shipDeposit"] = "ship_deposit";
    Flags["shipWithdraw"] = "ship_withdraw";
})(Flags || (Flags = {}));
class Flag {
    constructor(data) {
        Object.assign(this, data);
        if (this.feature) {
            this.feature = new Feature(this.feature);
        }
        // Serialize only if its valid JSON
        try {
            if (this.feature_state_value) {
                this.feature_state_value = JSON.parse(this.feature_state_value);
            }
        }
        catch (error) {
        }
    }
}
;
class Feature {
    constructor(data) {
        Object.assign(this, data);
        try {
            this.initial_value = JSON.parse(this.initial_value);
        }
        catch (error) {
        }
    }
}
;


/***/ }),

/***/ 19002:
/*!************************************************************!*\
  !*** ./src/app/shared/base-subscribe-handler.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSubscribeHandlerComponent": () => (/* binding */ BaseSubscribeHandlerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class BaseSubscribeHandlerComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnDestroy() {
        if (this.destroy$) {
            this.destroy$.next(true);
            this.destroy$.complete();
        }
    }
}
BaseSubscribeHandlerComponent.ɵfac = function BaseSubscribeHandlerComponent_Factory(t) { return new (t || BaseSubscribeHandlerComponent)(); };
BaseSubscribeHandlerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseSubscribeHandlerComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseSubscribeHandlerComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 38975:
/*!**********************************************!*\
  !*** ./src/app/shared/modal/modal.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_modal_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modal/notification/notification.component */ 49999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class ModalModule {
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(); };
ModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [src_app_shared_modal_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule] }); })();


/***/ }),

/***/ 59374:
/*!***********************************************!*\
  !*** ./src/app/shared/modal/modal.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modal/modal.types */ 88729);
/* harmony import */ var src_app_shared_modal_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/notification/notification.component */ 49999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);





class ModalService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    openNotification({ title, content, buttonText, buttonStyle } = {}, size) {
        return this.openModal({
            component: src_app_shared_modal_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent,
            componentProps: {
                title,
                content,
                buttonText,
                buttonStyle: buttonStyle || src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__.ModalButtonStyle.solid
            }
        }, size);
    }
    open(component, size) {
        return this.openModal({ component }, size);
    }
    openModal(options, size = src_app_shared_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__.ModalSize.m) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.modalController.create(Object.assign(Object.assign({}, options), { cssClass: size }))
            .then(modal => {
            modal.present();
            return modal.onDidDismiss()
                .catch(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Modal throws an error')));
        }));
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController)); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88729:
/*!*********************************************!*\
  !*** ./src/app/shared/modal/modal.types.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalButtonStyle": () => (/* binding */ ModalButtonStyle),
/* harmony export */   "ModalSize": () => (/* binding */ ModalSize)
/* harmony export */ });
var ModalSize;
(function (ModalSize) {
    ModalSize["xs"] = "modal-extra-small";
    ModalSize["s"] = "modal-small";
    ModalSize["m"] = "modal-medium";
    ModalSize["l"] = "modal-large";
    ModalSize["xl"] = "modal-extra-large";
    ModalSize["fullscreen"] = "modal-fullscreen";
})(ModalSize || (ModalSize = {}));
var ModalButtonStyle;
(function (ModalButtonStyle) {
    ModalButtonStyle["outline"] = "outline";
    ModalButtonStyle["solid"] = "solid";
})(ModalButtonStyle || (ModalButtonStyle = {}));


/***/ }),

/***/ 49999:
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal/notification/notification.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




function NotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 4)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r0.title), " ");
} }
function NotificationComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const paragraph_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, paragraph_r3), " ");
} }
function NotificationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_ng_container_2_div_1_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.content);
} }
class NotificationComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss() {
        this.modalController.dismiss();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 6, consts: [[1, "container", "px-3"], ["class", "row my-4", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col"], [1, "footer"], ["expand", "block", "color", "white", 1, "mt-4", 3, "fill", "click"], [1, "row", "my-4"], [1, "title"], ["class", "row", 4, "ngFor", "ngForOf"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_Template_ion_button_click_6_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fill", ctx.buttonStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.buttonText), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 21451:
/*!****************************************!*\
  !*** ./src/app/shared/obscure.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObscurePipe": () => (/* binding */ ObscurePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ObscurePipe {
    transform(value, obscure = true) {
        return obscure
            ? value === null || value === void 0 ? void 0 : value.replace(/./g, '*')
            : value;
    }
}
ObscurePipe.ɵfac = function ObscurePipe_Factory(t) { return new (t || ObscurePipe)(); };
ObscurePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "obscure", type: ObscurePipe, pure: true });


/***/ }),

/***/ 45794:
/*!***********************************************************!*\
  !*** ./src/app/shared/qr-scanner/qr-scanner.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerComponent": () => (/* binding */ QrScannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/qr-scanner.service */ 86542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





class QrScannerComponent {
    constructor(qrScannerService) {
        this.qrScannerService = qrScannerService;
    }
    cancel() {
        this.qrScannerService.stopScan();
    }
}
QrScannerComponent.ɵfac = function QrScannerComponent_Factory(t) { return new (t || QrScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_qr_scanner_service__WEBPACK_IMPORTED_MODULE_0__.QrScannerService)); };
QrScannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QrScannerComponent, selectors: [["app-qr-scanner"]], decls: 12, vars: 8, consts: [[1, "qr-scanner-container"], [1, "dimmed-area"], [1, "header", 3, "click"], ["name", "chevron-back-outline", 1, "me-3"], [3, "innerHTML"], [1, "visible-area"]], template: function QrScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QrScannerComponent_Template_div_click_2_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "settings.importWallet.back")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "settings.importWallet.qrScannerNote"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".qr-scanner-container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.qr-scanner-container[_ngcontent-%COMP%]   .dimmed-area[_ngcontent-%COMP%] {\n  width: calc(100% - 3rem);\n  max-width: min(500px, 80vh);\n  margin-bottom: 5rem;\n}\n.qr-scanner-container[_ngcontent-%COMP%]   .dimmed-area[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  top: calc(env(safe-area-inset-top) + 1.5rem);\n  position: absolute;\n}\n.qr-scanner-container[_ngcontent-%COMP%]   .visible-area[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n}\n.qr-scanner-container[_ngcontent-%COMP%]   .visible-area[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdFO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRE4iLCJmaWxlIjoicXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xci1zY2FubmVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmRpbW1lZC1hcmVhIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gM3JlbSk7XG4gICAgbWF4LXdpZHRoOiBtaW4oNTAwcHgsIDgwdmgpO1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxLjVyZW0pO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuXG4gIC52aXNpYmxlLWFyZWEge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1570:
/*!********************************************************!*\
  !*** ./src/app/shared/qr-scanner/qr-scanner.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerModule": () => (/* binding */ QrScannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_shared_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/qr-scanner/qr-scanner.component */ 45794);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class QrScannerModule {
}
QrScannerModule.ɵfac = function QrScannerModule_Factory(t) { return new (t || QrScannerModule)(); };
QrScannerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QrScannerModule });
QrScannerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QrScannerModule, { declarations: [src_app_shared_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.QrScannerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule], exports: [src_app_shared_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.QrScannerComponent] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modal/modal.module */ 38975);
/* harmony import */ var _obscure_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obscure.pipe */ 21451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule,
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_obscure_pipe__WEBPACK_IMPORTED_MODULE_1__.ObscurePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule,
        _obscure_pipe__WEBPACK_IMPORTED_MODULE_1__.ObscurePipe] }); })();


/***/ }),

/***/ 1470:
/*!************************************************!*\
  !*** ./src/environments/environment.common.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonEnv": () => (/* binding */ commonEnv)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const commonEnv = {
    backend: '',
    accountUrl: '',
    production: false,
    mobile: true,
    flagsmithKey: 'g8muKyQydFCGFk4999uSRV',
    flagsmithHost: 'https://features.pixelmatic.com/api/v1',
    walletServiceHost: '',
    walletEsploraURL: 'https://liquid.network/liquidtestnet/api',
    nftServiceBaseURL: '',
    custodialWalletService: '',
    platformPublic: 'https://platform-web.dev.pixelmatic.net',
    auth0: {
        domain: 'exordium.eu.auth0.com',
        clientId: '1JTjTdWVXatPYsx0I1F3vIXcRa4ooN0m'
    },
    builtInAssets: {
        liquid: '',
        inf: '',
        usdt: ''
    },
    network: '',
    grpc: {
        public: {
            namespace: 'inf',
            service: 'public',
            version: '0.0.1',
        }
    },
    matomo: {
        siteId: 6,
        trackerUrl: 'https://analytics.am.pixelmatic.com/'
    }
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _environment_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.common */ 1470);
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone-error */ 30771);
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__);

const WEBSITE_URL = 'https://dev-vnl8io8nsfazar3.inf-store.infinitefleet.net';
const env = {
    mobile: true,
    backend: `${WEBSITE_URL}/backend`,
    accountUrl: `${WEBSITE_URL}/account/dashboard`,
    walletServiceHost: 'https://user-wallet.dev.exordium.co',
    nftServiceBaseURL: 'https://nft.dev.exordium.co',
    custodialWalletService: 'https://custodial-wallet.dev.exordium.co',
    builtInAssets: {
        liquid: '144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49',
        inf: 'b612eb46313a2cd6ebabd8b7a8eed5696e29898b87a43bff41c94f51acef9d73',
        usdt: 'f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958'
    },
    network: 'testnet'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.
const environment = Object.assign(Object.assign({}, _environment_common__WEBPACK_IMPORTED_MODULE_0__.commonEnv), env);


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 80950:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 70131:
/*!***************************!*\
  !*** leveldown (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94093:
/*!***********************************!*\
  !*** leveldown/package (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61695:
/*!************************!*\
  !*** semver (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33370:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57518:
/*!***********************************!*\
  !*** ./src/app/core/i18n/de.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 86944:
/*!***********************************!*\
  !*** ./src/app/core/i18n/en.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 60375:
/*!***********************************!*\
  !*** ./src/app/core/i18n/es.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 8397:
/*!***********************************!*\
  !*** ./src/app/core/i18n/fr.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings in french old version","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 74363:
/*!***********************************!*\
  !*** ./src/app/core/i18n/it.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 4019:
/*!***********************************!*\
  !*** ./src/app/core/i18n/jp.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 74741:
/*!***********************************!*\
  !*** ./src/app/core/i18n/ko.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 76606:
/*!***********************************!*\
  !*** ./src/app/core/i18n/pt.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 57850:
/*!***********************************!*\
  !*** ./src/app/core/i18n/ru.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 61511:
/*!**************************************!*\
  !*** ./src/app/core/i18n/zh-TW.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ }),

/***/ 40257:
/*!***********************************!*\
  !*** ./src/app/core/i18n/zh.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings.title":"Settings","appIncompatabiliity.AppDisabled":"Commander, the Infinite Fleet application is currently unavailable. Please try again later.","appIncompatabiliity.operatingSystemNotSupported":"Commander, your operating system version is not compatible with Infinite Fleet. Please upgrade your system to use this app.","appIncompatabiliity.appVersionNotSupported":"Commander, your app is obsolete. Please update it to take avantage of the latest features.","appIncompatabiliity.noInternet":"Commander, an internet connection is required to use Infinite Fleet app. Please check you connectivity settings.","appIncompatabiliity.flagsmithUnreachable":"Commander, we experience issues loading your app. Please try again later.","appIncompatabiliity.platformNotSupported":"Your platform is not supported. The application is supported only on iOS and Android.","settings.myWalletButton":"My wallet","settings.myWalletButtonNote":"Manage and visualize your assets","settings.setupWalletButton":"Set up your wallet","settings.setupWalletButtonNote":"To fully enjoy the app you have to set up the wallet","settings.myAccountButton":"My account (web)","settings.myAccountButtonNote":"You will be redirected to the website to manage the account","settings.logoutButton":"Log Out","settings.account.title":"Account","settings.myWallet.title":"My wallet","start.welcome":"Welcome commander! <br> Sign in to your account to start managing your fleet","start.signIn":"Sign in","start.signUp":"Sign up","start.askIfUserHasAnAccount":"Don\'t have an account yet?","tabs.warehouse":"Warehouse","tabs.settings":"Settings","warehouse.title":"Warehouse","settings.createWalletPopUp.title":"Create your wallet","settings.createWalletPopUp.descriptionPart1":"It seems that you didn’t create your personal wallet yet. In order to fully enjoy the Infinite Fleet experience, you need to create it with the game launcher, in the WALLET tab.","settings.createWalletPopUp.descriptionPart2":"Once it is done, please restart your app to import the wallet.","settings.createWalletPopUp.closeBtn":"Got it","warehouse.shipWithdraw.withdrawConfirmationSuccess.title":"Withdrawal Request Confirmed","warehouse.shipWithdraw.withdrawConfirmationSuccess.description":"Commander, your NFT withdrawal has been recorded. It will now be reviewed and processed in the next 24 hours","warehouse.shipWithdraw.withdrawConfirmationSuccess.buttonText":"Continue Browsing","warehouse.shipWithdraw.withdrawConfirmationError.title":"Withdrawal Request Unsuccessfull","warehouse.shipWithdraw.withdrawConfirmationError.description":"Commander, your NFT withdrawal has NOT been recorded!","warehouse.shipWithdraw.withdrawConfirmationError.buttonText":"Back","settings.importWallet.qrScannerNote":"Open the game launcher, go to your wallet and click on the Clone button. Then scan the QR Code.<br><br>You can also scan your wallet from this app on another device. Go to the wallet settings and select Clone","settings.importWallet.back":"import wallet","settings.myWalletPublicKey":"Public key","settings.myWalletINFBalance":"$INF Balance","settings.myWalletINFBalanceValue":"{{balance}} $INF","settings.myWalletLBTCBalance":"L-BTC Balance","settings.myWalletLBTCBalanceValue":"{{balance}} LBTC","settings.myWalletAssets":"Assets","settings.myWalletCloneWallet":"Clone wallet","settings.myWalletRestoreWallet":"Restore wallet"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map