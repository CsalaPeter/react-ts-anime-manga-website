import { HiMagnifyingGlass } from "react-icons/hi2";
import "../styles/components/searchBar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export type Genre = {
  genreName: string;
};

export function SearchBar() {
  const [genres, setGenre] = useState<Genre[]>([]);

  useEffect(() => {
    axios.get("/api/genres").then((response) => setGenre(response.data));
  }, []);

  return (
    <>
      <div className="searchBar">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Search..." />
          <button className="searchButton">
            <HiMagnifyingGlass />
          </button>
        </div>
        <details role="list" className="genreDropdown">
          <summary aria-haspopup="listbox" role="button" className="secondary">
            Genre
          </summary>
          <ul role="listbox">
            {genres.map((genre) => (
              <li>
                <a>{genre.genreName}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </>
  );
}
