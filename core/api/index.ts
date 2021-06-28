import Axios from 'axios';
import useAxios, {configure} from 'axios-hooks';
import {useCallback} from 'react';
import {Anime} from '../../types/Anime';

export const axios = Axios.create({
  baseURL: 'https://api.jikan.moe/v3/',
});

configure({axios});

type ScheduleDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type TopType = 'anime' | 'mange' | 'people' | 'characters';

type TopSubType =
  | 'airing'
  | 'upcoming'
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'manga'
  | 'novels'
  | 'oneshots'
  | 'doujin'
  | 'manhwa'
  | 'bypopularity'
  | 'favorite';

type Season = 'summer' | 'spring' | 'summer' | 'fall';

export const API = {
  useSchedule: (day: ScheduleDay) =>
    useAxios<Anime[]>({
      url: `schedule/${day}`,
      transformResponse: useCallback(res => JSON.parse(res)[day], [day]),
    }),
  useTop: (type: TopType, page: number, subType: TopSubType) =>
    useAxios<Anime[]>({
      url: `top/${type}/${page}/${subType}`,
      transformResponse: useCallback(res => JSON.parse(res).top, []),
    }),
  useSeason: (season: Season, year: number) =>
    useAxios<Anime[]>({
      url: `season/${season}/${year}`,
      transformResponse: useCallback(res => JSON.parse(res).anime, []),
    }),
  useCurrentSeason: () =>
    useAxios<Anime[]>({
      url: 'season',
      transformResponse: useCallback(res => JSON.parse(res).anime, []),
    }),
};
