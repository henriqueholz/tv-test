import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { ContentRow } from './ContentRow';

export default function Home() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  return (
    <div>
      <div className='flex h-[640px]'>
        <FocusButton
          focusKey='player-container'
          focusedClassName='border-4 border-hero-blue'
        >
          <div className='h-[640px] w-[1130px] bg-amber-500'>PLAYER</div>
        </FocusButton>
        <div>
          <div>
            <FocusButton
              focusKey='mock1'
              focusedClassName='border-4 border-hero-blue'
            >
              <div className='h-[120px] w-[564px] bg-zinc-500'>mock 1</div>
            </FocusButton>
            <FocusButton
              focusKey='mock2'
              focusedClassName='border-4 border-hero-blue'
            >
              <div className='h-[120px] w-[564px] bg-stone-700'>mock2</div>
            </FocusButton>
          </div>
          <div className='flex'>
            <FocusButton
              focusedClassName='border-4 border-hero-blue'
              focusKey='mock3'
            >
              <div className='h-[365px] w-[274px] bg-red-500'>mock3</div>
            </FocusButton>
            <FocusButton
              focusedClassName='border-4 border-hero-blue'
              focusKey='mock4'
            >
              <div className='h-[365px] w-[274px] bg-orange-500'>mock4</div>
            </FocusButton>
          </div>
        </div>
      </div>
      <div>
        <ContentRow />
      </div>
    </div>
  );
}
