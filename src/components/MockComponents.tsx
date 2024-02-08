import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import React from 'react';

export default function MockComponent({
  style, focusNav, children, focusKey: focusKeyParam,
}: any) {
  const { ref, focused, focusKey } = useFocusable({ focusKey: focusKeyParam });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} style={{ ...style, border: focused ? '4px solid #00D1ED' : '' }}>
        {children}
      </div>
    </FocusContext.Provider>
  );
}
