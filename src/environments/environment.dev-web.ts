import { environment as devEnv } from './environment.dev';

const WEBSITE_URL = `http://localhost:4200`; // redirected through webpack proxy to https://dev-vnl8io8nsfazar3.inf-store.infinitefleet.net

const env: Partial<typeof devEnv> = {
  mobile: false,
  backend:    `${WEBSITE_URL}/backend`,
  accountUrl: `${WEBSITE_URL}/account/dashboard`,
};

export const environment = { ...devEnv, ...env };
