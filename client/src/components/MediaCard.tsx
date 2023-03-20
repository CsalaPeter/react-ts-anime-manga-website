import { CardProps } from "../utils/Types";
import "../styles/components/card.css";
import { Link, useLocation } from "react-router-dom";

export function Card({ id, name, genres, imgPath, ratings }: CardProps) {
  const location = useLocation();
  const media = location.pathname.slice(5);
  console.log(media);
  return (
    <div className="card">
      <article>
        <header>
          <Link to={"/detView"} state={{ id, media }}>
            {name}
          </Link>
        </header>
        <div className="genres">{genres}</div>
        <img className="cover" src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
