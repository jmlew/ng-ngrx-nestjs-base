import { sandboxOf } from 'angular-playground';

import { PageNotFoundView } from './page-not-found.view';

export default sandboxOf(PageNotFoundView).add('default', {
  template: `<app-page-not-found></app-page-not-found>`,
});
