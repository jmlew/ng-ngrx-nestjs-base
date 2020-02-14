import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { LayoutPosition } from '../../shared/constants';

@Injectable()
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar, private readonly zone: NgZone) {}

  default(message: string) {
    this.show(message, {
      duration: Duration.Short,
      panelClass: Style.Default,
    });
  }

  info(message: string) {
    this.show(message, {
      duration: Duration.Short,
      panelClass: Style.Info,
    });
  }

  success(message: string) {
    this.show(message, {
      duration: Duration.Short,
      panelClass: Style.Success,
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: Duration.Medium,
      panelClass: Style.Warning,
      verticalPosition: LayoutPosition.Top,
    });
  }

  error(message: string) {
    this.show(message, {
      duration: Duration.Medium,
      panelClass: Style.Error,
      verticalPosition: LayoutPosition.Top,
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}

enum Duration {
  Short = 2000,
  Medium = 3000,
  Long = 4000,
}

// Classes to applied to MatSnackBar: see definitions in mat-theme.scss.
enum Style {
  Default = 'notification-default',
  Info = 'notification-info',
  Success = 'notification-success',
  Warning = 'notification-warning',
  Error = 'notification-error',
}
