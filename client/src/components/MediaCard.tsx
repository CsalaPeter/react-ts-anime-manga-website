import { CardProps } from "../utils/Types";
import "../styles/components/card.css";
import { Link } from "react-router-dom";

export function Card({ id, name, genres, imgPath, ratings }: CardProps) {
  return (
    <div className="card">
      <article>
        <header>
          <Link to={"/detView"} state={{ id }}>
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
