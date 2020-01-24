const mongoose = require('mongoose')
const { SEARCH_DEFAULT_LIMIT, CARD_TYPES } = require('../config/constants')

const cardSchema = new mongoose.Schema({
  card: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    }
  },
  categories: { type: [String] },
  tags: { type: [String] },
  createdBy: {
    type: String
  },
  type: {
    type: String,
    enum: Object.values(CARD_TYPES)
  },
  intents: [[{ type: { data: { text: String }, type: String } }]],
  createdAt: {
    type: String
  }
})
// TODO: Switch to using an object for input for more clarity
cardSchema.statics.searchByCardType = (
  cardType,
  keywords,
  limit = SEARCH_DEFAULT_LIMIT,
  skip = 0
) => {
  const query = { type: cardType, $text: { $search: keywords } }
  return Card.find(query, {
    score: { $meta: 'textScore' }
  })
    .limit(limit)
    .sort({ score: { $meta: 'textScore' } }) // Update sort to include CreatedAt (after converting it to Date)
}

cardSchema.index(
  {
    type: 1,
    'intents.data.text': 'text',
    'card.title': 'text',
    'card.subtitle': 'text',
    tags: 'text'
  },
  {
    weights: {
      'card.title': 10,
      'card.subtitle': 8,
      'intents.data.text': 3,
      tags: 8
    },
    name: 'searchIndex'
  }
)

// ADD CreatedAt Index.

const Card = mongoose.model('Card', cardSchema, 'cards')

module.exports = Card
