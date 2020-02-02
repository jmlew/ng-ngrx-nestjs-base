import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { RootPreloadingStrategy, rootRoutes } from './app.routes';
import { AppRootComponent } from './core/components';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [AppRootComponent],
  imports: [
    // Angular.
    BrowserModule,
    BrowserAnimationsModule,

    // App.
    CoreModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(rootRoutes, { preloadingStrategy: RootPreloadingStrategy }),
  ],
  providers: [RootPreloadingStrategy],
  declarations: [],
})
export class AppModule {}
