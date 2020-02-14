import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './components/home.component';
import { HomeView } from './views/home.view';

@NgModule({
  imports: [SharedModule],
  declarations: [HomeView, HomeComponent],
})
export class HomeModule {}
