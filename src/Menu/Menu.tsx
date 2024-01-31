import { useEffect } from 'react';
import {
  useFocusable,
  init,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { MenuItem } from './MenuItem';

init({
  debug: false,
  visualDebug: false,
});

interface MenuProps {
  focusKey: string;
  items: string[];
}

export function Menu({ focusKey: focusKeyParam, items }: MenuProps) {
  const {
    ref,
    focusSelf,
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

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <h1>Logo</h1>
        {items.map((item) => (
          <MenuItem key={item} label={item} />
        ))}
      </div>
    </FocusContext.Provider>
  );
}
