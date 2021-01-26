import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import NamesController from "./src/name/name.controller";

dotenv.config();

const port = 1337;
const app = express();

createConnection()
  .then((conn) => {
    console.log("Connected to database");

    app.get("/", (_req, res) => res.send("Names API"));

    app.get("/names", NamesController.getAll(conn)); // TODO: pagination
    app.get("/names/:id", NamesController.getOne(conn));

    app.listen(port, () => {
      console.log(`Server is running at https://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("[!] Unable to connect to the database");
    console.log(error);
  });
