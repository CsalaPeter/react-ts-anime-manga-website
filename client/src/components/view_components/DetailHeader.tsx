import { AnimeProps, MangaProps } from "../../utils/Types";
import "../../styles/components/detalHeader.css";

export function DetailHeader({
  mediaProps,
}: {
  mediaProps: AnimeProps & MangaProps;
}) {
  return (
    <>
      <div className="detailHeader">
        <div className="item rating">{mediaProps.ratings} / 10</div>
        {mediaProps.author != undefined && (
          <div className="item"> Story: {mediaProps.author}</div>
        )}
        {mediaProps.artist != undefined && (
          <div className="item"> Art: {mediaProps.artist}</div>
        )}
        {mediaProps.studio != undefined && (
          <div className="item"> Studio: {mediaProps.studio}</div>
        )}
      </div>
    </>
  );
}
