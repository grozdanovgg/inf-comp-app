import { commonEnv } from './environment.common';

const WEBSITE_URL = 'https://www.infinitefleet.com';

const env: Partial<typeof commonEnv> = {
  production: true,
  backend:                `${WEBSITE_URL}/backend`,
  accountUrl:             `${WEBSITE_URL}/account/dashboard`,
  nftServiceBaseURL:      'https://nft.exordium.co',
  flagsmithKey:           'MrnchnH3AQ3647Z43SZEWJ',
  custodialWalletService: 'https://custodial-wallet.exordium.co',
  network:                'liquid',
  matomo: {
    siteId: 7,
    trackerUrl: 'https://analytics.am.pixelmatic.com/'
  }
};

export const environment = { ...commonEnv, ...env };


