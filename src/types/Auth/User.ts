export type UserCredentials = {
  email: string;
  password: string;
};

export type UserRegister = UserCredentials & {
  name: string;
  // confirmPassword: string;
};