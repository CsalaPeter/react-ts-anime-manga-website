import { useEffect, useState } from "react";
import { AnimeProps } from "../utils/Types";
import axios from "axios";
import { AnimeCard } from "../components/AnimeCard";
import "../styles/pages/anime.css";

export function Anime() {
  const [animeData, setAnime] = useState<AnimeProps[]>([]);

  useEffect(() => {
    axios.get("api/animeList").then((response) => setAnime(response.data));
  }, []);

  return (
    <>
      <div className="animeList">
        {animeData.map((anime) => (
          <div key={anime.animeID}>
            <AnimeCard {...anime} />
          </div>
        ))}
      </div>
    </>
  );
}
