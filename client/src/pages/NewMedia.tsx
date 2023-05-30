import { useEffect, useState } from "react";
import { Genres } from "../utils/Types";
import axios from "axios";

export function NewMedia() {
  const [mediaType, setMediaType] = useState("");

  return (
    <>
      <article>
        <header>New Media</header>
        <select
          id="mediaList"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="">--Please select a media type!--</option>
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>
        {mediaType === "anime" ? <AddAnime /> : <></>}
        {mediaType === "manga" ? <AddManga /> : <></>}
        <footer className="actions">
          <button>Add</button>
          <button>Cancel</button>
        </footer>
      </article>
    </>
  );
}

function AddAnime() {
  const [genresTypes, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    axios.get("api/genres").then((response) => setGenres(response.data));
  }, []);

  return (
    <>
      <form>
        <label htmlFor="name">Anime Name</label>
        <input type="text" name="name" id="name" />
        <label>Studio</label>
        <input type="text" name="studio" id="studio" />
        <label>Genres</label>
        <div>
          {genresTypes.map((genres) => (
            <>
              <input
                type="checkbox"
                id={genres.genreName}
                value={genres.genreName}
              />
              <label htmlFor={genres.genreName}>{genres.genreName}</label>
            </>
          ))}
        </div>
        <label htmlFor="">Episode Number</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Duration</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Premiered</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Started Airing</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Finished Airing</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Status</label>
        <select name="" id="">
          <option value="">--Select--</option>
          <option value="Currently Airing">Currently Airing</option>
          <option value="Finished Airing ">Finished Airing</option>
        </select>
        <label htmlFor="">Synopsis</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Cover Image</label>
        <input type="file" name="" id="" />
      </form>
    </>
  );
}

function AddManga() {
  const [genresTypes, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    axios.get("api/genres").then((response) => setGenres(response.data));
  }, []);
  return (
    <>
      <form>
        <label htmlFor="name">Manga Name</label>
        <input type="text" name="name" id="name" />
        <label>Author</label>
        <input type="text" name="author" id="author" />
        <label>Artist</label>
        <input type="text" name="artist" id="artist" />
        <label>Genres</label>
        <div>
          {genresTypes.map((genres) => (
            <>
              <input
                type="checkbox"
                id={genres.genreName}
                value={genres.genreName}
              />
              <label htmlFor={genres.genreName}>{genres.genreName}</label>
            </>
          ))}
        </div>
        <label htmlFor="">Volumes</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Chapters</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Serialization</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Started</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Finished</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Status</label>
        <select name="" id="">
          <option value="">--Select--</option>
          <option value="Publishing">Publishing</option>
          <option value="Finished">Finished</option>
        </select>
        <label htmlFor="">Synopsis</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Cover Image</label>
        <input type="file" name="" id="" />
      </form>
    </>
  );
}
