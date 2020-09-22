const db = require('./api/db-config');

module.exports = {
  add,
  remove,
};

// check 'review'
function add(obj) {
  return db('review')
  .insert(obj, 'id')
  .then(idArr => findById(idArr[0]))
};

function remove(id) {
  return findById(id)
  .then(res => {
    return db('review')
    .where({ id })
    .del()
    .then(() => res)
  })
};