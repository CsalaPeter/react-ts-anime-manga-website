import axios from "axios";
import "../styles/pages/mediaList.css";
import { useEffect, useState } from "react";
import { Card } from "../components/MediaCard";
import { CardProps } from "../utils/Types";

export function ListMedia({ media }: { media: string }) {
  const [mediaData, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    axios.get("api/" + media).then((response) => setData(response.data));
  }, []);

  return (
    <>
      <div className="mediaList">
        {mediaData.map((data) => (
          <div key={data.id}>
            <Card {...data} />
          </div>
        ))}
      </div>
    </>
  );
}
