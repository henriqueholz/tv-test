import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';

export const middleMenuItems = [
  {
    displayText: 'Home',
    to: '/home',
  },
  {
    displayText: 'News',
    to: '/news',
  },
];

export const rightMenuItems = [
  {
    displayText: 'Search',
    to: '/search',
  },
  {
    displayText: 'Settings',
    to: '/settings',
  },
];

export default function Header() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  return (
    <header className='flex items-center justify-between bg-gray-800 px-4 py-3 text-white'>
      <div className='flex items-center'>
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
        <span className='text-lg font-bold'>Your Logo</span>
      </div>
      <div className='flex flex-grow items-center justify-center'>
        <div>
          {middleMenuItems.map((item, index) => {
            return (
              <FocusButton key={index} focusKey={item.displayText}>
                <a href={item.to}>{item.displayText}</a>
              </FocusButton>
            );
          })}
        </div>
      </div>
      <div className='flex items-center'>
        {rightMenuItems.map((item, index) => {
          return (
            <FocusButton key={index}>
              <a href={item.to}>{item.displayText}</a>
            </FocusButton>
          );
        })}
      </div>
    </header>
  );
}
