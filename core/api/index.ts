import {Anime} from '../../types/Anime';
import {useGet} from './useAPI';

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
  | 'manhwa';

export const API = {
  useSchedule: (day: ScheduleDay) =>
    useGet<Record<ScheduleDay, Anime[]>>(`schedule/${day}`, undefined),
  useTop: (type: TopType, page: number, subType: TopSubType) =>
    useGet<{top: Anime[]}>(`top/${type}/${page}/${subType}`, undefined),
};
