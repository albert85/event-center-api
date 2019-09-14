
exports.seed = knex => knex('centers').del()
  .then(() => knex('centers').insert([
    {
      id: 1, centerName: 'Adenike hall', centerAddress: 'Ikeja', userId: 1,
    },
    {
      id: 2, centerName: 'Adeleke hall', centerAddress: 'Anthony', userId: 2,
    },
    {
      id: 3, centerName: 'Aderonke hall', centerAddress: 'Maryland', userId: 3,
    },
  ]));
