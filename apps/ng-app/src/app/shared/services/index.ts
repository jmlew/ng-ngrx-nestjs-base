import { ApiService } from './api/api.service';

// Exported collection for cases where services are provided at the module level, as
// opposed via the providedIn prop of the @Injectable service decorator.
export const services: any[] = [ApiService];

export * from './api/api.service';
