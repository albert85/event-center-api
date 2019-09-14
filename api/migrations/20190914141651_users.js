
exports.up = knex => knex.schema
  .createTable('users', (table) => {
    table.increments();
    table.string('firstName').notNullable();
    table.string('lastName');
    table.string('email').notNullable().unique();
    table.boolean('isAdmin').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema
  .dropTableIfExists('users');
