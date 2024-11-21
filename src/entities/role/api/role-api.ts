import {api} from '@/app/api'
import {RoleList} from "@/entities/role/model/role-entity.ts";

export const getAllRoles = (): Promise<RoleList> => {
  return api.get<RoleList>('roles.json').json();
}

export const getRolesByIds = async (ids: number[]): Promise<RoleList> => {
  const roles = await getAllRoles();
  return roles.filter(role => ids.includes(role.id));
}

export const getRolesByNames = async (names: string[]): Promise<RoleList> => {
  const roles = await getAllRoles();
  return roles.filter(role => names.includes(role.name));
}