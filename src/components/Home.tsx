import { useEffect } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { Carousel } from './Carousel';

export default function Home() {
  useEffect(() => {
    setFocus('Home');
  }, []);

  const assets = [
    {
      title: 'Asset 1',
      color: '#714ADD',
    },
    {
      title: 'Asset 2',
      color: '#AB8DFF',
    },
    {
      title: 'Asset 3',
      color: '#512EB0',
    },
    {
      title: 'Asset 4',
      color: '#714ADD',
    },
    {
      title: 'Asset 5',
      color: '#AB8DFF',
    },
    {
      title: 'Asset 6',
      color: '#512EB0',
    },
    {
      title: 'Asset 7',
      color: '#714ADD',
    },
    {
      title: 'Asset 8',
      color: '#AB8DFF',
    },
    {
      title: 'Asset 9',
      color: '#512EB0',
    },
  ];

  const rows = [
    {
      title: 'Recommended',
      assets: assets,
    },
    {
      title: 'Movies',
      assets: assets,
    },
    {
      title: 'Series',
      assets: assets,
    },
    {
      title: 'TV Channels',
      assets: assets,
    },
    {
      title: 'Sport',
      assets: assets,
    },
  ];

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
      <div
        style={{
          backgroundColor: '#221c35',
          width: '1440px',
          height: '810px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className='flex h-[810px] w-[1440px] flex-row'>
          <Carousel rows={rows} />
        </div>
      </div>
    </div>
  );
}
