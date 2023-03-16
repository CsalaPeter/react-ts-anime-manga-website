import "../styles/components/searchBar.css";
import { ChangeEvent, useState } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import { CardProps } from "../utils/Types";

export function SearchBar() {
  const [results, setResults] = useState<CardProps[]>([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query?.length >= 1) {
      axios
        .get(`api/search/${query}`)
        .then((response) => setResults(response.data));
    }
  };

  return (
    <>
      <div className="searchContainer">
        <div className="searchBar">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search..."
            onChange={debounce(changeHandler, 500)}
            onFocus={() => setHideSuggestions(false)}
            onBlur={() => {
              setTimeout(() => {
                setHideSuggestions(true);
              }, 300);
            }}
          />
          <ul className="resList">
            <div className="animeRes">
              <h6>Anime</h6>
              {results.map((result) => (
                <>
                  {result.mediaType === "anime" && (
                    <div className="animeResCard">
                      <img className="resImg" src={result.imgPath} />
                      <div className="resInfo">
                        <span>{result.name}</span>
                        <br />
                        <span className="resRateing">
                          Rating: {result.ratings}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="mangaRes">
              <h6>Manga</h6>
              {results.map((result) => (
                <>
                  {result.mediaType === "manga" && (
                    <div className="animeResCard">
                      <img className="resImg" src={result.imgPath} />
                      <div className="resInfo">
                        <span>{result.name}</span>
                        <br />
                        <span className="resRateing">
                          Rating: {result.ratings}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
