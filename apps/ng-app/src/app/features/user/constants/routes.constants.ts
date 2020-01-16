import { RouteConfig } from '../../../shared/models/routes.model';

export const usersRouteConfig: RouteConfig = {
  list: {
    name: 'list',
    path: '/list',
    label: 'List Users',
  },
  new: {
    name: 'new',
    path: '/new',
    label: 'New User',
  },
  edit: {
    name: 'edit',
    path: '/edit',
    label: 'Edit User',
  },
  view: {
    name: 'view',
    path: '/view',
    label: 'View User',
  },
};
