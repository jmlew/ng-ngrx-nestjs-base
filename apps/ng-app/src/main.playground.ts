import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [BrowserAnimationsModule]
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
