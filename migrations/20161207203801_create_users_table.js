
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments();
      table.string('email').unique();
      table.string('password');
      table.timestamps();
    })
  ]) 
};

exports.down = function(knex, Promise) {
  
};
