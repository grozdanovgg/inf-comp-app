import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { MatomoRouteDataInterceptor, NgxMatomoRouterModule } from '@ngx-matomo/router';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import config from 'capacitor.config';
import { CustomTranslationLoader } from 'src/app/core/translation-loaoder';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrpcCoreModule, GrpcLoggerModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { QrScannerModule } from 'src/app/shared/qr-scanner/qr-scanner.module';

// AoT requires an exported function for factories
export const customTranslationLoaderFactory = () => new CustomTranslationLoader();

let redirectUri = `${config.appId}://${environment.auth0.domain}`;

if (!environment.mobile) {
  redirectUri = 'http://localhost:4200';
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      consent: 'prompt',
      audience: `https://${environment.auth0.domain}/api/v2/`,
      scope: 'read:current_user',
      redirectUri,
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      httpInterceptor: {
        allowedList: [
          `https://${environment.auth0.domain}/api/v2/*`,
          `${environment.nftServiceBaseURL}/*`,
          `${environment.backend}/ships*`,
          `${environment.custodialWalletService}/*`,
          // `${environment.platformPublic}/*`,
        ]
      }
    }),
    IonicModule.forRoot({
      mode: 'md'
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslationLoaderFactory
      }
    }),
    NgxMatomoTrackerModule.forRoot({
      siteId: environment.matomo.siteId,
      trackerUrl: environment.matomo.trackerUrl
    }),
    NgxMatomoRouterModule.forRoot({
      interceptors: [MatomoRouteDataInterceptor]
    }),
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: {
        host: environment.platformPublic,
      }
    }),
    GrpcLoggerModule.forRoot({
      settings: {
        enabled: !environment.production
      },
    }),
    HttpClientModule,
    AppRoutingModule,
    QrScannerModule
  ],
  providers: [
    ModalController,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ]
})
export class AppModule implements DoBootstrap {

  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }
}

