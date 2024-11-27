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

export const getCoinsList = async () => {
  try {
    const res = await fetch(`${url}/coins/list`, options);
    const json = await res.json();
    return json
  } catch (err) {
    console.error(err);
  }
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

export const getSupportedCurrencies = async () => {
  try {
    const res = await fetch(`${url}/simple/supported_vs_currencies`, options);
    const json = await res.json();
    return json
  } catch (err) {
    console.error(err);
  }
}

export const getHistoryById = async ({ id, query }) => {
  const vs_currency = query?.currency || null
  const days = query?.days || null

  let queryURL = "?"
  queryURL += days ? `&days=${days}` : queryURL
  queryURL += vs_currency ? `&vs_currency=${vs_currency}` : queryURL
  
  try {
    const res = await fetch(`${url}/coins/${id}/market_chart${queryURL}`, options);
    const json = await res.json();
    return json
  } catch (err) {
    console.error(err);
  }

}