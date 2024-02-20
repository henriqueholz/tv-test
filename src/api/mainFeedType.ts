export type MainFeed = {
  head: Head;
  data: Data;
};

export type Data = {
  player_widget: PlayerWidget;
  nowcast_widget: null;
  full_schedule: FullSchedule[];
  weather_widget: null;
  promos: Promo[];
};

export type FullSchedule = {
  start: Date;
  end: Date;
  duration: number;
  programType: ProgramType;
  programId: string;
  videoId: string;
  videoIdPartner: string;
  thumbnail: string;
  title: string;
  titleInternal: string;
  description: string;
  keywords: string;
  ratingAge: number | null;
  parentalRating: ParentalRating;
  parentalRatingDescriptors: any[];
  country: Country;
  countryName: CountryName;
  language: Language;
  languageName: LanguageName;
  contentType: ContentType;
  contentFormat: ContentFormat;
  genre: string;
  seriesId: string;
  series: string;
  season: number;
  episode: number;
  seriesMetadata: SeriesMetadata;
  adBreakPositions: string;
  externalMetadataId: string;
  videoPublishDate: Date;
  more: More;
};

export enum ContentFormat {
  Show = 'Show',
}

export enum ContentType {
  Episode = 'Episode',
}

export enum Country {
  Us = 'US',
}

export enum CountryName {
  Empty = '',
  UnitedStates = 'United States',
}

export enum Language {
  En = 'en',
}

export enum LanguageName {
  English = 'English',
}

export type More = {
  executed?: boolean;
  executionTime?: Date;
};

export enum ParentalRating {
  NotRated = 'Not Rated',
  Nr = 'NR',
}

export enum ProgramType {
  AutomationProgram = 'AUTOMATION_PROGRAM',
  VODProgram = 'VOD_PROGRAM',
}

export type SeriesMetadata = {
  episodeTitle: string;
  seasonTitle: string;
};

export type PlayerWidget = {
  url: string;
  start: Date;
  end: Date;
  headline_title: string;
};

export type Promo = {
  title: string;
  image_url: string;
  series_id: string;
};

export type Head = {
  code: number;
  success: boolean;
};
