import express, { Express } from "express";
import mangaRouter from "./routes/mangaRoutes";
import animeRouter from "./routes/animeRoutes";

const app: Express = express();
const port = process.env.PORT || 3001;
let routers = [mangaRouter, animeRouter];

app.use(express.json());
app.use("/api", ...routers);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
