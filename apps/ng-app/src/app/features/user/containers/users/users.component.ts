import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';

import { User } from '@api-models';
import { IconMat } from '../../../../shared/enums/icons.enum';
import { ApiLoadable } from '../../../../shared/models';
import * as fromComponents from '../../components';
import * as fromServices from '../../services';
import * as fromUserActions from '../../store/user.actions';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  usersLoadable$: Observable<ApiLoadable>;
  users$: Observable<User[]>;
  userEntities$: Observable<Dictionary<User>>;

  IconMat = IconMat;

  constructor(
    public dialog: MatDialog,
    private readonly userFacade: fromServices.UserStoreFacadeService
  ) {}

  ngOnInit() {
    this.users$ = this.userFacade.users$;
    this.userEntities$ = this.userFacade.userEntities$;
    this.usersLoadable$ = this.userFacade.usersLoadable$;
  }

  onAddNew() {
    const dialogRef: MatDialogRef<
      fromComponents.UserFormDialogComponent
    > = this.openFormDialog();
    dialogRef.afterClosed().subscribe((added: User) => {
      if (added != null) {
        this.onSubmitAdd(added);
      }
    });
  }

  onEdit(user: User) {
    const dialogRef: MatDialogRef<
      fromComponents.UserFormDialogComponent
    > = this.openFormDialog(user);

    dialogRef.afterClosed().subscribe((updated: User) => {
      if (updated != null) {
        this.onSubmitEdit(updated);
      }
    });
  }

  onSubmitEdit(user: User) {
    this.userFacade.dispatch(fromUserActions.updateUser({ user }));
  }

  onSubmitAdd(user: User) {
    this.userFacade.dispatch(fromUserActions.addUser({ user }));
  }

  onRemove(id: number) {
    this.userFacade.dispatch(fromUserActions.deleteUser({ id }));
  }

  onRemoveMany(ids: number[]) {
    this.userFacade.dispatch(fromUserActions.deleteUsers({ ids }));
  }

  onReLoadAll() {
    this.userFacade.dispatch(fromUserActions.loadUsers());
  }

  private openFormDialog(
    params: User = null
  ): MatDialogRef<fromComponents.UserFormDialogComponent> {
    return this.dialog.open(fromComponents.UserFormDialogComponent, { data: params });
  }
}
