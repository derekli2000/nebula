export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  airing_start: string;
  episodes: number | null;
  members: number;
  genres: Genre[];
  source: string;
  producers: Producer[];
  score: number | null;
  licensors: any[];
  r18: boolean;
  kids: boolean;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
