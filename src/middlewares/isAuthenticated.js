import jwt from "jsonwebtoken";
import { dbConfig } from "../config/serverConfig.js";
const verifyToken = async (token) => {
  try {
    const response = jwt.verify(token, dbConfig.JWT_KEY);
    return response;
  } catch (error) {
    console.log("Something went wrong in the service layer", error);
    throw error;
  }
};

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const response = verifyToken(token);
    if (!response) {
      throw { error: "Invalid token" };
    }
    next();
  } catch (error) {
    throw error;
  }
};
