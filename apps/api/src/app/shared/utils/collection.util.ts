import { EntityItem, EntityNumItem } from '@api-models';

import { isNumber } from './misc.util';

export function addToCollection<T>(item: T, items: T[]): T[] {
  return items.includes(item) ? items : [...items, item];
}

export function removeFromCollection<T>(item: T, items: T[]): T[] {
  return items.includes(item) ? items.filter((element: T) => element !== item) : items;
}

export function updateInCollection<T extends EntityItem>(item: T, items: T[]): T[] {
  return items.map((element: T) => (element.id === item.id ? item : element));
}

export function removeIdFromCollection<T extends EntityItem>(
  id: string | number,
  items: T[]
): T[] {
  return items.filter((element: T) => !isIdMatch(id, element));
}

export function removeIdsFromCollection<T extends EntityItem>(
  ids: Array<string | number>,
  items: T[]
): T[] {
  return items.filter((element: T) => {
    const normalisedIds: Array<string | number> = isNumber(element.id)
      ? ids.map((id) => Number(id))
      : ids;
    return !normalisedIds.includes(element.id);
  });
}

export function getById<T extends EntityItem>(items: T[], id: string | number): T {
  return items.find((item: T) => isIdMatch(id, item));
}

export function isIdMatch<T extends EntityItem>(id: string | number, item: T): boolean {
  return isNumber(item.id) ? item.id === Number(id) : item.id === id;
}

export function getCollectionIds<T extends EntityItem>(
  items: T[]
): Array<string | number> {
  return items.map((item: T) => item.id);
}

export function getNextCollectionId<T extends EntityNumItem>(items: T[]): number {
  const ids: number[] = getCollectionIds(items) as number[];
  return Math.max(...ids) + 1;
}
