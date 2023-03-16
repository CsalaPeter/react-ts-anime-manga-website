import { Request, Response } from "express";
import { Connection, Query } from "../config/db.config";

const search = async (request: Request, response: Response) => {
  let searchTerm = request.params.search;
  let query = `SELECT a.animeID as id, a.animeName as name, a.imgPath, a.ratings, 'anime' as mediaType FROM anime a WHERE a.animeName LIKE '${searchTerm}%' UNION SELECT m.mangaID as id, m.mangaName as name, m.imgPath, m.ratings, 'manga' as mediaType FROM manga m WHERE m.mangaName LIKE '${searchTerm}%'`;

  Connection()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          console.log(results);
          return response.status(200).json(results);
        })
        .catch((error) => {
          console.log(error);
          return response.status(400).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          console.log("Closing connection.");
        });
    })
    .catch((error) => {
      console.log(error);
      return response.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { search };
