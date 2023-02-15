import axios from "axios";
import "../styles/pages/mediaList.css";
import { useEffect, useState } from "react";
import { MangaCard } from "../components/MangaCard";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeProps, MangaProps } from "../utils/Types";

export function ListMedia({ media }: { media: string }) {
  const [mangaData, setManga] = useState<MangaProps[]>([]);
  const [animeData, setAnime] = useState<AnimeProps[]>([]);

  if (media === "anime") {
    useEffect(() => {
      axios.get("api/animeList").then((response) => setAnime(response.data));
    }, []);

    return (
      <>
        <div className="mediaList">
          {animeData.map((anime) => (
            <div key={anime.animeID}>
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>
      </>
    );
  }
  if (media === "manga") {
    useEffect(() => {
      axios.get("api/mangaList").then((response) => setManga(response.data));
    }, []);

    return (
      <>
        <div className="mediaList">
          {mangaData.map((manga) => (
            <div key={manga.mangaID}>
              <MangaCard {...manga} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
