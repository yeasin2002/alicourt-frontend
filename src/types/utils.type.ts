export type Token = {
  refresh: string;
  access: string;
};

export type User = {
  id: string | null;
  full_name: string | null;
  email: string | null;
  terms: string | null;
  password: string | null;
  profile: string | null;
};

export type AuthState = {
  user: User;
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
};

export type SingleClass = {
  id: number;
  title: string;
  date: string;
  description: string;
  user: number;
};

export type SingleChat = {
  id: number;
  chat_id: string;
  user: number;
  question: string;
  answer: string | null;
  topic: string;
  timestamp: string;
};

