import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";
import * as dotenv from "dotenv";
const app = express();

app.use(cors());

app.use(express.json());

routes(app);
dotenv.config();
AppDataSource.initialize().then(() => {
  console.log("Connection database ok");
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
