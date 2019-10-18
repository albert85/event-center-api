const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

function hashPassword(suppliedPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(suppliedPassword, salt);

  return hash;
}

exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert([
    {
      id: 1, firstName: 'User 1', lastname: 'Admin 1', password: hashPassword('test07'), isAdmin: true, email: 'admin1@localhost.com',
    },
    {
      id: 2, firstName: 'User 2', lastname: 'Admin 2', password: hashPassword('test07'), isAdmin: false, email: 'admin2@localhost.com',
    },
    {
      id: 3, firstName: 'User 3', lastname: 'Admin 3', password: hashPassword('test07'), isAdmin: false, email: 'admin3@localhost.com',
    },
  ]));
