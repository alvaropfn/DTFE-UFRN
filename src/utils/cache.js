const STORAGE_KEY = 'DFTE';

const loadStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

const parseTick = (data) => {
  const filteredData = []
  const tickers = data.tickers
  tickers
    // .filter(tick => tick.base === "ETH")// && tick.target === "USDT")
    .map(tick => {
      const key = new Date(tick.timestamp).getTime()
      const value = tick.last
      filteredData.push([key, value])
    })

  filteredData.sort((a, b) => {
      const keyA = a[0]
      const keyB = b[0]
      return keyA - keyB
    })

  return filteredData
}

export const updateStorage = (key, data) => {

  const storage = loadStorage()
  storage[key] = {
    last: new Date().toISOString(),
    data: parseTick(data)
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  return data;
};

export const getStorage = (key) =>{
  const storage = loadStorage()
  return storage[key]
}