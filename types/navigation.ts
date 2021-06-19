import {AnimeOverview} from './Anime';

export type WithStackParamList<X = undefined> = {
  index: X;
  'anime-info': AnimeOverview;
};

export interface NavigationParamList {
  home: WithStackParamList;
  explore: WithStackParamList;
  trending: WithStackParamList;
  saved: WithStackParamList;
  account: WithStackParamList;
}
