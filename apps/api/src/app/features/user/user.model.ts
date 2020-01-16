import { DataItem } from '../../shared/models';

export interface UserParams {
  name: string;
  email: string;
  password: string;
}

export interface User extends UserParams, DataItem {
  id: number;
}
