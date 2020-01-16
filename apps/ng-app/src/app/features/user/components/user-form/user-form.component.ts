import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User, UserParams } from '@api-interfaces';
import { UserParamKey } from '../../enums/user.enum';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() submitUser = new EventEmitter<UserParams>();
  @Output() cancel = new EventEmitter<void>();

  userForm: FormGroup;
  UserParamKey = UserParamKey;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    // Build form with current user params or new fields.
    const params: UserParams = this.user || this.createUserParams();
    return this.formBuilder.group({
      [UserParamKey.Name]: [
        params[UserParamKey.Name],
        Validators.compose([Validators.required]),
      ],
      [UserParamKey.Password]: [
        params[UserParamKey.Password],
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      [UserParamKey.Email]: [
        params[UserParamKey.Email],
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }

  private createUserParams(): UserParams {
    return {
      [UserParamKey.Name]: null,
      [UserParamKey.Password]: null,
      [UserParamKey.Email]: null,
    };
  }

  getControl(key: UserParamKey): AbstractControl {
    return this.userForm.get(key);
  }

  isControlError(key: UserParamKey): boolean {
    const control: AbstractControl = this.getControl(key);
    return control.invalid && control.touched && control.dirty;
  }

  onSubmit() {
    if (this.userForm.valid) {
      const params: UserParams = this.userForm.value;
      const user: User = { ...this.user, ...params };
      this.submitUser.emit(user);
    }
  }
}
