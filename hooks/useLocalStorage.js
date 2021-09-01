'use strict'

/**
 * useLocalStorage is a custom hook that allow to save data in localStorage
 * @param: key an String that representing the localStorage Key
 * @param: initialValue, the initial data that you want to save.
 * 
 * @return: storedValue, the data saved in localStorage
 * @return: setLocalStorage, a function that you can use to save a new value
 * @return: error, a String that represent the error if it appear
*/

import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const [error,setError] = useState("");

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      setError(e);
    }
  };

  return [storedValue, error, setLocalStorage];
}