import * as React from 'react';
import {
  FocusableComponentLayout,
  FocusContext,
  FocusDetails,
  setFocus,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import FocusButton from './FocusButton';

export function ContentRow() {
  const { ref, focusKey } = useFocusable();

  const playlist = [
    { id: 1, title: 'test1' },
    { id: 2, title: 'test2' },
    { id: 3, title: 'test3' },
    { id: 4, title: 'test4' },
    { id: 5, title: 'test5' },
    { id: 6, title: 'test6' },
  ];

  const scrollingRef = React.useRef<HTMLDivElement>(null);

  const onAssetFocus = React.useCallback(
    ({ x }: any) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollLeft = x - 22;
        scrollingRef.current.style.scrollBehavior = 'smooth';
      }
    },
    [scrollingRef]
  );

  const onArrowPress = (direction: string) => {
    return true;
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className='flex-shrink-0 flex-grow-0 overflow-hidden'>
        <div
          //   className={type === 'shows' ? 'show-playlist' : 'playlist'}
          ref={ref}
        >
          {/* <div className='playlist-header' id={`lane-${index}`}>
            {rowTitle}
          </div> */}
          <div className='content-row-scrolling-wrapper' ref={scrollingRef}>
            <div className='content-row-scrolling-content flex'>
              {playlist.map((item: any) => {
                return (
                  <FocusButton
                    key={item.id}
                    className='h-[225px] w-[400px] bg-zinc-50'
                    focusedClassName='h-[225px] w-[400px] border-4 bg-zinc-50 border-hero-blue'
                  >
                    <div> Movie </div>
                    <div> Comment </div>
                  </FocusButton>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}
