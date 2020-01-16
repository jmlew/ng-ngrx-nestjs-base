import { sandboxOf } from 'angular-playground';

import { PageNotFoundComponent } from './page-not-found.component';

export default sandboxOf(PageNotFoundComponent).add('default', {
  template: `<app-page-not-found></app-page-not-found>`,
});
