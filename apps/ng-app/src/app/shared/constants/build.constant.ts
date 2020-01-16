import * as packageJson from '../../../../../../package.json';

import { environment } from '../../../environments/environment.js';

export const buildDetails = {
  appName: 'Angular Base App',
  appVersion: packageJson.version,
  envName: environment.production ? 'PROD' : 'DEV',
  apiUrl: environment.production ? '/api/' : 'http://localhost:3333/api/',
};
