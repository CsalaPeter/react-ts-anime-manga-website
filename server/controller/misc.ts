import { Request, Response } from "express";
import { Connection, Query } from "../config/db.config";

const getGenres = async (_request: Request, response: Response) => {
  let query = "SELECT * from genres;";

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

export default { getGenres };
