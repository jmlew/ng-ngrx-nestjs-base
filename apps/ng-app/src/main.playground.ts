import { FlexLayoutModule } from '@angular/flex-layout';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundModule } from 'angular-playground';
import 'hammerjs';

import { UiMatModule } from './app/shared/ui-mat.module';

const IMPORTED_DEENDANCIES = [BrowserAnimationsModule, FlexLayoutModule, UiMatModule];

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [...IMPORTED_DEENDANCIES],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
