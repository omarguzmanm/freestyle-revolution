import { User } from "@/interfaces/User";

export interface AuthLS {
    authUser: User | null;
    authToken: string;
    returnlUrl: string;
}