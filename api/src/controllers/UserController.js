import knex from '../../db';
import helper from '../helpers/response';

class UserController {
  static async getAllUsers(req, res) {
    const user = await knex('users');

    return helper(res, 'Users successfully retrieved', 200, user);
  }
}

export default UserController;
