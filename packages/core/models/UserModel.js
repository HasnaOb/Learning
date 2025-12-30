/**
 * @typedef {import('../.types-def/types.js').DataUser} DataUser
 */

import { typeUsersMap } from '../constants/typesUsers.js';

export class UserModel {
  /**
   * @param {DataUser} DataUser
   */
  constructor({ id, name, email, typeUser } = {}) {
    const nameToLowerCase = String(name).toLowerCase();

    this.id = id;
    this.name = nameToLowerCase.charAt(0).toUpperCase() + nameToLowerCase.slice(1);
    this.email = email.toLowerCase();
    this.typeUser = typeUsersMap[typeUser] || 'Unknown';
  }
}
