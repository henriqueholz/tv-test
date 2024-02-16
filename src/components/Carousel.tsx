import * as React from 'react';
import { ContentRow } from './ContentRow';
import { useHeaderVisible } from '../store/pageStore';

export const Carousel = ({ rows, newRef }: any) => {
  const hideHeader = useHeaderVisible((state) => state.hideHeader);

  const onRowFocus = React.useCallback(
    ({ y }: any) => {
      hideHeader();
      if (newRef.current) {
        newRef.current.scrollTop = y;
        newRef.current.style.scrollBehavior = 'smooth';
      }
    },
    [newRef]
  );

  return (
    <div>
      {rows.map(({ title, assets }, index) => (
        <ContentRow
          assets={assets}
          key={title}
          title={title}
          columnIndex={index}
          // onAssetPress={onAssetPress}
          onFocus={onRowFocus}
        />
      ))}
    </div>
  );
};
