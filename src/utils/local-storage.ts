export const setStorage = (name?: any, value?: any) => {
  if (typeof window !== undefined) {
    localStorage.setItem(name, value);
  }
  return;
};

export const getStorage = (name?: any) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(name);
    return item;
  }
  return `[]`;
};

export const removeStorage = (name?: any) => {
  if (typeof window !== undefined) {
    localStorage.removeItem(name);
  }
  return;
};
