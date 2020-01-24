require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const { globalErrorHandler } = require('./routes/middleware')

const logger = require('./helpers/logger')
const config = require('./config')

const app = express()

require('./helpers/db/mongo')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use('/', indexRouter)

if (require.main === module) {
  app.listen(config.server.port, err => {
    if (err) {
      logger.error({ err })
    }
    logger.info(
      `API is now running on port ${config.server.port} in ${config.env} mode`
    )
  })
  globalErrorHandler(app)
}

module.exports = app
