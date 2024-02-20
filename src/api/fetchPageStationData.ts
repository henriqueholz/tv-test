import { getPlatform } from '../utils/getPlatform';
import { useQuery } from 'react-query';
import { MainFeed } from './mainFeedType';

export type TGithubUser = {
  name: string;
  bio: string;
};

export const fetchPageStationData = async () => {
  const stationCode = 'htv-national-desk';
  const page = 'home';
  const platform = getPlatform();
  const res = await fetch(
    `https://prod.magnum.htvapps.com/api/v1/${stationCode}/ott/${page?.toLowerCase()}?platform=${platform}`
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = (await res.json()) as Promise<MainFeed>;
  return data;
};

export const usePageStationData = () => {
  return useQuery(['githubUser'], fetchPageStationData);
};
