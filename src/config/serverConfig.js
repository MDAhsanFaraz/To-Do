import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
};
