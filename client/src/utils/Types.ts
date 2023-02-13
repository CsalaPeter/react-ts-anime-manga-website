export type AnimeProps = {
  animeID: string;
  animeName: string;
  studio: string;
  genres: string;
  episodes: number;
  duration: number;
  premierd: string;
  started: Date;
  finished: Date;
  imgPath: string;
  ratings: number;
  status: string;
  synopsis: string;
};

export type MangaProps = {
  mangaID: string;
  mangaName: string;
  author: string;
  artist: string;
  genres: string;
  volumes: number;
  chapters: number;
  serialization: string;
  started: Date;
  finished: Date;
  ratings: number;
  status: string;
  synopsis: string;
  imgPath: string;
};