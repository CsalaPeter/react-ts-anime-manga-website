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

const getSeasonalAnime = async (_request: Request, response: Response) => {
  let query =
    "SELECT a.animeID, animeName, studio, ratings, DATE_FORMAT(started, '%Y.%m.%d') as started, DATE_FORMAT(finished, '%Y.%m.%d') as finished, status, synopsis, imgPath, GROUP_CONCAT(g.genreName SEPARATOR ', ') as genres FROM anime a " +
    "JOIN animeGenre ag ON a.animeID = ag.animeID " +
    "JOIN genres g ON ag.genreID = g.genreID " +
    "WHERE a.premiered = 'Spring 2023' " +
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

const newAnime = async (request: Request, response: Response) => {
  let anime = request.params;
  let query =
    "INSERT INTO anime( animeID, animeName, studio, episodes, duration, premiered, started, finished, imgPath, status, synopsis) " +
    "VALUES('A21', 'Test', 'test', '20', '20', 'Test', '2020-01-10', '2021-02-20', 'Test', 'Test', 'Test'); ";

  let query2 =
    "INSERT INTO animeGenre(animeID, genreID)" + "VALUES('A21', '4');";

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

export default { getAllAnime, getAnime, getSeasonalAnime };
