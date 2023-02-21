import { AnimeProps, MangaProps } from "../utils/Types";
import "../styles/components/infoCard.css";

export function InfoCard({
  mediaProps,
}: {
  mediaProps: AnimeProps & MangaProps;
}) {
  return (
    <>
      <div>
        <img className="infoImg" src={mediaProps.imgPath} />
      </div>
      <div id="genre" className="genre">
        <strong>Genre:</strong> {mediaProps.genres}
      </div>
      {mediaProps.episodes != undefined && (
        <div>
          <strong>Episodes:</strong> {mediaProps.episodes}
        </div>
      )}
      {mediaProps.volumes != undefined && (
        <div>
          <strong>Volumes:</strong> {mediaProps.volumes}{" "}
        </div>
      )}
    </>
  );
}
