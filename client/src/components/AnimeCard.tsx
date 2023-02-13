import { AnimeProps } from "../utils/Types";
import "../styles/components/animeCard.css";

export function AnimeCard({
  animeID,
  animeName,
  genres,
  imgPath,
  ratings,
}: AnimeProps) {
  return (
    <div className="card">
      <article>
        <header>
          {animeName}
          <div className="genres">{genres}</div>
        </header>
        <img src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
