import knex from '../../db';

class EventController {
  static async getAllEvents(req, res) {
    const events = await knex('events as e')
      .leftJoin('users as u', 'u.id', 'e.userId')
      .leftJoin('centers as c', 'c.id', 'e.centerId')
      .select([
        'e.id',
        'e.eventName as name',
        'u.firstName',
        'u.lastName',
        'u.email',
        'u.isAdmin as account',
        'c.centerName',
        'c.centerAddress as address',
      ]);
    return res.status(200).json({ ok: true, data: events });
  }
}

export default EventController;
