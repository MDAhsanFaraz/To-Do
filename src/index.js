import express from "express";
import bodyParser from "body-parser";

import { dbConfig } from "./config/serverConfig.js";

import apiRoutes from "./routes/index.js";
import { connect } from "./config/database.js";
import UserRepository from "./repository/user-repository.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const PORT = dbConfig.PORT;

app.listen(PORT, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect();
  console.log("Mongo db connected");

  const userRepository = new UserRepository();
  const user = await userRepository.getByEmail({ email: "faraz@gmail.com" });
  console.log(user);
});
