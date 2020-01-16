export function addToCollection<T>(item: T, items: T[]): T[] {
  return items.includes(item) ? items : [...items, item];
}

export function removeFromCollection<T>(item: T, items: T[]): T[] {
  return items.includes(item)
    ? items.filter((element: T) => element !== item)
    : items;
}
