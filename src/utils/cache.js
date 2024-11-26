const STORAGE_KEY = 'DFTE';

const loadStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

export const updateStorage = (key, data) => {
  const storage = loadStorage()
  storage[key] = {
    last: new Date().toISOString(),
    data: data
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  return data;
};

export const getStorage = (key) =>{
  const storage = loadStorage()
  return storage[key]
}