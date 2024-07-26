import { User } from "../User";

export interface ResponseLogin {
    message: string;
    status: boolean;
    token: string;
    user: User;
}