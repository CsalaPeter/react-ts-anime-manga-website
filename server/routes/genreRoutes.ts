import express from "express";
import genre from "../controller/genre";

const genreRouter = express.Router();

genreRouter.get("/genres", genre.getAllGenre);

export default genreRouter;
