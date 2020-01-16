import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';

export const components: any[] = [
  UsersListComponent,
  UserFormComponent,
  UserFormDialogComponent,
];
export const entryComponents: any[] = [UserFormDialogComponent];

export * from './users-list/users-list.component';
export * from './user-form/user-form.component';
export * from './user-form-dialog/user-form-dialog.component';
