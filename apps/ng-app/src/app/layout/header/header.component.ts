import { Component, EventEmitter, Output } from '@angular/core';

import { IconMat } from '../../shared/enums/icons.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  IconMat = IconMat;
  isAuth = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  onClickAuth() {
    this.isAuth = !this.isAuth;
  }
}
