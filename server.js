require('dotenv').config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3333
const axios = require('axios')
const reviewRoute = require('./review')
const server = express()

server.use(express.json())
server.use(cors())
server.use('/', reviewRoute)

const sendUserError = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

// server.get('/reviews', (req, res) => {
//   ReviewModel.find()
//     .then((rev) => res.status(200).json(rev))
//     .catch((err) => res.status(500).json({ err: err.message }))
// })

// server.post('/reviews', (req, res) => {
//   const name = req.body
//   console.log('post body', req.body)

//   ReviewModel.add(name)
//     .then((rev) => res.status(200).json(rev))
//     .catch((err) => res.status(500).json({ err: err.message }))
// })

// Probably don't need anything here (put/delete) use review.js

let review = [
  {
    name: 'Sean',
    review: 'Amazing work done for years!!',
    id: 0,
  },
  {
    name: 'Sean2',
    review: '2Amazing work done for years!!',
    id: 0,
  },
]

server.get('', (req, res) => {
  res.json('up n running')
})

server.get('/reviews', (req, res) => {
  console.log('endpoint used!!')
  res.json(review)
})
let reviewId = review.length

// axios?
// server.post('/reviews', (req, res) => {
//   console.log('reviews post fired BE')
//   const { name, review } = req.body
//   const newReview = { name, review, id: reviewId }
//   if (!name || !review) {
//     return sendUserError('Name and review are required to post a review.', res)
//   }

//   review.push(newReview)
//   reviewId++
//   res.json(review)
// })

// server.delete('/reviews/:id', (req, res) => {
//   const { id } = req.params
//   const foundReview = reviews.find((review) => review.id == id)

//   if (foundReview) {
//     const ReviewRemoved = { ...foundReview }
//     reviews = reviews.filter((review) => review.id != id)
//     res.status(200).json(reviews)
//   } else {
//     sendUserError('No review ID exists in the reviews DB', res)
//   }
// })

server.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`server is listening on port ${port}`)
})

module.exports = server
