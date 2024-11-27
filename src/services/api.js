import { updateStorage, updateStorageTick } from '../utils/cache';
const url = import.meta.env.VITE_COINGECKO_URL
const key = import.meta.env.VITE_COINGECKO_KEY


const options = {
method: 'GET',
headers: {accept: 'application/json', 'x-cg-demo-api-key': key}
};

export const ping = () => {
  fetch(
    `${url}/ping`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorage('ping', json))
  .catch(err => console.error(err));
}

export const getCoinsList = () => {
  fetch(
    `${url}/coins/list`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorage('coinsList', json))
  .catch(err => console.error(err))
}

export const getExchangesList = () => {
  fetch(
    `${url}/exchanges/list`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorage('exchangesList', json))
  .catch(err => console.error(err))
}

export const getCoinTickersById = ({id}) => {
  if(!id) {
    console.error('necessary id')
    return
  }
  const page = 'page=1'
  const exchange = '&exchange_ids=binance'
  const query = '&order=trust_score_asc'

  fetch(
    `${url}/coins/${id}/tickers?${query}`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorageTick(`${id}`, json))
  .catch(err => console.error(err))
}


export const getSupportedCurrencies = () => {
  fetch(
    `${url}/simple/supported_vs_currencies`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorage(`currencies`, json))
  .catch(err => console.error(err))
}
export const getHistoryById = ({
  id, query = {
    currency: 'usd',
    days: 1
  }
}) => {

}