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