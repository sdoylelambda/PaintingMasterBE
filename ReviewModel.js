const db = require('./api/db-config')

module.exports = {
  add,
  remove,
  find,
}

function find() {
  return db('reviews') //.join('name as n').select('r.name', 'r.review')
}

function findById(id) {
  return db('reviews').where({ id }).first()
}

// check 'review'
function add(obj) {
  return db('reviews')
    .insert(obj, 'id')
    .then((idArr) => findById(idArr[0]))
}

function remove(id) {
  return findBy(id).then((res) => {
    return db('reviews')
      .where({ id })
      .del()
      .then(() => res)
  })
}
