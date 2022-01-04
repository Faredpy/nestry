import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = 'roles'

//прокидываем роли
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)