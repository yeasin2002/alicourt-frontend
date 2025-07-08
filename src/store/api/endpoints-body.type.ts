export type RegBody = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type VerifyCodeBody = {
  email: string;
  otp: string;
};

export type ConfirmResetPassword = {
  uidb64: string;
  token: string;
  password: string;
  confirm_password: string;
};
