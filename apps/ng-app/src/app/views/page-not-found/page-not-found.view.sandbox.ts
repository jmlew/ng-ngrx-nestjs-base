import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { SharedModule } from '../../shared/shared.module';
import { PageNotFoundView } from './page-not-found.view';

@Component({
  template: '',
})
class SampleComponent {}

const sampleRoutes: Routes = [{ path: '**', component: SampleComponent }];

const config: SandboxOfConfig = {
  imports: [SharedModule, RouterModule.forRoot(sampleRoutes)],
  declarations: [SampleComponent],
};

export default sandboxOf(PageNotFoundView, config).add('default', {
  template: `
  <div class="mat-typography page-content-padding">
    <app-page-not-found></app-page-not-found>
  </div>`,
  styles: ['./page-not-found.view.scss'],
});
