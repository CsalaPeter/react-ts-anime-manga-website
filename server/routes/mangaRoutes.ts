import express from "express";
import manga from "../controller/manga";
const mangaRouter = express.Router();

mangaRouter.get("/mangaList", manga.getAllManga);
mangaRouter.get("/manga/:id", manga.getManga);

export default mangaRouter;
