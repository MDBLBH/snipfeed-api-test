const { validationResult } = require('express-validator/check')

module.exports = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ error: 'ValidationError', details: errors.array() })
  }
  return next()
}
