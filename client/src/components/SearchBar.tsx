import { HiMagnifyingGlass } from "react-icons/hi2";
import "../styles/components/searchBar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function SearchBar() {
  return (
    <>
      <div className="searchContainer">
        <div className="searchBar">
          <input type="text" className="searchTerm" placeholder="Search..." />
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
