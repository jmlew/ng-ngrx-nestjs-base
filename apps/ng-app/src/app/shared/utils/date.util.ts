import * as moment from 'moment';

export function dateToString(date: Date, format: string = null): string {
  return moment(date).format(format);
}

export function dateToStringUtc(date: Date | string, format: string = null): string {
  return moment(date).format(format);
}

export function isDateValid(date: Date | string): boolean {
  return moment(date).isValid();
}
