import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

import * as fromInterceptors from './interceptors';
import * as fromServices from './services';
import * as fromStore from './store';

const EXPORTED_PROVIDERS: any[] = [...fromServices.exports, ...fromInterceptors.exports];

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(fromStore.reducers, {
      metaReducers: fromStore.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(fromStore.effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [EXPORTED_PROVIDERS],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already imported. Import into AppModule only.');
    }
  }
}
