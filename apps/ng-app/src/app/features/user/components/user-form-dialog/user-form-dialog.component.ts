import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { User } from '@api-models';

@Component({
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(user: User) {
    this.dialogRef.close(user);
  }
}
