
exports.seed = knex => knex('events').del()
  .then(() => knex('events').insert([
    {
      id: 1, eventName: 'Wedding', userId: 1, centerId: 1,
    },
    {
      id: 2, eventName: 'Meeting', userId: 2, centerId: 2,
    },
    {
      id: 3, eventName: 'Funeral', userId: 3, centerId: 3,
    },
  ]));
