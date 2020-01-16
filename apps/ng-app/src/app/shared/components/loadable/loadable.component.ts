import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ApiLoadable } from '../../models';

import { IconMat } from '../../enums/icons.enum';

@Component({
  selector: 'app-loadable',
  templateUrl: './loadable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadableComponent {
  @Input() loadable: ApiLoadable;

  IconMat = IconMat;
}
