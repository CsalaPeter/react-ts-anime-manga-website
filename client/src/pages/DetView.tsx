import axios from "axios";
import "../styles/pages/detView.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimeProps, MangaProps } from "../utils/Types";
import { InfoCard } from "../components/view_components/InfoCard";
import { DetailHeader } from "../components/view_components/DetailHeader";
import { Characters } from "../components/view_components/Characters";

export function DetView() {
  let { state } = useLocation();
  const [mediaData, setMedia] = useState<(AnimeProps[] & MangaProps[]) | null>(
    null
  );

  useEffect(() => {
    axios
      .get("api/" + state.media + "/" + state.id)
      .then((response) => setMedia(response.data));
  }, []);

  console.log(mediaData);

  return (
    <>
      {mediaData ? (
        <>
          <h1 className="mediaName">
            {mediaData[0].animeName || mediaData[0].mangaName}
          </h1>
          <div className="container">
            <div className="leftSide">
              <InfoCard mediaProps={mediaData[0]} />
            </div>
            <div className="rightSide">
              <DetailHeader mediaProps={mediaData[0]} />
              <h6>Synopsis</h6>
              <div className="synopsis">{mediaData[0].synopsis}</div>
              <h6>Characters</h6>
              <Characters id={mediaData[0].animeID || mediaData[0].mangaID} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
