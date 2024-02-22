import { getPlatform } from '../utils/getPlatform';
import { useQuery } from 'react-query';
import { MainFeed } from './mainFeedType';

export type TGithubUser = {
  name: string;
  bio: string;
};

export const fetchMainFeed = async () => {
  const stationCode = 'htv-national-desk';
  const res = await fetch(
    `https://magnum.htvkubestage.htvapps.com/api/v1/${stationCode}/frequency/main`
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.info('data', data);
  return data;
};

export const useMainFeedData = () => {
  return useQuery(['mainFeed'], fetchMainFeed);
};
