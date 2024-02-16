import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import verylocal from '../assets/verylocal.svg';
import SettingsIcon from '../assets/ic-settings.svg';
import SearchIcon from '../assets/ic-search.svg';
import { useNavigate } from 'react-router-dom';
import { useHeaderVisible } from '../store/pageStore';

export const middleMenuItems = [
  {
    displayText: 'HOME',
    to: '/home',
  },
  {
    displayText: 'NEWS',
    to: '/news',
  },
];

export const rightMenuItems = [
  {
    image: SearchIcon,
    to: '/search',
    alt: 'Search',
  },
  {
    image: SettingsIcon,
    to: '/settings',
    alt: 'Settings',
  },
];

export default function Header() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  const showHeader = useHeaderVisible((state) => state.headerVisible);

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <header>
      {showHeader && (
        <div className='grid h-[96px] grid-cols-3 grid-rows-1 gap-0'>
          <div className='flex items-center'>
            <img src={verylocal} alt='Logo' className='mr-2 h-8' />
          </div>
          <div className='flex flex-grow items-center justify-center'>
            <div className='flex h-[48px] space-x-10'>
              {middleMenuItems.map((item, index) => {
                return (
                  <FocusButton
                    key={index}
                    focusKey={item.displayText}
                    className='ml-[48-px] h-[48px] text-[32px] font-bold text-gray'
                    to={item.to}
                    onEnterPress={() => handleNavigate(item.to)}
                    focusedClassName='ml-[48-px] h-[48px] text-[32px] font-bold border-b-4 border-hero-blue'
                  >
                    {item.displayText}
                  </FocusButton>
                );
              })}
            </div>
          </div>
          <div className='float-right mr-24 flex items-center justify-end space-x-10'>
            {rightMenuItems.map((item, index) => {
              return (
                <FocusButton
                  key={index}
                  className='h-[40px] w-[40px]'
                  focusedClassName='ml-[48-px] h-[48px] text-[32px] font-bold border-b-4 border-hero-blue'
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className='h-[40px] w-[40px]'
                  />
                </FocusButton>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
