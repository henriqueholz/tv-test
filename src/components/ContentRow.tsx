import * as React from 'react';
import {
  FocusableComponentLayout,
  FocusContext,
  FocusDetails,
  KeyPressDetails,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { Asset } from './Asset';
import FocusButton from './FocusButton';

export const ContentRow = ({
  title: rowTitle,
  assets,
  onAssetPress,
  onFocus,
}: any) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = React.useRef<HTMLDivElement>(null);

  const onAssetFocus = React.useCallback(
    ({ x }: any) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollLeft = x;
        scrollingRef.current.style.scrollBehavior = 'smooth';
      }
    },
    [scrollingRef]
  );

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
            {assets.map(({ title, color }) => (
              <FocusButton
                focusedClassName='border-4 border-hero-blue'
                onFocus={onAssetFocus}
                className='h-[365px] w-[274px] bg-orange-500'
              >
                <div>mock</div>
              </FocusButton>
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};
