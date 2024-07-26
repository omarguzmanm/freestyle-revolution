export type UserCredentials = {
  email: string;
  password: string;
};

export type UserSignup = UserCredentials & {
  name: string;
  confirmPassword: string;
};