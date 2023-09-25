import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import apiRoutes from "./routes/index.js";
import { connect } from "./config/database.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect();
  console.log("Mongo db connected");
});
