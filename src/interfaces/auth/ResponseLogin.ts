import { User } from "@/interfaces/User";

export interface ResponseLogin {
    message: string;
    status: boolean;
    token: string;
    user: User;
}