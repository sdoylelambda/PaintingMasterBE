exports.up = function (knex) {
  return knex.schema.createTable('reviews', (tbl) => {
    tbl.increments()
    tbl.string('name', 256).notNullable()
    tbl.string('review', 1024).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('reviews')
}
