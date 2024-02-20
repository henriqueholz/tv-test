import { useEffect } from 'react';
import FocusButton from './FocusButton';
import {
  getCurrentFocusKey,
  setFocus,
} from '@noriginmedia/norigin-spatial-navigation';
import verylocal from '../assets/verylocal.svg';
import SettingsIcon from '../assets/ic-settings.svg';
import SearchIcon from '../assets/ic-search.svg';
import { useNavigate } from 'react-router-dom';
import { useHeaderVisible, useMenuPage } from '../store/pageStore';
import { getObjectByKey } from '../utils/getObjectBykey';

export const middleMenuItems = [
  {
    displayText: 'HOME',
    to: '/home',
    key: 'HEADER_HOME',
    nav: {
      right: 'HEADER_NEWS',
      left: '',
      down: 'VIDEO_PLAYER',
    },
  },
  {
    displayText: 'NEWS',
    to: '/news',
    key: 'HEADER_NEWS',
    nav: {
      right: 'HEADER_SEARCH',
      left: 'HEADER_HOME',
      down: 'VIDEO_PLAYER',
    },
  },
];

export const rightMenuItems = [
  {
    image: SearchIcon,
    to: '/search',
    alt: 'Search',
    key: 'HEADER_SEARCH',
    nav: {
      right: 'HEADER_SETTINGS',
      left: 'HEADER_NEWS',
      down: 'VIDEO_PLAYER',
    },
  },
  {
    image: SettingsIcon,
    to: '/settings',
    alt: 'Settings',
    key: 'HEADER_SETTINGS',
    nav: {
      right: '',
      left: 'HEADER_SEARCH',
      down: 'VIDEO_PLAYER',
    },
  },
];

export default function Header() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  const showHeader = useHeaderVisible((state) => state.headerVisible);
  const headerPage = useMenuPage((state) => state.headerPage);

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  const onArrowPress = (direction: string) => {
    const currentFocusKey = getCurrentFocusKey();
    const menuItem = getObjectByKey(
      [...middleMenuItems, ...rightMenuItems],
      'key',
      currentFocusKey
    );
    switch (direction) {
      case 'left':
        if (menuItem.nav.left) {
          setFocus(menuItem.nav.left);
        }
        return false;
      case 'right':
        if (menuItem.nav.right) {
          setFocus(menuItem.nav.right);
        }
        return false;
      case 'down':
        if (menuItem.nav.down) {
          setFocus(menuItem.nav.down);
        }
        return false;
      default:
        return false;
    }
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
                    focusKey={item.key}
                    className={`ml-[48-px] h-[48px] text-[32px] font-bold text-gray ${item.key === headerPage ? `text-white` : `text-gray`}`}
                    to={item.to}
                    onEnterPress={() => handleNavigate(item.to)}
                    focusedClassName='ml-[48-px] h-[48px] text-[32px] font-bold border-b-4 border-hero-blue'
                    onArrowPress={onArrowPress}
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
                  focusKey={item.key}
                  key={index}
                  className='h-[40px] w-[40px]'
                  focusedClassName='ml-[48-px] h-[48px] text-[32px] font-bold border-b-4 border-hero-blue'
                  onArrowPress={onArrowPress}
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
