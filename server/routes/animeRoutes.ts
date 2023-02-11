import express from "express";
import anime from "../controller/anime";
const animeRouter = express.Router();

animeRouter.get("/animeList", anime.getAllAnime);
animeRouter.get("/anime/:id", anime.getAnime);

export default animeRouter;
