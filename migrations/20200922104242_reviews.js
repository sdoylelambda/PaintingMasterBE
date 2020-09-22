exports.up = function (knex) {
  return knex.schema.createTable('name', (tbl) => {
    tbl.increments()
    tbl.text('name', 256).notNullible()
    tbl.string('review', 1024).notNullible()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('name').dropTableIfExists('review')
}
