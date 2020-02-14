import { sandboxOf } from 'angular-playground';

import { FooterComponent } from './footer.component';

export default sandboxOf(FooterComponent).add('default', {
  template: `<app-footer></app-footer>`,
});
