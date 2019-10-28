import knex from '../../db';
import helper from '../helpers/response';

class UserController {
  static async getAllUsers(req, res) {
    try {
      const user = await knex('users');

      return helper(res, 'Users successfully retrieved', 200, user);
    } catch (error) {
      return helper(res, 'Users successfully not retrieved', 400, error);
    }
  }
}

export default UserController;
