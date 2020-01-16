import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { SharedModule } from '../../../shared/shared.module';

import { HeaderComponent } from './header.component';

const config: SandboxOfConfig = {
  // imports: [SharedModule],
};

export default sandboxOf(HeaderComponent, config).add('default', {
  template: `<app-header></app-header>`,
  styles: ['./header.component.scss'],
});
