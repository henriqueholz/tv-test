import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';

export default function Home() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  return (
    <div>
      <div>player</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '34px',
          marginRight: '96px',
        }}
      >
        <FocusButton
          focusKey='mock1'
          style={{
            backgroundColor: 'purple',
            height: '120px',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          Weather Widget
        </FocusButton>
        <FocusButton
          focusKey='mock2'
          style={{
            backgroundColor: 'red',
            height: '120px',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          Weather Widget
        </FocusButton>

        <FocusButton
          focusKey='mock3'
          style={{
            flex: 1,
            backgroundColor: 'green',
          }}
        >
          Show Promo
        </FocusButton>
        <FocusButton
          focusKey='mock4'
          style={{
            flex: 1,
            backgroundColor: 'blue',
          }}
        >
          Show Promo
        </FocusButton>
      </div>
    </div>
  );
}
