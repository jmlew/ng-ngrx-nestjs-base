import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundView } from './page-not-found/page-not-found.view';

const EXPORTED_DECLARATIONS: any[] = [PageNotFoundView];

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [...EXPORTED_DECLARATIONS],
  exports: [...EXPORTED_DECLARATIONS],
})
export class ViewsModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ViewsModule
  ) {
    if (parentModule) {
      throw new Error('ViewsModule is already imported. Import into AppModule only.');
    }
  }
}
