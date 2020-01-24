require('dotenv').config()

const currentEnvironment = process.env.NODE_ENV || 'development'

const _default = {
  mongo: {
    uri: process.env.MONGO_URI
  },
  server: {
    port: process.env.API_PORT || '4000'
  },
  logger: {
    level: process.env.LOGGER_LEVEL || 'info'
  }
}
const configuration = require(`./${currentEnvironment}`)
module.exports = Object.assign(
  { env: currentEnvironment },
  _default,
  configuration
)
