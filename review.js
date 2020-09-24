const express = require('express')
const router = express.Router()
// const server = this instead of router?

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
  // const deleted = ReviewModel.remove({ id })
  ReviewModel.remove({ id })
    .then((rev) => res.status(202).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))

  // const deleted = ReviewModel.remove({ id })
  // if (deleted) {
  //   res.status(200).json({ ...deleted[0] });
  // } else {
  //   res.status(404).json({ message: "That post does not exist." });
  // }
})

module.exports = router
