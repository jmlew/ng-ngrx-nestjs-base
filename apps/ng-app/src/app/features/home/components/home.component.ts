import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { buildDetails, rootRouteConfig } from '../../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  appName: string;
  sampleContent: string;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.sampleContent =
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus corrupti a esse iure eaque voluptate fuga sapiente dolorem quo tempora quisquam ex reiciendis ea, odio, assumenda dolor delectus. Soluta.';
    this.appName = buildDetails.appName;
  }

  onGoToUsers() {
    this.router.navigate([rootRouteConfig.users.path]);
  }
}
