const db = require('./api/db-config')

module.exports = {
  add,
  remove,
  find,
  deleteDatabaseData,
}

function find() {
  return db('reviews')
}

function findById(id) {
  return db('reviews').where({ id }).first()
}

function add(obj) {
  console.log('add obj:', obj)
  const conObj = convertData(obj)
  console.log('conObj obj:', conObj)

  return db('reviews')
    .insert(conObj, 'id')
    .then((idArr) => findById(idArr[0]))
}

function remove(id) {
  return db('reviews').where(id).del()
  console.log('id deleted:', id)
}

function deleteDatabaseData() {
  return db('reviews').del()
}

// TURN THIS
// const data = [
//   { name: 'name', value: 'Sean Doyle' },
//   { name: 'review', value: 'great work!' },
// ]
// INTO THIS
// {
//   name: 'SEAN ',
//   review: 'Amazingdfdff work done for years!!'
// }

// Helper function
function convertData(data) {
  const nameObject = data[0]
  console.log('name:', Object.values(nameObject)[1])
  const name = Object.values(nameObject)[1]

  const reviewObject = data[1]
  console.log('review:', Object.values(reviewObject)[1])
  const review = Object.values(reviewObject)[1]

  const outputObj = {
    name: name,
    review: review,
  }

  console.log('outputObj', outputObj)
  return outputObj
}

// Test Helper Function
// convertData(data)
