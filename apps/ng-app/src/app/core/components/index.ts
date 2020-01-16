import { AppRootComponent } from './app-root/app-root.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const components: any[] = [
  AppRootComponent,
  FooterComponent,
  HeaderComponent,
  SidenavComponent,
  PageNotFoundComponent,
];

export * from './app-root/app-root.component';
export * from './footer/footer.component';
export * from './header/header.component';
export * from './sidenav/sidenav.component';
export * from './page-not-found/page-not-found.component';
