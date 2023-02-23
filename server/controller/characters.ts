import { Request, Response } from "express";
import { Connection, Query } from "../config/db.config";

const getAllCharacters = async (request: Request, response: Response) => {
  let id = request.params.id;
  let query = `SELECT charID, charName, charRole, img FROM fCharacters WHERE mangaID = "${id}" OR animeID = "${id}"`;

  Connection()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          console.log(results);
          return response.status(200).json(results);
        })
        .catch((error) => {
          console.log(error);
          return response.status(200).json({
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
      return response.status(200).json({
        message: error.message,
        error,
      });
    });
};

export default { getAllCharacters };
