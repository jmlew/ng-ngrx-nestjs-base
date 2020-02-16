import { RouterModule, Routes } from '@angular/router';
import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HomeComponent } from './home.component';

@Component({
  template: '',
})
class SampleComponent {}

const sampleRoutes: Routes = [{ path: '**', component: SampleComponent }];

const config: SandboxOfConfig = {
  imports: [SharedModule, RouterModule.forRoot(sampleRoutes)],
  declarations: [SampleComponent],
};

export default sandboxOf(HomeComponent, config).add('default', {
  template: `
  <div class="mat-typography page-content-padding">
    <app-home></app-home>
  </div>`,
  styles: ['./home.component.scss'],
});
