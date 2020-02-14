import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../core/core.module';
import { HomeModule } from '../features/home/home.module';
import { ViewsModule } from '../views/views.module';
import { LayoutModule } from './../layout/layout.module';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppRootComponent } from './component/app-root.component';

@NgModule({
  imports: [
    // Angular.
    BrowserModule,
    BrowserAnimationsModule,

    // App Main "singleton" modules.
    CoreModule,
    LayoutModule,
    ViewsModule,
    SharedModule,

    // App Features not lazy-loaded.
    HomeModule,

    // App root routing. Ensure this is last.
    AppRoutingModule,
  ],
  bootstrap: [AppRootComponent],
  declarations: [AppRootComponent],
  providers: [],
})
export class AppModule {}
