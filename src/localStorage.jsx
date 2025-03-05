export const setItemInStorage = (name, data) =>
  localStorage?.setItem(name, JSON.stringify(data));

export const getItemFromStorage = (name) => localStorage?.getItem(name);

export const getParsedItemFromStorage = (name) => {
  const item = localStorage?.getItem(name);
  return item ? JSON.parse(item) : []; // Return an empty array if no data is found
};

export const removeItemFromStorage = (name) => localStorage?.removeItem(name);
