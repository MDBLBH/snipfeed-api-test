const express = require('express')
const { searchAll, searchByType } = require('../controllers/card')

const { query, param } = require('express-validator/check')
const { CARD_TYPES } = require('../config/constants')
const { wrapAsync, validationHandler } = require('./middleware')

const router = express.Router()
const typeValidation = Object.values(CARD_TYPES).map(e => e.toLowerCase())

// TODO: - move input validation to action
//       - Improve validation for keyword (sanatize)
router.get(
  '/',
  [
    query('keywords')
      .isString(/^[a-z0-9 ]+$/i)
      .isLength({ max: 100 }),
    query('limit')
      .optional()
      .isInt()
      .toInt(),
    query('skip')
      .optional()
      .isInt()
      .toInt()
  ],
  validationHandler,
  wrapAsync(searchAll)
)
router.get(
  '/:type',
  [
    param('type').isIn(typeValidation),
    query('keywords')
      .matches(/^[a-z0-9 ]+$/i)
      .isLength({ max: 100 }),
    query('limit')
      .optional()
      .isInt()
      .toInt(),
    query('skip')
      .optional()
      .isInt()
      .toInt()
  ],
  validationHandler,
  wrapAsync(searchByType)
)
module.exports = router
