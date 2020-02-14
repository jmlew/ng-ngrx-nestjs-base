import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UiMatModule } from './ui-mat.module';

import * as fromComps from './components';
import * as fromDirectives from './directives';
import * as fromGuards from './guards';
import * as fromServices from './services';

const EXPORTED_DECLARATIONS: any[] = [...fromComps.exports, ...fromDirectives.exports];
const EXPORTED_PROVIDERS: any[] = [...fromServices.exports, ...fromGuards.exports];
const EXPORTED_MODULES: any[] = [CommonModule, UiMatModule, FlexLayoutModule];

@NgModule({
  imports: [...EXPORTED_MODULES],
  exports: [...EXPORTED_MODULES, ...EXPORTED_DECLARATIONS],
  declarations: [...EXPORTED_DECLARATIONS],
  providers: [EXPORTED_PROVIDERS],
})
export class SharedModule {}
