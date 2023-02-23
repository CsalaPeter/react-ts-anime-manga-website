import { AnimeProps, MangaProps } from "../../utils/Types";
import "../../styles/components/infoCard.css";

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
      <div className="info">
        <strong>Genre:</strong> {mediaProps.genres}
      </div>
      {mediaProps.episodes != undefined && (
        <div className="info">
          <strong>Episodes:</strong> {mediaProps.episodes}
        </div>
      )}
      {mediaProps.volumes != undefined && (
        <div className="info">
          <strong>Volumes:</strong> {mediaProps.volumes}
        </div>
      )}
      {mediaProps.duration != undefined && (
        <div className="info">
          <strong>Duration:</strong> {mediaProps.duration + " Min"}
        </div>
      )}
      {mediaProps.chapters != undefined && (
        <div className="info">
          <strong>Chapters:</strong> {mediaProps.chapters}
        </div>
      )}
      {mediaProps.serialization != undefined && (
        <div className="info">
          <strong>Serialization:</strong> {mediaProps.serialization}
        </div>
      )}
      <div className="info">
        <strong>Started:</strong> {mediaProps.started.toString()}
      </div>
      {mediaProps.finished != undefined && (
        <div className="info">
          <strong>Finished:</strong> {mediaProps.finished.toString()}
        </div>
      )}
      {mediaProps.premiered != undefined && (
        <div className="info">
          <strong>Premiered:</strong> {mediaProps.premiered}
        </div>
      )}
      <div className="info">
        <strong>Status:</strong> {mediaProps.status}
      </div>
    </>
  );
}
