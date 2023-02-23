import express, { Express } from "express";
import mangaRouter from "./routes/mangaRoutes";
import animeRouter from "./routes/animeRoutes";
import characterRouter from "./routes/characterRoutes";

const app: Express = express();
const port = process.env.PORT || 3001;
let routers = [mangaRouter, animeRouter, characterRouter];

app.use(express.json());
app.use("/api", ...routers);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
