import { HiMagnifyingGlass } from "react-icons/hi2";
import "../styles/components/searchBar.css";
import { ChangeEvent, useMemo, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1000),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  useEffect(() => {
    if (query !== undefined && query.length > 2) {
      axios
        .get(`api/search/${query}`)
        .then((response) => setResults(response.data));
    }
  }, [query]);

  return (
    <>
      <div className="searchContainer">
        <div className="searchBar">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search..."
            onChange={debouncedChangeHandler}
          />
          <button className="searchButton">
            <HiMagnifyingGlass />
          </button>
        </div>
        <div className="suggestions">
          <div className="suggestionCard">
            <article>
              <header>Test</header>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
