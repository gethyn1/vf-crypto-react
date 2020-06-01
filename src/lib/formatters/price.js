const addCommas = value => value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

const formatPrice = price => addCommas(parseFloat(price, 10).toFixed(2))

const adjustPriceForRate = (priceUsd, rateUsd) => formatPrice(priceUsd / rateUsd)

const getSymbolForRate = (symbol) => {
  const symbolMap = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    JPY: '¥',
    KRW: '₩'
  }

  return symbolMap[symbol] || 'nope'
}

export {
  formatPrice,
  adjustPriceForRate,
  getSymbolForRate
}
