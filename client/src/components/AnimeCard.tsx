import { AnimeProps } from "../utils/Types";
import "../styles/components/card.css";

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
        <header>{animeName}</header>
        <div className="genres">{genres}</div>
        <img className="cover" src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
