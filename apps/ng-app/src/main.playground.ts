import { FlexLayoutModule } from '@angular/flex-layout';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';
import 'hammerjs';

import { UiMatModule } from './app/shared/ui-mat.module';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [BrowserAnimationsModule, FlexLayoutModule, UiMatModule],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
