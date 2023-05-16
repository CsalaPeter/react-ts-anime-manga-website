import express from "express";
import news from "../controller/news";

const newsRouter = express.Router();

newsRouter.get("/newsList", news.getAllNews);

export default newsRouter;
