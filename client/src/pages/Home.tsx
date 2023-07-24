import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { AnimeProps, News } from "../utils/Types";
import axios from "axios";

export function Home() {
  const [newsData, setNews] = useState<News[]>([]);
  const [animeData, setAnime] = useState<AnimeProps[]>([]);

  useEffect(() => {
    axios.get("api/newsList").then((response) => setNews(response.data));
  }, []);

  useEffect(() => {
    axios.get("api/seasonalAnime").then((response) => setAnime(response.data));
  }, []);

  return (
    <>
      <h2>News</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
      >
        {newsData.map((data) => (
          <SwiperSlide key={data.newsID}>
            <img className="newsImg" src={data.imgPath} />
            <div className="newsTitle">
              <p>{data.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2>Seasonal Anime</h2>
      <Swiper
        className="seasonalAnime"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
      >
        {animeData.map((anime) => (
          <SwiperSlide className="anime" key={anime.animeID}>
            <article>
              <header>
                <Link
                  to={"/detView"}
                  state={{ id: anime.animeID, media: "anime" }}
                >
                  {anime.animeName}
                </Link>
              </header>
              <img className="animeCover" src={anime.imgPath} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
