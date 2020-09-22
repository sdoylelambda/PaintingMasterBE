const express = require('express')
const router = express.Router()
// const server = this instead of router?

const ReviewModel = require('./ReviewModel');

router.get('/', (req, res) => {
  ReviewModel.find()
  .then(rev => res.status(200).json(rev))
  .catch(err => res.status(500).json({ err: err.message }))
})

router.post('/reviews', (req, res) => {
  const { name } = req.body

  ReviewModel.findBy({ name })
  .then(rev => res.status(200).json(rev))
  .catch(err => res.status(500).json({ err: err.message}))
})

router.
