import { commonEnv } from './environment.common';

const WEBSITE_URL = 'https://dev-vnl8io8nsfazar3.inf-store.infinitefleet.net';

const env: Partial<typeof commonEnv> = {
  mobile:                  true,
  backend:                `${WEBSITE_URL}/backend`,
  accountUrl:             `${WEBSITE_URL}/account/dashboard`,
  walletServiceHost:      'https://user-wallet.dev.exordium.co',
  nftServiceBaseURL:      'https://nft.dev.exordium.co',
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
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

export const environment = { ...commonEnv, ...env };


