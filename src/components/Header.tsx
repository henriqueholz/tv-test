import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import verylocal from '../assets/verylocal.svg';
import settingsIcon from '../assets/ic-settings.svg';
import searchIcon from '../assets/ic-search.svg';
import { useNavigate } from 'react-router-dom';

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
    image: searchIcon,
    to: '/search',
    alt: 'Search',
  },
  {
    image: settingsIcon,
    to: '/settings',
    alt: 'Settings',
  },
];

export default function Header() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <header className='flex items-center justify-between bg-gray-800 px-4 py-3 text-white'>
      <div className='flex items-center'>
        <img src={verylocal} alt='Logo' className='mr-2 h-8' />
      </div>
      <div className='flex flex-grow items-center justify-center'>
        <div className='flex'>
          {middleMenuItems.map((item, index) => {
            return (
              <FocusButton
                key={index}
                focusKey={item.displayText}
                className='bg-magenta mr-4 flex-1 border-2 border-yellow-500'
                to={item.to}
                onEnterPress={() => handleNavigate(item.to)}
              >
                {item.displayText}
              </FocusButton>
            );
          })}
        </div>
      </div>
      <div className='flex items-center'>
        {rightMenuItems.map((item, index) => {
          return (
            <FocusButton
              key={index}
              className='bg-magenta mr-4 flex-1 border-2 border-yellow-500'
            >
              <img src={item.image} alt={item.alt}></img>
            </FocusButton>
          );
        })}
      </div>
    </header>
  );
}
