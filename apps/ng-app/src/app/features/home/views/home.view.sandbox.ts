import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { SharedModule } from '../../../shared/shared.module';

import { HomeView } from './home.view';

const config: SandboxOfConfig = {
  imports: [SharedModule],
};

export default sandboxOf(HomeView, config).add('default', {
  template: `
  <div class="mat-typography">
    <app-home></app-home>
  </div>`,
  styles: ['./home.view.scss'],
});
