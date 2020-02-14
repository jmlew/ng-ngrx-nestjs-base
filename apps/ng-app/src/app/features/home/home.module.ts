import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeView } from './views/home.view';

@NgModule({
  imports: [SharedModule],
  declarations: [HomeView],
})
export class HomeModule {}
