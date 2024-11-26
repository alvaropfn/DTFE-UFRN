import { updateStorage } from '../utils/cache';
const url = import.meta.env.VITE_COINGECKO_URL
const key = import.meta.env.VITE_COINGECKO_KEY


const options = {
method: 'GET',
headers: {accept: 'application/json', 'x-cg-demo-api-key': key}
};

export const getCoinsList = async () => {
  fetch(
    `${url}/coins/list`,
    options
  )
  .then(res => res.json())
  .then(json => updateStorage('coinsList', json))
  .catch(err => console.error(err));
}

export const getCoinTickersById = (id) => {

}



// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err))


/* https://api.coingecko.com/api/v3/coins/list
[
  {
    "id": "0chain",
    "symbol": "zcn",
    "name": "Zus",
    "platforms": {
      "ethereum": "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
      "polygon-pos": "0x8bb30e0e67b11b978a5040144c410e1ccddcba30"
    }
  },
  {
    "id": "01coin",
    "symbol": "zoc",
    "name": "01coin",
    "platforms": {}
  }
]
*/

/* https://api.coingecko.com/api/v3/coins/{id}/tickers
{
  "name": "Bitcoin",
  "tickers": [
    {
      "base": "BTC",
      "target": "USDT",
      "market": {
        "name": "Binance",
        "identifier": "binance",
        "has_trading_incentive": false,
        "logo": "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274"
      },
      "last": 69476,
      "volume": 20242.03975,
      "cost_to_move_up_usd": 19320706.3958517,
      "cost_to_move_down_usd": 16360235.3694131,
      "converted_last": {
        "btc": 1.000205,
        "eth": 20.291404,
        "usd": 69498
      },
      "converted_volume": {
        "btc": 20249,
        "eth": 410802,
        "usd": 1406996874
      },
      "trust_score": "green",
      "bid_ask_spread_percentage": 0.010014,
      "timestamp": "2024-04-08T04:02:01+00:00",
      "last_traded_at": "2024-04-08T04:02:01+00:00",
      "last_fetch_at": "2024-04-08T04:03:00+00:00",
      "is_anomaly": false,
      "is_stale": false,
      "trade_url": "https://www.binance.com/en/trade/BTC_USDT?ref=37754157",
      "token_info_url": null,
      "coin_id": "bitcoin",
      "target_coin_id": "tether"
    }
  ]
}
*/
