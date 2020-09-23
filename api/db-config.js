const knex = require('knex')

const knexFile = require('../knexfile')

const environment = process.env.NODE_ENV || 'development'

module.exports = knex(knexFile[environment])

// Example knex.js

// const environment = process.env.ENVIRONMENT || 'development'
// const config = require('../knexfile.js')[environment];
// module.exports = require('knex')(config);
