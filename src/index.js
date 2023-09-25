import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";
import dotenv from "dotenv";
import UserRepository from "./repository/user-repository.js";
import To_DoRepository from "./repository/to_do-repository.js";
import To_DoService from "./services/to_do-service.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect();
  console.log("Mongo db connected");

  const to_DoService = new To_DoService();
  // const user = await to_DoService.create("65117bc30ec651171c6c58ef", "runnign");
  // console.log(user);
});
