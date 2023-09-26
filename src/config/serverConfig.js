import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  PORT: process.env.PORT,
};
