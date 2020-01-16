import { IconMat } from '../enums/icons.enum';
import { RouteConfig } from '../models/routes.model';

/**
 * Route config defining the details for each page which is navigated to via the
 * router.
 */
export const rootRouteConfig: RouteConfig = {
  home: {
    name: 'home',
    path: '/home',
    label: 'Home',
    icon: IconMat.Home,
  },
  users: {
    name: 'users',
    path: '/users',
    label: 'Users',
    icon: IconMat.Dashboard,
  },
};
