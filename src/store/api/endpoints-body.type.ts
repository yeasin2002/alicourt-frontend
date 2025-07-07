export type RegBody = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export type loginBody = {
  email: string;
  password: string;
};

export type verifyCodeBody = {
  email: string;
  otp: string;
};
