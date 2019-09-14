import knex from '../../db';

class UserController {
  static async getAllUsers(req, res) {
    const user = await knex('users');
    return res.status(200).json({ ok: true, data: user });
  }
}

export default UserController;
