import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { rootRouteConfig } from '../../shared/constants';
import { IconMat } from '../../shared/enums/icons.enum';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.view.html',
  styleUrls: ['./page-not-found.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundView implements OnInit {
  IconMat = IconMat;

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onGoHome() {
    this.router.navigate([rootRouteConfig.home.path]);
  }
}
