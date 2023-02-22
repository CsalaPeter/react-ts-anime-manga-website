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
      {mediaProps.duration != undefined && (
        <div>
          <strong>Duration:</strong> {mediaProps.duration + " Min"}
        </div>
      )}
      {mediaProps.chapters != undefined && (
        <div>
          <strong>Chapters:</strong> {mediaProps.chapters}{" "}
        </div>
      )}
      {mediaProps.studio != undefined && (
        <div>
          <strong>Studio:</strong> {mediaProps.studio}
        </div>
      )}
      {mediaProps.serialization != undefined && (
        <div>
          <strong>Serialization:</strong> {mediaProps.serialization}{" "}
        </div>
      )}
      <div>
        <strong>Started:</strong> {mediaProps.started.toString()}
      </div>
      {mediaProps.finished != undefined && (
        <div>
          <strong>Finished:</strong> {mediaProps.finished.toString()}
        </div>
      )}
      {mediaProps.premiered != undefined && (
        <div>
          <strong>Premiered:</strong> {mediaProps.premiered}
        </div>
      )}
      <div>
        <strong>Status:</strong> {mediaProps.status}
      </div>
    </>
  );
}
