export type AnimeProps = {
  animeID: string;
  animeName: string;
  studio: string;
  genres: string;
  episodes: number;
  duration: number;
  premiered: string;
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

export type CardProps = {
  id: string;
  name: string;
  genres: string;
  imgPath: string;
  ratings: number;
  mediaType: string;
};

export type Character = {
  charID: string;
  charName: string;
  charRole: string;
  img: string;
};
