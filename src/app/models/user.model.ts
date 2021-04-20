import { Role } from "./role.model";

export class User {
    id: String;
    first_name: String;
    last_name: String;
    email: String;
    password: String;
    role: Role;
}
