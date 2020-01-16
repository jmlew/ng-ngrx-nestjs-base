export function getSearchParamsFromObjectParams(params: {}): URLSearchParams {
  const searchParams: URLSearchParams = new URLSearchParams();
  Object.keys(params).forEach((key: string) => searchParams.set(key, params[key]));
  return searchParams;
}
