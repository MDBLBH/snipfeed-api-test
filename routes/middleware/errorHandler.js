const logger = require('../../helpers/logger')

module.exports = function globalErrorHandler (app) {
  app.use(function (err, req, res, next) {
    const status =
      err.status ||
      err.statusCode ||
      err.status_code ||
      (err.output && err.output.statusCode) ||
      500

    if (status >= 500) logger.error({ err })

    return res.status(status).send({
      error: err.name || 'ServerError',
      details: err.message,
      code: err.code
    })
  })
}
