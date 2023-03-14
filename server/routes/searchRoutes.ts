import express from "express";
import search from "../controller/search";

const searchRouter = express.Router();

searchRouter.get("/search/:search", search.search);

export default searchRouter;
