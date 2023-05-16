import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "../styles/pages/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { News } from "../utils/Types";
import axios from "axios";

export function Home() {
  const [newsData, setNews] = useState<News[]>([]);

  useEffect(() => {
    axios.get("api/newsList").then((response) => setNews(response.data));
  }, []);

  return (
    <>
      <h2 className="newsH">News</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
    </>
  );
}
