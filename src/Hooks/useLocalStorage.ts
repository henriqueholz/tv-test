import { useState } from 'react';

type UseLocalStorageResult<T> = [T | undefined, (value: T) => void, () => void];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageResult<T> {
  // Get the initial value from local storage or use the provided initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state with the initial value
  const [state, setState] = useState<T>(initial);

  // Function to set the state and store it in local storage
  const setLocalStorage = (value: T): void => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Function to clear the state from local storage
  const clearLocalStorage = (): void => {
    setState(initialValue);
    localStorage.removeItem(key);
  };

  return [state, setLocalStorage, clearLocalStorage];
}

export default useLocalStorage;
