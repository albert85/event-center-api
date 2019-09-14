import knex from '../../db';

class CenterController {
  static async getAllCenters(req, res) {
    const centers = await knex('centers as c')
      .leftJoin('users as u', 'u.id', 'c.userId')
      .select([
        'c.id',
        'c.centerName as name',
        'c.centerAddress', 'u.name',
        'u.firstName',
        'u.lastName',
        'u.email']);
    return res.status(200).json({ ok: true, data: centers });
  }
}

export default CenterController;
