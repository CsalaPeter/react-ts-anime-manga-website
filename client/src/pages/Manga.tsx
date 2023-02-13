import { useEffect, useState } from "react";
import { MangaProps } from "../utils/Types";
import axios from "axios";
import { MangaCard } from "../components/MangaCard";
import "../styles/pages/manga.css";

export function Manga() {
  const [mangaData, setManga] = useState<MangaProps[]>([]);

  useEffect(() => {
    axios.get("api/mangaList").then((response) => setManga(response.data));
  }, []);

  return (
    <>
      <div className="mangaList">
        {mangaData.map((manga) => (
          <div key={manga.mangaID}>
            <MangaCard {...manga} />
          </div>
        ))}
      </div>
    </>
  );
}
