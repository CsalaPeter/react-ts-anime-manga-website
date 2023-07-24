import { useEffect, useState } from "react";
import { Genres } from "../utils/Types";
import "../styles/pages/newMedia.css";
import axios from "axios";

export function NewMedia() {
  const [mediaType, setMediaType] = useState("");

  return (
    <>
      <article className="newMedia">
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
      </article>
    </>
  );
}

function AddAnime() {
  const [genresTypes, setGenres] = useState<Genres[]>([]);
  const [inputs, setInputs] = useState({
    animeName: "",
    studio: "",
    genres: [],
    episodes: 0,
    duration: 0,
    premiered: "",
    started: "",
    finished: "",
    status: "",
    synopsis: "",
    imgPath: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const { name, value } = event.target;
    const { genres } = inputs;
    if (isChecked) {
      setInputs((values) => ({
        ...values,
        [name]: [...genres, parseInt(value)],
      }));
    } else {
      setInputs((values) => ({
        ...values,
        [name]: genres.filter((e) => e !== value),
      }));
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  useEffect(() => {
    axios.get("api/genres").then((response) => setGenres(response.data));
  }, []);

  return (
    <>
      <form className="newAnime">
        <label htmlFor="animeName">Anime Name</label>
        <input
          type="text"
          name="animeName"
          id="animeName"
          value={inputs.animeName}
          onChange={handleChange}
        />
        <label htmlFor="studio">Studio</label>
        <input
          type="text"
          name="studio"
          id="studio"
          value={inputs.studio}
          onChange={handleChange}
        />
        <label>Genres</label>
        <div className="genresCb">
          {genresTypes.map((genres) => (
            <>
              <input
                className="genresInput"
                type="checkbox"
                name="genres"
                id="genres"
                value={genres.genreID}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={genres.genreName}>{genres.genreName}</label>
            </>
          ))}
        </div>
        <label htmlFor="episodes">Episode Number</label>
        <input
          type="number"
          name="episodes"
          id="episodes"
          value={inputs.episodes}
          onChange={handleChange}
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          name="duration"
          id="duration"
          value={inputs.duration}
          onChange={handleChange}
        />
        <label htmlFor="premiered">Premiered</label>
        <input
          type="text"
          name="premiered"
          id="premiered"
          value={inputs.premiered}
          onChange={handleChange}
        />
        <label htmlFor="started">Started Airing</label>
        <input
          type="date"
          name="started"
          id="started"
          value={inputs.started}
          onChange={handleChange}
        />
        <label htmlFor="finished">Finished Airing</label>
        <input
          type="date"
          name="finished"
          id="finished"
          value={inputs.finished}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={inputs.status}
          onChange={handleSelectChange}
        >
          <option value="">--Select--</option>
          <option value="Currently Airing">Currently Airing</option>
          <option value="Finished Airing">Finished Airing</option>
        </select>
        <label htmlFor="synopsis">Synopsis</label>
        <input
          type="text"
          name="synopsis"
          id="synopsis"
          value={inputs.synopsis}
          onChange={handleChange}
        />
        <label htmlFor="imgPath">Cover Image</label>
        <input
          type="file"
          name="imgPath"
          id="imgPath"
          value={inputs.imgPath}
          onChange={handleChange}
        />
        <div className="actions">
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </>
  );
}

function AddManga() {
  const [genresTypes, setGenres] = useState<Genres[]>([]);
  const [inputs, setInputs] = useState({
    mangaName: "",
    author: "",
    artist: "",
    genres: [],
    volumes: 0,
    chapters: 0,
    serialization: "",
    started: "",
    finished: "",
    status: "",
    synopsis: "",
    imgPath: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const { name, value } = event.target;
    const { genres } = inputs;
    if (isChecked) {
      setInputs((values) => ({
        ...values,
        [name]: [...genres, parseInt(value)],
      }));
    } else {
      setInputs((values) => ({
        ...values,
        [name]: genres.filter((e) => e !== value),
      }));
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  useEffect(() => {
    axios.get("api/genres").then((response) => setGenres(response.data));
  }, []);

  return (
    <>
      <form className="newManga">
        <label htmlFor="mangaName">Manga Name</label>
        <input
          type="text"
          name="mangaName"
          id="mangaName"
          value={inputs.mangaName}
          onChange={handleChange}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={inputs.author}
          onChange={handleChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={inputs.artist}
          onChange={handleChange}
        />
        <label>Genres</label>
        <div className="genresCb">
          {genresTypes.map((genres) => (
            <>
              <input
                className="genresInput"
                type="checkbox"
                name="genres"
                id="genres"
                value={genres.genreID}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={genres.genreName}>{genres.genreName}</label>
            </>
          ))}
        </div>
        <label htmlFor="volumes">Volumes</label>
        <input
          type="number"
          name="volumes"
          id="volumes"
          value={inputs.volumes}
          onChange={handleChange}
        />
        <label htmlFor="chapters">Chapters</label>
        <input
          type="number"
          name="chapters"
          id="chapters"
          value={inputs.chapters}
          onChange={handleChange}
        />
        <label htmlFor="serialization">Serialization</label>
        <input
          type="text"
          name="serialization"
          id="serialization"
          value={inputs.serialization}
          onChange={handleChange}
        />
        <label htmlFor="started">Started</label>
        <input
          type="date"
          name="started"
          id="started"
          value={inputs.started}
          onChange={handleChange}
        />
        <label htmlFor="finished">Finished</label>
        <input
          type="date"
          name="finished"
          id="finished"
          value={inputs.finished}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={inputs.status}
          onChange={handleSelectChange}
        >
          <option value="">--Select--</option>
          <option value="Publishing">Publishing</option>
          <option value="Finished">Finished</option>
        </select>
        <label htmlFor="synopsis">Synopsis</label>
        <input
          type="text"
          name="synopsis"
          id="synopsis"
          value={inputs.synopsis}
          onChange={handleChange}
        />
        <label htmlFor="imgPath">Cover Image</label>
        <input
          type="file"
          name="imgPath"
          id="imgPath"
          value={inputs.imgPath}
          onChange={handleChange}
        />
        <div className="actions">
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </>
  );
}
