import express from "express";
import characters from "../controller/characters";

const characterRouter = express.Router();

characterRouter.get("/characters/:id", characters.getAllCharacters);

export default characterRouter;
