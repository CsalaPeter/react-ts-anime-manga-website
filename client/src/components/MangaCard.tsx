import { MangaProps } from "../utils/Types";
import "../styles/components/card.css";
import { Link } from "react-router-dom";

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
          <Link className="name" to={"/manga"} state={{ mangaID }}>
            {mangaName}
          </Link>
        </header>
        <div className="genres">{genres}</div>
        <img className="cover" src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
