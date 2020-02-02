import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';
import * as fromInterceptors from './interceptors';
import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
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
  declarations: [...fromComponents.exports],
  providers: [...fromInterceptors.exports],
})
export class CoreModule {}
