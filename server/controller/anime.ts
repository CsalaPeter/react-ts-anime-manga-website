import { Request, Response } from "express";
import { Connection, Query } from "../config/db.config";

const getAllAnime = async (_request: Request, response: Response) => {
  let query =
    "SELECT a.animeID as id, animeName as name, studio, ratings, DATE_FORMAT(started, '%Y.%m.%d') as started, DATE_FORMAT(finished, '%Y.%m.%d') as finished, status, synopsis, imgPath, GROUP_CONCAT(g.genreName SEPARATOR ', ') as genres FROM anime a " +
    "JOIN animeGenre ag ON a.animeID = ag.animeID " +
    "JOIN genres g ON ag.genreID = g.genreID " +
    "GROUP BY a.animeID;";

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

const getAnime = async (request: Request, response: Response) => {
  let id = request.params.id;
  console.log(request.params);
  let query =
    "SELECT a.animeID, animeName, studio, episodes, duration, ratings, DATE_FORMAT(started, '%Y.%m.%d') as started, DATE_FORMAT(finished, '%Y.%m.%d') as finished, status, premiered, synopsis, imgPath, GROUP_CONCAT(g.genreName SEPARATOR ', ') as genres FROM anime a " +
    "JOIN animeGenre ag ON a.animeID = ag.animeID " +
    "JOIN genres g ON ag.genreID = g.genreID " +
    `WHERE a.animeID = "${id}";`;

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

export default { getAllAnime, getAnime };
