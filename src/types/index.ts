export interface User {
  id: string | null;
  full_name: string | null;
  email: string | null;
  terms: string | null;
  password: string | null;
  profile: string | null;
}

export interface AuthState {
  user: User;
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
}
