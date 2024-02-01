import React, { useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';

const MyComponent: React.FC = () => {
  // Usage of the custom hook
  const [count, setCount, clearCount] = useLocalStorage<number>('count', 0);

    useEffect(() => {
        setFocus('increment-button');
    }, []);

  const retrieveValue = () => {
    const storedValue = localStorage.getItem('count');
    alert(`Current value in local storage: ${storedValue}`);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
        <p className="text-2xl font-bold mb-4">Count: {count}</p>
        <div className="flex justify-center space-x-4">
        <FocusButton
            focusKey="increment-button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount(count !== undefined ? count + 1 : 1)}
        >
            Increment
        </FocusButton>
        <FocusButton
            focusKey="clear-button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={clearCount}
        >
        Clear Count
        </FocusButton>
        <FocusButton
            focusKey="retrieve-button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={retrieveValue}
        >
            Retrieve Value
        </FocusButton>
    </div>
    </div>
  );
};

export default MyComponent;
