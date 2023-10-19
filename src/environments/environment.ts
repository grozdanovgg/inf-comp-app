// This file is a placeholder only to be replaced by any of the environment.*.ts files configured in angular.json

import { commonEnv } from './environment.common';

const env: Partial<typeof commonEnv> = {};

export const environment = { ...commonEnv, ...env };
