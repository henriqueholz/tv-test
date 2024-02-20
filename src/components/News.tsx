import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { useHeaderVisible, useMenuPage } from '../store/pageStore';

export default function News() {
  const updateHeaderPage = useMenuPage((state) => state.updateHeaderPage);

  useEffect(() => {
    updateHeaderPage('HEADER_NEWS');
  }, []);

  return (
    <div>
      <div>news</div>
    </div>
  );
}
