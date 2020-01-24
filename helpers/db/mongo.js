const mongoose = require('mongoose')
const logger = require('../logger')
const config = require('../../config')

mongoose.Promise = global.Promise

const connection = mongoose.connect(config.mongo.uri, {
  autoIndex: true,
  poolSize: 50,
  bufferMaxEntries: 0,
  keepAlive: 120,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
connection
  .then(db => {
    logger.info(
      `Successfully connected to ${config.mongo.uri} MongoDB cluster in ${config.env} mode.`
    )
    return db
  })
  .catch(err => {
    logger.error('Error while attempting to connect to MongoDB:', { err })
    process.exit(1)
  })

module.exports = connection
