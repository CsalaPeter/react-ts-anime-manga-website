import express from "express";
import misc from "../controller/misc";

const miscRouter = express.Router();

miscRouter.get("/genres", misc.getGenres);

export default miscRouter;
