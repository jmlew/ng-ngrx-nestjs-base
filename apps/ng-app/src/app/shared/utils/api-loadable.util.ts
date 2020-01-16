import { ApiLoadable } from '../models/states.model';

export function createApiLoadable(): ApiLoadable {
  return {
    isLoading: false,
    isSuccess: false,
    error: null,
  };
}

export function onApiLoadableLoad<T extends ApiLoadable>(loadable: T): T {
  return {
    ...loadable,
    isLoading: true,
    isSuccess: false,
    error: null,
  };
}

export function onApiLoadableSuccess<T extends ApiLoadable>(loadable: T): T {
  return {
    ...loadable,
    isLoading: false,
    isSuccess: true,
    error: null,
  };
}

export function onApiLoadableError<T extends ApiLoadable>(loadable: T, error: any): T {
  return {
    ...loadable,
    isLoading: false,
    isSuccess: false,
    error,
  };
}

export function getApiLoadable<T extends ApiLoadable>(loadable: T): ApiLoadable {
  const { isLoading, isSuccess, error } = loadable;
  return { isLoading, isSuccess, error };
}
