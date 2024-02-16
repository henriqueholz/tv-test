import * as React from 'react';
import {
  init,
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { ContentRow } from './ContentRow';

export const Carousel = ({ rows, focusKey: focusKeyParam }: any) => {
  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey,
    // setFocus -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts -- to force update all layouts when needed
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: 'bar' },
  });

  React.useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  // const onAssetPress = React.useCallback((asset: any) => {
  //   setSelectedAsset(asset);
  // }, []);

  const onRowFocus = React.useCallback(
    ({ y }: any) => {
      if (ref.current) {
        ref.current.scrollTop = y;
        ref.current.style.scrollBehavior = 'smooth';
      }
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        style={{
          flex: '1',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            flexShrink: '1',
            flexGrow: '1',
          }}
          ref={ref}
        >
          <div>
            {rows.map(({ title, assets }) => (
              <ContentRow
                assets={assets}
                key={title}
                title={title}
                // onAssetPress={onAssetPress}
                onFocus={onRowFocus}
              />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};
