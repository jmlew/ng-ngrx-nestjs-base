export interface UserParams {
  name: string;
  email: string;
  password: string;
}

export interface User extends UserParams {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}
