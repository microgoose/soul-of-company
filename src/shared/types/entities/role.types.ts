import {Authority} from "./authority.types.ts";

export interface Role {
    id: number,
    name: string,
}

export interface RoleAuthorities {
    role: Role,
    authorities: Authority[],
}