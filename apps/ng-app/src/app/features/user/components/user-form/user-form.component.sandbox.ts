import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { User } from '@api-models';
import { SharedModule } from '../../../../shared/shared.module';

import { UserFormComponent } from './user-form.component';

const config: SandboxOfConfig = {
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
};

const scenarioContextActions = {
  onSubmit: (user: User) => {
    console.log('submitting user :', user);
  },
  onCancel: () => {
    console.log('cancelling user :');
  },
};

const stylesCommon = '.container {display: block; max-width: 50%; margin: 4rem}';

function createSampleUser(index: number): User {
  return {
    id: index,
    name: `Name ${index}`,
    email: `sampleemail${index}@email.com`,
    password: `samplepassword${index}`,
    createdAt: Date.now().toString(),
  };
}

export default sandboxOf(UserFormComponent, config)
  .add('With no user', {
    template: `
    <app-user-form
      class="container"
      (submitUser)="onSubmit($event)"
      (cancel)="onCancel()"
    ></app-user-form>`,
    styles: [stylesCommon],
    context: scenarioContextActions,
  })
  .add('With sample user', {
    template: `
    <app-user-form
      class="container"
      [user]="user"
      (submitUser)="onSubmit($event)"
      (cancel)="onCancel()"
    ></app-user-form>
    `,
    styles: [stylesCommon],
    context: {
      user: createSampleUser(1),
      ...scenarioContextActions,
    },
  });
