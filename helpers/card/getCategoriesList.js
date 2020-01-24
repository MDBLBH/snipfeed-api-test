module.exports = cardList => {
  const categories = new Set()
  for (const card of cardList) {
    for (const cat of card.categories) {
      categories.add(cat)
    }
  }
  return Array.from(categories)
}
