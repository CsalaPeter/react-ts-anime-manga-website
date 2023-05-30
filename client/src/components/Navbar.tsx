import "../styles/components/navbar.css";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <nav>
      <ul className="left">
        <li>
          <strong>OtakuDB</strong>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/all-manga">Manga</a>
        </li>
        <li>
          <a href="/all-anime">Anime</a>
        </li>
        <li>
          <a href="/new-media">New</a>
        </li>
      </ul>
    </nav>
  );
}
