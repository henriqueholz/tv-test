import * as React from 'react';
import {
  FocusContext,
  getCurrentFocusKey,
  setFocus,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import FocusButton from './FocusButton';

export const ContentRow = ({ onFocus, columnIndex, rowData }: any) => {
  console.info('rowdata', rowData);
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = React.useRef<HTMLDivElement>(null);

  const onAssetFocus = React.useCallback(
    ({ x }: any) => {
      if (scrollingRef.current) {
        // scrollingRef.current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        // });
        scrollingRef.current.scrollLeft = x;
        scrollingRef.current.style.scrollBehavior = 'smooth';
      }
    },
    [scrollingRef]
  );

  const onArrowPress = (direction: string) => {
    const currentFocusKey = getCurrentFocusKey();
    if (direction === 'up' && currentFocusKey.startsWith('content-row-0')) {
      setFocus('VIDEO_PLAYER');
      return false;
    }
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <div
          className='flex-shrink-1 flex-grow overflow-x-auto overflow-y-hidden'
          ref={scrollingRef}
        >
          <div className='font-Effra_Std_Rg ml-4 h-14 text-4xl leading-tight tracking-wide text-white'>
            {rowData.title}
          </div>
          <div className='flex flex-row'>
            {rowData?.playlist.map((item: any, index: number) => (
              // <div className='mb-[66px] ml-[22px] mr-[22px] h-[396px] w-[400px]'>
              <FocusButton
                focusedClassName='mb-[66px] ml-[22px] mr-[22px] w-[400px] h-[225px] border-4 border-hero-blue'
                onFocus={onAssetFocus}
                className='mb-[66px] ml-[22px] mr-[22px] h-[225px] w-[400px]'
                focusKey={`content-row-${columnIndex}-${index}`}
                onArrowPress={onArrowPress}
              >
                <img src={item.image_url} alt='PNG Image' />
              </FocusButton>
              // <div className='leading-1.21 h-[141px] w-[400px] overflow-hidden text-4xl text-opacity-75'>
              //   {item.title}
              // </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};
