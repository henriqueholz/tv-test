import * as React from 'react';
import { ContentRow } from './ContentRow';
import { useHeaderVisible } from '../store/pageStore';

export const Carousel = ({ rows, newRef, data }: any) => {
  console.info('carousel data', data);
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
      {data.map((item: any, index: number) => (
        <ContentRow
          rowData={item}
          columnIndex={index}
          // onAssetPress={onAssetPress}
          onFocus={onRowFocus}
        />
      ))}
    </div>
  );
};
