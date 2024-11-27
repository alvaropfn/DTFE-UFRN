export const mapCurrenciesFromStore = ({data}) => {
  return data.map((currency) => {
    return { label: currency, value: currency }
  })
}

export const mapCoinsFromStore = ({data}) => {
  return data.map((coin) => {
    return { label: coin.name, value: coin.id }
  })
}

export const mapHistoryFromStore = ({data}) => {
  return data.prices
}

export const mapSimplePrice = ({id, currency, data}) => {
  const x = data.data[`${id}`].last_updated_at
  const y = data.data[`${id}`][`${currency}`]
  return [x, y]
}