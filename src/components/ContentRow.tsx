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
        scrollingRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
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
      <div style={{ marginBottom: '37px' }} ref={ref}>
        {/* <div className={containerClass(styles.contentRowTitle)}>{rowTitle}</div> */}
        <div
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            flexShrink: '1',
            flexGrow: '1',
            paddingLeft: '60px',
          }}
          ref={scrollingRef}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {rowData?.playlist.map((item: any, index: number) => (
              <FocusButton
                focusedClassName='border-4 border-hero-blue'
                onFocus={onAssetFocus}
                className='h-[365px] w-[274px] bg-orange-500'
                focusKey={`content-row-${columnIndex}-${index}`}
                onArrowPress={onArrowPress}
              >
                <div>{item.title}</div>
              </FocusButton>
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};
