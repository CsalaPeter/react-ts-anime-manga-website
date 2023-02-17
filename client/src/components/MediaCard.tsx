import { CardProps } from "../utils/Types";
import "../styles/components/card.css";

export function Card({ name, genres, imgPath, ratings }: CardProps) {
  return (
    <div className="card">
      <article>
        <header>{name}</header>
        <div className="genres">{genres}</div>
        <img className="cover" src={imgPath} />
        <footer>{ratings}</footer>
      </article>
    </div>
  );
}
