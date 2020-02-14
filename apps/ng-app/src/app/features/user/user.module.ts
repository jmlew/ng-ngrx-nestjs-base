import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import * as fromComps from './components';
import * as fromContainers from './containers';
import * as fromDirectives from './directives';
import * as fromGuards from './guards';
import * as fromServices from './services';
import * as fromStore from './store';
import * as fromViews from './views';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromStore.usersFeatureKey, fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),
    UserRoutingModule,
  ],
  declarations: [
    ...fromComps.exports,
    ...fromContainers.exports,
    ...fromViews.exports,
    ...fromDirectives.exports,
  ],
  entryComponents: [...fromComps.entryComponents],
  providers: [
    ...fromServices.exports,
    ...fromGuards.exports,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, width: '80%', maxWidth: 800 },
    },
  ],
})
export class UserModule {}
