
exports.up = knex => knex.schema
  .createTable('centers', (table) => {
    table.increments();
    table.string('centerName').notNullable();
    table.string('centerAddress').notNullable();
    table.string('imageUrl');
    table.integer('userId').unsigned()
      .notNullable().references('id')
      .inTable('users');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema
  .dropTableIfExists('centers');
