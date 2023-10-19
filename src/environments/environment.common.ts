// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const commonEnv = {
    backend: '',
    accountUrl: '',
    production: false,
    mobile: true,
    flagsmithKey:               'g8muKyQydFCGFk4999uSRV',
    flagsmithHost:              'https://features.pixelmatic.com/api/v1',
    walletServiceHost:          '',
    walletEsploraURL:           'https://liquid.network/liquidtestnet/api',
    nftServiceBaseURL:          '',
    custodialWalletService:     '',
    platformPublic:             'https://platform-web.dev.pixelmatic.net',
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
