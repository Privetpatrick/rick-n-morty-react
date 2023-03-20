import { LOCAL_STORAGE } from "../shared/constants";

export const setLocalStorage = (name: string) => {
  localStorage.setItem(LOCAL_STORAGE, name);
};

export const getLocalStorage = (): string => {
  const value = localStorage.getItem(LOCAL_STORAGE);
  if (!value) return "";
  return value;
};
