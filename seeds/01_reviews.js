exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, name: 'rowValue1', review: 'reviews' },
        { id: 2, name: 'rowValue2', review: 'reviews' },
        { id: 3, name: 'rowValue3', review: 'reviews' },
      ])
    })
}
