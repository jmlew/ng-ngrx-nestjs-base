import { sandboxOf, SandboxOfConfig } from 'angular-playground';

import { User } from '@api-models';
import { SharedModule } from '../../../../shared/shared.module';

import { UsersListComponent } from './users-list.component';

const config: SandboxOfConfig = {
  imports: [SharedModule],
};

function createSampleUser(index: number): User {
  return {
    id: index,
    name: `Name ${index}`,
    email: `sampleemail${index}@email.com`,
    password: `samplepassword${index}`,
    createdAt: Date.now().toString(),
  };
}

export default sandboxOf(UsersListComponent, config)
  .add('With no attrs', {
    template: `<app-users-list></app-users-list>`,
  })
  .add('With sample users', {
    template: `
      <mat-card class="mat-typography">
        <app-users-list [users]="users" (edit)="onEdit($event)"></app-users-list>
      </mat-card>
    `,
    context: {
      users: [createSampleUser(1), createSampleUser(2), createSampleUser(3)],
      onEdit: (user: User) => {
        console.log('editing user :', user);
      },
    },
  });
