import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RouteItem } from '../../../shared/models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() routes: RouteItem[];
  @Output() itemClick = new EventEmitter<RouteItem>();
}
