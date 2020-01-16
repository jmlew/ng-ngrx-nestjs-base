import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { rootRouteConfig } from '../../../shared/constants';
import { IconMat } from '../../../shared/enums/icons.enum';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  IconMat = IconMat;

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onGoHome() {
    this.router.navigate([rootRouteConfig.home.path]);
  }
}
