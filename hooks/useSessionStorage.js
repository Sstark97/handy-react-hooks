'use strict'

/**
 * useFetch is a custom hook that use the fetch API for make request.
 * @param: key an String that representing the sessionStorage Key
 * @param: initialValue, the initial data that you want to save.
 * 
 * @return: storedValue, the data saved in sessionStorage
 * @return: setSessionStorage, a function that you can use to save a new value
 * @return: error, a String that represent the error if it appear
*/

import { useState } from 'react'

export const useSessionStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const [error,setError] = useState("");

  const setSessionStorage = value => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      setError(e);
    }
  };

  return [storedValue, error, setSessionStorage];
}