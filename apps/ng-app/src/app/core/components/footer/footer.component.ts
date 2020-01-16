import { Component, OnInit } from '@angular/core';

import { buildDetails } from '../../../shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  appName: string;
  appDetails: string;

  constructor() {}

  ngOnInit() {
    this.appName = buildDetails.appName;
    this.appDetails = `v.${buildDetails.appVersion} - ${buildDetails.envName}`;
  }
}
