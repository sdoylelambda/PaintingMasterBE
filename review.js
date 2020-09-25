const express = require('express')
const router = express.Router()
const ReviewModel = require('./ReviewModel')

router.get('/', (req, res) => {
  ReviewModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.post('/reviews', (req, res) => {
  const name = req.body
  console.log('post body', req.body)

  ReviewModel.add(name)
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.delete('/reviews/:id', (req, res) => {
  const { id } = req.params
  console.log('id delete router:', id)
  ReviewModel.remove({ id })
    .then((rev) => res.status(202).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.delete('/deleteDatabaseData', (req, res) => {
  ReviewModel.deleteDatabaseData()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
