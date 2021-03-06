import { isString } from './validate.util';

export function sortByProperty<T>(
  array: T[],
  property: string,
  isReversed: boolean = false
): T[] {
  return array.sort((a: {}, b: {}) => {
    let valueA: T;
    let valueB: T;
    if (isString(a[property]) && isString(b[property])) {
      valueA = a[property].toUpperCase();
      valueB = b[property].toUpperCase();
    } else {
      valueA = a[property];
      valueB = b[property];
    }
    const placeBefore: number = isReversed ? 1 : -1;
    const placeAfter: number = isReversed ? -1 : 1;
    return valueA < valueB ? placeBefore : valueA > valueB ? placeAfter : 0;
  });
}
