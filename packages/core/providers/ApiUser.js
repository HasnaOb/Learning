import { apiUserEndpoints } from '../constants/endpoints.js';
import { UserModel } from '../models/UserModel.js';
import { ApiUserPort } from '../ports/ApiUserPort.js';
/**
 * @typedef {import '../.types-def/types.js').DataUser} DataUser
 */

export class ApiUser extends ApiUserPort {
  /**
   *
   * @param {string} id: User identifier
   * @returns {Promise<DataUser>} Information of the user
   */
  async getDataUser(id) {
    const endpoint = apiUserEndpoints.getUser.replace('{id}', id);

    const jsonInit = { method: 'GET', headers: { accept: 'application/json' } };

    const response = await fetch(endpoint, jsonInit).then(async res => {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    });

    return new UserModel(response);
  }
}
