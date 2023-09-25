import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";
import dotenv from "dotenv";
import UserRepository from "./repository/user-repository.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect();
  console.log("Mongo db connected");

  const userRepository = new UserRepository();
  const user = await userRepository.get("65116bd6f8d080692c0dcd12");
  console.log(user);
});
