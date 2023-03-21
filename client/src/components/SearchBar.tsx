import axios from "axios";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { CardProps } from "../utils/Types";
import "../styles/components/searchBar.css";
import { ChangeEvent, useState } from "react";

export function SearchBar() {
  const [results, setResults] = useState<CardProps[]>([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query?.length >= 2) {
      axios
        .get(`api/search/${query}`)
        .then((response) => setResults(response.data));
    } else {
      setResults([]);
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
              }, 500);
            }}
          />
          {results.length != 0 && !hideSuggestions && (
            <ul className="resList">
              <div className="animeRes">
                <h6>Anime</h6>
                <ResultCard results={results} media="anime" />
              </div>
              <div className="mangaRes">
                <h6>Manga</h6>
                <ResultCard results={results} media="manga" />
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

function ResultCard({
  results,
  media,
}: {
  results: CardProps[];
  media: string;
}) {
  return (
    <>
      {results.map((result) => (
        <>
          {result.mediaType === media && (
            <div className="animeResCard" id={result.id}>
              <Link
                to={"/detView"}
                state={{ id: result.id, media: result.mediaType }}
              >
                <img className="resImg" src={result.imgPath} />
                <div className="resInfo">
                  <span>{result.name}</span>
                  <br />
                  <span className="resRateing">Rating: {result.ratings}</span>
                </div>
              </Link>
            </div>
          )}
        </>
      ))}
    </>
  );
}
