import { Account } from "./account";

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    username: string;
    password: string;
    userType: string;
    currency: string;
    dob: Date;
}