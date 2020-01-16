import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { SharedModule } from '../../../shared/shared.module';

import { HomeComponent } from './home.component';

const config: SandboxOfConfig = {
  imports: [SharedModule],
};

export default sandboxOf(HomeComponent, config).add('default', {
  template: `
  <div class="mat-typography">
    <app-home></app-home>
  </div>`,
  styles: ['./home.component.scss'],
});
