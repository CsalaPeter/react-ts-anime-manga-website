import { MangaProps } from "../utils/Types";
import "../styles/components/mangaCard.css";

export function MangaCard({
  mangaID,
  mangaName,
  genres,
  imgPath,
  ratings,
}: MangaProps) {
  return (
    <div className="card">
      <article>
        <header>
          {mangaName}
          <div className="genres">{genres}</div>
        </header>
        <img src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
