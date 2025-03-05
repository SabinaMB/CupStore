export const setItemInStorage = (name, data) =>
  localStorage?.setItem(name, JSON.stringify(data));

export const getItemFromStorage = (name) => localStorage?.getItem(name);

export const getParsedItemFromStorage = (name) => {
  const item = localStorage?.getItem(name);
  return item ? JSON.parse(item) : [];
};

export const removeItemFromStorage = (name) => localStorage?.removeItem(name);
