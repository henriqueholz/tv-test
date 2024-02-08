import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
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
    <div className='container mx-auto mt-8 text-center'>
      <p className='mb-4 text-2xl font-bold'>Count: {count}</p>
      <div className='flex justify-center space-x-4'>
        <FocusButton
          focusKey='increment-button'
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          onClick={() => setCount(count !== undefined ? count + 1 : 1)}
        >
          Increment
        </FocusButton>
        <FocusButton
          focusKey='clear-button'
          className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
          onClick={clearCount}
        >
          Clear Count
        </FocusButton>
        <FocusButton
          focusKey='retrieve-button'
          className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
          onClick={retrieveValue}
        >
          Retrieve Value
        </FocusButton>
      </div>
    </div>
  );
};

export default MyComponent;
