import type {User, UsersList} from '@/entities/user/model/user-entity.ts'
import {getAllUsers} from '@/entities/user/api/user-api'

export type { User, UsersList }
export { getAllUsers }

export {UsersTable} from './ui/users-table/UsersTable.tsx';
