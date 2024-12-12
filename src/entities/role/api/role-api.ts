import {api} from '@/app/api'
import {Role, RoleAuthorities} from "@/shared/types/entities";

export const getAllRoles = (): Promise<Role[]> => {
  return api.get<Role[]>('db/roles.json').json();
}

export const getRolesByIds = async (ids: number[]): Promise<Role[]> => {
  const roles = await getAllRoles();
  return roles.filter(role => ids.includes(role.id));
}

export const getRolesByNames = async (names: string[]): Promise<Role[]> => {
  const roles = await getAllRoles();
  return roles.filter(role => names.includes(role.name));
}

export const getAllRoleAuthorities = (): Promise<RoleAuthorities[]> => {
  return api.get<RoleAuthorities[]>('db/roles-authorities.json').json();
}