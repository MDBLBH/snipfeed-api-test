const express = require('express')

const router = express.Router()

router.use('/cards', require('./card'))

router.get('/', function (req, res, next) {
  return res.status(200).send({})
})

module.exports = router
