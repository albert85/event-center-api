
exports.up = knex => knex.schema
  .createTable('events', (table) => {
    table.increments();
    table.string('eventName').notNullable();
    table.integer('userId').unsigned()
      .notNullable().references('id')
      .inTable('users');
    table.integer('centerId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('centers');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema
  .dropTableIfExists('events');
