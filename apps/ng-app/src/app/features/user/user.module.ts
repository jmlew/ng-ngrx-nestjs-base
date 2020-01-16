import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromDirectives from './directives';
import * as fromGuards from './guards';
import * as fromServices from './services';
import * as fromStore from './store';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature(fromStore.usersFeatureKey, fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromDirectives.directives,
  ],
  entryComponents: [...fromComponents.entryComponents],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, width: '80%', maxWidth: 800 },
    },
  ],
})
export class UserModule {}
