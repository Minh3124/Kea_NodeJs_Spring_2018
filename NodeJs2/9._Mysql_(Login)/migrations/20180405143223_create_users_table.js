
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary;
            table.string('username').unique();
            table.string('password');
            table.string('firstName');
            table.string('lastName');
            table.string('telephoneNumber');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users');
};
