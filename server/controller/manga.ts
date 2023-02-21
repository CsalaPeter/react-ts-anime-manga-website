import { Request, Response } from "express";
import { Connection, Query } from "../config/db.config";

const getAllManga = async (_request: Request, response: Response) => {
  let query =
    "SELECT m.mangaID as id, mangaName as name, serialization, ratings, status, synopsis, imgPath, GROUP_CONCAT(g.genreName SEPARATOR ', ') as genres FROM manga m JOIN mangaGenre mg ON m.mangaID = mg.mangaID JOIN genres g ON mg.genreID = g.genreID GROUP BY m.mangaID;";

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

const getManga = async (request: Request, response: Response) => {
  let mangaID = request.params.id;
  let query =
    "SELECT m.mangaID, mangaName, GROUP_CONCAT(g.genreName SEPARATOR ', ') as genres, serialization, volumes, chapters, ratings, status, synopsis, imgPath, DATE_FORMAT(started, '%Y.%m.%d') as started, DATE_FORMAT(finished, '%Y.%m.%d') as finished FROM manga m " +
    "JOIN mangaGenre mg ON m.mangaID = mg.mangaID " +
    "JOIN genres g ON mg.genreID = g.genreID " +
    `WHERE m.mangaID = '${mangaID}'`;

  Connection()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          console.log(result);
          return response.status(200).json(result);
        })
        .catch((error) => {
          console.log(error);
          return response.status(200).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          console.log("Closing connection");
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

export default { getAllManga, getManga };
