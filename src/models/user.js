import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { dbConfig } from "../config/serverConfig.js";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "To_Do" }],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, dbConfig.JWT_KEY, {
    expiresIn: "1h",
  });
};

const User = mongoose.model("User", userSchema);

export default User;
