const STORAGE_KEY = 'DFTE';

const loadStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

export const updateStorage = (key, data) => {

  const tickers = data.tickers

  const filteredData = tickers
    .filter(tick => tick.base === "ETH")// && tick.target === "USDT")
    .map(tick => {
      const parsedTick = {}
      const key = new Date(tick.timestamp).getTime()
      const value = tick.last
      parsedTick[key] = value
      return parsedTick
    })
    .sort((a, b) => {
      const keyA = Object.keys(a)[0]
      const keyB = Object.keys(b)[0]
      return keyA - keyB
    })

  console.log(filteredData)
// ...storage[key].data,...filteredData


  const storage = loadStorage()
  storage[key] = {
    last: new Date().toISOString(),
    data: filteredData
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  return data;
};

export const getStorage = (key) =>{
  const storage = loadStorage()
  return storage[key]
}