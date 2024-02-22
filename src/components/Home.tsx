import { useEffect, useRef, useState } from 'react';
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { Carousel } from './Carousel';
import { useHeaderVisible, useMenuPage } from '../store/pageStore';
import { getPlatform } from '../utils/getPlatform';
import { useMainFeedData } from '../api/fetchMainFeed';
import { usePageStationData } from '../api/fetchPageStationData';
import { getCurrentScheduleItem } from '../utils/getCurrentScheduleItem';
import FocusButton from './FocusButton';
import { TVPlayer } from 'react-tv-player';

const KEYDOWN_EVENT = 'keydown';
const BACKSPACE = 'Backspace';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const showHeader = useHeaderVisible((state) => state.showHeader);
  const hideHeader = useHeaderVisible((state) => state.hideHeader);

  // const menuPage = useMenuPage((state) => state.setMenuPage);
  const updateHeaderPage = useMenuPage((state) => state.updateHeaderPage);

  const platform = getPlatform();

  useEffect(() => {
    setFocus('HEADER_HOME');
    updateHeaderPage('HEADER_HOME');
  }, []);

  const {
    isLoading: isPageStationLoading,
    error: pageStationError,
    data: pageStationData,
  } = usePageStationData();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener(KEYDOWN_EVENT, keyEventListener);

    showHeader();

    return () => {
      document.removeEventListener(KEYDOWN_EVENT, keyEventListener);
    };
  }, [ref.current]);

  const keyEventListener = (event: KeyboardEvent) => {
    console.info('event', event.key);
    switch (event.key) {
      case BACKSPACE:
        toggleFullScreen();
        break;
      default:
        // ignore the other key events
        break;
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      showHeader();
    }
  };

  const onArrowPress = (direction: string) => {
    if (isFullScreen) {
      return false;
    }
  };

  const { isLoading, error, data: mainFeedData } = useMainFeedData();

  if (isLoading || isPageStationLoading) return <div>Loading...</div>;

  if (error || pageStationError) return <div>Error: {error?.message}</div>;

  const data = mainFeedData?.data?.units.filter((obj) => obj.type === 'clips');

  const fullSchedule = pageStationData?.data?.full_schedule;
  const scheduleItem = getCurrentScheduleItem(fullSchedule);
  console.info('scheduleItem', scheduleItem);
  return (
    <div>
      <div className='flex h-[810px] w-[1440px] flex-row'>
        <div className='flex h-[810px] w-[1440px] flex-row'>
          <div className='flex flex-1 flex-col overflow-hidden'>
            <div
              className='flex-shrink flex-grow overflow-y-auto overflow-x-hidden'
              ref={ref}
            >
              <div className='flex h-[640px]'>
                <FocusButton
                  focusKey='VIDEO_PLAYER'
                  focusedClassName='border-4 border-hero-blue'
                  onFocus={showHeader}
                  onEnterPress={toggleFullScreen}
                  onArrowPress={onArrowPress}
                >
                  <div
                    className={
                      isFullScreen
                        ? 'fixed left-0 top-0 h-[100%] w-[100%]'
                        : 'static h-[640px] w-[1130px] overflow-hidden'
                    }
                  >
                    <TVPlayer
                      url={pageStationData?.data.player_widget.url}
                      controls={!isFullScreen}
                      playing={true}
                      height={'640px !important'}
                    />
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
