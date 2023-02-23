import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/components/charCard.css";
import { Character } from "../../utils/Types";

export function Characters({ id }: { id: string }) {
  const [charData, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get("api/characters/" + id)
      .then((response) => setCharacters(response.data));
  }, []);

  return (
    <div className="charCardCont">
      {charData.map((data) => (
        <div className="charCard" key={data.charID}>
          <img className="charImg" src={data.img} />
          <div className="charInfo">
            <span>{data.charName}</span>
            <br />
            <span>{data.charRole}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
