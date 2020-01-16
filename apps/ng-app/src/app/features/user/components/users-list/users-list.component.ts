import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { IconMat } from '../../../../shared/enums/icons.enum';
import { User } from '../../models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Output() edit = new EventEmitter<User>();
  @Output() remove = new EventEmitter<number>();
  IconMat = IconMat;

  constructor() {}

  ngOnInit() {}
}
