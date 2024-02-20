import { useEffect, useRef } from 'react';
import FocusButton from './FocusButton';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { Carousel } from './Carousel';
import { useHeaderVisible, useMenuPage } from '../store/pageStore';
import { getPlatform } from '../utils/getPlatform';
import { useMainFeedData } from '../api/fetchMainFeed';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const showHeader = useHeaderVisible((state) => state.showHeader);
  // const menuPage = useMenuPage((state) => state.setMenuPage);
  const updateHeaderPage = useMenuPage((state) => state.updateHeaderPage);

  const platform = getPlatform();

  useEffect(() => {
    setFocus('HEADER_HOME');
    updateHeaderPage('HEADER_HOME');
  }, []);

  // const { isLoading, error, data } = useGithubUser();
  // const { isLoading, error, data } = usePageStationData();
  const { isLoading, error, data: mainFeedData } = useMainFeedData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error?.message}</div>;

  const data = mainFeedData?.data?.units.filter((obj) => obj.type === 'clips');

  return (
    <div>
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
              <div className='flex h-[640px]'>
                <FocusButton
                  focusKey='VIDEO_PLAYER'
                  focusedClassName='border-4 border-hero-blue'
                  onFocus={showHeader}
                >
                  <div className='h-[640px] w-[1130px] bg-amber-500'>
                    PLAYER
                  </div>
                </FocusButton>
                <div>
                  <div>
                    <FocusButton
                      focusKey='mock1'
                      focusedClassName='border-4 border-hero-blue'
                    >
                      <div className='h-[120px] w-[564px] bg-zinc-500'>
                        mock 1
                      </div>
                    </FocusButton>
                    <FocusButton
                      focusKey='mock2'
                      focusedClassName='border-4 border-hero-blue'
                    >
                      <div className='h-[120px] w-[564px] bg-stone-700'>
                        mock2
                      </div>
                    </FocusButton>
                  </div>
                  <div className='flex'>
                    <FocusButton
                      focusedClassName='border-4 border-hero-blue'
                      focusKey='mock3'
                    >
                      <div className='h-[365px] w-[274px] bg-red-500'>
                        mock3
                      </div>
                    </FocusButton>
                    <FocusButton
                      focusedClassName='border-4 border-hero-blue'
                      focusKey='mock4'
                    >
                      <div className='h-[365px] w-[274px] bg-orange-500'>
                        mock4
                      </div>
                    </FocusButton>
                  </div>
                </div>
              </div>

              <Carousel newRef={ref} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
