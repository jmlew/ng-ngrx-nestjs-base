import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import * as fromComponents from './components';
import * as fromDirectives from './directives';
import { UiMatModule } from './ui-mat.module';

@NgModule({
  imports: [CommonModule, UiMatModule, FlexLayoutModule],
  exports: [...fromComponents.components, CommonModule, UiMatModule, FlexLayoutModule],
  declarations: [...fromComponents.components, ...fromDirectives.directives],
})
export class SharedModule {}
