import * as packageJson from '../../../../../../package.json';

import { environment } from '../../../environments/environment.js';

/**
 * Collection of APIs to switch to during development. All requests starting with "/api"
 * are forwarded to the domain defined in apps/ng-app/proxy.conf.json when
 * environment.production == false.
 *
 * This proxy file is included in the angular.json "serve" config.
 */
enum DevApiUrl {
  Mock = '/api/',
  Dev = 'http://some-dev-environment-domain:1234/api/',
  Test = 'http://some-test-environment-domain:2345/api/',
}

export const buildDetails = {
  appName: 'Angular Base App',
  appVersion: packageJson.version,
  envName: environment.production ? 'PROD' : 'DEV',
  apiUrl: environment.production ? '/api/' : DevApiUrl.Mock,
};
