import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';

export default function News() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  return (
    <div>
      <div>news</div>
    </div>
  );
}
